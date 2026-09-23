# Joki Holdings website

The Joki Holdings website is a React single-page application built with Vite. It presents the studio's brand identity, print production and web design services, selected work, media archive and project enquiry form.

## Stack

- React 18
- React Router 6
- Vite 5
- Vercel serverless function for `/api/leads`

## Local development

Requirements: Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

To create and inspect a production build:

```bash
npm run build
npm run preview
```

The production output is written to `dist/`.

## Site routes

- `/` — home
- `/design` — brand and graphic design
- `/print` — commercial print and production
- `/web` — web design and digital experiences
- `/work` — filterable portfolio and media archive
- `/about` — studio story and approach
- `/contact` — project enquiry form

Navigation is rendered by React in `src/components/Nav.jsx`. On small screens it becomes an accessible menu with keyboard Escape support, outside-click dismissal and body-scroll locking while open.

## Project structure

```text
src/
  components/   Shared navigation, layout, content and SEO components
  data/         Services, projects, media and site configuration
  pages/        Route-level page components
  styles/       Global responsive styles
  App.jsx       React Router route map
  main.jsx      BrowserRouter and application entry
assets/
  images/       Brand and project imagery copied into the build
  media/        Portfolio images and process videos
  robots.txt    Crawler directives
  sitemap.xml   Public sitemap for the canonical domain
api/
  leads.js      Enquiry endpoint
```

Vite uses `src/` as the application root and `assets/` as its public directory. That is why public URLs such as `/images/...`, `/media/...`, `/robots.txt` and `/sitemap.xml` resolve from the `assets/` folder in this repository.

## Enquiry form

The contact form posts JSON to `/api/leads`. Copy `.env.example` to `.env.local` and provide the email provider values required by `api/leads.js` when testing delivery locally. The honeypot field and server-side validation are kept in place for basic spam protection.

## Deployment

The repository is configured for Vercel:

- Build command: `npm run build`
- Output directory: `dist`
- Client-side routes are rewritten to `index.html` in `vercel.json`
- `/api/leads` remains a serverless function

After deploying, verify the home page, each route above, `/robots.txt`, `/sitemap.xml` and a direct refresh on `/work` or `/contact`. Direct refreshes are important because those pages are handled by React Router rather than separate static HTML files.

## Google Search Console

After the domain is deployed, add `https://www.jokiholdings.com` as a Domain or URL-prefix property in Google Search Console, complete verification, then submit:

```text
https://www.jokiholdings.com/sitemap.xml
```

The sitemap is generated from [`assets/sitemap.xml`](assets/sitemap.xml) and is published at the site root. [`assets/robots.txt`](assets/robots.txt) is also published at `/robots.txt`; Google reads it automatically, so it does not need to be uploaded separately to Search Console. Use URL Inspection to request indexing for the home page and the main service pages after the first deploy.

Route-level titles, descriptions, canonical URLs, Open Graph/Twitter previews, breadcrumb JSON-LD and page JSON-LD are managed by `src/components/Seo.jsx`. The base document also includes the Joki Holdings ProfessionalService and WebSite schema.

## Repository hygiene

Generated output, local environment files, the legacy React/static snapshots and the uncurated `Joki videos and pics/` working folder are ignored by `.gitignore`. Only media referenced by the current React site belongs in `assets/`.
