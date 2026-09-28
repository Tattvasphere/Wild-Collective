import React from 'react';
import { PRODUCTS, Product } from '../data/products';
import { GIFT_TIERS } from '../data/seo';

export const GiftTiers: React.FC<{ onOpenProductDetail: (p: Product) => void }> = ({ onOpenProductDetail }) => (
  <section className="py-14 sm:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="font-display text-3xl sm:text-4xl font-black text-[#2f2f2f] tracking-tight">Corporate gifts for every budget.</h2>
      <p className="text-base text-[#666666] mt-3 max-w-2xl">
        From bulk event giveaways to executive gift boxes—for teams in India and clients worldwide.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
        {GIFT_TIERS.map((tier) => {
          const products = tier.productIds.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean) as Product[];
          return (
            <article key={tier.id} className="wc-card rounded-lg p-6 flex flex-col">
              <p className="text-xs font-bold uppercase tracking-widest text-[#a58c6d]">{tier.range}</p>
              <h3 className="font-display text-2xl font-bold text-[#2f2f2f] mt-2">{tier.name}</h3>
              <p className="text-sm text-[#666666] mt-3 leading-relaxed">{tier.description}</p>
              <p className="text-sm text-[#2f2f2f] mt-3 leading-relaxed">
                <span className="font-bold">Ideal for:</span> {tier.audience}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {products.map((p) => (
                  <li key={p.id}>
                    <a
                      href={p.href}
                      onClick={(e) => {
                        e.preventDefault();
                        onOpenProductDetail(p);
                      }}
                      className="inline-block rounded-sm border border-[#e4e0da] px-3 py-1.5 text-xs font-semibold text-[#2f2f2f] hover:border-[#a58c6d]"
                    >
                      {p.title} · {p.prices[0] ?? 'On request'}
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);
