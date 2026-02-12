import React from 'react';

const AgentCard: React.FC<{ 
  name: string; 
  role: string; 
  tagline: string; 
  description: string;
  capabilities: string[];
  useCases: string[];
  color: string;
}> = ({ name, role, tagline, description, capabilities, useCases, color }) => (
  <div className="glass p-8 md:p-12 border-black/5 flex flex-col h-full hover:border-black/20 transition-all duration-500 group">
    <div className="space-y-6 flex-1">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <h3 className="text-3xl font-black serif text-black">{name}</h3>
          <div className="h-[1px] flex-1 bg-black/5"></div>
        </div>
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">{role}</p>
      </div>
      
      <p className="text-xl font-bold serif italic text-black">{tagline}</p>
      <p className="text-gray-500 font-light leading-relaxed text-sm">{description}</p>
      
      <div className="space-y-4 pt-4">
        <h4 className="text-[9px] font-bold uppercase tracking-widest text-gray-400">What {name} Does:</h4>
        <ul className="space-y-2">
          {capabilities.map((cap, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-600 font-light">
              <span className="text-gray-300 mt-1">•</span>
              {cap}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="mt-10 pt-8 border-t border-black/5 space-y-4">
      <h4 className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Real World:</h4>
      <div className="space-y-3">
        {useCases.map((uc, i) => (
          <div key={i} className="bg-black/5 p-3 rounded-sm">
            <p className="text-[11px] leading-relaxed text-black font-medium">{uc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const Agents: React.FC = () => {
  return (
    <div id="agents" className="space-y-32 md:space-y-48">
      {/* Intro */}
      <div className="max-w-4xl space-y-10">
        <div className="space-y-4">
          <span className="section-label">Intelligent Oversight</span>
          <h2 className="text-5xl md:text-8xl font-black serif text-black leading-[0.9] tracking-tighter">
            Operations that <br/><span className="italic text-gray-400">run themselves.</span>
          </h2>
        </div>
        <p className="text-2xl text-gray-500 font-light leading-relaxed max-w-3xl">
          Growth that happens automatically, and problems that surface before they cost you. 
          Veira observes, acts, and reports without waiting for instructions.
        </p>
      </div>

      {/* Agent Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <AgentCard 
          name="Glenn"
          role="AI Support Agent"
          tagline="Keeps the Business Running"
          description="Glenn handles day-to-day friction so the business never slows down. Staff get help instantly, and owners are not pulled into every issue."
          color="#94A3B8"
          capabilities={["Answers staff questions", "Trains new employees", "Responds to WhatsApp", "Explains alerts", "Reduces mistakes"]}
          useCases={["New cashier day one guide.", "Rush hour assistance.", "Owner away operations."]}
        />
        <AgentCard 
          name="Achi"
          role="AI Sales & Marketing"
          tagline="Makes the Business Grow"
          description="Achi drives revenue and engagement by understanding customer behavior."
          color="#94A3B8"
          capabilities={["Runs promotions", "WhatsApp follow-ups", "Encourages repeats", "Analyzes trends", "Creates marketing"]}
          useCases={["Targeted win-back messages.", "Moving slow stock.", "Lead conversion."]}
        />
        <AgentCard 
          name="Tiri"
          role="AI Manager Agent"
          tagline="Watches Everything, Protects Money"
          description="Tiri monitors operations continuously and reports directly to you on WhatsApp."
          color="#94A3B8"
          capabilities={["WhatsApp daily reports", "Cash vs Digital breakdown", "Fraud detection", "Inventory monitoring", "Flags risks"]}
          useCases={["Daily revenue snapshot.", "Leakage flags.", "Identifying unusual discounts."]}
        />
      </div>

      {/* Summary Section */}
      <div className="max-w-4xl mx-auto text-center space-y-16 py-20">
        <div className="space-y-6">
          <h3 className="text-4xl md:text-7xl font-bold serif text-black italic">What This Means for You</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 text-left">
          {[
            "You get daily sales on WhatsApp automatically",
            "Fraud and theft are detected early",
            "Revenue grows without constant effort",
            "Staff no longer need micromanagement",
            "You stay in control, even when offsite"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 border-b border-black/5 pb-6">
              <span className="text-gray-400 font-bold">✓</span>
              <p className="text-lg text-gray-700 font-light">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final Callout */}
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        <p className="text-2xl md:text-3xl text-gray-400 font-light leading-relaxed italic">
          "Veira does not give you more work. <span className="text-black font-bold not-italic">It removes it.</span>"
        </p>
        <div className="flex flex-col items-center gap-4">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Glenn runs. Achi drives. Tiri protects.</p>
          <button className="cta-primary px-16 py-6 font-bold text-[10px] uppercase tracking-[0.3em]">
            Hire Your AI Agents
          </button>
        </div>
      </div>
    </div>
  );
};