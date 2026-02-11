import React from 'react';

const CapabilityCard: React.FC<{ title: string; desc: string; number: string }> = ({ title, desc, number }) => (
  <div className="space-y-4 group">
    <div className="w-10 h-10 border border-black/10 flex items-center justify-center text-[10px] font-bold group-hover:bg-black group-hover:text-white transition-all duration-500">
      {number}
    </div>
    <h4 className="font-bold text-black text-lg">{title}</h4>
    <p className="text-sm text-gray-500 font-light leading-relaxed">{desc}</p>
  </div>
);

const UseCase: React.FC<{ title: string; desc: string; icon: string }> = ({ title, desc, icon }) => (
  <div className="p-8 border border-black/5 bg-white/50 backdrop-blur-sm space-y-4 hover:border-black/10 transition-all">
    <div className="text-2xl">{icon}</div>
    <h5 className="font-bold text-black uppercase tracking-widest text-[10px]">{title}</h5>
    <p className="text-sm text-gray-600 font-light leading-relaxed">{desc}</p>
  </div>
);

export const POS: React.FC = () => {
  return (
    <div className="space-y-32 md:space-y-48">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="section-label">Shop Tools</span>
            <h2 className="text-4xl md:text-7xl font-bold serif text-black leading-tight">
              Know your sales <br/><span className="italic text-gray-400">instantly.</span>
            </h2>
          </div>
          <div className="space-y-6 text-lg md:text-xl text-gray-500 font-light leading-relaxed">
            <p>
              Veira tracks every cent you make. It records sales at the counter 
              and sends all the info to your phone right away.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-black/5">
              <div className="space-y-1">
                <p className="text-black font-bold uppercase text-[9px] tracking-widest">Staff</p>
                <p className="text-xs text-gray-400">Sell faster.</p>
              </div>
              <div className="space-y-1">
                <p className="text-black font-bold uppercase text-[9px] tracking-widest">Smart Tool</p>
                <p className="text-xs text-gray-400">Track stock.</p>
              </div>
              <div className="space-y-1">
                <p className="text-black font-bold uppercase text-[9px] tracking-widest">Owners</p>
                <p className="text-xs text-gray-400">Stay in charge.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="glass p-8 md:p-12 space-y-8 border-black/5">
          <h3 className="text-2xl font-bold serif text-black italic">What it does</h3>
          <div className="space-y-6 text-gray-600 font-light leading-relaxed">
            <p>
              Veira handles sales, payments, and stock in one simple tool. 
              It tells you what is selling and what is missing.
            </p>
            <p>
              It helps you see problems before they grow. Your sales become clear messages. 
              Everything becomes easy to manage.
            </p>
            <p className="font-medium text-black italic">
              "Your shop keeps running even when the internet is off."
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-16">
        <div className="text-center space-y-4">
          <span className="section-label mx-auto">Made For You</span>
          <h3 className="text-3xl md:text-5xl font-bold serif text-black">What You Get</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-x-12 md:gap-y-16">
          <CapabilityCard 
            number="01" 
            title="Fast Sales" 
            desc="Sell in seconds. Keep your customers moving."
          />
          <CapabilityCard 
            number="02" 
            title="Works Offline" 
            desc="Sell even with no internet. It saves everything."
          />
          <CapabilityCard 
            number="03" 
            title="M-PESA Inside" 
            desc="Matches every payment to a sale automatically."
          />
          <CapabilityCard 
            number="04" 
            title="Stock Alerts" 
            desc="Know when things are running low right away."
          />
          <CapabilityCard 
            number="05" 
            title="Staff Check" 
            desc="See exactly what each staff member did."
          />
          <CapabilityCard 
            number="06" 
            title="WhatsApp Reports" 
            desc="Get daily sales sent to your phone."
          />
          <CapabilityCard 
            number="07" 
            title="Smart Warnings" 
            desc="Get a text if sales drop or things look odd."
          />
          <CapabilityCard 
            number="08" 
            title="Hardware Ready" 
            desc="Works on tablets, phones, and computers."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <UseCase 
          icon="🌐"
          title="Internet is off" 
          desc="Keep selling. Everything syncs when the web returns." 
        />
        <UseCase 
          icon="📱"
          title="On your phone" 
          desc="See your sales on WhatsApp. No need to visit the shop." 
        />
        <UseCase 
          icon="🔍"
          title="Stop theft" 
          desc="Know about weird refunds or missing stock early." 
        />
        <UseCase 
          icon="📈"
          title="Grow faster" 
          desc="See what sells best and buy more of that." 
        />
      </div>
    </div>
  );
};