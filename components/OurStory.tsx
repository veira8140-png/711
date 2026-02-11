import React from 'react';

export const OurStory: React.FC = () => {
  const values = [
    { title: 'Be Kind', desc: 'Empathy drives every interaction' },
    { title: 'Be Trusted', desc: 'Security, reliability, and protection of data' },
    { title: 'Be Clear', desc: 'Communicate simply, honestly, and directly' },
    { title: 'Be Bold', desc: 'Innovate fearlessly and challenge the norm' },
    { title: 'Be Helpful', desc: 'Anticipate problems and deliver solutions' }
  ];

  return (
    <div className="container mx-auto px-6 py-40 space-y-32 relative overflow-hidden">
      {/* Background Decorative Light Leaks */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7C3AED] opacity-10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C084FC] opacity-10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold serif text-white">Our Story</h2>
        <div className="space-y-6 text-xl text-purple-100 font-light leading-relaxed">
          <p className="text-white font-medium uppercase tracking-widest text-xs">Why Veira Exists</p>
          <p>
            Businesses are powerful. They move money, shape communities, and create stability. 
            But most technology stops at efficiency and profit.
          </p>
          <p>
            Veira exists to do more. We give small shops and retail owners complete control, 
            visibility, and certainty over their sales, profits, and operations so they can 
            focus on growth, not guesswork.
          </p>
          <p className="italic text-white opacity-80">
            We believe that when businesses are run better, they do more than generate 
            revenue — they create safer, more stable communities.
          </p>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-xl p-12 md:p-24 border border-white/10 relative overflow-hidden group shadow-2xl">
        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
          <span className="text-8xl serif font-black text-white">10%</span>
        </div>
        <div className="max-w-3xl space-y-8 relative z-10">
          <span className="text-[#C084FC] text-[10px] font-bold uppercase tracking-[0.4em]">The Commitment</span>
          <h3 className="text-4xl font-bold serif text-white">Structural Social Impact</h3>
          <p className="text-xl text-purple-100 leading-relaxed font-light">
            We dedicate <span className="text-white font-bold border-b border-[#C084FC]">10% of our annual net profit</span> to organizations 
            that work to prevent gender-based violence and support survivors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[10px] uppercase tracking-widest text-purple-300 font-bold">
            <div className="border-l border-white/10 pl-4">Not as a one-off donation</div>
            <div className="border-l border-white/10 pl-4">Not as a campaign</div>
            <div className="border-l border-white/10 pl-4">As a structural commitment</div>
          </div>
        </div>
      </div>

      <div className="space-y-16 relative z-10">
        <div className="text-center">
          <span className="text-purple-300 text-[10px] font-bold uppercase tracking-[0.4em]">Our Values</span>
          <h3 className="text-4xl font-bold serif mt-4 text-white">The Principles of Certainty</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {values.map((v, i) => (
            <div key={i} className="space-y-4 group">
              <div className="h-px bg-white/10 group-hover:bg-[#C084FC] transition-colors duration-500"></div>
              <h4 className="text-lg font-bold serif text-white">{v.title}</h4>
              <p className="text-sm text-purple-200/60 font-light leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center space-y-12 py-20 border-t border-white/10 relative z-10">
        <div className="max-w-2xl mx-auto space-y-6">
          <h3 className="text-4xl font-bold serif italic text-white">"Veira is more than a tool."</h3>
          <p className="text-purple-100 text-lg">
            It’s a team, a system, and a mission. We help businesses thrive and turn 
            their success into lasting social impact.
          </p>
        </div>
        <button className="cta-primary bg-white text-black hover:bg-purple-100 px-12 py-5 rounded-none font-bold text-xs uppercase tracking-widest shadow-2xl shadow-purple-900/50">
          Build with Purpose
        </button>
      </div>
    </div>
  );
};