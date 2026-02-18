
import React from 'react';

export const ETIMSPost: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20 animate-in fade-in duration-1000">
      <header className="mb-16">
        <div className="mb-8 aspect-[21/9] rounded-[2rem] overflow-hidden glass border-black/5 relative group">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2000&auto=format&fit=crop"
            alt="e-TIMS compliance in Kenya"
            className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-white uppercase tracking-[0.5em] block">Regulatory Intelligence</span>
              <h1 className="text-4xl md:text-6xl font-bold serif text-white leading-tight max-w-2xl">
                e-TIMS Kenya Explained: What Every Owner Must Know
              </h1>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6 pb-8 border-b border-black/5 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
          <span>Feb 12, 2025</span>
          <span className="w-1 h-1 rounded-full bg-gray-200"></span>
          <span>By Veira Editorial Team</span>
          <span className="w-1 h-1 rounded-full bg-gray-200"></span>
          <span>12 Min Read</span>
        </div>
      </header>

      <div className="prose prose-xl prose-stone max-w-none prose-p:text-gray-600 prose-p:font-light prose-headings:serif prose-headings:font-bold prose-headings:text-black">
        <p className="lead text-2xl md:text-3xl text-gray-800 font-light leading-relaxed mb-12 italic border-l-4 border-[#2D9B9B] pl-8">
          e-TIMS compliance became mandatory for all Kenyan businesses on 1 September 2023. This guide explains exactly who must register and what happens if you ignore it.
        </p>

        <h2 className="text-4xl mt-20 mb-10">What Is e-TIMS?</h2>
        <p>e-TIMS stands for Electronic Tax Invoice Management System. Every time you record a transaction, e-TIMS creates a structured digital invoice and sends it to KRA's servers in real time.</p>

        <h2 className="text-4xl mt-20 mb-10">Why Non-Compliance Is a Real Risk</h2>
        <p>You face a penalty equal to twice the tax due on every non-compliant transaction. Furthermore, any expense you claim without a valid e-TIMS invoice becomes non-deductible.</p>

        <div className="bg-red-50 border-l-4 border-red-400 p-12 my-16">
          <h4 className="text-red-900 font-bold serif text-2xl italic">The January 2026 Milestone</h4>
          <p className="text-red-800 font-light text-lg">From 1 January 2026, KRA began cross-checking every income figure against e-TIMS data. Discrepancies trigger automatic audits.</p>
        </div>

        <div className="bg-black text-white p-12 md:p-24 rounded-[3rem] my-24 space-y-12 text-center relative overflow-hidden">
          <div className="relative z-10 space-y-8">
            <h3 className="text-3xl md:text-5xl font-bold serif italic">Ready for Zero-Stress Compliance?</h3>
            <button className="cta-primary px-16 py-8 text-[10px] font-bold uppercase tracking-[0.5em]">Start Free Trial</button>
          </div>
        </div>
      </div>
    </article>
  );
};
