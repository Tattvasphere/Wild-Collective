import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onOpen: (product: Product) => void;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product: p, onOpen, className = '' }) => {
  const multiple = p.prices.length > 1;

  return (
    <article
      onClick={() => onOpen(p)}
      className={`wc-card rounded-lg flex flex-col overflow-hidden group bg-white cursor-pointer ${className}`}
    >
      <div className="relative aspect-[4/5] bg-[#faf9f7] overflow-hidden">
        <img
          src={p.image}
          alt={p.images[0]?.alt || p.title}
          loading="lazy"
          className={`absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-500 ${
            p.image.endsWith('.png') ? 'object-contain p-4' : 'object-cover'
          }`}
        />
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#a58c6d]">{p.category}</span>
        <h3 className="font-display font-bold text-lg text-[#2f2f2f] mt-0.5">{p.title}</h3>

        <div className="mt-3 flex-1">
          {multiple ? (
            <>
              <p className="text-[11px] uppercase font-bold text-[#8f8f8f]">Available price options</p>
              <p className="font-bold text-base text-[#2f2f2f] mt-0.5">{p.prices.join(' · ')}</p>
              <p className="text-xs text-[#666666] mt-1">{p.priceNote}</p>
            </>
          ) : (
            <div className="flex items-end justify-between gap-3">
              <p className="font-bold text-base text-[#2f2f2f]">{p.price}</p>
              {p.moq && (
                <p className="text-right">
                  <span className="block text-[10px] uppercase font-bold text-[#8f8f8f]">MOQ</span>
                  <span className="font-bold text-sm text-[#2f2f2f]">{p.moq}</span>
                </p>
              )}
            </div>
          )}
        </div>

        <div className="mt-4 pt-4 border-t border-[#ececec] text-sm font-bold text-[#2f2f2f] group-hover:text-[#a58c6d] flex items-center gap-1 transition-colors">
          <span>View product</span>
          <ArrowUpRight size={15} />
        </div>
      </div>
    </article>
  );
};
