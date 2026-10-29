import React from 'react';
import { TranslationType, Language } from '../data/translations.ts';
import { CalendarCheck, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';

interface SlotBookingBannerProps {
  t: TranslationType;
  lang: Language;
}

export const SlotBookingBanner: React.FC<SlotBookingBannerProps> = ({ t }) => {
  const whatsappUrl = 'https://wa.me/message/JKPSM4LOM23AH1';

  return (
    <section id="book-slot" className="py-16 md:py-24 border-b border-[rgba(212,175,55,0.18)] bg-gradient-to-b from-[#070E1A] via-[#0A1322] to-[#050B14] relative overflow-hidden">
      {/* Subtle sacred warm glow in background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#D4AF37]/10 blur-[100px] rounded-full"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Kicker */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-3 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25">
          <CalendarCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>{t.slotBanner.kicker}</span>
        </div>

        {/* The Exact Line Requested by User: "Book Your 1 to 1 Consultation Slot" */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif-brand font-bold text-[#FDFBF7] tracking-tight mb-4">
          <span className="gold-gradient-text">
            Book Your <span className="whitespace-nowrap inline-block text-[#D4AF37] px-1 font-bold">1-to-1</span> Consultation Slot
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
          {t.slotBanner.subheading}
        </p>

        {/* High Conversion Action Buttons */}
        <div className="flex items-center justify-center max-w-md mx-auto mb-6">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-[#050B14] bg-[#D4AF37] hover:bg-[#E5C158] rounded-xl transition-all shadow-xl hover:shadow-2xl active:scale-[0.98] cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-5 h-5 text-[#050B14]" />
            <span>{t.slotBanner.directWhatsappBtn}</span>
          </a>
        </div>

        {/* Reassurance text */}
        <p className="text-xs text-slate-400 max-w-xl mx-auto flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
          <span>{t.slotBanner.guaranteeText}</span>
        </p>

      </div>
    </section>
  );
};
