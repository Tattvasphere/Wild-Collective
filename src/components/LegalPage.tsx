import React from 'react';
import { COMPANY_INFO } from '../data/products';
import { LegalDocument } from '../data/legal';

interface LegalPageProps {
  doc: LegalDocument;
  contactEmail: string;
}

export const LegalPage: React.FC<LegalPageProps> = ({ doc, contactEmail }) => (
  <section className="py-12 sm:py-20">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl sm:text-6xl font-black text-[#2f2f2f] tracking-tight">{doc.title}</h1>
      <p className="text-lg text-[#666666] mt-4">{doc.intro}</p>
      <p className="text-xs font-bold uppercase tracking-widest text-[#a58c6d] mt-6">{doc.updated}</p>

      <div className="mt-10 pt-10 border-t border-[#ececec] space-y-10 text-[#4a4a4a] leading-relaxed">
        <p>
          {doc.leadBefore} <strong className="text-[#2f2f2f]">{COMPANY_INFO.legalName}</strong> {doc.leadAfter}
        </p>

        {doc.sections.map((section, idx) => (
          <div key={section.heading}>
            <h2 className="font-display text-2xl font-bold text-[#2f2f2f] mb-4">{section.heading}</h2>
            <div className="space-y-4">
              {section.blocks.map((block, i) =>
                Array.isArray(block) ? (
                  <ul key={i} className="list-disc pl-6 space-y-2">
                    {block.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                ) : (
                  <p key={i}>{block}</p>
                )
              )}
            </div>
            {idx === doc.sections.length - 1 && (
              <address className="not-italic mt-5 p-5 bg-[#faf9f7] border border-[#ececec] rounded-md space-y-1 text-sm">
                <strong className="block text-[#2f2f2f]">{COMPANY_INFO.legalName}</strong>
                <span className="block">{COMPANY_INFO.address}</span>
                <a href={`mailto:${contactEmail}`} className="block hover:text-[#a58c6d]">{contactEmail}</a>
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="block hover:text-[#a58c6d]">{COMPANY_INFO.phone}</a>
                <span className="block">GSTIN: {COMPANY_INFO.gstin}</span>
              </address>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);
