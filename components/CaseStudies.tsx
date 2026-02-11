
import React from 'react';

const cases = [
  {
    category: "Small Retail Shop",
    title: "From \"I Don’t Know Where My Money Goes\" → Daily Sales Clarity",
    location: "Umoja, Nairobi",
    business: "Mini Market",
    problem: [
      "Owner relied on staff verbal reports",
      "No accurate daily sales records",
      "Frequent stock losses",
      "Constant suspicion & stress"
    ],
    quote: "Some days sales were ‘low’, but stock kept disappearing.",
    solution: [
      "Every sale recorded",
      "Live phone monitoring",
      "Clear daily totals",
      "Staff accountability"
    ],
    results: [
      "Daily sales visibility",
      "Stock discrepancies reduced",
      "Owner confidence restored",
      "Less conflict with staff"
    ],
    finalQuote: "Now I know exactly what my shop makes every day."
  },
  {
    category: "Restaurant / Café",
    title: "Stopping Revenue Leaks in a Busy Restaurant",
    location: "Westlands",
    business: "Local Café",
    problem: [
      "Orders written manually",
      "Bills sometimes “forgotten”",
      "Cash mismatches",
      "No reliable audit trail"
    ],
    quote: "End-month numbers never made sense.",
    solution: [
      "Every order captured",
      "No deleted sales",
      "Clear cashier tracking",
      "Accurate reporting"
    ],
    results: [
      "Sales leakage controlled",
      "Faster billing",
      "Cleaner reconciliation",
      "Owner peace of mind"
    ],
    finalQuote: "If food leaves the kitchen, it must be paid for."
  }
];

export const CaseStudies: React.FC = () => {
  return (
    <div id="case-study" className="space-y-32">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <span className="text-[#8A3FA0] text-[10px] font-bold uppercase tracking-[0.4em]">Proven Outcomes</span>
        <h2 className="text-5xl md:text-7xl font-bold serif text-black">Case Studies</h2>
        <p className="text-xl text-gray-500 font-light">Real businesses. Real results. Total certainty.</p>
      </div>

      <div className="space-y-24">
        {cases.map((c, i) => (
          <div key={i} className="glass p-8 md:p-16 border-black/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
              <span className="text-9xl serif font-black text-black">{i + 1}</span>
            </div>
            
            <div className="relative z-10 space-y-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-2">
                  <span className="text-[#2D9B9B] text-[10px] font-bold uppercase tracking-widest">{c.category} • {c.location}</span>
                  <h3 className="text-3xl md:text-4xl font-bold serif max-w-2xl text-black">{c.title}</h3>
                </div>
                <div className="text-right">
                   <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">Business Type</p>
                   <p className="text-black font-medium">{c.business}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-16">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-red-500">The Problem</h4>
                    <ul className="space-y-3">
                      {c.problem.map((p, idx) => (
                        <li key={idx} className="text-gray-500 font-light flex items-start gap-3">
                          <span className="text-red-400 mt-1.5">•</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-lg italic serif text-gray-400 border-l border-black/5 pl-6">
                    "{c.quote}"
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="space-y-6">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#2D9B9B]">The Veira Solution</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {c.solution.map((s, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#2D9B9B]"></div>
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-black/5 p-8 border border-black/5 space-y-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#8A3FA0]">Verified Results</h4>
                    <ul className="space-y-3">
                      {c.results.map((r, idx) => (
                        <li key={idx} className="text-black font-medium flex items-center gap-3">
                          <svg className="w-4 h-4 text-[#2D9B9B]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-black/5 text-center">
                <p className="text-2xl serif italic text-black/90">"{c.finalQuote}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
