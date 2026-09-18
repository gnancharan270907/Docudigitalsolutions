import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ 
  className = '', 
  size = 'md',
  showSubtitle = true 
}) => {
  const iconSize = size === 'sm' ? 'w-7 h-7' : size === 'lg' ? 'w-11 h-11' : 'w-9 h-9';
  const titleSize = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl';
  const subtitleSize = size === 'sm' ? 'text-[9px]' : size === 'lg' ? 'text-xs' : 'text-[10px]';

  return (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      {/* Emblem */}
      <div className={`relative ${iconSize} flex items-center justify-center shrink-0`}>
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-blue-600/30 rounded-xl blur-sm group-hover:blur-md transition-all duration-300" />
        
        {/* Modern geometric symbol: Multi-layered digital document with data aperture */}
        <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950 border border-cyan-500/30 flex items-center justify-center p-1.5 shadow-inner">
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-full h-full text-cyan-400 group-hover:scale-105 transition-transform duration-300"
          >
            {/* Base document layer */}
            <path 
              d="M4 4C4 2.89543 4.89543 2 6 2H14L19 7V20C19 21.1046 18.1046 22 17 22H6C4.89543 22 4 21.1046 4 20V4Z" 
              stroke="currentColor" 
              strokeWidth="1.75" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-cyan-500"
            />
            {/* Top fold */}
            <path 
              d="M14 2V7H19" 
              stroke="currentColor" 
              strokeWidth="1.75" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-cyan-300"
            />
            {/* Digital binary/data bars */}
            <line x1="8" y1="11" x2="15" y2="11" stroke="#38bdf8" strokeWidth="1.75" strokeLinecap="round" />
            <line x1="8" y1="15" x2="13" y2="15" stroke="#38bdf8" strokeWidth="1.75" strokeLinecap="round" />
            {/* Glowing transformation nexus node */}
            <circle cx="15.5" cy="15.5" r="2" fill="#22d3ee" className="animate-pulse" />
          </svg>
        </div>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className={`font-bold tracking-tight text-white leading-none flex items-center ${titleSize}`}>
          <span>Docu</span>
          <span className="text-cyan-400 font-extrabold">Digital</span>
        </div>
        {showSubtitle && (
          <span className={`text-slate-400 font-semibold tracking-widest uppercase mt-1 ${subtitleSize}`}>
            Solutions
          </span>
        )}
      </div>
    </div>
  );
};
