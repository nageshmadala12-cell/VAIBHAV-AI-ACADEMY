import React from 'react';
import { Brain, Sparkles, Lightbulb, Rocket, ArrowRight } from 'lucide-react';
import { WHY_AI_SKILLS } from '../data/academyData';

interface WhyAiMatterSectionProps {
  onLearnMore?: () => void;
}

export const WhyAiMatterSection: React.FC<WhyAiMatterSectionProps> = ({ onLearnMore }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-6 h-6 text-purple-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-sky-500" />;
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6 text-amber-500" />;
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-indigo-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-purple-600" />;
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-white relative overflow-hidden" id="why-ai-matters">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-sky-200/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-violet-100/80 border border-violet-200/80 text-violet-700 text-xs font-bold uppercase tracking-wider">
            <span>Parent Perspective</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Poppins'] tracking-tight text-slate-900 leading-tight">
            The Future Is Changing.{' '}
            <span className="bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent">
              Is Your Child Ready?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal pt-1">
            “AI is changing how we learn, work, create and solve problems. Giving children the right AI skills today can help them become confident creators instead of passive users of technology.”
          </p>
        </div>

        {/* 4 Premium Cards with 3D Hover & Depth */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WHY_AI_SKILLS.map((card, idx) => (
            <div
              key={card.title}
              className="group relative rounded-2xl p-7 bg-white/85 backdrop-blur-md border border-slate-200/80 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Accent Gradient Line */}
              <div className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${card.gradient} mb-6 group-hover:w-20 transition-all duration-300`} />

              <div>
                {/* Icon Container with subtle glass depth */}
                <div className="w-13 h-13 rounded-2xl bg-slate-50/80 border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-violet-50/70 transition-all duration-300">
                  {getIcon(card.icon)}
                </div>

                {/* Card Title */}
                <h3 className="text-lg font-bold font-['Poppins'] text-slate-900 tracking-tight group-hover:text-violet-700 transition-colors">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-violet-600 transition-colors">
                <span>Pillar 0{idx + 1}</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
