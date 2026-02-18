
import React from 'react';

export const BlogPost: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-6 py-20 animate-in fade-in duration-1000">
      {/* Header Image */}
      <div className="mb-16 aspect-[21/9] rounded-[2rem] overflow-hidden glass border-black/5 relative group">
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

      {/* Metadata */}
      <div className="flex items-center gap-6 mb-16 pb-8 border-b border-black/5 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
        <span>Feb 18, 2025</span>
        <span className="w-1 h-1 rounded-full bg-gray-200"></span>
        <span>By Veira Editorial Team</span>
        <span className="w-1 h-1 rounded-full bg-gray-200"></span>
        <span>12 Min Read</span>
      </div>

      {/* Body Content */}
      <div className="prose prose-xl prose-stone max-w-none prose-p:text-gray-600 prose-p:font-light prose-headings:serif prose-headings:font-bold prose-headings:text-black">
        <p className="lead text-2xl md:text-3xl text-gray-800 font-light leading-relaxed mb-12 italic border-l-4 border-[#2D9B9B] pl-8">
          e-TIMS in Kenya is no longer a future requirement you can push to next quarter. If you sell groceries in Kisumu, serve coffee in Nairobi CBD, or run a boutique in Mombasa, the Kenya Revenue Authority (KRA) now requires you to generate and transmit electronic tax invoices for every sale.
        </p>

        <p className="mb-8">
          e-TIMS compliance became mandatory for <em>all</em> Kenyan businesses on 1 September 2023, not only for those registered for VAT. This guide explains what e-TIMS is, exactly who must register, what happens if you ignore it, and how the right POS system makes compliance automatic rather than a daily headache.
        </p>

        <h2 className="text-4xl mt-20 mb-10">What Is e-TIMS?</h2>
        <p className="mb-8">
          e-TIMS stands for Electronic Tax Invoice Management System. KRA introduced it as a software solution that lets businesses generate and transmit compliant tax invoices digitally, without purchasing expensive physical hardware.
        </p>
        <p className="mb-12">
          Here is how it works at the point of sale: every time you record a transaction, e-TIMS creates a structured digital invoice and sends it to KRA's servers in real time. The invoice carries a unique identifier and a QR code. Your customer can scan that code to confirm the receipt is genuine.
        </p>

        {/* Comparison Table */}
        <div className="my-16 overflow-x-auto glass rounded-2xl border-black/5 p-1 bg-black/5">
          <table className="w-full text-left bg-white rounded-xl overflow-hidden">
            <thead className="bg-black/5 text-[10px] font-bold uppercase tracking-widest">
              <tr>
                <th className="px-8 py-6">Feature</th>
                <th className="px-8 py-6">TIMS (Old System)</th>
                <th className="px-8 py-6 text-[#2D9B9B]">e-TIMS (Current)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5 text-sm font-light text-gray-600">
              <tr>
                <td className="px-8 py-6 font-bold text-black">Hardware required</td>
                <td className="px-8 py-6">Yes — physical ETR device</td>
                <td className="px-8 py-6 text-[#2D9B9B]">No — software only</td>
              </tr>
              <tr>
                <td className="px-8 py-6 font-bold text-black">Registration cost</td>
                <td className="px-8 py-6">Device purchase + setup fees</td>
                <td className="px-8 py-6 text-[#2D9B9B]">Free</td>
              </tr>
              <tr>
                <td className="px-8 py-6 font-bold text-black">POS/ERP connection</td>
                <td className="px-8 py-6">Difficult and costly</td>
                <td className="px-8 py-6 text-[#2D9B9B]">Via API, supported by KRA</td>
              </tr>
              <tr>
                <td className="px-8 py-6 font-bold text-black">Who it covers</td>
                <td className="px-8 py-6">VAT-registered businesses only</td>
                <td className="px-8 py-6 text-[#2D9B9B]">All businesses in Kenya</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-4xl mt-20 mb-10">Why Non-Compliance Is a Real Risk</h2>
        <p className="mb-8">
          If KRA flags your business for non-compliance, you face a penalty equal to twice the tax due on every non-compliant transaction. Furthermore, any expense you claim without a valid e-TIMS invoice becomes non-deductible.
        </p>

        {/* Callout Box */}
        <div className="bg-red-50 border-l-4 border-red-400 p-12 my-16 space-y-4">
          <h4 className="text-red-900 font-bold serif text-2xl italic">The January 2026 Milestone</h4>
          <p className="text-red-800 font-light text-lg leading-relaxed">
            From 1 January 2026, KRA began cross-checking every income figure and expense claim in your annual tax return against e-TIMS data. Discrepancies trigger automatic audits.
          </p>
        </div>

        <h2 className="text-4xl mt-20 mb-10">How e-TIMS Works: A Breakdown</h2>
        <p className="mb-8">
          When a sale happens, your system generates an invoice with seller PIN, unique serial number, item description, and a QR code. This transmits to KRA's servers in real-time.
        </p>

        <h3 className="text-2xl font-bold mt-12 mb-6 italic">The Five KRA Solutions</h3>
        <ul className="space-y-6 list-none pl-0">
          {[
            { t: "eTIMS Lite via USSD", d: "Dial *222# for simple offline transactions." },
            { t: "eTIMS Lite Web", d: "Portal access for service-only businesses." },
            { t: "eTIMS Lite Mobile App", d: "For shop owners who manage via smartphone." },
            { t: "eTIMS Client (Windows/Android)", d: "Downloadable software for multi-cashier setups." },
            { t: "Virtual Sales Control Unit (VSCU)", d: "Direct API connection for sophisticated software." }
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

        {/* M-Pesa Section */}
        <h2 className="text-4xl mt-24 mb-10">How M-Pesa and e-TIMS Synergy Works</h2>
        <p className="mb-8">
          M-Pesa and e-TIMS compliance work together in one step when your POS is properly set up. The customer pays by Lipa na M-Pesa, the POS receives confirmation, records the transaction, and transmits it to KRA within seconds.
        </p>

        {/* Large CTA Section */}
        <div className="bg-black text-white p-12 md:p-24 rounded-[3rem] my-24 space-y-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#2D9B9B]/20 to-transparent"></div>
          <div className="relative z-10 space-y-8">
            <h3 className="text-3xl md:text-5xl font-bold serif italic">Ready for Zero-Stress Compliance?</h3>
            <p className="text-gray-400 max-w-xl mx-auto font-light text-lg">
              Veira handles the e-TIMS transmission, M-Pesa reconciliation, and stock tracking automatically.
            </p>
            <button className="cta-primary px-16 py-8 text-[10px] font-bold uppercase tracking-[0.5em]">
              Start Free Trial
            </button>
          </div>
        </div>

        {/* FAQ Area */}
        <h2 className="text-4xl mt-24 mb-12 text-center">e-TIMS Common Questions</h2>
        <dl className="space-y-12">
          {[
            { q: "Is e-TIMS registration free?", a: "Yes. KRA provides the software at no cost. Only 3rd party integrators may charge for API setup." },
            { q: "What if the internet goes down?", a: "Notify KRA within 24 hours. A POS with offline mode (like Veira) queues these for auto-sync." },
            { q: "Can a customer verify my invoice?", a: "Yes. Every invoice has a QR code linking to KRA's official verification page." }
          ].map((faq, i) => (
            <div key={i} className="space-y-3 pb-8 border-b border-black/5">
              <dt className="text-xl font-bold text-black serif italic">{faq.q}</dt>
              <dd className="text-gray-500 font-light leading-relaxed">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </div>
      
      {/* Footer Article Navigation */}
      <div className="mt-32 pt-16 border-t border-black/5 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">
        <a href="#" className="hover:text-black transition-colors">← Previous Post</a>
        <a href="#" className="hover:text-black transition-colors">Next Post →</a>
      </div>
    </article>
  );
};
