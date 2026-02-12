import React from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { Problem } from './components/Problem.tsx';
import { POS } from './components/POS.tsx';
import { Transformation } from './components/Transformation.tsx';
import { Agents } from './components/Agents.tsx';
import { Cloud } from './components/Cloud.tsx';
import { Enterprise } from './components/Enterprise.tsx';
import { HowItWorks } from './components/HowItWorks.tsx';
import { OurStory } from './components/OurStory.tsx';
import { CaseStudies } from './components/CaseStudies.tsx';
import { WaveBackground } from './components/WaveBackground.tsx';
import { FAQ } from './components/FAQ.tsx';
import { Pricing } from './components/Pricing.tsx';

const App: React.FC = () => {
  const navigateTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = window.innerWidth < 768 ? 80 : 100;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: "smooth"
      });
    }
  };

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/company/veira', 
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    { 
      name: 'Instagram', 
      href: 'https://instagram.com/veirahq', 
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    { 
      name: 'X', 
      href: 'https://x.com/veirahq', 
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen relative selection:bg-[#7C3AED] selection:text-white">
      <WaveBackground />
      <Header onNavigate={navigateTo} />
      
      <main className="overflow-x-hidden">
        <section id="hero">
          <Hero 
            onStart={() => navigateTo('how-it-works')} 
            onViewDemo={() => navigateTo('case-studies')} 
          />
        </section>

        <div className="container mx-auto px-4 sm:px-6 space-y-32 md:space-y-48 lg:space-y-64 pb-24 md:pb-40">
          <Problem />

          <section id="pos">
            <POS />
          </section>

          <Transformation />

          <section id="cloud">
            <Cloud />
          </section>

          <section id="agents">
            <Agents />
          </section>

          <section id="enterprise">
            <Enterprise />
          </section>

          <section id="case-studies">
            <CaseStudies />
          </section>

          <section id="pricing">
            <Pricing />
          </section>

          <section id="how-it-works">
            <HowItWorks />
          </section>
          
          <section className="text-center space-y-12 py-24 border-t border-black/5">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold serif text-black leading-tight">
                Run your business with <br className="hidden sm:block" />
                <span className="italic text-gray-400">total confidence.</span>
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto font-light">
                If you are tired of running your business blindly, Veira is for you.
              </p>
            </div>
            <button 
              onClick={() => navigateTo('hero')}
              className="cta-primary px-16 py-6 text-xs font-bold uppercase tracking-widest"
            >
              Install Veira Today
            </button>
          </section>

          <FAQ />
        </div>

        <section id="our-story" className="bg-gradient-to-b from-[#2e1065] via-[#1e1b4b] to-[#0f0720] text-white">
          <OurStory />
        </section>
      </main>

      <footer className="py-12 md:py-24 px-4 sm:px-6 border-t border-black/5 bg-white">
        <div className="container mx-auto text-center space-y-12">
           <div className="space-y-4">
              <span className="text-4xl font-bold serif text-black">veira.</span>
              <p className="text-gray-400 text-sm font-light max-w-md mx-auto leading-relaxed">
                See every shilling. Stop revenue leakage. <br/>Architected for certainty in Nairobi.
              </p>
           </div>
           <div className="flex justify-center gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-400">
             <p className="hover:text-black cursor-pointer" onClick={() => navigateTo('pos')}>POS</p>
             <p className="hover:text-black cursor-pointer" onClick={() => navigateTo('agents')}>Agents</p>
             <p className="hover:text-black cursor-pointer" onClick={() => navigateTo('pricing')}>Pricing</p>
             <p className="hover:text-black cursor-pointer" onClick={() => navigateTo('cloud')}>Cloud</p>
             <p className="hover:text-black cursor-pointer" onClick={() => navigateTo('our-story')}>Our Story</p>
           </div>
           <div className="pt-8 border-t border-black/5 text-[9px] text-gray-300 uppercase tracking-widest">
              © 2024 Veira Intelligence • HQ: Westlands, Nairobi
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;