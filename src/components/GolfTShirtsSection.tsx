import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { GOLF_PATTERNS, whatsappDiscuss } from '../data/products';

interface GolfTShirtsSectionProps {
  onExploreApparel: () => void;
}

const FEATURES = ['UV protection', 'Anti-curl collar', 'Breathable', 'Moisture wicking', 'Anti-odour', '4-way stretch'];

const SPECS = [
  { label: 'Composition', values: ['93% micro polyester', '7% spandex'] },
  { label: 'Comfort', values: ['Breathable', '4-way stretch'] },
  { label: 'Moisture', values: ['Superwick', 'Moisture wicking'] },
  { label: 'Finish', values: ['Anti-curl collar', 'Anti-odour'] },
  { label: 'Protection', values: ['UV protection'] },
  { label: 'Range', values: ['Seven supplied print options'] },
];

const FAQS = [
  {
    q: 'Can the golf T-shirts be customized?',
    a: 'Share the logo placement and branding outcome you need. Wild Collective will confirm the available customization options for your selected print.',
  },
  {
    q: 'What are the price and minimum quantity?',
    a: 'Pricing and minimum order quantity were not supplied for this range, so both are confirmed during the quotation conversation.',
  },
  {
    q: 'What should I include in my enquiry?',
    a: 'Add your preferred print, estimated quantity, size mix, branding requirement and required timeline so the team can prepare a useful response.',
  },
];

const golfQuote = whatsappDiscuss('Swing Style golf T-shirts');

export const GolfTShirtsSection: React.FC<GolfTShirtsSectionProps> = ({ onExploreApparel }) => {
  const [index, setIndex] = useState(0);
  const pattern = GOLF_PATTERNS[index];
  const step = (d: number) => setIndex((i) => (i + d + GOLF_PATTERNS.length) % GOLF_PATTERNS.length);

  return (
    <>
      {/* Hero */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/brand/swing-style-logo.png" alt="Swing Style" className="h-10 w-auto mb-6" />
            <h1 className="font-display text-4xl sm:text-6xl font-black text-[#2f2f2f] tracking-tight">
              Printed golf T-shirts, built to move.
            </h1>
            <p className="text-lg text-[#666666] mt-5 max-w-xl leading-relaxed">
              Seven expressive prints on a performance-led fabric base: 93% micro polyester and 7% spandex.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={golfQuote}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-sm bg-[#2f2f2f] hover:bg-[#0a0a0a] text-white font-bold text-sm uppercase tracking-wide flex items-center gap-2 transition-colors"
              >
                <span>Ask for a quote</span>
                <MessageCircle size={18} />
              </a>
              <a
                href="#golf-prints"
                className="px-6 py-3.5 rounded-sm border-2 border-[#2f2f2f] text-[#2f2f2f] hover:bg-[#2f2f2f] hover:text-white font-bold text-sm uppercase tracking-wide flex items-center gap-2 transition-colors"
              >
                <span>See all seven prints</span>
                <ArrowRight size={18} />
              </a>
            </div>
            <dl className="grid grid-cols-3 gap-4 mt-10 pt-6 border-t border-[#ececec]">
              {[
                ['Fabric', '93 / 7 blend'],
                ['Prints', '7 options'],
                ['Pricing', 'On request'],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs font-bold uppercase tracking-widest text-[#8f8f8f]">{k}</dt>
                  <dd className="font-display text-lg sm:text-xl font-black text-[#2f2f2f] mt-1">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <figure className="relative aspect-[4/5] bg-[#faf9f7] rounded-lg overflow-hidden">
              <img src={pattern.image} alt={`${pattern.name} print`} className="absolute inset-0 w-full h-full object-cover" />
              <button
                onClick={() => step(-1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow"
                aria-label="Previous print"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => step(1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow"
                aria-label="Next print"
              >
                <ChevronRight size={20} />
              </button>
              <figcaption className="absolute bottom-3 left-3 bg-[#2f2f2f]/90 text-white text-xs font-bold px-2.5 py-1 rounded-sm">
                {pattern.name} print · {index + 1} / {GOLF_PATTERNS.length}
              </figcaption>
            </figure>
            <ul className="flex flex-wrap gap-2 mt-4">
              {FEATURES.map((f) => (
                <li key={f} className="text-xs font-bold px-3 py-1.5 rounded-sm bg-[#f5f3ef] text-[#2f2f2f]">
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Seven prints */}
      <section id="golf-prints" className="py-14 sm:py-20 bg-[#faf9f7] border-y border-[#ececec]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-black text-[#2f2f2f]">Seven prints. One performance base.</h2>
          <p className="text-base text-[#666666] mt-3 max-w-2xl">
            Compare the supplied pattern options below. Final availability, sizes, pricing and order quantities are confirmed directly with Wild Collective.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
            {GOLF_PATTERNS.map((p, i) => (
              <button
                key={p.id}
                onClick={() => {
                  setIndex(i);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="wc-card rounded-lg overflow-hidden text-left group"
              >
                <div className="aspect-[4/5] overflow-hidden bg-white">
                  <img src={p.image} alt={`${p.name} golf T-shirt print`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <span className="font-display font-bold text-[#2f2f2f]">{p.name}</span>
                  <span className="text-xs font-bold text-[#8f8f8f]">0{i + 1}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Fabric story */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-black text-[#2f2f2f]">The fabric story, at a glance.</h2>
          <p className="text-base text-[#666666] mt-3">A concise specification drawn directly from the supplied product sheets.</p>
          <dl className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-[#ececec] border border-[#ececec] mt-10 rounded-lg overflow-hidden">
            {SPECS.map((s) => (
              <div key={s.label} className="bg-white p-6">
                <dt className="text-xs font-bold uppercase tracking-widest text-[#a58c6d]">{s.label}</dt>
                {s.values.map((v) => (
                  <dd key={v} className="font-display text-lg font-bold text-[#2f2f2f] mt-1">{v}</dd>
                ))}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Brief CTA */}
      <section className="bg-[#2f2f2f] text-white py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl font-black text-white">Build the golf-day brief.</h2>
            <p className="text-white/70 mt-3 text-lg">
              Share the quantity, preferred print, required sizes, branding requirement and timeline. Wild Collective will confirm customization options, pricing and order details.
            </p>
          </div>
          <a
            href={golfQuote}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-sm bg-white text-[#2f2f2f] hover:bg-[#f5f3ef] font-bold text-sm uppercase tracking-wide flex items-center gap-2 transition-colors"
          >
            <span>Discuss on WhatsApp</span>
            <MessageCircle size={18} />
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-black text-[#2f2f2f]">Before you request a quote.</h2>
          <div className="mt-8 divide-y divide-[#ececec] border-y border-[#ececec]">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer list-none flex items-center justify-between font-display text-lg font-bold text-[#2f2f2f]">
                  {f.q}
                  <span className="text-[#a58c6d] text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-[#666666] mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="font-display text-2xl font-black text-[#2f2f2f]">Choose the print. Share the brief. Take it to the course.</p>
            <button
              onClick={onExploreApparel}
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#2f2f2f] hover:text-[#a58c6d] transition-colors"
            >
              <span>Explore all apparel</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
