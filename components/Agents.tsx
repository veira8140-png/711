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
        <span className="section-label">AI Retail Intelligence</span>
        <h2 className="text-4xl md:text-6xl font-bold serif text-black leading-tight">
          AI-Powered <br/><span className="italic text-gray-400">Retail Agents.</span>
        </h2>
        <p className="text-lg text-gray-500 font-light leading-relaxed">
          Veira is powered by specialized AI agents for <strong>retail management in Kenya</strong>. 
          They observe every transaction, act on stock movements, and report on leakage automatically.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <AgentCard 
          name="Glenn"
          role="Operations"
          tagline="Staff Support & Workflow Optimization"
          accentColor="#2D9B9B"
          description="Glenn streamlines day-to-day friction in Kenyan shops, handling staff workflows and inventory queries in real-time."
        />
        <AgentCard 
          name="Achi"
          role="Growth"
          tagline="Revenue Generation & Marketing"
          accentColor="#8A3FA0"
          description="Achi acts as your virtual marketing manager, running promotions and customer follow-ups based on sales data."
        />
        <AgentCard 
          name="Tiri"
          role="Oversight"
          tagline="Loss Prevention & WhatsApp Alerts"
          accentColor="#1a1a1a"
          description="Tiri monitors transactions for anomalies and sends daily sales summaries directly to your WhatsApp."
        />
      </div>
    </div>
  );
};