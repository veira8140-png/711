
import React, { useState } from 'react';
import { getAllCounties, getAllCategories, getSubCounties, getTotalPageCount } from '../services/pseoEngine';

export const DirectoryHub: React.FC = () => {
  const counties = getAllCounties();
  const categories = getAllCategories();
  const totalPages = getTotalPageCount();
  const [expandedCounty, setExpandedCounty] = useState<string | null>(null);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">
      <header className="space-y-6 text-center max-w-3xl mx-auto">
        <div className="flex flex-col items-center gap-4">
          <span className="section-label">Retail Intelligence Directory</span>
          <div className="px-4 py-1 bg-[#2D9B9B]/10 border border-[#2D9B9B]/20 rounded-full">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#2D9B9B]">
              {totalPages.toLocaleString()} Pages Indexed
            </span>
          </div>
        </div>
        <h1 className="text-6xl md:text-8xl font-black serif text-black leading-tight tracking-tighter">
          Kenya's Retail <br/><span className="italic text-gray-400">Knowledge Graph.</span>
        </h1>
        <p className="text-xl text-gray-500 font-light leading-relaxed">
          Browse over 100,000 specialized POS and retail management guides for every county, sub-county, and business category in Kenya.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-8 space-y-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {counties.map((county) => (
              <div key={county} className="space-y-6 p-8 bg-gray-50 rounded-[2rem] border border-black/5 hover:border-[#2D9B9B]/20 transition-all group">
                <div className="flex justify-between items-center border-b border-black/5 pb-4">
                  <h3 className="text-2xl font-bold serif italic text-black">
                    {county}
                  </h3>
                  <button 
                    onClick={() => setExpandedCounty(expandedCounty === county ? null : county)}
                    className="text-[10px] font-bold uppercase tracking-widest text-[#2D9B9B]"
                  >
                    {expandedCounty === county ? 'Close' : 'Explore'}
                  </button>
                </div>
                
                <ul className="space-y-3">
                  {categories.slice(0, 4).map((cat) => (
                    <li key={cat.id}>
                      <button 
                        onClick={() => navigateTo(`/locations/${county.toLowerCase()}/best-pos-system-${cat.id}`)}
                        className="text-sm text-gray-500 hover:text-[#2D9B9B] transition-colors flex items-center gap-2"
                      >
                        <span>{cat.icon}</span>
                        {cat.name} Guide →
                      </button>
                    </li>
                  ))}
                </ul>

                {expandedCounty === county && (
                  <div className="pt-6 space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Sub-counties</h4>
                      <div className="flex flex-wrap gap-2">
                        {getSubCounties(county).map(sub => (
                          <button 
                            key={sub}
                            onClick={() => navigateTo(`/locations/${county.toLowerCase()}/${sub.toLowerCase()}/best-pos-system-retail`)}
                            className="px-3 py-1 bg-white border border-black/5 rounded-full text-[10px] text-gray-500 hover:border-[#2D9B9B] hover:text-[#2D9B9B]"
                          >
                            {sub}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <aside className="md:col-span-4 space-y-12">
          <div className="sticky top-32 p-12 bg-black text-white rounded-[3rem] space-y-8">
            <h3 className="text-3xl font-bold serif italic">Scale Your Business</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              Veira Intelligence is deployed in all 47 counties, providing real-time e-TIMS compliance and M-Pesa integration for high-growth retailers.
            </p>
            <button className="w-full py-6 bg-[#2D9B9B] text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              Get Started Free
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};
