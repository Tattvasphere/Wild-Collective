/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { CategoryNav } from './components/CategoryNav';
import { FeaturedProducts, GiftingTeaser, ProcessSteps } from './components/HomeSections';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductPage } from './components/ProductPage';
import { GolfTShirtsSection } from './components/GolfTShirtsSection';
import { CorporateGiftBuilder } from './components/CorporateGiftBuilder';
import { CustomPrintingGuide } from './components/CustomPrintingGuide';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { LegalPage } from './components/LegalPage';
import { CtaBand } from './components/CtaBand';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { COMPANY_INFO, PRODUCTS, PRODUCT_CATEGORIES, Product } from './data/products';
import { PRIVACY_POLICY, TERMS } from './data/legal';
import { Route, useRoute } from './router';
import { applyHeadMeta } from './applyHeadMeta';
import { FaqSection } from './components/FaqSection';
import { GENERAL_FAQS } from './data/seo';

export default function App() {
  const [route, navigate] = useRoute();

  const categoryName = route.page === 'products' && route.category
    ? PRODUCT_CATEGORIES.find((c) => c.slug === route.category)?.name
    : undefined;
  const product = route.page === 'product' ? PRODUCTS.find((p) => p.id === route.productId) : undefined;

  useEffect(() => {
    applyHeadMeta(window.location.pathname, route.page === 'not-found');
  }, [route]);

  const goTo = (page: string) => navigate({ page } as Route);
  const showCategory = (name: string) => {
    const slug = PRODUCT_CATEGORIES.find((c) => c.name === name)?.slug;
    navigate({ page: 'products', category: slug });
  };
  const showAllProducts = () => navigate({ page: 'products' });
  const openProduct = (p: Product) => navigate({ page: 'product', productId: p.id });
  const buildQuote = () => goTo('contact');

  const activeTab = route.page === 'product' ? 'products' : route.page;

  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff] text-[#2f2f2f] selection:bg-[#a58c6d] selection:text-white">
      <Navbar
        activeTab={activeTab}
        setActiveTab={goTo}
        onSelectProduct={(id) => navigate({ page: 'product', productId: id })}
      />

      <main className="flex-1">
        {(route.page === 'home' || route.page === 'not-found') && (
          <>
            <Hero onExploreProducts={showAllProducts} />
            <MarqueeTicker />
            <CategoryNav onSelectCategory={showCategory} onExploreFullCatalogue={showAllProducts} />
            <FeaturedProducts onOpenProductDetail={openProduct} />
            <ProcessSteps />
            <GiftingTeaser onPlan={() => goTo('corporate-gifts')} />
            <FaqSection faqs={GENERAL_FAQS} />
            <CtaBand
              title="Ready to make your brand tangible?"
              copy="Tell us what you need, how many, and how you want it customized. We’ll continue the quotation on WhatsApp."
              onBuildQuote={buildQuote}
            />
          </>
        )}

        {route.page === 'products' && (
          <ProductCatalog
            selectedCategory={categoryName ?? 'All Products'}
            onSelectCategory={(name) => (name === 'All Products' ? showAllProducts() : showCategory(name))}
            onOpenProductDetail={openProduct}
            onBuildQuote={buildQuote}
          />
        )}

        {product && (
          <ProductPage
            product={product}
            onBack={() => navigate({ page: 'products', category: product.categorySlug })}
            onOpenProduct={openProduct}
            onBuildQuote={buildQuote}
          />
        )}

        {route.page === 'golf' && <GolfTShirtsSection onExploreApparel={() => showCategory('Apparel')} />}

        {route.page === 'custom-printing' && (
          <CustomPrintingGuide onExploreCatalogue={showAllProducts} onBuildQuote={buildQuote} />
        )}

        {route.page === 'corporate-gifts' && (
          <CorporateGiftBuilder onOpenProductDetail={openProduct} onBuildQuote={buildQuote} />
        )}

        {route.page === 'about' && (
          <AboutSection onExploreApparel={() => showCategory('Apparel')} onBuildQuote={buildQuote} />
        )}

        {route.page === 'contact' && <ContactSection />}

        {route.page === 'privacy-policy' && <LegalPage doc={PRIVACY_POLICY} contactEmail={COMPANY_INFO.emails[0]} />}

        {route.page === 'terms' && <LegalPage doc={TERMS} contactEmail={COMPANY_INFO.emails[0]} />}
      </main>

      <FloatingWhatsApp />

      <Footer onNavigate={goTo} onSelectCategory={showCategory} />
    </div>
  );
}
