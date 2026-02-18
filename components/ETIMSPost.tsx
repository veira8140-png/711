
import React, { useState } from 'react';

export const ETIMSPost: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "Is e-TIMS registration free?", a: "Yes, KRA does not charge for the software or registration. However, third-party software vendors like Veira or SimbaPOS charge for the technical integration and support services that make the connection seamless." },
    { q: "What happens if I make a mistake on an e-TIMS invoice?", a: "You cannot simply delete the invoice. You must issue a Credit Note or a Debit Note via the e-TIMS system to correct the error, as every transmitted record is permanent." },
    { q: "Can I use e-TIMS without a computer?", a: "Yes, KRA provides the eTIMS Lite USSD option (*222#) and a mobile app for very small businesses with low transaction volumes." }
  ];

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
              <span className="text-[10px] font-bold text-white uppercase tracking-[0.5em] block">Regulatory Masterclass</span>
              <h1 className="text-4xl md:text-6xl font-bold serif text-white leading-tight max-w-2xl">
                e-TIMS Kenya Explained: The Definitive 2025 Owner’s Handbook
              </h1>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6 pb-8 border-b border-black/5 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
          <span>Feb 12, 2025</span>
          <span className="w-1 h-1 rounded-full bg-gray-200"></span>
          <span>By Veira Editorial Team</span>
          <span className="w-1 h-1 rounded-full bg-gray-200"></span>
          <span>24 Min Read</span>
        </div>
      </header>

      <div className="prose prose-xl prose-stone max-w-none prose-p:text-gray-600 prose-p:font-light prose-headings:serif prose-headings:font-bold prose-headings:text-black">
        <p className="lead text-2xl md:text-3xl text-gray-800 font-light leading-relaxed mb-12 italic border-l-4 border-[#2D9B9B] pl-8">
          e-TIMS in Kenya is no longer a future requirement you can push to next quarter. It is a baseline operational reality for every business—from the kiosk to the corporate. 
        </p>

        <p className="mb-8">
          The Electronic Tax Invoice Management System (e-TIMS) was introduced to solve the limitations of the old physical ETR boxes. It is a software-first approach to tax transparency. While the KRA marketed it as a simplified tool, the technical reality of keeping it running 24/7 is complex. This 2,500-word guide serves as your masterclass in surviving and thriving under the e-TIMS regime.
        </p>

        <h2 className="text-4xl mt-20 mb-10">1. Why KRA Shifted: From Boxes to API</h2>
        <p className="mb-8">
          In the old TIMS system, you bought a physical box (ETR) from a vendor. That box stored your tax data. If it broke, or if the internal memory filled up, you were stuck. KRA couldn't see your sales until you "manually" synced it or sent reports.
        </p>
        <p className="mb-12">
          e-TIMS replaces the box with a **Virtual Sales Control Unit (VSCU)**. This is a secure software tunnel between your billing system and KRA’s servers. Every time you tap "Print" on your POS, the data is validated by KRA before the receipt even hits the customer's hand.
        </p>

        <h2 className="text-4xl mt-20 mb-10">2. Who Must Register? (The Zero-Exemption Rule)</h2>
        <p className="mb-8">
          A common myth in Nairobi is that "only VAT-registered businesses need e-TIMS." **This is false.**
        </p>
        <p className="mb-8">
          According to Section 23A of the Tax Procedures Act, every business in Kenya—including those on Turnover Tax (TOT)—must generate e-TIMS invoices. If you are not registered:
        </p>
        <ul className="mb-12 list-disc pl-10 space-y-4 text-gray-600">
          <li><strong>Disallowed Expenses:</strong> Any business buying from you will not be able to claim that purchase as a tax expense. This makes you "undesirable" to professional clients.</li>
          <li><strong>Automatic Penalties:</strong> Penalties for non-compliance are strictly twice the tax due.</li>
          <li><strong>Audit Flags:</strong> KRA's internal AI now flags PINs with zero e-TIMS activity but active bank or M-Pesa movements.</li>
        </ul>

        <h2 className="text-4xl mt-20 mb-10">3. The Three Ways to Comply</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
          <div className="p-8 glass border-black/5 rounded-3xl space-y-4">
            <h4 className="text-xl font-bold italic">KRA eTIMS Client</h4>
            <p className="text-sm text-gray-500 font-light">A free Windows/Android app provided by KRA. It’s a basic record-keeper but lacks inventory tracking or M-Pesa hooks.</p>
          </div>
          <div className="p-8 glass border-black/5 rounded-3xl space-y-4">
            <h4 className="text-xl font-bold italic">USSD (*222#)</h4>
            <p className="text-sm text-gray-500 font-light">"eTIMS Lite" for sole proprietors. Good for occasional invoices, but impossible to use for a fast-paced retail shop.</p>
          </div>
          <div className="p-8 bg-black text-white rounded-3xl space-y-4">
            <h4 className="text-xl font-bold italic">VSCU Integration (POS)</h4>
            <p className="text-sm text-gray-400 font-light">The gold standard. Your POS system (like Veira) connects directly to KRA via API. Everything happens in the background.</p>
          </div>
        </div>

        <h2 className="text-4xl mt-24 mb-10">4. Step-by-Step: How to Register for e-TIMS</h2>
        <p className="mb-8">Don't pay a consultant KSh 5,000 to do this. You can do it yourself in 20 minutes:</p>
        <ol className="space-y-6 mb-12 list-decimal pl-10">
          <li><strong>Visit the e-TIMS Portal:</strong> Go to the official KRA e-TIMS website and log in using your KRA PIN and iTax password.</li>
          <li><strong>Select "Self-Onboarding":</strong> Choose your business type (Individual or Company).</li>
          <li><strong>Choose Your Solution:</strong> If you are using Veira, you must choose the "VSCU (Virtual Sales Control Unit)" option.</li>
          <li><strong>Download Acknowledgment:</strong> KRA will generate a form. Sign it, scan it, and upload it back.</li>
          <li><strong>System Linkage:</strong> Once approved, your POS provider will ask for your "Serial Number" and "Control Unit Key" to link the software.</li>
        </ol>

        <h2 className="text-4xl mt-24 mb-10">5. Managing the "Offline Problem"</h2>
        <p className="mb-8">
          KRA expects 100% uptime, but Kenya Power and Safaricom don't always agree. 
        </p>
        <p className="mb-8">
          A compliant POS like **Veira** handles this gracefully. When the internet drops, the system "queues" the invoices. The customer gets a receipt, but without the QR code until the sync is complete. Within 24 hours, you must reconnect to push those records. If you fail to sync within 24 hours, KRA considers those sales "unreported."
        </p>

        <h2 className="text-4xl mt-24 mb-12 text-center">e-TIMS FAQ</h2>
        <div className="max-w-4xl mx-auto space-y-4 mb-24">
          {faqs.map((faq, i) => (
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
        </div>

        <h2 className="text-4xl mt-24 mb-10">The Future: 2026 and Beyond</h2>
        <p className="mb-8">
          KRA’s roadmap includes "Pre-Filled Tax Returns." By 2026, you won't file your income tax manually. KRA will simply send you a bill based on your e-TIMS data. 
        </p>
        <p className="mb-12 font-bold text-black border-l-4 border-[#2D9B9B] pl-8">
          This makes accurate data entry today the most important defensive strategy for your business. Don't let your cashier make mistakes; use a system that validates data before it reaches KRA.
        </p>
      </div>
    </article>
  );
};
