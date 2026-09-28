import React from 'react';
import { PRODUCTS, PRODUCT_CATEGORIES, Product, QUOTATION_NOTE } from '../data/products';
import { ProductCard } from './ProductCard';
import { CtaBand } from './CtaBand';

interface ProductCatalogProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onOpenProductDetail: (product: Product) => void;
  onBuildQuote: () => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  selectedCategory,
  onSelectCategory,
  onOpenProductDetail,
  onBuildQuote,
}) => {
  const category = PRODUCT_CATEGORIES.find((c) => c.name === selectedCategory);
  const products = category ? PRODUCTS.filter((p) => p.categorySlug === category.slug) : PRODUCTS;
  const filters = [{ name: 'All Products', shortLabel: 'All' }, ...PRODUCT_CATEGORIES];

  return (
    <>
      <section id="catalogue" className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="max-w-2xl">
              <h1 className="font-display text-4xl sm:text-5xl font-black text-[#2f2f2f] tracking-tight">
                {category ? category.name : 'Products made to put your brand everywhere.'}
              </h1>
              <p className="text-base sm:text-lg text-[#666666] mt-3">
                {category
                  ? category.description
                  : 'Browse custom apparel, merchandise, gifts and branded essentials for teams, events and businesses.'}
              </p>
            </div>
            <p className="shrink-0 flex items-baseline gap-2">
              <span className="font-display text-5xl font-black text-[#2f2f2f]">{products.length}</span>
              <span className="text-sm text-[#666666]">
                {category
                  ? `catalogue ${products.length === 1 ? 'option' : 'options'}`
                  : 'catalogue options · direct WhatsApp quotation'}
              </span>
            </p>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 border-b border-[#ececec]">
            {filters.map((f) => {
              const isSelected = selectedCategory === f.name;
              return (
                <button
                  key={f.name}
                  onClick={() => onSelectCategory(f.name)}
                  className={`text-sm font-bold uppercase tracking-wide px-3.5 py-2 rounded-sm whitespace-nowrap shrink-0 transition-colors ${
                    isSelected ? 'bg-[#0a0a0a] text-white' : 'text-[#2f2f2f] hover:bg-[#0a0a0a] hover:text-white'
                  }`}
                >
                  {f.shortLabel}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} onOpen={onOpenProductDetail} />
            ))}
          </div>

          <p className="text-xs text-[#666666] mt-8 max-w-3xl">{QUOTATION_NOTE}</p>
        </div>
      </section>

      {category ? (
        <CtaBand
          title={`Need custom ${category.ctaNoun}?`}
          copy="Share your quantity, branding requirement and preferred option. We’ll prepare the conversation for a clear quotation."
          onBuildQuote={onBuildQuote}
        />
      ) : (
        <CtaBand
          title="Found a starting point?"
          copy="Share the product, estimated quantity and branding requirement. Wild Collective will help confirm the right option and final quotation."
          onBuildQuote={onBuildQuote}
        />
      )}
    </>
  );
};
