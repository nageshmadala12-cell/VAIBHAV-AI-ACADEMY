import React, { useState } from 'react';
import { Cpu, MessageSquareCode, BookOpenCheck, Palette, FolderGit2, TrendingUp, CheckCircle2, ChevronDown } from 'lucide-react';
import { LEARNING_MODULES } from '../data/academyData';
import { LearningModule } from '../types';

export const WhatWeTeachSection: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-sky-500" />;
      case 'MessageSquareCode':
        return <MessageSquareCode className="w-5 h-5 text-indigo-500" />;
      case 'BookOpenCheck':
        return <BookOpenCheck className="w-5 h-5 text-purple-500" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-cyan-500" />;
      case 'FolderGit2':
        return <FolderGit2 className="w-5 h-5 text-blue-500" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-violet-500" />;
      default:
        return <Cpu className="w-5 h-5 text-purple-500" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] relative overflow-hidden" id="what-we-teach">
      {/* Ambient 3D spheres & light glows */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-sky-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-violet-100/80 border border-violet-200/80 text-violet-700 text-xs font-bold uppercase tracking-wider">
            <span>Structured Curriculum</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Poppins'] tracking-tight text-slate-900 leading-tight">
            What Your Child Will{' '}
            <span className="bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent">
              Learn & Master
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Six comprehensive, beginner-friendly learning pillars crafted specifically for school students from Classes 5–12.
          </p>
        </div>

        {/* Six Beautiful Learning Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {LEARNING_MODULES.map((module: LearningModule) => {
            const isExpanded = selectedModule === module.id;

            return (
              <div
                key={module.id}
                className="group relative rounded-2xl p-7 bg-white/85 backdrop-blur-md hover:bg-white border border-slate-200/80 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Row: Module Number & Minimal Icon */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100/90 px-2.5 py-1 rounded-md">
                      MODULE {module.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-center group-hover:scale-110 group-hover:shadow-sm transition-all duration-300">
                      {getModuleIcon(module.icon)}
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg sm:text-xl font-bold font-['Poppins'] text-slate-900 tracking-tight group-hover:text-violet-700 transition-colors">
                    {module.title}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {module.shortDesc}
                  </p>

                  {/* Expandable Module Breakdown */}
                  <div className="mt-5 space-y-2 pt-4 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Key Takeaways:
                    </span>
                    {module.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtle Interactive Footer */}
                <div className="mt-6 pt-3 flex items-center justify-between text-xs text-slate-500 font-medium border-t border-slate-50">
                  <span className="text-purple-600 font-semibold text-[11px] uppercase tracking-wide">
                    Classes 5–12 Track
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 group-hover:scale-150 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
