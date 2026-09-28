import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FEATURED_PRODUCT_IDS, PROCESS_STEPS, PRODUCTS, Product } from '../data/products';
import { ProductCard } from './ProductCard';
import { ProductConstellation } from './ProductConstellation';

export const FeaturedProducts: React.FC<{ onOpenProductDetail: (p: Product) => void }> = ({ onOpenProductDetail }) => {
  const featured = FEATURED_PRODUCT_IDS.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean) as Product[];

  return (
    <section className="py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#2f2f2f] tracking-tight">
              Start with an everyday favourite.
            </h2>
            <p className="text-base text-[#666666] mt-2">
              Useful pieces, clear pricing, and a direct route to the right quotation.
            </p>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#8f8f8f]">Swipe or scroll to explore</p>
        </div>

        <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} onOpen={onOpenProductDetail} className="snap-start shrink-0 w-[72vw] sm:w-[300px]" />
          ))}
        </div>
      </div>
    </section>
  );
};

export const ProcessSteps: React.FC = () => (
  <section className="bg-[#2f2f2f] text-white py-16 sm:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
      <div className="lg:col-span-5">
        <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white">From idea to order discussion.</h2>
        <p className="mt-5 text-xs font-bold uppercase tracking-widest text-[#d9bf94]">A simple human process</p>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-white/65">
          No cart. No confusing checkout. Just the right product information and a direct conversation.
        </p>
      </div>
      <div className="lg:col-span-7 divide-y divide-white/15 border-y border-white/15">
        {PROCESS_STEPS.map((step, i) => (
          <div key={step.title} className="flex gap-6 py-7">
            <span className="font-display text-sm font-bold text-[#d9bf94] pt-2">0{i + 1}</span>
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">{step.title}</h3>
              <p className="mt-3 max-w-xl text-lg leading-relaxed text-white/65">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const GiftSetVisual: React.FC = () => <ProductConstellation variant="gifts" />;

export const GiftingTeaser: React.FC<{ onPlan: () => void }> = ({ onPlan }) => (
  <section className="py-16 sm:py-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="font-display text-3xl sm:text-5xl font-black text-[#2f2f2f] tracking-tight">
          Gift combinations built around useful everyday pieces.
        </h2>
        <p className="mt-5 text-xs font-bold uppercase tracking-widest text-[#a58c6d]">Corporate gifting</p>
        <p className="mt-6 text-lg text-[#666666] leading-relaxed">
          Combine a bottle, diary, pen, mug, tote, keychain, backpack or cap into a considered gift set. Pick the starting pieces and let Wild Collective help shape the final requirement.
        </p>
        <button
          onClick={onPlan}
          className="mt-8 px-6 py-3.5 rounded-sm bg-[#2f2f2f] hover:bg-[#0a0a0a] text-white font-bold text-sm uppercase tracking-wide inline-flex items-center gap-2 transition-colors"
        >
          <span>Plan your corporate gift set</span>
          <ArrowRight size={18} />
        </button>
      </div>
      <GiftSetVisual />
    </div>
  </section>
);
