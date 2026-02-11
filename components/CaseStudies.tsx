import React from 'react';

interface CaseStudyProps {
  number: number;
  title: string;
  subtitle: string;
  business: string;
  type: string;
  location: string;
  problem: string[];
  problemQuote: string;
  solution: string[];
  results: string[];
  resultQuote: string;
}

const CaseStudyCard: React.FC<CaseStudyProps> = ({ 
  number, title, subtitle, business, type, location, problem, problemQuote, solution, results, resultQuote 
}) => (
  <div className="glass p-8 md:p-16 border-black/5 space-y-12 transition-all hover:border-black/10">
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em]">Story 0{number}</span>
        <div className="h-px flex-1 bg-black/5"></div>
      </div>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <h3 className="text-3xl md:text-5xl font-bold serif text-black leading-tight">{title}</h3>
          <p className="text-xl italic text-gray-400 font-light serif">"{subtitle}"</p>
        </div>
        <div className="text-left md:text-right shrink-0">
          <p className="text-sm font-bold text-black uppercase tracking-widest">{business}</p>
          <p className="text-[10px] text-gray-400 uppercase tracking-widest">{type} • {location}</p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
      <div className="space-y-6">
        <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-red-400/80">The Problem</h4>
        <ul className="space-y-4">
          {problem.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-500 font-light leading-relaxed">
              <span className="mt-2 w-1.5 h-px bg-gray-300"></span>
              {item}
            </li>
          ))}
        </ul>
        <p className="pt-4 text-gray-400 italic font-light serif text-lg border-t border-black/5">"{problemQuote}"</p>
      </div>

      <div className="space-y-6">
        <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-[#2D9B9B]">The Fix</h4>
        <ul className="space-y-4">
          {solution.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-black font-medium leading-relaxed">
              <span className="text-[#2D9B9B]">✔</span>
              {item}
            </li>
          ))}
        </ul>
        
        <div className="pt-8 space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">The Result</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {results.map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-black/5 px-4 py-3 border border-black/5">
                <span className="text-[#2D9B9B] text-xs">✅</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-black">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xl font-bold serif text-black pt-4 border-t border-black/5 italic">
            "{resultQuote}"
          </p>
        </div>
      </div>
    </div>
  </div>
);

export const CaseStudies: React.FC = () => {
  const cases = [
    {
      title: "Easy Sales Tracking",
      subtitle: "Know exactly what you made every day",
      business: "Mini Market",
      type: "Shop",
      location: "Umoja, Nairobi",
      problem: [
        "Did not know daily sales",
        "Stock kept going missing",
        "Staff reports were not clear",
        "Owner felt stressed"
      ],
      problemQuote: "I never knew how much money was in the till.",
      solution: [
        "All sales recorded automatically",
        "Owner sees sales on their phone",
        "Daily totals are always clear",
        "Staff are more careful"
      ],
      results: [
        "Sales are clear",
        "Stock stays safe",
        "Less stress for owner",
        "No staff arguments"
      ],
      resultQuote: "Now I know every cent my shop makes."
    },
    {
      title: "No More Missing Food",
      subtitle: "Better control in a busy kitchen",
      business: "Local Café",
      type: "Restaurant",
      location: "Westlands, Nairobi",
      problem: [
        "Orders were on paper and got lost",
        "Customers left without paying",
        "Money at end of day was wrong",
        "No way to check old sales"
      ],
      problemQuote: "Food was leaving the kitchen but money was missing.",
      solution: [
        "All orders are digital now",
        "Staff cannot delete sales",
        "Track every shift easily",
        "Clear reports every day"
      ],
      results: [
        "No more missing money",
        "Customers pay faster",
        "Easy to check records",
        "Peace of mind"
      ],
      resultQuote: "If food is cooked, it is paid for."
    }
  ];

  return (
    <div className="space-y-32">
      <div className="max-w-3xl space-y-6">
        <span className="section-label">Happy Customers</span>
        <h2 className="text-4xl md:text-7xl font-bold serif text-black leading-tight">
          Success <br/><span className="italic text-gray-400">Stories.</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
          From shops in Umoja to restaurants in Westlands, we help owners 
          know exactly where their money is.
        </p>
      </div>

      <div className="space-y-12 md:space-y-24">
        {cases.map((c, i) => (
          <CaseStudyCard key={i} number={i + 1} {...c} />
        ))}
      </div>

      <div className="bg-black text-white p-12 md:p-20 text-center space-y-8">
        <h3 className="text-3xl md:text-5xl font-bold serif italic">Is your shop next?</h3>
        <p className="text-gray-400 max-w-xl mx-auto font-light leading-relaxed">
          Don't wait until money goes missing. Join the hundreds of 
          shop owners in Kenya using Veira.
        </p>
        <button className="cta-primary bg-white text-black px-12 py-5 font-bold uppercase tracking-widest text-xs">
          Learn More
        </button>
      </div>
    </div>
  );
};