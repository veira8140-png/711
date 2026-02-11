import React from 'react';

interface HeroProps {
  onStart: () => void;
  onViewCaseStudy?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart, onViewCaseStudy }) => {
  return (
    <div className="relative pt-32 pb-16 md:pt-48 md:pb-60 px-4 sm:px-6 flex flex-col items-center text-center max-w-7xl mx-auto overflow-visible">
      <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 relative z-10">
        <span className="section-label drop-shadow-sm inline-block">Intelligent Commerce</span>
        <h1 className="text-4xl sm:text-6xl md:text-[7rem] lg:text-[9rem] font-bold serif leading-[1] md:leading-[0.9] tracking-tight text-black max-w-6xl">
          Grow Your Business <br className="hidden sm:block" /> 
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-700 to-black">Smarter.</span>
        </h1>
        <p className="text-base sm:text-lg md:text-2xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed mt-8 md:mt-12 px-4">
          Veira provides instant visibility into sales, stock, and cash flow. 
          Make informed decisions. Compete with the giants.
        </p>
      </div>
      
      <div className="mt-12 md:mt-20 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto relative z-10 px-4 sm:px-0">
        <button 
          onClick={onStart}
          className="cta-primary w-full sm:w-auto px-8 md:px-12 py-5 md:py-6 text-xs font-bold uppercase tracking-widest min-h-[56px]"
        >
          Get Started
        </button>
        <button 
          onClick={onViewCaseStudy}
          className="w-full sm:w-auto px-8 md:px-12 py-5 md:py-6 border border-black/10 backdrop-blur-sm bg-white/20 hover:bg-white/40 transition-all text-xs font-bold uppercase tracking-widest text-black min-h-[56px]"
        >
          Case Studies
        </button>
      </div>

      <div className="mt-24 md:mt-40 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-black/5 pt-12 md:pt-16 w-full opacity-60">
        {[
          ['eTIMS', 'Compliance'],
          ['M-PESA', 'Integration'],
          ['Offline', 'Reliability'],
          ['Support', 'Local']
        ].map(([title, subtitle]) => (
          <div key={title} className="flex flex-col items-center">
            <span className="text-xl md:text-2xl font-bold serif text-black">{title}</span>
            <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-gray-400 font-medium">{subtitle}</span>
          </div>
        ))}
      </div>
    </div>
  );
};