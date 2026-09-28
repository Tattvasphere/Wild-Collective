// Search (SEO), answer-engine (AEO) and generative-engine (GEO) metadata.
// Pure data + string builders: used at runtime by App and at build time by the prerender plugin.

import { COMPANY_INFO, GIFT_SETS, PRODUCTS, PRODUCT_CATEGORIES, Product } from './products.ts';

export const SITE_URL = COMPANY_INFO.website.replace(/\/$/, '');
export const DEFAULT_IMAGE = '/images/corporate-gifts/team-appreciation-set.png';

export interface Faq {
  q: string;
  a: string;
}

export interface GiftTier {
  id: string;
  name: string;
  range: string;
  audience: string;
  description: string;
  productIds: string[];
}

// Budget tiers so high, medium and low ticket buyers each find a clear entry point.
export const GIFT_TIERS: GiftTier[] = [
  {
    id: 'volume',
    name: 'Volume giveaways',
    range: 'Under ₹100 per piece',
    audience: 'Conferences, trade shows, college fests, marathons, product launches and mass campaigns',
    description:
      'High-quantity branded giveaways that keep the per-piece cost low: keychains, badges, wrist bands, bookmarks, stickers, fridge magnets, caps, pens and jute pouches.',
    productIds: ['satin-keychain', 'bookmark', 'paper-wrist-band', 'button-badge', 'acrylic-keychain', 'acrylic-fridge-magnet', 'smart-caps', 'metal-pen', 'jute-pouch'],
  },
  {
    id: 'everyday',
    name: 'Everyday employee & client gifts',
    range: '₹100 – ₹500 per piece',
    audience: 'Employee onboarding kits, festive gifting (Diwali, New Year), team offsites, dealer and channel partner gifts',
    description:
      'Useful pieces people keep using: custom T-shirts, collar polos, hoodies, sweatshirts, mugs, UV-printed bottles, diaries and backpacks.',
    productIds: ['round-neck-tshirt', 'collar-tshirt', 'hoodies', 'mug', 'uv-bottle-750ml', 'diary', 'backpack', 'foldable-caps'],
  },
  {
    id: 'premium',
    name: 'Premium & executive gifting',
    range: '₹500 and above',
    audience: 'CXO and VIP gifting, key client appreciation, board members, awards and long-service recognition',
    description:
      'Curated executive gift boxes, laptop bags, trolleys, umbrellas and recognition mementoes, presented and branded for high-value relationships.',
    productIds: ['laptop-bag', 'trolley', 'mementoes', 'umbrella'],
  },
];

export const GENERAL_FAQS: Faq[] = [
  {
    q: 'What does Wild Collective do?',
    a: `Wild Collective is a custom merchandise and corporate gifting manufacturer based in Mysuru, Karnataka, India. We make custom printed and embroidered T-shirts, polo T-shirts, hoodies, caps, mugs, bottles, diaries, pens, bags, keychains, badges and curated corporate gift sets for businesses, institutions, events and individuals.`,
  },
  {
    q: 'Do you take orders from outside India?',
    a: 'Yes. Wild Collective works with businesses in India and internationally. Shipping method, courier cost, import duties and lead time are confirmed with each quotation on WhatsApp or email.',
  },
  {
    q: 'What is the minimum order quantity?',
    a: 'Minimum quantities depend on the product and customization. Some items such as diaries start from 10 pieces; keychains and metal pens from 50; badges and stickers from 50–100; satin keychains from 500. Share your requirement and we will confirm the MOQ.',
  },
  {
    q: 'How much do custom T-shirts cost?',
    a: 'Custom round neck T-shirts start from ₹75, collar (polo) T-shirts from ₹150, sweatshirts from ₹400 and hoodies from ₹450 per piece. The final price depends on fabric, print or embroidery method, number of colours and quantity.',
  },
  {
    q: 'How do I get a quotation?',
    a: `Choose your products, then send the quantity and branding requirement on WhatsApp (${COMPANY_INFO.whatsapp}) or email ${COMPANY_INFO.emails[0]}. The Wild Collective team confirms pricing, options and order details directly.`,
  },
  {
    q: 'Which branding methods do you offer?',
    a: 'Screen printing, DTF and digital printing, embroidery, UV printing, laser engraving and embossing, chosen according to the product, fabric, artwork and finish you want.',
  },
];

