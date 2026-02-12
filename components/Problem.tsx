import React from 'react';

export const Problem: React.FC = () => {
  const problems = [
    "You are not fully sure what today’s real sales are",
    "Stock disappears and no one knows how",
    "Reports come late, or not at all",
    "KRA compliance feels stressful",
    "You cannot confidently open a second branch"
  ];

  return (
    <section className="py-32 md:py-48">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-12">
          <div className="space-y-4">
            <span className="section-label">The Real Problem</span>
            <h2 className="text-4xl md:text-6xl font-bold serif text-black leading-tight">
              You did not start your <br/><span className="italic text-gray-400">business to babysit it.</span>
            </h2>
          </div>
          <div className="space-y-8">
            <p className="text-xl text-gray-500 font-light">But right now:</p>
            <ul className="space-y-6">
              {problems.map((p, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0 group-hover:scale-150 transition-transform"></div>
                  <p className="text-lg text-gray-600 font-light leading-relaxed">{p}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="glass p-12 md:p-20 space-y-10 border-red-100/20 bg-red-50/10">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold serif text-black italic">The hard truth</h3>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              The problem is not your staff. <br/>
              <span className="text-black font-bold border-b-2 border-red-400/30">The problem is lack of system.</span>
            </p>
          </div>
          <div className="pt-10 border-t border-black/5">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Stop Guessing • Start Knowing</p>
          </div>
        </div>
      </div>
    </section>
  );
};