import React from 'react';
import { Heart, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

interface ParentConnectionSectionProps {
  onHelpChild: () => void;
}

export const ParentConnectionSection: React.FC<ParentConnectionSectionProps> = ({ onHelpChild }) => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-purple-50/20 to-sky-50/30 relative overflow-hidden" id="for-parents">
      {/* Background Soft Gradients */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-sky-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Emotionally Powerful Parent Message */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100/80 border border-violet-200 text-violet-800 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500/20" />
              <span>A Note to Every Forward-Thinking Parent</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Poppins'] tracking-tight text-slate-900 leading-[1.2]">
              Your Child Doesn’t Need to Know Everything About AI.{' '}
              <span className="bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent">
                They Just Need to Start Learning.
              </span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              <p>
                As parents, we prepare our children for a future we cannot fully predict. The world our children will inherit is moving faster than any generation before it.
              </p>
              <p className="font-medium text-slate-800">
                The goal is not to make every child a programmer.
              </p>
              <p>
                The goal is to help them become confident learners, creative thinkers, responsible technology users and future-ready problem solvers.
              </p>
            </div>

            {/* Parent Pillars Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Zero prior coding experience required</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Focus on critical thinking & ethics</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Safe, monitored AI toolkits</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Direct real-world project portfolios</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-3">
              <button
                onClick={onHelpChild}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-violet-600 hover:bg-violet-700 shadow-xl shadow-violet-200 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                id="parent-section-cta"
              >
                <span>HELP MY CHILD GET FUTURE-READY</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>

          {/* Right Column: Warm, Sophisticated Visual of Parent & Child Learning Together with AI */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            <div className="relative w-full max-w-lg rounded-3xl p-6 sm:p-8 bg-white/90 border border-purple-100 shadow-[0_20px_50px_rgba(79,70,229,0.1)] backdrop-blur-xl">
              
              {/* Floating ambient badge */}
              <div className="absolute -top-4 right-6 bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-xs font-bold py-1.5 px-3.5 rounded-full shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Nurturing Tomorrow's Creators</span>
              </div>

              {/* Sophisticated Architectural Illustration */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 via-[#1E1B4B] to-slate-950 p-6 flex flex-col justify-between text-white border border-slate-800">
                
                {/* Floating holographic network nodes */}
                <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none" />

                {/* Top illustration layer */}
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-sky-400 bg-sky-950/60 border border-sky-800/60 px-2.5 py-0.5 rounded">
                    Collaborative AI Studio
                  </span>
                </div>

                {/* Center Warm Visual Diagram */}
                <div className="relative z-10 py-6 text-center space-y-3">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-500 to-sky-400 p-[2px] shadow-lg shadow-sky-500/20 mx-auto">
                    <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-sky-300" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white font-['Poppins']">
                    The Bridge to 2030 & Beyond
                  </h3>

                  <p className="text-xs text-slate-300 max-w-xs mx-auto leading-relaxed">
                    Giving children the confidence to ask better questions, analyze machine responses critically, and express their unique human genius.
                  </p>
                </div>

                {/* Bottom Stats Card */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800 relative z-10">
                  <div className="bg-slate-900/80 rounded-xl p-2.5 border border-slate-700/60 text-left">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Parent Peace of Mind</span>
                    <span className="text-xs font-bold text-sky-300">Responsible AI Ethics</span>
                  </div>
                  <div className="bg-slate-900/80 rounded-xl p-2.5 border border-slate-700/60 text-left">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Student Growth</span>
                    <span className="text-xs font-bold text-purple-300">Self-Directed Learning</span>
                  </div>
                </div>

              </div>

              {/* Bottom Quote Pill */}
              <div className="mt-5 p-4 rounded-xl bg-purple-50/60 border border-purple-100 flex items-start gap-3">
                <span className="text-xl leading-none font-serif text-purple-600">“</span>
                <p className="text-xs text-slate-700 italic leading-relaxed">
                  The goal isn't replacing school education, but giving students a supercharged learning copilot to excel at everything they do.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
