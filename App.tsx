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

const App: React.FC = () => {
  const navigateTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
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

        <div className="container mx-auto px-6 space-y-60 pb-40">
          <section id="pos">
            <POS />
          </section>

          <section id="agents">
            <Agents />
          </section>

          <section id="case-study">
            <CaseStudies />
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

      <footer className="py-20 px-6 border-t border-black/5 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-4">
            <span className="text-2xl font-bold serif text-black">veira.</span>
            <p className="text-gray-400 text-sm font-light max-w-xs">
              Intelligent commerce solutions for the next generation of business.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-16 text-[10px] uppercase tracking-widest font-bold text-gray-400">
            <div className="space-y-4">
              <p className="text-black">Legal</p>
              <p>Privacy</p>
              <p>Terms</p>
            </div>
            <div className="space-y-4">
              <p className="text-black">Contact</p>
              <p>Nairobi, Kenya</p>
              <p>hello@veira.co</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;