import React from 'react';
import { BrandLogo } from '../common/BrandLogo';
import { COMPANY_INFO } from '../../data/companyData';
import { 
  MessageCircle, 
  Globe, 
  Shield, 
  Lock
} from 'lucide-react';


interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenConsultation: (topic?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  const handleNav = (tab: string) => {
    onNavigate(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm relative overflow-hidden">
      {/* Decorative top accent line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="lg" />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {COMPANY_INFO.legalName} delivers specialized document digitization, archival imaging, OCR, metadata normalization, and repository migration services tailored for universities, national libraries, and research institutions worldwide.
            </p>

            <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800/80 max-w-sm text-xs space-y-1.5">
              <div className="flex items-center gap-2 text-cyan-400 font-medium">
                <Shield className="w-4 h-4 shrink-0" />
                <span>Institutional Governance Guarantee</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-normal">
                {COMPANY_INFO.privacyCommitment}
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { id: 'home', label: 'Home Overview' },
                { id: 'about', label: 'Company & Approach' },
                { id: 'services', label: 'All Services' },
                { id: 'industries', label: 'Industries Served' },
                { id: 'case-studies', label: 'Case Studies' },
                { id: 'capabilities', label: 'Capabilities Profile' },
                { id: 'contact', label: 'Contact & Enquiry' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className="hover:text-cyan-400 transition-colors text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Service Pillars
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                'Digitization & Scanning',
                'Library & Special Archives',
                'OCR & Text Extraction',
                'Intelligent Document Processing',
                'Metadata Normalization',
                'Repository Migration',
                'Multi-Tier Quality Assurance',
                'Workflow Automation & APIs'
              ].map((s, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNav('services')}
                    className="hover:text-cyan-400 transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-500/60" />
                    <span>{s}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Corporate Office & Direct Contacts
            </h4>
            <div className="space-y-3 text-xs">
              <div className="text-slate-300">
                <span className="text-slate-500 block text-[11px]">Managing Director</span>
                <span className="font-semibold text-white">{COMPANY_INFO.managingDirector}</span>
              </div>

              <div>
                <span className="text-slate-500 block text-[11px]">Direct WhatsApp</span>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{COMPANY_INFO.whatsapp}</span>
                </a>
              </div>

              <div>
                <span className="text-slate-500 block text-[11px]">Official Web Domain</span>
                <a
                  href={`https://${COMPANY_INFO.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-mono"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>{COMPANY_INFO.website}</span>
                </a>
              </div>

              <div>
                <span className="text-slate-500 block text-[11px]">Email Address</span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-cyan-400 hover:text-cyan-300 font-mono text-[11px]"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenConsultation('Footer Consultation Request')}
                  className="w-full px-3 py-2 text-xs font-medium text-center text-slate-200 bg-slate-900 border border-slate-700 hover:border-cyan-500/50 hover:text-cyan-400 rounded-lg transition-colors cursor-pointer"
                >
                  Request Consultation &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <Lock className="w-3.5 h-3.5 text-cyan-400" />
              <span>Strict Non-Disclosure & Data Sovereignty Adherence</span>
            </span>
            <span className="text-slate-600">|</span>
            <span>Saudi Arabia & Gulf Regional Desk Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
