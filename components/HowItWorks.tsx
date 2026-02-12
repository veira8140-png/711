import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    { title: "We Install Veira", desc: "Expert setup at your place of business." },
    { title: "Staff is Trained", desc: "Hands-on training for your entire team." },
    { title: "Everything Connects", desc: "Sales, stock and payments linked instantly." },
    { title: "Real-Time Clarity", desc: "Start seeing reports immediately on your phone." }
  ];

  return (
    <section className="py-32 space-y-20 border-t border-black/5">
      <div className="text-center space-y-4">
        <span className="section-label mx-auto">Getting Started</span>
        <h2 className="text-4xl md:text-6xl font-bold serif text-black italic">Setup is fast.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {steps.map((step, i) => (
          <div key={i} className="space-y-6 text-center">
            <div className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center mx-auto text-xl font-serif italic text-gray-400">
              0{i+1}
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-black uppercase tracking-widest text-xs">{step.title}</h3>
              <p className="text-sm text-gray-500 font-light">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 p-10 text-center max-w-2xl mx-auto border border-black/5 italic text-gray-400 font-light">
        "Support is ongoing. Hardware options are available."
      </div>
    </section>
  );
};