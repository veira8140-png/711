import React from 'react';

const faqItems = [
  {
    question: "How much does a POS system cost in Kenya?",
    answer: "POS system prices in Kenya vary based on hardware and features. Veira offers competitive subscription-based pricing starting with a free tier for small businesses, ensuring high-quality retail software is accessible to everyone."
  },
  {
    question: "Is Veira POS KRA eTIMS compliant?",
    answer: "Yes, Veira is fully built with eTIMS readiness in mind. We help businesses in Kenya automate their tax compliance by ensuring all sales data is structured correctly for KRA reporting."
  },
  {
    question: "Can I use Veira POS offline?",
    answer: "Absolutely. We understand that internet in Kenya can be unstable. Veira POS features a robust offline mode that allows you to keep selling even without a connection; data syncs automatically once you're back online."
  },
  {
    question: "Does it integrate with M-PESA?",
    answer: "Yes, Veira offers direct M-PESA integration. This allows for automatic reconciliation, meaning payments are matched to sales without manual entry, reducing cashier errors and theft."
  },
  {
    question: "What hardware do I need for a POS in Kenya?",
    answer: "Veira is flexible. It works on Android POS machines, desktops, tablets, and even mobile phones. We can also recommend the best POS hardware suppliers in Nairobi if you need new equipment."
  }
];

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 border-t border-black/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="section-label mx-auto">Common Inquiries</span>
          <h2 className="text-3xl md:text-5xl font-bold serif text-black">POS Systems Kenya FAQ</h2>
        </div>
        <div className="space-y-8">
          {faqItems.map((item, i) => (
            <div key={i} className="space-y-3 group border-b border-black/5 pb-8">
              <h3 className="text-lg md:text-xl font-bold text-black group-hover:text-[#7C3AED] transition-colors">
                {item.question}
              </h3>
              <p className="text-gray-500 font-light leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};