import React from 'react';
import { 
  Shield, 
  Target, 
  Compass, 
  CheckCircle2, 
  Lock, 
  Layers, 
  Cpu, 
  FileCheck, 
  Sliders
} from 'lucide-react';

import { COMPANY_INFO } from '../data/companyData';

interface AboutProps {
  onOpenConsultation: (topic?: string) => void;
}

export const About: React.FC<AboutProps> = ({ onOpenConsultation }) => {
  return (
    <div className="space-y-20 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. HEADER SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
          About Our Company
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Precision Document & Information Management
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          {COMPANY_INFO.legalName} is a dedicated information-management and document-processing partner serving universities, academic libraries, cultural archives, and research institutions worldwide.
        </p>
      </section>

      {/* 2. MISSION & VISION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4 relative overflow-hidden">
          <div className="w-12 h-12 rounded-xl bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-white">Our Mission</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            To provide academic institutions, archives, and enterprises with dependable, precision-engineered document digitization, metadata enrichment, and data processing workflows—preserving intellectual heritage while unlocking modern digital discoverability.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4 relative overflow-hidden">
          <div className="w-12 h-12 rounded-xl bg-sky-950/70 border border-sky-500/30 text-sky-400 flex items-center justify-center">
            <Compass className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-white">Our Vision</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            To be recognized internationally as the most detail-oriented, scalable, and trustworthy document engineering partner for institutions with high-value collections and demanding technical specifications.
          </p>
        </div>
      </section>

      {/* 3. CLIENT SOVEREIGNTY & GOVERNANCE COMMITMENT */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-cyan-950/30 to-slate-900 border border-cyan-500/30 shadow-xl">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-xs font-semibold text-cyan-300">
            <Lock className="w-3.5 h-3.5" />
            <span>Guaranteed Institutional Sovereignty</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            You Retain Complete Ownership, Control & Governance
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            At {COMPANY_INFO.name}, we firmly adhere to the principle that client institutions maintain full autonomy over their projects. We never enforce rigid proprietary lock-ins or impose external governance over your archival materials.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Institutional Standards</span>
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We align completely with your metadata schemas (Dublin Core, MARC21, MODS), local cataloging policies, and target preservation resolutions.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span>Data Privacy & Security</span>
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Strict non-disclosure agreements, segregated physical and digital environments, and auditable access logs protect all collections.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Sliders className="w-4 h-4 text-cyan-400" />
              <span>Project Direction</span>
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pilot reviews, interim approval gates, and transparent velocity reporting keep your project leads in total strategic command.
            </p>
          </div>
        </div>
      </section>

      {/* 4. PROFESSIONAL APPROACH & DELIVERY CAPABILITIES */}
      <section className="space-y-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
            Execution Excellence
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
            Our Professional Delivery Capabilities
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Structured methodologies developed to accommodate both rare single-item treasures and multi-million-page enterprise conversions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="text-cyan-400">
              <Layers className="w-7 h-7" />
            </div>
            <h3 className="text-base font-bold text-white">Non-Destructive Handling</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Preservation-first practices ensuring that fragile bindings, historical seals, brittle manuscripts, and rare artifacts are safeguarded with museum-grade care.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="text-cyan-400">
              <Cpu className="w-7 h-7" />
            </div>
            <h3 className="text-base font-bold text-white">Technological Rigor</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Multi-engine OCR pipelines, automated Schematron XML validation, automated checksum verification (MD5/SHA-256), and high-throughput ingestion scripts.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="text-cyan-400">
              <FileCheck className="w-7 h-7" />
            </div>
            <h3 className="text-base font-bold text-white">Multi-Tier Quality Assurance</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every deliverable batch undergoes dual-stage algorithmic validation and subject-matter specialist audits before final hand-off.
            </p>
          </div>
        </div>
      </section>

      {/* 5. LEADERSHIP & CORPORATE PROFILE */}
      <section className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Corporate Governance
            </span>
            <h2 className="text-2xl font-bold text-white">
              Leadership & Direct Engagement
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              DocuDigital Solutions is led by Managing Director <strong className="text-white">Balaji Beeki</strong>, providing direct executive involvement in project scoping, technical architecture, and quality assurance.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p><strong className="text-slate-300">Entity:</strong> {COMPANY_INFO.legalName}</p>
              <p><strong className="text-slate-300">Official Domain:</strong> {COMPANY_INFO.website}</p>
              <p><strong className="text-slate-300">Direct WhatsApp:</strong> {COMPANY_INFO.whatsapp}</p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-slate-950/70 border border-slate-800 space-y-4 text-center">
            <h3 className="text-base font-bold text-white">
              Discuss Your Project With Leadership
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We welcome exploratory discussions with deans, library directors, archival custodians, and enterprise IT leaders.
            </p>
            <button
              onClick={() => onOpenConsultation('Leadership Consultation')}
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 font-bold text-xs rounded-lg shadow-md cursor-pointer transition-all"
            >
              Request Leadership Discussion
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
