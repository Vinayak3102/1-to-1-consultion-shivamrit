import React, { useState } from 'react';
import { Language, TranslationType } from '../data/translations.ts';
import { Menu, X, Languages, MessageCircle } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  t: TranslationType;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageChange,
  t,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#050B14]/90 backdrop-blur-md border-b border-[rgba(212,175,55,0.18)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Single element Brand Mark with sacred logo (strictly used once as brand identity) */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 sm:gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] min-w-0"
            title="ShivAmrit Healers — Holistic Bio-Energy"
          >
            <img
              src="/images/logo.png"
              alt="ShivAmrit Healers Logo"
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover border border-[#D4AF37]/50 shadow-sm shrink-0 bg-[#070E1A]"
              onError={(e) => {
                e.currentTarget.src = 'https://shivamrithealers-com-782967.hostingersite.com/wp-content/uploads/2026/10/ChatGPT-Image-Aug-2-2026-02_26_29-PM.png';
              }}
            />
            <div className="flex flex-col min-w-0">
              <span className="text-base sm:text-xl md:text-2xl font-serif-brand font-semibold text-[#FDFBF7] tracking-tight leading-tight group-hover:text-[#D4AF37] transition-colors truncate">
                ShivAmrit Healers
              </span>
              <span className="text-[9px] sm:text-[11px] font-sans text-[#D4AF37]/90 tracking-widest uppercase mt-0.5 font-medium truncate">
                {lang === 'hi' ? 'वैदिक प्राण ऊर्जा एवं रेकी आरोग्य केंद्र' : 'Holistic Bio-Energy Sanctum'}
              </span>
            </div>
          </a>

          {/* Zone 2: 4–6 Clean Nav links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <button
              onClick={() => scrollTo('why-1to1')}
              className="hover:text-[#D4AF37] transition-colors py-1 cursor-pointer"
            >
              {t.nav.whyOneToOne}
            </button>
            <button
              onClick={() => scrollTo('conditions')}
              className="hover:text-[#D4AF37] transition-colors py-1 cursor-pointer"
            >
              {t.nav.conditions}
            </button>
            <button
              onClick={() => scrollTo('process')}
              className="hover:text-[#D4AF37] transition-colors py-1 cursor-pointer"
            >
              {t.nav.process}
            </button>
            <button
              onClick={() => scrollTo('healer')}
              className="hover:text-[#D4AF37] transition-colors py-1 cursor-pointer"
            >
              {t.nav.healer}
            </button>
            <button
              onClick={() => scrollTo('testimonials')}
              className="hover:text-[#D4AF37] transition-colors py-1 cursor-pointer"
            >
              {lang === 'hi' ? 'सच्चे अनुभव' : 'Stories'}
            </button>
            <button
              onClick={() => scrollTo('faq')}
              className="hover:text-[#D4AF37] transition-colors py-1 cursor-pointer"
            >
              {t.nav.faq}
            </button>
          </nav>

          {/* Zone 3: 1-2 Primary actions & Language toggle */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* 2 Language Switcher: English & Hindi */}
            <div className="flex items-center p-0.5 sm:p-1 bg-[#0A1322] border border-[rgba(212,175,55,0.25)] rounded-lg text-xs font-medium">
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2 sm:px-3 py-1 rounded-md transition-colors cursor-pointer ${
                  lang === 'en'
                    ? 'bg-[#D4AF37] text-[#050B14] font-semibold shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
                title="English"
              >
                English
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('hi')}
                className={`px-2 sm:px-3 py-1 rounded-md transition-colors cursor-pointer ${
                  lang === 'hi'
                    ? 'bg-[#D4AF37] text-[#050B14] font-semibold shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
                title="हिन्दी"
              >
                हिन्दी
              </button>
            </div>

            {/* Desktop / Tablet Full Action Button: Direct WhatsApp Consultation */}
            <a
              href="https://wa.me/message/JKPSM4LOM23AH1"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-[#050B14] bg-[#D4AF37] hover:bg-[#E5C158] rounded-lg transition-all shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 text-[#050B14]" />
              <span>{t.nav.bookCta}</span>
            </a>

            {/* Mobile WhatsApp Quick Action Icon */}
            <a
              href="https://wa.me/message/JKPSM4LOM23AH1"
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden p-2 rounded-lg bg-[#D4AF37] text-[#050B14] shadow-sm hover:bg-[#E5C158] transition-colors"
              title="WhatsApp Consultation"
              aria-label="WhatsApp Consultation"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 px-2 border-t border-[rgba(212,175,55,0.15)] bg-[#0A1322]/98 rounded-b-xl shadow-xl space-y-3 animate-fadeIn">
            {/* Mobile 2 Language Switch: English & Hindi */}
            <div className="flex items-center justify-center p-1 bg-[#050B14] border border-[rgba(212,175,55,0.2)] rounded-lg text-xs font-medium mx-2">
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`flex-1 py-1.5 rounded-md transition-colors ${
                  lang === 'en' ? 'bg-[#D4AF37] text-[#050B14] font-semibold' : 'text-slate-300'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('hi')}
                className={`flex-1 py-1.5 rounded-md transition-colors ${
                  lang === 'hi' ? 'bg-[#D4AF37] text-[#050B14] font-semibold' : 'text-slate-300'
                }`}
              >
                हिन्दी
              </button>
            </div>

            <button
              onClick={() => scrollTo('why-1to1')}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#D4AF37] hover:bg-[#132038]/50 rounded-md"
            >
              {t.nav.whyOneToOne}
            </button>
            <button
              onClick={() => scrollTo('conditions')}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#D4AF37] hover:bg-[#132038]/50 rounded-md"
            >
              {t.nav.conditions}
            </button>
            <button
              onClick={() => scrollTo('process')}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#D4AF37] hover:bg-[#132038]/50 rounded-md"
            >
              {t.nav.process}
            </button>
            <button
              onClick={() => scrollTo('healer')}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#D4AF37] hover:bg-[#132038]/50 rounded-md"
            >
              {t.nav.healer}
            </button>
            <button
              onClick={() => scrollTo('testimonials')}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#D4AF37] hover:bg-[#132038]/50 rounded-md"
            >
              {lang === 'hi' ? 'सच्चे अनुभव' : 'Patient Stories'}
            </button>
            <button
              onClick={() => scrollTo('faq')}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-200 hover:text-[#D4AF37] hover:bg-[#132038]/50 rounded-md"
            >
              {t.nav.faq}
            </button>
            <div className="pt-2 border-t border-[rgba(212,175,55,0.15)]">
              <a
                href="https://wa.me/message/JKPSM4LOM23AH1"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-xs font-semibold text-[#050B14] bg-[#D4AF37] hover:bg-[#E5C158] rounded-lg text-center flex items-center justify-center gap-1.5 transition-colors shadow-md"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>{t.nav.bookCta}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