export const GIFTING_FAQS: Faq[] = [
  {
    q: 'What are good corporate gift ideas for employees?',
    a: 'Popular employee gifts include custom hoodies and T-shirts, UV-printed bottles, branded mugs, diaries with metal pens, backpacks and complete welcome kits that combine several of these in a branded box.',
  },
  {
    q: 'What are premium corporate gifts for clients and executives?',
    a: 'For key clients and leadership, Wild Collective curates executive gift boxes (diary, pen, bottle, mug, mobile stand and keychain), branded laptop bags, trolleys, umbrellas and custom recognition mementoes from ₹500 upwards.',
  },
  {
    q: 'What are low-cost branded giveaways for events?',
    a: 'For events and bulk campaigns, bookmarks start from ₹4.50, paper wrist bands from ₹5.50, satin keychains from ₹15, button badges from ₹20, acrylic keychains from ₹45 and caps from ₹65 per piece.',
  },
  {
    q: 'Can you make custom corporate gift boxes?',
    a: 'Yes. You can combine any products—bottle, diary, pen, mug, tote, keychain, backpack or cap—into a branded gift set. Use the gift set builder on the Corporate Gifts page and send the combination on WhatsApp for a quotation.',
  },
  {
    q: 'Do you handle bulk corporate gifting orders for large teams?',
    a: 'Yes. Wild Collective produces bulk orders for companies, institutions and events, from small custom runs to large quantities, with direct manufacturer pricing.',
  },
  {
    q: 'Do you ship corporate gifts internationally?',
    a: 'Yes, international corporate gifting orders are accepted. Delivery method, shipping cost, duties and timeline are quoted per order.',
  },
];

export interface PageMeta {
  path: string;
  title: string;
  description: string;
  image: string;
  jsonLd: object[];
  bodyHtml: string;
}

const abs = (path: string) => (path.startsWith('http') ? path : `${SITE_URL}${path}`);

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const priceNumber = (p: string) => Number(p.replace(/[^\d.]/g, ''));

const ORG_ID = `${SITE_URL}/#organization`;

export const organizationJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  '@id': ORG_ID,
  name: COMPANY_INFO.name,
  legalName: COMPANY_INFO.legalName,
  slogan: COMPANY_INFO.tagline,
  description:
    'Custom apparel manufacturer and corporate gifting company in Mysuru, India, serving businesses worldwide with custom T-shirts, hoodies, caps, drinkware, bags, stationery and curated corporate gift sets.',
  url: `${SITE_URL}/`,
  logo: abs('/brand/favicon.png'),
  image: abs(DEFAULT_IMAGE),
  telephone: COMPANY_INFO.phoneRaw,
  email: COMPANY_INFO.emails[0],
  taxID: COMPANY_INFO.gstin,
  priceRange: '₹4.50 – ₹3500',
  currenciesAccepted: 'INR',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No. 19, 2nd Main Road, 15th Cross, 3rd Stage, Gokulam',
    addressLocality: 'Mysuru',
    addressRegion: 'Karnataka',
    postalCode: '570002',
    addressCountry: 'IN',
  },
  areaServed: [{ '@type': 'Country', name: 'India' }, { '@type': 'Place', name: 'Worldwide' }],
  knowsAbout: [
    'Corporate gifting',
    'Custom T-shirt printing',
    'Branded merchandise',
    'Promotional products',
    'Employee welcome kits',
    'Executive gift sets',
    'Embroidery',
    'Screen printing',
    'UV printing',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: COMPANY_INFO.phoneRaw,
    email: COMPANY_INFO.emails[0],
    contactType: 'sales',
    areaServed: 'Worldwide',
    availableLanguage: ['English'],
  },
  sameAs: [COMPANY_INFO.instagram],
});

const websiteJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: COMPANY_INFO.name,
  url: `${SITE_URL}/`,
  publisher: { '@id': ORG_ID },
  inLanguage: 'en',
});

const breadcrumbJsonLd = (items: [string, string][]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [['Home', '/'] as [string, string], ...items].map(([name, path], i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name,
    item: abs(path),
  })),
});

