import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { whatsappDiscuss } from '../data/products';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = whatsappDiscuss();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white px-3.5 py-2 rounded-2xl shadow-xl border border-[#dddddd] text-xs font-bold text-[#2f2f2f] animate-bounce duration-1000">
          <span className="w-2 h-2 rounded-full bg-[#26d07c] animate-ping"></span>
          <span>Chat with Wild Collective</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#8f8f8f] hover:text-[#2f2f2f] ml-1"
          >
            <X size={12} />
          </button>
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Wild Collective on WhatsApp"
        className="relative group w-14 h-14 rounded-2xl bg-[#26d07c] hover:bg-[#20b86c] text-[#0d3f23] flex items-center justify-center shadow-xl shadow-[#26d07c]/30 hover:scale-105 active:scale-95 transition-all"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#26d07c] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
        </span>
        <MessageCircle size={28} className="fill-[#0d3f23] text-[#26d07c]" />
      </a>
    </div>
  );
};
