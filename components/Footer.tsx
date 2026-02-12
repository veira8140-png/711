import React, { useState } from 'react';
import { runGroqTool } from '../services/groqService';

interface FooterProps {
  onNavigate: (id: string) => void;
}

interface ToolDetail {
  name: string;
  icon: string;
  desc: string;
  placeholder: string;
}

const TOOL_DETAILS: ToolDetail[] = [
  { name: 'Daily Sales Tracker', icon: '📊', desc: 'Calculate today’s sales and profit.', placeholder: "e.g. Sales: 10,000, Expenses: 4,000" },
  { name: 'Staff Theft Risk Calculator', icon: '🛡️', desc: 'Evaluate operational risk score (1-10).', placeholder: "e.g. High turnover, no CCTV, manual reconciliation" },
  { name: 'ETIMS Compliance Checker', icon: '✅', desc: 'Check KRA/ETIMS readiness.', placeholder: "e.g. Retail shop, issuing manual receipts, KES 5M turnover" },
  { name: 'Profit Margin Estimator', icon: '💰', desc: 'Know your true net margins.', placeholder: "e.g. Sales: 50,000, Costs: 35,000" },
  { name: 'Stock Alert Calculator', icon: '📦', desc: 'Identify critical stock levels.', placeholder: "e.g. Inventory: Milk (5), Bread (2), Soda (10)" },
  { name: 'Customer Visit Estimator', icon: '👥', desc: 'Estimate foot traffic revenue.', placeholder: "e.g. Shop in CBD, peak hours 12pm-2pm" },
  { name: 'Business Growth Analyzer', icon: '🚀', desc: 'Evaluate scaling potential (1-10).', placeholder: "e.g. Growing at 20% MoM, seeking second location" },
  { name: 'Staff Scheduling Helper', icon: '📅', desc: 'Generate optimized shift plans.', placeholder: "e.g. Staff: Alice, Bob, Charlie. Hours: 8am-8pm" },
  { name: 'Quick Tax Calculator', icon: '🧾', desc: 'Estimate turnover tax due.', placeholder: "e.g. Monthly Revenue: 450,000 KES" },
  { name: 'Expense Tracker', icon: '💸', desc: 'Categorize and summarize costs.', placeholder: "e.g. Rent: 30k, Suppliers: 120k, Electricity: 5k" },
  { name: 'Free Logo Generator', icon: '🎨', desc: 'Creative identity suggestions.', placeholder: "e.g. Minimalist design for 'Zuri Cafe', Coffee brown" },
  { name: 'Business Name Generator', icon: '🏷️', desc: 'Find unique shop names.', placeholder: "e.g. New delivery startup in Nairobi focusing on groceries" },
  { name: 'Social Media Content Generator', icon: '✍️', desc: 'Engaging WhatsApp/IG posts.', placeholder: "e.g. Clearance sale for old electronics, 30% off" },
  { name: 'Business Card Generator', icon: '📇', desc: 'Professional card layouts.', placeholder: "e.g. Director, Westlands Hardware, Phone 0722..." },
  { name: 'Promo Poster / Flyer Generator', icon: '📄', desc: 'Visual marketing ideas.', placeholder: "e.g. Back-to-school offer on school uniforms" },
  { name: 'QR Code Generator', icon: '📱', desc: 'MPESA integrated payment links.', placeholder: "e.g. Paybill 123456, Acc 789" },
  { name: 'Customer Feedback Form Generator', icon: '📝', desc: 'Get better customer insights.', placeholder: "e.g. Questions for restaurant delivery speed" },
  { name: 'Loyalty Program Calculator', icon: '🎁', desc: 'Design rewards that stick.', placeholder: "e.g. Reward after 5 visits or 20,000 KES spend" },
  { name: 'Simple Invoice Generator', icon: '🧾', desc: 'Professional invoice summaries.', placeholder: "e.g. 10 bags of cement, 800 KES each" },
  { name: 'Discount & Promotion Planner', icon: '💸', desc: 'Plan profitable flash sales.', placeholder: "e.g. Weekend clearance sale on stationary" }
];

