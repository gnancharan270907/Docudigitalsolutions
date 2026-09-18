import React, { useState } from 'react';
import { X, CheckCircle2, Send, Shield, Loader2 } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialTopic = 'General Project Discussion'
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    projectType: initialTopic,
    scope: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.organization.trim()) errs.organization = 'Institution or organization name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format';
    }
    if (!formData.scope.trim()) {
      errs.scope = 'Please briefly share your project requirements or question';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    // Realistic frontend simulated submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      organization: '',
      email: '',
      phone: '',
      projectType: 'General Project Discussion',
      scope: ''
    });
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2" id="modal-title">
              Enquiry Received
            </h3>
            <p className="text-slate-300 text-sm max-w-md mb-6 leading-relaxed">
              Thank you, <span className="text-cyan-400 font-semibold">{formData.fullName}</span>. Your enquiry on behalf of <span className="text-white font-semibold">{formData.organization}</span> has been logged. Our senior project strategist will review your requirements and reach out within 1 business day.
            </p>
            <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 text-xs text-slate-400 max-w-md w-full mb-6 text-left">
              <p className="font-semibold text-slate-300 mb-1">Direct Verification Contact:</p>
              <p>Managing Director: {COMPANY_INFO.managingDirector}</p>
              <p>WhatsApp: {COMPANY_INFO.whatsapp}</p>
              <p>Website: {COMPANY_INFO.website}</p>
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold rounded-lg shadow-md transition-all text-sm"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                Institutional Project Consultation
              </span>
              <h3 className="text-2xl font-bold text-white mt-1" id="modal-title">
                Discuss Your Requirements
              </h3>
              <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
                Connect with {COMPANY_INFO.name} for pilot scoping, custom digitizing pipelines, metadata remediation, or case study access.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Dr. / Prof. / Full Name"
                    className={`w-full bg-slate-950/70 border rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors ${
                      errors.fullName ? 'border-red-500' : 'border-slate-700'
                    }`}
                  />
                  {errors.fullName && <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Institution / Organization <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="University, Library, or Archive"
                    className={`w-full bg-slate-950/70 border rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors ${
                      errors.organization ? 'border-red-500' : 'border-slate-700'
                    }`}
                  />
                  {errors.organization && <p className="text-[11px] text-red-400 mt-1">{errors.organization}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Institutional Email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@institution.edu"
                    className={`w-full bg-slate-950/70 border rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors ${
                      errors.email ? 'border-red-500' : 'border-slate-700'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 ... or +966 ... or +91 ..."
                    className="w-full bg-slate-950/70 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Area of Interest / Project Type
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-slate-950/70 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
                >
                  <option value="General Project Discussion">General Project Discussion</option>
                  <option value="Library & Archive Digitization">Library & Archive Digitization</option>
                  <option value="OCR & Intelligent Document Processing">OCR & Intelligent Document Processing</option>
                  <option value="Metadata Enrichment & Remediation">Metadata Enrichment & Remediation</option>
                  <option value="Repository Content Migration">Repository Content Migration</option>
                  <option value="Multi-Tier Quality Assurance">Multi-Tier Quality Assurance</option>
                  <option value="Request Full Case Study Information">Request Full Case Study Information</option>
                  <option value="Gulf & Saudi Arabia Library Projects">Gulf & Saudi Arabia Library Projects</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Project Scope or Questions <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  rows={3}
                  value={formData.scope}
                  onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                  placeholder="Estimated volume, document formats, timelines, or specific preservation questions..."
                  className={`w-full bg-slate-950/70 border rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors resize-none ${
                    errors.scope ? 'border-red-500' : 'border-slate-700'
                  }`}
                />
                {errors.scope && <p className="text-[11px] text-red-400 mt-1">{errors.scope}</p>}
              </div>

              <div className="flex items-center gap-2 text-slate-400 text-xs pt-1">
                <Shield className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Confidentiality guaranteed. Clients retain full ownership of standards and data.</span>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm text-slate-400 hover:text-white rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold rounded-lg shadow-md transition-all text-sm flex items-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Request</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
