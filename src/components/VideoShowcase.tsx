import React, { useState, useRef, useEffect } from 'react';
import { TranslationType, Language } from '../data/translations.ts';
import { getParulVideo } from '../utils/videoStorage.ts';
import {
  Play,
  Pause,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  HeartPulse,
  Instagram,
  Facebook,
} from 'lucide-react';

interface VideoShowcaseProps {
  t: TranslationType;
  lang: Language;
}

interface SubtitleStep {
  time: number; // seconds
  text: string;
  hindiText: string;
}

const PARUL_VIDEO_SUBTITLES: SubtitleStep[] = [
  {
    time: 0,
    text: "Namaskar. If you are a woman suffering from health issues and cannot find a real solution...",
    hindiText: "नमस्कार। यदि आप निरंतर स्वास्थ्य समस्याओं से परेशान हैं और कोई स्थायी समाधान नहीं मिल पा रहा है...",
  },
  {
    time: 14,
    text: "Whether periods are irregular, or your body feels weak, stressed, mood swings, or hormonal imbalance...",
    hindiText: "चाहे शारीरिक दुर्बलता हो, अत्यधिक तनाव, मानसिक अशांति या हार्मोनल असंतुलन का कष्ट हो...",
  },
  {
    time: 25,
    text: "Or suffering from a critical health problem where reports are normal, but the body still doesn't feel normal...",
    hindiText: "अथवा कोई गंभीर शारीरिक व्याधि जहाँ जांच रिपोर्टें सामान्य आती हैं, पर शरीर अस्वस्थ अनुभव करता है...",
  },
  {
    time: 36,
    text: "Even after medical treatment, a question lingers: 'What is exactly wrong with me?'...",
    hindiText: "और तमाम इलाजों व दवाओं के उपरांत भी मन में यही प्रश्न बना रहता है कि आखिर बीमारी की वास्तविक जड़ कहाँ है?...",
  },
  {
    time: 43,
    text: "Hi, I am Parul Suthar. I help women understand their health deeply and balance it naturally.",
    hindiText: "मैं रेकी ग्रांड मास्टर पारुल सुथार। मैं स्वास्थ्य समस्याओं के सूक्ष्म कारणों को समझकर प्राकृतिक प्राण ऊर्जा से संतुलन प्राप्त करने में आपका मार्गदर्शन करती हूँ।",
  },
  {
    time: 55,
    text: "This session is for ladies who want to heal seriously, clear confusion, and gain clarity for their next step.",
    hindiText: "यह 1-to-1 व्यक्तिगत परामर्श सत्र उन सभी के लिए है जो अपने स्वास्थ्य को पूरी निष्ठा व गंभीरता से स्वस्थ करना चाहते हैं और हर भ्रम से मुक्ति चाहते हैं।",
  },
  {
    time: 70,
    text: "If you don't want to ignore your health, book a private clarity session with me. I will meet you on call. Thank you.",
    hindiText: "यदि आप अपनी बीमारी को और अनदेखा नहीं करना चाहते, तो अभी अपना व्यक्तिगत परामर्श स्लॉट आरक्षित करें। सत्र में आपसे प्रत्यक्ष रूबरू होती हूँ। धन्यवाद।",
  }
];

