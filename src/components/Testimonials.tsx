import React from 'react';
import { TranslationType, Language } from '../data/translations.ts';
import { Quote, CheckCircle } from 'lucide-react';

interface TestimonialsProps {
  t: TranslationType;
  lang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ t, lang }) => {
  return (
    <section id="testimonials" className="py-16 md:py-24 border-b border-[rgba(212,175,55,0.12)] bg-[#070E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">
            {t.testimonials.kicker}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-brand font-semibold text-[#FDFBF7] leading-tight text-balance mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-normal">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.testimonials.items.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-[#0A1322] border border-[rgba(212,175,55,0.16)] flex flex-col justify-between group hover:border-[#D4AF37]/40 transition-all"
            >
              <div>
                <Quote className="w-8 h-8 text-[#D4AF37]/40 mb-4" />
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(212,175,55,0.12)]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-base font-serif-brand font-semibold text-[#FDFBF7]">
                    {item.patientName}
                  </span>
                  <span className="text-xs text-slate-400">
                    {item.city}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-[#D4AF37]">
                  <span>{item.condition}</span>
                  <span className="text-slate-400">{item.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
