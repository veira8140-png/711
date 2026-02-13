import React from 'react';

interface HeroProps {
  onStart: () => void;
  onViewDemo?: () => void;
}

const BRAND_LOGOS = [
  { href: "https://www.producthunt.com", src: "https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=1151101&theme=neutral", alt: "Product Hunt" },
  { href: "https://www.crunchbase.com", src: "https://logo.clearbit.com/crunchbase.com", alt: "Crunchbase" },
  { href: "https://medium.com", src: "https://logo.clearbit.com/medium.com", alt: "Medium" },
  { href: "https://substack.com", src: "https://logo.clearbit.com/substack.com", alt: "Substack" },
  { href: "https://hubspot.com", src: "https://logo.clearbit.com/hubspot.com", alt: "HubSpot" },
  { href: "https://www.forbes.com", src: "https://logo.clearbit.com/forbes.com", alt: "Forbes" },
  { href: "https://techcrunch.com", src: "https://logo.clearbit.com/techcrunch.com", alt: "TechCrunch" },
  { href: "https://www.bloomberg.com", src: "https://logo.clearbit.com/bloomberg.com", alt: "Bloomberg" },
  { href: "https://earlyhunt.com", src: "https://earlyhunt.com/badges/earlyhunt-badge-light.svg", alt: "EarlyHunt" },
  { href: "https://news.ycombinator.com", src: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Y_Combinator_logo.svg", alt: "Hacker News" },
  { href: "https://wired.com", src: "https://logo.clearbit.com/wired.com", alt: "Wired" },
  { href: "https://twelve.tools", src: "https://twelve.tools/badge0-light.svg", alt: "Twelve Tools" },
  { href: "https://frogdr.com", src: "https://frogdr.com/veirahq.com/badge-white.svg?text=Website+Trust+Score", alt: "FrogDR" }
];

export const Hero: React.FC<HeroProps> = ({ onStart, onViewDemo }) => {
  // Gracefully hide images that fail to load to prevent "blanks" or broken icons
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none';
  };

  return (
    <div className="relative pt-20 pb-8 md:pt-28 md:pb-12 px-4 sm:px-6 flex flex-col items-center text-center max-w-7xl mx-auto overflow-visible min-h-[75vh] md:min-h-[80vh] justify-center">
      <div className="space-y-4 md:space-y-6 animate-in fade-in slide-in-from-bottom-12 duration-[1.5s] relative z-10">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] font-bold serif leading-[0.95] tracking-tight text-black max-w-6xl">
            See Every Shilling <br className="hidden sm:block" />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-400">In Your Business.</span>
          </h1>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed mt-2 md:mt-4 px-4 border-l md:border-l-0 md:border-x border-black/5 py-1">
          Veira gives you total control, real time visibility, and built in compliance, 
          so your business runs smoothly whether you are in the shop or not.
        </p>
      </div>
      
      <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto relative z-10 px-4 sm:px-0">
        <button 
          onClick={onStart}
          className="cta-primary w-full sm:w-auto px-10 md:px-14 py-4 md:py-5 text-[10px] font-bold uppercase tracking-[0.2em] min-h-[52px] md:min-h-[60px]"
        >
          Get Free POS
        </button>
        <button 
          onClick={onViewDemo}
          className="w-full sm:w-auto px-10 md:px-14 py-4 md:py-5 border border-black/10 backdrop-blur-md bg-white/30 hover:bg-[#2D9B9B] hover:text-white transition-all duration-500 text-[10px] font-bold uppercase tracking-[0.2em] text-black min-h-[52px] md:min-h-[60px]"
        >
          Case Study
        </button>
      </div>

      <div className="mt-10 md:mt-12 flex flex-col items-center border-t border-black/5 pt-6 md:pt-8 w-full space-y-4">
        <span className="text-[9px] font-black uppercase tracking-[0.5em] text-black opacity-60">Featured IN</span>
        
        <div className="w-full overflow-hidden fade-mask relative py-2">
          <div className="flex w-max animate-scroll gap-12 md:gap-20 items-center hover:[animation-play-state:paused]">
            {/* Double mapped for continuous scroll loop */}
            {[...BRAND_LOGOS, ...BRAND_LOGOS].map((logo, idx) => (
              <a 
                key={`brand-${idx}`}
                href={logo.href}
                target="_blank" 
                rel="noopener" 
                className="transition-all duration-500 hover:scale-110 active:scale-95 group shrink-0 flex items-center justify-center"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  onError={handleImageError}
                  className="grayscale contrast-[1.1] opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out h-[26px] md:h-[34px] w-auto object-contain max-w-[120px]"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};