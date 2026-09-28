import { useEffect, useState } from 'react';
import { PRODUCTS, PRODUCT_CATEGORIES } from './data/products';

// URL structure mirrors the product portal: /about/, /products/<category>/<product>/ …
export type Route =
  | { page: 'home' }
  | { page: 'products'; category?: string }
  | { page: 'product'; productId: string }
  | { page: 'golf' | 'custom-printing' | 'corporate-gifts' | 'about' | 'contact' | 'privacy-policy' | 'terms' }
  | { page: 'not-found' };

const STATIC_PAGES: Record<string, Route['page']> = {
  'golf-tshirts': 'golf',
  'custom-printing': 'custom-printing',
  'corporate-gifts': 'corporate-gifts',
  about: 'about',
  contact: 'contact',
  'privacy-policy': 'privacy-policy',
  terms: 'terms',
};

export function parseRoute(pathname: string): Route {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length === 0) return { page: 'home' };

  if (parts[0] === 'products') {
    if (parts.length === 1) return { page: 'products' };
    const category = PRODUCT_CATEGORIES.find((c) => c.slug === parts[1]);
    if (!category) return { page: 'not-found' };
    if (parts.length === 2) return { page: 'products', category: category.slug };
    const product = PRODUCTS.find((p) => p.categorySlug === category.slug && p.id === parts[2]);
    return product && parts.length === 3 ? { page: 'product', productId: product.id } : { page: 'not-found' };
  }

  const page = parts.length === 1 ? STATIC_PAGES[parts[0]] : undefined;
  return page ? ({ page } as Route) : { page: 'not-found' };
}

export function routePath(route: Route): string {
  switch (route.page) {
    case 'home':
      return '/';
    case 'products':
      return route.category ? `/products/${route.category}/` : '/products/';
    case 'product':
      return PRODUCTS.find((p) => p.id === route.productId)?.href ?? '/products/';
    case 'not-found':
      return '/';
    default: {
      const slug = Object.keys(STATIC_PAGES).find((k) => STATIC_PAGES[k] === route.page);
      return `/${slug}/`;
    }
  }
}

export function useRoute() {
  const [route, setRoute] = useState<Route>(() => parseRoute(window.location.pathname));

  useEffect(() => {
    const onPop = () => setRoute(parseRoute(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = (next: Route) => {
    const path = routePath(next);
    if (path !== window.location.pathname) window.history.pushState(null, '', path);
    setRoute(next);
    window.scrollTo({ top: 0 });
  };

  return [route, navigate] as const;
}
