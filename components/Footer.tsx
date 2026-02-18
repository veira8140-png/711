
import React, { useState } from 'react';
import { runVeiraTool } from '../services/gemini.ts';

interface FooterProps {
  onNavigate: (id: string) => void;
  onShowBlog: () => void;
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
  { name: 'ETIMS Compliance Checker', icon: '✅', desc: 'Check KRA/ETIMS readiness.', placeholder: "e.g. Retail shop, manual receipts, 5M turnover" },
  { name: 'Profit Margin Estimator', icon: '💰', desc: 'Know your true net margins.', placeholder: "e.g. Cost 800, Selling price 1,200" },
  { name: 'Stock Alert Calculator', icon: '📦', desc: 'Identify critical stock levels.', placeholder: "e.g. Items: Milk 5, Bread 2, Eggs 10" },
  { name: 'Customer Visit Estimator', icon: '👥', desc: 'Estimate foot traffic revenue.', placeholder: "e.g. Boutique in CBD, busy lunch hours" },
  { name: 'Business Growth Analyzer', icon: '🚀', desc: 'Evaluate scaling potential (1-10).', placeholder: "e.g. 2 branches, 150k monthly profit, looking to scale" },
  { name: 'Staff Scheduling Helper', icon: '📅', desc: 'Generate optimized shift plans.', placeholder: "e.g. Staff: Alice, Bob, Charlie. Shop opens 8am-8pm" },
  { name: 'Quick Tax Calculator', icon: '🧾', desc: 'Estimate turnover tax due.', placeholder: "e.g. Monthly revenue 450,000 KES" },
  { name: 'Expense Tracker', icon: '💸', desc: 'Summarize your business costs.', placeholder: "e.g. Rent 30k, Supplier X 120k, Staff 50k" },
  { name: 'Free Logo Generator', icon: '🎨', desc: 'Creative identity suggestions.', placeholder: "e.g. Modern salon named 'Zuri Styles', pink colors" },
  { name: 'Business Name Generator', icon: '🏷️', desc: 'Find unique shop names.', placeholder: "e.g. New delivery business in Nairobi" },
  { name: 'Social Media Content Generator', icon: '✍️', desc: 'Engaging WhatsApp/IG posts.', placeholder: "e.g. Promo for weekend shoe sale" },
  { name: 'Business Card Generator', icon: '📇', desc: 'Professional card layouts.', placeholder: "e.g. CEO of Radiant Beauty, include phone 0722..." },
  { name: 'Promo Poster / Flyer Generator', icon: '📄', desc: 'Visual marketing ideas.', placeholder: "e.g. 20% off back to school sale poster" },
  { name: 'QR Code Generator', icon: '📱', desc: 'MPESA integrated payment links.', placeholder: "e.g. Paybill 123456, Acc 001" },
  { name: 'Customer Feedback Form Generator', icon: '📝', desc: 'Get better customer insights.', placeholder: "e.g. Questions for restaurant delivery satisfaction" },
  { name: 'Loyalty Program Calculator', icon: '🎁', desc: 'Design rewards that stick.', placeholder: "e.g. Points per KES spent, reward after 1000 points" },
  { name: 'Simple Invoice Generator', icon: '🧾', desc: 'Professional invoice summaries.', placeholder: "e.g. 5 bags of cement at 800 KES each" },
  { name: 'Discount & Promotion Planner', icon: '💸', desc: 'Plan profitable flash sales.', placeholder: "e.g. Clear old stock of electronics" }
];

