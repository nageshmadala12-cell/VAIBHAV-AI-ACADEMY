import React, { useState, useEffect } from 'react';
import { MessageCircle, X, ArrowRight, Bell } from 'lucide-react';
import { ACADEMY_CONFIG } from '../data/academyData';

export const FloatingWhatsAppNotification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    // Reveal subtly after 2.6 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2600);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  if (isMinimized) {
    return (
      <div className="fixed top-24 right-4 z-40 animate-in fade-in zoom-in-95 duration-300">
        <button
          onClick={() => setIsMinimized(false)}
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-3.5 py-2 rounded-full shadow-xl shadow-green-100 text-xs font-bold cursor-pointer border border-emerald-300 hover:scale-105 transition-transform"
          title="Open WhatsApp notification"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span className="hidden sm:inline">WhatsApp Community</span>
          <span className="w-2 h-2 rounded-full bg-white animate-ping" />
        </button>
      </div>
    );
  }

  return (
    <div
      className="fixed top-20 sm:top-24 right-3 sm:right-6 z-40 max-w-[320px] sm:max-w-xs w-[calc(100%-1.5rem)] animate-in slide-in-from-top-4 fade-in duration-500"
      id="floating-whatsapp-cta"
    >
      <div className="relative rounded-2xl p-4 bg-white/95 backdrop-blur-xl border border-violet-100 shadow-2xl shadow-violet-500/10 transition-all hover:shadow-violet-500/15">
        
        {/* Subtle glowing indicator */}
        <div className="absolute -top-1.5 -left-1.5 w-4 h-4 rounded-full bg-[#25D366] border-2 border-white flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
        </div>

        {/* Close / Minimize Button */}
        <button
          onClick={() => setIsMinimized(true)}
          className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Minimize notification"
          title="Minimize"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content */}
        <div className="flex items-start gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/25">
            <MessageCircle className="w-6 h-6 fill-white" />
          </div>

          <div className="pr-4">
            <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-violet-600">
              <span>Official Community</span>
            </div>
            <h4 className="text-sm font-bold text-slate-900 leading-snug mt-0.5">
              Join Our WhatsApp Community
            </h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              AI tips, school project ideas & student opportunities.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <span className="text-[11px] text-slate-500 font-medium">Free for parents & kids</span>
          <a
            href={ACADEMY_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-sm transition-all hover:translate-x-0.5 cursor-pointer"
          >
            <span>JOIN NOW</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
};
