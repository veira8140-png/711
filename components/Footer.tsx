
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
  { name: 'Profit Margin Estimator', icon: '💰', desc: 'Know your true net margins.', placeholder: "e.g. Cost 800, Selling price 1,200" }
];

const ResultRenderer: React.FC<{ data: any }> = ({ data }) => {
  if (!data || typeof data !== 'object') return null;
  if (data.error) return <p className="text-red-500 font-bold italic">{data.error}</p>;
  const formatKey = (key: string) => key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="bg-white border border-black/5 p-6 rounded-2xl shadow-sm">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">{formatKey(key)}</p>
            <p className="text-2xl font-black serif text-black">{String(value)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Footer: React.FC<FooterProps> = ({ onNavigate, onShowBlog }) => {
  const [activeTool, setActiveTool] = useState<ToolDetail | null>(null);
  const [toolInput, setToolInput] = useState('');
  const [toolResult, setToolResult] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [genStep, setGenStep] = useState('');

  const handleLaunchTool = async () => {
    if (!activeTool || !toolInput.trim()) return;
    setIsGenerating(true);
    setToolResult(null);
    setGenStep('Calibrating Intelligence...');
    try {
      const result = await runVeiraTool(activeTool.name, toolInput);
      setToolResult(result);
    } catch (err: any) {
      console.error(err);
    } finally {
      setIsGenerating(false);
      setGenStep('');
    }
  };

  const navigateToBlogSubpath = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <footer className="bg-white border-t border-black/5 pt-32 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 mb-24">
          <div className="sm:col-span-2 md:col-span-1 space-y-8">
            <h3 className="text-3xl font-black serif tracking-tighter text-black lowercase">veira.</h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed max-w-[240px]">
              The premium retail intelligence engine for high-growth shops in Kenya.
            </p>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black">Platform</h4>
            <ul className="space-y-4 text-sm font-light text-gray-500">
              <li><button onClick={() => onNavigate('pos')} className="hover:text-[#2D9B9B]">Cloud POS</button></li>
              <li><button onClick={() => onNavigate('agents')} className="hover:text-[#2D9B9B]">AI Agents</button></li>
              <li><button onClick={() => onNavigate('cloud')} className="hover:text-[#2D9B9B]">Inventory Hub</button></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black">Resources</h4>
            <ul className="space-y-4 text-sm font-light text-gray-500">
              <li><button onClick={onShowBlog} className="hover:text-[#2D9B9B] font-bold text-black underline underline-offset-4">Blog</button></li>
              <li><button onClick={() => navigateToBlogSubpath('/blog/e-tims-explained')} className="hover:text-[#2D9B9B] text-left">e-TIMS Guide</button></li>
              <li><button onClick={() => navigateToBlogSubpath('/blog/pos-cost-guide')} className="hover:text-[#2D9B9B] text-left">POS Cost Guide</button></li>
              <li><button onClick={() => onNavigate('our-story')} className="hover:text-[#2D9B9B]">Our Story</button></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black">Compare</h4>
            <ul className="space-y-4 text-sm font-light text-gray-500">
              <li><a href="#" className="hover:text-[#2D9B9B]">Veira vs Traditional</a></li>
              <li><a href="#" className="hover:text-[#2D9B9B]">Veira vs Spreadsheets</a></li>
            </ul>
          </div>

          <div className="sm:col-span-2 md:col-span-1 lg:col-span-1 space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-black">AI Power-Ups</h4>
            <div className="grid grid-cols-1 gap-2">
              {TOOL_DETAILS.map((tool) => (
                <button
                  key={tool.name}
                  onClick={() => { setActiveTool(tool); setToolResult(null); setToolInput(''); }}
                  className="px-4 py-3 bg-black/5 hover:bg-black hover:text-white text-[9px] font-bold uppercase tracking-wider text-left transition-all rounded-sm flex items-center gap-3 group"
                >
                  <span>{tool.icon}</span>
                  <span className="truncate">{tool.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-300">© {new Date().getFullYear()} Veira Intelligence.</p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-300">
            <a href="#" className="hover:text-black">Terms</a>
            <a href="#" className="hover:text-black">Privacy</a>
          </div>
        </div>
      </div>

      {activeTool && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl p-8 md:p-12 space-y-10 animate-in fade-in zoom-in duration-300 relative rounded-[2rem] shadow-2xl">
            <button onClick={() => setActiveTool(null)} className="absolute top-8 right-8 text-gray-300 hover:text-black">✕</button>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold serif">{activeTool.name}</h3>
              <p className="text-gray-400 font-light">{activeTool.desc}</p>
            </div>
            {!toolResult ? (
              <div className="space-y-8">
                <textarea
                  autoFocus
                  value={toolInput}
                  onChange={(e) => setToolInput(e.target.value)}
                  placeholder={activeTool.placeholder}
                  className="w-full bg-black/5 border-none p-6 min-h-[160px] rounded-2xl text-lg font-light"
                />
                <button 
                  disabled={isGenerating || !toolInput.trim()}
                  onClick={handleLaunchTool}
                  className="cta-primary w-full py-7 text-[11px] font-bold uppercase tracking-[0.4em] rounded-2xl"
                >
                  {isGenerating ? genStep : `Execute Analysis`}
                </button>
              </div>
            ) : (
              <div className="space-y-10">
                <ResultRenderer data={toolResult} />
                <button onClick={() => { setToolResult(null); setToolInput(''); }} className="w-full bg-black text-white py-6 rounded-2xl text-[10px] font-bold uppercase tracking-widest">
                  New Analysis
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};