const ResultRenderer: React.FC<{ data: any }> = ({ data }) => {
  if (!data || typeof data !== 'object') return null;
  if (data.error) return <p className="text-red-500 font-bold italic">{data.error}</p>;

  const formatKey = (key: string) => key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Object.entries(data).map(([key, value]) => {
          const lowerKey = key.toLowerCase();
          const isCurrency = lowerKey.includes('total') || 
                            lowerKey.includes('profit') || 
                            lowerKey.includes('sales') || 
                            lowerKey.includes('due') ||
                            lowerKey.includes('tax') ||
                            lowerKey.includes('margin') === false && typeof value === 'number';
          
          const isPercentage = lowerKey.includes('margin') || lowerKey.includes('percent');
          const isScore = lowerKey.includes('score');
          
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
                  {isCurrency && typeof value === 'number' ? `KES ${value.toLocaleString()}` : 
                   isPercentage && typeof value === 'number' ? `${value}%` : 
                   String(value)}
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

export const Footer: React.FC<FooterProps> = ({ onNavigate, onShowBlog }) => {
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
    setGenStep('Calibrating Intelligence...');
    
    try {
      setTimeout(() => setGenStep('Processing Market Data...'), 800);
      const result = await runVeiraTool(activeTool.name, toolInput);
      setToolResult(result);
    } catch (err: any) {
      console.error(err);
      setError("AI Engine is currently at capacity. Please refresh or try again in a moment.");
    } finally {
      setIsGenerating(false);
      setGenStep('');
    }
  };

  return (
    <footer className="bg-white border-t border-black/5 pt-32 pb-16">
      <div className="container mx-auto px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 mb-24">
          {/* Brand Info */}
          <div className="sm:col-span-2 md:col-span-1 space-y-8">
            <h3 className="text-3xl font-black serif tracking-tighter text-black lowercase">veira.</h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed max-w-[240px]">
              The premium retail intelligence engine for high-growth shops and pharmacies in Kenya.
            </p>
          </div>
          
          {/* Platform Links */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black">Platform</h4>
            <ul className="space-y-4 text-sm font-light text-gray-500">
              <li><button onClick={() => onNavigate('pos')} className="hover:text-[#2D9B9B] transition-colors">Cloud POS</button></li>
              <li><button onClick={() => onNavigate('agents')} className="hover:text-[#2D9B9B] transition-colors">AI Agents</button></li>
              <li><button onClick={() => onNavigate('cloud')} className="hover:text-[#2D9B9B] transition-colors">Inventory Hub</button></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black">Resources</h4>
            <ul className="space-y-4 text-sm font-light text-gray-500">
              <li>
                <button 
                  onClick={onShowBlog} 
                  className="hover:text-[#2D9B9B] transition-colors font-bold text-black underline underline-offset-4 text-left"
                >
                  Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={onShowBlog} 
                  className="hover:text-[#2D9B9B] transition-colors text-left"
                >
                  e-TIMS Guide
                </button>
              </li>
              <li><button onClick={() => onNavigate('case-studies')} className="hover:text-[#2D9B9B] transition-colors">Success Stories</button></li>
              <li><button onClick={() => onNavigate('our-story')} className="hover:text-[#2D9B9B] transition-colors">Our Story</button></li>
              <li><button onClick={() => onNavigate('faq')} className="hover:text-[#2D9B9B] transition-colors">Help Center</button></li>
            </ul>
          </div>

          {/* Compare Section */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black">Compare</h4>
            <ul className="space-y-4 text-sm font-light text-gray-500">
              <li><a href="#" className="hover:text-[#2D9B9B] transition-colors block leading-snug">Veira vs Traditional POS</a></li>
              <li><a href="#" className="hover:text-[#2D9B9B] transition-colors block leading-snug">Veira vs Spreadsheets</a></li>
              <li><a href="#" className="hover:text-[#2D9B9B] transition-colors block leading-snug">ChatGPT vs Veira</a></li>
            </ul>
          </div>

          {/* AI Suite Quick Actions */}
          <div className="sm:col-span-2 md:col-span-1 lg:col-span-1 space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black">AI Power-Ups</h4>
            <div className="grid grid-cols-1 gap-2">
              {TOOL_DETAILS.slice(0, 4).map((tool) => (
                <button
                  key={tool.name}
                  onClick={() => { setActiveTool(tool); setToolResult(null); setError(null); setToolInput(''); }}
                  className="px-4 py-3 bg-black/5 hover:bg-black hover:text-white text-[9px] font-bold uppercase tracking-wider text-left transition-all rounded-sm flex items-center gap-3 group whitespace-nowrap overflow-hidden"
                >
                  <span className="text-base grayscale group-hover:grayscale-0 transition-all">{tool.icon}</span>
                  <span className="truncate">{tool.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-300">
            © {new Date().getFullYear()} Veira Intelligence. Westlands, Nairobi.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-300">
            <a href="#" className="hover:text-black transition-colors">KRA eTIMS</a>
            <a href="#" className="hover:text-black transition-colors">M-PESA Direct</a>
            <a href="/sitemap.xml" className="hover:text-black transition-colors underline decoration-black/10 underline-offset-4">Sitemap</a>
            <a href="/robots.txt" className="hover:text-black transition-colors underline decoration-black/10 underline-offset-4">Robots</a>
            <a href="#" className="hover:text-black transition-colors">Terms</a>
          </div>
        </div>
      </div>

      {/* Tool Modal */}
      {activeTool && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white w-full max-w-2xl p-8 md:p-12 space-y-10 animate-in fade-in zoom-in duration-300 relative rounded-[2rem] shadow-2xl my-auto">
            <button onClick={() => setActiveTool(null)} className="absolute top-8 right-8 text-gray-300 hover:text-black transition-colors p-2" aria-label="Close">✕</button>
            
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-4xl" role="img" aria-label="icon">{activeTool.icon}</span>
                <h3 className="text-3xl font-bold serif">{activeTool.name}</h3>
              </div>
              <p className="text-gray-400 font-light text-lg">{activeTool.desc}</p>
            </div>

            {!toolResult ? (
              <div className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Describe Situation or Provide Data</label>
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
                  <div className="bg-white p-8 rounded-[1.8rem] border border-black/5 max-h-[400px] overflow-y-auto">
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
