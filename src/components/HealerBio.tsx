import React from 'react';
import { TranslationType, Language } from '../data/translations.ts';
import { MapPin, Award, Shield, CheckCircle } from 'lucide-react';

interface HealerBioProps {
  t: TranslationType;
  lang: Language;
}

export const HealerBio: React.FC<HealerBioProps> = ({ t, lang }) => {
  return (
    <section id="healer" className="py-16 md:py-24 border-b border-[rgba(212,175,55,0.12)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image 1 showing Parul Suthar in clinical sanctuary (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden gold-border-glow bg-[#0A1322] aspect-[4/5] shadow-2xl">
              <img
                src="/images/parul_suthar_1.jpg"
                alt="Reiki Grand Master Parul Suthar in Healing Session"
                className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="eager"
                onError={(e) => {
                  e.currentTarget.src = 'https://shivamrithealers-com-782967.hostingersite.com/wp-content/uploads/2026/10/ChatGPT-Image-Oct-16-2026-10_29_28-AM.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/15 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#0A1322]/90 backdrop-blur-sm border border-[rgba(212,175,55,0.25)] flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold block">
                    {lang === 'hi' ? 'वैदिक साधना एवं प्राण चिकित्सा' : 'Sacred Sadhana'}
                  </span>
                  <p className="text-sm font-serif-brand font-semibold text-[#FDFBF7]">
                    {lang === 'hi' ? 'ग्रांड मास्टर पारुल सुथार · सचिन क्लिनिक' : 'Parul Suthar · Sachin Sanctum'}
                  </p>
                </div>
                <Award className="w-5 h-5 text-[#D4AF37]" />
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Pillars (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">
              {t.healer.kicker}
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif-brand font-semibold text-[#FDFBF7] mb-2">
              {t.healer.name}
            </h2>

            <p className="text-sm text-[#D4AF37] font-medium mb-6">
              {t.healer.title}
            </p>

            <div className="space-y-4 text-base text-slate-300 leading-relaxed font-normal mb-8">
              {t.healer.bioParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-8 pt-4 border-t border-[rgba(212,175,55,0.15)]">
              {t.healer.pillars.map((pillar, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#0A1322] border border-slate-800">
                  <span className="text-xs uppercase tracking-wider text-slate-400 block mb-1">
                    {pillar.label}
                  </span>
                  <span className="text-sm font-semibold text-[#FDFBF7] font-serif-brand">
                    {pillar.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Sanctum Location Signal */}
            <div className="w-full p-4 rounded-xl bg-[#0A1322] border border-[rgba(212,175,55,0.15)] flex items-start gap-3 mb-6">
              <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] block">
                  {t.healer.locationLabel}
                </span>
                <p className="text-sm text-slate-300 mt-0.5 font-normal">
                  {t.healer.locationValue}
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/message/JKPSM4LOM23AH1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#050B14] bg-[#D4AF37] hover:bg-[#E5C158] rounded-xl transition-all shadow-md cursor-pointer"
            >
              <span>{t.nav.bookCta}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
