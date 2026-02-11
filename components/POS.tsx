import React, { useState } from 'react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-black/5 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex justify-between items-center text-left focus:outline-none"
      >
        <span className="text-xl font-medium text-black">{question}</span>
        <span className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-500 font-light leading-relaxed max-w-2xl">{answer}</p>
      </div>
    </div>
  );
};

export const POS: React.FC = () => {
  const features = [
    { title: 'Payment Integration', desc: 'Direct M-PESA reconciliation. Zero manual entries.' },
    { title: 'Tax Compliance', desc: 'Full eTIMS support. Automated KRA reporting.' },
    { title: 'Offline Architecture', desc: 'Continuous operation. Syncs when back online.' },
    { title: 'Multi-Store', desc: 'Centralized visibility across all locations.' }
  ];

  const faqs = [
    { q: "How much does Veira cost?", a: "We offer tailored hardware packages and flexible software subscriptions. Contact us for a precise quote." },
    { q: "Is it easy to switch?", a: "We handle the entire data migration and staff training process to ensure zero downtime." },
    { q: "Do you support eTIMS?", a: "Yes, we are fully compliant with KRA requirements for electronic invoicing." }
  ];

  return (
    <div className="space-y-40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        <div className="space-y-8">
          <span className="section-label">Capabilities</span>
          <h2 className="text-4xl md:text-6xl font-bold serif text-black leading-tight">Certainty at the counter.</h2>
          <p className="text-lg text-gray-500 font-light leading-relaxed">
            Veira is engineered for businesses that value speed and accuracy. 
            A robust platform for modern commerce.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <div key={i} className="space-y-4">
              <div className="w-10 h-10 border border-black/5 flex items-center justify-center text-[10px] font-bold">0{i+1}</div>
              <h4 className="font-bold text-black">{f.title}</h4>
              <p className="text-sm text-gray-500 font-light leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-12">
        <span className="section-label text-center block">Insights</span>
        <div className="bg-white p-8 md:p-16 border border-black/5">
          {faqs.map((faq, i) => <FAQItem key={i} {...faq} />)}
        </div>
      </div>
    </div>
  );
};