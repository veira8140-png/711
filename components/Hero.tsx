import React from 'react';

interface HeroProps {
  onStart: () => void;
  onViewDemo?: () => void;
}

const BRAND_LOGOS = [
  { href: "https://earlyhunt.com/project/veira", src: "https://earlyhunt.com/badges/earlyhunt-badge-light.svg", alt: "Featured on EarlyHunt" },
  { href: "https://www.producthunt.com/products/veira-kenya", src: "https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=1151101&theme=neutral", alt: "Product Hunt" },
  { href: "https://kickproduct.com/products/698eddead0648bb45945cc8d", src: "https://www.kickproduct.com/listedbadge.png", alt: "Kick Product" },
  { href: "https://twelve.tools", src: "https://twelve.tools/badge0-light.svg", alt: "Twelve Tools" },
  { href: "https://wired.business", src: "https://wired.business/badge0-light.svg", alt: "Wired Business" },
  { href: "https://frogdr.com/veirahq.com", src: "https://frogdr.com/veirahq.com/badge-white.svg?text=Website+Trust+Score", alt: "FrogDR" },
  { href: "https://www.aidirectori.es", src: "https://cdn.aidirectori.es/ai-tools/badges/dark-mode.png", alt: "AI Directories" },
  { href: "https://aitechviral.com", src: "https://aitechviral.com/assets/images/badge.png", alt: "AI Tech Viral" },
  { href: "https://milliondothomepage.com", src: "https://milliondothomepage.com/assets/images/badge.png", alt: "Million Dot Homepage" },
  { href: "https://acidtools.com", src: "https://acidtools.com/assets/images/badge.png", alt: "Acid Tools" },
  { href: "https://aigc160.com", src: "https://aigc160.com/assets/images/badge.png", alt: "AIGC 160" },
  { href: "https://aitoolzs.com", src: "https://aitoolzs.com/assets/images/badge.png", alt: "AI Toolz" },
  { href: "https://aixcollection.com", src: "https://aixcollection.com/assets/images/badge.png", alt: "AI X Collection" },
  { href: "https://appalist.com", src: "https://appalist.com/assets/images/badge.png", alt: "Appa List" },
  { href: "https://news.ycombinator.com", src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Y_Combinator_logo.svg", alt: "Hacker News" },
  { href: "https://poweruptools.com", src: "https://poweruptools.com/assets/images/badge.png", alt: "Power Up Tools" }
];

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

      <div className="mt-40 md:mt-64 flex flex-col items-center border-t border-black/5 pt-16 md:pt-24 w-full space-y-12">
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-300">Featured IN</span>
        
        <div className="w-full overflow-hidden fade-mask relative py-4">
          <div className="flex w-max animate-scroll gap-16 md:gap-24 items-center hover:[animation-play-state:paused]">
            {/* First Set of Logos */}
            {BRAND_LOGOS.map((logo, idx) => (
              <a 
                key={`brand-1-${idx}`}
                href={logo.href}
                target="_blank" 
                rel="noopener" 
                className="transition-all duration-500 hover:scale-105 active:scale-95 group shrink-0"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="grayscale contrast-[1.1] opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out h-[36px] md:h-[48px] w-auto object-contain"
                />
              </a>
            ))}
            {/* Duplicated Set for Seamless Loop */}
            {BRAND_LOGOS.map((logo, idx) => (
              <a 
                key={`brand-2-${idx}`}
                href={logo.href}
                target="_blank" 
                rel="noopener" 
                className="transition-all duration-500 hover:scale-105 active:scale-95 group shrink-0"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="grayscale contrast-[1.1] opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out h-[36px] md:h-[48px] w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};