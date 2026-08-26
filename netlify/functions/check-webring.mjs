import { readFile } from "node:fs/promises";

const TIMEOUT = 10_000;
const CONCURRENCY = 10;

async function checkMember(member) {
  let domain;

  try {
    domain = new URL(member.url).hostname;

    const response = await fetch(member.url, {
      headers: {
        "User-Agent": "WWC-Webring-Checker/1.0"
      },
      signal: AbortSignal.timeout(TIMEOUT),
      redirect: "follow"
    });

    if (!response.ok) {
      return {
        domain,
        result: `ERROR: HTTP ${response.status}`
      };
    }

    const html = await response.text();

    const links = [
      ...html.matchAll(
        /<a\b[^>]*\bhref\s*=\s*["']([^"']+)["']/gi
      )
    ].map(match => match[1]);

    const hasWebring = links.some(href => {
      try {
        const url = new URL(href, response.url);

        return (
          url.pathname.startsWith("/webring/previous/") ||
          url.pathname.startsWith("/webring/next/") ||
          url.pathname.startsWith("/webring/random/") ||
          url.pathname === "/webring/" ||
          url.pathname === "/webring"
        );
      } catch {
        return false;
      }
    });

    return {
      domain,
      result: hasWebring ? "YES" : "NO"
    };
  } catch (error) {
    return {
      domain: domain || member.url,
      result: `ERROR: ${error.message}`
    };
  }
}

async function runWithConcurrency(items, limit, callback) {
  const results = new Array(items.length);
  let nextIndex = 0;

  async function worker() {
    while (true) {
      const index = nextIndex++;

      if (index >= items.length) {
        return;
      }

      results[index] = await callback(items[index]);
    }
  }

  await Promise.all(
    Array.from(
      { length: Math.min(limit, items.length) },
      worker
    )
  );

  return results;
}

export default async () => {
  const file = await readFile(
    new URL("../../data/members.json", import.meta.url),
    "utf8"
  );

  const data = JSON.parse(file);

  const members = data.members.filter(
    member => member.webring?.enabled === true
  );

  const results = await runWithConcurrency(
    members,
    CONCURRENCY,
    checkMember
  );

  const longestDomain = Math.max(
    ...results.map(result => result.domain.length)
  );

  for (const result of results) {
    console.log(
      `${result.domain.padEnd(longestDomain)}  ${result.result}`
    );
  }
};

export const config = {
  schedule: "0 7 1,16 * *"
};
