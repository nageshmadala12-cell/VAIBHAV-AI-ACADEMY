import React, { useState } from 'react';
import { X, Sparkles, Send, CheckCircle2, MessageCircle, AlertCircle, Loader2, FileSpreadsheet } from 'lucide-react';
import { ACADEMY_CONFIG } from '../data/academyData';
import { submitFormToGoogleSheet } from '../services/googleSheetsService';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose }) => {
  const [parentName, setParentName] = useState('');
  const [studentName, setStudentName] = useState('');
  const [studentClass, setStudentClass] = useState('Class 7');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedTimestamp, setSubmittedTimestamp] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const result = await submitFormToGoogleSheet({
        parentName,
        studentName,
        studentClass,
        phoneNumber,
      });

      setSubmittedTimestamp(result.submission.timestamp || new Date().toLocaleString());
      setSubmitted(true);
    } catch (err: any) {
      console.error('Submission failed:', err);
      setErrorMessage(
        err.message || 'Unable to submit your inquiry to Google Sheet. Please check your connection and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendViaWhatsApp = () => {
    const text = `Hello Vaibhav AI Academy, I would like to enroll my child for the AI program.\nParent Name: ${parentName || 'Parent'}\nStudent Name: ${studentName || 'Student'}\nClass: ${studentClass}\nPhone: ${phoneNumber || 'Not provided'}`;
    const url = `https://wa.me/916305241801?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/70 text-purple-800 text-xs font-semibold uppercase tracking-wider w-fit mb-3">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>Admissions & Inquiries</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-['Poppins'] text-slate-900">
              Start Your Child’s AI Journey
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Classes 5–12 • Beginner-Friendly • Practical AI Skills
            </p>

            {/* Error Message with Retry */}
            {errorMessage && (
              <div className="mt-4 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div className="flex-1 space-y-1">
                  <p className="font-semibold text-rose-900">Submission Error</p>
                  <p className="leading-relaxed">{errorMessage}</p>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Parent / Guardian Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Rajesh Sharma"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Student Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Aarav"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Student's Class
                  </label>
                  <select
                    value={studentClass}
                    onChange={(e) => setStudentClass(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="Class 5">Class 5</option>
                    <option value="Class 6">Class 6</option>
                    <option value="Class 7">Class 7</option>
                    <option value="Class 8">Class 8</option>
                    <option value="Class 9">Class 9</option>
                    <option value="Class 10">Class 10</option>
                    <option value="Class 11">Class 11</option>
                    <option value="Class 12">Class 12</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  WhatsApp / Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g., 98765 43210"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-sm shadow-md shadow-violet-500/20 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending to Google Sheet...</span>
                    </>
                  ) : errorMessage ? (
                    <>
                      <span>Retry Submission</span>
                      <Send className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-500">
                Or reach us directly anytime at{' '}
                <a href={ACADEMY_CONFIG.phoneTel} className="text-violet-600 font-bold hover:underline">
                  {ACADEMY_CONFIG.phoneDisplay}
                </a>
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4 animate-in fade-in duration-300">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-2xl font-bold font-['Poppins'] text-slate-900">
                Thank You / Successfully Submitted!
              </h3>
              <p className="text-xs font-semibold text-emerald-700 mt-1 flex items-center justify-center gap-1.5">
                <FileSpreadsheet className="w-3.5 h-3.5" />
                <span>Added as a new row in Google Sheet</span>
              </p>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
              We have received your admission inquiry for {studentName || 'your child'} ({studentClass}). Our academy counselor from Banjara Hills will get in touch shortly.
            </p>

            {submittedTimestamp && (
              <div className="py-2 px-3 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-500 max-w-xs mx-auto">
                Logged at: <span className="font-semibold text-slate-700">{submittedTimestamp}</span>
              </div>
            )}

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={handleSendViaWhatsApp}
                className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Instant Confirmation via WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setErrorMessage(null);
                  onClose();
                }}
                className="w-full py-2.5 text-xs text-slate-500 hover:text-slate-800 font-medium transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
