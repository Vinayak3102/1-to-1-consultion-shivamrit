import React, { useState } from 'react';
import { translations, Language } from './data/translations.ts';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { WhyOneToOne } from './components/WhyOneToOne.tsx';
import { ConditionsTreated } from './components/ConditionsTreated.tsx';
import { SlotBookingBanner } from './components/SlotBookingBanner.tsx';
import { ConsultationProcess } from './components/ConsultationProcess.tsx';
import { HealerBio } from './components/HealerBio.tsx';
import { VideoShowcase } from './components/VideoShowcase.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { FAQ } from './components/FAQ.tsx';
import { Footer } from './components/Footer.tsx';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('en');

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-[#050B14] text-[#FDFBF7] flex flex-col font-sans selection:bg-[#D4AF37] selection:text-[#050B14] overflow-x-hidden w-full max-w-full">
      {/* Top Bar Navigation */}
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        t={t}
      />

      {/* Main Landing Page Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          t={t}
          lang={lang}
        />

        {/* Why 1-to-1 is Transformative */}
        <WhyOneToOne t={t} lang={lang} />

        {/* Conditions Treated */}
        <ConditionsTreated
          t={t}
          lang={lang}
        />

        {/* Dedicated "Book Your 1-to-1 Consultation Slot" Banner Section */}
        <SlotBookingBanner
          t={t}
          lang={lang}
        />

        {/* 3-Step Consultation Protocol */}
        <ConsultationProcess t={t} lang={lang} />

        {/* Authentic Healer Bio with Parul Suthar */}
        <HealerBio
          t={t}
          lang={lang}
        />

        {/* Video Healing Showcase & Patient Recovery Stories */}
        <VideoShowcase
          t={t}
          lang={lang}
        />

        {/* Attributable Indian Patient Proof */}
        <Testimonials
          t={t}
          lang={lang}
        />

        {/* FAQ Section */}
        <FAQ t={t} />
      </main>

      {/* Quiet Footer */}
      <Footer
        t={t}
        lang={lang}
      />

      {/* Floating Minimal Mobile WhatsApp Quick Connect (subtle, obeys 15% sticky cap) */}
      <aside aria-label="Quick contact" className="fixed bottom-4 right-4 z-40 flex flex-col gap-2">
        <a
          href="https://wa.me/message/JKPSM4LOM23AH1"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp Grand Master Parul Suthar"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all border border-emerald-400/40"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </aside>
    </div>
  );
}
