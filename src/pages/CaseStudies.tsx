import React from 'react';
import { CASE_STUDIES_DATA } from '../data/companyData';
import { 
  MapPin, 
  CheckCircle2, 
  ArrowUpRight, 
  Clock, 
  Info, 
  Layers 
} from 'lucide-react';

interface CaseStudiesProps {
  onOpenConsultation: (topic?: string) => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenConsultation }) => {
  return (
    <div className="space-y-16 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
          Client Engagements & Experience
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Selected Institutional Engagements
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          Review our structured engagements supporting premier academic libraries, global business schools, and historic research archives.
        </p>
      </section>

      {/* Confidentiality Notice */}
      <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3 max-w-4xl mx-auto text-xs text-slate-400">
        <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="text-slate-200">Institutional Privacy Notice:</strong> In accordance with strict non-disclosure covenants and ongoing client governance, specific throughput volumes, archival collections titles, and proprietary repository endpoints are summarized. In-depth case profiles and references are available upon approved institutional request.
        </p>
      </div>

      {/* Case Studies Detailed Cards */}
      <section className="space-y-10">
        {CASE_STUDIES_DATA.map((study) => (
          <div
            key={study.id}
            className="p-8 sm:p-10 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all shadow-xl space-y-6"
          >
            {/* Top row: Client header, location, and status badge */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/70 text-cyan-400 border border-cyan-500/20 text-[11px] font-mono">
                    {study.status}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400 text-xs">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{study.location}</span>
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  {study.client}
                </h2>
                <p className="text-xs text-cyan-300 font-medium">
                  {study.clientType}
                </p>
              </div>

              <button
                onClick={() => onOpenConsultation(`Case Study Request: ${study.client}`)}
                className="px-5 py-2.5 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 text-xs font-bold rounded-lg shadow-sm flex items-center justify-center gap-1.5 cursor-pointer shrink-0 transition-all"
              >
                <span>Request the Full Case Study</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Middle row: Context & Approach */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Context & Approach */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Project Context
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {study.context}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Service Delivery & Approach
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {study.approach}
                  </p>
                </div>

                {/* Published Outcomes Notice */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/20 space-y-1.5">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold">
                    <Clock className="w-4 h-4" />
                    <span>Publication Status & Outcomes</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed italic">
                    &ldquo;{study.outcomesPlaceholder}&rdquo;
                  </p>
                </div>
              </div>

              {/* Right Column: Services Provided & Tech Areas */}
              <div className="lg:col-span-4 space-y-6 lg:border-l lg:border-slate-800 lg:pl-8">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Services Provided
                  </h4>
                  <ul className="space-y-2">
                    {study.servicesProvided.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Processing Areas
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {['Preservation Capture', 'Lexical OCR', 'Metadata Alignment', 'Repository Output'].map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Ready for Future Additions Placeholder Card */}
      <section className="p-8 rounded-2xl bg-slate-900/40 border border-dashed border-slate-700 text-center space-y-3">
        <div className="w-12 h-12 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
          <Layers className="w-6 h-6" />
        </div>
        <h3 className="text-base font-bold text-white">
          Additional Case Studies Under Client Review
        </h3>
        <p className="text-xs text-slate-400 max-w-xl mx-auto leading-relaxed">
          Our case portfolio expands regularly with university library digitizations, national gazette processing, and multi-tenant archive migrations across North America and the Gulf region.
        </p>
        <div className="pt-2">
          <button
            onClick={() => onOpenConsultation('Inquire about custom sector case studies')}
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 cursor-pointer"
          >
            Inquire About Similar Institutional Projects &rarr;
          </button>
        </div>
      </section>
    </div>
  );
};
