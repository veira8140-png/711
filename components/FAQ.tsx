import React, { useState } from 'react';

const faqItems = [
  {
    question: "Where can I buy a POS system in Kenya that is eTIMS ready?",
    answer: "If you are looking to buy a POS system in Kenya, Veira offers the most complete solution. Our POS machine Kenya package includes a wireless POS machine for sale in Kenya that is fully integrated with KRA eTIMS. It's the best POS system for small business in Kenya because it automates tax compliance right at the counter."
  },
  {
    question: "What is the average POS system price in Kenya and setup cost?",
    answer: "Wondering how much does a POS system cost in Kenya? While some providers charge high upfront fees, Veira offers an affordable POS system in Nairobi with a one-time setup fee of KES 3,500. There are no expensive POS system Kenya cost hurdles for the hardware; we provide a high-quality POS machine Kenya for free as part of our success-based 1% revenue share model."
  },
  {
    question: "Why is Veira considered the best POS software in Kenya for retail shops?",
    answer: "Veira is the best POS software in Kenya because it combines ease of use with deep local functionality. As a top-tier retail POS system Kenya solution, it includes a retail management system Kenya module that handles everything from barcode scanning to real-time stock alerts, making it a cheap POS system for retail shop Kenya owners who don't want to compromise on quality."
  },
  {
    question: "Does your POS solution Kenya include M-PESA integration?",
    answer: "Yes, our POS solution Kenya is built for the local market. It is a POS system with Mpesa integration Kenya that automatically reconciles Till and Paybill payments. This mobile POS Kenya capability ensures that your point of sale system Nairobi operations are always accurate and your digital cash is perfectly accounted for."
  },
  {
    question: "Do you provide a physical POS machine Kenya with the software?",
    answer: "Yes, when you join Veira, we provide a premium, hand-held POS machine Kenya for your business at no upfront cost. This hardware is specifically designed to handle heavy daily use in busy shops, featuring a built-in thermal receipt printer, a high-sensitivity touch screen, and a long-lasting battery life to ensure your sales never stop even during power outages."
  },
  {
    question: "Where is your point of sale system Nairobi office located for support?",
    answer: "Our primary point of sale system Nairobi support and training hub is located in the heart of Westlands. We believe in being close to our customers; that's why we offer on-site installation and 24-hour technical assistance across the city. Being a local Nairobi-based company allows us to respond faster and understand the unique retail environment of the CBD and surrounding neighborhoods."
  },
  {
    question: "How does Veira compare to other legacy POS systems in Kenya?",
    answer: "Most legacy POS systems in Kenya are offline-only, complex to learn, and require expensive server hardware. Veira is different because it is cloud-native and AI-powered. We move beyond simple record-keeping to provide active retail intelligence. While traditional systems just tell you what you sold, Veira tells you how to grow, detects theft patterns, and ensures you're always eTIMS compliant without manual effort."
  },
  {
    question: "Is there a specific restaurant POS system in Kenya for cafes and bars?",
    answer: "Absolutely. Veira is an excellent restaurant POS system in Kenya. We offer a specialized cloud-based POS system for restaurants in Nairobi that includes table management and kitchen printing. It's an all-in-one POS system for cafe Kenya businesses that need to track ingredients and manage fast-paced orders efficiently."
  },
  {
    question: "Can I use your cloud POS system in Kenya if my internet is unstable?",
    answer: "Yes. Unlike other cloud POS system Kenya providers, Veira is a POS system that works offline Kenya. Your data is stored locally on the device and syncs to the cloud once the connection is restored. This makes it a reliable POS software Kenya option for areas with fluctuating connectivity."
  },
  {
    question: "Is this the best POS software for supermarket in Kenya operations?",
    answer: "For larger retailers, Veira serves as a powerful POS system with inventory management Kenya. It is widely regarded as the best POS software for supermarket in Kenya due to its ability to handle thousands of SKUs, manage multiple suppliers, and provide the deep analytics required for high-volume retail management."
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
        <h3 className={`text-lg md:text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-black italic' : 'text-gray-400 group-hover:text-black'}`}>
          {item.question}
        </h3>
        <div className="relative w-6 h-6 shrink-0 text-gray-400">
          <span className={`absolute top-1/2 left-0 w-full h-[1px] bg-current transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}></span>
          <span className={`absolute top-0 left-1/2 h-full w-[1px] bg-current transition-transform duration-500 ${isOpen ? 'rotate-90 opacity-0' : ''}`}></span>
        </div>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] pb-12 opacity-100' : 'max-h-0 opacity-0'}`}
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
          <span className="section-label mx-auto">Expert Guidance</span>
          <h2 className="text-3xl md:text-5xl font-bold serif text-black italic">POS Systems Kenya FAQ</h2>
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

        <div className="mt-20 p-10 bg-black/[0.02] border border-black/5 text-center space-y-6">
          <p className="text-gray-600 font-light italic">
            Still looking for the best POS software Kenya has to offer? 
            Our team in Nairobi is ready to help you scale.
          </p>
          <button className="cta-primary px-12 py-4 font-bold uppercase tracking-[0.3em] text-[10px]">
            Get a Free Consultation via WhatsApp →
          </button>
        </div>
      </div>
    </section>
  );
};