const faqJsonLd = (faqs: Faq[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

const itemListJsonLd = (name: string, products: Product[]) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name,
  itemListElement: products.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: abs(p.href),
    name: p.title,
  })),
});

export const productJsonLd = (p: Product) => {
  const prices = p.prices.map(priceNumber).filter((n) => !Number.isNaN(n));
  const offers = prices.length
    ? {
        '@type': 'AggregateOffer',
        priceCurrency: 'INR',
        lowPrice: Math.min(...prices),
        highPrice: Math.max(...prices),
        offerCount: prices.length,
        availability: 'https://schema.org/InStock',
        url: abs(p.href),
        seller: { '@id': ORG_ID },
        ...(p.moq
          ? { eligibleQuantity: { '@type': 'QuantitativeValue', minValue: Number(p.moq), unitCode: 'C62' } }
          : {}),
      }
    : undefined;
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `Custom ${p.title}`,
    description: productDescription(p),
    image: p.images.map((i) => abs(i.src)),
    url: abs(p.href),
    sku: p.id,
    category: p.category,
    brand: { '@type': 'Brand', name: COMPANY_INFO.name },
    manufacturer: { '@id': ORG_ID },
    ...(p.colours.length ? { color: p.colours.map((c) => c.name).join(', ') } : {}),
    ...(offers ? { offers } : {}),
  };
};

const productDescription = (p: Product) => {
  const price = p.prices.length ? ` Price from ${p.prices[0]} per piece.` : ' Price on request.';
  const moq = p.moq ? ` Minimum order ${p.moq} pieces.` : '';
  return `${p.description} Custom branded ${p.title.toLowerCase()} for corporate gifting, events and bulk orders, made by Wild Collective, Mysuru, India.${price}${moq} Delivered across India and worldwide.`;
};

// ---------- crawlable HTML fallback (replaced by React on load) ----------

