import React from 'react';

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
              <h3 className="text-lg md:text-xl font-bold text-black group-hover:text-[#2D9B9B] transition-colors">
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