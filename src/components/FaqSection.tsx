import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle, ArrowRight } from 'lucide-react';
import { FAQS, ACADEMY_CONFIG } from '../data/academyData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] relative overflow-hidden" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/80 text-purple-800 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-purple-600" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Poppins'] tracking-tight text-slate-900">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-purple-600 to-sky-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Clear answers to common questions asked by parents and students.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-purple-300 shadow-md shadow-purple-500/5'
                    : 'bg-white/80 border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold font-['Poppins'] text-slate-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-purple-100 text-purple-700 rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                    
                    {/* If Question 5 (WhatsApp connection), render the direct link */}
                    {idx === 4 && (
                      <div className="mt-3 pt-2">
                        <a
                          href={ACADEMY_CONFIG.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-sm"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Join the WhatsApp Community Directly</span>
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
