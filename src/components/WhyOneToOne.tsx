import React from 'react';
import { TranslationType, Language } from '../data/translations.ts';
import { Sparkles } from 'lucide-react';

interface WhyOneToOneProps {
  t: TranslationType;
  lang?: Language;
}

export const WhyOneToOne: React.FC<WhyOneToOneProps> = ({ t, lang = 'hi' }) => {
  return (
    <section id="why-1to1" className="py-16 md:py-24 border-b border-[rgba(212,175,55,0.12)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{t.whyOneToOne.kicker}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-brand font-semibold text-[#FDFBF7] leading-tight text-balance mb-4">
            {t.whyOneToOne.title}
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-normal">
            {t.whyOneToOne.subtitle}
          </p>
        </div>

        {/* 4 Cards Grid - 2x2 asymmetric bento flow with human editorial numbering */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {t.whyOneToOne.cards.map((card, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-8 rounded-2xl bg-[#0A1322] border border-[rgba(212,175,55,0.16)] hover:border-[rgba(212,175,55,0.35)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Editorial Number & Quiet Pill-less Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-serif-brand font-bold text-[#D4AF37] tabular-nums">
                    {card.step}.
                  </span>
                  <span className="text-xs font-medium text-slate-400 group-hover:text-[#D4AF37] transition-colors">
                    {card.highlight}
                  </span>
                </div>

                <h3 className="text-xl font-serif-brand font-semibold text-[#FDFBF7] mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              {/* Bottom subtle accent line */}
              <div className="mt-6 pt-4 border-t border-[rgba(212,175,55,0.1)] flex items-center justify-between text-xs text-[#D4AF37]/80">
                <span>{lang === 'hi' ? 'व्यक्तिगत सूक्ष्म ऊर्जा परीक्षण' : 'Personalized Bio-Field Assessment'}</span>
                <span>{lang === 'hi' ? 'प्रमाणित वैदिक साधना विधान' : 'Verified Sadhana Protocol'}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
