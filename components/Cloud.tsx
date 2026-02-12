import React from 'react';

export const Cloud: React.FC = () => {
  const industries = [
    "Retail shops",
    "Supermarkets",
    "Fast food and restaurants",
    "Service businesses",
    "Growing SME chains"
  ];

  return (
    <div id="cloud" className="space-y-24 md:space-y-40">
      <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-10">
        <div className="space-y-4">
          <span className="text-[#2D9B9B] text-[10px] font-bold uppercase tracking-[0.4em]">Kenya First</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold serif leading-tight text-black px-4">Built for <br className="hidden md:block"/><span className="italic">Kenyan Businesses.</span></h2>
        </div>
        <p className="text-base md:text-xl text-gray-600 font-light leading-relaxed px-6">
          This is not imported software that does not understand your reality. 
          It is built for how business actually runs here.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="space-y-12 order-2 lg:order-1 px-4 md:px-0">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold serif text-black">Designed for Growth</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {industries.map((item, i) => (
                <li key={i} className="flex items-center gap-3 bg-black/5 p-4 text-sm font-bold uppercase tracking-widest text-black">
                  <span className="w-1 h-1 bg-black rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 border-l-4 border-[#2D9B9B] bg-white space-y-4 shadow-sm">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#2D9B9B]">Local Integration</h4>
            <p className="text-gray-600 leading-relaxed">
              Veira integrates with <span className="text-black font-bold">M-PESA</span>, supports multi-branch operations, and is built specifically for the <span className="text-black font-bold">Kenyan tax environment</span>.
            </p>
          </div>
        </div>
        <div className="relative aspect-square order-1 lg:order-2">
          <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent rounded-full animate-pulse"></div>
          <div className="absolute inset-10 border border-black/5 rounded-full flex items-center justify-center p-12 text-center italic serif text-2xl text-gray-400">
             "Engineered in Nairobi for the structured retailer."
          </div>
        </div>
      </div>
    </div>
  );
};