const faqHtml = (faqs: Faq[]) =>
  `<section><h2>Frequently asked questions</h2>${faqs
    .map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`)
    .join('')}</section>`;

const productListHtml = (products: Product[]) =>
  `<ul>${products
    .map((p) => `<li><a href="${p.href}">${esc(p.title)}</a> — ${esc(p.price)}${p.moq ? ` (MOQ ${esc(p.moq)})` : ''}</li>`)
    .join('')}</ul>`;

const navHtml = () =>
  `<nav><a href="/">Home</a> · <a href="/products/">Products</a> · <a href="/corporate-gifts/">Corporate Gifts</a> · <a href="/golf-tshirts/">Golf T-Shirts</a> · <a href="/custom-printing/">Custom Printing</a> · <a href="/about/">About</a> · <a href="/contact/">Contact</a></nav>`;

const contactHtml = () =>
  `<footer><p>${esc(COMPANY_INFO.name)} (${esc(COMPANY_INFO.legalName)}) · ${esc(COMPANY_INFO.address)} · Phone/WhatsApp: <a href="tel:${COMPANY_INFO.phoneRaw}">${esc(COMPANY_INFO.phone)}</a> · Email: <a href="mailto:${COMPANY_INFO.emails[0]}">${esc(COMPANY_INFO.emails[0])}</a> · GSTIN ${esc(COMPANY_INFO.gstin)}</p></footer>`;

const tiersHtml = () =>
  `<section><h2>Corporate gifts for every budget</h2>${GIFT_TIERS.map((t) => {
    const products = t.productIds.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean) as Product[];
    return `<h3>${esc(t.name)} — ${esc(t.range)}</h3><p>${esc(t.description)} Ideal for: ${esc(t.audience)}.</p>${productListHtml(products)}`;
  }).join('')}</section>`;

const page = (h1: string, intro: string, ...sections: string[]) =>
  `<div class="prerender">${navHtml()}<main><h1>${esc(h1)}</h1><p>${esc(intro)}</p>${sections.join('')}</main>${contactHtml()}</div>`;

// ---------- per-route metadata ----------

const STATIC_META: Record<string, { title: string; description: string; h1: string; image?: string }> = {
  '/': {
    title: 'Wild Collective | Corporate Gifts, Custom T-Shirts & Branded Merchandise — India & Worldwide',
    description:
      'Corporate gifting and custom merchandise manufacturer in Mysuru, India. Custom T-shirts from ₹75, hoodies, caps, bottles, diaries, bags and executive gift sets for every budget. Bulk orders, delivered across India and worldwide.',
    h1: 'Corporate gifts, custom apparel and branded merchandise',
  },
  '/products/': {
    title: 'Custom Branded Products & Promotional Merchandise Catalogue | Wild Collective',
    description:
      'Browse 40+ customizable products: T-shirts, polos, hoodies, caps, mugs, UV bottles, diaries, pens, keychains, badges, tote and jute bags. Prices from ₹4.50 with bulk and corporate pricing.',
    h1: 'Custom branded products catalogue',
  },
  '/corporate-gifts/': {
    title: 'Corporate Gifting Company — Employee, Client & Executive Gift Sets | Wild Collective',
    description:
      'Custom corporate gifts for every budget: volume giveaways under ₹100, employee gifts from ₹100–₹500 and premium executive gift boxes from ₹500+. Branded, curated and shipped across India and worldwide.',
    h1: 'Corporate gifts for employees, clients and events',
    image: '/images/corporate-gifts/executive-six-piece-set.png',
  },
  '/golf-tshirts/': {
    title: 'Custom Golf T-Shirts & Polo Shirts for Tournaments and Clubs | Wild Collective',
    description:
      'Custom printed golf T-shirts and polos in bold all-over patterns for golf clubs, corporate tournaments and teams. Direct manufacturer pricing from Wild Collective, India.',
    h1: 'Custom golf T-shirts',
  },
  '/custom-printing/': {
    title: 'Custom T-Shirt Printing, Embroidery & Merchandise Printing Guide | Wild Collective',
    description:
      'Screen printing, DTF, embroidery, UV printing and engraving for apparel, caps, drinkware and gifts. Learn how to brief a custom printing order and get a fast quotation.',
    h1: 'Custom printing guide',
  },
  '/about/': {
    title: 'About Wild Collective — Custom Apparel & Corporate Gifting Manufacturer, Mysuru',
    description:
      'Wild Collective (River Tern Corporation) is a custom apparel and corporate gifting manufacturer in Mysuru, Karnataka, serving companies, schools, events and brands across India and worldwide.',
    h1: 'About Wild Collective',
  },
  '/contact/': {
    title: 'Contact Wild Collective — Get a Corporate Gifting & Custom Merchandise Quote',
    description: `Get a quotation for custom apparel, merchandise and corporate gifts. WhatsApp ${COMPANY_INFO.whatsapp}, email ${COMPANY_INFO.emails[0]}. Gokulam, Mysuru, India — serving clients worldwide.`,
    h1: 'Contact Wild Collective',
  },
  '/privacy-policy/': {
    title: 'Privacy Policy | Wild Collective',
    description: 'How Wild Collective collects, uses and protects your information.',
    h1: 'Privacy policy',
  },
  '/terms/': {
    title: 'Terms | Wild Collective',
    description: 'Terms for quotations, orders and use of the Wild Collective website.',
    h1: 'Terms',
  },
};

export function getPageMeta(path: string): PageMeta {
  const parts = path.split('/').filter(Boolean);
  const normalized = parts.length ? `/${parts.join('/')}/` : '/';

  // Product page
  if (parts[0] === 'products' && parts.length === 3) {
    const p = PRODUCTS.find((x) => x.href === normalized);
    if (p) {
      const cat = PRODUCT_CATEGORIES.find((c) => c.slug === p.categorySlug)!;
      const priceText = p.prices.length ? `from ${p.prices[0]}` : 'price on request';
      const related = PRODUCTS.filter((x) => x.categorySlug === p.categorySlug && x.id !== p.id);
      return {
        path: normalized,
        title: `Custom ${p.title} — Bulk & Corporate Orders ${priceText} | Wild Collective`,
        description: productDescription(p).slice(0, 300),
        image: p.image,
        jsonLd: [
          productJsonLd(p),
          breadcrumbJsonLd([
            ['Products', '/products/'],
            [cat.name, `/products/${cat.slug}/`],
            [p.title, p.href],
          ]),
        ],
        bodyHtml: page(
          `Custom ${p.title}`,
          productDescription(p),
          `<p>Price options: ${esc(p.price)}. ${esc(p.priceNote)} ${p.priceDetail ? esc(p.priceDetail) : ''}</p>`,
          p.colours.length ? `<p>Colours: ${esc(p.colours.map((c) => c.name).join(', '))}.</p>` : '',
          related.length ? `<h2>More ${esc(cat.name.toLowerCase())}</h2>${productListHtml(related)}` : '',
        ),
      };
    }
  }

  // Category page
  if (parts[0] === 'products' && parts.length === 2) {
    const cat = PRODUCT_CATEGORIES.find((c) => c.slug === parts[1]);
    if (cat) {
      const products = PRODUCTS.filter((p) => p.categorySlug === cat.slug);
      const prices = products.flatMap((p) => p.prices.map(priceNumber)).filter((n) => !Number.isNaN(n));
      const from = prices.length ? ` from ₹${Math.min(...prices)}` : '';
      return {
        path: normalized,
        title: `Custom ${cat.name}${from} — Branded & Bulk Orders | Wild Collective`,
        description: `${cat.description} ${products.map((p) => p.title).join(', ')}. Custom branding for corporate gifting, events and teams${from}. Shipped across India and worldwide.`,
        image: products[0]?.image ?? DEFAULT_IMAGE,
        jsonLd: [
          itemListJsonLd(`Custom ${cat.name}`, products),
          breadcrumbJsonLd([
            ['Products', '/products/'],
            [cat.name, normalized],
          ]),
        ],
        bodyHtml: page(`Custom ${cat.name}`, cat.description, productListHtml(products)),
      };
    }
  }

  const meta = STATIC_META[normalized] ?? STATIC_META['/'];
  const jsonLd: object[] = [];
  const sections: string[] = [];

  switch (normalized) {
    case '/':
      jsonLd.push(organizationJsonLd(), websiteJsonLd(), faqJsonLd(GENERAL_FAQS));
      sections.push(
        `<h2>Product categories</h2><ul>${PRODUCT_CATEGORIES.map((c) => `<li><a href="/products/${c.slug}/">${esc(c.name)}</a> — ${esc(c.description)}</li>`).join('')}</ul>`,
        tiersHtml(),
        faqHtml(GENERAL_FAQS),
      );
      break;
    case '/products/':
      jsonLd.push(itemListJsonLd('Wild Collective product catalogue', PRODUCTS), breadcrumbJsonLd([['Products', '/products/']]));
      sections.push(
        PRODUCT_CATEGORIES.map(
          (c) => `<h2><a href="/products/${c.slug}/">${esc(c.name)}</a></h2>${productListHtml(PRODUCTS.filter((p) => p.categorySlug === c.slug))}`,
        ).join(''),
      );
      break;
    case '/corporate-gifts/':
      jsonLd.push(
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Corporate gifting',
          name: 'Custom corporate gifting',
          provider: { '@id': ORG_ID },
          areaServed: [{ '@type': 'Country', name: 'India' }, { '@type': 'Place', name: 'Worldwide' }],
          audience: { '@type': 'BusinessAudience', audienceType: 'Companies, institutions, event organisers' },
          offers: GIFT_TIERS.map((t) => ({ '@type': 'Offer', name: t.name, description: `${t.range}. ${t.description}` })),
        },
        faqJsonLd(GIFTING_FAQS),
        breadcrumbJsonLd([['Corporate Gifts', normalized]]),
      );
      sections.push(
        tiersHtml(),
        `<h2>Ready-made gift set ideas</h2><ul>${GIFT_SETS.map((s) => `<li>${esc(s.title)}: ${esc(s.alt)}</li>`).join('')}</ul>`,
        faqHtml(GIFTING_FAQS),
      );
      break;
    default:
      jsonLd.push(breadcrumbJsonLd([[meta.h1, normalized]]));
  }

  return {
    path: normalized,
    title: meta.title,
    description: meta.description,
    image: meta.image ?? DEFAULT_IMAGE,
    jsonLd,
    bodyHtml: page(meta.h1, meta.description, ...sections),
  };
}

export const ALL_PATHS: string[] = [
  ...Object.keys(STATIC_META),
  ...PRODUCT_CATEGORIES.map((c) => `/products/${c.slug}/`),
  ...PRODUCTS.map((p) => p.href),
];

export const absoluteUrl = abs;
export const escapeHtml = esc;
