
import React from 'react';
import { PSEOPage } from '../types/pseo';

interface Props {
  page: PSEOPage;
}

export const DynamicPSEOPage: React.FC<Props> = ({ page }) => {
  return (
    <article className="max-w-5xl mx-auto px-6 py-20 animate-in fade-in duration-1000">
      <header className="mb-16 space-y-8">
        <div className="flex items-center gap-4">
          <span className="px-3 py-1 rounded-full bg-[#2D9B9B]/10 text-[#2D9B9B] text-[10px] font-bold uppercase tracking-widest">
            {page.playbook_type}
          </span>
          <span className="text-gray-300">/</span>
          <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
            {page.seo.search_intent}
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black serif text-black leading-[1.1] tracking-tighter">
          {page.content.h1}
        </h1>
        
        <p className="text-2xl text-gray-500 font-light leading-relaxed max-w-3xl italic border-l-4 border-[#2D9B9B] pl-8">
          {page.content.introduction}
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-16">
          {page.content.sections.map((section, idx) => (
            <section key={idx} className="space-y-6">
              <h2 className="text-3xl font-bold serif text-black italic">
                {section.heading}
              </h2>
              <div className="prose prose-lg prose-stone max-w-none text-gray-600 font-light leading-relaxed whitespace-pre-line">
                {section.body}
              </div>
            </section>
          ))}

          {/* Playbook Specific UI: Comparisons */}
          {page.playbook_type === 'Comparisons' && page.content.comparison_data && (
            <section className="space-y-8 bg-black text-white p-12 rounded-[2rem]">
              <h3 className="text-3xl font-bold serif italic">Feature Comparison Matrix</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="py-4 text-[10px] uppercase tracking-widest text-gray-400">Feature</th>
                      <th className="py-4 text-[10px] uppercase tracking-widest text-white">Veira Intelligence</th>
                      <th className="py-4 text-[10px] uppercase tracking-widest text-gray-400">Traditional Systems</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {page.content.comparison_data.matrix.map((row, i) => (
                      <tr key={i}>
                        <td className="py-4 font-medium text-sm">{row.feature}</td>
                        <td className="py-4 text-sm text-[#2D9B9B] font-bold">{row.val1}</td>
                        <td className="py-4 text-sm text-gray-400">{row.val2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="pt-8 border-t border-white/10">
                <p className="text-xl italic text-gray-300">
                  <span className="text-white font-bold not-italic mr-2">Verdict:</span>
                  {page.content.comparison_data.verdict}
                </p>
              </div>
            </section>
          )}

          {/* Playbook Specific UI: Curation */}
          {page.playbook_type === 'Curation' && page.content.curation_data && (
            <section className="space-y-12">
              <div className="p-8 bg-gray-50 rounded-3xl border border-black/5">
                <h3 className="text-xl font-bold serif italic mb-4">Ranking Criteria</h3>
                <p className="text-gray-500 font-light">{page.content.curation_data.criteria}</p>
              </div>
              <div className="space-y-8">
                {page.content.curation_data.items.map((item, i) => (
                  <div key={i} className="p-8 border border-black/5 rounded-3xl space-y-6">
                    <div className="flex justify-between items-start">
                      <h4 className="text-2xl font-bold serif">{item.name}</h4>
                      <span className="px-3 py-1 bg-black text-white text-[10px] font-bold rounded-full">RANK #{i+1}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold uppercase text-emerald-600">Pros</span>
                        <ul className="text-sm text-gray-500 space-y-1">
                          {item.pros.map((p, pi) => <li key={pi}>+ {p}</li>)}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold uppercase text-rose-600">Cons</span>
                        <ul className="text-sm text-gray-500 space-y-1">
                          {item.cons.map((c, ci) => <li key={ci}>- {c}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Playbook Specific UI: Conversions */}
          {page.playbook_type === 'Conversions' && page.content.conversion_data && (
            <section className="p-12 bg-[#2D9B9B]/5 border border-[#2D9B9B]/20 rounded-[2rem] space-y-8">
              <h3 className="text-3xl font-bold serif italic text-[#2D9B9B]">Live Conversion Tool</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Input Value (KSh)</label>
                  <input type="number" className="w-full p-4 bg-white border border-black/10 rounded-xl focus:outline-none focus:border-[#2D9B9B]" placeholder="Enter amount..." />
                </div>
                <div className="space-y-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Calculated Result</label>
                  <div className="w-full p-4 bg-white border border-black/10 rounded-xl font-bold text-xl text-black">
                    --
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500 italic">{page.content.conversion_data.logic_description}</p>
            </section>
          )}

          <section className="space-y-12">
            <h2 className="text-3xl font-bold serif text-black">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {page.content.faq.map((item, idx) => (
                <div key={idx} className="p-8 glass border-black/5 rounded-3xl space-y-4">
                  <h4 className="text-xl font-bold italic text-black">{item.question}</h4>
                  <p className="text-gray-500 font-light leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="lg:col-span-4 space-y-12">
          <div className="sticky top-32 space-y-12">
            <div className="p-8 bg-gray-50 rounded-3xl space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">Related Intelligence</h3>
              <nav className="space-y-4">
                {page.related_pages.map((link, i) => (
                  <a 
                    key={i} 
                    href={link}
                    className="block text-sm font-medium text-black hover:text-[#2D9B9B] transition-colors"
                  >
                    {link.split('/').pop()?.replace(/-/g, ' ')} →
                  </a>
                ))}
              </nav>
            </div>

            <div className="p-8 border border-black/5 rounded-3xl space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">Quick Actions</h3>
              <button className="w-full py-4 bg-[#2D9B9B] text-white rounded-xl font-bold text-sm hover:bg-black transition-all">
                {page.content.call_to_action}
              </button>
            </div>
          </div>
        </aside>
      </div>
      
      <script type="application/ld+json">
        {JSON.stringify(page.schema.structured_data)}
      </script>
    </article>
  );
};
