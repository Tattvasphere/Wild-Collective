import React from 'react';
import {
  Shirt,
  HardHat,
  Magnet,
  Key,
  Coffee,
  BookOpen,
  Award,
  ShoppingBag,
  Flag,
  ArrowRight,
  LucideIcon,
} from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/products';

interface CategoryNavProps {
  onSelectCategory: (cat: string) => void;
  onExploreFullCatalogue: () => void;
}

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  apparel: Shirt,
  caps: HardHat,
  'fridge-magnets': Magnet,
  'keychains-gifts': Key,
  drinkware: Coffee,
  stationery: BookOpen,
  sachets: Award,
  'bags-accessories': ShoppingBag,
  'other-products': Flag,
};

export const CategoryNav: React.FC<CategoryNavProps> = ({
  onSelectCategory,
  onExploreFullCatalogue
}) => {
  return (
    <section className="py-14 sm:py-20 bg-[#faf9f7] border-b border-[#dddddd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-black text-[#2f2f2f] tracking-tight max-w-2xl">
            Everything your brand can wear, carry & share.
          </h2>
          <button
            onClick={onExploreFullCatalogue}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#2f2f2f] hover:text-[#a58c6d] group shrink-0 transition-colors"
          >
            <span>Browse the full catalogue</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <nav className="grid grid-cols-2 sm:grid-cols-3 gap-4" aria-label="Product categories">
          {PRODUCT_CATEGORIES.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.slug] ?? Shirt;
            return (
              <button
                key={cat.slug}
                onClick={() => onSelectCategory(cat.name)}
                aria-label={`Explore ${cat.name}`}
                className="group bg-white rounded-lg p-5 sm:p-6 border border-[#ececec] hover:border-[#dddddd] hover:shadow-[0_3px_16px_rgba(0,0,0,0.1)] text-left transition-all flex items-center gap-4"
              >
                <span className="w-12 h-12 shrink-0 rounded-md bg-[#f5f3ef] flex items-center justify-center text-[#2f2f2f] group-hover:bg-[#2f2f2f] group-hover:text-white transition-colors" aria-hidden="true">
                  <Icon size={22} />
                </span>
                <h3 className="font-display font-bold text-base sm:text-lg text-[#2f2f2f]">
                  {cat.name}
                </h3>
              </button>
            );
          })}
        </nav>
      </div>
    </section>
  );
};
