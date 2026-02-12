import React from 'react';

export const Transformation: React.FC = () => {
  return (
    <section className="py-32 space-y-24">
      <div className="text-center space-y-4">
        <span className="section-label mx-auto">The Transformation</span>
        <h2 className="text-4xl md:text-6xl font-bold serif text-black italic">How your life changes.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/5 border border-black/5">
        <div className="bg-white p-12 md:p-20 space-y-12">
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest">Before Veira</span>
            <h3 className="text-3xl font-bold serif text-black">Blind Management</h3>
          </div>
          <ul className="space-y-6">
            {[
              "Owner chasing numbers",
              "Owner suspicious about stock",
              "Owner stressed about compliance",
              "Owner stuck in one location"
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-4 text-gray-400 font-light">
                <span className="text-red-400 opacity-50">✕</span>
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-12 md:p-20 space-y-12 border-l border-black/5">
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-[#2D9B9B] uppercase tracking-widest">After Veira</span>
            <h3 className="text-3xl font-bold serif text-black">Total Control</h3>
          </div>
          <ul className="space-y-6">
            {[
              "Owner sees daily revenue in real time",
              "Owner knows which products make money",
              "Owner trusts the numbers",
              "Owner can step away without fear",
              "Owner can scale with confidence"
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-4 text-black font-medium">
                <span className="text-[#2D9B9B]">✓</span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center space-y-8">
        <p className="text-2xl text-gray-600 font-light leading-relaxed">
          Veira does not just track sales. <br/>
          <span className="text-black font-bold">It gives you control.</span>
        </p>
      </div>
    </section>
  );
};