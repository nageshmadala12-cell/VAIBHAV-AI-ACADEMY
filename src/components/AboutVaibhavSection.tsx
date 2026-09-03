import React, { useState, useRef } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Quote, 
  Star, 
  Upload, 
  Camera, 
  CheckCircle2, 
  Rocket, 
  BookOpen, 
  Lightbulb, 
  Users, 
  Trophy,
  MessageCircle
} from 'lucide-react';
import { ACADEMY_CONFIG } from '../data/academyData';

interface AboutVaibhavSectionProps {
  onJoinNextBatch: () => void;
}

export const AboutVaibhavSection: React.FC<AboutVaibhavSectionProps> = ({ onJoinNextBatch }) => {
  // Photo state with persistence so user upload works immediately
  const [photoSrc, setPhotoSrc] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('vaibhav_founder_photo') || '/founder-vaibhav.jpg';
    }
    return '/founder-vaibhav.jpg';
  });
  const [photoLoadError, setPhotoLoadError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setPhotoSrc(result);
        setPhotoLoadError(false);
        try {
          localStorage.setItem('vaibhav_founder_photo', result);
        } catch (err) {
          console.warn('Storage quota exceeded', err);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Timeline Stepper Data
  const timelineSteps = [
    { label: "Curiosity", icon: Lightbulb, color: "text-[#00C2FF] bg-[#00C2FF]/10 border-[#00C2FF]/30" },
    { label: "Learning", icon: BookOpen, color: "text-sky-400 bg-sky-400/10 border-sky-400/30" },
    { label: "Teaching", icon: Users, color: "text-violet-400 bg-violet-400/10 border-violet-400/30" },
    { label: "Vaibhav AI Academy", icon: Rocket, color: "text-purple-300 bg-purple-500/20 border-purple-400/40" },
    { label: "AI Future Leaders", icon: Trophy, color: "text-amber-300 bg-amber-400/10 border-amber-400/30" }
  ];

  // 5 Sample Testimonials as requested
  const sampleTestimonials = [
    {
      quote: "My child is now much more confident and excited to learn about AI. The practical approach makes learning very interesting.",
      author: "Parent Name",
      role: "Parent",
      initials: "PN",
      badgeColor: "bg-violet-100 text-violet-700 border-violet-200"
    },
    {
      quote: "The sessions are amazing and easy to understand. My child started experimenting with AI on their own after the classes.",
      author: "Parent Name",
      role: "Parent",
      initials: "PN",
      badgeColor: "bg-sky-100 text-sky-700 border-sky-200"
    },
    {
      quote: "I really enjoyed the practical activities. It made AI feel simple and fun instead of complicated.",
      author: "Student Name",
      role: "Student",
      initials: "SN",
      badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200"
    },
    {
      quote: "What I liked most was that the focus was not just on learning tools, but on learning how to think and create.",
      author: "Parent Name",
      role: "Parent",
      initials: "PN",
      badgeColor: "bg-violet-100 text-violet-700 border-violet-200"
    },
    {
      quote: "The way Vaibhav explains things makes students feel confident to ask questions and try new ideas.",
      author: "Parent Name",
      role: "Parent",
      initials: "PN",
      badgeColor: "bg-amber-100 text-amber-700 border-amber-200"
    }
  ];

  return (
    <section 
      id="about-vaibhav" 
      className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-[#0B132B] via-[#0F172A] to-[#0A0F1D] text-white"
    >
      {/* Immersive Atmospheric AI Glows in Neon Blue & Purple */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#7C3AED]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[28rem] h-[28rem] bg-[#00C2FF]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-violet-600/15 rounded-full blur-[110px] pointer-events-none" />
      
      {/* Subtle Geometric Tech Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#00C2FF 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20 sm:space-y-24">
        
        {/* ========================================================= */}
        {/* 1. SECTION HEADER: "Who is Vaibhav?"                      */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/40 text-violet-300 text-xs sm:text-sm font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(124,58,237,0.25)]">
            <Sparkles className="w-4 h-4 text-[#00C2FF]" />
            <span>FOUNDER JOURNEY & MISSION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Poppins'] tracking-tight text-white leading-tight">
            Who is <span className="bg-gradient-to-r from-[#00C2FF] via-sky-300 to-[#7C3AED] bg-clip-text text-transparent">Vaibhav?</span>
          </h2>

          <p className="text-lg sm:text-xl font-medium text-slate-300 font-['Poppins']">
            From learning AI to helping the next generation learn AI.
          </p>
        </div>

        {/* ========================================================= */}
        {/* 2. MAIN STORY & FLOATING PHOTO GRID                       */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Vaibhav's Floating Photo with AI Glow & Badge */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Soft Neon Blue + Purple Ambient AI Halo behind Photo */}
              <div 
                className="absolute inset-0 -m-4 rounded-3xl opacity-75 blur-2xl pointer-events-none transition-all duration-700"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 194, 255, 0.35) 0%, rgba(124, 58, 237, 0.4) 100%)'
                }}
              />

              {/* Floating Wrapper with Gentle Up-and-Down Motion */}
              <div className="relative animate-[float_6s_ease-in-out_infinite]">
                
                {/* Modern Glassmorphic Card Frame with 3D Depth */}
                <div className="relative rounded-3xl p-3 sm:p-4 bg-slate-900/80 backdrop-blur-xl border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
                  
                  {/* Photo Container */}
                  <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-950 border border-white/10 shadow-inner group">
                    {!photoLoadError && photoSrc ? (
                      <img
                        src={photoSrc}
                        alt="Vaibhav - Founder of Vaibhav AI Academy"
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                        referrerPolicy="no-referrer"
                        onError={() => setPhotoLoadError(true)}
                      />
                    ) : (
                      /* High-Fidelity SVG Portrait Likeness */
                      <div className="relative w-full h-full bg-gradient-to-b from-[#1E293B] via-[#0F172A] to-[#020617] flex flex-col items-center justify-end overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#382012]/70 via-[#1e1b4b]/60 to-[#0284c7]/40" />
                        
                        <svg viewBox="0 0 360 480" className="w-full h-full relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <linearGradient id="jacketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#1E293B" />
                              <stop offset="50%" stopColor="#0F172A" />
                              <stop offset="100%" stopColor="#1E1B4B" />
                            </linearGradient>
                            <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#E2A676" />
                              <stop offset="100%" stopColor="#C88450" />
                            </linearGradient>
                            <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#1C1917" />
                              <stop offset="70%" stopColor="#0C0A09" />
                              <stop offset="100%" stopColor="#292524" />
                            </linearGradient>
                            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#FDE047" />
                              <stop offset="50%" stopColor="#EAB308" />
                              <stop offset="100%" stopColor="#CA8A04" />
                            </linearGradient>
                            <radialGradient id="faceGlow" cx="50%" cy="40%" r="60%">
                              <stop offset="0%" stopColor="#F5D0B5" />
                              <stop offset="80%" stopColor="#C88450" />
                            </radialGradient>
                          </defs>

                          {/* White Shirt Torso & Sleeves */}
                          <path d="M 60 250 L 110 200 L 250 200 L 300 250 L 320 380 L 40 380 Z" fill="#F8FAFC" />
                          <path d="M 50 250 Q 70 340 120 370 L 150 350 Q 90 310 80 250 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
                          <path d="M 310 250 Q 290 340 240 370 L 210 350 Q 270 310 280 250 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />

                          {/* Navy Blue Textured Nehru Jacket / Waistcoat */}
                          <path d="M 110 185 L 140 170 L 220 170 L 250 185 L 265 370 Q 180 395 95 370 Z" fill="url(#jacketGrad)" stroke="#334155" strokeWidth="1.5" />
                          <path d="M 142 166 Q 180 172 218 166 L 220 184 Q 180 190 140 184 Z" fill="#1E1B4B" stroke="#475569" strokeWidth="1" />
                          <path d="M 148 165 Q 180 170 212 165 L 210 162 Q 180 166 150 162 Z" fill="#FFFFFF" />
                          
                          {/* Front Buttons */}
                          <line x1="180" y1="185" x2="180" y2="380" stroke="#334155" strokeWidth="2" />
                          <circle cx="180" cy="215" r="4.5" fill="#0F172A" stroke="#64748B" strokeWidth="1.5" />
                          <circle cx="180" cy="255" r="4.5" fill="#0F172A" stroke="#64748B" strokeWidth="1.5" />
                          <circle cx="180" cy="295" r="4.5" fill="#0F172A" stroke="#64748B" strokeWidth="1.5" />
                          <circle cx="180" cy="335" r="4.5" fill="#0F172A" stroke="#64748B" strokeWidth="1.5" />

                          {/* Breast Pocket with patterned pocket square */}
                          <rect x="215" y="245" width="28" height="3" rx="1.5" fill="#334155" />
                          <path d="M 220 245 L 225 235 L 232 245 L 238 238 L 241 245 Z" fill="#BE123C" />

                          {/* Crossed Forearms */}
                          <path d="M 115 330 Q 180 370 250 340 Q 230 310 170 320 Z" fill="url(#skinGrad)" />
                          <path d="M 245 330 Q 180 375 110 345 Q 130 315 190 325 Z" fill="url(#skinGrad)" />

                          {/* Gold Kada / Bracelet on Right Wrist */}
                          <rect x="135" y="340" width="8" height="28" rx="3" transform="rotate(-15 135 340)" fill="url(#goldGrad)" stroke="#A16207" strokeWidth="0.8" />
                          <line x1="145" y1="344" x2="147" y2="368" stroke="#DC2626" strokeWidth="2.5" strokeDasharray="2,1" />

                          {/* Silver Watch on Left Wrist */}
                          <rect x="82" y="305" width="9" height="24" rx="2" transform="rotate(25 82 305)" fill="#94A3B8" stroke="#475569" strokeWidth="1" />

                          {/* Neck */}
                          <rect x="162" y="140" width="36" height="30" rx="4" fill="url(#skinGrad)" />

                          {/* Head & Face */}
                          <ellipse cx="180" cy="115" rx="42" ry="50" fill="url(#faceGlow)" />

                          {/* Dark Styled Hair */}
                          <path d="M 132 110 Q 130 65 180 65 Q 230 65 228 110 Q 224 80 180 78 Q 136 80 132 110 Z" fill="url(#hairGrad)" />
                          <path d="M 140 75 Q 165 52 195 56 Q 225 60 226 80 Q 210 66 185 68 Q 160 70 140 75 Z" fill="#1C1917" />
                          
                          {/* Facial Features */}
                          <path d="M 152 98 Q 163 94 172 98" stroke="#292524" strokeWidth="3" strokeLinecap="round" />
                          <path d="M 188 98 Q 197 94 208 98" stroke="#292524" strokeWidth="3" strokeLinecap="round" />
                          <ellipse cx="162" cy="107" rx="5" ry="3.5" fill="#1C1917" />
                          <ellipse cx="198" cy="107" rx="5" ry="3.5" fill="#1C1917" />
                          <circle cx="163" cy="105" r="1.2" fill="#FFFFFF" />
                          <circle cx="199" cy="105" r="1.2" fill="#FFFFFF" />
                          <path d="M 180 106 L 180 122 Q 183 124 185 122" stroke="#B45309" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.6" />
                          <path d="M 166 134 Q 180 146 194 134" stroke="#881337" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                          <path d="M 169 135 Q 180 142 191 135 Z" fill="#FFFFFF" opacity="0.9" />
                        </svg>
                      </div>
                    )}

                    {/* Subtle Overlay Controls for quick photo upload/customization */}
                    <div className="absolute top-3 right-3 z-20">
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        title="Change / Upload Photo"
                        className="p-2 rounded-xl bg-slate-900/80 hover:bg-[#7C3AED] text-white/90 border border-white/20 backdrop-blur-md shadow-md transition-all cursor-pointer"
                      >
                        <Camera className="w-4 h-4" />
                      </button>
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handlePhotoUpload}
                        accept="image/*"
                        className="hidden"
                      />
                    </div>
                  </div>

                  {/* SMALL FLOATING BADGE: Founder • AI Educator • Mentor */}
                  <div className="mt-4 px-4 py-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center gap-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-[#00C2FF] animate-pulse" />
                    <span className="text-xs sm:text-sm font-bold tracking-wide text-white font-['Poppins']">
                      Founder • AI Educator • Mentor
                    </span>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Vaibhav's Inspiring Story & Timeline */}
          <div className="lg:col-span-7 space-y-6 text-slate-200">
            
            {/* Lead Narrative */}
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-slate-300">
              <p>
                <strong className="text-white font-semibold">Vaibhav</strong> is an AI educator, mentor, and young entrepreneur who became deeply interested in how AI can change the way students learn, create, and solve problems.
              </p>

              <p>
                While exploring AI and its possibilities, he realized something important:
              </p>

              {/* Emotional Callout Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#7C3AED]/20 via-slate-800/80 to-[#00C2FF]/15 border border-[#00C2FF]/30 backdrop-blur-md shadow-lg my-4">
                <Quote className="w-6 h-6 text-[#00C2FF] mb-2 opacity-80" />
                <p className="text-white font-semibold text-base sm:text-lg leading-snug">
                  “AI is not just for professionals and businesses. Young students can also learn to use AI creatively and responsibly from an early age.”
                </p>
              </div>

              <p>
                That idea became the starting point of <strong className="text-white font-semibold">Vaibhav AI Academy</strong>.
              </p>

              <p>
                What started as a passion for learning and sharing knowledge gradually grew into a mission — to create a community where students can learn practical AI skills, experiment with new ideas, create projects, and become confident <strong className="text-[#00C2FF] font-semibold">AI Future Leaders</strong>.
              </p>
            </div>

            {/* Vision Statement Box */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-violet-500/30 shadow-xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00C2FF]">
                The Academy Vision
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white font-['Poppins'] leading-snug">
                “Empower the next generation to learn, create, and lead with AI.”
              </h3>
              <p className="text-sm sm:text-base text-slate-400">
                The goal is to reach and empower <strong className="text-white font-semibold">100,000+ students globally</strong> and help young minds become future-ready in an AI-powered world.
              </p>
            </div>

            {/* Timeline-style visual: Curiosity → Learning → Teaching → Vaibhav AI Academy → AI Future Leaders */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                The Journey of Growth
              </span>
              
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-2.5">
                {timelineSteps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div 
                      key={step.label}
                      className="relative flex flex-col items-center text-center p-3 rounded-xl bg-slate-900/70 border border-white/10 hover:border-[#00C2FF]/50 transition-all group"
                    >
                      <div className={`w-8 h-8 rounded-lg ${step.color} border flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] sm:text-xs font-semibold text-slate-200 leading-tight">
                        {step.label}
                      </span>
                      {idx < timelineSteps.length - 1 && (
                        <span className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-600 font-bold z-10">
                          →
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. WHAT STUDENTS & PARENTS SAY (Sample Testimonials)       */}
        {/* ========================================================= */}
        <div className="pt-10 border-t border-slate-800/80 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Poppins'] text-white">
              What Students & Parents Say
            </h3>
            
            {/* Clearly marked as sample / placeholder testimonials as requested */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-slate-300 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Sample feedback previews • Real student reviews updated after each cohort</span>
            </div>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleTestimonials.map((item, index) => (
              <div
                key={index}
                className="relative rounded-2xl p-6 bg-slate-900/60 backdrop-blur-md border border-white/10 shadow-lg hover:border-violet-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-4 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed mb-6">
                    “{item.quote}”
                  </p>
                </div>

                {/* Author Info with Initial Avatar Circle */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#7C3AED] to-[#00C2FF] flex items-center justify-center font-bold text-white text-xs shadow-md">
                    {item.initials}
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-white font-['Poppins']">
                      {item.author}
                    </span>
                    <span className="block text-xs font-medium text-slate-400">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 4. FINAL CTA: Ready to Become an AI Future Leader?       */}
        {/* ========================================================= */}
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#7C3AED]/30 via-slate-900/90 to-[#00C2FF]/20 border border-white/20 shadow-2xl text-center space-y-6 relative overflow-hidden">
          {/* Subtle Ambient Shapes */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#00C2FF]/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#7C3AED]/30 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-['Poppins'] text-white tracking-tight">
              Ready to Become an <span className="bg-gradient-to-r from-[#00C2FF] to-violet-400 bg-clip-text text-transparent">AI Future Leader?</span>
            </h3>

            <p className="text-base sm:text-lg text-slate-300 font-medium">
              Join a community where young minds learn, create, and grow with AI.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={onJoinNextBatch}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#7C3AED] to-violet-700 hover:from-violet-600 hover:to-violet-800 shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:shadow-[0_0_40px_rgba(124,58,237,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
                id="about-vaibhav-join-batch-cta"
              >
                <span>JOIN THE NEXT BATCH</span>
                <ArrowRight className="w-5 h-5 text-[#00C2FF]" />
              </button>

              <a
                href={ACADEMY_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-semibold text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-lg shadow-emerald-950/30 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>WhatsApp Community</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
