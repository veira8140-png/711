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
        </div>

        <section id="our-story" className="bg-gradient-to-b from-[#2e1065] via-[#1e1b4b] to-[#0f0720] text-white">
          <OurStory />
        </section>
      </main>

      <footer className="py-12 md:py-20 px-4 sm:px-6 border-t border-black/5 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-4">
            <span className="text-2xl font-bold serif text-black">veira.</span>
            <p className="text-gray-400 text-sm font-light max-w-xs">
              Intelligent commerce solutions for the next generation of business.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:gap-16 text-[10px] uppercase tracking-widest font-bold text-gray-400">
            <div className="space-y-4">
              <p className="text-black">Legal</p>
              <p className="hover:text-black cursor-pointer transition-colors">Privacy</p>
              <p className="hover:text-black cursor-pointer transition-colors">Terms</p>
            </div>
            <div className="space-y-4">
              <p className="text-black">Contact</p>
              <p>Nairobi, Kenya</p>
              <p className="hover:text-black cursor-pointer transition-colors">hello@veira.co</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-12 pt-8 border-t border-black/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold">
          <p>© 2024 Veira Intelligence</p>
          <p>Built for the modern shop owner</p>
        </div>
      </footer>
    </div>
  );
};

export default App;