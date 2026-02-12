import React, { useState } from 'react';
import { runVeiraTool } from '../services/gemini.ts';

interface FooterProps {
  onNavigate: (id: string) => void;
}

const FooterLink: React.FC<{ label: string; href?: string; onClick?: (e: React.MouseEvent) => void; isNew?: boolean }> = ({ label, href = "#", onClick, isNew }) => (
  <li>
    <a 
      href={href} 
      onClick={onClick}
      className="text-[13px] text-gray-500 hover:text-[#2D9B9B] transition-colors duration-200 flex items-center gap-2 group whitespace-nowrap"
    >
      {label}
      {isNew && (
        <span className="text-[9px] bg-[#2D9B9B]/10 text-[#2D9B9B] px-1.5 py-0.5 font-bold rounded-sm uppercase tracking-tighter">New</span>
      )}
    </a>
  </li>
);

const ToolItem: React.FC<{ icon: string; label: string; desc: string; onClick: () => void }> = ({ icon, label, desc, onClick }) => (
  <li>
    <button 
      onClick={(e) => { e.preventDefault(); onClick(); }}
      className="w-full text-left group flex items-start gap-3 p-2 -ml-2 rounded-xl hover:bg-white hover:shadow-xl hover:shadow-[#2D9B9B]/5 transition-all duration-300"
    >
      <span className="text-xl shrink-0 grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110">{icon}</span>
      <div className="space-y-0.5">
        <span className="block text-[13px] font-semibold text-gray-700 group-hover:text-[#2D9B9B] transition-colors">{label}</span>
        <span className="block text-[11px] text-gray-400 font-light leading-tight group-hover:text-gray-500">{desc}</span>
      </div>
    </button>
  </li>
);

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();
  const [activeTool, setActiveTool] = useState<{ name: string; icon: string } | null>(null);
  const [toolInput, setToolInput] = useState('');
  const [toolResult, setToolResult] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleNav = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onNavigate(id);
  };

  const handleLaunchTool = async () => {
    if (!activeTool || !toolInput.trim()) return;
    setIsGenerating(true);
    try {
      const result = await runVeiraTool(activeTool.name, toolInput);
      setToolResult(result);
    } catch (err) {
      console.error(err);
      setToolResult("An error occurred during generation. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const resetTool = () => {
    setActiveTool(null);
    setToolInput('');
    setToolResult(null);
    setIsGenerating(false);
  };

  // Helper to detect if the result is SVG
  const isSvg = (str: string) => str.trim().startsWith('<svg') || str.includes('</svg>');

  return (
    <footer className="bg-white border-t border-black/5 pt-32 pb-16 px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        
        {/* Main Mega Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-16 gap-x-8 mb-32">
          
          {/* Column 1: Solutions & Brand */}
          <div className="col-span-2 md:col-span-1 space-y-12">
            <div className="space-y-6">
              <a href="#" onClick={(e) => handleNav(e, 'hero')} className="text-3xl font-black serif tracking-tighter uppercase text-black">veira.</a>
              <p className="text-[14px] text-gray-400 font-light leading-relaxed max-w-[240px]">
                The leading retail intelligence platform and cloud POS system for high-growth businesses in Kenya.
              </p>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black">Solutions</h4>
              <ul className="space-y-4">
                <FooterLink label="Cloud POS System" onClick={(e) => handleNav(e, 'pos')} />
                <FooterLink label="Inventory Management" onClick={(e) => handleNav(e, 'pos')} />
                <FooterLink label="M-PESA Integration" onClick={(e) => handleNav(e, 'pos')} isNew />
                <FooterLink label="AI Agent Workforce" onClick={(e) => handleNav(e, 'agents')} />
                <FooterLink label="Enterprise Oversight" onClick={(e) => handleNav(e, 'enterprise')} />
                <FooterLink label="eTIMS Compliance" onClick={(e) => handleNav(e, 'faq')} />
              </ul>
            </div>
          </div>

          {/* Column 2: AI Operations & Compliance */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black">🏢 Operations</h4>
              <p className="text-[10px] text-gray-400 font-medium">Control. Protect. Remove Guesswork.</p>
            </div>
            <ul className="space-y-3">
              <ToolItem icon="📊" label="Sales Tracker" desc="See what you made today." onClick={() => setActiveTool({name: 'Daily Sales Tracker', icon: '📊'})} />
              <ToolItem icon="🛡️" label="Theft Risk Calc" desc="Detect weak spots early." onClick={() => setActiveTool({name: 'Staff Theft Risk Calculator', icon: '🛡️'})} />
              <ToolItem icon="✅" label="eTIMS Checker" desc="Stay audit-ready." onClick={() => setActiveTool({name: 'ETIMS Compliance Checker', icon: '✅'})} />
              <ToolItem icon="💰" label="Margin Estimator" desc="Know what you keep." onClick={() => setActiveTool({name: 'Profit Margin Estimator', icon: '💰'})} />
              <ToolItem icon="📦" label="Stock Alerts" desc="Prevent silent shrinkage." onClick={() => setActiveTool({name: 'Stock Alert Calculator', icon: '📦'})} />
              <ToolItem icon="👥" label="Visit Estimator" desc="Plan smarter traffic." onClick={() => setActiveTool({name: 'Customer Visit Estimator', icon: '👥'})} />
              <ToolItem icon="🧾" label="Tax Calculator" desc="No surprises later." onClick={() => setActiveTool({name: 'Quick Tax Calculator', icon: '🧾'})} />
            </ul>
          </div>

          {/* Column 3: AI Branding & Marketing */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black">🎨 Branding</h4>
              <p className="text-[10px] text-gray-400 font-medium">Look Pro. Attract. Convert.</p>
            </div>
            <ul className="space-y-3">
              <ToolItem icon="🎨" label="Logo Generator" desc="Brand identity in minutes." onClick={() => setActiveTool({name: 'Free Logo Generator', icon: '🎨'})} />
              <ToolItem icon="🏷️" label="Name Generator" desc="Memorable business names." onClick={() => setActiveTool({name: 'Business Name Generator', icon: '🏷️'})} />
              <ToolItem icon="✍️" label="Content Gen" desc="Persuasive social posts." onClick={() => setActiveTool({name: 'Social Media Content Generator', icon: '✍️'})} />
              <ToolItem icon="💳" label="Card Generator" desc="Ready-to-print cards." onClick={() => setActiveTool({name: 'Business Card Generator', icon: '💳'})} />
              <ToolItem icon="📢" label="Poster Creator" desc="No designer needed." onClick={() => setActiveTool({name: 'Promo Poster and Flyer Generator', icon: '📢'})} />
              <ToolItem icon="🔗" label="QR Generator" desc="Connect instantly." onClick={() => setActiveTool({name: 'QR Code Generator', icon: '🔗'})} />
            </ul>
          </div>

          {/* Column 4: AI Engagement & Sales */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black">💬 Engagement</h4>
              <p className="text-[10px] text-gray-400 font-medium">Turn visitors into repeat buyers.</p>
            </div>
            <ul className="space-y-3">
              <ToolItem icon="📝" label="Feedback Forms" desc="Collect insights easily." onClick={() => setActiveTool({name: 'Customer Feedback Form Generator', icon: '📝'})} />
              <ToolItem icon="🎁" label="Loyalty Calc" desc="Rewards that protect profit." onClick={() => setActiveTool({name: 'Loyalty Program Calculator', icon: '🎁'})} />
              <ToolItem icon="🧾" label="Invoice Gen" desc="Shareable invoices fast." onClick={() => setActiveTool({name: 'Simple Invoice Generator', icon: '🧾'})} />
              <ToolItem icon="💸" label="Promo Planner" desc="Run offers that work." onClick={() => setActiveTool({name: 'Discount and Promotion Planner', icon: '💸'})} />
            </ul>
          </div>

          {/* Column 5: Company & Legal */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black">Company</h4>
              <ul className="space-y-4">
                <FooterLink label="Our Story" onClick={(e) => handleNav(e, 'our-story')} />
                <FooterLink label="Success Proof" onClick={(e) => handleNav(e, 'testimonials')} />
                <FooterLink label="Pricing Plans" onClick={(e) => handleNav(e, 'pricing')} />
                <FooterLink label="Help Center (FAQ)" onClick={(e) => handleNav(e, 'faq')} />
                <FooterLink label="Contact Us" href="mailto:hello@veira.co" />
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black">Resources</h4>
              <ul className="space-y-4">
                <FooterLink label="Retail Blog" />
                <FooterLink label="eTIMS Guide" isNew />
                <FooterLink label="Kenya POS Laws" />
                <FooterLink label="API Docs" />
              </ul>
            </div>
          </div>
        </div>

        {/* Micro-CTA & Trust Bar */}
        <div className="pt-16 pb-12 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-black">All tools powered by Veira AI.</p>
            <p className="text-[13px] text-gray-400 font-light">Try them free. <span className="text-[#2D9B9B] font-semibold">Simplify your business today.</span></p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?u=veira${i}`} alt="User" className="w-full h-full object-cover grayscale" />
                </div>
              ))}
            </div>
            <p className="text-[11px] text-gray-500 font-medium">Trusted by 1,200+ shop owners in Kenya</p>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-12">
            <p className="text-[11px] text-gray-400 font-medium">© {currentYear} Veira Intelligence Limited</p>
            <div className="flex gap-8">
              <a href="#" className="text-[11px] text-gray-400 hover:text-black transition-colors font-medium">Privacy</a>
              <a href="#" className="text-[11px] text-gray-400 hover:text-black transition-colors font-medium">Terms</a>
              <a href="#" className="text-[11px] text-gray-400 hover:text-black transition-colors font-medium">Cookie Settings</a>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            {['𝕏', 'LinkedIn', 'Instagram', 'WhatsApp'].map(social => (
              <a key={social} href="#" className="text-[13px] text-gray-400 hover:text-[#2D9B9B] transition-colors">{social}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Tool Overlay */}
      {activeTool && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={resetTool}></div>
          <div className="bg-white rounded-[2rem] p-8 md:p-12 max-w-2xl w-full relative z-[210] shadow-2xl animate-in zoom-in-95 fade-in duration-300 max-h-[90vh] overflow-y-auto">
            <button 
              onClick={resetTool}
              className="absolute top-6 right-6 text-gray-300 hover:text-black transition-colors"
            >
              ✕
            </button>
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <span className="text-5xl">{activeTool.icon}</span>
                <div>
                  <h4 className="text-2xl font-bold serif italic text-black">{activeTool.name}</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#2D9B9B]">Powered by Veira AI Intelligence</p>
                </div>
              </div>

              {!toolResult ? (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Describe your Business or Requirement</label>
                    <textarea 
                      placeholder={activeTool.name.includes('Generator') ? "e.g., 'Modern boutique in Nairobi called Zuri Styles'" : "e.g., 'I sell 100 units at 500 KES with cost of 300 KES'"}
                      className="w-full bg-black/5 border-b border-black/10 px-4 py-4 focus:outline-none focus:border-[#2D9B9B] transition-colors font-light text-black min-h-[120px] resize-none"
                      value={toolInput}
                      onChange={(e) => setToolInput(e.target.value)}
                    />
                  </div>
                  <button 
                    disabled={isGenerating || !toolInput.trim()}
                    onClick={handleLaunchTool}
                    className="cta-primary w-full py-6 text-[10px] font-bold uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isGenerating ? (
                      <>
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                        <span>Veira is thinking...</span>
                      </>
                    ) : (
                      `Launch ${activeTool.name} Now`
                    )}
                  </button>
                </div>
              ) : (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="p-6 bg-gray-50 rounded-2xl border border-black/5 min-h-[200px]">
                    {isSvg(toolResult) ? (
                      <div className="flex flex-col items-center gap-6">
                        <div className="w-full max-w-[300px] aspect-square flex items-center justify-center bg-white p-4 rounded-xl shadow-inner overflow-hidden" 
                             dangerouslySetInnerHTML={{ __html: toolResult }} />
                        <p className="text-[10px] text-gray-400 italic">Live preview generated by Veira AI</p>
                      </div>
                    ) : (
                      <div className="prose prose-sm max-w-none text-gray-700 font-light whitespace-pre-wrap leading-relaxed">
                        {toolResult}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-4">
                    <button 
                      onClick={() => { setToolResult(null); setToolInput(''); }}
                      className="flex-1 py-4 border border-black/10 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all"
                    >
                      Start New Analysis
                    </button>
                    <button 
                      onClick={() => {
                        const blob = new Blob([toolResult], { type: isSvg(toolResult) ? 'image/svg+xml' : 'text/plain' });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = `veira-${activeTool.name.toLowerCase().replace(/\s+/g, '-')}.${isSvg(toolResult) ? 'svg' : 'txt'}`;
                        a.click();
                      }}
                      className="cta-primary flex-1 py-4 text-[10px] font-bold uppercase tracking-widest"
                    >
                      Download Result
                    </button>
                  </div>
                </div>
              )}

              <p className="text-[10px] text-center text-gray-400 font-light italic leading-relaxed">
                Free Power-up Suite. Results are AI-generated based on Kenyan market context.
              </p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
