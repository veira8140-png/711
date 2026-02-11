
import React, { useState } from 'react';
import { generateImage } from '../services/gemini.ts';

export const VisualStudio: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    try {
      const url = await generateImage(prompt);
      setImage(url);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="visual" className="glass rounded-none p-8 md:p-16 border-white/5">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl font-bold serif mb-4">Visual Synthesis</h2>
          <p className="text-gray-400 font-light text-lg mb-12 leading-relaxed">
            Translate abstract operational data into high-fidelity brand assets. 
            Calm, precise, and human-centric generation.
          </p>
          
          <div className="mb-8">
            <textarea 
              rows={4}
              placeholder="Describe the visual essence..."
              className="w-full bg-black/20 border border-white/10 px-6 py-6 focus:outline-none focus:border-[#8A3FA0] transition-colors resize-none text-lg font-light text-gray-300"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          <button 
            onClick={handleGenerate}
            disabled={loading}
            className="cta-button w-full px-12 py-5 font-bold uppercase tracking-widest text-xs disabled:opacity-50 flex items-center justify-center gap-3"
          >
            {loading ? (
              <>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>Synthesizing...</span>
              </>
            ) : 'Generate Asset'}
          </button>
        </div>

        <div className="relative aspect-square bg-black/40 flex items-center justify-center border border-white/5 group overflow-hidden">
          {image ? (
            <img src={image} alt="Generated visual asset" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          ) : (
            <div className="text-center p-8">
              <div className="w-16 h-16 border border-white/10 rounded-full mx-auto mb-6 flex items-center justify-center opacity-20">
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
              </div>
              <p className="text-gray-600 text-[10px] uppercase tracking-[0.3em]">Waiting for Input</p>
            </div>
          )}
          {/* Decorative frame elements */}
          <div className="absolute top-4 left-4 w-4 h-[1px] bg-white/20"></div>
          <div className="absolute top-4 left-4 w-[1px] h-4 bg-white/20"></div>
          <div className="absolute bottom-4 right-4 w-4 h-[1px] bg-white/20"></div>
          <div className="absolute bottom-4 right-4 w-[1px] h-4 bg-white/20"></div>
        </div>
      </div>
    </div>
  );
};
