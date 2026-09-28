import React, { useState } from 'react';
import {
  ArrowRight,
  ChevronRight,
  MessageCircle,
  Shirt,
  Users,
  Briefcase,
  GraduationCap,
  Trophy,
  CalendarDays,
  Layers,
  HardHat,
  PenTool,
  Boxes,
  LucideIcon,
} from 'lucide-react';
import { ABOUT_SERVICES, whatsappDiscuss } from '../data/products';
import { CtaBand } from './CtaBand';

interface AboutSectionProps {
  onExploreApparel: () => void;
  onBuildQuote: () => void;
}

const SERVICE_ICONS: Record<string, LucideIcon> = {
  'custom-tshirts': Shirt,
  'polo-tshirts': Users,
  corporate: Briefcase,
  institutional: GraduationCap,
  sports: Trophy,
  events: CalendarDays,
  hoodies: Layers,
  caps: HardHat,
  finishes: PenTool,
  bulk: Boxes,
};

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreApparel, onBuildQuote }) => {
  const [selectedId, setSelectedId] = useState(ABOUT_SERVICES[0].id);
  const [hoverId, setHoverId] = useState<string>();
  const service = ABOUT_SERVICES.find((s) => s.id === (hoverId ?? selectedId)) ?? ABOUT_SERVICES[0];
  const ServiceIcon = SERVICE_ICONS[service.id];

  return (
    <>
      {/* Hero */}
      <section id="about" className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display text-5xl sm:text-7xl font-black text-[#2f2f2f] tracking-tight leading-[1.02]">
              Quality <br />apparel, <em className="text-[#a58c6d]">made for <br />your brand.</em>
            </h1>
            <p className="text-lg text-[#666666] mt-6 max-w-xl leading-relaxed">
              Wild Collective is a Mysuru-based apparel and custom garment brand creating thoughtful, dependable clothing for businesses, institutions, schools, events, teams, brands and individuals.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <button
                onClick={onExploreApparel}
                className="px-6 py-3.5 rounded-sm bg-[#2f2f2f] hover:bg-[#0a0a0a] text-white font-bold text-sm uppercase tracking-wide flex items-center gap-2 transition-colors"
              >
                <span>Explore apparel</span>
                <ArrowRight size={18} />
              </button>
              <a
                href={whatsappDiscuss('a custom apparel or bulk garment requirement')}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-sm border-2 border-[#2f2f2f] text-[#2f2f2f] hover:bg-[#2f2f2f] hover:text-white font-bold text-sm uppercase tracking-wide flex items-center gap-2 transition-colors"
              >
                <span>Discuss your requirement</span>
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
          <figure className="bg-[#f5f3ef] rounded-lg p-8">
            <img
              src="/images/products/navy-round-neck-tshirt-cutout.png"
              alt="Navy round-neck T-shirt ready for custom printing"
              className="w-full max-h-[440px] object-contain"
            />
            <figcaption className="mt-6">
              <p className="font-display text-xl font-bold text-[#2f2f2f]">Custom apparel for work, teams, events and identity.</p>
              <ul className="flex flex-wrap gap-2 mt-4">
                {['Quality', 'Customization', 'Local expertise', 'Bulk orders'].map((t) => (
                  <li key={t} className="text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-sm bg-white text-[#2f2f2f]">
                    {t}
                  </li>
                ))}
              </ul>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Made in Mysuru */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <figure className="relative rounded-lg overflow-hidden aspect-[16/9] bg-[#2f2f2f]">
          <img
            src="/images/production-unit.png"
            alt="Wild Collective team printing, finishing and packing custom T-shirts inside the Mysuru production unit"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-10 bg-gradient-to-t from-black/80 to-transparent text-white">
            <strong className="block font-display text-3xl sm:text-5xl font-black">Made in Mysuru.</strong>
            <span className="block mt-2 text-white/80 max-w-xl">
              Inside the Wild Collective production unit, where apparel moves from print to finishing and packing.
            </span>
          </figcaption>
        </figure>
      </section>

      {/* Origin */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <h2 className="font-display text-3xl sm:text-5xl font-black text-[#2f2f2f] tracking-tight">
            Built in Mysuru. Made to represent you.
          </h2>
          <div className="space-y-5 text-[#666666] leading-relaxed">
            <p className="text-xl text-[#2f2f2f]">
              With a strong focus on quality, comfort, design and dependable service, Wild Collective provides customized apparel solutions that bring ideas to life.
            </p>
            <p>
              From selecting the right fabric and fit to printing, embroidery and finishing, we pay attention to the details that help every garment represent your brand with pride.
            </p>
            <p>
              Whether you need a few customized T-shirts for a special occasion or a large bulk order for your organization, we work closely with you to understand the requirement and prepare apparel around your specifications.
            </p>
          </div>
        </div>
      </section>

      {/* What we make */}
      <section className="py-14 sm:py-20 bg-[#faf9f7] border-y border-[#ececec]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-10">
            <h2 className="font-display text-3xl sm:text-5xl font-black text-[#2f2f2f]">What we make.</h2>
            <p className="text-sm text-[#666666]">Hover to preview. Click or tap to keep a service selected.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ul className="divide-y divide-[#ececec] border-y border-[#ececec] bg-white" aria-label="Wild Collective apparel services">
              {ABOUT_SERVICES.map((s) => {
                const Icon = SERVICE_ICONS[s.id];
                const isActive = service.id === s.id;
                return (
                  <li key={s.id}>
                    <button
                      type="button"
                      aria-pressed={selectedId === s.id}
                      onClick={() => setSelectedId(s.id)}
                      onPointerEnter={() => setHoverId(s.id)}
                      onPointerLeave={() => setHoverId(undefined)}
                      onFocus={() => setHoverId(s.id)}
                      onBlur={() => setHoverId(undefined)}
                      className={`w-full flex items-center gap-4 px-5 py-4 text-left font-bold transition-colors ${
                        isActive ? 'bg-[#2f2f2f] text-white' : 'text-[#2f2f2f] hover:bg-[#f5f3ef]'
                      }`}
                    >
                      <Icon size={20} aria-hidden="true" />
                      <span className="flex-1">{s.title}</span>
                      <ChevronRight size={18} aria-hidden="true" />
                    </button>
                  </li>
                );
              })}
            </ul>
            <article className="bg-white rounded-lg border border-[#ececec] p-8 sm:p-12 self-start lg:sticky lg:top-40" aria-live="polite">
              <div className="w-14 h-14 rounded-md bg-[#f1ebe3] text-[#a58c6d] flex items-center justify-center">
                <ServiceIcon size={28} aria-hidden="true" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#a58c6d] mt-8">{service.context}</p>
              <h3 className="font-display text-3xl sm:text-4xl font-black text-[#2f2f2f] mt-2">{service.title}</h3>
              <div className="w-16 h-0.5 bg-[#a58c6d] my-6" aria-hidden="true" />
              <p className="text-lg text-[#666666] leading-relaxed">{service.description}</p>
            </article>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="relative rounded-lg overflow-hidden min-h-[420px] flex items-end">
            <img src="/images/products/round-neck-tshirt-yellow-lifestyle.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="relative p-8 w-full bg-gradient-to-t from-black/80 to-transparent text-white">
              <h2 className="font-display text-3xl font-black">A T-shirt is more than clothing.</h2>
              <p className="mt-2 text-white/80">It can represent a brand, create an identity and bring people together.</p>
            </div>
          </article>
          <blockquote className="relative rounded-lg overflow-hidden min-h-[420px] flex items-end">
            <img src="/images/products/collar-tshirt-detail.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="relative p-8 w-full bg-gradient-to-t from-black/80 to-transparent text-white">
              <p className="font-display text-3xl font-black leading-tight">
                Quality Products.<br />Honest Service.<br />Reliable Delivery.
              </p>
              <footer className="mt-3 text-sm font-bold uppercase tracking-widest text-[#d9bf94]">
                Wild Collective · Wear Your Identity.
              </footer>
            </div>
          </blockquote>
        </div>
      </section>

      <CtaBand
        title="Tell us what you want to make."
        copy="Share the garment, quantity, artwork and customization requirement. Wild Collective will continue the quotation and order discussion directly with you."
        onBuildQuote={onBuildQuote}
      />
    </>
  );
};
