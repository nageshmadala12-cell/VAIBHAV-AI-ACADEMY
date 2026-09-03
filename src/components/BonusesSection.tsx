import React from 'react';
import { Gift, BookOpen, Terminal, Sparkles, FileText, CheckCircle2 } from 'lucide-react';
import { BONUSES } from '../data/academyData';

interface BonusesSectionProps {
  onClaim?: () => void;
}

export const BonusesSection: React.FC<BonusesSectionProps> = ({ onClaim }) => {
  const getBonusIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Terminal className="w-5 h-5 text-purple-600" />;
      case 1:
        return <Sparkles className="w-5 h-5 text-sky-500" />;
      case 2:
        return <BookOpen className="w-5 h-5 text-indigo-600" />;
      case 3:
        return <FileText className="w-5 h-5 text-emerald-600" />;
      default:
        return <Gift className="w-5 h-5 text-purple-600" />;
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-white relative overflow-hidden" id="bonuses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold uppercase tracking-wider">
            <Gift className="w-3.5 h-3.5 text-purple-600" />
            <span>Complimentary Resources</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Poppins'] tracking-tight text-slate-900 leading-tight">
            Included With Every{' '}
            <span className="bg-gradient-to-r from-purple-600 to-sky-600 bg-clip-text text-transparent">
              Student Enrollment
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Essential reference toolkits and curated guides to support both students and parents on their AI journey.
          </p>
        </div>

        {/* 4 Premium Bonus Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BONUSES.map((bonus, idx) => (
            <div
              key={bonus.title}
              className="rounded-2xl p-6 bg-gradient-to-b from-white to-slate-50/60 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(79,70,229,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/70 shadow-sm flex items-center justify-center">
                    {getBonusIcon(idx)}
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-purple-100/70 text-purple-700">
                    {bonus.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold font-['Poppins'] text-slate-900">
                  {bonus.title}
                </h3>
                <p className="text-xs font-semibold text-purple-600 mt-0.5 mb-2">
                  {bonus.subtitle}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {bonus.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>100% Free with Program</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
