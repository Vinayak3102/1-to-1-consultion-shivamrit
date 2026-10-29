import React from 'react';
import { TranslationType, Language } from '../data/translations.ts';
import { Phone, MessageCircle, MapPin, Instagram, Facebook } from 'lucide-react';

interface FooterProps {
  t: TranslationType;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({
  t,
  lang,
}) => {
  return (
    <footer className="bg-[#03070E] border-t border-[rgba(212,175,55,0.15)] text-slate-400 text-xs py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[rgba(212,175,55,0.1)]">
          {/* Brand Wordmark & Mission */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <img
                src="/images/logo.png"
                alt="ShivAmrit Healers Logo"
                className="w-8 h-8 rounded-full object-cover border border-[#D4AF37]/40 shadow-sm shrink-0 bg-[#070E1A]"
                onError={(e) => {
                  e.currentTarget.src = 'https://shivamrithealers-com-782967.hostingersite.com/wp-content/uploads/2026/10/ChatGPT-Image-Aug-2-2026-02_26_29-PM.png';
                }}
              />
              <h4 className="text-xl font-serif-brand font-semibold text-[#FDFBF7]">
                ShivAmrit Healers
              </h4>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-300 pt-1">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>{t.footer.address}</span>
            </div>

            {/* Official Social Media Channels */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href="https://www.instagram.com/shivamrit_healers/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A1322] hover:bg-[#132038] text-slate-300 hover:text-[#D4AF37] border border-[rgba(212,175,55,0.25)] transition-colors cursor-pointer"
                title="Follow ShivAmrit Healers on Instagram"
              >
                <Instagram className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="font-medium text-[11px]">Instagram</span>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61563686020129&ref=PROFILE_EDIT_xav_ig_profile_page_web#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A1322] hover:bg-[#132038] text-slate-300 hover:text-[#D4AF37] border border-[rgba(212,175,55,0.25)] transition-colors cursor-pointer"
                title="Follow ShivAmrit Healers on Facebook"
              >
                <Facebook className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="font-medium text-[11px]">Facebook</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider block mb-3">
              {lang === 'hi' ? 'मुख्य नेविगेशन' : 'Navigation'}
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#why-1to1" className="hover:text-white transition-colors">
                  {t.nav.whyOneToOne}
                </a>
              </li>
              <li>
                <a href="#conditions" className="hover:text-white transition-colors">
                  {t.nav.conditions}
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  {t.nav.process}
                </a>
              </li>
              <li>
                <a href="#healer" className="hover:text-white transition-colors">
                  {t.nav.healer}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  {lang === 'hi' ? 'मरीजों के अनुभव' : 'Case Stories'}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  {t.nav.faq}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Direct Booking */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider block mb-3">
              {lang === 'hi' ? 'सीधा संपर्क एवं परामर्श सहायता' : 'Direct Helpline'}
            </span>
            <div className="flex flex-col gap-2.5">
              <a
                href="https://wa.me/message/JKPSM4LOM23AH1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-xs font-medium"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>+91 90163 30390 (WhatsApp)</span>
              </a>

              <a
                href="tel:+919016330390"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-[#D4AF37] text-xs font-medium transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>{lang === 'hi' ? '+91 90163 30390 (सीधा फोन कॉल)' : '+91 90163 30390 (Direct Call)'}</span>
              </a>

              <p className="text-[11px] text-slate-400 leading-normal">
                {lang === 'hi'
                  ? 'परामर्श समय: प्रातः 10:00 से रात्रि 08:30 (IST) • सोमवार से शनिवार'
                  : 'Hours: 10:00 AM – 08:30 PM (IST) • Monday to Saturday'}
              </p>

              <div className="pt-2 flex flex-wrap gap-2">
                <a
                  href="https://wa.me/message/JKPSM4LOM23AH1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold text-[#050B14] bg-[#D4AF37] hover:bg-[#E5C158] rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{t.nav.bookCta}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-6 space-y-3">
          <p className="text-[11px] text-slate-400 leading-relaxed max-w-4xl">
            {t.footer.disclaimer}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400 pt-3 border-t border-slate-900">
            <span>{t.footer.rights}</span>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/shivamrit_healers/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37] transition-colors flex items-center gap-1"
              >
                <Instagram className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>@shivamrit_healers</span>
              </a>
              <span className="text-slate-700">·</span>
              <a
                href="https://www.facebook.com/profile.php?id=61563686020129&ref=PROFILE_EDIT_xav_ig_profile_page_web#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37] transition-colors flex items-center gap-1"
              >
                <Facebook className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Facebook</span>
              </a>
              <span className="text-slate-700">·</span>
              <span>Sachin, Surat · Gujarat</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
