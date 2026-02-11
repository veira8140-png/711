import React from 'react';

interface AgentCardProps {
  name: string;
  role: string;
  tagline: string;
  description: string;
  accentColor: string;
}

const AgentCard: React.FC<AgentCardProps> = ({ name, role, tagline, description, accentColor }) => (
  <div className="bg-white p-12 border border-black/5 space-y-8 group transition-all duration-500 hover:border-black/10">
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl font-bold serif text-black">{name}</h3>
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }}></div>
      </div>
      <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">{role}</p>
    </div>
    <p className="text-xl font-light text-black italic serif leading-snug">"{tagline}"</p>
    <p className="text-sm text-gray-500 leading-relaxed font-light">{description}</p>
  </div>
);

export const Agents: React.FC = () => {
  return (
    <div className="space-y-32">
      <div className="max-w-3xl space-y-6">
        <span className="section-label">Architecture</span>
        <h2 className="text-4xl md:text-6xl font-bold serif text-black leading-tight">
          Autonomous <br/><span className="italic text-gray-400">Intelligence.</span>
        </h2>
        <p className="text-lg text-gray-500 font-light leading-relaxed">
          Veira is powered by three specialized AI agents that observe, act, and report automatically. 
          They are not features; they are employees.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <AgentCard 
          name="Glenn"
          role="Operations"
          tagline="Day-to-day friction removal"
          accentColor="#2D9B9B"
          description="Glenn supports staff workflows and customer inquiries in real-time, reducing operational drag."
        />
        <AgentCard 
          name="Achi"
          role="Growth"
          tagline="Active revenue generation"
          accentColor="#8A3FA0"
          description="Achi manages marketing follow-ups and promotions, converting leads into repeat customers automatically."
        />
        <AgentCard 
          name="Tiri"
          role="Oversight"
          tagline="Continuous protection"
          accentColor="#1a1a1a"
          description="Tiri monitors every transaction for anomalies, leakage, and trends, reporting directly to ownership."
        />
      </div>
    </div>
  );
};