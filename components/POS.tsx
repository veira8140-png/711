
import React from 'react';

export const POS: React.FC = () => {
  const capabilities = [
    { title: 'Restaurant POS System Kenya', desc: 'Integrated table management and kitchen display. Best POS software for supermarkets in Kenya.' },
    { title: 'POS System with Mpesa Integration', desc: 'Seamlessly match Mpesa payments to sales records. No more manual reconciliation.' },
    { title: 'Cheap POS System for Retail Shop', desc: 'Affordable hardware and software packages designed for SMEs in Nairobi and Nakuru.' },
    { title: 'POS System that works Offline', desc: 'Reliable transaction processing even during power cuts or internet outages in Kenya.' },
    { title: 'Live Inventory Management', desc: 'Track stock across multiple branches. Automatic low-stock alerts for grocery and hardware shops.' },
    { title: 'Mobile POS Kenya', desc: 'Run your entire business from an Android POS device or your smartphone.' },
    { title: 'eTIMS & KRA Ready', desc: 'Compliant with Kenyan tax laws. Easy invoicing and automated sales reporting.' },
    { title: '24/7 Support in Nairobi', desc: 'Local technical support to ensure your POS machine for sale Kenya never goes down.' }
  ];

  const faqs = [
    { q: "How much does a POS system cost in Kenya?", a: "The cost depends on your hardware needs. Veira offers an affordable POS system for small businesses in Kenya starting with zero upfront software fees for basic users." },
    { q: "Which is the best POS system for small business in Kenya?", a: "Veira is rated the best due to its Mpesa integration, offline capabilities, and KRA eTIMS compliance, making it ideal for retail shops and cafes." },
    { q: "Where can I buy a POS machine for sale in Kenya?", a: "Veira provides all-in-one POS machines with built-in printers and card readers, available for delivery across Nairobi, Mombasa, and Kisumu." }
  ];

  return (
    <div id="pos" className="space-y-40">
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
          }))
        })}
      </script>

      <div className="max-w-4xl mx-auto text-center space-y-10">
        <div className="space-y-4">
          <span className="text-[#2D9B9B] text-[10px] font-bold uppercase tracking-[0.4em]">Buy POS System Kenya</span>
          <h2 className="text-5xl md:text-7xl font-bold serif leading-tight text-black">Best POS Software Kenya. <br/><span className="italic">Certainty at the counter.</span></h2>
        </div>
        <p className="text-xl text-gray-600 font-light leading-relaxed">
          If you are looking for an affordable POS system in Nairobi, Veira provides the most reliable retail POS system Kenya has to offer, featuring native Mpesa integration and offline mode for consistent operations.
        </p>
      </div>

      <div className="space-y-20">
        <div className="text-center">
          <h3 className="text-4xl font-bold serif text-black">POS System Features Kenya</h3>
          <p className="text-gray-500 mt-4">Compare POS system benefits for your specific industry.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => (
            <div key={i} className="glass p-8 border-black/5 hover:border-[#2D9B9B]/30 transition-all group">
              <div className="mb-4 w-1 h-8 bg-black/5 group-hover:bg-[#2D9B9B] transition-colors"></div>
              <h4 className="text-black font-bold mb-3">{cap.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed font-light">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="glass p-12 text-center border-black/5">
        <h3 className="text-3xl font-bold serif mb-6 text-black">Transparent POS System Price Kenya</h3>
        <p className="text-gray-500 mb-8 max-w-2xl mx-auto">From single shops to multi-branch supermarkets, we offer the most cheap POS system for retail shops without compromising on enterprise-grade features and local support.</p>
        <button className="cta-button px-12 py-5 font-bold uppercase tracking-widest text-xs">Get Price Quote →</button>
      </div>

      <div className="max-w-4xl mx-auto space-y-12">
        <h3 className="text-3xl font-bold serif text-center text-black">Frequently Asked Questions</h3>
        <div className="space-y-8">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-black/5 pb-8">
              <h4 className="text-lg font-bold text-black mb-2">{faq.q}</h4>
              <p className="text-gray-600 font-light leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
