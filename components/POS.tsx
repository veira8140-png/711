
import React from 'react';

export const POS: React.FC = () => {
  const capabilities = [
    { title: 'Fast Counter Sales', desc: 'Minimal taps. Built for speed and accuracy during the busiest hours.' },
    { title: 'Offline Mode', desc: 'Sales continue even when internet or power is unstable. Auto-syncs when back.' },
    { title: 'MPESA & Payments', desc: 'Integrated MPESA, cash, and card payments. Matched automatically to sales.' },
    { title: 'Live Inventory', desc: 'Real-time updates. Automatic detection of low stock or unusual movement.' },
    { title: 'Staff Accountability', desc: 'Every action tied to a user. Complete audit trails for refunds and discounts.' },
    { title: 'WhatsApp Summaries', desc: 'Daily and real-time sales summaries sent directly to your phone.' },
    { title: 'AI-Powered Alerts', desc: 'Notifications for sales drops, inventory mismatches, or missed targets.' },
    { title: 'Multi-Device Ready', desc: 'Optimized for Android POS, desktop, and all-in-one hardware systems.' }
  ];

  return (
    <div id="pos" className="space-y-40">
      {/* Introduction */}
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <div className="space-y-4">
          <span className="text-[#2D9B9B] text-[10px] font-bold uppercase tracking-[0.4em]">The Foundation</span>
          <h2 className="text-5xl md:text-7xl font-bold serif leading-tight">Veira POS. <br/><span className="italic">Where sales turn into intelligence.</span></h2>
        </div>
        <div className="space-y-8 text-xl text-gray-400 font-light leading-relaxed">
          <p>
            Veira POS is where every sale is captured, understood, and acted on. 
            It records transactions at the counter and immediately turns them into insights, alerts, and decisions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm uppercase tracking-widest font-bold">
            <div className="p-4 border border-white/5">Staff use it to sell</div>
            <div className="p-4 border border-white/5 text-white">AI uses it to run</div>
            <div className="p-4 border border-white/5">Owners use it to lead</div>
          </div>
          <p className="text-sm italic">
            Even when the internet is down, the business keeps moving.
          </p>
        </div>
      </div>

      {/* Capabilities Grid */}
      <div className="space-y-20">
        <div className="text-center">
          <h3 className="text-4xl font-bold serif">Core Capabilities</h3>
          <p className="text-gray-500 mt-4">Built for real Kenyan business conditions.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => (
            <div key={i} className="glass p-8 border-white/5 hover:border-[#2D9B9B]/30 transition-all group">
              <div className="mb-4 w-1 h-8 bg-white/5 group-hover:bg-[#2D9B9B] transition-colors"></div>
              <h4 className="text-white font-bold mb-3">{cap.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed font-light">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Use Cases */}
      <div className="glass p-12 md:p-24 border-white/5 bg-gradient-to-br from-[#2D9B9B]/5 to-transparent">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h3 className="text-4xl font-bold serif leading-tight">Reliable in<br/><span className="italic">any scenario.</span></h3>
            <p className="text-gray-400 font-light text-lg">
              Veira handles the chaos of retail so you don't have to. 
              The system watches even when you are not there.
            </p>
          </div>
          <div className="space-y-8">
            {[
              { q: 'Internet goes down?', a: 'Sales continue uninterrupted. Data syncs automatically once back.' },
              { q: 'Want daily updates?', a: 'Tiri sends summaries on WhatsApp. No need to call the shop.' },
              { q: 'Theft or leakage?', a: 'Unusual refunds or stock movement are flagged early, not at month end.' },
              { q: 'Promotion decisions?', a: 'Achi analyzes demand and recommends promotions based on real data.' }
            ].map((use, i) => (
              <div key={i} className="border-b border-white/5 pb-6">
                <p className="text-[#2D9B9B] font-bold text-sm mb-1">{use.q}</p>
                <p className="text-sm text-gray-400 font-light">{use.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Powering */}
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <span className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.4em]">The System of Record</span>
          <h3 className="text-4xl font-bold serif">How POS powers your Agents</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <span className="text-[#2D9B9B] font-bold block">Glenn</span>
            <p className="text-sm text-gray-500 font-light">
              Answers staff questions using live and historical sales data to ensure accurate workflows.
            </p>
          </div>
          <div className="space-y-4">
            <span className="text-[#8A3FA0] font-bold block">Achi</span>
            <p className="text-sm text-gray-500 font-light">
              Launches campaigns based on actual demand and stock levels captured at the counter.
            </p>
          </div>
          <div className="space-y-4">
            <span className="text-[#531753] font-bold block">Tiri</span>
            <p className="text-sm text-gray-500 font-light">
              Monitors daily performance and sends WhatsApp alerts by analyzing transaction patterns.
            </p>
          </div>
        </div>

        <div className="p-8 border border-white/5 bg-white/5 text-center italic text-gray-400 font-light">
          "Without reliable POS data, AI guesses. With Veira POS, AI acts."
        </div>
      </div>

      {/* Summary Footer */}
      <div className="text-center py-20 border-t border-white/5 space-y-10">
        <h3 className="text-3xl font-bold serif">What this means for you</h3>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          {['Sales keep running offline', 'WhatsApp summaries included', 'Problems flagged early', 'Data-backed decisions'].map((benefit, i) => (
            <div key={i} className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold text-gray-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2D9B9B]"></span>
              <span>{benefit}</span>
            </div>
          ))}
        </div>
        <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
          The business runs even when you are away. Stay in control, stay profitable.
        </p>
      </div>
    </div>
  );
};