export const VideoShowcase: React.FC<VideoShowcaseProps> = ({ t, lang }) => {
  const [videoSrc, setVideoSrc] = useState<string>('/assets/aistudio/video_2_2c58ba19.mp4');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Check IndexedDB only if a valid, substantial custom video was saved
  useEffect(() => {
    async function loadStored() {
      try {
        const blob = await getParulVideo();
        if (blob && blob.size > 500000) {
          const objectUrl = URL.createObjectURL(blob);
          setVideoSrc(objectUrl);
        }
      } catch (err) {
        console.warn('Error loading custom video', err);
      }
    }
    loadStored();
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn('Playback error', err);
        });
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section id="parul-video-message" className="py-16 md:py-24 bg-[#070E1A] border-b border-[rgba(212,175,55,0.15)] relative overflow-hidden">
      
      {/* Background Sacred Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>
              {lang === 'hi'
                ? 'ग्रैंड मास्टर पारुल सुथार का विशेष संदेश'
                : 'A Personal Message from Grand Master Parul Suthar'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-brand font-semibold text-[#FDFBF7] leading-tight text-balance mb-3">
            {lang === 'hi'
              ? 'जटिल स्वास्थ्य समस्याओं के समाधान हेतु व्यक्तिगत (1-to-1) परामर्श'
              : 'Private 1 to 1 Clarity Session for Women’s Health'}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {lang === 'hi'
              ? 'यदि आपकी मेडिकल जांच रिपोर्टें सामान्य हैं फिर भी शरीर में अत्यधिक दुर्बलता या असहजता बनी हुई है — तो सुनें ग्रांड मास्टर पारुल सुथार का यह व्यक्तिगत संदेश।'
              : 'When medical reports appear normal yet your body feels drained or unbalanced — hear Grand Master Parul Suthar’s direct invitation.'}
          </p>
        </div>

        {/* 2-Column Master Layout: 9:16 Video Player on Left, Consultation Benefits on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: 9:16 Vertical Reel Player */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[370px] aspect-[9/16] rounded-3xl overflow-hidden bg-black border-2 border-[rgba(212,175,55,0.4)] shadow-2xl flex flex-col justify-between group">
              
              {/* Header inside Reel */}
              <div className="absolute top-0 left-0 right-0 z-20 p-4 bg-gradient-to-b from-black/90 via-black/40 to-transparent flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#D4AF37]/30">
                  <img
                    src="/images/logo.png"
                    alt="ShivAmrit Logo"
                    className="w-5 h-5 rounded-full object-cover bg-[#070E1A]"
                    onError={(e) => {
                      e.currentTarget.src = 'https://shivamrithealers-com-782967.hostingersite.com/wp-content/uploads/2026/10/ChatGPT-Image-Aug-2-2026-02_26_29-PM.png';
                    }}
                  />
                  <span className="text-[11px] font-serif-brand font-semibold text-white">
                    Parul Suthar
                  </span>
                </div>

                <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] px-2.5 py-1 rounded-md bg-[#D4AF37]/15 border border-[#D4AF37]/30 backdrop-blur-sm font-semibold">
                  Clarity Session
                </span>
              </div>

              {/* Native Video Player with Full Mobile Support */}
              <div className="relative w-full h-full flex items-center justify-center bg-black">
                <video
                  ref={videoRef}
                  src={videoSrc}
                  poster="/images/parul_video_poster.jpg"
                  playsInline
                  controls
                  preload="metadata"
                  controlsList="nodownload"
                  className="w-full h-full object-cover"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onTimeUpdate={() => {
                    if (videoRef.current) {
                      setCurrentTime(videoRef.current.currentTime);
                    }
                  }}
                >
                  <source src="/assets/aistudio/video_2_2c58ba19.mp4" type="video/mp4" />
                  <source src="/videos/parul_suthar_clarity_video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Big Touchable Play Button Overlay for Mobile Phones */}
                {!isPlaying && (
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/40 hover:bg-black/25 active:bg-black/55 transition-all cursor-pointer p-4 group"
                    aria-label="Play Video Message"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#D4AF37] text-[#050B14] flex items-center justify-center shadow-2xl group-hover:scale-105 active:scale-95 transition-transform border-2 border-white/60 mb-3">
                      <Play className="w-8 h-8 sm:w-9 sm:h-9 fill-current ml-1 text-[#050B14]" />
                    </div>
                    <span className="px-4 py-1.5 rounded-full bg-black/85 backdrop-blur-md text-xs sm:text-sm font-semibold text-white border border-[#D4AF37]/50 shadow-lg text-center">
                      {lang === 'hi' ? '▶ वीडियो देखने के लिए यहाँ टैप करें' : '▶ Tap Here to Play Video'}
                    </span>
                  </button>
                )}
              </div>

            </div>
          </div>

          {/* Right Column: Parul Suthar's Clarity Session Details & Booking */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="p-6 rounded-2xl bg-[#0A1322] border border-[rgba(212,175,55,0.25)] space-y-4">
              <h3 className="text-xl sm:text-2xl font-serif-brand font-semibold text-[#FDFBF7]">
                {lang === 'hi'
                  ? 'इस संदेश में पारुल जी द्वारा संबोधित मुख्य स्वास्थ्य समस्याएं:'
                  : 'Key Conditions Addressed in this Video:'}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[#050B14] border border-slate-800 flex items-start gap-2.5">
                  <HeartPulse className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-white block">
                      {lang === 'hi' ? 'हार्मोनल असंतुलन व शारीरिक कष्ट' : 'Hormonal Imbalance & Fatigue'}
                    </strong>
                    <span className="text-[11px] text-slate-400">
                      {lang === 'hi' ? 'शारीरिक चक्र में व्यवधान' : 'Menstrual cycle irregularities'}
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#050B14] border border-slate-800 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-white block">
                      {lang === 'hi' ? 'शारीरिक शिथिलता एवं मानसिक अशांति' : 'Hormonal Imbalance & Fatigue'}
                    </strong>
                    <span className="text-[11px] text-slate-400">
                      {lang === 'hi' ? 'लगातार थकान, बेचैनी व घबराहट' : 'Mood swings & body weakness'}
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#050B14] border border-slate-800 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-white block">
                      {lang === 'hi' ? 'रिपोर्ट्स सामान्य, पर शरीर में असहनीय पीड़ा' : 'Normal Reports, Unexplained Pain'}
                    </strong>
                    <span className="text-[11px] text-slate-400">
                      {lang === 'hi' ? 'बीमारी का मूल कारण न मिलना' : 'Body doesn’t feel normal'}
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#050B14] border border-slate-800 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs text-white block">
                      {lang === 'hi' ? 'इलाज के बाद भी लगातार उलझन' : 'Post-Treatment Confusion'}
                    </strong>
                    <span className="text-[11px] text-slate-400">
                      {lang === 'hi' ? 'आगे क्या करें इसकी सटीक स्पष्टता' : 'Need clarity on the next step'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 text-xs text-slate-300 leading-relaxed">
                <p>
                  {lang === 'hi'
                    ? '“यह व्यक्तिगत परामर्श उन सभी के लिए है जो अपने स्वास्थ्य को पूरी गंभीरता व निष्ठा से ठीक करना चाहते हैं और हर संशय से मुक्ति चाहते हैं।”'
                    : '“This session is exclusively for women who genuinely want to heal their health, remove confusion, and find natural balance.”'}
                </p>
              </div>
            </div>

            {/* Direct Action Booking Button directly matching the video message */}
            <div className="space-y-3">
              <a
                href="https://wa.me/message/JKPSM4LOM23AH1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 text-sm font-semibold text-[#050B14] bg-[#D4AF37] hover:bg-[#E5C158] rounded-xl transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-[#050B14]" />
                <span>
                  {lang === 'hi'
                    ? 'पारुल सुथार के साथ व्यक्तिगत (1-to-1) परामर्श बुक करें (WhatsApp)'
                    : 'Book Private Clarity Session with Parul Suthar'}
                </span>
              </a>

              <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2 px-1">
                <span>ShivAmrit Healers · Sachin, Surat</span>

                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/shivamrit_healers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#D4AF37] transition-colors flex items-center gap-1 text-[11px]"
                    title="Follow on Instagram"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Instagram</span>
                  </a>
                  <span className="text-slate-700">·</span>
                  <a
                    href="https://www.facebook.com/profile.php?id=61563686020129&ref=PROFILE_EDIT_xav_ig_profile_page_web#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#D4AF37] transition-colors flex items-center gap-1 text-[11px]"
                    title="Follow on Facebook"
                  >
                    <Facebook className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
