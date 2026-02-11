import React from 'react';

export const Cloud: React.FC = () => {
  const features = [
    {
      title: 'Cloud-based POS System for Restaurants',
      desc: 'Access your restaurant sales from any location in Nairobi. Real-time syncing across multiple devices.'
    },
    {
      title: 'Best POS Software for Supermarket in Kenya',
      desc: 'Handle thousands of SKUs effortlessly with our cloud-powered inventory management engine.'
    },
    {
      title: 'Mobile POS Kenya Accessibility',
      desc: 'Check your store performance from your phone. Perfect for the mobile Kenyan business owner.'
    },
    {
      title: 'Reliable Cloud POS System Kenya',
      desc: 'Bank-grade security and automatic backups to ensure your business data is never lost.'
    }
  ];

  return (
    <div id="cloud" className="space-y-24 md:space-y-40">
      <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-10">
        <div className="space-y-4">
          <span className="text-[#2D9B9B] text-[10px] font-bold uppercase tracking-[0.4em]">Cloud Solution</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold serif leading-tight text-black px-4">Cloud POS System Kenya. <br className="hidden md:block"/><span className="italic">Sync Your Success.</span></h2>
        </div>
        <p className="text-base md:text-xl text-gray-600 font-light leading-relaxed px-6">
          Experience the best cloud POS system for restaurants in Nairobi. Veira Cloud ensures your retail management system Kenya is always up-to-date.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="space-y-8 order-2 lg:order-1 px-4 md:px-0">
          <h3 className="text-3xl md:text-4xl font-bold serif text-black">Remote Business Management</h3>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light">
            Stop being tied to your shop floor. Track your current stock levels, monitor staff performance, and view detailed sales reports directly from your laptop or mobile device.
          </p>
          <div className="p-6 md:p-8 border border-black/5 bg-black/5 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#2D9B9B]">Why Choose Cloud POS?</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Eliminate the need for expensive on-premise servers. Our POS software Kenya runs entirely in the cloud, allowing for seamless updates and zero hardware maintenance costs.
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
        <h3 className="text-2xl md:text-3xl font-bold serif text-black">Ready to Upgrade?</h3>
        <button className="cta-primary px-10 md:px-16 py-5 md:py-6 font-bold text-xs uppercase tracking-widest w-full sm:w-auto">
          View Cloud POS Pricing Kenya
        </button>
      </div>
    </div>
  );
};