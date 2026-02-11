
import React from 'react';

export const Cloud: React.FC = () => {
  const features = [
    {
      title: 'Automatic Cloud Backup',
      desc: 'Never lose a sale or a record. Your data is always safe and recoverable.'
    },
    {
      title: 'Online and Offline Access',
      desc: 'Sell even when the internet is down. Veira Cloud syncs automatically when you reconnect.'
    },
    {
      title: 'Multi-Device and Multi-User Support',
      desc: 'Access your business data from any device and control staff permissions effortlessly.'
    },
    {
      title: 'Seamless Integration',
      desc: 'Veira Cloud works with Svan, Glenn, and Tat. Your AI agents always have the information they need.'
    }
  ];

  return (
    <div id="cloud" className="space-y-40">
      {/* Hero / Vision */}
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <div className="space-y-4">
          <span className="text-[#2D9B9B] text-[10px] font-bold uppercase tracking-[0.4em]">Infrastructure</span>
          <h2 className="text-5xl md:text-7xl font-bold serif leading-tight">Veira Cloud. <br/><span className="italic">Always Connected.</span></h2>
        </div>
        <div className="space-y-6 text-xl text-gray-400 font-light leading-relaxed">
          <p className="text-white">
            Veira Cloud is the backbone of your business.
          </p>
          <p>
            It keeps your operations seamless, your data secure, and your business ready to grow. 
            With Veira Cloud, your shop works online or offline—anywhere, anytime.
          </p>
        </div>
      </div>

      {/* Why it Matters */}
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <h3 className="text-4xl font-bold serif">Why Veira Cloud Matters</h3>
          <p className="text-gray-400 text-lg leading-relaxed font-light">
            Most POS systems tie you to a single device or location. Veira Cloud frees you from those limits. 
            It gives you real-time insights, automatic backups, and multi-device access so you can manage your business on your terms.
          </p>
          <div className="p-8 border border-white/5 bg-white/5 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#2D9B9B]">Security You Can Trust</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Encryption, tamper-proof records, and compliance-ready storage ensure your business is safe and audit-ready at all times.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {features.map((f, i) => (
            <div key={i} className="glass p-8 border-white/5 hover:border-[#2D9B9B]/30 transition-colors group">
              <h4 className="text-white font-bold mb-2 group-hover:text-[#2D9B9B] transition-colors">{f.title}</h4>
              <p className="text-sm text-gray-500 font-light leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Integration with Agents */}
      <div className="glass p-12 md:p-24 border-white/5 bg-gradient-to-br from-white/5 to-transparent">
        <div className="max-w-4xl space-y-16">
          <div className="space-y-4">
            <span className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.4em]">Connectivity</span>
            <h3 className="text-4xl font-bold serif">How it works with your Agents</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <span className="text-white font-bold block pb-2 border-b border-white/5">Svan</span>
              <p className="text-sm text-gray-500 font-light">
                Relies on Veira Cloud to respond to customers instantly and manage daily sales.
              </p>
            </div>
            <div className="space-y-4">
              <span className="text-white font-bold block pb-2 border-b border-white/5">Glenn</span>
              <p className="text-sm text-gray-500 font-light">
                Uses cloud data to provide accurate revenue insights and performance reports.
              </p>
            </div>
            <div className="space-y-4">
              <span className="text-white font-bold block pb-2 border-b border-white/5">Tat</span>
              <p className="text-sm text-gray-500 font-light">
                Monitors compliance, fraud, and KRA filings with complete access to secure records.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Summary / CTA */}
      <div className="text-center space-y-16 py-20 border-t border-white/5">
        <div className="max-w-3xl mx-auto space-y-8">
          <h3 className="text-3xl font-bold serif">The Veira Cloud Difference</h3>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            Veira Cloud is not just storage. It is the central nervous system for your business. 
            It makes your data accessible, actionable, and secure. It allows your business to scale, stay compliant, and remain in control without extra effort.
          </p>
        </div>
        <div className="space-y-6">
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#2D9B9B]">Unlock the power of AI-driven operations</p>
          <button className="cta-button px-16 py-6 font-bold text-xs uppercase tracking-widest shadow-2xl shadow-[#2D9B9B]/20">
            Get Started with Veira Cloud
          </button>
        </div>
      </div>
    </div>
  );
};
