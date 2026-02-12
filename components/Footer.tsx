
import React, { useState, useEffect } from 'react';
import { runVeiraTool } from '../services/gemini.ts';

// Fix: Added missing interfaces
interface FooterProps {
  onNavigate: (id: string) => void;
}

interface ToolDetail {
  name: string;
  icon: string;
  desc: string;
  color: string;
}

// Fix: Added missing TOOL_DETAILS
const TOOL_DETAILS: ToolDetail[] = [
  { name: 'Logo Design', icon: '🎨', desc: 'Create a unique brand logo.', color: '#7C3AED' },
  { name: 'QR Code', icon: '📱', desc: 'Generate M-PESA integrated QR.', color: '#2D9B9B' },
  { name: 'Business Card', icon: '📇', desc: 'Design professional cards.', color: '#F59E0B' },
  { name: 'Market Flyer', icon: '📄', desc: 'Promote your latest offers.', color: '#EF4444' },
  { name: 'Instagram Copy', icon: '📸', desc: 'Social media growth scripts.', color: '#EC4899' }
];

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [activeTool, setActiveTool] = useState<ToolDetail | null>(null);
  const [toolInput, setToolInput] = useState('');
  const [toolResult, setToolResult] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [genStep, setGenStep] = useState<string>('');

  const handleLaunchTool = async () => {
    if (!activeTool || !toolInput.trim()) return;
    setIsGenerating(true);
    setToolResult(null);
    setError(null);
    
    // Step-based feedback for better UX
    setGenStep('Connecting to Veira AI Engine...');
    
    try {
      setTimeout(() => { if (isGenerating) setGenStep('Analyzing business context...'); }, 1500);
      setTimeout(() => { if (isGenerating) setGenStep('Generating retail insights...'); }, 3500);

      const result = await runVeiraTool(activeTool.name, toolInput);
      setToolResult(result);
    } catch (err: any) {
      console.error(err);
      if (err.message === "API_KEY_MISSING") {
        setError("Retail Intelligence requires an active connection. Please contact support.");
      } else if (err.toString().includes('429')) {
        setError("High traffic detected. We're retrying, but the service is currently at capacity. Please try in 1 minute.");
      } else if (err.message === "DESIGN_FAILED") {
        setError("The AI was unable to visualize that request. Try being more descriptive (e.g. 'Minimalist logo with a coffee bean').");
      } else {
        setError("The AI engine is taking longer than usual. This usually happens during peak hours in Nairobi. Please try one more time.");
      }
    } finally {
      setIsGenerating(false);
      setGenStep('');
    }
  };

  const handleCopy = () => {
    if (toolResult) {
      navigator.clipboard.writeText(toolResult);
      setCopyFeedback(true);
      setTimeout(() => setCopyFeedback(false), 2000);
    }
  };

  return (
    <footer className="bg-white border-t border-black/5 py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold serif text-black uppercase">Veira.</h3>
            <p className="text-gray-400 font-light text-sm leading-relaxed">
              Empowering Kenyan retail through intelligent oversight and operational clarity.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Platform</h4>
            <ul className="space-y-4 text-sm font-light text-gray-500">
              <li><button onClick={() => onNavigate('pos')} className="hover:text-black">POS System</button></li>
              <li><button onClick={() => onNavigate('agents')} className="hover:text-black">AI Agents</button></li>
              <li><button onClick={() => onNavigate('cloud')} className="hover:text-black">Veira Cloud</button></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Company</h4>
            <ul className="space-y-4 text-sm font-light text-gray-500">
              <li><button onClick={() => onNavigate('our-story')} className="hover:text-black">Our Story</button></li>
              <li><button onClick={() => onNavigate('enterprise')} className="hover:text-black">Enterprise</button></li>
              <li><button onClick={() => onNavigate('pricing')} className="hover:text-black">Pricing</button></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Intelligence Tools</h4>
            <div className="flex flex-wrap gap-2">
              {TOOL_DETAILS.map((tool) => (
                <button
                  key={tool.name}
                  onClick={() => { setActiveTool(tool); setToolResult(null); setError(null); }}
                  className="px-3 py-1 bg-black/5 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
                >
                  {tool.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
            © {new Date().getFullYear()} Veira Intelligence. All Rights Reserved. Nairobi, Kenya.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-black">Terms</a>
            <a href="#" className="hover:text-black">Privacy</a>
            <a href="#" className="hover:text-black">KRA/eTIMS</a>
          </div>
        </div>
      </div>

      {activeTool && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl p-8 md:p-12 space-y-8 animate-in fade-in zoom-in duration-300 relative">
            <button 
              onClick={() => setActiveTool(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-black"
            >
              ✕
            </button>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{activeTool.icon}</span>
                <h3 className="text-2xl font-bold serif">{activeTool.name}</h3>
              </div>
              <p className="text-gray-500 font-light">{activeTool.desc}</p>
            </div>

            {!toolResult ? (
              <div className="space-y-6">
                <textarea
                  value={toolInput}
                  onChange={(e) => setToolInput(e.target.value)}
                  placeholder="Describe what you want to generate (e.g. 'Coffee shop flyer for Westlands')..."
                  className="w-full bg-black/5 border border-black/10 p-4 min-h-[120px] focus:outline-none focus:border-black transition-colors"
                />
                {error && <p className="text-red-500 text-xs italic">{error}</p>}
                <button 
                  disabled={isGenerating || !toolInput.trim()}
                  onClick={handleLaunchTool}
                  className="cta-primary w-full py-6 text-[12px] font-bold uppercase tracking-[0.4em] disabled:opacity-50 flex flex-col items-center justify-center gap-2"
                >
                  {isGenerating ? (
                    <>
                      <div className="flex gap-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                      </div>
                      <span className="text-[9px] opacity-70 tracking-widest animate-pulse">{genStep}</span>
                    </>
                  ) : (
                    `Generate ${activeTool.name}`
                  )}
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="bg-black/5 p-6 overflow-auto max-h-[400px]">
                  {activeTool.name.includes('Logo') || activeTool.name.includes('QR') || activeTool.name.includes('Card') || activeTool.name.includes('Flyer') ? (
                    <div className="flex justify-center" dangerouslySetInnerHTML={{ __html: toolResult }} />
                  ) : (
                    <pre className="whitespace-pre-wrap text-sm font-light text-gray-700">{toolResult}</pre>
                  )}
                </div>
                <div className="flex gap-4">
                  <button onClick={handleCopy} className="flex-1 border border-black py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                    {copyFeedback ? 'Copied!' : 'Copy Result'}
                  </button>
                  <button onClick={() => { setToolResult(null); setToolInput(''); }} className="flex-1 bg-black text-white py-4 text-[10px] font-bold uppercase tracking-widest">
                    Start Over
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
