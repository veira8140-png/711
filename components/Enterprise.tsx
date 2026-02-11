import React from 'react';

export const Enterprise: React.FC = () => {
  return (
    <div id="enterprise" className="space-y-32 md:space-y-60 py-10 md:py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12 px-4">
        <div className="space-y-6">
          <span className="text-[#8A3FA0] text-[10px] font-bold uppercase tracking-[0.4em]">Big Business</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold serif leading-tight text-black">
            The Best POS <br className="hidden sm:block"/><span className="italic">for Big Brands in Kenya.</span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
            Veira is built for companies with many shops that need to control everything from one office.
          </p>
        </div>
        <button className="cta-primary px-10 md:px-12 py-5 rounded-none font-bold text-xs uppercase tracking-widest shadow-2xl shadow-[#2D9B9B]/20 w-full sm:w-auto">
          Request a Demo
        </button>
      </div>

      <div className="space-y-12 md:space-y-20 px-4 md:px-0">
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold serif text-black">Enterprise Tools</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            { title: 'Many Stores, One Tool', desc: 'Manage all your locations in Nairobi and beyond easily.', color: '#8A3FA0' },
            { title: 'Better Reports', desc: 'Get deep info on how your business is growing.', color: '#2D9B9B' },
            { title: 'Safe Machines', desc: 'High-quality POS machines available for sale.', color: '#531753' },
            { title: 'Local Help', desc: 'We come to your shop to set everything up.', color: '#1a1a1a' }
          ].map((item, i) => (
            <div key={i} className="glass p-6 md:p-8 border-black/5 space-y-6 group hover:border-black/20 transition-all flex flex-col items-start text-left">
              <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center shrink-0">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: item.color }}></div>
              </div>
              <div className="space-y-2">
                <h4 className="text-black font-bold text-lg leading-snug">{item.title}</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center py-20 md:py-40 space-y-8 md:space-y-12 px-4">
        <h3 className="text-3xl md:text-5xl font-bold serif leading-tight max-w-3xl mx-auto text-black">
          Grow with the <span className="italic">best tools in Kenya.</span>
        </h3>
        <div className="flex flex-col items-center space-y-6">
           <p className="text-gray-400 uppercase tracking-widest text-[9px] md:text-[10px] font-bold text-center">POS Kenya Cost • Simple Software • Retail Tools</p>
           <button className="cta-primary px-12 md:px-16 py-5 md:py-6 font-bold text-xs uppercase tracking-widest w-full sm:w-auto">
            Talk to Sales
          </button>
        </div>
      </div>
    </div>
  );
};