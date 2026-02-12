import React from 'react';

const EnterpriseFeature: React.FC<{ title: string; points: string[]; color?: string }> = ({ title, points, color = "#2D9B9B" }) => (
  <div className="glass p-8 md:p-12 border-black/5 flex flex-col gap-6 hover:border-[#2D9B9B]/20 transition-all duration-500">
    <div className="space-y-4">
      <div className="w-8 h-[1px]" style={{ backgroundColor: color }}></div>
      <h4 className="text-2xl font-bold serif text-black leading-tight">{title}</h4>
    </div>
    <ul className="space-y-3">
      {points.map((p, i) => (
        <li key={i} className="text-sm text-gray-500 font-light flex items-start gap-2">
          <span className="text-[#2D9B9B]">•</span>
          {p}
        </li>
      ))}
    </ul>
  </div>
);

export const Enterprise: React.FC = () => {
  return (
    <div id="enterprise" className="space-y-32 md:space-y-64">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <div className="space-y-6">
          <span className="section-label mx-auto">Enterprise Intelligence</span>
          <h2 className="text-5xl md:text-[7rem] font-black serif leading-[0.9] tracking-tighter text-black">
            Built for <br/><span className="italic text-gray-400">Complexity.</span>
          </h2>
          <p className="text-xl md:text-3xl text-gray-500 font-light leading-relaxed max-w-4xl mx-auto">
            Whether you operate multiple offices, service centers, factories, or logistics networks, Veira gives you full visibility across every location.
          </p>
        </div>
        <div className="space-y-6">
          <p className="text-lg font-bold serif italic text-black">
            "You do not lose control as you grow. You gain structure."
          </p>
          <button className="cta-primary px-16 py-6 font-bold text-[10px] uppercase tracking-[0.3em]">
            Talk to Us
          </button>
        </div>
      </div>

      {/* Why Veira for Enterprise */}
      <div className="space-y-16">
        <div className="text-center space-y-4">
          <h3 className="text-4xl md:text-6xl font-bold serif text-black italic">Why Veira for Enterprise</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <EnterpriseFeature 
            title="Centralized Oversight"
            points={[
              "Multiple sites. Multiple teams. One clear view.",
              "Monitor performance and risks in real time.",
              "No spreadsheets. No fragmented reports. No blind spots."
            ]}
          />
          <EnterpriseFeature 
            title="AI Driven Decisions"
            points={[
              "Glenn, Achi, and Tiri working together.",
              "Reduce operational errors automatically.",
              "Automate communication at scale across sites."
            ]}
            color="#8b5cf6"
          />
          <EnterpriseFeature 
            title="Reliable Infrastructure"
            points={[
              "Always synced. Always accurate. Always protected.",
              "Data updates across locations instantly.",
              "Enterprise grade protection and role-based access."
            ]}
            color="#000"
          />
          <EnterpriseFeature 
            title="Operational Certainty"
            points={[
              "The system watches constantly so you don't have to.",
              "Automated reporting and anomaly detection.",
              "Operations keep moving without manual checks."
            ]}
          />
        </div>
      </div>

      {/* AI Agents for Enterprise */}
      <div className="bg-black text-white p-12 md:p-24 space-y-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2D9B9B] opacity-[0.03] blur-[150px] rounded-full"></div>
        <div className="max-w-4xl space-y-6 relative z-10">
          <span className="text-[#2D9B9B] text-[10px] font-bold uppercase tracking-[0.4em]">Autonomous Workforce</span>
          <h3 className="text-4xl md:text-6xl font-bold serif italic">AI Agents for Enterprise</h3>
          <p className="text-gray-400 text-xl font-light">Without structure, AI guesses. With Veira, AI acts.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
          <div className="space-y-6">
            <h4 className="text-2xl font-bold serif text-white">Glenn <span className="text-gray-500 font-light">— Operations</span></h4>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Guides teams in real time across sites. Resolves operational issues and supports staff with workflows, reducing dependency on middle management.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-2xl font-bold serif text-white">Achi <span className="text-gray-500 font-light">— Growth</span></h4>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Automates campaigns across departments. Follows up leads via calls and messages, optimizing revenue and tracking ROI for predictable growth.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-2xl font-bold serif text-white">Tiri <span className="text-gray-500 font-light">— Management</span></h4>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Monitors performance, risk, and compliance. Detects anomalies and sends weekly summaries to leadership, ensuring nothing important is missed.
            </p>
          </div>
        </div>

        <div className="pt-20 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="space-y-4">
            <h4 className="text-2xl font-bold serif italic text-[#2D9B9B]">Exclusive Voice Capabilities</h4>
            <p className="text-gray-400 max-w-xl text-sm font-light">
              AI agents handle inbound and outbound calls, schedule appointments, and confirm orders automatically. Human workload decreases while responsiveness increases.
            </p>
          </div>
          <button className="bg-[#2D9B9B] text-white px-12 py-5 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">Explore AI Voice</button>
        </div>
      </div>

      {/* Enterprise Apps Section */}
      <div className="space-y-16">
        <div className="text-center space-y-4">
          <span className="section-label mx-auto">The Ecosystem</span>
          <h3 className="text-4xl md:text-6xl font-bold serif text-black italic">Apps for Enterprise</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/5 border border-black/5">
          <div className="bg-white p-12 space-y-6">
            <h4 className="text-xl font-bold serif text-black">Owner App</h4>
            <p className="text-sm text-gray-500 font-light leading-relaxed">Full oversight. Alerts. Remote approvals. Performance summaries available on any device.</p>
          </div>
          <div className="bg-white p-12 space-y-6">
            <h4 className="text-xl font-bold serif text-black">Staff App</h4>
            <p className="text-sm text-gray-500 font-light leading-relaxed">Fast, intuitive workflows. Built-in guidance from Glenn. Clear accountability for every action.</p>
          </div>
          <div className="bg-white p-12 space-y-6">
            <h4 className="text-xl font-bold serif text-black">Customer App</h4>
            <p className="text-sm text-gray-500 font-light leading-relaxed">Loyalty and engagement. Order tracking and campaigns powered by Achi's demand intelligence.</p>
          </div>
        </div>
      </div>

      {/* Enterprise Use Cases */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-10">
          <h3 className="text-4xl md:text-7xl font-bold serif text-black leading-tight">Enterprise <br/><span className="italic text-gray-400">Use Cases.</span></h3>
          <p className="text-gray-500 text-lg font-light leading-relaxed max-w-lg">
            How we solve the most common challenges for large-scale operations in Kenya.
          </p>
        </div>
        <div className="space-y-10">
          {[
            { t: "Multi-Site Oversight", d: "Compare KPIs across branches and identify risks early with consolidated insights." },
            { t: "Risk & Compliance", d: "Tiri flags irregular activity while Glenn guides corrective action for audit-ready records." },
            { t: "Sales & Engagement", d: "Achi automates campaigns and follow-ups, increasing revenue without adding headcount." },
            { t: "Voice & Call Management", d: "AI handles inbound client calls and makes outbound prospect calls automatically." },
            { t: "Remote Management", d: "Leaders see performance from anywhere, making data-backed decisions offsite." }
          ].map((item, i) => (
            <div key={i} className="flex gap-8 group">
              <span className="text-[#2D9B9B] font-mono text-sm pt-1">0{i+1}</span>
              <div className="space-y-2">
                <h4 className="text-lg font-bold serif text-black group-hover:italic transition-all">{item.t}</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final Outcome CTA */}
      <div className="text-center py-20 md:py-40 bg-[#2D9B9B] text-white space-y-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <h3 className="text-4xl md:text-8xl font-black serif leading-[0.9]">
            Enterprise + Veira = <br/>
            <span className="italic text-white/50">Clarity at scale.</span>
          </h3>
          <p className="text-xl md:text-2xl font-light">
            Scale your operations. Protect your resources. Empower your people.
          </p>
        </div>
        <div className="pt-8 flex flex-col items-center gap-6">
          <button className="bg-black text-white px-20 py-7 text-xs font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all">
            Talk to Us
          </button>
          <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">Consultation • Implementation • Growth</p>
        </div>
      </div>
    </div>
  );
};