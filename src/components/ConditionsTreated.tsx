import React from 'react';
import { TranslationType, Language } from '../data/translations.ts';
import { Activity, ShieldAlert, Heart, Zap, Brain, ArrowUpRight } from 'lucide-react';

interface ConditionsTreatedProps {
  t: TranslationType;
  lang: Language;
}

export const ConditionsTreated: React.FC<ConditionsTreatedProps> = ({
  t,
  lang,
}) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'cancer':
        return <Activity className="w-5 h-5 text-amber-400" />;
      case 'paralysis':
        return <Zap className="w-5 h-5 text-sky-400" />;
      case 'infertility':
        return <Heart className="w-5 h-5 text-rose-400" />;
      case 'spine':
        return <ShieldAlert className="w-5 h-5 text-emerald-400" />;
      case 'mental':
        return <Brain className="w-5 h-5 text-indigo-400" />;
      default:
        return <Activity className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="conditions" className="py-16 md:py-24 border-b border-[rgba(212,175,55,0.12)] bg-[#070E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">
            {t.conditions.kicker}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-brand font-semibold text-[#FDFBF7] leading-tight text-balance mb-4">
            {t.conditions.title}
          </h2>
          <p className="text-base text-slate-300 leading-relaxed font-normal">
            {t.conditions.subtitle}
          </p>
        </div>

        {/* 5 Conditions List / Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.conditions.items.map((item, idx) => {
            return (
              <div
                key={item.id}
                className={`p-6 rounded-2xl bg-[#0A1322] border border-[rgba(212,175,55,0.16)] hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between group ${
                  idx === 0 ? 'lg:col-span-2 bg-gradient-to-br from-[#0A1322] to-[#111C30]' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-700/60 flex items-center justify-center">
                      {getIcon(item.id)}
                    </div>
                    <span className="text-xs font-medium text-slate-400 tabular-nums">
                      {lang === 'hi' ? `चिकित्सा प्रभाग #${idx + 1}` : `Case Focus #${idx + 1}`}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif-brand font-semibold text-[#FDFBF7] mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>

                  <div className="space-y-2 mt-3 text-sm">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-slate-400 block mb-0.5 font-medium">
                        {lang === 'hi' ? 'शारीरिक लक्षण एवं कष्ट' : 'Clinical Indicators'}
                      </span>
                      <p className="text-slate-300 font-normal leading-relaxed">
                        {item.symptom}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-800">
                      <span className="text-xs uppercase tracking-wider text-[#D4AF37] block mb-0.5 font-medium">
                        {lang === 'hi' ? 'पारुल जी का वैदिक प्राण उपचार विधान' : 'Parul Suthar Protocol'}
                      </span>
                      <p className="text-slate-300 font-normal leading-relaxed">
                        {item.protocol}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct WhatsApp Consultation for this Condition */}
                <a
                  href="https://wa.me/message/JKPSM4LOM23AH1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 pt-3 border-t border-[rgba(212,175,55,0.12)] w-full flex items-center justify-between text-xs font-semibold text-[#D4AF37] hover:text-[#E5C158] transition-colors cursor-pointer group-hover:translate-x-0.5"
                >
                  <span>
                    {lang === 'hi' ? 'इस कष्ट के निवारण हेतु परामर्श लें' : 'Book WhatsApp Consultation'}
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
