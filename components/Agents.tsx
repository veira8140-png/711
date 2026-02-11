import React from 'react';

interface AgentCardProps {
  name: string;
  role: string;
  tagline: string;
  description: string;
  accentColor: string;
}

const AgentCard: React.FC<AgentCardProps> = ({ name, role, tagline, description, accentColor }) => (
  <div className="bg-white/40 backdrop-blur-xl p-12 border border-black/5 space-y-10 group transition-all duration-700 hover:border-black/20 hover:-translate-y-2">
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-4xl font-bold serif text-black leading-none">{name}</h3>
        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: accentColor }}></div>
      </div>
      <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400">{role}</p>
    </div>
    <div className="h-px bg-black/5 w-full"></div>
    <p className="text-xl font-light text-black italic serif leading-snug">"{tagline}"</p>
    <p className="text-sm text-gray-500 leading-relaxed font-light">{description}</p>
  </div>
);

export const Agents: React.FC = () => {
  return (
    <div className="space-y-40">
      <div className="max-w-4xl space-y-8">
        <span className="section-label">Meet Your Helpers</span>
        <h2 className="text-5xl md:text-8xl font-black serif text-black leading-[0.9] tracking-tighter">
          Smart tools <br/><span className="italic text-gray-400">that work.</span>
        </h2>
        <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl">
          Veira has smart helpers that watch your shop for you. 
          They track your stock and tell you how much you made.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <AgentCard 
          name="Glenn"
          role="Operations"
          tagline="Better Work"
          accentColor="#2D9B9B"
          description="Glenn helps your staff do their work faster and answers your questions about stock."
        />
        <AgentCard 
          name="Achi"
          role="Growth"
          tagline="More Sales"
          accentColor="#8b5cf6"
          description="Achi helps you get more customers by finding the best times to run sales."
        />
        <AgentCard 
          name="Tiri"
          role="Oversight"
          tagline="Safety First"
          accentColor="#000000"
          description="Tiri watches for any missing money and sends sales notes to your WhatsApp."
        />
      </div>
    </div>
  );
};