import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO, PRODUCTS, whatsappDiscuss, whatsappQuote } from '../data/products';

const GENERAL_ENQUIRY = 'General custom merchandise enquiry';

const inputClass =
  'w-full mt-2 px-4 py-3 rounded-sm border border-[#dddddd] bg-white text-[#2f2f2f] placeholder-[#8f8f8f] focus:outline-none focus:border-[#2f2f2f]';
const labelClass = 'block text-sm font-bold text-[#2f2f2f]';

export const ContactSection: React.FC = () => {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [requirement, setRequirement] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(whatsappQuote({ product, quantity, name, company, requirement, notes }), '_blank', 'noreferrer');
  };

  const instagramHandle = '@' + COMPANY_INFO.instagram.replace(/\/$/, '').split('/').pop();

  return (
    <section id="contact" className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h1 className="font-display text-4xl sm:text-6xl font-black text-[#2f2f2f] tracking-tight">
            Let’s make the requirement real.
          </h1>
          <p className="text-lg text-[#666666] mt-5 leading-relaxed">
            Choose a product, add the estimated quantity, and tell Wild Collective what needs to be customized. The form prepares a WhatsApp message—nothing is submitted to an ecommerce backend.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Details */}
          <aside className="lg:col-span-5 bg-[#2f2f2f] text-white rounded-lg p-8 self-start">
            <h2 className="font-display text-2xl font-black text-white">A human quotation, without the checkout theatre.</h2>
            <p className="text-white/70 mt-3">
              Speak with our team about your product, printing, quantity or delivery requirement.
            </p>
            <p className="mt-6 text-sm">
              <span className="text-white/60">Support: </span>
              <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="font-bold hover:text-[#d9bf94]">{COMPANY_INFO.phone}</a>
            </p>
            <a
              href={whatsappDiscuss()}
              target="_blank"
              rel="noreferrer"
              className="mt-5 px-5 py-3 rounded-sm bg-white text-[#2f2f2f] hover:bg-[#f5f3ef] font-bold text-sm uppercase tracking-wide inline-flex items-center gap-2 transition-colors"
            >
              <span>WhatsApp Wild Collective</span>
              <MessageCircle size={18} />
            </a>

            <dl className="mt-8 pt-6 border-t border-white/15 space-y-5 text-sm">
              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-[#d9bf94]">Registered company</dt>
                <dd className="mt-1 font-bold">{COMPANY_INFO.legalName}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-[#d9bf94]">Address</dt>
                <dd className="mt-1 text-white/80">{COMPANY_INFO.address}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-[#d9bf94]">Email</dt>
                {COMPANY_INFO.emails.map((email) => (
                  <dd key={email} className="mt-1">
                    <a href={`mailto:${email}`} className="text-white/80 hover:text-white">{email}</a>
                  </dd>
                ))}
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-[#d9bf94]">GSTIN</dt>
                <dd className="mt-1 text-white/80">{COMPANY_INFO.gstin}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-[#d9bf94]">Instagram</dt>
                <dd className="mt-1">
                  <a href={COMPANY_INFO.instagram} target="_blank" rel="noreferrer" className="text-white/80 hover:text-white">
                    {instagramHandle}
                  </a>
                </dd>
              </div>
            </dl>
          </aside>

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 bg-[#faf9f7] border border-[#ececec] rounded-lg p-6 sm:p-8 space-y-5">
            <div>
              <label htmlFor="quote-product" className={labelClass}>Product</label>
              <select id="quote-product" required value={product} onChange={(e) => setProduct(e.target.value)} className={inputClass}>
                <option value="" disabled>Choose a product</option>
                <option value={GENERAL_ENQUIRY}>{GENERAL_ENQUIRY}</option>
                {PRODUCTS.map((p) => (
                  <option key={p.id} value={p.title}>{p.title}</option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="quote-quantity" className={labelClass}>Quantity</label>
                <input id="quote-quantity" required value={quantity} onChange={(e) => setQuantity(e.target.value)} className={inputClass} />
              </div>
              <div>
                <label htmlFor="quote-name" className={labelClass}>Name</label>
                <input id="quote-name" required value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
              </div>
            </div>
            <div>
              <label htmlFor="quote-company" className={labelClass}>
                Company <span className="font-normal text-[#8f8f8f]">(optional)</span>
              </label>
              <input id="quote-company" value={company} onChange={(e) => setCompany(e.target.value)} className={inputClass} />
            </div>
            <div>
              <label htmlFor="quote-requirement" className={labelClass}>Customization requirement</label>
              <textarea id="quote-requirement" required rows={3} value={requirement} onChange={(e) => setRequirement(e.target.value)} className={inputClass} />
            </div>
            <div>
              <label htmlFor="quote-notes" className={labelClass}>
                Additional notes <span className="font-normal text-[#8f8f8f]">(optional)</span>
              </label>
              <textarea id="quote-notes" rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} className={inputClass} />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3.5 rounded-sm bg-[#2f2f2f] hover:bg-[#0a0a0a] text-white font-bold text-sm uppercase tracking-wide inline-flex items-center justify-center gap-2 transition-colors"
            >
              <span>Prepare WhatsApp enquiry</span>
              <MessageCircle size={18} />
            </button>
            <p className="text-xs text-[#666666]">
              Your details are used only to prepare a WhatsApp message. This form does not place an online order.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
