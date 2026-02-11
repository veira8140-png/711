
import React, { useState } from 'react';
import { generateBrandIdentity } from '../services/gemini.ts';
import { BrandOutput } from '../types.ts';

export const BrandArchitect: React.FC = () => {
  const [industry, setIndustry] = useState('');
  const [vibe, setVibe] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<BrandOutput | null>(null);

  const handleGenerate = async () => {
    if (!industry || !vibe) return;
    setLoading(true);
    try {
      const data = await generateBrandIdentity(industry, vibe);
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="brand" className="glass rounded-none p-6 md:p-16 border-black/5">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 md:mb-12 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold serif mb-3 text-black">Strategic Synthesis</h2>
          <p className="text-gray-500 font-light text-base md:text-lg">Harness Veira Intelligence to architect your next market move.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Industry Sector</label>
            <input 
              type="text" 
              placeholder="e.g. Luxury Retail"
              className="w-full bg-black/5 border-b border-black/10 px-4 py-3 md:py-4 focus:outline-none focus:border-[#8A3FA0] transition-colors text-lg md:text-xl font-light text-black"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Operational Vibe</label>
            <input 
              type="text" 
              placeholder="e.g. Precise, Calm, Human"
              className="w-full bg-black/5 border-b border-black/10 px-4 py-3 md:py-4 focus:outline-none focus:border-[#8A3FA0] transition-colors text-lg md:text-xl font-light text-black"
              value={vibe}
              onChange={(e) => setVibe(e.target.value)}
            />
          </div>
        </div>

        <button 
          onClick={handleGenerate}
          disabled={loading}
          className="cta-button w-full md:w-auto px-12 py-4 md:py-5 font-bold uppercase tracking-widest text-xs disabled:opacity-50"
        >
          {loading ? 'Synthesizing...' : 'Generate Identity'}
        </button>

        {result && (
          <div className="mt-16 md:mt-20 space-y-10 md:space-y-12 animate-in fade-in duration-700">
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 text-black">
              <div className="flex-1 w-full text-center md:text-left">
                <span className="text-[#8A3FA0] text-[10px] font-bold uppercase tracking-[0.3em] block mb-3 md:mb-4">Proposed Identity</span>
                <h3 className="text-4xl md:text-6xl font-black serif leading-tight">{result.name}</h3>
              </div>
              <div className="md:text-right flex-1 w-full text-center md:text-right">
                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em] block mb-3 md:mb-4">Strategic Tagline</span>
                <p className="text-lg md:text-2xl italic serif text-gray-600">"{result.tagline}"</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-black/5 pt-10 md:pt-12">
              <div className="md:col-span-2">
                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest block mb-4">The Vision</span>
                <p className="text-gray-600 leading-relaxed text-base md:text-xl font-light italic">
                  {result.mission}
                </p>
              </div>
              <div>
                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest block mb-4">Core Signals</span>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {result.keywords.map((kw, i) => (
                    <span key={i} className="px-3 py-1 bg-black/5 border border-black/5 text-[9px] md:text-[10px] text-gray-600 uppercase tracking-widest font-bold">{kw}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
