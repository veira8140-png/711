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
import { BrandArchitect } from './components/BrandArchitect.tsx';
import { VisualStudio } from './components/VisualStudio.tsx';
import { Footer } from './components/Footer.tsx';
import { Testimonials } from './components/Testimonials.tsx';

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
            onStart={() => navigateTo('how-it-works')} 
            onViewDemo={() => navigateTo('case-studies')} 
          />
        </section>

        <div className="container mx-auto px-4 sm:px-6 space-y-32 md:space-y-48 lg:space-y-64 pb-24 md:pb-40">
          <Testimonials />

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

          {/* Studio Section */}
          <section id="studio" className="space-y-24">
            <div className="max-w-4xl space-y-6">
              <span className="section-label">AI Creative Suite</span>
              <h2 className="text-5xl md:text-8xl font-black serif text-black leading-[0.9] tracking-tighter">
                Brand Intelligence <br/><span className="italic text-gray-400">at your fingertips.</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl">
                Use Veira's built-in Gemini models to design your brand identity and visual assets specifically for the Kenyan market.
              </p>
            </div>
            
            <div className="space-y-12">
              <BrandArchitect />
              <VisualStudio />
            </div>
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

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;