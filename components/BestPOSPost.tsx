
import React, { useState } from 'react';

const FAQ_ITEMS = [
  { q: "What is the best POS system for a small retail shop in Kenya?", a: "For a single-till retail shop or minimart, POSmart RetailStar and SimbaPOS are the most widely deployed options. PawaPOS is a strong mobile-first alternative for shops operating from an Android phone or tablet." },
  { q: "Do small business POS systems include e-TIMS compliance?", a: "Most modern systems advertise e-TIMS. Always verify by asking for a live test transaction with a real KRA control unit invoice number." },
  { q: "Which POS system works offline in Kenya?", a: "POSmart RetailStar, SimbaPOS, RobiSearch, and GoPOS all feature offline capability to record sales locally and sync when connection returns." }
];

export const BestPOSPost: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <article className="max-w-4xl mx-auto px-6 py-20 animate-in fade-in duration-1000">
      <header className="mb-16 space-y-8">
        <div className="aspect-[21/9] rounded-[2rem] overflow-hidden glass border-black/5 relative group">
          <img
            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2000&auto=format&fit=crop"
            alt="Best POS system small business Kenya"
            className="w-full h-full object-cover transition-all duration-[3s] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-12">
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-white uppercase tracking-[0.5em] block">Buyer's Guide</span>
              <h1 className="text-4xl md:text-6xl font-bold serif text-white leading-tight max-w-2xl">
                Best POS System for Small Business in Kenya: 2025 Guide
              </h1>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 pb-8 border-b border-black/5 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
          <span>Feb 18, 2025</span>
          <span className="w-1 h-1 rounded-full bg-gray-200"></span>
          <span>By Veira Editorial Team</span>
          <span className="w-1 h-1 rounded-full bg-gray-200"></span>
          <span>18 Min Read</span>
        </div>
      </header>

      <div className="prose prose-xl prose-stone max-w-none prose-p:text-gray-600 prose-p:font-light prose-headings:serif prose-headings:font-bold prose-headings:text-black">
        <p className="lead text-2xl md:text-3xl text-gray-800 font-light leading-relaxed mb-12 italic border-l-4 border-[#2D9B9B] pl-8">
          Finding the best POS system for your small business in Kenya takes more than a Google search. This guide cuts through the marketing to give you an honest look at the top contenders in 2025.
        </p>

        <h2 className="text-4xl mt-20 mb-10">Top Contenders Compared</h2>
        <div className="my-16 overflow-x-auto glass rounded-2xl border-black/5 p-1 bg-black/5">
          <table className="w-full text-left bg-white rounded-xl overflow-hidden">
            <thead className="bg-black/5 text-[10px] font-bold uppercase tracking-widest">
              <tr>
                <th className="px-8 py-6">System</th>
                <th className="px-8 py-6">Best For</th>
                <th className="px-8 py-6">Model</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5 text-sm font-light text-gray-600">
              <tr>
                <td className="px-8 py-6 font-bold text-black">SimbaPOS</td>
                <td className="px-8 py-6">Retail, Restaurant, Pharmacy</td>
                <td className="px-8 py-6">Licence</td>
              </tr>
              <tr>
                <td className="px-8 py-6 font-bold text-black">PawaPOS</td>
                <td className="px-8 py-6">Mobile Traders, Small Shops</td>
                <td className="px-8 py-6">Subscription</td>
              </tr>
              <tr>
                <td className="px-8 py-6 font-bold text-black">POSmart RetailStar</td>
                <td className="px-8 py-6">Minimarts, Hardware Shops</td>
                <td className="px-8 py-6">Licence</td>
              </tr>
              <tr>
                <td className="px-8 py-6 font-bold text-black">Uzapoint</td>
                <td className="px-8 py-6">Multi-location SMEs</td>
                <td className="px-8 py-6">Subscription</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-4xl mt-24 mb-10">What to Look For</h2>
        <ul className="space-y-6 list-none pl-0">
          {[
            { t: "e-TIMS Compliance", d: "Non-negotiable legal requirement. Every sale must generate a KRA-validated invoice." },
            { t: "M-Pesa Integration", d: "Handles STK push within the flow to keep records clean and checkout fast." },
            { t: "Offline Capability", d: "Internet in Kenya is not always reliable. Your POS must keep working regardless." }
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

        <h2 className="text-4xl mt-24 mb-12 text-center">Frequently Asked Questions</h2>
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
      </div>
    </article>
  );
};
