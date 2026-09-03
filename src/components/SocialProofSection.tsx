import React from 'react';
import { MessageSquareQuote, Sparkles, FolderGit2, Users, Camera, Star } from 'lucide-react';
import { ACADEMY_CONFIG } from '../data/academyData';

export const SocialProofSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-slate-50 relative overflow-hidden" id="social-proof">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/80 text-purple-800 text-xs font-semibold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-purple-600" />
            <span>Community & Experience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Poppins'] tracking-tight text-slate-900 leading-tight">
            Voices & Student{' '}
            <span className="bg-gradient-to-r from-purple-600 to-sky-600 bg-clip-text text-transparent">
              Showcases
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            As a freshly established 2026 academy in Banjara Hills, Hyderabad, we hold integrity above all else. Real parent reviews, student capstone demonstrations, and workshop galleries from ongoing cohorts will be featured here.
          </p>
        </div>

        {/* Clearly Marked Placeholders Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Parent Testimonial Placeholder */}
          <div className="rounded-2xl p-7 bg-white border-2 border-dashed border-purple-200/80 shadow-sm flex flex-col justify-between hover:border-purple-300 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                  <MessageSquareQuote className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono uppercase bg-purple-50 text-purple-700 px-2.5 py-1 rounded-md font-bold">
                  Parent Voice
                </span>
              </div>

              <h3 className="text-base font-bold font-['Poppins'] text-slate-900">
                Parent Testimonial Coming Soon
              </h3>

              <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed italic">
                “Official feedback from parents of Classes 5–12 students will appear here following the conclusion of current practical AI cohorts.”
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-xs">
                P
              </div>
              <div className="text-xs">
                <span className="font-semibold text-slate-700 block">Verified Parent</span>
                <span className="text-slate-400 text-[11px]">Hyderabad Cohort</span>
              </div>
            </div>
          </div>

          {/* Card 2: Student Project Showcase Placeholder */}
          <div className="rounded-2xl p-7 bg-white border-2 border-dashed border-sky-200/80 shadow-sm flex flex-col justify-between hover:border-sky-300 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600">
                  <FolderGit2 className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono uppercase bg-sky-50 text-sky-700 px-2.5 py-1 rounded-md font-bold">
                  Student Project
                </span>
              </div>

              <h3 className="text-base font-bold font-['Poppins'] text-slate-900">
                Student Project Showcase Coming Soon
              </h3>

              <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed italic">
                “Interactive screenshots and demo links of AI study tools, creative presentations, and research projects built by students will be published here.”
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-xs">
                S
              </div>
              <div className="text-xs">
                <span className="font-semibold text-slate-700 block">Student Builder</span>
                <span className="text-slate-400 text-[11px]">CBSE / ICSE / IB Tracks</span>
              </div>
            </div>
          </div>

          {/* Card 3: Workshop & Photo Gallery Placeholder */}
          <div className="rounded-2xl p-7 bg-white border-2 border-dashed border-emerald-200/80 shadow-sm flex flex-col justify-between hover:border-emerald-300 transition-colors md:col-span-2 lg:col-span-1">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Camera className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono uppercase bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md font-bold">
                  Workshop Gallery
                </span>
              </div>

              <h3 className="text-base font-bold font-['Poppins'] text-slate-900">
                Workshop Highlights Coming Soon
              </h3>

              <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed italic">
                “High-resolution photographs from classroom sessions, demo days, and young entrepreneur pitch presentations will be documented here.”
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-xs">
                W
              </div>
              <div className="text-xs">
                <span className="font-semibold text-slate-700 block">Banjara Hills Center</span>
                <span className="text-slate-400 text-[11px]">In-person & Hybrid Sessions</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
