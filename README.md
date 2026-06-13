# TopHDMovies

A full-stack movie information & download website built with **Next.js 14 (App Router)**,
**Tailwind CSS**, the **Outfit** Google font and a **MySQL** database (designed for Hostinger
Business plan). All content is entered manually through the admin dashboard — there is no external
movie API.

## Features

- **Public site**: cinematic dark theme, hero carousel, trending/latest rows, category tabs,
  top-rated grid, featured movie of the week, FAQ accordion, rich movie detail pages with
  Overview/Trailer/Download tabs, browse with filters & pagination, category pages, live search,
  and full legal pages (About, Privacy, DMCA, Disclaimer, Contact).
- **Admin dashboard** (`/admin`): login with env credentials & signed HTTP-only cookie, stats,
  full movie manager (add/edit/delete with every field), category manager, contact messages inbox,
  and site settings.
- **SEO**: per-movie `generateMetadata` (`[Title] Movie Download in HD 480p 720p 1080p | Site`),
  Open Graph images, JSON-LD `Movie` schema, auto `sitemap.xml`, `robots.txt`, canonical URLs,
  breadcrumbs and a server-side page-view counter.

## Tech

- Next.js 14, React 18, TypeScript
- Tailwind CSS (custom design tokens)
- `mysql2` with a connection pool — raw SQL, no ORM

## Getting started (local)

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment** — copy `.env.example` to `.env.local` and fill in your MySQL details:
   ```bash
   cp .env.example .env.local
   ```
   Generate a session secret:
   ```bash
   node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"
   ```

3. **Create the database, tables and sample movies**
   ```bash
   npm run db:setup
   ```
   This runs `db/schema.sql` then `db/seed.sql` (categories, genres, settings and 6 demo movies).

4. **Run the dev server**
   ```bash
   npm run dev
   ```
   - Public site: http://localhost:3000
   - Admin: http://localhost:3000/admin/login (default `admin` / `admin12345` — change in `.env.local`)

## Database schema

Tables: `movies`, `categories`, `genres`, `movie_categories`, `movie_genres`, `movie_cast`,
`page_views`, `contact_messages`, `settings`. See `db/schema.sql`.

## Deploying to Hostinger (Business plan, Node.js)

1. Push the code and run `npm install` on the server (Node 18+).
2. In **hPanel → Databases**, create a MySQL database and user, then import `db/schema.sql` and
   `db/seed.sql` via phpMyAdmin (or run `npm run db:setup`).
3. In **hPanel → Node.js app**, set:
   - Build command: `npm run build`
   - Start command: `npm start`
   - Environment variables: all keys from `.env.example`
     (`DB_HOST`, `DB_USER`, `DB_PASS`, `DB_NAME`, `ADMIN_USERNAME`, `ADMIN_PASSWORD`,
     `ADMIN_SESSION_SECRET`, `NEXT_PUBLIC_SITE_NAME`, `NEXT_PUBLIC_SITE_URL`).
4. Enable free SSL and connect your domain via Hostinger nameservers.

## Folder structure

```
app/(public)        Public-facing pages
app/admin           Admin dashboard (login + protected (panel) group)
app/api             Route handlers (login, logout, contact, search)
components          Shared UI; components/admin for dashboard-only UI
lib                 db pool, auth, queries, server actions, utils, types
db                  schema.sql + seed.sql
scripts             setup-db.mjs
```

## Notes

- The sample movie titles, descriptions and poster images (picsum.photos) are demo placeholders.
  Replace them via the admin dashboard. Download URLs in the seed point to `example.com`.
- The site never hosts files; download links point to external URLs entered by the admin.
