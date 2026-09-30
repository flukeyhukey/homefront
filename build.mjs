// Static build: renders src/pages.mjs into dist/ and copies public/.
import { mkdir, rm, writeFile, cp } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { layout, SITE } from './src/lib.mjs';
import pages from './src/pages.mjs';

const OUT = 'dist';
await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });
await cp('public', OUT, { recursive: true });

const urls = [];
for (const page of pages) {
  const file = page.file || join(page.path, 'index.html');
  const target = join(OUT, file);
  await mkdir(dirname(target), { recursive: true });
  let html = layout(page);
  if (page.noindex) html = html.replace('<meta name="viewport"', '<meta name="robots" content="noindex">\n<meta name="viewport"');
  await writeFile(target, html);
  if (!page.noindex) urls.push(page.path);
}

const today = new Date().toISOString().slice(0, 10);
await writeFile(join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${SITE.url}${u}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`);
await writeFile(join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`);

console.log(`Built ${pages.length} pages to ${OUT}/`);
