import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  location: string;
  title: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, author, role, location, title, image }) => (
  <div className="glass p-10 border-black/5 flex flex-col gap-8 hover:border-black/20 transition-all duration-500 group">
    <div className="space-y-4 flex-1">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0 bg-gray-100">
          <img 
            src={image} 
            alt={author} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            loading="lazy"
          />
        </div>
        <div>
          <h4 className="text-sm font-bold text-black uppercase tracking-widest">{author}</h4>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{role}</p>
          <p className="text-[9px] text-gray-300 uppercase tracking-[0.2em]">{location}</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xl md:text-2xl font-bold serif text-black italic leading-tight group-hover:text-gray-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 font-light leading-relaxed text-base">
          "{quote}"
        </p>
      </div>
    </div>
    <div className="pt-6 border-t border-black/5">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-[10px] text-gray-300">★</span>
        ))}
      </div>
    </div>
  </div>
);

export const Testimonials: React.FC = () => {
  const stories = [
    {
      title: "Daily Clarity",
      quote: "Before Veira I never knew what my shop made each day. Now I get daily sales on my phone and I feel in control for the first time.",
      author: "Amina",
      role: "Mini Market Owner",
      location: "Nairobi",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      title: "Staff Accountability",
      quote: "Staff used to fudge sales or give discounts without telling me. Glenn keeps everyone on track even when I am away.",
      author: "Sam",
      role: "Café Owner",
      location: "Westlands",
      image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      title: "Peace of Mind",
      quote: "Tiri alerts me about cash discrepancies before they become a problem. I can finally step away without stressing.",
      author: "Joseph",
      role: "Hardware Shop Owner",
      location: "Kitengela",
      image: "https://images.pexels.com/photos/8124213/pexels-photo-8124213.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1&fit=crop"
    },
    {
      title: "Growing Without Chaos",
      quote: "Managing three branches was impossible. Veira lets me see every location from my phone. I scale with confidence now.",
      author: "Faith",
      role: "Electronics Retailer",
      location: "Nairobi",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      title: "Marketing Made Easy",
      quote: "Achi sends targeted offers automatically. Dormant customers are back and sales are up without me lifting a finger.",
      author: "Michael",
      role: "Restaurant Owner",
      location: "Westlands",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      title: "Compliance Confidence",
      quote: "I was always worried about KRA and ETIMS. Veira keeps all records audit-ready. I sleep easy at night.",
      author: "Grace",
      role: "Pharmacy Owner",
      location: "Nakuru",
      image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      title: "Freedom to Step Away",
      quote: "I do not have to be on site every day to know what is happening. Veira keeps me informed and in control from anywhere.",
      author: "Peter",
      role: "Hardware Shop Owner",
      location: "Kitengela",
      image: "https://images.pexels.com/photos/2379429/pexels-photo-2379429.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1"
    },
    {
      title: "Reduced Stress",
      quote: "Before Veira I spent hours chasing reports and reconciling numbers. Now the AI agents handle everything and I have time to focus on growth.",
      author: "Linda",
      role: "Retail Shop Owner",
      location: "Nairobi",
      image: "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      title: "Business Running Smoothly",
      quote: "Even during rush hour the staff never get stuck. Glenn answers questions instantly and operations flow without interruption.",
      author: "Eric",
      role: "Café Owner",
      location: "Westlands",
      image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=200&h=200&auto=format&fit=crop"
    }
  ];

  return (
    <section id="testimonials" className="py-32 md:py-48">
      <div className="space-y-24">
        <div className="max-w-4xl space-y-6">
          <span className="section-label">Real Voices</span>
          <h2 className="text-5xl md:text-8xl font-black serif text-black leading-[0.9] tracking-tighter">
            The owners who <br/><span className="italic text-gray-400">trusted the system.</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl">
            Success is not an accident. It is the result of thousands of correct decisions made every day with Veira.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((s, i) => (
            <TestimonialCard key={i} {...s} />
          ))}
        </div>

        <div className="pt-24 text-center space-y-12">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-5xl font-bold serif italic text-black">Ready to gain total clarity?</h3>
            <p className="text-gray-400 font-light">Join the hundreds of owners across Kenya using Veira.</p>
          </div>
          <button className="cta-primary px-16 py-8 font-bold text-[10px] uppercase tracking-[0.4em]">
            Apply for Your Install
          </button>
        </div>
      </div>
    </section>
  );
};