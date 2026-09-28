// Build-time prerender for search engines, answer engines and AI crawlers (most don't run JS).
// Writes dist/<route>/index.html with per-route meta + JSON-LD + crawlable body,
// plus sitemap.xml, robots.txt, llms.txt and llms-full.txt.

import fs from 'fs';
import path from 'path';
import type { Plugin } from 'vite';
import {
  ALL_PATHS,
  GENERAL_FAQS,
  GIFTING_FAQS,
  GIFT_TIERS,
  SITE_URL,
  absoluteUrl,
  escapeHtml as esc,
  getPageMeta,
} from './src/data/seo.ts';
import { COMPANY_INFO, PRODUCTS, PRODUCT_CATEGORIES } from './src/data/products.ts';

const SEO_BLOCK = /<!-- seo:start -->[\s\S]*<!-- seo:end -->/;

function headFor(p: string) {
  const m = getPageMeta(p);
  const url = absoluteUrl(m.path);
  const image = absoluteUrl(m.image);
  const ld = m.jsonLd
    .map((j) => `<script type="application/ld+json">${JSON.stringify(j).replace(/</g, '\\u003c')}</script>`)
    .join('\n    ');
  return {
    meta: m,
    head: `<!-- seo:start -->
    <title>${esc(m.title)}</title>
    <meta name="description" content="${esc(m.description)}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
    <link rel="canonical" href="${url}" />
    <link rel="alternate" hreflang="en" href="${url}" />
    <link rel="alternate" hreflang="x-default" href="${url}" />
    <meta name="geo.region" content="IN-KA" />
    <meta name="geo.placename" content="Mysuru" />
    <meta property="og:site_name" content="${esc(COMPANY_INFO.name)}" />
    <meta property="og:locale" content="en_IN" />
    <meta property="og:type" content="${m.path.split('/').filter(Boolean).length === 3 ? 'product' : 'website'}" />
    <meta property="og:title" content="${esc(m.title)}" />
    <meta property="og:description" content="${esc(m.description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${image}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(m.title)}" />
    <meta name="twitter:description" content="${esc(m.description)}" />
    <meta name="twitter:image" content="${image}" />
    <link rel="alternate" type="text/plain" title="LLM summary" href="${SITE_URL}/llms.txt" />
    ${ld}
    <!-- seo:end -->`,
  };
}

const today = () => new Date().toISOString().slice(0, 10);

function sitemap() {
  const urls = ALL_PATHS.filter((p) => !['/privacy-policy/', '/terms/'].includes(p)).map((p) => {
    const product = PRODUCTS.find((x) => x.href === p);
    const priority = p === '/' ? '1.0' : ['/corporate-gifts/', '/products/'].includes(p) ? '0.9' : product ? '0.7' : '0.8';
    const images = (product?.images ?? [])
      .map((i) => `<image:image><image:loc>${absoluteUrl(i.src)}</image:loc></image:image>`)
      .join('');
    return `  <url><loc>${absoluteUrl(p)}</loc><lastmod>${today()}</lastmod><priority>${priority}</priority>${images}</url>`;
  });
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.join('\n')}
</urlset>
`;
}

// Explicitly welcome search and AI answer-engine crawlers.
const AI_BOTS = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'anthropic-ai',
  'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot', 'Applebot-Extended', 'Bingbot',
  'DuckAssistBot', 'meta-externalagent', 'Amazonbot', 'CCBot', 'cohere-ai', 'YouBot',
];

const robots = () => `User-agent: *
Allow: /

${AI_BOTS.map((b) => `User-agent: ${b}\nAllow: /`).join('\n\n')}

Sitemap: ${SITE_URL}/sitemap.xml
`;

const faqMd = (faqs: { q: string; a: string }[]) => faqs.map((f) => `### ${f.q}\n${f.a}`).join('\n\n');

function llms(full: boolean) {
  const c = COMPANY_INFO;
  const lines = [
    `# ${c.name}`,
    '',
    `> ${c.name} (${c.legalName}) is a custom apparel manufacturer and corporate gifting company in Mysuru, Karnataka, India, serving businesses, institutions and event organisers across India and worldwide. It makes custom printed and embroidered T-shirts, polos, hoodies, caps, drinkware, bags, stationery, keychains and curated corporate gift sets, from low-cost bulk giveaways (from ₹4.50) to premium executive gifts.`,
    '',
    `- Address: ${c.address}, India`,
    `- Phone / WhatsApp: ${c.phone}`,
    `- Email: ${c.emails.join(', ')}`,
    `- GSTIN: ${c.gstin}`,
    `- Instagram: ${c.instagram}`,
    `- Ordering: no online cart; quotations are confirmed on WhatsApp or email. Prices are in INR.`,
    '',
    '## Key pages',
    '',
    `- [Corporate gifts](${SITE_URL}/corporate-gifts/): employee, client and executive gift sets for every budget`,
    `- [Product catalogue](${SITE_URL}/products/): all customizable products with prices`,
    `- [Custom printing](${SITE_URL}/custom-printing/): printing and embroidery methods`,
    `- [Golf T-shirts](${SITE_URL}/golf-tshirts/): custom golf tournament and club apparel`,
    `- [About](${SITE_URL}/about/)`,
    `- [Contact](${SITE_URL}/contact/)`,
    '',
    '## Corporate gifts by budget',
    '',
    ...GIFT_TIERS.map((t) => `- **${t.name} (${t.range})**: ${t.description} Ideal for ${t.audience}.`),
    '',
    '## Product categories',
    '',
    ...PRODUCT_CATEGORIES.map((cat) => {
      const items = PRODUCTS.filter((p) => p.categorySlug === cat.slug);
      if (!full) return `- [${cat.name}](${SITE_URL}/products/${cat.slug}/): ${cat.description}`;
      return [
        `### ${cat.name}`,
        cat.description,
        '',
        ...items.map((p) => `- [${p.title}](${absoluteUrl(p.href)}): ${p.price}${p.moq ? `, MOQ ${p.moq}` : ''}. ${p.description}`),
        '',
      ].join('\n');
    }),
  ];
  if (full) lines.push('', '## FAQ', '', faqMd(GENERAL_FAQS), '', faqMd(GIFTING_FAQS));
  return lines.join('\n') + '\n';
}

export function seoPrerender(): Plugin {
  let outDir = 'dist';
  return {
    name: 'seo-prerender',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const template = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8');
      if (!SEO_BLOCK.test(template)) throw new Error('seo-prerender: <!-- seo:start/end --> block missing in index.html');

      for (const p of ALL_PATHS) {
        const { meta, head } = headFor(p);
        const html = template
          .replace(SEO_BLOCK, head)
          .replace('<div id="root"></div>', `<div id="root">${meta.bodyHtml}</div>`);
        const file = path.join(outDir, p, 'index.html');
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, html);
      }

      fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap());
      fs.writeFileSync(path.join(outDir, 'robots.txt'), robots());
      fs.writeFileSync(path.join(outDir, 'llms.txt'), llms(false));
      fs.writeFileSync(path.join(outDir, 'llms-full.txt'), llms(true));
    },
  };
}
