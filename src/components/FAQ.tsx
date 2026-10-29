import React, { useState } from 'react';
import { TranslationType } from '../data/translations.ts';
import { ChevronDown } from 'lucide-react';

interface FAQProps {
  t: TranslationType;
}

export const FAQ: React.FC<FAQProps> = ({ t }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 border-b border-[rgba(212,175,55,0.12)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">
            {t.faq.kicker}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-brand font-semibold text-[#FDFBF7] leading-tight text-balance mb-3">
            {t.faq.title}
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            {t.faq.subtitle}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {t.faq.questions.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#0A1322] border border-[rgba(212,175,55,0.15)] overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#0E1B30]/50 transition-colors"
                >
                  <span className="text-base sm:text-lg font-serif-brand font-semibold text-[#FDFBF7]">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-[rgba(212,175,55,0.08)]">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
