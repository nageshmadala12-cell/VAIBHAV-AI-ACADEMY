import React, { useState, useEffect } from 'react';
import { Sparkles, Phone, MessageCircle, Menu, X, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { ACADEMY_CONFIG } from '../data/academyData';

interface NavbarProps {
  currentPage: 'home' | 'about';
  setCurrentPage: (page: 'home' | 'about') => void;
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage, onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (targetId: string) => {
    setMobileMenuOpen(false);
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleAboutClick = () => {
    setMobileMenuOpen(false);
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById('about-vaibhav');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById('about-vaibhav');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleHomeClick = () => {
    setMobileMenuOpen(false);
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200/60 py-3.5'
          : 'bg-white/60 backdrop-blur-md border-b border-white/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <button
            onClick={handleHomeClick}
            className="flex items-center gap-2.5 text-left group focus:outline-none cursor-pointer"
            id="brand-logo-btn"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-sky-500 flex items-center justify-center shadow-lg text-white font-bold text-xl group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-5 h-5 text-sky-200 animate-pulse" />
            </div>
            <div>
              <span className="block text-lg font-extrabold tracking-tight font-['Poppins'] text-slate-900 leading-none group-hover:text-violet-700 transition-colors">
                VAIBHAV <span className="bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent">AI</span>
              </span>
              <span className="block text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase mt-0.5">
                ACADEMY
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              onClick={handleHomeClick}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                currentPage === 'home'
                  ? 'text-violet-700 bg-violet-50/80 font-semibold'
                  : 'text-slate-600 hover:text-violet-600 hover:bg-slate-50'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('what-we-teach')}
              className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-violet-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
            >
              What We Teach
            </button>
            <button
              onClick={() => handleNavClick('vaibhav-method')}
              className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-violet-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavClick('for-parents')}
              className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-violet-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
            >
              For Parents
            </button>
            <button
              onClick={handleAboutClick}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                currentPage === 'about'
                  ? 'text-violet-700 bg-violet-50/80 font-semibold'
                  : 'text-slate-600 hover:text-violet-600 hover:bg-slate-50'
              }`}
            >
              About Vaibhav
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-violet-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="hidden sm:flex items-center gap-2 md:gap-3">
            {/* Phone Quick Call */}
            <a
              href={ACADEMY_CONFIG.phoneTel}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-violet-700 hover:bg-slate-100/80 rounded-lg transition-colors"
              title="Call Vaibhav AI Academy"
            >
              <Phone className="w-3.5 h-3.5 text-violet-600" />
              <span className="hidden xl:inline">{ACADEMY_CONFIG.phoneDisplay}</span>
              <span className="xl:hidden">Call</span>
            </a>

            {/* Official Instagram Icon Link */}
            <a
              href={ACADEMY_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="w-9 h-9 rounded-full flex items-center justify-center text-slate-600 hover:text-white hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-violet-600 transition-all duration-300 border border-slate-200/80 shadow-sm bg-white/70"
              title="Follow on Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* Official LinkedIn Icon Link */}
            <a
              href={ACADEMY_CONFIG.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-full flex items-center justify-center text-slate-600 hover:text-white hover:bg-[#0A66C2] transition-all duration-300 border border-slate-200/80 shadow-sm bg-white/70"
              title="Connect on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Join WhatsApp Community Prominent Button */}
            <a
              href={ACADEMY_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-md shadow-emerald-500/20 hover:brightness-105 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Join WhatsApp Community</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={ACADEMY_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex sm:hidden items-center justify-center w-9 h-9 rounded-xl bg-[#25D366] text-white shadow-sm"
              aria-label="WhatsApp Community"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-200/80 pb-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-2 pb-2">
              <button
                onClick={handleHomeClick}
                className={`text-left px-3 py-2 text-sm font-medium rounded-lg ${
                  currentPage === 'home' ? 'text-violet-700 bg-violet-50' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                Home
              </button>
              <button
                onClick={handleAboutClick}
                className={`text-left px-3 py-2 text-sm font-medium rounded-lg ${
                  currentPage === 'about' ? 'text-violet-700 bg-violet-50' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                About Vaibhav
              </button>
              <button
                onClick={() => handleNavClick('what-we-teach')}
                className="text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg"
              >
                What We Teach
              </button>
              <button
                onClick={() => handleNavClick('vaibhav-method')}
                className="text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg"
              >
                How It Works
              </button>
              <button
                onClick={() => handleNavClick('for-parents')}
                className="text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg"
              >
                For Parents
              </button>
              <button
                onClick={() => handleNavClick('faq')}
                className="text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg"
              >
                FAQ
              </button>
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={ACADEMY_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-bold text-white bg-[#25D366] hover:bg-[#20bd5a]"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                Join WhatsApp Community
              </a>

              <div className="flex items-center justify-between pt-1 px-1">
                <a
                  href={ACADEMY_CONFIG.phoneTel}
                  className="flex items-center gap-1.5 text-xs font-medium text-slate-700"
                >
                  <Phone className="w-3.5 h-3.5 text-violet-600" />
                  <span>Call {ACADEMY_CONFIG.phoneDisplay}</span>
                </a>

                <div className="flex items-center gap-3">
                  <a
                    href={ACADEMY_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-pink-600 p-1"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={ACADEMY_CONFIG.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-[#0A66C2] p-1"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
