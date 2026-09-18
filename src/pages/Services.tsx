import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/companyData';
import { DynamicIcon } from '../components/common/DynamicIcon';
import { ArrowUpRight, CheckCircle2, Search } from 'lucide-react';


interface ServicesProps {
  onOpenConsultation: (topic?: string) => void;
}

const CATEGORIES = [
  'All Services',
  'Digitization & Digital Collections',
  'OCR & Intelligent Document Processing',
  'Metadata & Information Management',
  'Content Conversion & Migration',
  'Quality Assurance',
  'Technology & Workflow Support'
];

export const Services: React.FC<ServicesProps> = ({ onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState('All Services');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCategory = activeCategory === 'All Services' || service.category === activeCategory;
    const matchesSearch = 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.capabilities.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
          Comprehensive Capabilities
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Document, Information & Technology Services
        </h1>
        <p className="text-base text-slate-300 leading-relaxed">
          Explore our six core service pillars engineered specifically for universities, academic libraries, national archives, and high-volume information management environments.
        </p>
      </section>

      {/* Filter & Search Bar */}
      <section className="space-y-6">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 font-bold'
                    : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Box */}
        <div className="max-w-md mx-auto relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search capabilities, formats, or schemas (e.g., OCR, Dublin Core, TIFF)..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-900/90 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-850 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-cyan-500/5"
          >
            <div className="space-y-4">
              {/* Header Icon & Category Badge */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <DynamicIcon name={service.iconName} className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono text-cyan-400/90 bg-cyan-950/40 border border-cyan-500/20 px-2.5 py-1 rounded-md">
                  {service.category}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              {/* In-depth details */}
              <p className="text-[11px] text-slate-400 leading-relaxed border-t border-slate-800/80 pt-3">
                {service.fullDesc}
              </p>

              {/* Capabilities checklist */}
              <div className="space-y-2 pt-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Key Technical Capabilities:
                </p>
                <div className="space-y-1.5">
                  {service.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal for */}
              <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800 text-[11px] text-slate-400">
                <span className="text-slate-300 font-semibold">Recommended for:</span> {service.idealFor}
              </div>
            </div>

            {/* CTA action */}
            <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => onOpenConsultation(`Service Request: ${service.title}`)}
                className="w-full py-2 px-3 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg flex items-center justify-center gap-1.5 cursor-pointer shadow-sm transition-all"
              >
                <span>Discuss {service.title.split(' ')[0]} Requirements</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* No results message */}
      {filteredServices.length === 0 && (
        <div className="p-12 text-center rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
          <p className="text-slate-300 font-medium text-sm">
            No specific service matching &ldquo;{searchQuery}&rdquo;
          </p>
          <p className="text-xs text-slate-400">
            We offer bespoke custom document and information processing. Contact our team to discuss your particular workflow.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('All Services');
            }}
            className="px-4 py-2 bg-slate-800 text-xs text-cyan-400 rounded-lg hover:bg-slate-700"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Technical Standards Summary Table */}
      <section className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
            Interoperability
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Supported Formats, Schemas & Repositories
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Seamless integration with existing academic infrastructures and library systems.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1.5">
            <h4 className="font-bold text-cyan-400">Metadata Schemas</h4>
            <p className="text-slate-300">Dublin Core, MARC21, MODS, METS, EAD, PREMIS, Custom JSON-LD</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1.5">
            <h4 className="font-bold text-cyan-400">Output Formats</h4>
            <p className="text-slate-300">Archival TIFF, Searchable PDF/A (1a/1b/2u), JATS XML, TEI, ALTO, EPUB3</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1.5">
            <h4 className="font-bold text-cyan-400">Target Repositories</h4>
            <p className="text-slate-300">DSpace, Koha, Islandora, Fedora, CONTENTdm, Omeka S, Custom DAMs</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1.5">
            <h4 className="font-bold text-cyan-400">Preservation Benchmarks</h4>
            <p className="text-slate-300">FADGI 3/4-Star Star Guidelines, Metamorfoze Archival, ISO 19005 (PDF/A)</p>
          </div>
        </div>
      </section>
    </div>
  );
};
