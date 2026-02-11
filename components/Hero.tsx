import React from 'react';

interface HeroProps {
  onStart: () => void;
  onViewCaseStudy?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart, onViewCaseStudy }) => {
  return (
    <div className="relative pt-40 pb-20 md:pt-60 md:pb-80 px-4 sm:px-6 flex flex-col items-center text-center max-w-7xl mx-auto overflow-visible">
      <div className="space-y-8 md:space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-[1.5s] relative z-10">
        <div className="flex flex-col items-center">
          <span className="section-label">Better Shop Tools</span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-bold serif leading-[0.85] tracking-tight text-black max-w-6xl">
            The Best <br className="hidden sm:block" />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-400">Way</span> <br className="hidden sm:block" />
            To Sell.
          </h1>
        </div>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed mt-12 px-4 border-l md:border-l-0 md:border-x border-black/5 py-4">
          Veira is the top <strong>shop system in Kenya</strong>. Manage all your stores from your phone. 
          Stay tax ready (eTIMS) and accept M-PESA easily.
        </p>
      </div>
      
      <div className="mt-16 md:mt-24 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 w-full sm:w-auto relative z-10 px-4 sm:px-0">
        <button 
          onClick={onStart}
          className="cta-primary w-full sm:w-auto px-12 md:px-16 py-6 md:py-7 text-[10px] font-bold uppercase tracking-[0.2em] min-h-[64px]"
        >
          Start For Free
        </button>
        <button 
          onClick={onViewCaseStudy}
          className="w-full sm:w-auto px-12 md:px-16 py-6 md:py-7 border border-black/10 backdrop-blur-md bg-white/30 hover:bg-black hover:text-white transition-all duration-500 text-[10px] font-bold uppercase tracking-[0.2em] text-black min-h-[64px]"
        >
          See Happy Shops
        </button>
      </div>

      <div className="mt-40 md:mt-64 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-20 border-t border-black/5 pt-16 md:pt-24 w-full">
        {[
          ['eTIMS', 'Tax Ready'],
          ['M-PESA', 'Pay Easily'],
          ['OFFLINE', 'No Internet? No Problem'],
          ['HELP', 'Always Here For You']
        ].map(([title, subtitle]) => (
          <div key={title} className="flex flex-col items-center group">
            <span className="text-2xl md:text-3xl font-black serif text-black group-hover:italic transition-all duration-500">{title}</span>
            <span className="text-[9px] uppercase tracking-[0.4em] text-gray-400 font-bold mt-2">{subtitle}</span>
          </div>
        ))}
      </div>
    </div>
  );
};