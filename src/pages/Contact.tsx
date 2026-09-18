import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { 
  MessageCircle, 
  Mail, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Loader2 
} from 'lucide-react';


export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    projectType: 'Library & Archive Digitization',
    description: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.organization.trim()) errs.organization = 'Institution or organization name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format';
    }
    if (!formData.description.trim()) {
      errs.description = 'Please provide a brief description of your project or requirements';
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

    // Frontend-only simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      organization: '',
      email: '',
      phone: '',
      projectType: 'Library & Archive Digitization',
      description: ''
    });
  };

  return (
    <div className="space-y-16 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
          Project Consultation & Enquiries
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Discuss Your Project With Our Specialists
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          Contact DocuDigital Solutions to discuss digitization pilots, high-volume document workflows, repository migrations, or metadata remediation projects.
        </p>
      </section>

      {/* Main Grid: Info Sidebar & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Verified Contact Information & Security Box */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-6 shadow-xl">
            <h2 className="text-xl font-bold text-white tracking-tight">
              Direct Contact Details
            </h2>

            <div className="space-y-4 text-xs">
              {/* Managing Director */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                <span className="text-slate-400 block text-[11px]">Managing Director</span>
                <p className="text-sm font-bold text-white">{COMPANY_INFO.managingDirector}</p>
                <p className="text-[11px] text-slate-400">DocuDigital Solutions Private Limited</p>
              </div>

              {/* Verified WhatsApp */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1.5">
                <span className="text-slate-400 block text-[11px]">Direct WhatsApp Communication</span>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{COMPANY_INFO.whatsapp}</span>
                </a>
                <p className="text-[11px] text-slate-400">
                  Instant messaging available for swift project coordination.
                </p>
              </div>

              {/* Email Address */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-1.5">
                <span className="text-slate-400 block text-[11px]">Email Address</span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-mono text-xs font-semibold"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
                <p className="text-[10px] text-slate-400">
                  Direct project inquiries and institutional correspondence.
                </p>
              </div>
            </div>

            {/* Privacy & Governance Guarantee Box */}
            <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Confidentiality & Privacy Assurance</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                We handle institutional inquiries under strict confidentiality. We do not share project specifications or institution details with third parties.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Frontend-Only Interactive Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl relative">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Enquiry Successfully Received
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-cyan-400 font-semibold">{formData.name}</span>. Your enquiry on behalf of <span className="text-white font-semibold">{formData.organization}</span> has been processed. Our consulting team will review your project parameters and respond within one business day.
                </p>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400 max-w-md mx-auto text-left space-y-1">
                  <p className="font-semibold text-slate-300">Submission Summary:</p>
                  <p><strong className="text-slate-400">Project Type:</strong> {formData.projectType}</p>
                  <p><strong className="text-slate-400">Contact Email:</strong> {formData.email}</p>
                  <p className="pt-2 text-[11px] text-cyan-400">
                    For urgent inquiries, you may also reach Managing Director {COMPANY_INFO.managingDirector} directly on WhatsApp at {COMPANY_INFO.whatsapp}.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h2 className="text-xl font-bold text-white tracking-tight">
                    Project Consultation Form
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill out the fields below to request an initial scoping discussion or formal technical quote.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Jane Smith / Director"
                      className={`w-full px-3.5 py-2.5 bg-slate-950/80 border rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors ${
                        errors.name ? 'border-red-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Institution / Organization <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="University, Library, Archive, or Firm"
                      className={`w-full px-3.5 py-2.5 bg-slate-950/80 border rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors ${
                        errors.organization ? 'border-red-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.organization && <p className="text-[11px] text-red-400 mt-1">{errors.organization}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="institutional.email@university.edu"
                      className={`w-full px-3.5 py-2.5 bg-slate-950/80 border rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors ${
                        errors.email ? 'border-red-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Phone / WhatsApp (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000 or +966..."
                      className="w-full px-3.5 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Primary Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950/80 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors"
                  >
                    <option value="Library & Archive Digitization">Library & Archive Digitization</option>
                    <option value="High-Accuracy OCR & Full-Text Extraction">High-Accuracy OCR & Full-Text Extraction</option>
                    <option value="Intelligent Document Processing (IDP)">Intelligent Document Processing (IDP)</option>
                    <option value="Metadata Extraction, Remediation & Normalization">Metadata Extraction, Remediation & Normalization</option>
                    <option value="Repository & Digital Asset Migration">Repository & Digital Asset Migration</option>
                    <option value="Multi-Tier Quality Assurance & Auditing">Multi-Tier Quality Assurance & Auditing</option>
                    <option value="Workflow Automation & Systems Integration">Workflow Automation & Systems Integration</option>
                    <option value="Saudi Arabia & Gulf Regional Digital Initiative">Saudi Arabia & Gulf Regional Digital Initiative</option>
                    <option value="Other High-Volume Content Processing">Other High-Volume Content Processing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Project Description / Specifications <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe estimated volume (e.g. number of pages, books, records), current physical or digital condition, target timelines, or specific metadata formats required..."
                    className={`w-full px-3.5 py-2.5 bg-slate-950/80 border rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-colors resize-none ${
                      errors.description ? 'border-red-500' : 'border-slate-800'
                    }`}
                  />
                  {errors.description && <p className="text-[11px] text-red-400 mt-1">{errors.description}</p>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 bg-gradient-to-r from-cyan-400 via-sky-400 to-teal-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Enquiry</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-slate-500 text-center">
                  Frontend demonstration form. Data remains local and triggers a confirmed feedback cycle.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
