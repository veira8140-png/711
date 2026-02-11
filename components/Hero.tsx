
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
          #1 Best POS System for Small Business in Kenya
        </p>
        <h1 className="text-6xl md:text-8xl font-bold serif leading-[1.1] tracking-tight text-black">
          Grow Your Business <br /> 
          <span className="italic">Smarter.</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
          Veira gives you instant visibility into sales, stock, and cash flow so you can make smarter decisions and compete with the big guys.
        </p>
      </div>
      
      <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
        <button 
          onClick={onStart}
          className="cta-button w-full sm:w-auto px-12 py-5 rounded-none font-bold text-sm uppercase tracking-widest shadow-xl shadow-[#2D9B9B]/20"
        >
          Buy POS System Kenya
        </button>
        <button 
          onClick={onViewCaseStudy}
          className="w-full sm:w-auto px-12 py-5 border border-black/10 hover:bg-black/5 transition-all font-bold text-sm uppercase tracking-widest text-black"
        >
          POS System Comparison
        </button>
      </div>

      <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-black/5 pt-12 w-full">
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold serif mb-2 text-black">eTIMS</span>
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">KRA Compliant</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold serif mb-2 text-black">MPESA</span>
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Direct Integration</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold serif mb-2 text-black">Offline</span>
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Works Anywhere</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold serif mb-2 text-black">Free</span>
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Setup & Training</span>
        </div>
      </div>
    </div>
  );
};
