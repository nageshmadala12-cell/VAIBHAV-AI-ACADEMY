import React from 'react';
import { Sparkles, Phone, MessageCircle, Instagram, Linkedin, MapPin, Calendar, Building2, Heart, FileSpreadsheet } from 'lucide-react';
import { ACADEMY_CONFIG } from '../data/academyData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenAbout: () => void;
  onOpenHome: () => void;
  onOpenSheetsSettings?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAbout, onOpenHome, onOpenSheetsSettings }) => {
  return (
    <footer className="bg-[#080C14] text-slate-400 text-sm border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Purpose (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-sky-500 p-[2px] shadow-sm">
                <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center text-white">
                  <Sparkles className="w-4 h-4 text-sky-300" />
                </div>
              </div>
              <span className="text-xl font-extrabold font-['Poppins'] text-white tracking-tight">
                VAIBHAV <span className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-transparent">AI</span> ACADEMY
              </span>
            </div>

            <p className="text-slate-300 font-medium text-sm leading-relaxed max-w-sm">
              “Preparing young minds for an AI-powered future.”
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Practical, age-appropriate Artificial Intelligence learning journeys for students from Classes 5–12. Helping kids learn smarter, create confidently, and become future leaders.
            </p>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={ACADEMY_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-violet-600 hover:border-transparent transition-all"
                aria-label="Vaibhav AI Academy Instagram"
                title="Follow on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={ACADEMY_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#0A66C2] hover:border-transparent transition-all"
                aria-label="Vaibhav AI Academy LinkedIn"
                title="Connect on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={ACADEMY_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#25D366] hover:border-transparent transition-all"
                aria-label="Vaibhav AI Academy WhatsApp Community"
                title="Join WhatsApp Channel"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (Col 6-8) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-['Poppins']">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={onOpenHome}
                  className="hover:text-violet-400 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('what-we-teach')}
                  className="hover:text-violet-400 transition-colors cursor-pointer"
                >
                  What We Teach
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('for-parents')}
                  className="hover:text-violet-400 transition-colors cursor-pointer"
                >
                  For Parents
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAbout}
                  className="hover:text-violet-400 transition-colors cursor-pointer"
                >
                  About Vaibhav
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-violet-400 transition-colors cursor-pointer"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Company Details (Col 9-12) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-['Poppins']">
              Company Information
            </h4>
            
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <Building2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 font-medium">
                  {ACADEMY_CONFIG.legalName}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Started: {ACADEMY_CONFIG.startedYear}</span>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{ACADEMY_CONFIG.location}, Telangana, India</span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={ACADEMY_CONFIG.phoneTel}
                  className="hover:text-emerald-300 transition-colors text-slate-300 font-semibold"
                >
                  Call Us: {ACADEMY_CONFIG.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={ACADEMY_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors text-emerald-400 font-semibold"
                >
                  Official WhatsApp Community
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 {ACADEMY_CONFIG.legalName}. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <p className="flex items-center gap-1 text-slate-400">
              Empowering Classes 5–12 in Banjara Hills, Hyderabad & Worldwide
            </p>

            {onOpenSheetsSettings && (
              <button
                onClick={onOpenSheetsSettings}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors cursor-pointer text-[11px]"
                title="Manage Google Sheets form automation"
              >
                <FileSpreadsheet className="w-3 h-3 text-emerald-400" />
                <span>Google Sheet Automation</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
};
