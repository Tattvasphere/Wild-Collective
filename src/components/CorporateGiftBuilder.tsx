import React, { useState } from 'react';
import { ArrowRight, Check, MessageCircle } from 'lucide-react';
import {
  GIFT_OPTIONS,
  GIFT_PAIRING_PRODUCT_IDS,
  GIFT_SETS,
  PRODUCTS,
  Product,
  whatsappGiftSet,
} from '../data/products';
import { ProductCard } from './ProductCard';
import { CtaBand } from './CtaBand';
import { GiftSetVisual } from './HomeSections';
import { FaqSection } from './FaqSection';
import { GiftTiers } from './GiftTiers';
import { GIFTING_FAQS } from '../data/seo';

interface CorporateGiftBuilderProps {
  onOpenProductDetail: (product: Product) => void;
  onBuildQuote: () => void;
}

const GIFT_STEPS = [
  ['Choose', 'Select the pieces'],
  ['Share', 'Add quantity and branding'],
  ['Quote', 'Confirm options on WhatsApp'],
  ['Finalize', 'Complete the order discussion'],
];

export const CorporateGiftBuilder: React.FC<CorporateGiftBuilderProps> = ({ onOpenProductDetail, onBuildQuote }) => {
  const [selected, setSelected] = useState<string[]>(['UV Bottle', 'Diary', 'Metal Pen']);
  const pairings = GIFT_PAIRING_PRODUCT_IDS.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean) as Product[];

  const toggle = (item: string) =>
    setSelected((s) => (s.includes(item) ? s.filter((i) => i !== item) : [...s, item]));

  return (
    <>
      {/* Hero */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display text-4xl sm:text-6xl font-black text-[#2f2f2f] tracking-tight">
              Corporate gifts that keep your brand around.
            </h1>
            <p className="text-lg text-[#666666] mt-5 max-w-xl leading-relaxed">
              Curate useful, custom branded pieces for teams, events and business relationships—then send the combination directly to Wild Collective for quotation.
            </p>
          </div>
          <div className="bg-[#f5f3ef] rounded-lg p-8">
            <h2 className="font-display text-2xl font-black text-[#2f2f2f]">One gift. Many useful moments.</h2>
            <p className="text-xs font-bold uppercase tracking-widest text-[#a58c6d] mt-3">Build the combination</p>
            <p className="text-[#666666] mt-4 leading-relaxed">
              Start with pieces that fit the audience and occasion. A desk set can pair a diary and pen. A daily-use kit can bring together a bottle, tote and keychain. Wild Collective will confirm product options and final pricing with you.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <GiftSetVisual />
        </div>
      </section>

      <GiftTiers onOpenProductDetail={onOpenProductDetail} />

      {/* Gift sets gallery */}
      <section className="py-14 sm:py-20 bg-[#faf9f7] border-y border-[#ececec]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-black text-[#2f2f2f]">Gift sets shaped around the occasion.</h2>
          <p className="text-base text-[#666666] mt-3 max-w-2xl">
            Use these combinations as a starting point. Products, branding and presentation can be discussed around your requirement.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {GIFT_SETS.map((set) => (
              <figure key={set.title} className="wc-card rounded-lg overflow-hidden">
                <div className="aspect-[4/3] bg-white overflow-hidden">
                  <img src={set.image} alt={set.alt} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <figcaption className="p-5 font-display text-lg font-bold text-[#2f2f2f]">{set.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Selector */}
      <section id="corporate-gifts" className="py-14 sm:py-20 bg-[#2f2f2f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-black text-white">Pick the starting pieces.</h2>
          <p className="text-white/70 mt-3 text-lg">
            This is a selection tool, not a cart. Choose what belongs in the set and send the combination to WhatsApp.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
            {GIFT_OPTIONS.map((item) => {
              const isSelected = selected.includes(item);
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => toggle(item)}
                  aria-pressed={isSelected}
                  className={`text-left p-5 rounded-md border transition-colors ${
                    isSelected ? 'bg-white text-[#2f2f2f] border-white' : 'border-white/25 text-white hover:border-white/60'
                  }`}
                >
                  <span className={`block text-[11px] font-bold uppercase tracking-widest ${isSelected ? 'text-[#a58c6d]' : 'text-white/60'}`}>
                    {isSelected ? 'Selected' : 'Add to set'}
                  </span>
                  <span className="font-display flex items-end justify-between gap-3 text-xl sm:text-2xl font-bold mt-2">
                    {item}
                    {isSelected && <Check size={20} />}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href={selected.length ? whatsappGiftSet(selected) : undefined}
              aria-disabled={selected.length === 0}
              target="_blank"
              rel="noreferrer"
              className={`px-6 py-3.5 rounded-sm bg-white text-[#2f2f2f] hover:bg-[#f5f3ef] font-bold text-sm uppercase tracking-wide inline-flex items-center gap-2 transition-colors ${
                selected.length === 0 ? 'pointer-events-none opacity-50' : ''
              }`}
            >
              <span>Request this combination</span>
              <MessageCircle size={18} />
            </a>
            <p className="text-sm text-white/65">
              {selected.length ? `${selected.length} items selected` : 'Choose at least one item'}
            </p>
          </div>
        </div>
      </section>

      {/* Pairings */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-black text-[#2f2f2f]">Products that work well together.</h2>
          <div className="flex gap-5 overflow-x-auto snap-x pb-4 mt-8">
            {pairings.map((p) => (
              <ProductCard key={p.id} product={p} onOpen={onOpenProductDetail} className="snap-start shrink-0 w-[72vw] sm:w-[280px]" />
            ))}
          </div>

          <ol className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#ececec] border border-[#ececec] rounded-lg overflow-hidden mt-14">
            {GIFT_STEPS.map(([title, text], i) => (
              <li key={title} className="bg-white p-6">
                <span className="font-display text-sm font-bold text-[#a58c6d]">0{i + 1}</span>
                <h3 className="font-display text-xl font-bold text-[#2f2f2f] mt-2">{title}</h3>
                <p className="text-sm text-[#666666] mt-1">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FaqSection title="Corporate gifting questions" faqs={GIFTING_FAQS} />

      <CtaBand
        title="Plan a set people will actually use."
        copy="Tell Wild Collective who the gift is for, which products you’re considering, and the estimated quantity. The final quotation happens directly on WhatsApp."
        onBuildQuote={onBuildQuote}
      />
    </>
  );
};
