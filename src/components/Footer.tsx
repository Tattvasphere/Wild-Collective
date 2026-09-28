import React from 'react';
import { ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';
import { WildCollectiveLogo } from './WildCollectiveLogo';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onSelectCategory: (cat: string) => void;
}

const EXPLORE_LINKS = [
  { label: 'Apparel', category: 'Apparel' },
  { label: 'Caps', category: 'Caps' },
  { label: 'Magnets', category: 'Fridge Magnets' },
  { label: 'Keychains & Gifts', category: 'Keychains & Gifts' },
  { label: 'Drinkware', category: 'Drinkware' },
];

const COMPANY_LINKS = [
  { label: 'Custom Printing', tab: 'custom-printing' },
  { label: 'Corporate Gifts', tab: 'corporate-gifts' },
  { label: 'About', tab: 'about' },
  { label: 'Contact', tab: 'contact' },
];

const headingClass = 'font-display font-bold text-sm uppercase tracking-wider text-[#d9bf94] mb-4';
const linkClass = 'text-sm text-white/70 hover:text-white transition-colors text-left';

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectCategory }) => {
  return (
    <footer className="bg-[#2f2f2f] text-white pt-16 pb-10 border-t border-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          <div className="lg:col-span-4 space-y-5">
            <WildCollectiveLogo variant="light" height={48} className="max-h-12 w-auto" />
            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              Custom apparel, merchandise and corporate gifts made to put your brand into the real world.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-3 rounded-sm bg-white text-[#2f2f2f] hover:bg-[#f5f3ef] font-bold text-sm uppercase tracking-wide inline-flex items-center gap-2 transition-colors"
            >
              <span>Start a quote</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <nav className="lg:col-span-2" aria-label="Explore">
            <h4 className={headingClass}>Explore</h4>
            <ul className="space-y-2.5">
              {EXPLORE_LINKS.map((l) => (
                <li key={l.label}>
                  <button onClick={() => onSelectCategory(l.category)} className={linkClass}>
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-2" aria-label="Company">
            <h4 className={headingClass}>Company</h4>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}>
                  <button onClick={() => onNavigate(l.tab)} className={linkClass}>
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h4 className={headingClass}>Contact</h4>
            <address className="not-italic text-sm text-white/70 space-y-2 leading-relaxed">
              <strong className="block text-white">{COMPANY_INFO.legalName}</strong>
              <span className="block">{COMPANY_INFO.address}</span>
              <span className="block">
                Support:{' '}
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-white hover:text-[#d9bf94]">
                  {COMPANY_INFO.phone}
                </a>
              </span>
              {COMPANY_INFO.emails.map((email) => (
                <a key={email} href={`mailto:${email}`} className="block hover:text-white">
                  {email}
                </a>
              ))}
              <span className="block">GSTIN: {COMPANY_INFO.gstin}</span>
            </address>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <ul className="flex flex-wrap gap-6 text-sm">
            <li>
              <a href={COMPANY_INFO.instagram} target="_blank" rel="noreferrer" className={linkClass}>
                Instagram
              </a>
            </li>
            <li>
              <button onClick={() => onNavigate('privacy-policy')} className={linkClass}>
                Privacy policy
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('terms')} className={linkClass}>
                Terms
              </button>
            </li>
          </ul>
          <p className="font-display text-xl sm:text-2xl font-black tracking-widest text-white/90">MAKE YOUR BRAND TANGIBLE.</p>
        </div>

        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-2 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Wild Collective.</p>
          <p>Custom Printing · Merchandise · Corporate Gifts</p>
        </div>
      </div>
    </footer>
  );
};
