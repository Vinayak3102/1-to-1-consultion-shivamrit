import React from 'react';
import { TranslationType, Language } from '../data/translations.ts';
import { Clock, Eye, Video, FileCheck2 } from 'lucide-react';

interface ConsultationProcessProps {
  t: TranslationType;
  lang?: Language;
}

export const ConsultationProcess: React.FC<ConsultationProcessProps> = ({ t, lang = 'hi' }) => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Eye className="w-5 h-5 text-[#D4AF37]" />;
      case 1:
        return <Video className="w-5 h-5 text-[#D4AF37]" />;
      case 2:
        return <FileCheck2 className="w-5 h-5 text-[#D4AF37]" />;
      default:
        return <Clock className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="process" className="py-16 md:py-24 border-b border-[rgba(212,175,55,0.12)] bg-[#070E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">
            {t.process.kicker}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-brand font-semibold text-[#FDFBF7] leading-tight text-balance mb-4">
            {t.process.title}
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-normal">
            {t.process.subtitle}
          </p>
        </div>

        {/* 3 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {t.process.steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-[#0A1322] border border-[rgba(212,175,55,0.16)] flex flex-col justify-between relative group hover:border-[#D4AF37]/50 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#050B14] border border-[rgba(212,175,55,0.25)] flex items-center justify-center">
                    {getIcon(idx)}
                  </div>
                  <span className="text-2xl font-serif-brand font-bold text-[#D4AF37] tabular-nums">
                    {step.number}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#D4AF37] font-medium mb-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{step.timeframe}</span>
                </div>

                <h3 className="text-lg font-serif-brand font-semibold text-[#FDFBF7] mb-3 leading-snug">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400">
                {lang === 'hi' ? `समग्र प्राण चिकित्सा चरण #${idx + 1}` : `Phase ${idx + 1} of Holistic Protocol`}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
