
import React from 'react';

interface AgentCardProps {
  name: string;
  role: string;
  tagline: string;
  description: string;
  capabilities: string[];
  useCases: { title: string; content: string }[];
  accentColor: string;
}

const AgentCard: React.FC<AgentCardProps> = ({ name, role, tagline, description, capabilities, useCases, accentColor }) => (
  <div className="glass p-8 md:p-12 border-white/5 space-y-12">
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center overflow-hidden">
          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: accentColor }}></div>
        </div>
        <div>
          <h3 className="text-4xl font-bold serif">{name}</h3>
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold" style={{ color: accentColor }}>{role}</p>
        </div>
      </div>
      <p className="text-2xl font-light text-white italic serif">{tagline}</p>
      <p className="text-gray-400 leading-relaxed font-light">{description}</p>
    </div>

    <div className="grid md:grid-cols-2 gap-12">
      <div className="space-y-6">
        <h4 className="text-[10px] uppercase tracking-widest text-gray-500 font-bold border-b border-white/5 pb-2">Capabilities</h4>
        <ul className="space-y-4">
          {capabilities.map((cap, i) => (
            <li key={i} className="flex items-start space-x-3 text-sm text-gray-300">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: accentColor }}></span>
              <span>{cap}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-6">
        <h4 className="text-[10px] uppercase tracking-widest text-gray-500 font-bold border-b border-white/5 pb-2">Real-world Use Cases</h4>
        <div className="space-y-6">
          {useCases.map((uc, i) => (
            <div key={i} className="space-y-1">
              <p className="text-xs font-bold text-white uppercase tracking-wider">{uc.title}</p>
              <p className="text-xs text-gray-500 italic leading-relaxed">{uc.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const Agents: React.FC = () => {
  return (
    <div id="agents" className="space-y-40">
      {/* Intro Section */}
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <div className="space-y-4">
          <span className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.4em]">The Architecture</span>
          <h2 className="text-5xl md:text-7xl font-bold serif leading-tight">Beyond Software. <br/><span className="italic">Autonomous Intelligence.</span></h2>
        </div>
        <div className="space-y-6 text-xl text-gray-400 font-light leading-relaxed">
          <p>
            Veira is not a POS. It is not accounting software. It is not a dashboard you must check every day.
          </p>
          <p className="text-white">
            Veira runs your business through three AI agents, each with a clear responsibility, all working from the same source of truth.
          </p>
          <p className="text-sm uppercase tracking-[0.2em] italic">
            They do not wait for instructions. They observe, act, and report automatically.
          </p>
        </div>
      </div>

      {/* Agents Grid */}
      <div className="space-y-20">
        <AgentCard 
          name="Glenn"
          role="AI Support Agent"
          tagline="Keeps the business running"
          accentColor="#2D9B9B"
          description="Glenn handles day to day operational friction so the business does not slow down. He supports staff, answers questions, and resolves confusion in real time."
          capabilities={[
            "Answers staff questions about products, pricing, and workflows",
            "Helps new employees learn faster without constant supervision",
            "Responds to customer inquiries on WhatsApp and internal tools",
            "Explains alerts and issues raised by Tiri in simple language",
            "Reduces mistakes caused by misunderstanding or poor training"
          ]}
          useCases={[
            { title: "New cashier on day one", content: "A staff member is unsure how to process a return. Glenn guides them step by step." },
            { title: "Staff confusion during rush", content: "Glenn answers repetitive product questions instantly, keeping the line moving." },
            { title: "Owner unavailable", content: "Staff still get answers and support continues even if you are off-site." }
          ]}
        />

        <AgentCard 
          name="Achi"
          role="AI Sales & Marketing"
          tagline="Makes the business grow"
          accentColor="#8A3FA0"
          description="Achi is responsible for revenue growth, customer engagement, and follow ups. She doesn't just show sales numbers; she actively works to improve them."
          capabilities={[
            "Runs targeted promotions and marketing campaigns",
            "Follows up leads and customers automatically on WhatsApp",
            "Encourages repeat visits and upsells dynamically",
            "Analyzes sales trends and suggests high-impact inventory moves",
            "Helps create marketing messages that actually convert"
          ]}
          useCases={[
            { title: "Dormant customers", content: "Customers who haven't visited in 30 days automatically receive a personalized WhatsApp offer." },
            { title: "Slow moving products", content: "Achi detects stagnant items and launches a lightning promotion to move stock." },
            { title: "Lead follow up", content: "A customer asks for prices but doesn't buy. Achi follows up politely and converts." }
          ]}
        />

        <AgentCard 
          name="Tiri"
          role="AI Manager Agent"
          tagline="Watches everything and protects the money"
          accentColor="#531753"
          description="Tiri is the most critical agent. She monitors the entire business continuously and reports directly to the owner on WhatsApp. You don't log in to check numbers; Tiri brings them to you."
          capabilities={[
            "Sends daily sales reports on WhatsApp automatically",
            "Breaks down cash vs digital payments for reconciliation",
            "Tracks performance trends and identifies anomalies",
            "Detects fraud, theft, and suspicious transaction behavior",
            "Monitors inventory movement and identifies shrinkage patterns"
          ]}
          useCases={[
            { title: "Daily WhatsApp reports", content: "Every evening, receive a summary of sales, payment breakdown, and comparison to yesterday." },
            { title: "Cash leakage detection", content: "Tiri flags sales activity without corresponding cash entries before losses grow." },
            { title: "Inventory theft", content: "Flags when stock is reducing faster than sales justify, identifying where the mismatch started." }
          ]}
        />
      </div>

      {/* Collaboration / Closed Loop */}
      <div className="glass p-12 md:p-24 border-white/5 text-center space-y-12">
        <div className="space-y-4">
          <span className="text-[#2D9B9B] text-[10px] font-bold uppercase tracking-[0.4em]">Integrated Intelligence</span>
          <h3 className="text-4xl font-bold serif">The Closed Loop System</h3>
          <p className="max-w-2xl mx-auto text-gray-400 font-light text-lg">
            Veira agents are not separate tools. They share context and reinforce each other to create a seamless operational cycle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          <div className="p-6 border border-white/5 space-y-2">
            <p className="text-white font-bold">1. Tiri Detects</p>
            <p className="text-xs text-gray-500">A risk or abnormal behavior is identified in the data.</p>
          </div>
          <div className="hidden md:block text-[#8A3FA0]">→</div>
          <div className="p-6 border border-white/5 space-y-2">
            <p className="text-white font-bold">2. Glenn Corrects</p>
            <p className="text-xs text-gray-500">Helps staff on the ground understand and fix the issue immediately.</p>
          </div>
          <div className="hidden md:block text-[#8A3FA0]">→</div>
          <div className="p-6 border border-white/5 space-y-2 md:col-span-1">
            <p className="text-white font-bold">3. Achi Adjusts</p>
            <p className="text-xs text-gray-500">Refines campaigns based on the updated performance profile.</p>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="max-w-4xl mx-auto py-20 border-t border-white/5 space-y-16">
        <div className="text-center space-y-4">
          <h3 className="text-4xl font-bold serif">What this means for you</h3>
          <p className="text-gray-400">Total control, zero micromanagement.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 text-gray-300">
          <div className="flex items-start space-x-4">
            <span className="text-[#2D9B9B] font-bold">01</span>
            <p>You get daily sales on WhatsApp without asking.</p>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-[#2D9B9B] font-bold">02</span>
            <p>You detect fraud early instead of after losses.</p>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-[#2D9B9B] font-bold">03</span>
            <p>You grow revenue without constant marketing effort.</p>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-[#2D9B9B] font-bold">04</span>
            <p>You stay in control even when you are not present.</p>
          </div>
        </div>

        <div className="text-center pt-10">
          <p className="text-2xl serif italic text-white mb-4">"Veira does not give you more work. It removes it."</p>
          <div className="flex justify-center space-x-6 text-[10px] uppercase tracking-widest font-bold text-gray-500">
            <span>Glenn Runs</span>
            <span className="text-white">•</span>
            <span>Achi Drives</span>
            <span className="text-white">•</span>
            <span>Tiri Protects</span>
          </div>
        </div>
      </div>
    </div>
  );
};
