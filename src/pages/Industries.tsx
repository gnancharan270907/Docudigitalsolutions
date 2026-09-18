import React, { useState } from 'react';
import { INDUSTRIES_DATA, type IndustryItem } from '../data/companyData';
import { DynamicIcon } from '../components/common/DynamicIcon';
import { CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react';


interface IndustriesProps {
  onOpenConsultation: (topic?: string) => void;
}

export const Industries: React.FC<IndustriesProps> = ({ onOpenConsultation }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem>(INDUSTRIES_DATA[0]);

  return (
    <div className="space-y-16 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
          Target Sectors & Ecosystems
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Tailored for Specialized Institutional Demands
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          Every industry presents distinct regulatory guidelines, document fragility profiles, and discovery imperatives. Explore how our workflows adapt to your specific domain.
        </p>
      </section>

      {/* Interactive Industry Selector Layout */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Industry List */}
        <div className="lg:col-span-4 space-y-2">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-2">
            Select an Industry
          </p>
          {INDUSTRIES_DATA.map((ind) => {
            const isSelected = selectedIndustry.id === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind)}
                className={`w-full p-4 rounded-xl text-left transition-all flex items-center justify-between cursor-pointer border ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-500/50 shadow-md shadow-cyan-500/10'
                    : 'bg-slate-950/60 border-slate-800 hover:bg-slate-900/60 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg transition-colors ${
                      isSelected
                        ? 'bg-cyan-950 text-cyan-400 border border-cyan-500/30'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    <DynamicIcon name={ind.iconName} className="w-4 h-4" />
                  </div>
                  <div>
                    <p
                      className={`text-xs font-bold transition-colors ${
                        isSelected ? 'text-white' : 'text-slate-300'
                      }`}
                    >
                      {ind.title}
                    </p>
                  </div>
                </div>
                <ChevronRight
                  className={`w-4 h-4 transition-transform ${
                    isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Right: Detailed Deep-Dive for Selected Industry */}
        <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-8 shadow-xl">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-cyan-950/60 text-cyan-400 text-xs font-mono border border-cyan-500/20">
                <DynamicIcon name={selectedIndustry.iconName} className="w-3.5 h-3.5" />
                <span>Industry Profile</span>
              </div>
              <h2 className="text-2xl font-bold text-white">
                {selectedIndustry.title}
              </h2>
              <p className="text-xs text-cyan-300 font-medium">
                {selectedIndustry.subtitle}
              </p>
            </div>

            <button
              onClick={() => onOpenConsultation(`Industry Consultation: ${selectedIndustry.title}`)}
              className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 text-xs font-bold rounded-lg shrink-0 cursor-pointer shadow-sm transition-all"
            >
              Discuss {selectedIndustry.title.split(' ')[0]} Project
            </button>
          </div>

          {/* Overview text */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Sector Context
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedIndustry.description}
            </p>
          </div>

          {/* Key Challenges vs How We Help */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Sector Challenges */}
            <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800/90 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                <span>Unique Sector Challenges</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {selectedIndustry.keyChallenges.map((ch, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold shrink-0 mt-0.5">•</span>
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How We Adapt */}
            <div className="p-5 rounded-xl bg-slate-950/70 border border-cyan-500/20 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <span>How Our Approach Adapts</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {selectedIndustry.howWeHelp.map((sol, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{sol}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Primary Deliverables */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Standard Deliverables for {selectedIndustry.title}:
            </h4>
            <div className="flex flex-wrap gap-2 pt-1">
              {selectedIndustry.deliverables.map((deliv, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md bg-slate-900 border border-slate-700 text-cyan-300 text-xs font-mono"
                >
                  {deliv}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global & Gulf Market Focus */}
      <section className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-slate-900 via-cyan-950/20 to-slate-900 border border-slate-800">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
            Regional Adaptation
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            International & Gulf Regional Support
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            DocuDigital Solutions is structured to collaborate with international institutions across North America, South America, and expanding markets in Saudi Arabia and the wider Gulf region. We accommodate bilingual metadata schemas (Arabic-English), national preservation initiatives, and regional data protection standards.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenConsultation('Gulf & Saudi Arabia Inquiries')}
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Discuss International & Gulf Regional Capabilities</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
