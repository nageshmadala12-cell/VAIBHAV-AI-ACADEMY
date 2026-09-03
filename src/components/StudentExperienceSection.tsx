import React, { useState } from 'react';
import { GraduationCap, Compass, Palette, FlaskConical, Wrench, Share2, Sparkles, Terminal, Copy, Check } from 'lucide-react';
import { STUDENT_EXPERIENCE_ITEMS } from '../data/academyData';
import { StudentExperienceItem } from '../types';

export const StudentExperienceSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<StudentExperienceItem>(STUDENT_EXPERIENCE_ITEMS[0]);
  const [copied, setCopied] = useState(false);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-sky-500" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-indigo-500" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-purple-500" />;
      case 'FlaskConical':
        return <FlaskConical className="w-5 h-5 text-cyan-500" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-blue-500" />;
      case 'Share2':
        return <Share2 className="w-5 h-5 text-violet-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-purple-500" />;
    }
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(activeItem.previewPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden" id="student-experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>Hands-On Exploration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Poppins'] tracking-tight text-slate-900 leading-tight">
            Learning AI Should{' '}
            <span className="bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Feel Exciting.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            No dry lectures. Students learn by prompting, testing, experimenting, and producing tangible creative work. Click any phase below to see what students experience:
          </p>
        </div>

        {/* 6 Interactive Cards Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {STUDENT_EXPERIENCE_ITEMS.map((item) => {
            const isSelected = activeItem.id === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`p-4 rounded-2xl border text-center transition-all duration-300 flex flex-col items-center justify-between cursor-pointer group ${
                  isSelected
                    ? 'bg-purple-50/90 border-purple-400 shadow-md shadow-purple-500/10 -translate-y-1 scale-102 ring-2 ring-purple-400/20'
                    : 'bg-slate-50/80 border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 ${
                    isSelected ? 'bg-white shadow-sm' : 'bg-white border border-slate-100'
                  }`}
                >
                  {getIcon(item.icon)}
                </div>

                <span
                  className={`text-sm font-bold font-['Poppins'] ${
                    isSelected ? 'text-purple-900' : 'text-slate-800'
                  }`}
                >
                  {item.title}
                </span>

                <span className="text-[10px] text-slate-500 mt-1 line-clamp-1">
                  {item.tagline.split(' ')[0]} {item.tagline.split(' ')[1]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Interactive Experience Simulation Sandbox */}
        <div className="mt-8 max-w-4xl mx-auto rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-slate-900 to-slate-950 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          
          {/* Decorative Corner Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Sandbox Top Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-5 border-b border-slate-800 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-900/60 border border-purple-500/40 flex items-center justify-center">
                {getIcon(activeItem.icon)}
              </div>
              <div>
                <h3 className="text-lg font-bold font-['Poppins'] text-white flex items-center gap-2">
                  <span>Student Studio: {activeItem.title}</span>
                  <span className="text-xs font-mono font-normal text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-800/60">
                    Live Simulator
                  </span>
                </h3>
                <p className="text-xs text-slate-400">{activeItem.tagline}</p>
              </div>
            </div>

            <button
              onClick={handleCopyPrompt}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors cursor-pointer"
              title="Copy prompt"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Prompt' : 'Copy Prompt'}</span>
            </button>
          </div>

          {/* Prompt & Output Display */}
          <div className="mt-6 space-y-5 relative z-10">
            
            {/* Student Prompt Box */}
            <div className="bg-slate-950/80 rounded-2xl p-4 sm:p-5 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400">
                <Terminal className="w-3.5 h-3.5" />
                <span>STUDENT PROMPT INPUT</span>
              </div>
              <p className="text-sm font-mono text-slate-200 leading-relaxed bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
                “{activeItem.previewPrompt}”
              </p>
            </div>

            {/* AI Generated Result Box */}
            <div className="bg-gradient-to-br from-purple-950/40 to-slate-900/90 rounded-2xl p-4 sm:p-5 border border-purple-500/30 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-purple-300">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  <span>AI LEARNING ASSISTANT RESPONSE</span>
                </div>
                <span className="text-[11px] text-emerald-400 font-sans">✓ Verified Age-Appropriate</span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed bg-slate-950/50 p-3.5 rounded-xl border border-purple-900/40">
                {activeItem.sampleOutput}
              </p>
            </div>

            <div className="text-xs text-slate-400 text-center sm:text-left pt-1">
              💡 <span className="font-semibold text-slate-300">How Students Learn:</span> {activeItem.description}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
