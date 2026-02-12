import React from 'react';

const POSFeature: React.FC<{ title: string; desc: string; icon: string }> = ({ title, desc, icon }) => (
  <div className="glass p-8 border-black/5 flex flex-col items-start gap-4 hover:border-[#2D9B9B]/30 transition-all duration-500 group">
    <div className="w-10 h-10 bg-[#2D9B9B]/10 rounded-full flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div className="space-y-2">
      <h4 className="font-bold text-black uppercase tracking-widest text-xs">{title}</h4>
      <p className="text-sm text-gray-500 font-light leading-relaxed">{desc}</p>
    </div>
  </div>
);

const Scenario: React.FC<{ title: string; situation: string; solution: string }> = ({ title, situation, solution }) => (
  <div className="border-l-2 border-black/5 pl-8 py-4 space-y-4">
    <h4 className="text-lg font-bold serif text-black italic">{title}</h4>
    <div className="space-y-3">
      <p className="text-sm text-gray-400"><span className="font-bold text-[9px] uppercase tracking-widest block mb-1">Situation</span> {situation}</p>
      <p className="text-sm text-black"><span className="font-bold text-[9px] uppercase tracking-widest text-[#2D9B9B] block mb-1">Veira Result</span> {solution}</p>
    </div>
  </div>
);

