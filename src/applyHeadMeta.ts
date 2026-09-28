import { absoluteUrl, getPageMeta } from './data/seo';

const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
};

const setCanonical = (href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = href;
};

// Keeps title/description/canonical/OG in sync on client-side navigation.
export function applyHeadMeta(pathname: string, notFound: boolean) {
  const m = getPageMeta(pathname);
  const url = absoluteUrl(m.path);
  document.title = notFound ? 'Page not found | Wild Collective' : m.title;
  setMeta('name', 'description', m.description);
  setMeta('name', 'robots', notFound ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1');
  setMeta('property', 'og:title', m.title);
  setMeta('property', 'og:description', m.description);
  setMeta('property', 'og:url', url);
  setMeta('property', 'og:image', absoluteUrl(m.image));
  setCanonical(url);
}
