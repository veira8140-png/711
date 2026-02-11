
import React from 'react';
import { Orb } from './Orb.tsx';

export const Enterprise: React.FC = () => {
  return (
    <div id="enterprise" className="space-y-60 py-20">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="flex justify-center mb-8">
          <Orb size="lg" className="opacity-80" />
        </div>
        <div className="space-y-6">
          <span className="text-[#8A3FA0] text-[10px] font-bold uppercase tracking-[0.4em]">Scale with Certainty</span>
          <h2 className="text-5xl md:text-7xl font-bold serif leading-tight">
            Run complex organizations with <span className="italic">clarity, control, and confidence.</span>
          </h2>
          <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
            Whether you operate multiple offices, service centers, factories, or logistics networks, Veira gives leaders full visibility, accountability, and actionable insights, so you can scale without losing control.
          </p>
        </div>
        <button className="cta-button px-12 py-5 rounded-none font-bold text-xs uppercase tracking-widest shadow-2xl shadow-[#2D9B9B]/20">
          Talk To Us →
        </button>
      </div>

      {/* Why Veira for Enterprise */}
      <div className="space-y-20">
        <div className="text-center">
          <h3 className="text-4xl font-bold serif">Why Veira for Enterprise</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Centralized Oversight', desc: 'Monitor multiple sites and teams in real time with consolidated performance data.', color: '#8A3FA0' },
            { title: 'AI-Driven Decisions', desc: 'Glenn, Achi, and Tiri work together to reduce errors and handle complex comms at scale.', color: '#2D9B9B' },
            { title: 'Reliable Infrastructure', desc: 'Secure, real-time synchronization across all locations and devices, always up to date.', color: '#531753' },
            { title: 'Operational Certainty', desc: 'Automated reporting and anomaly detection reduce dependency on manual checks.', color: '#ffffff' }
          ].map((item, i) => (
            <div key={i} className="glass p-8 border-white/5 space-y-6 group hover:border-white/20 transition-all">
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: item.color }}></div>
              </div>
              <h4 className="text-white font-bold text-lg leading-snug">{item.title}</h4>
              <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Agents for Enterprise */}
      <div className="space-y-20">
        <div className="max-w-3xl space-y-4">
          <span className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.4em]">The Intelligence Layer</span>
          <h3 className="text-4xl font-bold serif">AI Agents for Enterprise</h3>
          <p className="text-gray-400 font-light italic">Glenn, Achi, and Tiri, enhanced for high-scale operations.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass p-10 border-white/5 space-y-6">
            <h4 className="text-2xl font-bold serif text-[#2D9B9B]">Glenn</h4>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Operations Agent</p>
            <ul className="text-sm text-gray-400 space-y-3 font-light">
              <li>• Guides teams in real time across sites</li>
              <li>• Resolves issues without manager oversight</li>
              <li>• Supports staff training and workflows</li>
            </ul>
          </div>
          <div className="glass p-10 border-white/5 space-y-6">
            <h4 className="text-2xl font-bold serif text-[#8A3FA0]">Achi</h4>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Sales & Marketing Agent</p>
            <ul className="text-sm text-gray-400 space-y-3 font-light">
              <li>• Automates campaigns across departments</li>
              <li>• Follows up leads via calls and emails</li>
              <li>• Optimizes revenue and tracks ROI</li>
            </ul>
          </div>
          <div className="glass p-10 border-white/5 space-y-6">
            <h4 className="text-2xl font-bold serif text-[#531753]">Tiri</h4>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Manager Agent</p>
            <ul className="text-sm text-gray-400 space-y-3 font-light">
              <li>• Monitors performance and compliance</li>
              <li>• Sends direct reports to leadership</li>
              <li>• Detects anomalies and operational gaps</li>
            </ul>
          </div>
        </div>

        <div className="p-12 border-l-2 border-[#2D9B9B] bg-white/5 space-y-6">
          <h4 className="text-xl font-bold serif text-white italic">Enterprise-Exclusive Capabilities</h4>
          <div className="grid md:grid-cols-2 gap-12 text-sm text-gray-300 font-light">
            <p>AI agents handle inbound and outbound calls for leads, clients, or partners—scheduling appointments and confirming orders automatically.</p>
            <p>Reduce human workload while increasing responsiveness and customer satisfaction through integrated voice and messaging intelligence.</p>
          </div>
        </div>
      </div>

      {/* Cloud for Enterprise */}
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div className="space-y-10">
          <div className="space-y-4">
            <span className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.4em]">Infrastructure</span>
            <h3 className="text-4xl font-bold serif leading-tight">Always Synced,<br/>Always Secure.</h3>
          </div>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            Veira Cloud connects all locations, teams, and devices into one reliable system. 
            Real-time synchronization across sites ensures your data is never siloed.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h5 className="text-white font-bold text-sm mb-2 uppercase tracking-tighter">Resilience</h5>
              <p className="text-xs text-gray-500 leading-relaxed">Automatic backups and disaster recovery protocols.</p>
            </div>
            <div>
              <h5 className="text-white font-bold text-sm mb-2 uppercase tracking-tighter">Access Control</h5>
              <p className="text-xs text-gray-500 leading-relaxed">Role-based security for secure remote oversight.</p>
            </div>
          </div>
        </div>
        <div className="relative p-20 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8A3FA0]/10 to-transparent rounded-full blur-3xl"></div>
          <Orb size="xl" className="opacity-40 animate-pulse" />
          <div className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-[0.5em] text-white/20 font-bold">
            Cloud Core
          </div>
        </div>
      </div>

      {/* Apps for Enterprise */}
      <div className="space-y-20">
        <div className="text-center space-y-4">
          <h3 className="text-4xl font-bold serif">Apps for Enterprise</h3>
          <p className="text-gray-400 font-light">Modern, Maintained, and Fully Managed.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { name: 'Owner App', features: ['Full oversight', 'Remote approvals', 'Performance summaries'] },
            { name: 'Staff App', features: ['Fast workflows', 'Built-in Glenn guidance', 'Offline sync'] },
            { name: 'Customer App', features: ['Loyalty & engagement', 'Order tracking', 'Achi notifications'] }
          ].map((app, i) => (
            <div key={i} className="glass p-12 border-white/5 space-y-6 text-center group">
              <h4 className="text-xl font-bold text-white">{app.name}</h4>
              <ul className="space-y-4 text-xs text-gray-500 uppercase tracking-widest font-bold">
                {app.features.map((f, j) => (
                  <li key={j} className="pb-2 border-b border-white/5 last:border-0">{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center text-sm text-gray-500 italic max-w-2xl mx-auto">
          "Veira builds, modernizes, and maintains apps for your enterprise, so you never worry about updates, security, or usability."
        </div>
      </div>

      {/* Enterprise Use Cases */}
      <div className="glass p-12 md:p-24 border-white/5 bg-gradient-to-tr from-white/5 to-transparent space-y-20">
        <div className="space-y-4">
          <span className="text-[#2D9B9B] text-[10px] font-bold uppercase tracking-[0.4em]">Applications</span>
          <h3 className="text-4xl font-bold serif">Enterprise Scenarios</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { title: 'Multi-Site Oversight', desc: 'Monitor and compare performance across offices, branches, or factories with ease.' },
            { title: 'Risk & Compliance', desc: 'Tiri flags irregular activity while Glenn provides corrective guidance to ground teams.' },
            { title: 'Lead Engagement', desc: 'Achi automates campaigns, calls, and follow-ups to increase ROI at scale.' },
            { title: 'Voice Management', desc: 'AI handles inbound calls and executes outbound calls to track interactions seamlessly.' },
            { title: 'Remote Management', desc: 'Leaders view real-time insights from anywhere in the world, ensuring control.' }
          ].map((uc, i) => (
            <div key={i} className="space-y-3">
              <h5 className="text-white font-bold italic">{i + 1}. {uc.title}</h5>
              <p className="text-sm text-gray-500 font-light leading-relaxed">{uc.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Closing CTA */}
      <div className="text-center py-40 space-y-12">
        <h3 className="text-5xl font-bold serif leading-tight max-w-3xl mx-auto">
          Scale your operations with clarity, <span className="italic">protect your resources, empower your people.</span>
        </h3>
        <button className="cta-button px-16 py-6 font-bold text-xs uppercase tracking-widest shadow-2xl shadow-[#2D9B9B]/20">
          Talk To Us
        </button>
      </div>
    </div>
  );
};
