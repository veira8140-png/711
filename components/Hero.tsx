import React from 'react';

interface HeroProps {
  onStart: () => void;
  onViewDemo?: () => void;
}

const BRAND_LOGOS = [
  { href: "https://www.producthunt.com", src: "https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=1151101&theme=neutral", alt: "Product Hunt" },
  { href: "https://earlyhunt.com", src: "https://earlyhunt.com/badges/earlyhunt-badge-light.svg", alt: "EarlyHunt" },
  { href: "https://twelve.tools", src: "https://twelve.tools/badge0-light.svg", alt: "Twelve Tools" },
  { href: "https://frogdr.com", src: "https://frogdr.com/veirahq.com/badge-white.svg?text=Website+Trust+Score", alt: "FrogDR" }
];

export const Hero: React.FC<HeroProps> = ({ onStart, onViewDemo }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // If a badge fails to load, we don't want a broken icon
    e.currentTarget.style.opacity = '0';
  };

  return (
    <div className="relative pt-20 pb-8 md:pt-28 md:pb-12 px-4 sm:px-6 flex flex-col items-center text-center max-w-7xl mx-auto overflow-visible min-h-[75vh] md:min-h-[80vh] justify-center">
      <div className="space-y-4 md:space-y-6 animate-in fade-in slide-in-from-bottom-12 duration-[1.5s] relative z-10">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[6.2rem] font-bold serif leading-[0.95] tracking-tight text-black max-w-6xl">
            See Every Shilling <br className="hidden sm:block" />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-400">In Your Business.</span>
          </h1>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed mt-2 md:mt-4 px-4 border-l md:border-l-0 md:border-x border-black/5 py-1">
          Veira gives you total control, real time visibility, and built in compliance, 
          so your business runs smoothly whether you are in the shop or not.
        </p>
      </div>
      
      <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto relative z-10 px-4 sm:px-0">
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

      <div className="mt-12 md:mt-16 flex flex-col items-center border-t border-black/10 pt-8 md:pt-10 w-full space-y-6">
        <span className="text-[9px] font-black uppercase tracking-[0.6em] text-black/50">Featured IN</span>
        
        <div className="w-full overflow-hidden fade-mask relative py-4">
          <div className="flex w-max animate-scroll gap-16 md:gap-32 items-center hover:[animation-play-state:paused]">
            {/* Repeated multiple times to ensure the marquee is full and loops perfectly */}
            {[...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS, ...BRAND_LOGOS].map((logo, idx) => (
              <a 
                key={`brand-${idx}`}
                href={logo.href}
                target="_blank" 
                rel="noopener" 
                className="transition-all duration-500 hover:scale-105 active:scale-95 group shrink-0 flex items-center justify-center"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  onError={handleImageError}
                  className="opacity-80 group-hover:opacity-100 transition-all duration-700 ease-out h-[32px] md:h-[40px] w-auto object-contain min-w-[100px] max-w-[180px]"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};