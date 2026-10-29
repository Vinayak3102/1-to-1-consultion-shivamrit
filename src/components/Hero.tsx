import React from 'react';
import { TranslationType, Language } from '../data/translations.ts';
import { ArrowDown, MessageCircle, ShieldCheck, HeartHandshake, MapPin } from 'lucide-react';

interface HeroProps {
  t: TranslationType;
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ t, lang }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[rgba(212,175,55,0.12)]">
      {/* Subtle sacred ambient light - disciplined, no cheap neon */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#D4AF37]/10 via-[#0A1322]/20 to-transparent blur-3xl rounded-full" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold, Bright, Clear Value Proposition (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Clean unboxed practitioner kicker */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#D4AF37] tracking-wider uppercase mb-3">
              <span className="inline-block w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline (Anek Bold, Powerful & Clean) */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.85rem] font-bold text-[#FDFBF7] leading-[1.24] tracking-tight mb-8 text-balance">
              <span className="font-bold">{t.hero.headlinePart1}</span>{' '}
              <span className="gold-gradient-text font-bold">
                {t.hero.headlineHighlight}
              </span>{' '}
              <span className="font-bold">{t.hero.headlinePart2}</span>
            </h1>

            {/* Dual High-Conversion CTA Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="https://wa.me/message/JKPSM4LOM23AH1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-[#050B14] bg-[#D4AF37] hover:bg-[#E5C158] rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-[0.98] cursor-pointer whitespace-nowrap"
              >
                <span>{t.hero.bookBtn}</span>
                <MessageCircle className="w-5 h-5 text-[#050B14]" />
              </a>

              <button
                onClick={() => scrollTo('healer')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-medium text-slate-200 hover:text-white bg-[#0A1322] hover:bg-[#132038] border border-[rgba(212,175,55,0.25)] rounded-xl transition-all cursor-pointer whitespace-nowrap"
              >
                <span>{lang === 'hi' ? 'ग्रांड मास्टर पारुल सुथार का परिचय' : 'About Parul Suthar'}</span>
              </button>
            </div>

            {/* Trust Badges - Claim to proof adjacency */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-10 pt-6 border-t border-[rgba(212,175,55,0.12)] w-full max-w-2xl">
              {t.hero.trustItems.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-sm sm:text-base font-semibold text-[#FDFBF7] font-serif-brand">
                    {item.title}
                  </span>
                  <span className="text-xs text-slate-400 leading-snug mt-0.5">
                    {item.subtitle}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Authentic Healer Visual Anchor (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Portrait Frame - Natural lighting, 4K quality, Indian realistic presence */}
              <div className="relative rounded-2xl overflow-hidden gold-border-glow bg-[#0A1322] aspect-[4/5] shadow-2xl">
                <img
                  src="/images/parul_suthar_2.webp"
                  alt="Reiki Grand Master Parul Suthar - ShivAmrit Healers"
                  className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.src = 'https://shivamrithealers-com-782967.hostingersite.com/wp-content/uploads/2026/10/W-atsApp-Image-2026-09-02-at-12.13.10.webp';
                  }}
                />

                {/* Refined gradient scrim for clean text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/30 to-transparent pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0A1322]/90 backdrop-blur-md border border-[rgba(212,175,55,0.25)] flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-serif-brand font-semibold text-[#FDFBF7]">
                      {lang === 'hi' ? 'रेकी ग्रांड मास्टर पारुल सुथार' : 'Parul Suthar'}
                    </h3>
                    <p className="text-xs text-[#D4AF37] font-medium mt-0.5">
                      {lang === 'hi' ? '20+ वर्ष समर्पित साधना · उसुई एवं करुणा रेकी' : '20+ Years Sadhana · Usui & Karuna Reiki'}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                </div>
              </div>

              {/* Floating Sanctum Location Tag */}
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400 bg-[#0A1322]/60 border border-[rgba(212,175,55,0.12)] rounded-lg py-2 px-3">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>
                  {lang === 'hi'
                    ? 'सचिन क्लिनिक, सूरत (गुजरात) • विश्वव्यापी सुदूर हीलिंग'
                    : 'Sachin Sanctuary, Surat, Gujarat • Global Distance Attunement'}
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
