import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhyAiMatterSection } from './components/WhyAiMatterSection';
import { WhatWeTeachSection } from './components/WhatWeTeachSection';
import { VaibhavMethodSection } from './components/VaibhavMethodSection';
import { ParentConnectionSection } from './components/ParentConnectionSection';
import { StudentExperienceSection } from './components/StudentExperienceSection';
import { OutcomesSection } from './components/OutcomesSection';
import { AboutVaibhavSection } from './components/AboutVaibhavSection';
import { BonusesSection } from './components/BonusesSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { AboutPage } from './components/AboutPage';
import { FloatingWhatsAppNotification } from './components/FloatingWhatsAppNotification';
import { MobileFloatingPhone } from './components/MobileFloatingPhone';
import { InquiryModal } from './components/InquiryModal';
import { Interactive3dAiLayer } from './components/Interactive3dAiLayer';
import { GoogleSheetsSettingsModal } from './components/GoogleSheetsSettingsModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [sheetsSettingsOpen, setSheetsSettingsOpen] = useState(false);

  // Check URL hash / path on load for /about or #about
  useEffect(() => {
    const handleUrlChange = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;
      if (hash === '#about' || path.includes('about')) {
        setCurrentPage('about');
      }
    };
    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  const handleOpenInquiry = () => {
    setInquiryModalOpen(true);
  };

  const handleExploreProgram = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById('what-we-teach');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('what-we-teach');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateSection = (sectionId: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-violet-500 selection:text-white relative">
      {/* Immersive UI Ambient Background Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-25 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #7C3AED 0%, #0EA5E9 100%)' }}
        />
        <div
          className="absolute top-[40%] left-[-10%] w-[550px] h-[550px] rounded-full blur-[110px] opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #0EA5E9 0%, #F8FAFC 100%)' }}
        />
      </div>

      {/* Interactive 3D AI Animated Element Layer (Scroll & Mouse Reactive) */}
      <Interactive3dAiLayer />

      <div className="relative z-10">
        {/* Top Sticky Navigation */}
        <Navbar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          onOpenInquiry={handleOpenInquiry}
        />

        {/* Floating WhatsApp Community Notification (subtly slides in top right) */}
        <FloatingWhatsAppNotification />

        {/* Floating Phone CTA for mobile */}
        <MobileFloatingPhone />

        {/* Main Content Router */}
        {currentPage === 'home' ? (
          <main>
            {/* Section 6: Hero Section with 3D AI Orb */}
            <HeroSection
              onStartJourney={handleOpenInquiry}
              onExploreProgram={handleExploreProgram}
            />

            {/* Section 8: Why AI Skills Matter */}
            <WhyAiMatterSection onLearnMore={handleExploreProgram} />

            {/* Section 9: What Your Child Will Learn */}
            <WhatWeTeachSection />

            {/* Section 10: The Vaibhav AI Method™ (3D Timeline) */}
            <VaibhavMethodSection />

            {/* Section 11: Parent Connection Section */}
            <ParentConnectionSection onHelpChild={handleOpenInquiry} />

            {/* Section 12: Student Experience (Interactive) */}
            <StudentExperienceSection />

            {/* Section 13: Results & Outcomes */}
            <OutcomesSection onStartJourney={handleOpenInquiry} />

            {/* Section 14: Bonuses Included */}
            <BonusesSection onClaim={handleOpenInquiry} />

            {/* MAJOR SECTION 3: “About Vaibhav” / “My Story” (Story, Floating Photo, Stepper, Testimonials, Final CTA) */}
            <AboutVaibhavSection onJoinNextBatch={handleOpenInquiry} />

            {/* Section 15: FAQ Accordion for Parents */}
            <FaqSection />
          </main>
        ) : (
          <main>
            {/* Section 14 & 15: Dedicated About Vaibhav Chowdhary & About Academy Page */}
            <AboutPage
              onBackToHome={() => setCurrentPage('home')}
              onStartJourney={handleOpenInquiry}
            />
          </main>
        )}

        {/* Section 21: Footer */}
        <Footer
          onNavigate={handleNavigateSection}
          onOpenAbout={() => {
            setCurrentPage('about');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenHome={() => {
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenSheetsSettings={() => setSheetsSettingsOpen(true)}
        />

        {/* Admission / Inquiry Modal */}
        <InquiryModal
          isOpen={inquiryModalOpen}
          onClose={() => setInquiryModalOpen(false)}
        />

        {/* Google Sheets Automation Manager & Settings Modal */}
        <GoogleSheetsSettingsModal
          isOpen={sheetsSettingsOpen}
          onClose={() => setSheetsSettingsOpen(false)}
        />
      </div>
    </div>
  );
}
