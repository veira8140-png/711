
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
    <div id="brand" className="glass rounded-none p-8 md:p-16 border-white/5">
      <div className="max-w-4xl">
        <div className="mb-12">
          <h2 className="text-4xl font-bold serif mb-4">Strategic Synthesis</h2>
          <p className="text-gray-400 font-light text-lg">Harness Veira Intelligence to architect your next market move.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Industry Sector</label>
            <input 
              type="text" 
              placeholder="e.g. Luxury Retail"
              className="w-full bg-black/20 border-b border-white/10 px-0 py-4 focus:outline-none focus:border-[#8A3FA0] transition-colors text-xl font-light text-white"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Operational Vibe</label>
            <input 
              type="text" 
              placeholder="e.g. Precise, Calm, Human"
              className="w-full bg-black/20 border-b border-white/10 px-0 py-4 focus:outline-none focus:border-[#8A3FA0] transition-colors text-xl font-light text-white"
              value={vibe}
              onChange={(e) => setVibe(e.target.value)}
            />
          </div>
        </div>

        <button 
          onClick={handleGenerate}
          disabled={loading}
          className="cta-button px-12 py-5 font-bold uppercase tracking-widest text-xs disabled:opacity-50"
        >
          {loading ? 'Synthesizing...' : 'Generate Identity'}
        </button>

        {result && (
          <div className="mt-20 space-y-12 animate-in fade-in duration-700">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div className="flex-1">
                <span className="text-[#8A3FA0] text-[10px] font-bold uppercase tracking-[0.3em] block mb-4">Proposed Identity</span>
                <h3 className="text-6xl font-black serif leading-tight">{result.name}</h3>
              </div>
              <div className="md:text-right flex-1">
                <span className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em] block mb-4">Strategic Tagline</span>
                <p className="text-2xl italic serif text-gray-300">"{result.tagline}"</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12 border-t border-white/5 pt-12">
              <div className="md:col-span-2">
                <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest block mb-4">The Vision</span>
                <p className="text-gray-300 leading-relaxed text-xl font-light italic">
                  {result.mission}
                </p>
              </div>
              <div>
                <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest block mb-4">Core Signals</span>
                <div className="flex flex-wrap gap-3">
                  {result.keywords.map((kw, i) => (
                    <span key={i} className="px-4 py-1 bg-white/5 border border-white/5 text-[10px] text-gray-300 uppercase tracking-widest">{kw}</span>
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
