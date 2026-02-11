import React from 'react';

export const CaseStudies: React.FC = () => {
  return (
    <div className="space-y-24">
      <div className="max-w-3xl space-y-6">
        <span className="section-label">Outcomes</span>
        <h2 className="text-4xl md:text-6xl font-bold serif text-black">Proven Results.</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-8 p-12 bg-white border border-black/5">
          <span className="text-[10px] uppercase font-bold text-gray-400">Retail / Nairobi</span>
          <h3 className="text-3xl font-bold serif text-black">Revenue Recovery.</h3>
          <p className="text-gray-500 font-light leading-relaxed">
            A boutique retailer in Westlands saw a 14% increase in reported revenue 
            after implementing Veira's automated M-PESA reconciliation.
          </p>
          <div className="pt-8 border-t border-black/5 flex justify-between items-center">
            <span className="text-2xl font-bold serif text-[#2D9B9B]">+14%</span>
            <span className="text-[9px] uppercase tracking-widest font-bold">Revenue Growth</span>
          </div>
        </div>

        <div className="space-y-8 p-12 bg-white border border-black/5">
          <span className="text-[10px] uppercase font-bold text-gray-400">Hospitality / Nairobi</span>
          <h3 className="text-3xl font-bold serif text-black">Operational Speed.</h3>
          <p className="text-gray-500 font-light leading-relaxed">
            A high-volume cafe reduced checkout times by 40% with our one-tap payment 
            workflow and integrated inventory checks.
          </p>
          <div className="pt-8 border-t border-black/5 flex justify-between items-center">
            <span className="text-2xl font-bold serif text-[#2D9B9B]">-40%</span>
            <span className="text-[9px] uppercase tracking-widest font-bold">Wait Time</span>
          </div>
        </div>
      </div>
    </div>
  );
};