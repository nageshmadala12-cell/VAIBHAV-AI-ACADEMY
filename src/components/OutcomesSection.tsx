import React from 'react';
import { CheckCircle2, Award, ArrowRight } from 'lucide-react';
import { OUTCOMES } from '../data/academyData';

interface OutcomesSectionProps {
  onStartJourney?: () => void;
}

export const OutcomesSection: React.FC<OutcomesSectionProps> = ({ onStartJourney }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] relative overflow-hidden" id="outcomes">
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>Lifelong Competencies</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Poppins'] tracking-tight text-slate-900 leading-tight">
            What Your Child Can{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 bg-clip-text text-transparent">
              Walk Away With
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Real skills that transfer directly to school academics, extracurricular projects, and future career readiness — without making unsupported claims.
          </p>
        </div>

        {/* 8 Premium Outcome Cards Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {OUTCOMES.map((outcome, idx) => (
            <div
              key={outcome.title}
              className="group relative rounded-2xl p-6 bg-white border border-slate-200/80 shadow-[0_6px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(16,185,129,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>

                <h3 className="text-base font-bold font-['Poppins'] text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">
                  {outcome.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {outcome.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400 group-hover:text-emerald-600 transition-colors">
                <span>Outcome 0{idx + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:scale-150 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        {onStartJourney && (
          <div className="mt-14 max-w-2xl mx-auto text-center">
            <button
              onClick={onStartJourney}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <span>Enroll Your Child for Next Cohort</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
