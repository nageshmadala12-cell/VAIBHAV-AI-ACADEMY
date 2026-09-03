import React, { useState, useEffect, useRef } from 'react';
import { Camera, Sparkles, Upload } from 'lucide-react';

interface FounderPortraitProps {
  className?: string;
}

export const FounderPortrait: React.FC<FounderPortraitProps> = ({ className = "" }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('vaibhav_founder_photo') || '/founder-vaibhav.jpg';
    }
    return '/founder-vaibhav.jpg';
  });
  const [loadError, setLoadError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setImageSrc(result);
        setLoadError(false);
        try {
          localStorage.setItem('vaibhav_founder_photo', result);
        } catch (err) {
          console.warn('Storage quota exceeded for founder photo preview', err);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`relative group ${className}`}>
      {/* 3D Depth Card Frame */}
      <div className="relative rounded-3xl p-3 sm:p-4 bg-gradient-to-b from-white/90 via-slate-50/80 to-purple-50/40 border border-purple-100/80 shadow-[0_20px_50px_rgba(79,70,229,0.12)] backdrop-blur-xl transition-all duration-500 hover:shadow-[0_25px_60px_rgba(79,70,229,0.2)] hover:-translate-y-1">
        
        {/* Subtle Decorative Corner Glows */}
        <div className="absolute -top-6 -left-6 w-24 h-24 bg-sky-400/20 rounded-full blur-2xl pointer-events-none -z-10" />
        <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-purple-500/20 rounded-full blur-2xl pointer-events-none -z-10" />

        {/* Photo Container */}
        <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-900 flex items-center justify-center border border-white/60 shadow-inner">
          
          {/* Real Photo Attempt */}
          {!loadError && imageSrc ? (
            <img
              src={imageSrc}
              alt="Vaibhav Chowdhary - Founder of Vaibhav AI Academy"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
              onError={() => {
                // If the static file hasn't been copied to /public/founder-vaibhav.jpg, fall back to the faithful vector rendering
                setLoadError(true);
              }}
            />
          ) : (
            /* High-Fidelity Vector Representation of Vaibhav Chowdhary */
            <div className="relative w-full h-full bg-gradient-to-b from-[#2B1B17] via-[#1E1B4B] to-[#0F172A] flex flex-col items-center justify-end overflow-hidden">
              {/* Studio Warm Bokeh Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#382012]/80 via-[#1e1b4b]/60 to-[#0284c7]/30" />
              
              {/* Pillar architectural element on right */}
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-20 bg-gradient-to-l from-white/25 via-white/10 to-transparent" />
              
              {/* Founder SVG Silhouette & Likeness */}
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

                {/* White Shirt Torso & Sleeves (Arms Crossed) */}
                <path d="M 60 250 L 110 200 L 250 200 L 300 250 L 320 380 L 40 380 Z" fill="#F8FAFC" />
                {/* Left arm sleeve rolled up */}
                <path d="M 50 250 Q 70 340 120 370 L 150 350 Q 90 310 80 250 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
                {/* Right arm sleeve rolled up */}
                <path d="M 310 250 Q 290 340 240 370 L 210 350 Q 270 310 280 250 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />

                {/* Navy Blue Textured Nehru Jacket / Waistcoat */}
                <path d="M 110 185 L 140 170 L 220 170 L 250 185 L 265 370 Q 180 395 95 370 Z" fill="url(#jacketGrad)" stroke="#334155" strokeWidth="1.5" />
                {/* Bandhgala Mandarin Collar */}
                <path d="M 142 166 Q 180 172 218 166 L 220 184 Q 180 190 140 184 Z" fill="#1E1B4B" stroke="#475569" strokeWidth="1" />
                {/* White inner shirt collar peaking out */}
                <path d="M 148 165 Q 180 170 212 165 L 210 162 Q 180 166 150 162 Z" fill="#FFFFFF" />
                
                {/* Front Button Placket */}
                <line x1="180" y1="185" x2="180" y2="380" stroke="#334155" strokeWidth="2" />
                {/* Buttons */}
                <circle cx="180" cy="215" r="4.5" fill="#0F172A" stroke="#64748B" strokeWidth="1.5" />
                <circle cx="180" cy="255" r="4.5" fill="#0F172A" stroke="#64748B" strokeWidth="1.5" />
                <circle cx="180" cy="295" r="4.5" fill="#0F172A" stroke="#64748B" strokeWidth="1.5" />
                <circle cx="180" cy="335" r="4.5" fill="#0F172A" stroke="#64748B" strokeWidth="1.5" />

                {/* Breast Pocket with patterned pocket square */}
                <rect x="215" y="245" width="28" height="3" rx="1.5" fill="#334155" />
                <path d="M 220 245 L 225 235 L 232 245 L 238 238 L 241 245 Z" fill="#BE123C" />

                {/* Crossed Forearms */}
                {/* Left Forearm across */}
                <path d="M 115 330 Q 180 370 250 340 Q 230 310 170 320 Z" fill="url(#skinGrad)" />
                {/* Right Forearm crossed over */}
                <path d="M 245 330 Q 180 375 110 345 Q 130 315 190 325 Z" fill="url(#skinGrad)" />

                {/* Gold Kada / Bracelet on Right Wrist */}
                <rect x="135" y="340" width="8" height="28" rx="3" transform="rotate(-15 135 340)" fill="url(#goldGrad)" stroke="#A16207" strokeWidth="0.8" />
                {/* Sacred Red Thread (Kalava) */}
                <line x1="145" y1="344" x2="147" y2="368" stroke="#DC2626" strokeWidth="2.5" strokeDasharray="2,1" />

                {/* Silver Watch on Left Wrist */}
                <rect x="82" y="305" width="9" height="24" rx="2" transform="rotate(25 82 305)" fill="#94A3B8" stroke="#475569" strokeWidth="1" />

                {/* Neck */}
                <rect x="162" y="140" width="36" height="30" rx="4" fill="url(#skinGrad)" />

                {/* Head / Face */}
                <ellipse cx="180" cy="115" rx="42" ry="50" fill="url(#faceGlow)" />

                {/* Dark Wavy Hair */}
                <path d="M 132 110 Q 130 65 180 65 Q 230 65 228 110 Q 224 80 180 78 Q 136 80 132 110 Z" fill="url(#hairGrad)" />
                <path d="M 140 75 Q 165 52 195 56 Q 225 60 226 80 Q 210 66 185 68 Q 160 70 140 75 Z" fill="#1C1917" />
                
                {/* Facial Features (Warm, Friendly, Confident Smile) */}
                {/* Eyebrows */}
                <path d="M 152 98 Q 163 94 172 98" stroke="#292524" strokeWidth="3" strokeLinecap="round" />
                <path d="M 188 98 Q 197 94 208 98" stroke="#292524" strokeWidth="3" strokeLinecap="round" />
                {/* Eyes */}
                <ellipse cx="162" cy="107" rx="5" ry="3.5" fill="#1C1917" />
                <ellipse cx="198" cy="107" rx="5" ry="3.5" fill="#1C1917" />
                <circle cx="163" cy="105" r="1.2" fill="#FFFFFF" />
                <circle cx="199" cy="105" r="1.2" fill="#FFFFFF" />
                {/* Nose */}
                <path d="M 180 106 L 180 122 Q 183 124 185 122" stroke="#B45309" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.6" />
                {/* Warm, confident smile */}
                <path d="M 166 134 Q 180 146 194 134" stroke="#881337" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M 169 135 Q 180 142 191 135 Z" fill="#FFFFFF" opacity="0.9" />
              </svg>
            </div>
          )}

          {/* Bottom Overlay Label */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent p-4 sm:p-5 text-white flex flex-col justify-end pointer-events-none">
            <span className="text-xs font-semibold tracking-wider text-sky-400 uppercase flex items-center gap-1.5 mb-0.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              Young AI Education Entrepreneur
            </span>
            <h3 className="text-lg sm:text-xl font-bold font-['Poppins'] tracking-tight text-white">
              Vaibhav Chowdhary
            </h3>
            <p className="text-xs text-slate-300">Founder, Vaibhav AI Academy Pvt. Ltd.</p>
          </div>
        </div>

        {/* Action Button to Upload Real Photo if desired */}
        <div className="mt-3 flex items-center justify-between text-xs text-slate-500 px-1">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Verified Profile • 2026
          </span>
          <button
            onClick={() => fileInputRef.current?.click()}
            type="button"
            className="inline-flex items-center gap-1 text-[11px] font-medium text-purple-600 hover:text-purple-700 bg-purple-50 hover:bg-purple-100 px-2 py-1 rounded-md transition-colors cursor-pointer"
            title="Update founder photo preview"
          >
            <Camera className="w-3 h-3" />
            <span>Update Photo</span>
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
        </div>
      </div>
    </div>
  );
};
