import React from 'react';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { whatsappDiscuss } from '../data/products';
import { ProductConstellation } from './ProductConstellation';

interface HeroProps {
  onExploreProducts: () => void;
}


export const Hero: React.FC<HeroProps> = ({ onExploreProducts }) => {
  return (
    <>
      <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-[#2f2f2f] tracking-tight leading-[1.02]">
                Your Brand. <br />
                <span className="italic text-[#a58c6d]">Made Wearable.</span>
              </h1>
              <p className="font-display text-lg sm:text-xl font-bold text-[#2f2f2f]">
                Custom Printing · Merchandise · Corporate Gifts
              </p>
              <p className="text-base sm:text-lg text-[#666666] max-w-xl leading-relaxed">
                Custom apparel, merchandise and corporate gifts designed to bring your brand into everyday use.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onExploreProducts}
                  className="px-6 py-3.5 rounded-sm bg-[#2f2f2f] hover:bg-[#0a0a0a] text-white font-bold text-sm uppercase tracking-wide flex items-center gap-2 transition-colors"
                >
                  <span>Explore products</span>
                  <ArrowRight size={16} />
                </button>
                <a
                  href={whatsappDiscuss()}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-sm border-2 border-[#2f2f2f] text-[#2f2f2f] hover:bg-[#2f2f2f] hover:text-white font-bold text-sm uppercase tracking-wide flex items-center gap-2 transition-colors"
                >
                  <span>Get a WhatsApp quote</span>
                  <MessageCircle size={16} />
                </a>
              </div>

              <div className="flex items-center gap-2 pt-4 text-xs font-bold uppercase tracking-widest text-[#666666]">
                <Sparkles size={16} className="text-[#a58c6d]" />
                <span>Wear it · Carry it · Remember it</span>
              </div>
            </div>

            {/* Right Column: Collar T-shirt / 03 views */}
            <div className="lg:col-span-6 w-full">
              <ProductConstellation variant="apparel" />
            </div>
          </div>
        </div>
      </section>

    </>
  );
};