const ResultRenderer: React.FC<{ data: any }> = ({ data }) => {
  if (!data || typeof data !== 'object') return null;
  if (data.error) return <p className="text-red-500 font-bold italic">{data.error}</p>;

  const formatKey = (key: string) => key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Object.entries(data).map(([key, value]) => {
          const isCurrency = key.toLowerCase().includes('total') || key.toLowerCase().includes('profit') || key.toLowerCase().includes('sales') || key.toLowerCase().includes('due');
          const isScore = key.toLowerCase().includes('score');
          
          if (typeof value === 'object' && !Array.isArray(value)) {
            return (
              <div key={key} className="col-span-full border-t border-black/5 pt-4">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">{formatKey(key)}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(value as object).map(([subKey, subVal]) => (
                    <div key={subKey} className="bg-black/5 p-4 rounded-xl">
                      <p className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter mb-1">{formatKey(subKey)}</p>
                      <p className="text-sm font-semibold text-black">
                        {Array.isArray(subVal) ? subVal.join(', ') : String(subVal)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          if (Array.isArray(value)) {
            return (
              <div key={key} className="col-span-full space-y-2">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{formatKey(key)}</h4>
                <div className="flex flex-wrap gap-2">
                  {value.map((item, i) => (
                    <span key={i} className="px-3 py-2 bg-black/5 border border-black/5 text-[11px] font-medium rounded-lg text-gray-700">
                      {String(item)}
                    </span>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <div key={key} className={`bg-white border border-black/5 p-6 rounded-2xl shadow-sm ${isScore ? 'border-[#2D9B9B]/30' : ''}`}>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">{formatKey(key)}</p>
              <div className="flex items-baseline gap-2">
                <p className={`text-2xl font-black serif ${isCurrency ? 'text-[#2D9B9B]' : isScore ? 'text-purple-600' : 'text-black'}`}>
                  {isCurrency && typeof value === 'number' ? `KES ${value.toLocaleString()}` : String(value)}
                </p>
                {isScore && <span className="text-xs text-gray-400 font-bold">/ 10</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [activeTool, setActiveTool] = useState<ToolDetail | null>(null);
  const [toolInput, setToolInput] = useState('');
  const [toolResult, setToolResult] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [genStep, setGenStep] = useState('');

  const handleLaunchTool = async () => {
    if (!activeTool || !toolInput.trim()) return;
    setIsGenerating(true);
    setToolResult(null);
    setError(null);
    setGenStep('Initializing Intelligence...');

    try {
      setTimeout(() => setGenStep('Processing Retail Data...'), 1200);
      const result = await runGroqTool(activeTool.name, { userInput: toolInput });
      if (result.error) setError(result.error);
      else setToolResult(result);
    } catch (err: any) {
      console.error(err);
      setError("⚠️ AI service is busy. Please try again.");
    } finally {
      setIsGenerating(false);
      setGenStep('');
    }
  };

  return (
    <footer className="bg-white border-t border-black/5 pt-32 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <h3 className="text-3xl font-black serif tracking-tighter uppercase text-black">veira.</h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed max-w-xs">
              The premium retail intelligence engine for high-growth shops and pharmacies in Kenya.
            </p>
          </div>
          <div className="space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black">Platform</h4>
            <ul className="space-y-4 text-sm font-light text-gray-500">
              <li><button onClick={() => onNavigate('pos')} className="hover:text-[#2D9B9B] transition-colors">Cloud POS</button></li>
              <li><button onClick={() => onNavigate('agents')} className="hover:text-[#2D9B9B] transition-colors">AI Agents</button></li>
              <li><button onClick={() => onNavigate('cloud')} className="hover:text-[#2D9B9B] transition-colors">Inventory Hub</button></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black">AI Power-Up Suite</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {TOOL_DETAILS.map((tool) => (
                <button
                  key={tool.name}
                  onClick={() => { setActiveTool(tool); setToolResult(null); setError(null); }}
                  className="px-4 py-3 bg-black/5 hover:bg-black hover:text-white text-[10px] font-bold uppercase tracking-wider text-left transition-all rounded-sm flex items-center gap-2 group"
                >
                  <span className="text-base grayscale group-hover:grayscale-0 transition-all">{tool.icon}</span>
                  <span className="truncate">{tool.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-300">
            © {new Date().getFullYear()} Veira Intelligence. Westlands, Nairobi.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-300">
            <a href="#" className="hover:text-black transition-colors">KRA eTIMS</a>
            <a href="#" className="hover:text-black transition-colors">M-PESA Direct</a>
            <a href="#" className="hover:text-black transition-colors">Terms</a>
          </div>
        </div>
      </div>

      {activeTool && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl p-8 md:p-12 space-y-10 animate-in fade-in zoom-in duration-300 relative rounded-[2rem] shadow-2xl overflow-y-auto max-h-[90vh]">
            <button onClick={() => setActiveTool(null)} className="absolute top-8 right-8 text-gray-300 hover:text-black transition-colors">✕</button>
            
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-4xl">{activeTool.icon}</span>
                <h3 className="text-3xl font-bold serif">{activeTool.name}</h3>
              </div>
              <p className="text-gray-400 font-light text-lg">{activeTool.desc}</p>
            </div>

            {!toolResult ? (
              <div className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Input Data</label>
                  <textarea
                    autoFocus
                    value={toolInput}
                    onChange={(e) => setToolInput(e.target.value)}
                    placeholder={activeTool.placeholder}
                    className="w-full bg-black/5 border-none p-6 min-h-[160px] focus:ring-1 focus:ring-black transition-all rounded-2xl text-lg font-light"
                  />
                </div>
                {error && <p className="text-red-500 text-xs italic bg-red-50 p-3 rounded-lg border border-red-100">{error}</p>}
                <button 
                  disabled={isGenerating || !toolInput.trim()}
                  onClick={handleLaunchTool}
                  className="cta-primary w-full py-7 text-[11px] font-bold uppercase tracking-[0.4em] disabled:opacity-50 flex flex-col items-center justify-center gap-2 rounded-2xl shadow-xl shadow-[#2D9B9B]/20"
                >
                  {isGenerating ? (
                    <>
                      <div className="flex gap-2 mb-1">
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
                      </div>
                      <span className="text-[8px] opacity-70 tracking-widest">{genStep}</span>
                    </>
                  ) : `Execute Analysis`}
                </button>
              </div>
            ) : (
              <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="p-1 bg-black/5 rounded-[2rem]">
                  <div className="bg-white p-8 rounded-[1.8rem] border border-black/5">
                    <ResultRenderer data={toolResult} />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={() => { setToolResult(null); setToolInput(''); }} className="flex-1 bg-black text-white py-6 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
                    New Analysis
                  </button>
                  <button onClick={() => setActiveTool(null)} className="flex-1 bg-gray-100 text-gray-500 py-6 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                    Close Tool
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};
