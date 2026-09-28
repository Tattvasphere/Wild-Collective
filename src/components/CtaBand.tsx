import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { whatsappDiscuss } from '../data/products';

interface CtaBandProps {
  title: string;
  copy: string;
  onBuildQuote?: () => void;
  whatsappHref?: string;
  whatsappLabel?: string;
}

export const CtaBand: React.FC<CtaBandProps> = ({
  title,
  copy,
  onBuildQuote,
  whatsappHref = whatsappDiscuss(),
  whatsappLabel = 'WhatsApp Wild Collective',
}) => (
  <section className="bg-[#f5f3ef] border-y border-[#ececec] py-12 sm:py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl sm:text-4xl font-black text-[#2f2f2f]">{title}</h2>
        <p className="text-base sm:text-lg text-[#666666] mt-3 leading-relaxed">{copy}</p>
      </div>
      <div className="flex flex-wrap gap-3 shrink-0">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3.5 rounded-sm bg-[#2f2f2f] hover:bg-[#0a0a0a] text-white font-bold text-sm uppercase tracking-wide flex items-center gap-2 transition-colors"
        >
          <span>{whatsappLabel}</span>
          <MessageCircle size={18} />
        </a>
        {onBuildQuote && (
          <button
            onClick={onBuildQuote}
            className="px-6 py-3.5 rounded-sm border-2 border-[#2f2f2f] text-[#2f2f2f] hover:bg-[#2f2f2f] hover:text-white font-bold text-sm uppercase tracking-wide flex items-center gap-2 transition-colors"
          >
            <span>Build a detailed quote</span>
            <ArrowRight size={18} />
          </button>
        )}
      </div>
    </div>
  </section>
);
