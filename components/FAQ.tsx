import React, { useState } from 'react';

const faqItems = [
  {
    question: "Is the 1% revenue share fair?",
    answer: "Veira only succeeds when you succeed. It is significantly cheaper than hiring even one employee to do the same work. Veira never sleeps, never steals, never makes mistakes, and keeps you fully compliant with KRA requirements automatically."
  },
  {
    question: "What happens if I grow my business to multiple branches?",
    answer: "The 1% fee scales with your revenue. Veira grows with you. For very high-volume merchants with hundreds of branches, optional flat-rate enterprise plans are available."
  },
  {
    question: "Can I trust the data accuracy?",
    answer: "Every transaction is recorded in real time. Reports, alerts, and compliance notifications are sent directly to your WhatsApp and the Veira mobile app. The system is transparent, accurate, and fully auditable."
  },
  {
    question: "Is Veira POS KRA eTIMS compliant?",
    answer: "Yes, Veira is fully built with eTIMS readiness in mind. We help businesses in Kenya automate their tax compliance by ensuring all sales data is structured correctly for KRA reporting and audit-ready at all times."
  },
  {
    question: "Can I use Veira POS offline?",
    answer: "Absolutely. We understand that internet in Kenya can be unstable. Veira POS features a robust offline mode that allows you to keep selling even without a connection; data syncs automatically once you're back online."
  },
  {
    question: "How does the 'Free Hardware' offer work?",
    answer: "Upon payment of the KES 3,500 setup fee, we deliver and pre-configure an Android POS terminal specifically for your business. There are no monthly rental fees for this device as long as you are active on the Success Plan."
  }
];

const AccordionItem: React.FC<{ 
  item: typeof faqItems[0]; 
  isOpen: boolean; 
  onToggle: () => void 
}> = ({ item, isOpen, onToggle }) => {
  return (
    <div className={`border-b border-black/5 transition-colors duration-500 ${isOpen ? 'bg-black/[0.02]' : ''}`}>
      <button 
        onClick={onToggle}
        className="w-full py-8 flex items-center justify-between gap-6 text-left group focus:outline-none"
        aria-expanded={isOpen}
      >
        <h3 className={`text-lg md:text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-[#2D9B9B]' : 'text-black group-hover:text-[#2D9B9B]'}`}>
          {item.question}
        </h3>
        <div className="relative w-6 h-6 shrink-0">
          <span className={`absolute top-1/2 left-0 w-full h-[1px] bg-current transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}></span>
          <span className={`absolute top-0 left-1/2 h-full w-[1px] bg-current transition-transform duration-500 ${isOpen ? 'rotate-90 opacity-0' : ''}`}></span>
        </div>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[400px] pb-12 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="pr-12">
          <p className="text-gray-500 font-light leading-relaxed text-base md:text-lg">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 border-t border-black/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="section-label mx-auto">Common Inquiries</span>
          <h2 className="text-3xl md:text-5xl font-bold serif text-black italic">Common Questions</h2>
        </div>
        
        <div className="divide-y divide-black/5">
          {faqItems.map((item, i) => (
            <AccordionItem 
              key={i} 
              item={item} 
              isOpen={openIndex === i} 
              onToggle={() => handleToggle(i)} 
            />
          ))}
        </div>

        <div className="mt-20 p-10 bg-[#2D9B9B]/5 border border-[#2D9B9B]/10 text-center space-y-6">
          <p className="text-gray-600 font-light italic">
            Still have questions about how Veira can transform your business?
          </p>
          <button className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#2D9B9B] hover:text-black transition-colors">
            Chat with an Agent on WhatsApp →
          </button>
        </div>
      </div>
    </section>
  );
};