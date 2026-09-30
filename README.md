# Homefront website

Static site for Homefront Committed Property Management (Brisbane + Gold Coast). Built from `DESIGN.md`, `PRODUCT.md`, `SEO-keywords.md` and the homepage mock.

## Structure
- `src/lib.mjs` – layout, header, footer, shared blocks, contact details (`SITE`)
- `src/pages.mjs` – every page's content, titles, meta descriptions, FAQs
- `public/` – CSS, JS, images, favicon (copied to `dist/` as is)
- `api/enquiry.js` – Vercel function that emails form submissions via Resend
- `build.mjs` – renders pages to `dist/`, writes `sitemap.xml` and `robots.txt`

## Run locally
```
node build.mjs
npx serve dist
```
No dependencies. Node 18+.

## Deploy on Vercel
1. Import this repo in Vercel. `vercel.json` sets the build (`node build.mjs`) and output (`dist`). No framework preset needed.
2. Add env vars for the forms:
   - `RESEND_API_KEY` – from resend.com (free tier is fine)
   - `ENQUIRY_FROM` – verified sender, e.g. `Homefront website <web@homefrontpm.com.au>` (verify the domain in Resend first)
   - `ENQUIRY_TO` – optional, defaults to archie@homefrontpm.com.au
3. Add the domain `homefrontpm.com.au`. Canonical URLs and the sitemap assume that domain; change `SITE.url` in `src/lib.mjs` if different.

## Before launch: placeholders to replace
Search the code for `[` to find them all.
- Fees: management %, letting weeks, "charged separately" list
- Leased homes: suburb, beds/baths/cars, weekly rent, photos
- Archie: photo, role, surname if wanted
- Response-time promise under the address field
- Suburb lists on the Brisbane and Gold Coast pages
- Licence number and ABN in the footer

## Pages
`/`, `/property-management-brisbane/`, `/property-management-gold-coast/`, `/rental-appraisal/`, `/fees/`, `/switch-property-manager/`, `/leased/`, `/about/`, `/contact/`
