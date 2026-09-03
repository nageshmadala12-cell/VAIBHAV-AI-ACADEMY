import React from 'react';
import { Sparkles, ArrowLeft, Building2, Calendar, MapPin, Target, ShieldCheck, ArrowRight, Instagram, Linkedin, MessageCircle, Phone } from 'lucide-react';
import { FounderPortrait } from './FounderPortrait';
import { ACADEMY_CONFIG } from '../data/academyData';

interface AboutPageProps {
  onBackToHome: () => void;
  onStartJourney: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBackToHome, onStartJourney }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-purple-500 selection:text-white pb-20">
      
      {/* Top Header Breadcrumb Bar */}
      <div className="border-b border-slate-200/80 bg-white/70 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-purple-700 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-3">
            <a
              href={ACADEMY_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full text-slate-500 hover:text-pink-600 hover:bg-slate-100 transition-colors"
              aria-label="Founder Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={ACADEMY_CONFIG.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full text-slate-500 hover:text-[#0A66C2] hover:bg-slate-100 transition-colors"
              aria-label="Founder LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={ACADEMY_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] shadow-sm transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp Channel</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16">
        
        {/* Founder Profile Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-[0_15px_45px_rgba(0,0,0,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Professional Founder Photo with 3D Depth Frame */}
            <div className="lg:col-span-5 max-w-md mx-auto lg:max-w-none w-full">
              <FounderPortrait />
              
              {/* Hyderabad Office Presence Badge */}
              <div className="mt-6 rounded-2xl p-4 bg-slate-50 border border-slate-200/70 text-xs text-slate-600 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <MapPin className="w-4 h-4 text-purple-600" />
                  <span>Headquartered in Hyderabad</span>
                </div>
                <p className="leading-relaxed">
                  Banjara Hills, Hyderabad, Telangana, India. Registered Private Limited company started in 2026.
                </p>
              </div>
            </div>

            {/* Right Column: Founder Details & Verified Story */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Header Title */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/70 text-purple-800 text-xs font-semibold uppercase tracking-wider mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                  <span>Leadership & Story</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Poppins'] tracking-tight text-slate-900">
                  VAIBHAV CHOWDHARY
                </h1>

                <p className="text-base sm:text-lg font-semibold text-purple-700 mt-1">
                  Founder / Young AI Education Entrepreneur
                </p>
              </div>

              {/* Verified Core Story Statements */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                <p>
                  “Vaibhav AI Academy was started in 2026 with a vision to help students understand and use Artificial Intelligence in practical and meaningful ways.”
                </p>
                <p>
                  “Based in Banjara Hills, Hyderabad, Vaibhav AI Academy is a Private Limited company focused on helping students from Classes 5–12 become more confident, creative and future-ready with AI.”
                </p>
              </div>

              {/* Three Verified Sections: Vision, Why Started, Mission */}
              <div className="space-y-6">
                
                {/* MY VISION */}
                <div className="rounded-2xl p-6 bg-gradient-to-r from-purple-50/50 to-indigo-50/30 border border-purple-100/80">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-purple-600" />
                    <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-purple-900">
                      MY VISION
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                    “Empower the next generation with practical AI skills and help young minds become confident creators, problem-solvers and future leaders.”
                  </p>
                </div>

                {/* WHY I STARTED VAIBHAV AI ACADEMY */}
                <div className="rounded-2xl p-6 bg-gradient-to-r from-sky-50/50 to-blue-50/30 border border-sky-100/80">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-sky-600" />
                    <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-sky-900">
                      WHY I STARTED VAIBHAV AI ACADEMY
                    </h2>
                  </div>
                  <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-2">
                    <p>
                      Artificial Intelligence is advancing at an unprecedented pace, yet standard school curricula rarely provide young students with hands-on, practical training to understand, command, and evaluate AI tools responsibly.
                    </p>
                    <p>
                      I founded Vaibhav AI Academy to bridge this gap: making AI education accessible, intuitive, and practical for school students from Classes 5–12, empowering them to become active builders of tomorrow rather than passive consumers.
                    </p>
                  </div>
                </div>

                {/* MY MISSION */}
                <div className="rounded-2xl p-6 bg-gradient-to-r from-emerald-50/50 to-teal-50/30 border border-emerald-100/80">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-emerald-900">
                      MY MISSION
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                    “Make AI learning simple, practical, responsible and exciting for the next generation.”
                  </p>
                </div>

              </div>

              {/* Connect Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={ACADEMY_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-bold shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Connect on WhatsApp</span>
                </a>

                <button
                  onClick={onStartJourney}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-bold shadow-md shadow-violet-500/20 transition-all cursor-pointer"
                >
                  <span>Inquire for Admission</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Section 15: ABOUT ACADEMY - Clean Company Information Section */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider">
              <span>Corporate Details</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-['Poppins'] text-slate-900">
              About Vaibhav AI Academy
            </h2>
            <p className="text-sm text-slate-600">
              Verified corporate information and organizational identity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center mb-4 text-purple-600">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Company Form</span>
                <h3 className="text-lg font-bold font-['Poppins'] text-slate-900">VAIBHAV AI ACADEMY</h3>
                <p className="text-sm text-slate-600 mt-1">Private Limited Company</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-purple-600 font-semibold">
                Legally Registered
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center mb-4 text-sky-600">
                  <Calendar className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Inception</span>
                <h3 className="text-lg font-bold font-['Poppins'] text-slate-900">Started: 2026</h3>
                <p className="text-sm text-slate-600 mt-1">Next-Generation AI Education Brand</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-sky-600 font-semibold">
                Built for Future Tech
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-4 text-indigo-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Headquarters</span>
                <h3 className="text-lg font-bold font-['Poppins'] text-slate-900">Banjara Hills</h3>
                <p className="text-sm text-slate-600 mt-1">Hyderabad, Telangana, India</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-indigo-600 font-semibold">
                Prime Tech Hub
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                  <Target className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Academic Focus</span>
                <h3 className="text-lg font-bold font-['Poppins'] text-slate-900">Classes 5–12</h3>
                <p className="text-sm text-slate-600 mt-1">Practical AI Skills & Projects</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-emerald-600 font-semibold">
                Beginner to Advanced
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
