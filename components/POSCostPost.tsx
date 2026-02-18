
import React, { useState } from 'react';

const FAQ_ITEMS = [
  { q: "How much does a basic POS system cost in Kenya?", a: "A basic POS system for a small Kenyan retail shop costs between KSh 20,000 and KSh 50,000 for an entry-level hardware-and-software bundle. Cloud subscription alternatives start from around KSh 1,500 to KSh 4,500 per month." },
  { q: "Is M-Pesa integration included in POS pricing?", a: "It depends on the vendor. Some include it, while others charge a setup fee of KSh 5,000 to KSh 15,000. Always ask whether STK push integration is built-in." },
  { q: "What is the cheapest POS option for a small shop?", a: "A mobile POS app on a monthly subscription is the most affordable. Plans start from around KSh 1,500 per month, using an existing Android phone or tablet." }
];

export const POSCostPost: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <article className="max-w-4xl mx-auto px-6 py-20 animate-in fade-in duration-1000">
      <header className="mb-16 space-y-8">
        <div className="aspect-[21/9] rounded-[2rem] overflow-hidden glass border-black/5 relative group">
          <img
            src="https://images.unsplash.com/photo-1556742049-02e53f8218bb?q=80&w=2000&auto=format&fit=crop"
            alt="POS machine price Kenya guide"
            className="w-full h-full object-cover grayscale transition-all duration-[3s] group-hover:grayscale-0 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-12">
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-white uppercase tracking-[0.5em] block">Market Intelligence</span>
              <h1 className="text-4xl md:text-6xl font-bold serif text-white leading-tight max-w-2xl">
                How Much Does a POS System Cost in Kenya? 2025 Price Guide
              </h1>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 pb-8 border-b border-black/5 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
          <span>Feb 18, 2025</span>
          <span className="w-1 h-1 rounded-full bg-gray-200"></span>
          <span>By Veira Editorial Team</span>
          <span className="w-1 h-1 rounded-full bg-gray-200"></span>
          <span>15 Min Read</span>
        </div>
      </header>

      <div className="prose prose-xl prose-stone max-w-none prose-p:text-gray-600 prose-p:font-light prose-headings:serif prose-headings:font-bold prose-headings:text-black">
        <p className="lead text-2xl md:text-3xl text-gray-800 font-light leading-relaxed mb-12 italic border-l-4 border-[#2D9B9B] pl-8">
          How much does a POS system cost in Kenya? You will hear numbers that range from KSh 10,000 to well over KSh 150,000. Both can be correct depending on your scale.
        </p>

        <p className="mb-12">
          This guide breaks down every cost component: software, hardware, M-Pesa integration, and e-TIMS compliance. By the end, you will know exactly what to budget.
        </p>

        <h2 className="text-4xl mt-20 mb-10">Software: Licence vs Subscription</h2>
        <div className="my-16 overflow-x-auto glass rounded-2xl border-black/5 p-1 bg-black/5">
          <table className="w-full text-left bg-white rounded-xl overflow-hidden">
            <thead className="bg-black/5 text-[10px] font-bold uppercase tracking-widest">
              <tr>
                <th className="px-8 py-6">Model</th>
                <th className="px-8 py-6">Typical Cost (KSh)</th>
                <th className="px-8 py-6">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5 text-sm font-light text-gray-600">
              <tr>
                <td className="px-8 py-6 font-bold text-black">One-Time Licence</td>
                <td className="px-8 py-6">15,000 – 80,000</td>
                <td className="px-8 py-6">Fixed-location shops, supermarkets</td>
              </tr>
              <tr>
                <td className="px-8 py-6 font-bold text-black">Monthly Subscription</td>
                <td className="px-8 py-6">1,500 – 8,000</td>
                <td className="px-8 py-6">Growing SMEs, mobile retail</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-4xl mt-20 mb-10">Hardware Breakdown</h2>
        <ul className="space-y-6 list-none pl-0">
          {[
            { t: "Receipt Printer", d: "KSh 7,000 – 15,000. Fast thermal models for busy tills." },
            { t: "Barcode Scanner", d: "KSh 4,000 – 10,000. Entry-level 1D or advanced 2D models." },
            { t: "All-in-One Terminals", d: "KSh 89,000 – 120,000. Professional touch-screen units." }
          ].map((item, i) => (
            <li key={i} className="flex gap-6 items-start p-6 bg-black/5 rounded-xl">
              <span className="text-black font-serif italic font-bold">0{i+1}</span>
              <div>
                <strong className="block text-black text-lg mb-1">{item.t}</strong>
                <span className="text-gray-500 font-light">{item.d}</span>
              </div>
            </li>
          ))}
        </ul>

        <h2 className="text-4xl mt-24 mb-10">Total First-Year Cost by Business</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-black text-white rounded-3xl">
            <h4 className="text-xl font-bold serif italic mb-4">Small Retail Shop</h4>
            <p className="text-4xl font-black mb-4">KSh 66k - 115k</p>
            <p className="text-gray-400 text-sm font-light">Includes tablet, printer, scanner, and 12 months of cloud software.</p>
          </div>
          <div className="p-8 border border-black/5 rounded-3xl">
            <h4 className="text-xl font-bold serif italic mb-4">Nairobi Restaurant</h4>
            <p className="text-4xl font-black mb-4">KSh 127k - 231k</p>
            <p className="text-gray-500 text-sm font-light">Includes kitchen printers, touch terminal, and table management module.</p>
          </div>
        </div>

        <h2 className="text-4xl mt-24 mb-12 text-center">Pricing FAQ</h2>
        <dl className="space-y-4">
          {FAQ_ITEMS.map((faq, i) => (
            <div key={i} className="border border-black/5 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full p-8 flex justify-between items-center text-left bg-white hover:bg-black/5 transition-colors"
              >
                <span className="text-lg font-bold serif italic text-black">{faq.q}</span>
                <span className="text-2xl font-light text-gray-300">{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && (
                <div className="p-8 pt-0 bg-white text-gray-500 font-light leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </dl>

        <section id="sources" className="mt-24 pt-16 border-t border-black/5">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-8">Verified Sources</h4>
          <ol className="text-sm text-gray-400 font-light space-y-2 list-decimal pl-4">
            <li>iOSoft Solutions Kenya. "POS System Price Guide 2025"</li>
            <li>PawaPOS. "Operational Cost Analysis for Kenyan Retail"</li>
            <li>KRA official e-TIMS portal data.</li>
          </ol>
        </section>
      </div>
    </article>
  );
};
