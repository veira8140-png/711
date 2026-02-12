import React from 'react';

const ComparisonRow: React.FC<{ feature: string; human: string; cost: string; veira: string }> = ({ feature, human, cost, veira }) => (
  <tr className="border-b border-black/5 group hover:bg-black/[0.02] transition-colors">
    <td className="py-6 pr-4 font-bold text-black text-sm">{feature}</td>
    <td className="py-6 px-4 text-gray-500 text-sm font-light italic">{human}</td>
    <td className="py-6 px-4 text-red-400 text-sm font-light line-through">{cost}</td>
    <td className="py-6 pl-4 text-right">
      <span className="bg-black/5 text-black text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-full">
        {veira}
      </span>
    </td>
  </tr>
);

export const Pricing: React.FC = () => {
  return (
    <div id="pricing" className="space-y-32 md:space-y-64 py-20">
      {/* Hero / Core Model */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="section-label">Investment Model</span>
            <h2 className="text-5xl md:text-8xl font-black serif text-black leading-[0.9] tracking-tighter">
              You only pay when <br/><span className="italic text-gray-400">you profit.</span>
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-xl">
            No upfront hardware costs. No fixed subscriptions. Your 24/7 Digital Business Assistant that scales as you do.
          </p>
          <div className="pt-6">
            <button className="cta-primary px-16 py-8 font-bold text-[10px] uppercase tracking-[0.4em] w-full sm:w-auto">
              Start Using Veira Today
            </button>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-black/5 blur-3xl rounded-full group-hover:bg-black/10 transition-all duration-1000"></div>
          <div className="relative glass p-8 md:p-16 border-black/10 space-y-12 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 bg-black text-white px-6 py-2 text-[10px] font-bold uppercase tracking-widest">
              Success Plan
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-bold serif text-black italic">How Pricing Works</h3>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Built for Kenyan Retail Growth</p>
            </div>

            <div className="space-y-8">
              <div className="flex justify-between items-end border-b border-black/5 pb-6">
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-black">Setup Fee</h4>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black serif">KES 3,500</span>
                </div>
              </div>

              <div className="flex justify-between items-end border-b border-black/5 pb-6">
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-black">Hardware</h4>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black serif text-gray-400">FREE</span>
                </div>
              </div>

              <div className="flex justify-between items-end border-b border-black/5 pb-6">
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-black">Revenue Share</h4>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black serif">1%</span>
                </div>
              </div>
            </div>

            <div className="bg-black text-white p-6 space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Included for Everyone</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                {["24/7 AI Agents", "WhatsApp Assistance", "Mobile App Access", "Tax Notifications", "ETIMS Integration", "Real-time Alerts"].map(item => (
                  <div key={item} className="flex items-center gap-2 text-[10px] font-light opacity-80">
                    <span className="text-gray-600">✓</span> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="section-label mx-auto">Value Engineering</span>
          <h3 className="text-4xl md:text-6xl font-bold serif text-black italic text-center">Veira vs. Hiring Humans</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[800px]">
            <thead>
              <tr className="border-b-2 border-black/5">
                <th className="py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Feature</th>
                <th className="py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Human Equivalent</th>
                <th className="py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Estimated Monthly Cost</th>
                <th className="py-4 text-right text-[10px] font-bold uppercase tracking-widest text-gray-400">With Veira</th>
              </tr>
            </thead>
            <tbody>
              <ComparisonRow feature="24/7 Sales Monitoring" human="2–3 employees" cost="KES 80,000+" veira="Included" />
              <ComparisonRow feature="Inventory & Stock" human="1–2 employees" cost="KES 40,000+" veira="Included" />
              <ComparisonRow feature="Analytics" human="1 analyst" cost="KES 60,000+" veira="Included" />
              <ComparisonRow feature="Setup & Training" human="3 agents" cost="KES 150,000+" veira="KES 3,500" />
              <ComparisonRow feature="Compliance" human="Officer" cost="KES 50,000+" veira="Automated" />
            </tbody>
          </table>
        </div>
      </div>

      {/* RoadMap */}
      <div className="space-y-24 bg-black text-white p-12 md:p-32">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-white/5 hidden md:block"></div>
          {[
            { t: "Sign up", d: "Pay setup fee." },
            { t: "Get Free POS", d: "Delivered to you." },
            { t: "Connect App", d: "Alerts go live." },
            { t: "Automate", d: "Monitor everything." },
            { t: "Success Share", d: "Pay as you earn." }
          ].map((step, i) => (
            <div key={i} className="space-y-6 text-center relative z-10 bg-black">
              <div className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center mx-auto text-sm font-black serif text-gray-400 bg-black">
                {i + 1}
              </div>
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-widest text-white">{step.t}</h4>
                <p className="text-[11px] text-gray-500 font-light leading-relaxed px-4">{step.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-20 text-center space-y-12">
          <div className="pt-8">
            <button className="cta-primary px-20 py-8 font-bold text-[10px] uppercase tracking-[0.4em] w-full sm:w-auto">
              Get Started — KES 3,500 Setup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};