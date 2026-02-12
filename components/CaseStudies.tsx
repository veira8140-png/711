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
  <div className="glass p-8 md:p-16 border-black/5 space-y-12 transition-all hover:border-[#2D9B9B]/20 group">
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="text-[10px] font-bold text-[#2D9B9B] uppercase tracking-[0.4em]">Story 0{number}</span>
        <div className="h-px flex-1 bg-black/5"></div>
      </div>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <h3 className="text-3xl md:text-5xl font-bold serif text-black leading-tight group-hover:italic transition-all duration-500">{title}</h3>
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
              <span className="mt-2 w-1.5 h-px bg-red-200"></span>
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
          <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">The Outcome</h4>
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
      subtitle: "I Don’t Know Where My Money Goes → Daily Sales Clarity",
      business: "Mini Market",
      type: "Retail Shop",
      location: "Umoja, Nairobi",
      problem: [
        "Relied on staff verbal reports",
        "No accurate daily sales",
        "Frequent stock losses",
        "Constant stress and suspicion"
      ],
      problemQuote: "Some days sales were ‘low’, but stock kept disappearing.",
      solution: [
        "Every sale recorded automatically",
        "Live monitoring on phone",
        "Clear daily totals",
        "Staff accountability enforced"
      ],
      results: [
        "Daily sales visibility",
        "Stock discrepancies minimized",
        "Owner confidence restored",
        "Less conflict with staff"
      ],
      resultQuote: "Now I know exactly what my shop makes every day. I run the shop without guessing."
    },
    {
      title: "Stopping Revenue Leaks",
      subtitle: "Eliminating loss in a busy restaurant kitchen",
      business: "Local Café",
      type: "Restaurant",
      location: "Westlands, Nairobi",
      problem: [
        "Orders handwritten on paper",
        "Bills sometimes “forgotten”",
        "End of day cash mismatches",
        "No reliable audit trail"
      ],
      problemQuote: "End-month numbers never made sense.",
      solution: [
        "Every order captured digitally",
        "No deleted or altered sales",
        "Clear cashier tracking",
        "Accurate, real-time reporting"
      ],
      results: [
        "Sales leakage controlled",
        "Faster billing process",
        "Clean reconciliation",
        "Peace of mind for owner"
      ],
      resultQuote: "If food leaves the kitchen, it must be paid for. Now it always is."
    },
    {
      title: "Managing Multiple Locations",
      subtitle: "Growing the business without the chaos",
      business: "Electronics Retailer",
      type: "Growing Business (3 Branches)",
      location: "Nairobi Central",
      problem: [
        "Separate systems per branch",
        "No centralized visibility",
        "Inconsistent manager reports",
        "Hard to detect underperformance"
      ],
      problemQuote: "I couldn’t compare branches accurately.",
      solution: [
        "Centralized owner dashboard",
        "Unified reporting across sites",
        "Real-time remote monitoring",
        "Standardized operational controls"
      ],
      results: [
        "Clear branch comparison",
        "Faster, data-backed decisions",
        "Better multi-site stock tracking",
        "Scale with total control"
      ],
      resultQuote: "Now I manage all branches from my phone. Growth is no longer chaotic."
    },
    {
      title: "Compliance Confidence",
      subtitle: "KRA Anxiety → Audit-Ready Records",
      business: "Pharmacy",
      type: "Compliance-Sensitive",
      location: "Nakuru",
      problem: [
        "Fear of KRA penalties",
        "Manual, unreliable records",
        "Inconsistent documentation",
        "Extreme stress during audits"
      ],
      problemQuote: "Compliance felt risky and confusing.",
      solution: [
        "ETIMS-ready digital records",
        "Complete transaction logs",
        "Clean, auditable sales history",
        "Structured automated reporting"
      ],
      results: [
        "Reduced compliance stress",
        "Reliable financial records",
        "Audit-ready business model",
        "Owner confidence restored"
      ],
      resultQuote: "Now I feel safe running my business, even during audits."
    },
    {
      title: "Remote Management",
      subtitle: "Running a business without blind spots",
      business: "Hardware Shop",
      type: "Hands-Off Owner",
      location: "Kitengela",
      problem: [
        "Depended entirely on staff honesty",
        "No way to verify daily sales off-site",
        "Frequent inventory uncertainty",
        "Constant worry when away"
      ],
      problemQuote: "I was always guessing what the shop made.",
      solution: [
        "Phone-based live monitoring",
        "Daily summaries delivered via WhatsApp",
        "Full accessible transaction history",
        "Real-time operational confidence"
      ],
      results: [
        "Full visibility from anywhere",
        "Significant reduction in stress",
        "Better control over revenue",
        "Freedom without fear"
      ],
      resultQuote: "Even when I’m away, I know exactly what’s happening. I run the shop from anywhere."
    }
  ];

  return (
    <div id="case-studies" className="space-y-32">
      <div className="max-w-4xl space-y-6">
        <span className="section-label">Success Proof</span>
        <h2 className="text-5xl md:text-8xl font-black serif text-black leading-[0.9] tracking-tighter">
          Real People. <br/><span className="italic text-gray-400">Real Results.</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-2xl">
          From pharmacies in Nakuru to hardware shops in Kitengela, 
          Veira is the system that turns guesswork into certainty.
        </p>
      </div>

      <div className="space-y-16 md:space-y-32">
        {cases.map((c, i) => (
          <CaseStudyCard key={i} number={i + 1} {...c} />
        ))}
      </div>

      <div className="bg-black text-white p-12 md:p-32 text-center space-y-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#2D9B9B]/10 to-transparent"></div>
        <div className="relative z-10 space-y-10">
          <h3 className="text-4xl md:text-7xl font-bold serif italic">Is your business next?</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            Don't wait until money goes missing. Join the hundreds of 
            forward-thinking owners across Kenya who have taken back control.
          </p>
          <div className="pt-6">
            <button className="cta-primary px-20 py-8 font-bold uppercase tracking-[0.4em] text-xs">
              Apply for Veira Install
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};