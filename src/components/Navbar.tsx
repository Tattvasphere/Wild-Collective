import React, { useState } from 'react';
import { 
  MessageCircle, 
  Search, 
  Menu, 
  X, 
  PhoneCall, 
  ArrowRight,
  Shirt,
  Gift,
  Printer,
  Compass
} from 'lucide-react';
import { COMPANY_INFO, PRODUCTS } from '../data/products';
import { WildCollectiveLogo } from './WildCollectiveLogo';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onSelectProduct: (productId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onSelectProduct,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navItems: { id: string; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'golf', label: 'Golf T-Shirts' },
    { id: 'custom-printing', label: 'Custom Printing' },
    { id: 'corporate-gifts', label: 'Corporate Gifts' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const searchResults = searchQuery.trim()
    ? PRODUCTS.filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 6)
    : [];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductSelect = (id: string) => {
    onSelectProduct(id);
    setSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-white text-[#2f2f2f] border-b border-[#ececec] py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0">
            <span className="inline-block shrink-0 w-2 h-2 rounded-full bg-[#26d07c] animate-pulse"></span>
            <span className="truncate">Custom Printing · Merchandise · Corporate Gifts</span>
          </div>
          <div className="hidden md:flex items-center gap-5 text-[#666666]">
            <a 
              href={`tel:${COMPANY_INFO.phoneRaw}`} 
              className="flex items-center gap-1.5 hover:text-[#0a0a0a] transition-colors"
            >
              <PhoneCall size={13} className="text-[#a58c6d]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-[#dddddd]">|</span>
            <a 
              href={`mailto:${COMPANY_INFO.emails[0]}`} 
              className="hover:text-[#0a0a0a] transition-colors"
            >
              {COMPANY_INFO.emails[0]}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 shadow-[0_1px_3px_rgba(0,0,0,0.12)] transition-all">
        <div className="bg-[#2f2f2f]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-6 h-20 xl:h-24">
              {/* Official Logo & Exact Asset Pill */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="flex items-center py-1 cursor-pointer group" onClick={() => handleNavClick('home')}>
                  <WildCollectiveLogo variant="light" height={56} className="max-h-14 w-auto group-hover:opacity-90 transition-opacity duration-200" />
                </div>
              </div>

              {/* Search field (Flatsome-style header search) */}
              <button
                onClick={() => setSearchOpen(true)}
                className="hidden md:flex flex-1 max-w-xl items-center justify-between h-10 pl-4 pr-1 bg-white rounded-sm text-sm text-[#8f8f8f] text-left"
                aria-label="Search products"
              >
                <span className="truncate">Search products (e.g. round neck, collar polo, hoodie, bottle, mug, tote bag)...</span>
                <span className="h-8 w-9 flex items-center justify-center rounded-sm bg-[#a58c6d] text-white shrink-0">
                  <Search size={16} />
                </span>
              </button>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5 shrink-0">
                {/* Search Button (mobile) */}
                <button
                  onClick={() => setSearchOpen(true)}
                  className="md:hidden w-10 h-10 flex items-center justify-center rounded text-white hover:bg-white/10 transition-colors"
                  title="Search products"
                  aria-label="Search products"
                >
                  <Search size={18} />
                </button>

                {/* WhatsApp Quote Button */}
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
                    "Hi Wild Collective, I would like to enquire about custom apparel / corporate merchandise quote."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden sm:inline-flex whitespace-nowrap items-center gap-2 px-4 py-2.5 rounded-sm bg-[#26d07c] hover:bg-[#20b86c] text-[#0d3f23] text-sm font-bold uppercase tracking-wide transition-all"
                >
                  <MessageCircle size={18} className="fill-[#0d3f23] text-[#26d07c]" />
                  <span>WhatsApp Quote</span>
                </a>

                {/* Mobile menu trigger */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="xl:hidden w-10 h-10 flex items-center justify-center rounded text-white hover:bg-white/10"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links (Flatsome header-bottom bar) */}
        <div className="hidden xl:block bg-white border-b border-[#ececec]">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-1 min-h-[52px]">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-2 text-sm font-bold uppercase tracking-wide whitespace-nowrap rounded-sm transition-colors duration-150 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#0a0a0a] text-white'
                      : 'text-[#2f2f2f] hover:bg-[#0a0a0a] hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-b border-[#dddddd] bg-white px-4 pt-2 pb-6 space-y-1 shadow-lg animate-fadeIn">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                  activeTab === item.id
                    ? 'bg-[#2f2f2f] text-white'
                    : 'text-[#2f2f2f] hover:bg-[#f5f3ef]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span>{item.label}</span>
                </div>
              </button>
            ))}

            <div className="pt-4 border-t border-[#dddddd] mt-4 space-y-2">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
                  "Hi Wild Collective, I would like to enquire about custom apparel / corporate merchandise quote."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#26d07c] text-[#0d3f23] font-bold text-center"
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp ({COMPANY_INFO.whatsapp})</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-[#dddddd] text-[#2f2f2f] font-bold text-center"
              >
                <PhoneCall size={18} />
                <span>Call Us ({COMPANY_INFO.phone})</span>
              </a>

              <div className="text-center pt-2 text-xs text-[#666666] space-y-0.5">
                <p>Email: {COMPANY_INFO.emails.join(' · ')}</p>
                <p className="text-[11px] text-[#8f8f8f]">Custom Printing · Merchandise · Corporate Gifts</p>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-16 px-4">
          <div className="bg-[#ffffff] w-full max-w-2xl rounded-2xl shadow-2xl border border-[#dddddd] overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="p-4 border-b border-[#dddddd] flex items-center gap-3">
              <Search size={20} className="text-[#666666]" />
              <input
                type="text"
                autoFocus
                placeholder="Search products (e.g. round neck, collar polo, hoodie, bottle, mug, tote bag)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-lg font-medium text-[#2f2f2f] placeholder-[#8f8f8f] focus:outline-none"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1 rounded-lg hover:bg-[#f5f3ef] text-[#666666]"
              >
                <X size={20} />
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto p-4">
              {searchQuery.trim() === '' ? (
                <div className="py-8 text-center text-sm text-[#666666]">
                  <p className="font-semibold text-base text-[#2f2f2f] mb-1">Explore the full catalogue</p>
                  <p>Type any product name, apparel category, drinkware, bag, or gift item.</p>
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {['Round Neck T-Shirt', 'Collar T-Shirt', 'UV Bottle', 'Hoodie', 'Tote Bag', 'Diary', 'Smart Caps'].map(tag => (
                      <button
                        key={tag}
                        onClick={() => setSearchQuery(tag)}
                        className="text-xs px-3 py-1.5 rounded-full bg-[#f5f3ef] hover:bg-[#f1ebe3] text-[#2f2f2f] font-medium transition-colors"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              ) : searchResults.length > 0 ? (
                <div className="divide-y divide-[#ececec]">
                  {searchResults.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => handleProductSelect(p.id)}
                      className="py-3 px-3 rounded-xl hover:bg-[#f5f3ef] flex items-center justify-between cursor-pointer transition-colors group"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-14 h-14 rounded-lg bg-white border border-[#dddddd] p-1 flex items-center justify-center shrink-0 overflow-hidden">
                          <img src={p.image} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#a58c6d]">
                            {p.category}
                          </span>
                          <h4 className="font-display font-bold text-base text-[#2f2f2f] group-hover:text-[#2f2f2f]">
                            {p.title}
                          </h4>
                          <p className="text-xs text-[#666666]">{p.price}</p>
                        </div>
                      </div>
                      <span className="inline-flex items-center text-xs font-bold text-[#2f2f2f] group-hover:translate-x-1 transition-transform">
                        View details <ArrowRight size={14} className="ml-1" />
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center text-sm text-[#666666]">
                  No products matched &quot;{searchQuery}&quot;. Try searching for &quot;T-Shirt&quot;, &quot;Cap&quot;, or &quot;Bottle&quot;.
                </div>
              )}
            </div>

            <div className="bg-[#f5f3ef] px-4 py-2.5 border-t border-[#dddddd] text-xs text-[#666666] flex items-center justify-between">
              <span>Showing results from {PRODUCTS.length} Wild Collective products</span>
              <button 
                onClick={() => { setSearchOpen(false); handleNavClick('products'); }}
                className="font-bold text-[#2f2f2f] hover:underline"
              >
                Browse All Products
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
