import React from 'react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Shield, 
  Layers, 
  Sparkles, 
  Database, 
  Cpu, 
  Network,
  Library,
  Lock,
  ChevronRight
} from 'lucide-react';

import { 
  COMPANY_INFO, 
  SERVICES_DATA, 
  INDUSTRIES_DATA, 
  CASE_STUDIES_DATA, 
  WORKFLOW_STEPS 
} from '../data/companyData';
import { DynamicIcon } from '../components/common/DynamicIcon';

interface HomeProps {
  onNavigate: (tab: string) => void;
  onOpenConsultation: (topic?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 lg:pt-28 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[400px] bg-gradient-to-br from-cyan-600/15 via-blue-600/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-medium text-cyan-300 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Enterprise Document & Information Management Partner</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Transforming Documents & Information into{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-teal-300 bg-clip-text text-transparent">
                  Digital Intelligence
                </span>
              </h1>

              {/* Supporting Description */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
                {COMPANY_INFO.subtagline}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenConsultation('Hero Section Discussion')}
                  className="px-6 py-3.5 bg-gradient-to-r from-cyan-400 via-sky-400 to-teal-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 font-bold text-sm rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-200 flex items-center gap-2 cursor-pointer group"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="px-6 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm rounded-xl border border-slate-700 hover:border-slate-600 transition-all duration-200 flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Our Services</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>

              {/* Governance & Trust Points */}
              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 border-t border-slate-800/80">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Client-Governed Standards</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-cyan-400" />
                  <span>Strict Data Confidentiality</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-cyan-400" />
                  <span>FADGI & Archival Conformance</span>
                </div>
              </div>
            </div>

            {/* Right Visual: Interactive Digital Transformation Matrix */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Visual Glass Frame */}
                <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-cyan-500/30 shadow-2xl backdrop-blur-xl relative overflow-hidden">
                  {/* Decorative circuit line */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />

                  {/* Header info */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-mono font-medium text-cyan-400 uppercase tracking-wider">
                        Information Processing Pipeline
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">ISO/FADGI Model</span>
                  </div>

                  {/* Visual Nodes Flow */}
                  <div className="space-y-3 font-mono text-xs">
                    {/* Node 1 */}
                    <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-xl flex items-center justify-between hover:border-cyan-500/40 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-950/60 text-blue-400 border border-blue-500/20">
                          <Library className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-slate-200 font-medium">Physical & Legacy Holdings</p>
                          <p className="text-[11px] text-slate-400">Manuscripts • Rare Books • Theses</p>
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
                        Raw Source
                      </span>
                    </div>

                    {/* Transform arrow */}
                    <div className="flex justify-center text-cyan-500/60 py-0.5">
                      <span className="text-xs tracking-widest">&darr; Optical Calibration & 600 DPI Capture &darr;</span>
                    </div>

                    {/* Node 2 */}
                    <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-xl flex items-center justify-between hover:border-cyan-500/40 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-cyan-950/60 text-cyan-400 border border-cyan-500/20">
                          <Cpu className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-slate-200 font-medium">Multi-Engine OCR & IDP</p>
                          <p className="text-[11px] text-slate-400">ALTO XML • Searchable PDF/A • HOCR</p>
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                        Lexical Text
                      </span>
                    </div>

                    {/* Transform arrow */}
                    <div className="flex justify-center text-cyan-500/60 py-0.5">
                      <span className="text-xs tracking-widest">&darr; Metadata Remediation & Taxonomy &darr;</span>
                    </div>

                    {/* Node 3 */}
                    <div className="p-3 bg-gradient-to-r from-cyan-950/40 to-slate-950/80 border border-cyan-500/40 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-teal-950/60 text-teal-400 border border-teal-500/20">
                          <Database className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-slate-200 font-medium">Digital Repository Ingestion</p>
                          <p className="text-[11px] text-slate-400">Dublin Core • MARC21 • DSpace • Fedora</p>
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 font-semibold">
                        99.8% QC Passed
                      </span>
                    </div>
                  </div>

                  {/* Verification pill */}
                  <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span>Target Verification</span>
                    <span className="text-cyan-400 font-mono font-medium">Zero-Defect AQL Audit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST-FOCUSED INSTITUTIONAL ENGAGEMENTS BAR */}
      <section className="border-y border-slate-800/80 bg-slate-950/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
            Trusted by Premier Universities & Global Research Institutions
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col items-center justify-center">
              <span className="text-base font-bold text-white tracking-tight">
                New York University
              </span>
              <span className="text-xs text-cyan-400 mt-0.5">Stern School of Business</span>
              <span className="text-[11px] text-slate-400 mt-1">Verified Client Engagement</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col items-center justify-center">
              <span className="text-base font-bold text-white tracking-tight">
                University of South Carolina
              </span>
              <span className="text-xs text-cyan-400 mt-0.5">Research Collections & Archives</span>
              <span className="text-[11px] text-slate-400 mt-1">Verified Client Engagement</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col items-center justify-center">
              <span className="text-base font-bold text-white tracking-tight">
                University of Peru
              </span>
              <span className="text-xs text-cyan-400 mt-0.5">Academic Library Holdings</span>
              <span className="text-[11px] text-slate-400 mt-1">Verified Client Engagement</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICE CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Enterprise Services Architecture
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
              From physical manuscript handling to automated repository ingestion and custom workflow integrations, our end-to-end solutions support complex information ecosystems.
            </p>
          </div>

          <button
            onClick={() => onNavigate('services')}
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 cursor-pointer"
          >
            <span>View All Service Categories</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.slice(0, 6).map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-850 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-cyan-500/5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <DynamicIcon name={service.iconName} className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-slate-800 text-slate-300">
                    {service.category.split('&')[0]}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {service.shortDesc}
                </p>

                <div className="pt-2 space-y-1.5">
                  {service.capabilities.slice(0, 3).map((cap, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => onOpenConsultation(`Inquiry: ${service.title}`)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Discuss This Service</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-xs text-slate-400 hover:text-white cursor-pointer"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY ORGANIZATIONS CHOOSE DOCUDIGITAL SOLUTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Institutional Trust & Reliability
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 tracking-tight">
              Why Premier Organizations Choose DocuDigital Solutions
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
              We understand the sensitive nature of rare archival collections, academic records, and high-volume institutional assets. We operate not merely as a vendor, but as an accredited technical custodian.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">Client-Retained Governance</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                You retain complete authority over your institutional standards, security protocols, retention rules, and cataloging taxonomies.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-950/60 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">Multi-Tier Quality Control</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Statistical AQL sampling, 100% critical-path audits, and dual-layer human validation guarantee 99.8%+ data accuracy.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-teal-950/60 border border-teal-500/20 text-teal-400 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">Scalable High-Volume Delivery</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Engineered to handle backlogs of millions of pages without compromising resolution or metadata consistency.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-950/60 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                <Network className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">Global & Regional Readiness</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Proven international delivery across North America, Latin America, and expanding desks for Saudi Arabia and the Gulf.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WORKFLOW & PROCESS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
            Methodology
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2 tracking-tight">
            Our Systematic 6-Stage Delivery Process
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Every collection follows a structured, auditable lifecycle from initial sample profiling to seamless repository ingestion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKFLOW_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 relative space-y-3 hover:border-slate-700 transition-colors"
            >
              <div className="text-3xl font-extrabold font-mono text-cyan-400/40">
                {step.step}
              </div>
              <h3 className="text-base font-bold text-white">
                {step.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. INDUSTRIES SERVED PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Sectors & Markets
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Engineered for Institutional Complexity
            </h2>
          </div>
          <button
            onClick={() => onNavigate('industries')}
            className="mt-3 md:mt-0 text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Explore Industry Approaches</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {INDUSTRIES_DATA.slice(0, 8).map((ind) => (
            <button
              key={ind.id}
              onClick={() => onNavigate('industries')}
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 hover:bg-slate-900 transition-all text-left space-y-2 cursor-pointer group"
            >
              <div className="text-cyan-400 group-hover:scale-110 transition-transform">
                <DynamicIcon name={ind.iconName} className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-slate-200 group-hover:text-cyan-300 line-clamp-2">
                {ind.title}
              </h4>
            </button>
          ))}
        </div>
      </section>

      {/* 7. SELECTED CASE STUDY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Verified Engagements
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                Institutional Case Study Highlights
              </h2>
            </div>
            <button
              onClick={() => onNavigate('case-studies')}
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 cursor-pointer"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CASE_STUDIES_DATA.map((cs) => (
              <div
                key={cs.id}
                className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wide">
                    {cs.location}
                  </span>
                  <h3 className="text-sm font-bold text-white">
                    {cs.client}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {cs.context}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <p className="text-[11px] text-slate-400 italic">
                    {cs.outcomesPlaceholder}
                  </p>
                  <button
                    onClick={() => onOpenConsultation(`Case Study Request: ${cs.client}`)}
                    className="mt-3 text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Request Full Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CONTACT CALL-TO-ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-cyan-950/70 via-slate-900 to-blue-950/70 border border-cyan-500/30 p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-5">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Discuss Your Digitization or Metadata Requirements?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Whether you are planning a pilot digitization project, upgrading an institutional repository, or migrating millions of legacy documents, our team is ready to assist.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => onOpenConsultation('Final CTA Project Discussion')}
                className="px-8 py-3.5 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 font-bold text-sm rounded-xl shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
              >
                Discuss Your Project
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm rounded-xl border border-slate-700 transition-all cursor-pointer"
              >
                Contact Our Team
              </button>
            </div>
            <p className="text-xs text-slate-400 pt-2">
              Managing Director: <span className="text-white font-medium">{COMPANY_INFO.managingDirector}</span> • WhatsApp:{' '}
              <a href={COMPANY_INFO.whatsappUrl} className="text-emerald-400 hover:underline">
                {COMPANY_INFO.whatsapp}
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
