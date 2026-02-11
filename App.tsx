import React from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { POS } from './components/POS.tsx';
import { Agents } from './components/Agents.tsx';
import { Cloud } from './components/Cloud.tsx';
import { Enterprise } from './components/Enterprise.tsx';
import { OurStory } from './components/OurStory.tsx';
import { CaseStudies } from './components/CaseStudies.tsx';
import { WaveBackground } from './components/WaveBackground.tsx';
import { BrandArchitect } from './components/BrandArchitect.tsx';
import { VisualStudio } from './components/VisualStudio.tsx';

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

  return (
    <div className="min-h-screen relative selection:bg-[#7C3AED] selection:text-white">
      <WaveBackground />
      <Header onNavigate={navigateTo} />
      
      <main className="overflow-x-hidden">
        <section id="hero">
          <Hero 
            onStart={() => navigateTo('pos')} 
            onViewCaseStudy={() => navigateTo('case-study')} 
          />
        </section>

        <div className="container mx-auto px-4 sm:px-6 space-y-32 md:space-y-48 lg:space-y-64 pb-24 md:pb-40">
          <section id="pos">
            <POS />
          </section>

          <section id="agents">
            <Agents />
          </section>

          <section id="case-study">
            <CaseStudies />
          </section>

          <section id="studio" className="space-y-24">
            <div className="max-w-3xl space-y-6">
              <span className="section-label">AI Studio</span>
              <h2 className="text-4xl md:text-6xl font-bold serif text-black leading-tight">
                Generative <br/><span className="italic text-gray-400">Commerce.</span>
              </h2>
              <p className="text-lg text-gray-500 font-light leading-relaxed">
                Use our built-in Gemini Intelligence to architect your brand and generate visual assets in real-time.
              </p>
            </div>
            <div className="space-y-12">
              <BrandArchitect />
              <VisualStudio />
            </div>
          </section>

          <section id="cloud">
            <Cloud />
          </section>

          <section id="enterprise">
            <Enterprise />
          </section>
          
          <section className="text-center space-y-12 py-24 border-t border-black/5">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold serif text-black leading-tight">
                Ready to run the <br className="hidden sm:block" />
                <span className="italic text-gray-400">Best POS in Kenya?</span>
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto font-light">
                Join hundreds of shops in Nairobi, Mombasa, and Kisumu who have upgraded to Veira.
              </p>
            </div>
            <button 
              onClick={() => navigateTo('hero')}
              className="cta-primary px-16 py-6 text-xs font-bold uppercase tracking-widest"
            >
              Get Started Now
            </button>
          </section>
        </div>

        <section id="our-story" className="bg-gradient-to-b from-[#2e1065] via-[#1e1b4b] to-[#0f0720] text-white">
          <OurStory />
        </section>
      </main>

      <footer className="py-12 md:py-20 px-4 sm:px-6 border-t border-black/5 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-4">
            <span className="text-2xl font-bold serif text-black">veira.</span>
            <p className="text-gray-400 text-sm font-light max-w-xs leading-relaxed">
              The leading POS system for small business in Kenya. Empowering retail owners with intelligent tools.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:gap-16 text-[10px] uppercase tracking-widest font-bold text-gray-400">
            <div className="space-y-4">
              <p className="text-black">Product</p>
              <p className="hover:text-black cursor-pointer transition-colors" onClick={() => navigateTo('pos')}>Retail POS</p>
              <p className="hover:text-black cursor-pointer transition-colors" onClick={() => navigateTo('cloud')}>Cloud Sync</p>
              <p className="hover:text-black cursor-pointer transition-colors" onClick={() => navigateTo('studio')}>AI Studio</p>
            </div>
            <div className="space-y-4">
              <p className="text-black">Connect</p>
              <p>Nairobi, KE</p>
              <p className="hover:text-black cursor-pointer transition-colors">hello@veira.co</p>
              <p className="hover:text-black cursor-pointer transition-colors">LinkedIn</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-12 pt-8 border-t border-black/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold">
          <p>© 2024 Veira Intelligence • Best POS system for small business in Kenya</p>
          <div className="flex gap-6">
            <p className="hover:text-black cursor-pointer">Privacy Policy</p>
            <p className="hover:text-black cursor-pointer">Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;