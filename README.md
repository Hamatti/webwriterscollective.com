<img src="./themes/webwriterscollective/static/favicons/favicon-96x96.png" width="36"> 

# Web Writers’ Collective

[![Netlify Status](https://api.netlify.com/api/v1/badges/a4daf88e-7a3a-4123-9388-76bb85658863/deploy-status)](https://app.netlify.com/projects/webwriterscollective/deploys)

### Visit the Web Writers’ Collective at [WebWritersCollective.com](https://webwriterscollective.com)

The Web Writers’ Collective (WWC) is an invite-only community for people who write on the web, organised over Signal, with a companion forum on Discourse for discussion and a community zine called *Anthologies*.

Useful pages:

- **About**: who we are, what we do: <https://webwriterscollective.com/about>
- **Editing guide**: how to contribute writing: <https://webwriterscollective.com/editing-guide>
- **Community guidelines / code of conduct**: <https://webwriterscollective.com/community-guidelines>
- **Organisers**: <https://webwriterscollective.com/organisers>
- **Anthologies** (community zine): <https://webwriterscollective.com/anthologies>
- **Noticeboard**: <https://webwriterscollective.com/noticeboard>
- **Forum**: <https://webwriterscollective.com/forum>

Send an email to [contact@webwriterscollective.com](mailto:contact@webwriterscollective.com) to request an invite.

## Tech stack

- **[Hugo](https://gohugo.io/)** static site generator (theme `webwriterscollective` lives in `themes/webwriterscollective`)
- **[Tailwind CSS v4](https://tailwindcss.com/)** for styling, compiled via `@tailwindcss/cli`
- **[Netlify](https://www.netlify.com/)** for hosting/deploys

## Local development

Requirements: [Hugo](https://gohugo.io/installation/) (extended not required, min version `0.146.0`) and [Node.js](https://nodejs.org/).

```sh
# install JS dependencies
npm install

# compile Tailwind CSS and watch for changes
npm run watch

# in a separate terminal, run the Hugo dev server
hugo server
```

To build a production CSS bundle: `npm run prod`. Hugo output is written to `/public` and is git-ignored.

## Project structure

- `content/`: Markdown content (pages, anthologies, noticeboard posts, authors, etc.)
- `themes/webwriterscollective/`: site theme: Hugo layouts, Tailwind CSS source, static assets
- `archetypes/`: Hugo content templates for new content
- `hugo.toml`: site-level Hugo configuration

## Notes for organisers

1. **When a new theme has been decided for *Anthologies*** and once a notice of the new theme has been published, please update `/content/anthologies/_index.md` with a relative link to the notice against the `issue_notice` field. All this does is update a link to the theme on the contribution guidelines but it may do more in future.
2. **To update your organiser box** use the {{ organiser <params> }} shortcode, which takes several parameters specified `"within double inverted commas"`. Use `name`, `pronouns`, `website`, `email`, `contact_page` for a link to your own website’s contact page, `signal_link` if you wish to provide a direct link to your Signal profile, `signal_handle` if you want to just share your handle. For any arbitrary links, e.g. social media profiles, other websites, use `other_label_1` for a label, `other_link_1` for its link and `other_value_1` for its ink text. You can replace `1` with `2` and `3` for a maximum of three arbitrary links.
