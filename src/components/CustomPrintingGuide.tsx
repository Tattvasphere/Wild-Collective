import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CtaBand } from './CtaBand';

interface CustomPrintingGuideProps {
  onExploreCatalogue: () => void;
  onBuildQuote: () => void;
}

const JOURNEY = [
  'Choose the product',
  'Share your design or branding requirement',
  'Confirm the quantity',
  'Get the quotation',
  'Finalize the order directly with Wild Collective',
];

const USES = ['Apparel', 'Merchandise', 'Gifts', 'Accessories'];

export const CustomPrintingGuide: React.FC<CustomPrintingGuideProps> = ({ onExploreCatalogue, onBuildQuote }) => {
  return (
    <>
      <section id="custom-printing" className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display text-4xl sm:text-6xl font-black text-[#2f2f2f] tracking-tight">
              Your idea. Your identity. Your merchandise.
            </h1>
            <p className="text-lg text-[#666666] mt-5 max-w-xl leading-relaxed">
              Start with the object, then shape how your identity should live on it. Wild Collective helps you move from a product choice to a clear customization and quotation conversation.
            </p>
          </div>
          <div className="relative aspect-square bg-[#f5f3ef] rounded-lg overflow-hidden">
            <img src="/images/custom-printing-polo.png" alt="Beige polo shirt shown from the front and back, ready for customization" className="absolute inset-0 w-full h-full object-contain p-6" />
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-[#faf9f7] border-y border-[#ececec]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#2f2f2f]">A useful object is your brand’s best canvas.</h2>
            <p className="text-xs font-bold uppercase tracking-widest text-[#a58c6d] mt-5">Choose what carries the idea</p>
          </div>
          <div>
            <p className="text-lg text-[#666666] leading-relaxed">
              Apparel for a team. Merchandise for an event. Gifts for a relationship. Accessories that travel. Begin with the role the product should play, not with a complicated order form.
            </p>
            <button
              onClick={onExploreCatalogue}
              className="mt-7 px-6 py-3.5 rounded-sm bg-[#2f2f2f] hover:bg-[#0a0a0a] text-white font-bold text-sm uppercase tracking-wide inline-flex items-center gap-2 transition-colors"
            >
              <span>Explore products</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#2f2f2f] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white">Bring the brief. Build the conversation.</h2>
            <p className="mt-5 text-xs font-bold uppercase tracking-widest text-[#d9bf94]">The customization journey</p>
            <ul className="flex flex-wrap gap-2 mt-8">
              {USES.map((u) => (
                <li key={u} className="text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-sm border border-white/25 text-white/80">
                  {u}
                </li>
              ))}
            </ul>
          </div>
          <ol className="lg:col-span-7 divide-y divide-white/15 border-y border-white/15">
            {JOURNEY.map((step, i) => (
              <li key={step} className="flex gap-6 py-6">
                <span className="font-display text-sm font-bold text-[#d9bf94] pt-1.5">0{i + 1}</span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">{step}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        title="Turn the idea into a clear brief."
        copy="Choose a product, share your quantity and explain how you want it customized. Wild Collective will continue with the quotation on WhatsApp."
        onBuildQuote={onBuildQuote}
      />
    </>
  );
};
