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
    <div className="glass rounded-none p-6 md:p-16 border-black/5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div className="order-2 md:order-1 text-left">
          <h2 className="text-2xl md:text-4xl font-bold serif mb-3 text-black">Visual Synthesis</h2>
          <p className="text-gray-500 font-light text-base md:text-lg mb-8 md:mb-12 leading-relaxed">
            Translate abstract operational data into high-fidelity brand assets. 
          </p>
          
          <div className="mb-6 md:mb-8">
            <textarea 
              rows={3}
              placeholder="Describe the visual essence..."
              className="w-full bg-black/5 border border-black/10 px-5 py-5 focus:outline-none focus:border-[#8A3FA0] transition-colors resize-none text-base md:text-lg font-light text-black"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          <button 
            onClick={handleGenerate}
            disabled={loading}
            className="cta-primary w-full px-12 py-4 md:py-5 font-bold uppercase tracking-widest text-xs disabled:opacity-50 flex items-center justify-center gap-3"
          >
            {loading ? (
              <>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>Synthesizing...</span>
              </>
            ) : 'Generate Asset'}
          </button>
        </div>

        <div className="order-1 md:order-2 relative aspect-square bg-gray-100 flex items-center justify-center border border-black/5 group overflow-hidden max-w-sm mx-auto md:max-w-none w-full">
          {image ? (
            <img src={image} alt="Generated visual asset" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          ) : (
            <div className="text-center p-6 md:p-8">
              <div className="w-12 h-12 md:w-16 md:h-16 border border-black/10 rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center opacity-20">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-black/20 rounded-full"></div>
              </div>
              <p className="text-gray-400 text-[8px] md:text-[10px] uppercase tracking-[0.3em]">Waiting for Input</p>
            </div>
          )}
          <div className="absolute top-4 left-4 w-4 h-[1px] bg-black/10"></div>
          <div className="absolute top-4 left-4 w-[1px] h-4 bg-black/10"></div>
          <div className="absolute bottom-4 right-4 w-4 h-[1px] bg-black/10"></div>
          <div className="absolute bottom-4 right-4 w-[1px] h-4 bg-black/10"></div>
        </div>
      </div>
    </div>
  );
};