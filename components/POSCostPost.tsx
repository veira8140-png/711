
import React, { useState } from 'react';

const FAQ_ITEMS = [
  { q: "How much does a basic POS system cost in Kenya?", a: "A basic POS system for a small Kenyan retail shop costs between KSh 20,000 and KSh 50,000 for an entry-level hardware-and-software bundle. Cloud subscription alternatives start from around KSh 1,500 to KSh 4,500 per month." },
  { q: "Is M-Pesa integration included in POS pricing?", a: "It depends on the vendor. Some include it, while others charge a setup fee of KSh 5,000 to KSh 15,000. Always ask whether STK push integration is built-in." },
  { q: "What is the cheapest POS option for a small shop?", a: "A mobile POS app on a monthly subscription is the most affordable. Plans start from around KSh 1,500 per month, using an existing Android phone or tablet. However, Veira's 1% revenue share model is often cheaper for low-margin kiosks." }
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
              <span className="text-[10px] font-bold text-white uppercase tracking-[0.5em] block">Financial Whitepaper</span>
              <h1 className="text-4xl md:text-6xl font-bold serif text-white leading-tight max-w-2xl">
                The Real Cost of a POS System in Kenya: 2025 Price Guide
              </h1>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 pb-8 border-b border-black/5 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
          <span>Feb 18, 2025</span>
          <span className="w-1 h-1 rounded-full bg-gray-200"></span>
          <span>By Veira Editorial Team</span>
          <span className="w-1 h-1 rounded-full bg-gray-200"></span>
          <span>19 Min Read</span>
        </div>
      </header>

      <div className="prose prose-xl prose-stone max-w-none prose-p:text-gray-600 prose-p:font-light prose-headings:serif prose-headings:font-bold prose-headings:text-black">
        <p className="lead text-2xl md:text-3xl text-gray-800 font-light leading-relaxed mb-12 italic border-l-4 border-[#2D9B9B] pl-8">
          The most expensive POS system is not the one with the highest price tag—it is the one that fails you during a Saturday morning rush or leaves you with a KSh 50,000 fine from KRA. 
        </p>

        <p className="mb-12">
          When Kenyan business owners ask "How much does a POS cost?", they are often only thinking about the hardware on the counter. But true cost includes software licenses, M-Pesa hooks, e-TIMS data, and technical support. This 2,000-word deep dive breaks down every shilling you should expect to spend.
        </p>

        <h2 className="text-4xl mt-20 mb-10">1. Software: The Recurring Investment</h2>
        <p className="mb-8">In 2025, there are two main ways to pay for POS software in Nairobi: the "One-Time Buy" and the "Cloud Subscription".</p>

        <h3 className="text-2xl mt-10 mb-6 font-bold">A. One-Time Licence (The Legacy Model)</h3>
        <p className="mb-6">
          Traditional vendors like SimbaPOS often offer a permanent license. You pay once, and you own that version of the software forever.
        </p>
        <ul className="mb-8 list-disc pl-10 space-y-2 text-gray-600">
          <li><strong>Cost Range:</strong> KSh 15,000 to KSh 80,000.</li>
          <li><strong>Hidden Risk:</strong> You often have to pay extra for "Annual Maintenance Contracts" (AMC) to get updates when KRA changes their tax rules.</li>
        </ul>

        <h3 className="text-2xl mt-10 mb-6 font-bold">B. SaaS / Cloud Subscription (The Modern Model)</h3>
        <p className="mb-6">
          Systems like Uzapoint or PawaPOS charge a monthly fee. This usually includes cloud backups, automatic e-TIMS updates, and remote support.
        </p>
        <ul className="mb-8 list-disc pl-10 space-y-2 text-gray-600">
          <li><strong>Cost Range:</strong> KSh 1,500 to KSh 5,000 per month.</li>
          <li><strong>Value:</strong> No large upfront cost, and the software is always the latest version.</li>
        </ul>

        <h3 className="text-2xl mt-10 mb-6 font-bold">C. The Revenue Share Model (The Veira Model)</h3>
        <p className="mb-6">
          Veira pioneered a success-based model for Kenya. Instead of fixed fees, you pay a small percentage (typically 1%) of your sales. This aligns the POS provider's goals with yours: if you don't sell, you don't pay.
        </p>

        <h2 className="text-4xl mt-24 mb-10">2. Hardware: Beyond the Receipt Printer</h2>
        <p className="mb-8">Hardware is the most tangible cost. Here is a realistic market price list for components in Kenya:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
          {[
            { t: "Desktop PC", c: "KSh 25k - 45k", d: "Required for Windows-based legacy systems." },
            { t: "Tablet (Android)", c: "KSh 12k - 25k", d: "Ideal for modern cloud apps and mobile use." },
            { t: "Receipt Printer", c: "KSh 7k - 15k", d: "80mm thermal printers are the retail standard." },
            { t: "Cash Drawer", c: "KSh 5k - 9k", d: "Secures physical notes with automatic opening hooks." },
            { t: "Barcode Scanner", c: "KSh 4k - 12k", d: "2D scanners are needed for e-TIMS QR codes." },
            { t: "Handheld POS", c: "KSh 18k - 35k", d: "All-in-one printer + scanner + tablet device." }
          ].map((item, i) => (
            <div key={i} className="p-6 glass border-black/5 rounded-2xl flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-black mb-1">{item.t}</h4>
                <p className="text-xs text-gray-500 font-light mb-4">{item.d}</p>
              </div>
              <p className="text-lg font-black text-[#2D9B9B]">{item.c}</p>
            </div>
          ))}
        </div>

        <h2 className="text-4xl mt-24 mb-10">3. The "Ghost Costs": What They Don't Tell You</h2>
        <p className="mb-8">When comparing quotes, ask about these four hidden expenses. If they are not in the quote, they are coming for your wallet later.</p>
        
        <h4 className="text-xl font-bold mb-4">M-Pesa Integration Fee (KSh 5,000 – 15,000)</h4>
        <p className="mb-8 text-sm text-gray-600">Most vendors treat M-Pesa STK push as a "premium" add-on. They will charge you for the technical setup of your Paybill/Till with Safaricom’s Daraja platform. **Veira includes this in the setup.**</p>

        <h4 className="text-xl font-bold mb-4">e-TIMS Onboarding (KSh 0 – 10,000)</h4>
        <p className="mb-8 text-sm text-gray-600">Registering your business on the KRA portal and linking it to the POS Virtual Sales Control Unit (VSCU) can be technically difficult. Some technicians charge a "consultancy" fee for this paperwork.</p>

        <h4 className="text-xl font-bold mb-4">On-Site Training (KSh 2,000 – 5,000)</h4>
        <p className="mb-8 text-sm text-gray-600">If your staff are not tech-savvy, you will need a trainer to spend a day in your shop. Many companies bill this by the hour.</p>

        <h2 className="text-4xl mt-24 mb-10">4. ROI: Is the System Paying for Itself?</h2>
        <p className="mb-8">A POS is not an expense; it is a profit protector. For a typical Kenyan mini-mart making KSh 1,000,000 in monthly sales, the ROI looks like this:</p>
        
        <div className="bg-black text-white p-10 rounded-[2rem] my-12 space-y-8">
          <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <span className="text-gray-400">Theft Prevention (2% of sales)</span>
            <span className="text-green-400 font-bold">+ KSh 20,000</span>
          </div>
          <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <span className="text-gray-400">Reconciliation Time (10 hrs/month @ 500/hr)</span>
            <span className="text-green-400 font-bold">+ KSh 5,000</span>
          </div>
          <div className="flex justify-between items-center border-b border-white/10 pb-4">
            <span className="text-gray-400">Stock Optimization (Avoiding dead stock)</span>
            <span className="text-green-400 font-bold">+ KSh 10,000</span>
          </div>
          <div className="flex justify-between items-center pt-4">
            <span className="font-bold text-xl italic">Total Monthly Gain</span>
            <span className="text-3xl font-black text-white">KSh 35,000</span>
          </div>
        </div>
        <p className="text-center text-sm text-gray-400 italic">Conclusion: Even at a KSh 5,000 monthly subscription, the POS yields a 7x return on investment.</p>

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
                <div className="p-8 pt-0 bg-white text-gray-500 font-light leading-relaxed animate-in slide-in-from-top-2 duration-300">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </dl>

        <h2 className="text-4xl mt-24 mb-10">The Verdict</h2>
        <p className="mb-8">
          Don't buy a POS system because it's cheap. Buy it because it's **unbreakable.** 
        </p>
        <p className="mb-12">
          For most Kenyan SMEs, the Cloud Subscription model with a small setup fee (like Veira's KSh 3,500 setup) is the most efficient path. It keeps your cash flow healthy while giving you professional-grade tools to fight theft and stay tax-compliant.
        </p>
      </div>
    </article>
  );
};
