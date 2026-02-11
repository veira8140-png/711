
import React from 'react';

export const Enterprise: React.FC = () => {
  return (
    <div id="enterprise" className="space-y-60 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-6">
          <span className="text-[#8A3FA0] text-[10px] font-bold uppercase tracking-[0.4em]">Enterprise Grade</span>
          <h2 className="text-5xl md:text-7xl font-bold serif leading-tight text-black">
            All-in-one POS System <br/><span className="italic">for Enterprises in Kenya.</span>
          </h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
            Veira is the premier POS system supplier in Kenya for large-scale retail chains and hospitality groups looking for a robust retail management system Kenya with multi-branch controls and centralized data.
          </p>
        </div>
        <button className="cta-button px-12 py-5 rounded-none font-bold text-xs uppercase tracking-widest shadow-2xl shadow-[#2D9B9B]/20">
          Request Enterprise Demo
        </button>
      </div>

      <div className="space-y-20">
        <div className="text-center">
          <h3 className="text-4xl font-bold serif text-black">Enterprise POS Solution Kenya</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Multi-Store POS Nairobi', desc: 'Sync inventory and sales across multiple locations effortlessly.', color: '#8A3FA0' },
            { title: 'Advanced POS Features', desc: 'Custom reporting and sophisticated loyalty programs for growing brands.', color: '#2D9B9B' },
            { title: 'Secure POS Machine Kenya', desc: 'PCI-compliant hardware available for sale with integrated payment security.', color: '#531753' },
            { title: 'Local POS Suppliers', desc: 'On-site installation and dedicated managers available within Nairobi.', color: '#1a1a1a' }
          ].map((item, i) => (
            <div key={i} className="glass p-8 border-black/5 space-y-6 group hover:border-black/20 transition-all">
              <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: item.color }}></div>
              </div>
              <h4 className="text-black font-bold text-lg leading-snug">{item.title}</h4>
              <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center py-40 space-y-12">
        <h3 className="text-5xl font-bold serif leading-tight max-w-3xl mx-auto text-black">
          Scale with the <span className="italic">best POS software suppliers in Kenya.</span>
        </h3>
        <div className="flex flex-col items-center space-y-4">
           <p className="text-gray-400 uppercase tracking-widest text-[10px] font-bold">POS system Kenya cost • POS software Kenya • Retail Management</p>
           <button className="cta-button px-16 py-6 font-bold text-xs uppercase tracking-widest">
            Contact Veira Sales
          </button>
        </div>
      </div>
    </div>
  );
};
