
import React, { useEffect, useState } from 'react';

const ComparisonRow: React.FC<{ label: string; traditional: string; genericAi: string; veira: string; isHeader?: boolean }> = ({ label, traditional, genericAi, veira, isHeader }) => (
  <div className={`grid grid-cols-4 gap-4 py-8 border-b border-black/5 items-center ${isHeader ? 'bg-black/[0.02] -mx-8 px-8 sticky top-0 z-10' : ''}`}>
    <div className={`text-[10px] font-bold uppercase tracking-widest ${isHeader ? 'text-gray-400' : 'text-black'}`}>{label}</div>
    <div className={`text-sm font-light leading-relaxed ${isHeader ? 'text-gray-400 font-bold uppercase tracking-widest text-[10px]' : 'text-gray-400'}`}>{traditional}</div>
    <div className={`text-sm font-light leading-relaxed ${isHeader ? 'text-gray-400 font-bold uppercase tracking-widest text-[10px]' : 'text-gray-400'}`}>{genericAi}</div>
    <div className={`text-sm font-bold leading-relaxed text-black ${isHeader ? 'uppercase tracking-widest text-[10px]' : ''}`}>
      {isHeader ? veira : (
        <div className="flex items-center gap-2">
          <span className="text-[#2D9B9B]">✓</span>
          {veira}
        </div>
      )}
    </div>
  </div>
);

