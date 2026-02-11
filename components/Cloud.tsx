
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
    <div id="cloud" className="space-y-40">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <div className="space-y-4">
          <span className="text-[#2D9B9B] text-[10px] font-bold uppercase tracking-[0.4em]">Cloud Solution</span>
          <h2 className="text-5xl md:text-7xl font-bold serif leading-tight text-black">Cloud POS System Kenya. <br/><span className="italic">Sync Your Success.</span></h2>
        </div>
        <p className="text-xl text-gray-600 font-light leading-relaxed">
          Experience the best cloud POS system for restaurants in Nairobi. Veira Cloud ensures your retail management system Kenya is always up-to-date, providing a centralized view of your entire operation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <h3 className="text-4xl font-bold serif text-black">Remote Business Management</h3>
          <p className="text-gray-600 text-lg leading-relaxed font-light">
            Stop being tied to your shop floor. Track your current stock levels, monitor staff performance, and view detailed sales reports directly from your laptop or mobile device.
          </p>
          <div className="p-8 border border-black/5 bg-black/5 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#2D9B9B]">Why Choose Cloud POS?</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Eliminate the need for expensive on-premise servers. Our POS software Kenya runs entirely in the cloud, allowing for seamless updates and zero hardware maintenance costs.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {features.map((f, i) => (
            <div key={i} className="glass p-8 border-black/5 hover:border-[#2D9B9B]/30 transition-colors group">
              <h4 className="text-black font-bold mb-2 group-hover:text-[#2D9B9B] transition-colors">{f.title}</h4>
              <p className="text-sm text-gray-500 font-light leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center space-y-16 py-20 border-t border-black/5">
        <h3 className="text-3xl font-bold serif text-black">Ready to Upgrade?</h3>
        <button className="cta-button px-16 py-6 font-bold text-xs uppercase tracking-widest">
          View Cloud POS Pricing Kenya
        </button>
      </div>
    </div>
  );
};
