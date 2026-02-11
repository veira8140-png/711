
import React from 'react';

interface HeroProps {
  onStart: () => void;
  onViewCaseStudy?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart, onViewCaseStudy }) => {
  return (
    <div className="relative pt-24 pb-32 px-6 flex flex-col items-center text-center max-w-5xl mx-auto">
      <div className="space-y-8">
        <p className="text-[#8A3FA0] text-sm font-bold uppercase tracking-[0.4em]">
          Certainty in every sale
        </p>
        <h1 className="text-6xl md:text-8xl font-bold serif leading-[1.1] tracking-tight text-black">
          Confidence is the <br /> 
          <span className="italic">new currency.</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
          Veira gives retail owners complete control, visibility, and certainty over sales, profits, and operations. Grow without guesswork.
        </p>
      </div>
      
      <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
        <button 
          onClick={onStart}
          className="cta-button w-full sm:w-auto px-12 py-5 rounded-none font-bold text-sm uppercase tracking-widest shadow-xl shadow-[#2D9B9B]/20"
        >
          Explore Intelligence
        </button>
        <button 
          onClick={onViewCaseStudy}
          className="w-full sm:w-auto px-12 py-5 border border-black/10 hover:bg-black/5 transition-all font-bold text-sm uppercase tracking-widest text-black"
        >
          Case Study
        </button>
      </div>

      <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-black/5 pt-12 w-full">
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold serif mb-2 text-black">99.9%</span>
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Uptime Certainty</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold serif mb-2 text-black">24/7</span>
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Active Monitoring</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold serif mb-2 text-black">0.0</span>
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Guesswork Factor</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold serif mb-2 text-black">∞</span>
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Possibilities</span>
        </div>
      </div>
    </div>
  );
};
