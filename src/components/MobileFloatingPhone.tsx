import React from 'react';
import { Phone } from 'lucide-react';
import { ACADEMY_CONFIG } from '../data/academyData';

export const MobileFloatingPhone: React.FC = () => {
  return (
    <aside
      className="sm:hidden fixed bottom-5 left-4 z-40"
      aria-label="Contact actions"
    >
      <a
        href={ACADEMY_CONFIG.phoneTel}
        className="flex items-center gap-2 bg-gradient-to-r from-purple-700 to-indigo-700 text-white px-3.5 py-2.5 rounded-full shadow-[0_8px_20px_rgba(79,70,229,0.35)] border border-purple-400/40 text-xs font-bold active:scale-95 transition-transform"
        aria-label="Call Vaibhav AI Academy at 630-524-1801"
      >
        <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
          <Phone className="w-3.5 h-3.5 text-white" />
        </span>
        <span>Call Us</span>
      </a>
    </aside>
  );
};
