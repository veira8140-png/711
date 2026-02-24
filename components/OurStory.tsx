
import React from 'react';

const ValueItem: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <div className="bg-[#0a0510] p-10 space-y-6 group hover:bg-white/5 transition-all duration-700 border border-white/5">
    <div className="w-8 h-[1px] bg-white/10 group-hover:w-full transition-all duration-700"></div>
    <h4 className="text-2xl font-bold serif text-white">{title}</h4>
    <p className="text-xs text-gray-500 font-light leading-relaxed tracking-wide uppercase italic">{desc}</p>
  </div>
);

export const OurStory: React.FC = () => {
  const values = [
    { title: 'Be Kind', desc: 'Empathy drives every interaction' },
    { title: 'Be Trusted', desc: 'Security, reliability, and protection' },
    { title: 'Be Clear', desc: 'Communicate simply, honestly, directly' },
    { title: 'Be Bold', desc: 'Innovate fearlessly, challenge norms' },
    { title: 'Be Helpful', desc: 'Anticipate problems, deliver solutions' }
  ];

  return (
    <div className="container mx-auto px-6 pt-4 pb-40 md:pt-8 md:pb-64 space-y-40 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500 opacity-[0.05] blur-[160px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500 opacity-[0.05] blur-[160px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

      {/* Why Veira Exists */}
      <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
        <div className="space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-500">The Mission</span>
          <h2 className="text-6xl md:text-9xl font-black serif text-white leading-[0.85] tracking-tighter">Why Veira <br/><span className="italic text-white/30">Exists.</span></h2>
        </div>
        <div className="space-y-10 text-xl md:text-3xl text-purple-100/70 font-light leading-relaxed max-w-4xl mx-auto">
          <p>
            Businesses move money, shape communities, and create stability. 
            Most technology stops at efficiency. <span className="text-white">Veira does not.</span>
          </p>
          <p className="text-lg md:text-2xl">
            We give retail owners complete control, visibility, and certainty over their operations. 
            When businesses run better, they create safer, more stable communities.
          </p>
        </div>
      </div>

      {/* Our Commitment */}
      <div className="bg-white/5 backdrop-blur-2xl p-12 md:p-32 border border-white/10 relative overflow-hidden group shadow-[0_0_100px_rgba(0,0,0,0.5)] max-w-6xl mx-auto">
        <div className="max-w-4xl space-y-10 relative z-10">
          <span className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.6em]">Structural Impact</span>
          <h3 className="text-4xl md:text-6xl font-bold serif text-white leading-tight">10% of annual net profit. <br/>A structural commitment.</h3>
          <p className="text-xl md:text-2xl text-purple-100 leading-relaxed font-light">
            We fund organizations that <span className="text-white font-bold border-b-2 border-white/10 pb-1">prevent gender-based violence</span> and support survivors. 
            This is not a campaign; it is a permanent part of our growth.
          </p>
        </div>
      </div>

      {/* Our Values */}
      <div className="space-y-24 relative z-10">
        <div className="text-center space-y-4">
          <span className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.5em]">The Core</span>
          <h3 className="text-4xl md:text-6xl font-black serif text-white">Our Values</h3>
          <p className="text-purple-100/40 text-lg font-light max-w-2xl mx-auto">Principles that shape every product, interaction, and decision.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/5">
          {values.map((v, i) => (
            <ValueItem key={i} title={v.title} desc={v.desc} />
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center space-y-16 py-24 border-t border-white/5 relative z-10">
        <div className="max-w-4xl mx-auto space-y-10">
          <h3 className="text-4xl md:text-8xl font-black serif text-white leading-[0.9] tracking-tighter">
            Veira is more than <br/>
            <span className="italic text-white/50">a tool.</span>
          </h3>
        </div>
        <div className="pt-8">
          <button className="cta-primary px-20 py-8 font-bold text-[10px] uppercase tracking-[0.4em] w-full sm:w-auto">
            Join the Mission
          </button>
        </div>
      </div>
    </div>
  );
};
