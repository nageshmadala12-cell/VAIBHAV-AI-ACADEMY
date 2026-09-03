import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { METHOD_STAGES } from '../data/academyData';
import { MethodStage } from '../types';

export const VaibhavMethodSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="py-24 sm:py-32 bg-[#0B0F19] text-white relative overflow-hidden" id="vaibhav-method">
      {/* Background 3D Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-sky-500/15 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-900/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Proprietary Learning Framework</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Poppins'] tracking-tight text-white leading-tight">
            The{' '}
            <span className="bg-gradient-to-r from-purple-400 via-sky-400 to-indigo-300 bg-clip-text text-transparent">
              Vaibhav AI Method™
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            A simple journey from AI curiosity to confident creation.
          </p>
        </div>

        {/* Desktop Horizontal 3D Connected Timeline */}
        <div className="hidden lg:block mt-20 relative">
          
          {/* Glowing Connecting Line */}
          <div className="absolute top-1/2 left-4 right-4 h-1 bg-gradient-to-r from-purple-500 via-sky-400 to-indigo-500 -translate-y-8 rounded-full opacity-60 shadow-[0_0_15px_rgba(56,189,248,0.5)]" />

          <div className="grid grid-cols-6 gap-4 relative z-10">
            {METHOD_STAGES.map((stage: MethodStage, idx: number) => {
              const isActive = activeStep === idx;

              return (
                <div
                  key={stage.step}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer group flex flex-col items-center text-center transition-all duration-300 ${
                    isActive ? 'scale-105' : 'opacity-85 hover:opacity-100'
                  }`}
                >
                  {/* Step Node Dot */}
                  <div className="relative mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center font-mono font-extrabold text-sm transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-tr from-purple-500 to-sky-400 text-white shadow-[0_0_25px_rgba(168,85,247,0.7)] ring-4 ring-purple-400/30'
                          : 'bg-slate-900 border border-slate-700 text-slate-300 group-hover:border-purple-400'
                      }`}
                    >
                      {stage.step}
                    </div>

                    {/* Ping animation on active node */}
                    {isActive && (
                      <span className="absolute -inset-1 rounded-2xl bg-sky-400/20 animate-ping pointer-events-none" />
                    )}
                  </div>

                  {/* Stage Card */}
                  <div
                    className={`w-full rounded-2xl p-4 transition-all duration-300 border ${
                      isActive
                        ? 'bg-slate-900/90 border-purple-500/50 shadow-[0_10px_30px_rgba(124,58,237,0.2)]'
                        : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/70 hover:border-slate-700'
                    }`}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-widest text-sky-400 block mb-1">
                      Stage {stage.step}
                    </span>
                    <h3 className="text-sm font-bold font-['Poppins'] text-white leading-tight">
                      {stage.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-1 font-medium leading-snug">
                      {stage.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Stage Deep-Dive Card below timeline */}
          <div className="mt-12 max-w-3xl mx-auto rounded-2xl p-7 bg-slate-900/80 border border-purple-500/30 backdrop-blur-xl shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-md bg-purple-600/30 text-purple-300 font-mono text-xs font-bold border border-purple-500/40">
                  STAGE {METHOD_STAGES[activeStep].step}
                </span>
                <h4 className="text-xl font-bold font-['Poppins'] text-white">
                  {METHOD_STAGES[activeStep].title} — {METHOD_STAGES[activeStep].subtitle}
                </h4>
              </div>
              <span className="text-xs text-sky-400 font-semibold">Active Stage Focus</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div>
                <span className="text-xs uppercase font-bold text-slate-400 block mb-1">What Happens:</span>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {METHOD_STAGES[activeStep].description}
                </p>
              </div>

              <div>
                <span className="text-xs uppercase font-bold text-emerald-400 block mb-1">Target Outcome:</span>
                <p className="text-sm text-slate-300 leading-relaxed flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{METHOD_STAGES[activeStep].outcome}</span>
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden mt-12 space-y-6 relative">
          
          {/* Vertical Glowing Line */}
          <div className="absolute top-6 bottom-6 left-6 w-0.5 bg-gradient-to-b from-purple-500 via-sky-400 to-indigo-500" />

          {METHOD_STAGES.map((stage: MethodStage, idx: number) => {
            return (
              <div key={stage.step} className="relative flex items-start gap-4">
                {/* Number Badge on the timeline */}
                <div className="relative z-10 w-12 h-12 rounded-xl bg-slate-900 border border-purple-500/60 text-sky-300 flex items-center justify-center font-mono font-bold text-sm shrink-0 shadow-lg shadow-purple-950/50">
                  {stage.step}
                </div>

                {/* Card */}
                <div className="flex-1 rounded-2xl p-5 bg-slate-900/80 border border-slate-800 shadow-lg">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400 block mb-0.5">
                    STAGE {stage.step}
                  </span>
                  <h3 className="text-base font-bold font-['Poppins'] text-white">
                    {stage.title}
                  </h3>
                  <p className="text-xs font-semibold text-purple-300 mt-0.5 mb-2">
                    {stage.subtitle}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {stage.description}
                  </p>
                  <div className="pt-2 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{stage.outcome}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
