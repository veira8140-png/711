import React from 'react';

interface HeroProps {
  onStart: () => void;
  onViewDemo?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart, onViewDemo }) => {
  return (
    <div className="relative pt-40 pb-20 md:pt-60 md:pb-80 px-4 sm:px-6 flex flex-col items-center text-center max-w-7xl mx-auto overflow-visible">
      <div className="space-y-8 md:space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-[1.5s] relative z-10">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] font-bold serif leading-[0.9] tracking-tight text-black max-w-6xl">
            See Every Shilling <br className="hidden sm:block" />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-400">In Your Business.</span>
          </h1>
        </div>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed mt-12 px-4 border-l md:border-l-0 md:border-x border-black/5 py-4">
          Veira gives you total control, real time visibility, and built in compliance, 
          so your business runs smoothly whether you are in the shop or not.
        </p>
      </div>
      
      <div className="mt-16 md:mt-24 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 w-full sm:w-auto relative z-10 px-4 sm:px-0">
        <button 
          onClick={onStart}
          className="cta-primary w-full sm:w-auto px-12 md:px-16 py-6 md:py-7 text-[10px] font-bold uppercase tracking-[0.2em] min-h-[64px]"
        >
          Get Free POS
        </button>
        <button 
          onClick={onViewDemo}
          className="w-full sm:w-auto px-12 md:px-16 py-6 md:py-7 border border-black/10 backdrop-blur-md bg-white/30 hover:bg-[#2D9B9B] hover:text-white transition-all duration-500 text-[10px] font-bold uppercase tracking-[0.2em] text-black min-h-[64px]"
        >
          Case Study
        </button>
      </div>

      <div className="mt-40 md:mt-64 flex flex-col items-center border-t border-black/5 pt-16 md:pt-24 w-full space-y-8">
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-300">As Featured On</span>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          <a 
            href="https://earlyhunt.com/project/veira" 
            target="_blank" 
            rel="noopener" 
            className="transition-all duration-500 hover:scale-105 active:scale-95 group"
          >
            <img 
              src="https://earlyhunt.com/badges/earlyhunt-badge-light.svg" 
              alt="Featured on EarlyHunt" 
              width="265" 
              height="58" 
              className="grayscale contrast-[1.1] opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out h-[54px] w-auto"
            />
          </a>

          <a 
            href="https://www.producthunt.com/products/veira-kenya/reviews/new?utm_source=badge-product_review&utm_medium=badge&utm_source=badge-veira-kenya" 
            target="_blank" 
            rel="noopener"
            className="transition-all duration-500 hover:scale-105 active:scale-95 group"
          >
            <img 
              src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=1151101&theme=neutral" 
              alt="Veira Kenya - Product Hunt Review" 
              width="250" 
              height="54" 
              className="grayscale contrast-[1.1] opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out h-[54px] w-auto"
            />
          </a>

          <a 
            href="https://kickproduct.com/products/698eddead0648bb45945cc8d" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-all duration-500 hover:scale-105 active:scale-95 group"
          >
            <img 
              src="https://www.kickproduct.com/listedbadge.png" 
              alt="Listed on Kick Product" 
              width="250" 
              className="grayscale contrast-[1.1] opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out h-[48px] md:h-[50px] w-auto"
            />
          </a>

          <a 
            href="https://twelve.tools" 
            target="_blank"
            rel="noopener"
            className="transition-all duration-500 hover:scale-105 active:scale-95 group"
          >
            <img 
              src="https://twelve.tools/badge0-light.svg" 
              alt="Featured on Twelve Tools" 
              width="200" 
              height="54" 
              className="grayscale contrast-[1.1] opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out h-[54px] w-auto"
            />
          </a>

          <a 
            href="https://wired.business" 
            target="_blank"
            rel="noopener"
            className="transition-all duration-500 hover:scale-105 active:scale-95 group"
          >
            <img 
              src="https://wired.business/badge0-light.svg" 
              alt="Featured on Wired Business" 
              width="200" 
              height="54" 
              className="grayscale contrast-[1.1] opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out h-[54px] w-auto"
            />
          </a>

          <a 
            href="https://frogdr.com/veirahq.com?utm_source=veirahq.com" 
            target="_blank" 
            rel="noopener"
            className="transition-all duration-500 hover:scale-105 active:scale-95 group"
          >
            <img 
              src="https://frogdr.com/veirahq.com/badge-white.svg?text=Website+Trust+Score" 
              alt="Monitor your Domain Rating with FrogDR" 
              width="250" 
              height="54" 
              className="grayscale contrast-[1.1] opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out h-[54px] w-auto"
            />
          </a>

          <a 
            href="https://www.aidirectori.es" 
            target="_blank" 
            rel="noopener"
            className="transition-all duration-500 hover:scale-105 active:scale-95 group"
          >
            <img 
              src="https://cdn.aidirectori.es/ai-tools/badges/dark-mode.png" 
              alt="AI Directories Badge" 
              className="grayscale contrast-[1.1] opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out h-[44px] md:h-[48px] w-auto"
            />
          </a>

          <a 
            href="https://aitechviral.com" 
            target="_blank" 
            rel="noopener"
            className="transition-all duration-500 hover:scale-105 active:scale-95 group"
          >
            <img 
              src="https://aitechviral.com/assets/images/badge.png" 
              alt="AI Tech Viral" 
              height="54" 
              className="grayscale contrast-[1.1] opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out h-[54px] w-auto"
            />
          </a>

          <a 
            href="https://milliondothomepage.com" 
            target="_blank" 
            rel="noopener"
            className="transition-all duration-500 hover:scale-105 active:scale-95 group"
          >
            <img 
              src="https://milliondothomepage.com/assets/images/badge.png" 
              alt="Million Dot Homepage" 
              height="54" 
              className="grayscale contrast-[1.1] opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out h-[54px] w-auto"
            />
          </a>

          <a 
            href="https://acidtools.com" 
            target="_blank" 
            rel="noopener"
            className="transition-all duration-500 hover:scale-105 active:scale-95 group"
          >
            <img 
              src="https://acidtools.com/assets/images/badge.png" 
              alt="Acid Tools" 
              height="54" 
              className="grayscale contrast-[1.1] opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out h-[54px] w-auto"
            />
          </a>
        </div>
      </div>
    </div>
  );
};