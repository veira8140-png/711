import React from 'react';

const CapabilityItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center gap-4 group">
    <div className="w-8 h-8 border border-black/10 flex items-center justify-center text-[10px] font-bold group-hover:bg-[#2D9B9B] group-hover:text-white transition-all">
      ✓
    </div>
    <p className="text-lg text-gray-700 font-light">{text}</p>
  </div>
);

export const POS: React.FC = () => {
  return (
    <div className="space-y-32 md:space-y-48">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="section-label">What Veira Actually Does</span>
            <h2 className="text-4xl md:text-7xl font-bold serif text-black leading-tight">
              More than a POS <br/><span className="italic text-gray-400">system in Kenya.</span>
            </h2>
          </div>
          <div className="space-y-6 text-lg md:text-xl text-gray-500 font-light leading-relaxed">
            <p>
              It is your business operating system. When Veira runs your business, you stop guessing and start knowing.
            </p>
          </div>
        </div>
        
        <div className="glass p-8 md:p-12 space-y-8 border-black/5 bg-white/40">
          <div className="grid grid-cols-1 gap-6">
            <CapabilityItem text="Every sale is recorded instantly" />
            <CapabilityItem text="Inventory updates automatically" />
            <CapabilityItem text="MPESA and card payments reconcile correctly" />
            <CapabilityItem text="Reports are available anytime" />
            <CapabilityItem text="You see performance from your phone" />
            <CapabilityItem text="ETIMS compliance is handled properly" />
          </div>
        </div>
      </div>

      <div className="bg-black text-white p-12 md:p-24 text-center space-y-8 rounded-none">
        <h3 className="text-3xl md:text-5xl font-bold serif italic">"You stop guessing. You start knowing."</h3>
        <p className="text-gray-400 max-w-xl mx-auto font-light leading-relaxed">
          Veira takes the manual work out of your hands, so you can focus on growing your business.
        </p>
      </div>
    </div>
  );
};