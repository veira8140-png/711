import React from 'react';

const DifferenceCard: React.FC<{ title: string; desc: string; accentColor: string }> = ({ title, desc, accentColor }) => (
  <div className="bg-white/40 backdrop-blur-xl p-10 border border-black/5 space-y-6 group transition-all duration-700 hover:border-black/20">
    <div className="w-10 h-[1px]" style={{ backgroundColor: accentColor }}></div>
    <h3 className="text-xl font-bold text-black tracking-tight">{title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed font-light">{desc}</p>
  </div>
);

export const Agents: React.FC = () => {
  return (
    <div className="space-y-40">
      <div className="max-w-4xl space-y-8">
        <span className="section-label">What Makes Veira Different</span>
        <h2 className="text-5xl md:text-8xl font-black serif text-black leading-[0.9] tracking-tighter">
          Installing <br/><span className="italic text-gray-400">Structure.</span>
        </h2>
        <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl">
          Most POS systems stop at transactions. Veira goes further. You are not buying software; you are installing structure.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <DifferenceCard 
          title="Smart POS"
          desc="The hardware and software needed to run your front-of-house perfectly."
          accentColor="#2D9B9B"
        />
        <DifferenceCard 
          title="Payments Integration"
          desc="Direct reconciliation with M-PESA and major cards."
          accentColor="#8b5cf6"
        />
        <DifferenceCard 
          title="Cloud Infrastructure"
          desc="Access your business from anywhere in the world, securely."
          accentColor="#000000"
        />
        <DifferenceCard 
          title="AI Powered Support"
          desc="A partner that never sleeps, helping you solve problems instantly."
          accentColor="#2D9B9B"
        />
        <DifferenceCard 
          title="AI Sales Insights"
          desc="Smart reports that tell you exactly what is making you money."
          accentColor="#8b5cf6"
        />
        <DifferenceCard 
          title="Remote Access Control"
          desc="Full manager-level reporting and control without being physically present."
          accentColor="#000000"
        />
      </div>
    </div>
  );
};