export const POS: React.FC = () => {
  return (
    <div className="space-y-32 md:space-y-64">
      {/* Intro Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-12">
          <div className="space-y-6">
            <span className="section-label">The Intelligence Layer</span>
            <h2 className="text-5xl md:text-8xl font-black serif text-black leading-[0.9] tracking-tighter">
              Every sale is not <br/><span className="italic text-gray-400">just recorded.</span>
            </h2>
            <p className="text-2xl text-gray-500 font-light leading-relaxed">
              It is captured, understood, and acted on.
            </p>
          </div>
          
          <div className="space-y-8">
            <p className="text-lg text-gray-600 font-light max-w-xl">
              At the counter, staff make sales. Behind the scenes, Veira turns those sales into:
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['Insights', 'Alerts', 'Decisions', 'Intelligence'].map((item) => (
                <div key={item} className="flex items-center gap-3 py-3 border-b border-black/5">
                  <div className="w-1 h-1 bg-[#2D9B9B] rounded-full"></div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-black">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-black p-12 md:p-20 text-white space-y-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#2D9B9B] opacity-10 blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="space-y-6 relative z-10">
            <h3 className="text-3xl font-bold serif italic">The business keeps moving.</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              Staff use it to sell. AI uses it to run the business. Owners use it to stay in control. 
              <span className="text-white block mt-4 font-medium">Even when the internet is down.</span>
            </p>
          </div>
          <div className="pt-10 border-t border-white/10 space-y-6">
            <span className="text-[10px] font-bold text-[#2D9B9B] uppercase tracking-[0.4em]">What Happens When a Sale Is Made</span>
            <div className="space-y-4">
              {[
                "Customer pays.",
                "Veira records.",
                "AI understands.",
                "Owner gains clarity.",
                "Sales become signals.",
                "Trends become alerts."
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 text-sm font-light text-gray-300">
                  <span className="text-[#2D9B9B] font-mono text-[10px]">0{i+1}</span>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Core Features */}
      <div className="space-y-16">
        <div className="text-center space-y-4">
          <span className="section-label mx-auto">Capabilities</span>
          <h3 className="text-4xl md:text-6xl font-bold serif text-black italic">Core Features</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <POSFeature 
            icon="⚡" 
            title="Fast Counter Sales" 
            desc="Minimal taps. Built for speed and accuracy during peak hours." 
          />
          <POSFeature 
            icon="🛡" 
            title="Offline Mode" 
            desc="Internet down? Sales continue. Everything syncs once connectivity returns." 
          />
          <POSFeature 
            icon="💳" 
            title="MPESA & Payments" 
            desc="Matched to sales automatically. No manual entry, no errors." 
          />
          <POSFeature 
            icon="📦" 
            title="Live Inventory" 
            desc="Stock updates instantly. Low stock and unusual movement detected early." 
          />
          <POSFeature 
            icon="👤" 
            title="Accountability" 
            desc="Every action tied to a user. See who sold, refunded, or edited stock." 
          />
          <POSFeature 
            icon="📲" 
            title="WhatsApp Summaries" 
            desc="Daily and real-time sales sent directly to you. No logging in needed." 
          />
          <POSFeature 
            icon="🧠" 
            title="AI Powered Alerts" 
            desc="Unusual refunds? Targets missed? The system notices before you do." 
          />
          <POSFeature 
            icon="🖥" 
            title="Multi-Device Ready" 
            desc="Android POS, desktops, or all-in-one systems. Built for Kenya." 
          />
        </div>
      </div>

      {/* Real World Scenarios */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center bg-gray-50/50 p-8 md:p-20">
        <div className="space-y-8">
          <h3 className="text-4xl font-bold serif text-black leading-tight">Real World <br/><span className="italic text-gray-400">Scenarios.</span></h3>
          <p className="text-gray-500 font-light leading-relaxed">
            Veira isn't just software; it's a partner that understands the specific challenges of Kenyan retail.
          </p>
        </div>
        <div className="space-y-12">
          <Scenario 
            title="Internet goes down"
            situation="A busy shop loses connectivity during the lunch rush."
            solution="The shop keeps selling. Data syncs later without a single lost transaction."
          />
          <Scenario 
            title="Owner wants daily updates"
            situation="Owner is away on business and needs to know performance."
            solution="Sales arrive automatically on WhatsApp. No calls, no stress."
          />
          <Scenario 
            title="Leakage starts quietly"
            situation="Minor stock deviations start happening consistently."
            solution="Unusual activity is flagged early. You fix it before it grows into a loss."
          />
        </div>
      </div>

      {/* AI Integration Section */}
      <div className="max-w-5xl mx-auto text-center space-y-16">
        <div className="space-y-6">
          <span className="section-label mx-auto">The AI Foundation</span>
          <h3 className="text-4xl md:text-7xl font-bold serif text-black leading-tight">How POS Powers <br/><span className="italic text-gray-400">the AI Agents.</span></h3>
          <p className="text-xl text-gray-500 font-light leading-relaxed max-w-3xl mx-auto">
            Veira POS is the foundation. Without clean data, AI guesses. With Veira POS, every AI decision starts at the counter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          {[
            { name: 'Glenn', role: 'Strategic Advisor', desc: 'Answers questions using real sales history to suggest growth paths.' },
            { name: 'Achi', role: 'Campaign Manager', desc: 'Launches promotions based on actual demand and customer behavior.' },
            { name: 'Tiri', role: 'Operations Guard', desc: 'Monitors daily performance and sends instant WhatsApp alerts.' }
          ].map((agent) => (
            <div key={agent.name} className="space-y-4 p-8 bg-white border border-black/5 hover:border-[#2D9B9B] transition-colors">
              <h4 className="text-2xl font-bold serif text-black">{agent.name}</h4>
              <p className="text-xs font-bold uppercase tracking-widest text-[#2D9B9B]">{agent.role}</p>
              <p className="text-sm text-gray-500 font-light leading-relaxed">{agent.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Footer */}
      <div className="bg-[#2D9B9B] p-12 md:p-24 text-white text-center space-y-12">
        <h3 className="text-3xl md:text-5xl font-bold serif italic">What This Means for You</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left max-w-6xl mx-auto">
          {[
            "Sales continue even offline.",
            "Daily summaries arrive automatically.",
            "Problems are flagged early.",
            "Stock and staff are visible.",
            "Decisions are backed by data.",
            "The business runs while you're away."
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="text-white/40 font-mono text-sm pt-1">0{i+1}</span>
              <p className="text-lg font-light leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
        <div className="pt-12">
          <button className="bg-black text-white px-16 py-6 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">
            Experience the Intelligence
          </button>
        </div>
      </div>
    </div>
  );
};