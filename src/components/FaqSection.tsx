import React from 'react';
import { Plus } from 'lucide-react';
import { Faq } from '../data/seo';

export const FaqSection: React.FC<{ title?: string; faqs: Faq[] }> = ({ title = 'Frequently asked questions', faqs }) => (
  <section className="py-14 sm:py-20 bg-[#faf9f7] border-t border-[#ececec]">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="font-display text-3xl sm:text-4xl font-black text-[#2f2f2f] tracking-tight">{title}</h2>
      <div className="mt-8 divide-y divide-[#e4e0da] border-y border-[#e4e0da]">
        {faqs.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-lg sm:text-xl font-bold text-[#2f2f2f]">
              <h3>{f.q}</h3>
              <Plus size={20} className="mt-1 shrink-0 text-[#a58c6d] transition-transform group-open:rotate-45" />
            </summary>
            <p className="mt-3 text-base leading-relaxed text-[#666666]">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);