export const ComparisonPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    // Inject SEO Metadata dynamically
    document.title = "Veira vs Traditional POS vs Generic AI | Comparison Guide 2025";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', 'Detailed comparison: Why Veira is superior to legacy POS systems and generic AI like ChatGPT for Kenyan retail businesses.');

    // Inject JSON-LD Schema
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Veira Intelligence Comparison Engine",
      "description": "Comparative analysis of Veira Intelligence vs legacy retail software and standalone LLMs.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://veirahq.com/" },
          { "@type": "ListItem", "position": 2, "name": "Comparison", "item": "https://veirahq.com/compare" }
        ]
      },
      "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why is Veira better than ChatGPT for my shop?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unlike ChatGPT, Veira has live access to your sales data, inventory levels, and KRA e-TIMS records. It doesn't just give advice; it acts by sending WhatsApp alerts, detecting theft, and automating marketing based on real-time signals."
            }
          },
          {
            "@type": "Question",
            "name": "How does Veira differ from a standard Cloud POS?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Traditional Cloud POS systems are passive record-keepers. Veira is an intelligence layer that uses autonomous agents (Glenn, Achi, Tiri) to manage operations, fraud detection, and customer growth automatically."
            }
          }
        ]
      }
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => { document.head.removeChild(script); };
  }, []);

  const faqs = [
    { q: "Is Veira just a skin for ChatGPT?", a: "No. Veira is a custom-engineered retail intelligence engine. While we use Gemini for high-level reasoning, our core logic is proprietary and built on live retail data, M-Pesa hooks, and KRA e-TIMS APIs." },
    { q: "Do I still need a computer to use Veira?", a: "Veira is device-agnostic. You can run your entire business from an Android phone, a dedicated POS terminal, or a desktop browser. No bulky servers required." },
    { q: "What happens if I lose internet?", a: "Unlike generic web apps, Veira's POS works offline. Data is cached locally and synchronized with KRA's e-TIMS servers the moment you're back online." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
      <header className="space-y-8 text-center max-w-4xl mx-auto">
        <span className="section-label mx-auto">Competitive Intelligence</span>
        <h1 className="text-6xl md:text-8xl font-black serif text-black leading-tight tracking-tighter">
          Beyond Records. <br/><span className="italic text-gray-400">Beyond Chat.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
          Traditional POS systems record the past. Generic AI guesses the future. <br/>
          <span className="text-black font-bold underline underline-offset-8 decoration-[#2D9B9B]/30">Veira engineers the present.</span>
        </p>
      </header>

      {/* Main Comparison Matrix */}
      <section className="glass p-8 md:p-16 border-black/5 overflow-x-auto">
        <div className="min-w-[900px]">
          <ComparisonRow 
            label="Capability" 
            traditional="Traditional POS" 
            genericAi="Generic AI (ChatGPT)" 
            veira="Veira Intelligence" 
            isHeader 
          />
          <ComparisonRow 
            label="Data Context" 
            traditional="Manual input only" 
            genericAi="Snapshot (Outdated)" 
            veira="Live Business Stream" 
          />
          <ComparisonRow 
            label="KRA e-TIMS" 
            traditional="Requires manual sync" 
            genericAi="No integration" 
            veira="API-Native (Real-time)" 
          />
          <ComparisonRow 
            label="M-Pesa Reconciliation" 
            traditional="Manual ledger matching" 
            genericAi="Manual text pasting" 
            veira="Instant STK Push" 
          />
          <ComparisonRow 
            label="Theft Detection" 
            traditional="Only if you check logs" 
            genericAi="Hypothetical advice" 
            veira="Real-time WhatsApp Flags" 
          />
          <ComparisonRow 
            label="Customer Growth" 
            traditional="Basic loyalty points" 
            genericAi="General copy ideas" 
            veira="Automated Campaigns" 
          />
          <ComparisonRow 
            label="Operational Vibe" 
            traditional="Passive tool" 
            genericAi="Chat interface" 
            veira="Autonomous Workforce" 
          />
        </div>
      </section>

      {/* Logic Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <h2 className="text-4xl md:text-6xl font-black serif text-black leading-[0.9] tracking-tighter">
            Why Standalone <br/><span className="italic text-gray-400">AI is Not Enough.</span>
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            ChatGPT can tell you <em>how</em> to run a marketing campaign. <br/><br/>
            <strong>Achi (Veira AI)</strong> actually sends the messages, tracks who clicked, calculates the ROI, and updates your inventory levels in one seamless motion.
          </p>
          <div className="pt-8 space-y-4">
             <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-black">
               <span className="text-[#2D9B9B]">●</span> Integrated Logic beats Standalone Advice
             </div>
             <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-black">
               <span className="text-[#2D9B9B]">●</span> Kenya-Specific Context vs Global Generalities
             </div>
          </div>
        </div>

        <div className="glass p-12 bg-black text-white space-y-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#2D9B9B]/10 blur-[80px] rounded-full"></div>
          <h3 className="text-3xl font-bold serif italic">The Veira Advantage</h3>
          <div className="space-y-8">
            <div className="space-y-2">
              <h4 className="text-[#2D9B9B] text-[10px] font-bold uppercase tracking-[0.4em]">Proprietary Stacks</h4>
              <p className="text-gray-400 font-light text-sm">Our agents utilize live sales hooks that generic AIs can't touch. We bridge the gap between "thinking" and "doing".</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-[#2D9B9B] text-[10px] font-bold uppercase tracking-[0.4em]">Compliance Architecture</h4>
              <p className="text-gray-400 font-light text-sm">We handle the technical complexity of KRA e-TIMS VSCU connections so you don't have to worry about audits.</p>
            </div>
          </div>
          <button className="cta-primary w-full py-6 text-[10px] uppercase tracking-[0.4em] rounded-none">
            Get the Full Spec Sheet
          </button>
        </div>
      </div>

      {/* FAQ Accordion */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold serif italic">Comparison FAQ</h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
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
      </section>

      {/* Internal Linking Footer */}
      <div className="pt-20 border-t border-black/5 flex flex-col md:flex-row justify-between gap-12 items-center">
        <div className="space-y-2">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Further Reading</p>
          <div className="flex gap-8">
            <button onClick={() => { window.history.pushState({}, '', '/blog/e-tims-explained'); window.dispatchEvent(new Event('popstate')); }} className="text-black font-bold serif hover:italic transition-all">e-TIMS Compliance Guide →</button>
            <button onClick={() => { window.history.pushState({}, '', '/blog/pos-cost-guide'); window.dispatchEvent(new Event('popstate')); }} className="text-black font-bold serif hover:italic transition-all">POS Cost Breakdown →</button>
          </div>
        </div>
        <button className="cta-primary px-12 py-5 text-[10px] font-bold uppercase tracking-widest">
          Request Demo
        </button>
      </div>
    </div>
  );
};
