import React from 'react';

export const OurStory: React.FC = () => {
  const values = [
    { title: 'Kindness', desc: 'We care about every person.' },
    { title: 'Trust', desc: 'Your data is safe with us.' },
    { title: 'Clarity', desc: 'We speak simply and honestly.' },
    { title: 'Boldness', desc: 'We build new things to help you.' },
    { title: 'Helpfulness', desc: 'We fix problems fast.' }
  ];

  return (
    <div className="container mx-auto px-6 py-40 md:py-64 space-y-40 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2D9B9B] opacity-[0.08] blur-[160px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2D9B9B] opacity-[0.08] blur-[160px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
        <div className="space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#2D9B9B]">Why We Started</span>
          <h2 className="text-6xl md:text-9xl font-black serif text-white leading-[0.85] tracking-tighter">Our Story.</h2>
        </div>
        <div className="space-y-8 text-xl md:text-3xl text-purple-100/70 font-light leading-relaxed max-w-4xl mx-auto">
          <p>
            Shops are the heart of our towns. They help families and build communities. 
            But many shop owners find it hard to track their money.
          </p>
          <p className="italic text-white">
            Veira was built to help. We give you the tools you need to run your shop easily.
          </p>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-2xl p-12 md:p-32 border border-white/10 relative overflow-hidden group shadow-[0_0_100px_rgba(0,0,0,0.5)] max-w-6xl mx-auto">
        <div className="absolute -top-10 -right-10 p-20 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-1000 hidden md:block select-none">
          <span className="text-[20rem] serif font-black text-white">10%</span>
        </div>
        <div className="max-w-4xl space-y-10 relative z-10">
          <span className="text-[#2D9B9B] text-[10px] font-bold uppercase tracking-[0.6em]">Giving Back</span>
          <h3 className="text-4xl md:text-6xl font-bold serif text-white leading-tight">More than profit. <br/>Helping our people.</h3>
          <p className="text-xl md:text-2xl text-purple-100 leading-relaxed font-light">
            We give <span className="text-white font-bold border-b-2 border-[#2D9B9B] pb-1">10% of our profit</span> to help 
            stop violence and support survivors in Kenya.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-12 border-t border-white/10">
            <div className="space-y-2">
              <span className="text-white font-bold uppercase tracking-widest text-[9px]">For Kenya</span>
              <p className="text-purple-200/60 text-sm font-light">This is part of our business, not just a one-time thing.</p>
            </div>
            <div className="space-y-2">
              <span className="text-white font-bold uppercase tracking-widest text-[9px]">Always Giving</span>
              <p className="text-purple-200/60 text-sm font-light">We stay committed to the safety of our homes.</p>
            </div>
            <div className="space-y-2">
              <span className="text-white font-bold uppercase tracking-widest text-[9px]">Honest</span>
              <p className="text-purple-200/60 text-sm font-light">We show exactly how much money goes to help others.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-24 relative z-10">
        <div className="text-center space-y-4">
          <span className="text-[#2D9B9B] text-[10px] font-bold uppercase tracking-[0.5em]">Our Values</span>
          <h3 className="text-4xl md:text-6xl font-black serif text-white">What We Believe</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/5 border border-white/5">
          {values.map((v, i) => (
            <div key={i} className="bg-[#0a0510] p-10 space-y-6 group hover:bg-white/5 transition-all duration-700">
              <div className="w-8 h-[1px] bg-[#2D9B9B]/30 group-hover:w-full transition-all duration-700"></div>
              <h4 className="text-2xl font-bold serif text-white">{v.title}</h4>
              <p className="text-xs text-[#2D9B9B]/40 font-light leading-relaxed tracking-wide">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center space-y-12 py-24 border-t border-white/5 relative z-10">
        <div className="max-w-3xl mx-auto space-y-8">
          <h3 className="text-4xl md:text-6xl font-bold serif italic text-white leading-tight">"Helping shops grow."</h3>
          <p className="text-purple-100/60 text-xl font-light">
            We help your business so you can help your community.
          </p>
        </div>
        <button className="cta-primary px-16 py-7 font-bold text-[10px] uppercase tracking-[0.3em] w-full sm:w-auto">
          Start Today
        </button>
      </div>
    </div>
  );
};