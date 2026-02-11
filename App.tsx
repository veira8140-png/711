
import React from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { VisualStudio } from './components/VisualStudio.tsx';
import { BrandArchitect } from './components/BrandArchitect.tsx';
import { POS } from './components/POS.tsx';
import { Agents } from './components/Agents.tsx';
import { Cloud } from './components/Cloud.tsx';
import { Enterprise } from './components/Enterprise.tsx';
import { OurStory } from './components/OurStory.tsx';
import { WaveBackground } from './components/WaveBackground.tsx';

const App: React.FC = () => {
  const scrollIntoView = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative selection:bg-[#2D9B9B] selection:text-white">
      <WaveBackground />
      
      <Header onNavigate={scrollIntoView} />
      
      <main className="pb-32">
        {/* Full-width white hero section - starts at top 0 to hide body background under header */}
        <section id="hero" className="bg-white w-full border-b border-black/5">
          <Hero onStart={() => scrollIntoView('pos')} />
        </section>

        {/* Centered container for sections */}
        <div className="container mx-auto px-6 mt-40 space-y-60">
          <section id="pos" className="scroll-mt-32">
            <POS />
          </section>

          <section id="studio" className="scroll-mt-32">
            <div className="space-y-40">
              <div className="max-w-2xl mx-auto text-center space-y-4 mb-20">
                <h2 className="text-5xl font-bold serif">The Studio</h2>
                <p className="text-gray-400">Advanced tools for the modern retail architect.</p>
              </div>
              <BrandArchitect />
              <VisualStudio />
            </div>
          </section>

          <section id="agents" className="scroll-mt-32">
            <Agents />
          </section>

          <section id="cloud" className="scroll-mt-32">
            <Cloud />
          </section>

          <section id="enterprise" className="scroll-mt-32">
            <Enterprise />
          </section>

          <section id="our-story" className="scroll-mt-32">
            <OurStory />
          </section>
        </div>
      </main>

      <footer className="border-t border-white/5 py-12 px-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-[10px] uppercase tracking-widest gap-4">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-[#2D9B9B]"></div>
          <p>System Online • Certainty Enforced</p>
        </div>
        <p>© 2024 Veira Intelligence. All sales are safe.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Data Ethics</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
