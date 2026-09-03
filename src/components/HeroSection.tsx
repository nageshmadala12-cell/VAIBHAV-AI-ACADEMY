import React from 'react';
import { ArrowRight, Sparkles, BookOpen, ShieldCheck, Rocket, Code2, Brain, Cpu, MessageSquare } from 'lucide-react';
import { ThreeAiOrb } from './ThreeAiOrb';
import { ACADEMY_CONFIG } from '../data/academyData';

interface HeroSectionProps {
  onStartJourney: () => void;
  onExploreProgram: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartJourney, onExploreProgram }) => {
  return (
    <section className="relative overflow-hidden pt-6 sm:pt-12 pb-16 sm:pb-24 lg:pt-16 lg:pb-28 bg-gradient-to-b from-slate-50/70 via-sky-50/30 to-[#F8FAFC]">
      {/* Background Soft Glows & 3D Ambient Shapes */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-[30rem] h-[30rem] bg-sky-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-violet-300/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100 border border-violet-200/80 text-violet-700 text-xs sm:text-sm font-bold tracking-wide shadow-sm">
              <Sparkles className="w-4 h-4 text-violet-600" />
              <span>AI EDUCATION FOR THE NEXT GENERATION</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold font-['Poppins'] tracking-tight text-slate-900 leading-[1.15]">
              Give Your Child the AI Skills to{' '}
              <span className="bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent">
                Learn Smarter, Create More
              </span>{' '}
              & Lead the Future.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              A practical AI learning journey for students from Classes 5–12, helping them learn smarter, create confidently, solve problems and prepare for a rapidly changing future — without needing prior coding experience.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <button
                onClick={onStartJourney}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-violet-600 hover:bg-violet-700 shadow-xl shadow-violet-200 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
                id="hero-primary-cta"
              >
                <span>START MY CHILD’S AI JOURNEY</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                onClick={onExploreProgram}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm hover:border-violet-300 hover:text-violet-700 transition-all duration-300 cursor-pointer"
                id="hero-secondary-cta"
              >
                <span>EXPLORE THE PROGRAM</span>
              </button>
            </div>

            {/* Trust Bar */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-600 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Classes 5–12
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-500" />
                Beginner Friendly
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5">
                <Rocket className="w-4 h-4 text-violet-600" />
                Practical AI Learning
              </span>
            </div>

            {/* Hyderabad & Academy Credibility Badge */}
            <div className="pt-2 text-xs text-slate-500 flex items-center justify-center lg:justify-start gap-2">
              <span className="inline-block px-2.5 py-1 rounded-md bg-white border border-slate-200/80 font-medium shadow-2xs">
                📍 Banjara Hills, Hyderabad
              </span>
              <span className="text-slate-400">|</span>
              <span className="font-medium text-slate-600">
                Vaibhav AI Academy Pvt. Ltd. (Est. 2026)
              </span>
            </div>

          </div>

          {/* Right Column: 3D AI Learning Visualization */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Main 3D Stage Container */}
            <div className="relative w-full max-w-md lg:max-w-none h-[420px] sm:h-[480px] flex items-center justify-center">
              
              {/* WebGL 3D AI Glowing Orb */}
              <div className="w-full h-full max-w-[380px] max-h-[380px] relative z-20">
                <ThreeAiOrb className="w-full h-full" />
              </div>

              {/* Floating 3D Translucent Glass Cards with Perspective */}
              
              {/* Card 1: Top-Left "Learn with AI" */}
              <div className="absolute top-2 left-0 sm:-left-4 z-30 animate-bounce [animation-duration:5s] [animation-timing-function:ease-in-out]">
                <div className="glass-card rounded-2xl p-3 sm:p-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-white/80 flex items-center gap-2.5 hover:scale-105 transition-transform">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-400 to-blue-600 text-white flex items-center justify-center shadow-sm">
                    <Brain className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-sky-600 tracking-wider">Concept Tutor</span>
                    <span className="block text-xs sm:text-sm font-bold text-slate-900">Learn with AI</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Top-Right "Create with AI" */}
              <div className="absolute top-6 right-0 sm:-right-4 z-30 animate-bounce [animation-duration:6s] [animation-delay:1s] [animation-timing-function:ease-in-out]">
                <div className="glass-card rounded-2xl p-3 sm:p-3.5 shadow-xl shadow-slate-200/50 border border-white/90 flex items-center gap-2.5 hover:scale-105 transition-transform">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 to-sky-500 text-white flex items-center justify-center shadow-sm">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-violet-600 tracking-wider">Media & Slides</span>
                    <span className="block text-xs sm:text-sm font-bold text-slate-900">Create with AI</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Bottom-Left "Think with AI" */}
              <div className="absolute bottom-12 left-0 sm:-left-6 z-30 animate-bounce [animation-duration:5.5s] [animation-delay:2s] [animation-timing-function:ease-in-out]">
                <div className="glass-card rounded-2xl p-3 sm:p-3.5 shadow-xl shadow-slate-200/50 border border-white/90 flex items-center gap-2.5 hover:scale-105 transition-transform">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-teal-400 to-emerald-600 text-white flex items-center justify-center shadow-sm">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-teal-600 tracking-wider">Critical Logic</span>
                    <span className="block text-xs sm:text-sm font-bold text-slate-900">Think with AI</span>
                  </div>
                </div>
              </div>

              {/* Card 4: Bottom-Right "Build with AI" */}
              <div className="absolute bottom-6 right-0 sm:-right-6 z-30 animate-bounce [animation-duration:6.5s] [animation-delay:1.5s] [animation-timing-function:ease-in-out]">
                <div className="glass-card rounded-2xl p-3 sm:p-3.5 shadow-xl shadow-slate-200/50 border border-white/90 flex items-center gap-2.5 hover:scale-105 transition-transform">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-sky-500 to-violet-600 text-white flex items-center justify-center shadow-sm">
                    <Rocket className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-violet-600 tracking-wider">Real Projects</span>
                    <span className="block text-xs sm:text-sm font-bold text-slate-900">Build with AI</span>
                  </div>
                </div>
              </div>

              {/* Center Floating Prompt Preview Pill */}
              <div className="absolute bottom-0 inset-x-8 z-30 mx-auto max-w-[280px]">
                <div className="bg-slate-900/90 backdrop-blur-md rounded-xl p-2.5 border border-slate-700/80 shadow-xl text-slate-200 text-xs flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span className="truncate font-mono text-[11px] text-sky-200">
                    Prompt: “Design a solar rover for Mars...”
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
