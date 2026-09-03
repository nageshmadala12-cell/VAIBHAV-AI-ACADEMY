import React from 'react';
import { ArrowRight, MessageCircle, Sparkles, Phone, ShieldCheck } from 'lucide-react';
import { ACADEMY_CONFIG } from '../data/academyData';

interface FinalCtaSectionProps {
  onStartJourney: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onStartJourney }) => {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#1E1B4B] to-[#090D16] text-white">
      {/* 3D Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-20 left-10 w-80 h-80 bg-sky-500/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-80 h-80 bg-indigo-500/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-7">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/60 border border-purple-500/40 text-purple-300 text-xs sm:text-sm font-semibold tracking-wide">
          <Sparkles className="w-4 h-4 text-sky-400" />
          <span>Classes 5–12 • Banjara Hills, Hyderabad</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-['Poppins'] tracking-tight text-white leading-tight max-w-4xl mx-auto">
          Your Child’s AI Journey{' '}
          <span className="bg-gradient-to-r from-sky-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
            Can Start Today.
          </span>
        </h2>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Give them the opportunity to explore AI, build confidence and develop skills for a future that is already changing.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onStartJourney}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-slate-900 bg-white hover:bg-slate-100 shadow-xl shadow-white/10 hover:shadow-white/20 hover:scale-105 active:scale-100 transition-all duration-300 cursor-pointer"
            id="final-cta-primary"
          >
            <span>START MY CHILD’S AI JOURNEY</span>
            <ArrowRight className="w-5 h-5 text-purple-700" />
          </button>

          <a
            href={ACADEMY_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-xl shadow-emerald-950/40 hover:scale-105 active:scale-100 transition-all duration-300"
            id="final-cta-whatsapp"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>JOIN WHATSAPP COMMUNITY</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Beginner-Friendly Curriculum
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Phone className="w-4 h-4 text-sky-400" />
            Direct Counselor Line: {ACADEMY_CONFIG.phoneDisplay}
          </span>
        </div>

      </div>
    </section>
  );
};
