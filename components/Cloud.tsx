import React from 'react';

const CloudFeature: React.FC<{ title: string; desc: string; icon: string }> = ({ title, desc, icon }) => (
  <div className="glass p-8 border-black/5 hover:border-[#2D9B9B]/30 transition-all duration-500 group flex flex-col items-start gap-4">
    <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center text-xl group-hover:bg-[#2D9B9B]/10 group-hover:scale-110 transition-all">
      {icon}
    </div>
    <div className="space-y-2">
      <h4 className="font-bold text-black uppercase tracking-widest text-[10px]">{title}</h4>
      <p className="text-sm text-gray-500 font-light leading-relaxed">{desc}</p>
    </div>
  </div>
);

export const Cloud: React.FC = () => {
  return (
    <div id="cloud" className="space-y-32 md:space-y-64">
      {/* Intro Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <span className="section-label">Central Nervous System</span>
            <h2 className="text-5xl md:text-8xl font-black serif text-black leading-[0.9] tracking-tighter">
              Veira Cloud <br/><span className="italic text-gray-400">frees you.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-xl">
              Most POS systems tie you to a single device or location. We give you total freedom.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-4">
              {[
                "Real time insights across devices",
                "Automatic backups you never worry about",
                "Access your business anytime, anywhere"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-5 h-5 bg-[#2D9B9B]/10 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-[#2D9B9B] rounded-full"></div>
                  </div>
                  <span className="text-lg text-gray-700 font-light">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-xl font-bold serif italic text-black pt-8 border-t border-black/5">
              "Your business moves at your pace. Not the software’s."
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-10 bg-[#2D9B9B]/5 blur-[100px] rounded-full"></div>
          <div className="relative glass p-12 md:p-20 border-black/5 space-y-10">
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-[#2D9B9B] uppercase tracking-[0.4em]">The Core Benefits</span>
              <h3 className="text-3xl font-bold serif text-black">Infrastructure for Growth</h3>
            </div>
            <div className="space-y-6">
              <p className="text-gray-500 font-light leading-relaxed">
                Veira Cloud is not just storage. It is the central nervous system of your business. It makes your data accessible, keeps you compliant, and lets you stay in control from anywhere.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Tamper-proof", "Audit-ready", "Scalable", "Secure"].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-black text-white text-[9px] font-bold uppercase tracking-widest">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="space-y-16">
        <div className="text-center space-y-4">
          <span className="section-label mx-auto">Powering Your Business</span>
          <h3 className="text-4xl md:text-6xl font-bold serif text-black italic text-center">Cloud Power Ups</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CloudFeature 
            icon="☁"
            title="Automatic Cloud Backup"
            desc="Never lose a sale or record. Your data is safe, recoverable, and always accurate."
          />
          <CloudFeature 
            icon="🌐"
            title="Online and Offline Access"
            desc="Sell even when the internet is down. Everything syncs automatically when you reconnect."
          />
          <CloudFeature 
            icon="🖥"
            title="Multi-Device & Multi-User"
            desc="Access business data from any device. Control staff permissions with ease."
          />
          <CloudFeature 
            icon="🔗"
            title="Seamless Integration"
            desc="Works perfectly with AI agents Achi, Glenn, and Tiri. AI gets the data it needs to act fast."
          />
          <CloudFeature 
            icon="🔒"
            title="Security You Can Trust"
            desc="Encryption, tamper-proof records, and compliance-ready storage make you audit-ready."
          />
          <div className="bg-[#2D9B9B] p-8 flex flex-col justify-center items-center text-center text-white space-y-6">
             <p className="text-sm uppercase tracking-widest font-bold">Scale without work</p>
             <h4 className="text-2xl serif font-bold italic">Ready to grow?</h4>
             <button className="bg-white text-black px-8 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">Connect Now</button>
          </div>
        </div>
      </div>

      {/* AI Integration Section */}
      <div className="bg-black text-white p-12 md:p-24 space-y-20">
        <div className="max-w-4xl space-y-6">
          <span className="text-[#2D9B9B] text-[10px] font-bold uppercase tracking-[0.4em]">Intelligence Foundation</span>
          <h3 className="text-4xl md:text-6xl font-bold serif italic">How Veira Cloud <br/>Powers Your AI Agents</h3>
          <p className="text-gray-400 text-xl font-light">Without Cloud, AI guesses. With Veira Cloud, AI acts.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-white/10 pt-20">
          <div className="space-y-6">
            <h4 className="text-2xl font-bold serif text-[#2D9B9B]">Achi</h4>
            <p className="text-gray-400 font-light leading-relaxed">
              Responds to customers instantly and manages daily sales interactions using real-time inventory and pricing data.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-2xl font-bold serif text-[#2D9B9B]">Glenn</h4>
            <p className="text-gray-400 font-light leading-relaxed">
              Gives accurate revenue insights and performance reports by analyzing your entire history stored securely in the cloud.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-2xl font-bold serif text-[#2D9B9B]">Tiri</h4>
            <p className="text-gray-400 font-light leading-relaxed">
              Monitors compliance, fraud, and KRA filings using secure cloud records to protect your business from risk.
            </p>
          </div>
        </div>
      </div>

      {/* Final Summary & CTA */}
      <div className="max-w-4xl mx-auto text-center space-y-16">
        <div className="space-y-6">
          <h3 className="text-4xl md:text-7xl font-bold serif text-black">The Veira Cloud <span className="italic">Difference.</span></h3>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
            It is not just storage. It's the central nervous system that keeps your business actionable, secure, and ready to scale.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {[
            "Makes your data accessible and actionable",
            "Keeps your business compliant and secure",
            "Supports scale without adding work",
            "Lets you stay in control, from anywhere"
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-6 border border-black/5 bg-white">
              <span className="text-[#2D9B9B] font-bold">✓</span>
              <p className="text-gray-700 font-medium">{item}</p>
            </div>
          ))}
        </div>

        <div className="pt-10">
          <button className="cta-primary px-16 py-8 text-xs font-bold uppercase tracking-[0.3em] w-full sm:w-auto">
            Get Started with Veira Cloud Today
          </button>
          <p className="mt-8 text-gray-400 text-[10px] uppercase tracking-widest font-bold">
            Connect your business • Protect your data • Unlock AI
          </p>
        </div>
      </div>
    </div>
  );
};