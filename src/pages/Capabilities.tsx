import React from 'react';
import { 
  Library, 
  FolderArchive, 
  DatabaseZap, 
  ShieldCheck, 
  Globe2, 
  CheckCircle2, 
  BookOpen
} from 'lucide-react';
import { CAPABILITY_AREAS, COMPANY_INFO } from '../data/companyData';

interface CapabilitiesProps {
  onOpenConsultation: (topic?: string) => void;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({ onOpenConsultation }) => {
  return (
    <div className="space-y-16 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-xs font-semibold text-cyan-300">
          <Library className="w-3.5 h-3.5" />
          <span>Library & Information Management Profile</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Specialized Capability Profile
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          Engineered to support universities, national libraries, cultural archives, research organizations, and academic institutions across international markets—including Saudi Arabia and the wider Gulf region.
        </p>
      </section>

      {/* Positioning Matrix */}
      <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 space-y-8 shadow-xl">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
            Institutional Focus
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Purpose-Built for Academic & Archival Curators
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Our operational infrastructure is calibrated for the specialized challenges faced by memory institutions: fragile materials, non-standard scripts, complex multi-volume sets, and strict metadata standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITY_AREAS.map((cap, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/90 hover:border-cyan-500/30 space-y-3 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-950/70 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">
                {cap.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {cap.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gulf Region & Saudi Arabia Institutional Alignment */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-cyan-950/40 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-xs font-semibold text-cyan-300">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Regional Readiness Profile</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Capabilities for Saudi Arabia & The Gulf Region
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Higher-education institutions, research centers, and cultural repositories across Saudi Arabia and the Gulf are accelerating large-scale digital initiatives. DocuDigital Solutions is prepared to support these programs with scalable, culturally attuned, and technically rigorous services:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span>Arabic & Bilingual Text Normalization</span>
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Handling of right-to-left Arabic scripts, diacritics, complex typography, and bilingual (Arabic-English) cataloging structures adhering to MARC21 and Dublin Core schemas.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <FolderArchive className="w-4 h-4 text-cyan-400" />
              <span>National Heritage & Academic Theses Digitization</span>
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              High-throughput scanning pipelines for historical documents, ministerial registries, and academic dissertations with FADGI-level color calibration and non-invasive book cradles.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <DatabaseZap className="w-4 h-4 text-cyan-400" />
              <span>Repository Modernization & Migration</span>
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Clean migration of institutional digital assets from legacy databases into modern digital repository software (DSpace, Koha, Omeka, Islandora, or proprietary portals).
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Data Sovereignty & Institutional Control</span>
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              All scanning, OCR, and cataloging workflows conform to client institutional security policies, data residency regulations, and strict confidentiality agreements.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            Inquire directly with Managing Director <span className="text-white font-medium">{COMPANY_INFO.managingDirector}</span> regarding regional engagements.
          </p>
          <button
            onClick={() => onOpenConsultation('Gulf Region Capability Discussion')}
            className="px-6 py-2.5 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 text-xs font-bold rounded-lg cursor-pointer transition-all shadow-md"
          >
            Initiate Regional Consultation
          </button>
        </div>
      </section>

      {/* Preservation & Standards Compliance Table */}
      <section className="p-8 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
            Quality & Archival Compliance
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Archival Quality Assurance Benchmarks
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            We employ rigorous verification protocols aligned with international archival standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
          <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
            <h4 className="font-bold text-white text-sm">Optical & Image Fidelity</h4>
            <p className="text-slate-400">
              Conformance with FADGI (Federal Agencies Digital Guidelines Initiative) 3/4-star image metrics, zero clipping in tone curves, and Delta-E color accuracy checks.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
            <h4 className="font-bold text-white text-sm">Lexical Text Accuracy</h4>
            <p className="text-slate-400">
              Multi-engine OCR dictionary verification and spell-checking routines delivering targeted 99.8%+ character-level accuracy on printed Latin and Arabic typography.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
            <h4 className="font-bold text-white text-sm">Bitstream Integrity</h4>
            <p className="text-slate-400">
              BagIt RFC 8493 compliance, automated SHA-256 and MD5 checksum manifests generated at every stage of file movement to ensure zero bit rot or corruption.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
