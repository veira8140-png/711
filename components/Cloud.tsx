import React from 'react';

export const Cloud: React.FC = () => {
  const features = [
    {
      title: 'POS System for Restaurants in Nairobi',
      desc: 'Access restaurant sales from any location. Real-time syncing across mobile and desktop devices.'
    },
    {
      title: 'Cloud POS Software for Supermarkets',
      desc: 'Manage thousands of SKUs effortlessly with our high-speed inventory management engine.'
    },
    {
      title: 'Mobile POS Kenya Accessibility',
      desc: 'Check store performance from your smartphone. Perfect for the modern, mobile Kenyan business owner.'
    },
    {
      title: 'Reliable Cloud POS System Kenya',
      desc: 'Bank-grade security and automatic backups ensures your retail data is always safe and KRA compliant.'
    }
  ];

  return (
    <div id="cloud" className="space-y-24 md:space-y-40">
      <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-10">
        <div className="space-y-4">
          <span className="text-[#2D9B9B] text-[10px] font-bold uppercase tracking-[0.4em]">Cloud Retail Solutions</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold serif leading-tight text-black px-4">Cloud POS System Kenya. <br className="hidden md:block"/><span className="italic">Sync Your Business.</span></h2>
        </div>
        <p className="text-base md:text-xl text-gray-600 font-light leading-relaxed px-6">
          Experience the <strong>best cloud POS system for restaurants in Kenya</strong>. Veira Cloud ensures your retail management is always secure and accessible.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="space-y-8 order-2 lg:order-1 px-4 md:px-0">
          <h3 className="text-3xl md:text-4xl font-bold serif text-black">Remote POS Management for Owners</h3>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light">
            Stop being tied to your shop floor. With Veira's <strong>POS software in Kenya</strong>, you can track stock levels, monitor staff performance, and view sales reports from your laptop.
          </p>
          <div className="p-6 md:p-8 border border-black/5 bg-black/5 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#2D9B9B]">Benefits of Cloud POS Systems in Kenya</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Eliminate expensive servers. Our <strong>cloud POS Kenya</strong> solution runs entirely online, allowing for seamless eTIMS updates and zero maintenance costs for retail owners.
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
        <h3 className="text-2xl md:text-3xl font-bold serif text-black">Transparent Pricing</h3>
        <button className="cta-primary px-10 md:px-16 py-5 md:py-6 font-bold text-xs uppercase tracking-widest w-full sm:w-auto">
          View POS System Prices in Kenya
        </button>
      </div>
    </div>
  );
};