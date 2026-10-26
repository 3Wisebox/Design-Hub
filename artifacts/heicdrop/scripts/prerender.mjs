import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'vite';

const rootDir = process.cwd();
const outputDir = path.join(rootDir, 'dist/public');
const metadataPath = path.join(rootDir, 'src/seo-metadata.json');
const metadata = JSON.parse(await readFile(metadataPath, 'utf8'));
const siteUrl = getSiteUrl(process.env.VITE_SITE_URL);
const vite = await createServer({
  configFile: path.join(rootDir, 'vite.config.ts'),
  server: { middlewareMode: true },
  appType: 'custom',
});

try {
  const { default: App } = await vite.ssrLoadModule('/src/App.tsx');
  const template = await readFile(path.join(outputDir, 'index.html'), 'utf8');

  for (const page of Object.values(metadata)) {
    const pageMarkup = renderToString(
      React.createElement(App, { staticPath: page.path }),
    );
    const pageHtml = withPageMetadata(
      withRenderedContent(template, pageMarkup),
      page,
      siteUrl,
    );
    const outputPath =
      page.path === '/'
        ? path.join(outputDir, 'index.html')
        : path.join(outputDir, page.path.slice(1), 'index.html');

    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, pageHtml);
  }

  if (siteUrl) {
    await writeFile(path.join(outputDir, 'sitemap.xml'), createSitemap(siteUrl));
    await addSitemapToRobots(path.join(outputDir, 'robots.txt'), siteUrl);
  } else {
    console.warn(
      'VITE_SITE_URL is not set. Static pages were rendered, but canonical URLs and sitemap.xml were omitted until a verified published domain is configured.',
    );
  }
} finally {
  await vite.close();
}

function getSiteUrl(value) {
  if (!value) return undefined;

  let url;
  try {
    url = new URL(value);
  } catch {
    throw new Error('VITE_SITE_URL must be a valid HTTPS origin.');
  }

  if (
    url.protocol !== 'https:' ||
    url.pathname !== '/' ||
    url.search ||
    url.hash
  ) {
    throw new Error(
      'VITE_SITE_URL must be a verified HTTPS origin without a path, query, or fragment.',
    );
  }

  return url.origin;
}

function withRenderedContent(html, markup) {
  const emptyRoot = '<div id="root"></div>';
  if (!html.includes(emptyRoot)) {
    throw new Error(
      'Expected an empty #root in the Vite HTML template before prerendering.',
    );
  }

  return html.replace(emptyRoot, `<div id="root">${markup}</div>`);
}

function withPageMetadata(html, page, baseUrl) {
  let result = html.replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${escapeHtml(page.title)}</title>`,
  );
  result = setMeta(result, 'name', 'description', page.description);
  result = setMeta(result, 'property', 'og:title', page.title);
  result = setMeta(result, 'property', 'og:description', page.description);
  result = setMeta(result, 'property', 'og:type', 'website');
  result = setMeta(result, 'name', 'twitter:title', page.title);
  result = setMeta(result, 'name', 'twitter:description', page.description);

  if (!baseUrl) {
    return result.replace(/<link\s+rel="canonical"[^>]*>\s*/i, '');
  }

  const canonicalUrl = new URL(page.path, `${baseUrl}/`).toString();
  result = setMeta(result, 'property', 'og:url', canonicalUrl);
  const canonicalTag = `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`;
  const canonicalPattern = /<link\s+rel="canonical"[^>]*>/i;

  return canonicalPattern.test(result)
    ? result.replace(canonicalPattern, canonicalTag)
    : result.replace('</head>', `    ${canonicalTag}\n  </head>`);
}

function setMeta(html, attribute, name, content) {
  const tag = `<meta ${attribute}="${escapeHtml(name)}" content="${escapeHtml(content)}" />`;
  const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(
    `<meta\\s+[^>]*${attribute}="${escapedName}"[^>]*>`,
    'i',
  );

  return pattern.test(html)
    ? html.replace(pattern, () => tag)
    : html.replace('</head>', `    ${tag}\n  </head>`);
}

function createSitemap(baseUrl) {
  const urls = Object.values(metadata)
    .map(({ path: pagePath }) => {
      const url = new URL(pagePath, `${baseUrl}/`).toString();
      return `  <url>\n    <loc>${escapeHtml(url)}</loc>\n  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

async function addSitemapToRobots(robotsPath, baseUrl) {
  const content = await readFile(robotsPath, 'utf8');
  const withoutOldSitemap = content.replace(/^Sitemap:.*\r?\n?/gim, '').trimEnd();
  await writeFile(
    robotsPath,
    `${withoutOldSitemap}\nSitemap: ${baseUrl}/sitemap.xml\n`,
  );
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}
