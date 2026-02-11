import React from 'react';

const CapabilityCard: React.FC<{ title: string; desc: string; number: string }> = ({ title, desc, number }) => (
  <div className="space-y-4 group">
    <div className="w-10 h-10 border border-black/10 flex items-center justify-center text-[10px] font-bold group-hover:bg-black group-hover:text-white transition-all duration-500">
      {number}
    </div>
    <h4 className="font-bold text-black text-lg">{title}</h4>
    <p className="text-sm text-gray-500 font-light leading-relaxed">{desc}</p>
  </div>
);

const UseCase: React.FC<{ title: string; desc: string; icon: string }> = ({ title, desc, icon }) => (
  <div className="p-8 border border-black/5 bg-white/50 backdrop-blur-sm space-y-4 hover:border-black/10 transition-all">
    <div className="text-2xl">{icon}</div>
    <h5 className="font-bold text-black uppercase tracking-widest text-[10px]">{title}</h5>
    <p className="text-sm text-gray-600 font-light leading-relaxed">{desc}</p>
  </div>
);

export const POS: React.FC = () => {
  return (
    <div className="space-y-32 md:space-y-48">
      {/* Intro Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="section-label">POS Architecture</span>
            <h2 className="text-4xl md:text-7xl font-bold serif text-black leading-tight">
              Where sales turn into <br/><span className="italic text-gray-400">intelligence.</span>
            </h2>
          </div>
          <div className="space-y-6 text-lg md:text-xl text-gray-500 font-light leading-relaxed">
            <p>
              Veira POS is where every sale is captured, understood, and acted on. 
              It records transactions at the counter and immediately turns them into insights, alerts, and decisions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-black/5">
              <div className="space-y-1">
                <p className="text-black font-bold uppercase text-[9px] tracking-widest">Staff</p>
                <p className="text-xs text-gray-400">Use it to sell.</p>
              </div>
              <div className="space-y-1">
                <p className="text-black font-bold uppercase text-[9px] tracking-widest">AI</p>
                <p className="text-xs text-gray-400">Uses it to run.</p>
              </div>
              <div className="space-y-1">
                <p className="text-black font-bold uppercase text-[9px] tracking-widest">Owners</p>
                <p className="text-xs text-gray-400">Stay in control.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="glass p-8 md:p-12 space-y-8 border-black/5">
          <h3 className="text-2xl font-bold serif text-black italic">What Veira POS does</h3>
          <div className="space-y-6 text-gray-600 font-light leading-relaxed">
            <p>
              Veira POS handles selling, payments, stock, and staff activity in one system. 
              At the same time, it feeds clean, reliable data to Veira’s AI agents.
            </p>
            <p>
              This allows the system to not only record what happened, but respond to it. 
              Sales become messages. Trends become alerts. Problems surface before they grow.
            </p>
            <p className="font-medium text-black italic">
              "Even when the internet is down, the business keeps moving."
            </p>
          </div>
        </div>
      </div>

      {/* Core Capabilities Grid */}
      <div className="space-y-16">
        <div className="text-center space-y-4">
          <span className="section-label mx-auto">Engineered Precision</span>
          <h3 className="text-3xl md:text-5xl font-bold serif text-black">Core Capabilities</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-x-12 md:gap-y-16">
          <CapabilityCard 
            number="01" 
            title="Fast Counter Sales" 
            desc="Minimal taps. Built for extreme speed and accuracy during peak hours."
          />
          <CapabilityCard 
            number="02" 
            title="Offline Mode" 
            desc="Sales continue even when internet or power is unstable. Auto-syncs when back online."
          />
          <CapabilityCard 
            number="03" 
            title="M-PESA Integration" 
            desc="Payments matched to sales automatically without manual reconciliation errors."
          />
          <CapabilityCard 
            number="04" 
            title="Live Inventory" 
            desc="Real-time updates. Low stock and unusual movement detected as they happen."
          />
          <CapabilityCard 
            number="05" 
            title="Staff Accountability" 
            desc="Every action tied to a user. See who sold, refunded, or edited stock in detail."
          />
          <CapabilityCard 
            number="06" 
            title="WhatsApp Summaries" 
            desc="Daily and real-time sales sent directly to your phone. No chasing reports."
          />
          <CapabilityCard 
            number="07" 
            title="AI Powered Alerts" 
            desc="Get notified when sales drop or stock moves unusually. The system watches 24/7."
          />
          <CapabilityCard 
            number="08" 
            title="Hardware Ready" 
            desc="Optimized for Android POS, desktops, and all-in-one systems in Kenyan shops."
          />
        </div>
      </div>

      {/* Use Cases */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <UseCase 
          icon="🌐"
          title="Internet goes down" 
          desc="Sales continue without interruption. Data syncs automatically once connection returns." 
        />
        <UseCase 
          icon="📱"
          title="Daily updates" 
          desc="Tiri sends daily performance summaries on WhatsApp. No need to call the shop." 
        />
        <UseCase 
          icon="🔍"
          title="Theft or leakage" 
          desc="Unusual refunds or stock movement are flagged early, not at month end." 
        />
        <UseCase 
          icon="📈"
          title="Promotion decisions" 
          desc="Achi analyzes selling patterns and recommends promotions based on real demand." 
        />
      </div>

      {/* Agent Integration Block */}
      <div className="bg-black text-white p-12 md:p-24 space-y-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full"></div>
        <div className="max-w-3xl space-y-8">
          <span className="text-purple-400 text-[10px] font-bold uppercase tracking-[0.4em]">The Intelligence Engine</span>
          <h3 className="text-3xl md:text-5xl font-bold serif leading-tight">
            How POS powers the <br/><span className="italic">AI agents.</span>
          </h3>
          <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
            Veira POS is the system of record. Without reliable POS data, AI guesses. With Veira POS, AI acts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="space-y-2 border-l border-white/10 pl-6">
              <span className="text-white font-bold serif">Glenn</span>
              <p className="text-xs text-gray-500">Answers questions using live and historical sales data.</p>
            </div>
            <div className="space-y-2 border-l border-white/10 pl-6">
              <span className="text-white font-bold serif">Achi</span>
              <p className="text-xs text-gray-500">Launches campaigns based on actual demand and stock levels.</p>
            </div>
            <div className="space-y-2 border-l border-white/10 pl-6">
              <span className="text-white font-bold serif">Tiri</span>
              <p className="text-xs text-gray-500">Monitors performance and sends WhatsApp alerts automatically.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Final Summary Checklist */}
      <div className="max-w-4xl mx-auto space-y-12">
        <h3 className="text-2xl md:text-4xl font-bold serif text-center text-black italic">What this means for you</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {[
            "Sales keep running even offline",
            "Daily sales arrive on WhatsApp automatically",
            "Problems are flagged early",
            "Stock and staff are 100% visible",
            "Decisions are data-backed, not guessed",
            "The business runs even when you are away"
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-4 text-black font-medium border-b border-black/5 pb-4">
              <span className="text-[#2D9B9B] shrink-0">✔</span>
              <span className="text-sm md:text-base">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};