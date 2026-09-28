import React, { useEffect, useState } from 'react';
import { MessageCircle, PhoneCall, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  COMPANY_INFO,
  PRODUCTS,
  PRODUCT_HIGHLIGHTS,
  Product,
  QUOTATION_NOTE,
  whatsappDiscuss,
  whatsappProduct,
} from '../data/products';
import { ProductCard } from './ProductCard';

interface ProductPageProps {
  product: Product;
  onBack: () => void;
  onOpenProduct: (product: Product) => void;
  onBuildQuote: () => void;
}

export const ProductPage: React.FC<ProductPageProps> = ({ product, onBack, onOpenProduct, onBuildQuote }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = product.images.length ? product.images : [{ src: product.image, alt: product.title }];
  const active = images[imageIndex];
  const related = PRODUCTS.filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id).slice(0, 3);

  useEffect(() => setImageIndex(0), [product.id]);

  const step = (d: number) => setImageIndex((i) => (i + d + images.length) % images.length);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="px-5 sm:px-8 pt-6">
          <button onClick={onBack} className="text-sm font-bold text-[#666666] hover:text-[#2f2f2f] flex items-center gap-1">
            <ChevronLeft size={16} />
            <span>Back to {product.category}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-5 sm:p-8">
          {/* Gallery */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#8f8f8f] mb-3">
              Product view · {imageIndex + 1} / {images.length}
            </p>
            <figure className="relative aspect-[4/5] bg-[#faf9f7] rounded-md overflow-hidden">
              <img src={active.src} alt={active.alt || product.title} className={`absolute inset-0 w-full h-full ${active.src.endsWith('.png') ? 'object-contain p-6' : 'object-cover'}`} />
              {images.length > 1 && (
                <>
                  <button
                    onClick={() => step(-1)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => step(1)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
              {active.caption && (
                <figcaption className="absolute bottom-3 left-3 bg-[#2f2f2f]/90 text-white text-xs font-bold px-2.5 py-1 rounded-sm">
                  {active.caption}
                </figcaption>
              )}
            </figure>
            {images.length > 1 && (
              <div className="flex gap-2 mt-3 overflow-x-auto">
                {images.map((img, i) => (
                  <button
                    key={img.src}
                    onClick={() => setImageIndex(i)}
                    className={`w-16 h-20 shrink-0 rounded-sm overflow-hidden border-2 ${i === imageIndex ? 'border-[#2f2f2f]' : 'border-transparent opacity-70 hover:opacity-100'}`}
                    aria-label={`Image ${i + 1} of ${images.length}`}
                  >
                    <img src={img.src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-7">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#a58c6d]">{product.category}</p>
              <h1 className="font-display text-4xl sm:text-5xl font-black text-[#2f2f2f] mt-3">{product.title}</h1>
              <p className="text-lg text-[#666666] mt-5 leading-relaxed">{product.description}</p>
            </div>

            <div>
              {product.prices.length > 1 ? (
                <>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#8f8f8f]">Available price options</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {product.prices.map((price) => (
                      <span key={price} className="px-4 py-2 rounded-sm border border-[#dddddd] font-bold text-lg text-[#2f2f2f]">
                        {price}
                      </span>
                    ))}
                  </div>
                </>
              ) : product.prices.length === 1 ? (
                <>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#8f8f8f]">Price</p>
                  <p className="font-display text-3xl font-black text-[#2f2f2f] mt-1">{product.price}</p>
                </>
              ) : (
                <p className="font-display text-2xl font-black text-[#2f2f2f]">Price on request</p>
              )}
              {product.priceDetail && <p className="mt-3 text-sm text-[#2f2f2f]">{product.priceDetail}</p>}
              {product.moq && (
                <p className="mt-3 text-sm text-[#2f2f2f]">
                  Minimum order quantity: <strong>{product.moq}</strong>
                </p>
              )}
              <p className="mt-4 text-xs text-[#666666] leading-relaxed">{QUOTATION_NOTE}</p>
            </div>

            {product.colours.length > 0 && (
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#8f8f8f]">
                  Available colours · {product.colours.length} colours
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-[#8f8f8f] mt-4">Colour preview</p>
                <ul className="flex flex-wrap gap-3 mt-3" aria-label="Colour preview">
                  {product.colours.map((c) => (
                    <li key={c.code} className="flex items-center gap-2 pr-3 py-1 pl-1 rounded-full border border-[#ececec]">
                      <span className="w-7 h-7 rounded-full border border-[#dddddd]" style={{ backgroundColor: c.hex }} />
                      <span className="text-xs">
                        <span className="font-bold text-[#2f2f2f]">{c.name}</span>
                        <span className="text-[#8f8f8f]"> · No. {c.code}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-[#666666]">
                  Shades shown are indicative. Please confirm final colour availability when requesting your quote.
                </p>
              </div>
            )}

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#8f8f8f]">Product highlights</p>
              <ul className="grid gap-3 mt-3">
                {PRODUCT_HIGHLIGHTS.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-[#2f2f2f]">
                    <Check size={18} className="mt-0.5 shrink-0 text-[#a58c6d]" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={whatsappProduct(product)}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3.5 rounded-sm bg-[#2f2f2f] hover:bg-[#0a0a0a] text-white font-bold text-sm uppercase tracking-wide flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle size={18} />
                <span>WhatsApp quote</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="px-5 py-3.5 rounded-sm border-2 border-[#2f2f2f] text-[#2f2f2f] hover:bg-[#2f2f2f] hover:text-white font-bold text-sm uppercase tracking-wide flex items-center justify-center gap-2 transition-colors"
              >
                <PhoneCall size={18} />
                <span>Call Wild Collective</span>
              </a>
            </div>
            <p className="text-xs text-[#666666]">
              No online payment is taken here. Wild Collective confirms the quotation and order details directly with you.
            </p>
          </div>
        </div>

        {related.length > 0 && (
          <div className="px-5 sm:px-8 pb-8 pt-4 border-t border-[#ececec]">
            <h3 className="font-display text-2xl font-black text-[#2f2f2f] mb-5">More from {product.category}.</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} onOpen={onOpenProduct} />
              ))}
            </div>
          </div>
        )}

        <div className="bg-[#f5f3ef] px-5 sm:px-8 py-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl font-black text-[#2f2f2f]">Need a different quantity or format?</h3>
            <p className="text-sm text-[#666666] mt-2">
              Use WhatsApp to share your requirement. Price options shown are taken directly from the supplied Wild Collective catalogue and should be confirmed for your final specification.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href={whatsappDiscuss()}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-sm bg-[#2f2f2f] hover:bg-[#0a0a0a] text-white font-bold text-sm uppercase tracking-wide flex items-center gap-2 transition-colors"
            >
              <span>WhatsApp Wild Collective</span>
              <MessageCircle size={16} />
            </a>
            <button
              onClick={onBuildQuote}
              className="px-5 py-3 rounded-sm border-2 border-[#2f2f2f] text-[#2f2f2f] hover:bg-[#2f2f2f] hover:text-white font-bold text-sm uppercase tracking-wide transition-colors"
            >
              Build a detailed quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
