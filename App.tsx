
import React from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { VisualStudio } from './components/VisualStudio.tsx';
import { BrandArchitect } from './components/BrandArchitect.tsx';
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
      
      <main className="pt-24 pb-32">
        {/* Full-width white hero section */}
        <section id="hero" className="bg-white w-full border-b border-black/5">
          <Hero onStart={() => scrollIntoView('studio')} />
        </section>

        {/* Centered container for the rest of the studio tools */}
        <div id="studio" className="container mx-auto px-6 mt-40 space-y-40">
          <section className="scroll-mt-24">
            <BrandArchitect />
          </section>

          <section className="scroll-mt-24">
            <VisualStudio />
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
