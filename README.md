[English](README.md) | [Tiếng Việt](README.vi.md)

# FIYH — Fate in Your Hands

A frontend portfolio project for an astrology and tarot website. Built with **Astro, Vue 3, TypeScript, and Tailwind CSS**, it combines server-rendered pages with interactive Vue components for birth information, personalized results, and article browsing.

This repository contains the website frontend. Calculations and content are supplied by an external API.

## Features

- **Birth information form:** date, time, country, and dependent city selection, with input completeness checks and session persistence.
- **Personalized results:** score summaries, astrology details, and monthly energy readings populated from API responses.
- **Responsive layouts:** separate desktop and mobile summary tables, adaptive forms, and article layouts.
- **Article browsing:** nested category routes, breadcrumbs, and structured content rendered through reusable Vue components.
- **Localization:** English and Japanese dictionaries selected through environment configuration.

## Tech stack

| Technology | Role in the project |
| --- | --- |
| Astro 2 | File-based routing, shared layouts, server-side rendering, and Vue islands |
| Vue 3 | Composition API, single-file components, reactive forms, and result interfaces |
| TypeScript 5 | Component props, store declarations, helpers, and import aliases |
| Tailwind CSS 3 | Responsive utilities, custom breakpoints, and domain-specific color palettes |
| Pinia + VueUse | Shared UI state and reactive `sessionStorage` persistence |
| Fetch + Axios | Server-side API requests and browser-side HTTP integration |
| Floating Vue + Vueper Slides | Dropdown menus and carousel components |
| Astro Sitemap | Sitemap generation with additional URLs from a remote JSON source |
| Cloudflare adapter | Deployment target configured for Astro SSR |

Versions refer to the major versions declared in `package.json`.

## Frontend engineering highlights

### Astro pages with Vue islands

Astro owns the routes and page layouts. Interactive sections use `client:load` or `client:only="vue"`, making hydration explicit at the component boundary. Result pages fetch data on the server and pass it into Vue components as props.

### Reactive forms and shared state

Pinia stores manage birth information, menu data, and result state. Vue computed values derive city options, form completeness, and the result URL. VueUse preserves selected values within the browser session, while changing the country resets the city and coordinates.

### Reusable content components

The article renderer maps content block types to Vue components for headings, images, lists, and formatted text. Result views are split into summary, astrology, and energy components, with dedicated table components for desktop and mobile.

### Localization and page metadata

English and Japanese dictionaries are shared between Astro pages and Vue through a custom translation plugin. `PUBLIC_LANG` selects the dictionary; localization is configured per environment. Shared layouts provide page titles, description metadata, and a sitemap link.

## Project structure

```text
src/
  pages/              Astro routes: home, results, articles, and 404
  layouts/            Shared page and article layouts
  components/
    astro/            Page shells and Astro composition components
    vue/              Forms, navigation, result views, and article blocks
  vue/
    stores/           Pinia stores
    plugins/          Translation and HTTP plugins
    main.ts           Vue app initialization
  api/                API modules for discovery, articles, and website data
  locales/            English and Japanese dictionaries
  helpers/            Date, translation, sorting, and data conversion helpers
  _content/           Country lists and domain reference data
public/               Static assets
sitemap/              Remote sitemap URL loader
```

## Run locally

Install dependencies from the repository root:

```sh
npm ci
```

Create a `.env` file with values for your environment:

```dotenv
PUBLIC_LANG=en
PUBLIC_HOST=http://localhost:4321
PUBLIC_API_HOST=https://your-api.example.com
FETCH_API_HOST=https://your-api.example.com
SITEMAP_SOURCE=your-sitemap.json
```

| Variable | Purpose |
| --- | --- |
| `PUBLIC_LANG` | Dictionary key: `en` or `jp` |
| `PUBLIC_HOST` | Website origin used by page metadata and sitemap configuration |
| `PUBLIC_API_HOST` | API origin reachable from the browser |
| `FETCH_API_HOST` | API origin for server-side requests; falls back to `PUBLIC_API_HOST` |
| `SITEMAP_SOURCE` | JSON object key under the S3 URL configured in `sitemap/genera-sitemap-ssr.ts`; its contents must be an array of page URLs |

The configured API must provide discovery results, articles, menus, and city data with the response shapes expected by `src/api/` and the consuming components. Browser requests also require the API to allow the local website origin through CORS.

The Astro configuration fetches the remote sitemap when loaded, so development and builds require a reachable sitemap source. This repository does not include the backend or a standalone mock-data mode. `PUBLIC_*` values are exposed to the browser; use public configuration values only.

Start the development server:

```sh
npm run dev -- --port 4321
```

Open `http://localhost:4321`.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Astro development server |
| `npm run build` | Generate the SSR build in `dist/` using the Cloudflare adapter |
| `npm run preview` | Invoke Astro's preview command; availability depends on adapter support |
| `npm run astro -- --help` | Show Astro CLI options |

## Suggested code tour

1. [Result page](src/pages/result/index.astro) — server-side data fetching and Vue hydration boundaries.
2. [Birth store](src/vue/stores/birth.ts) — reactive dependencies, session persistence, and derived form state.
3. [Birth information form](src/components/vue/common/DateDataForm.vue) — Composition API and reusable select components.
4. [Article renderer](src/components/vue/pages/article/VueArticleContent.vue) — component selection from structured API content.
5. [Vue entrypoint](src/vue/main.ts) — shared Pinia instance, translation plugin, and UI component registration.
