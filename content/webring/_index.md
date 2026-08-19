---
title: "WWC Webring"
toc: true
draft: false
---

This page is for existing WWC members to learn more about joining our webring or add links to their website. You can also view our existing webring members below.

{{< infobox type="warn" >}}

It is essential that you have [links to the WWC Webring](#add-links-to-your-website) on your site in order to participate in it. Without this, the webring will break. If you notice a break in our webring, please [report the website to us](mailto:admin@webwriterscollective?subject=%5BWWC%5D%20Broken%20webring&body=Hi%2C%0A%0AI%20noticed%20this%20website%20no%20longer%20carries%20links%20to%20your%20webring%3A%0A%0A%3Clink%20to%20the%20website%20here%3E%0A%0ABest%2C%0A%3CYour%20name%3E).

{{< /infobox >}}

# Join this webring

If you are an existing WWC member, you will need the following details to join our webring:

* Your forum username
* Your website
* Your name

There are two other prerequisites:

* You must be a member of WWC and have an account on our forum 
* We will need to verify that you [have links to our webring](#add-links-to-your-website) on your site

## Method 1: Add yourself

You can [submit a pull request](https://github.com/WebWritersCollective/webwriterscollective.com) on our repo after adding yourself to the [existing webring](#) with the following code:

```
{
  "user": "<forum username>",
  "name": "<Name>",
  "url": "<https://yourdomain.tld>",
  "webring": {
    "enabled": true
  }
}
```

The separate `webring` section exists for extensibility, should we use this list of members for other purposes in future. Set the `enabled` flag to true. Once your pull request is merged your name will [appear below](#existing-webring-members) confirming you are part of the WWC Webring.

## Method 2: Let us know

If you are unfamiliar with git or otherwise prefer not to add yourself, please get in touch with one of [our organisers](/organisers) and express your interest, sharing the three bits of information listed above. We will add you to the webring as soon as possible.

# Add links to your website

Use the following code to add links to the WWC Webring on your site:

<button
    type="button"
    onclick="
        const text = document.getElementById('webring-code').textContent;
        navigator.clipboard.writeText(text)
            .then(() => this.textContent = 'Copied')
            .catch(error => console.error(error));
    ">
    Copy code
</button>

<pre id="webring-code"><code>&lt;a href="https://webwriterscollective.com/webring/previous/{domain.tld}/"&gt;Previous&lt;/a&gt;
&lt;a href="https://webwriterscollective.com/webring/"&gt;WWC Webring&lt;/a&gt;
&lt;a href="https://webwriterscollective.com/webring/next/{domain.tld}/"&gt;Next&lt;/a&gt;</code></pre>

Please ensure you update `{domain.tld}` (without braces) to match your website’s domain. The actual page on your website to which this webring will bring visitors may be different as set in [the `json` file](#) in our repo.

If you are already part of the webring, you can grab your code again or use one of our buttons found against [your name below](#existing-webring-members). We request that you download and host the button images yourself instead of hotlinking to us.

***

# Existing webring members {.text-accent}
