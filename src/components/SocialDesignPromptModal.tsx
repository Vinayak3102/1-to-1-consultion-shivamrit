import React, { useState } from 'react';
import { socialMediaDesignPrompt, Language } from '../data/translations.ts';
import { X, Copy, Check, Sparkles, Share2, Layers } from 'lucide-react';

interface SocialDesignPromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const SocialDesignPromptModal: React.FC<SocialDesignPromptModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-3xl my-8 rounded-2xl bg-[#0A1322] border border-[#D4AF37]/40 shadow-2xl p-6 sm:p-8">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[rgba(212,175,55,0.2)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="text-xl font-serif-brand font-semibold text-[#FDFBF7]">
                {socialMediaDesignPrompt.title}
              </h3>
              <p className="text-xs text-[#D4AF37] mt-0.5">
                {socialMediaDesignPrompt.style} · {socialMediaDesignPrompt.aspectRatios}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="py-6 space-y-6 max-h-[70vh] overflow-y-auto pr-1">
          
          {/* Item 1: 4K Midjourney / Creative Image Generation Prompt */}
          <div className="p-4 rounded-xl bg-[#050B14] border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                4K Graphic & Visual Design Prompt
              </span>
              <button
                onClick={() => handleCopy(socialMediaDesignPrompt.designPromptText, 'prompt')}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-[#D4AF37] bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30 rounded-md transition-colors cursor-pointer"
              >
                {copiedKey === 'prompt' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Prompt</span>
                  </>
                )}
              </button>
            </div>
            <pre className="text-xs text-slate-300 font-mono whitespace-pre-wrap leading-relaxed bg-[#02050A] p-3 rounded-lg border border-slate-900 max-h-48 overflow-y-auto">
              {socialMediaDesignPrompt.designPromptText}
            </pre>
          </div>

          {/* Item 2: Typical Hindi Ad Copy */}
          <div className="p-4 rounded-xl bg-[#050B14] border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Share2 className="w-3.5 h-3.5" />
                हिन्दी सोशल मीडिया विज्ञापन पाठ (Authentic Hindi Ad Copy)
              </span>
              <button
                onClick={() => handleCopy(socialMediaDesignPrompt.adCopyHindi, 'ad_hi')}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-md transition-colors cursor-pointer"
              >
                {copiedKey === 'ad_hi' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">कॉपी हो गया!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Hindi Ad Copy</span>
                  </>
                )}
              </button>
            </div>
            <pre className="text-xs text-slate-300 whitespace-pre-wrap leading-relaxed bg-[#02050A] p-3 rounded-lg border border-slate-900">
              {socialMediaDesignPrompt.adCopyHindi}
            </pre>
          </div>

          {/* Item 3: English Ad Copy */}
          <div className="p-4 rounded-xl bg-[#050B14] border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                <Share2 className="w-3.5 h-3.5" />
                English Ad Copy & Broadcast Hook (Global / NRI)
              </span>
              <button
                onClick={() => handleCopy(socialMediaDesignPrompt.adCopyEnglish, 'ad_en')}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-sky-400 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 rounded-md transition-colors cursor-pointer"
              >
                {copiedKey === 'ad_en' ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy English Copy</span>
                  </>
                )}
              </button>
            </div>
            <pre className="text-xs text-slate-300 whitespace-pre-wrap leading-relaxed bg-[#02050A] p-3 rounded-lg border border-slate-900">
              {socialMediaDesignPrompt.adCopyEnglish}
            </pre>
          </div>

        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg cursor-pointer"
          >
            Close / બંધ કરો
          </button>
        </div>

      </div>
    </div>
  );
};
