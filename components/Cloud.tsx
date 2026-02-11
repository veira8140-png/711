import React from 'react';

export const Cloud: React.FC = () => {
  const features = [
    {
      title: 'Easy for Restaurants',
      desc: 'See your kitchen and bar sales from your house. Works on any device.'
    },
    {
      title: 'Great for Supermarkets',
      desc: 'Track thousands of items easily. Never run out of stock.'
    },
    {
      title: 'Track on Your Phone',
      desc: 'Perfect for owners who travel. See everything from your hand.'
    },
    {
      title: 'Always Safe',
      desc: 'Your data is locked and safe. We keep it ready for tax time.'
    }
  ];

  return (
    <div id="cloud" className="space-y-24 md:space-y-40">
      <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-10">
        <div className="space-y-4">
          <span className="text-[#2D9B9B] text-[10px] font-bold uppercase tracking-[0.4em]">Work Anywhere</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold serif leading-tight text-black px-4">Cloud POS Kenya. <br className="hidden md:block"/><span className="italic">All your data in one place.</span></h2>
        </div>
        <p className="text-base md:text-xl text-gray-600 font-light leading-relaxed px-6">
          Access your shop from anywhere. Veira Cloud makes sure your business is always safe and easy to see.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="space-y-8 order-2 lg:order-1 px-4 md:px-0">
          <h3 className="text-3xl md:text-4xl font-bold serif text-black">Manage Your Shop from Home</h3>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light">
            You don't have to be at the shop to know what's happening. See who is working and how much you've sold from your laptop or phone.
          </p>
          <div className="p-6 md:p-8 border border-black/5 bg-black/5 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#2D9B9B]">Why choose Cloud?</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              No need for big, expensive computers. Everything runs online. This means your tax info (eTIMS) is always correct and up to date.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:gap-6 order-1 lg:order-2 px-4 md:px-0">
          {features.map((f, i) => (
            <div key={i} className="glass p-6 md:p-8 border-black/5 hover:border-[#2D9B9B]/30 transition-colors group">
              <h4 className="text-black font-bold mb-2 group-hover:text-[#2D9B9B] transition-colors text-base md:text-lg">{f.title}</h4>
              <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center space-y-8 md:space-y-16 py-12 md:py-20 border-t border-black/5 px-4">
        <h3 className="text-2xl md:text-3xl font-bold serif text-black">Simple Pricing</h3>
        <button className="cta-primary px-10 md:px-16 py-5 md:py-6 font-bold text-xs uppercase tracking-widest w-full sm:w-auto">
          See POS Prices
        </button>
      </div>
    </div>
  );
};