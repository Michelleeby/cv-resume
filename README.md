# michelleeby.com

Source for [michelleeby.com](https://michelleeby.com), Michelle Byrnes’s professional portfolio. The site presents professional experience first, followed by independent research, open-source engineering, community work, and technical skills.

## Stack

- Astro 5
- Tailwind CSS 4
- Cloudflare Workers

## Development

Install dependencies and start the local development server:

```sh
npm install
npm run dev
```

Create and preview a production build:

```sh
npm run build
npm run preview
```

Run Astro commands directly through the package script:

```sh
npm run astro -- --help
```

## Content

Portfolio content lives under `src/content/`:

- `industryExperience/` contains professional roles.
- `codeSample/` contains independent research and open-source projects.
- `community/` contains volunteer and outreach work.

Each collection is validated in `src/content.config.mjs` and ordered through its `sortOrder` field. Skills from all collections are combined into the generated skills summary.

## Deployment

The Astro Cloudflare adapter builds the site for Cloudflare Workers. Deployment settings live in `wrangler.jsonc`.

This repository contains the public portfolio source. It does not contain private application materials or internal business documentation.
