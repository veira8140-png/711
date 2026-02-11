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
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em]">Case Study 0{number}</span>
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
        <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-[#2D9B9B]">The Veira Solution</h4>
        <ul className="space-y-4">
          {solution.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-black font-medium leading-relaxed">
              <span className="text-[#2D9B9B]">✔</span>
              {item}
            </li>
          ))}
        </ul>
        
        <div className="pt-8 space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">Measured Results</h4>
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
      title: "Daily Sales Clarity",
      subtitle: "From Uncertainty to Absolute Visibility",
      business: "Mini Market",
      type: "Retail Shop",
      location: "Umoja, Nairobi",
      problem: [
        "Owner relied on staff verbal reports",
        "No accurate daily sales records",
        "Frequent stock losses",
        "Constant suspicion & stress"
      ],
      problemQuote: "Some days sales were 'low', but stock kept disappearing.",
      solution: [
        "Every sale recorded automatically",
        "Live phone monitoring for owners",
        "Clear daily totals and reconciliations",
        "Increased staff accountability"
      ],
      results: [
        "Daily Sales Visibility",
        "Stock Losses Reduced",
        "Owner Confidence Restored",
        "Zero Staff Conflict"
      ],
      resultQuote: "Now I know exactly what my shop makes every day."
    },
    {
      title: "Stopping Revenue Leaks",
      subtitle: "Tightening Controls in a Fast-Paced Kitchen",
      business: "Local Café",
      type: "Restaurant",
      location: "Westlands, Nairobi",
      problem: [
        "Orders written manually on paper",
        "Bills sometimes 'forgotten' or lost",
        "Frequent end-of-day cash mismatches",
        "No reliable audit trail for voids"
      ],
      problemQuote: "End-month numbers never made sense.",
      solution: [
        "Every kitchen order captured digitally",
        "Locked deletion permissions for sales",
        "Granular cashier shift tracking",
        "Accurate, uneditable reporting"
      ],
      results: [
        "Leakage Controlled",
        "Faster Table Turnover",
        "Cleaner Reconciliation",
        "Peace of Mind"
      ],
      resultQuote: "If food leaves the kitchen, it must be paid for."
    },
    {
      title: "Managing Multiple Locations",
      subtitle: "Centralized Power for a Scaling Business",
      business: "Electronics Retailer",
      type: "3 Branches",
      location: "Growing Operation",
      problem: [
        "Separate, disconnected systems per branch",
        "No centralized real-time visibility",
        "Inconsistent manager reports",
        "Hard to detect underperformance early"
      ],
      problemQuote: "I couldn't compare branches accurately.",
      solution: [
        "Unified centralized cloud dashboard",
        "Consolidated group reporting",
        "Remote real-time branch monitoring",
        "Standardized operational controls"
      ],
      results: [
        "Branch Comparison",
        "Better Decision-Making",
        "Unified Stock Tracking",
        "Scalable Control"
      ],
      resultQuote: "Now I manage all branches from my phone."
    },
    {
      title: "Compliance Confidence",
      subtitle: "Removing the Anxiety of KRA Audits",
      business: "Pharmacy",
      type: "Compliance-Sensitive",
      location: "Nakuru",
      problem: [
        "Constant fear of KRA penalties",
        "Manual, error-prone records",
        "Inconsistent documentation for meds",
        "High stress levels during audits"
      ],
      problemQuote: "Compliance felt risky and confusing.",
      solution: [
        "Built-in eTIMS ready records",
        "Immutable transaction logs",
        "Clean, timestamped sales history",
        "Structured financial reporting"
      ],
      results: [
        "Reduced KRA Stress",
        "Better Financial Health",
        "Audit Readiness",
        "Regulatory Peace"
      ],
      resultQuote: "Now I feel safer running my business."
    },
    {
      title: "Hands-Off Ownership",
      subtitle: "Running a Business Without Being There",
      business: "Hardware Shop",
      type: "Remote Management",
      location: "Kitengela",
      problem: [
        "Total dependence on staff honesty",
        "No way to verify daily sales remotely",
        "Frequent uncertainty about cash flow",
        "Constant worry while traveling"
      ],
      problemQuote: "I was always guessing what the shop made.",
      solution: [
        "Mobile-first phone monitoring app",
        "Automatic daily sales summaries",
        "Full transaction and void history",
        "Real-time push notifications"
      ],
      results: [
        "Full Remote Visibility",
        "Drastically Reduced Stress",
        "Tighter Financial Control",
        "Freedom to Scale"
      ],
      resultQuote: "Even when I’m away, I know what’s happening."
    }
  ];

  return (
    <div className="space-y-32">
      <div className="max-w-3xl space-y-6">
        <span className="section-label">Evidence of Impact</span>
        <h2 className="text-4xl md:text-7xl font-bold serif text-black leading-tight">
          Success <br/><span className="italic text-gray-400">Architecture.</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
          From retail shops in Umoja to restaurants in Westlands, we help 
          Kenyan business owners gain absolute certainty over their money and time.
        </p>
      </div>

      <div className="space-y-12 md:space-y-24">
        {cases.map((c, i) => (
          <CaseStudyCard key={i} number={i + 1} {...c} />
        ))}
      </div>

      <div className="bg-black text-white p-12 md:p-20 text-center space-y-8">
        <h3 className="text-3xl md:text-5xl font-bold serif italic">Is your business next?</h3>
        <p className="text-gray-400 max-w-xl mx-auto font-light leading-relaxed">
          Don't wait until stock disappears or audits fail. Join the hundreds of 
          Kenyan entrepreneurs who have built a foundation of certainty with Veira.
        </p>
        <button className="cta-primary bg-white text-black px-12 py-5 font-bold uppercase tracking-widest text-xs">
          Get Case Study Breakdown
        </button>
      </div>
    </div>
  );
};