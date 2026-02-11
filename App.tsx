
import React, { useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { VisualStudio } from './components/VisualStudio.tsx';
import { BrandArchitect } from './components/BrandArchitect.tsx';
import { POS } from './components/POS.tsx';
import { Agents } from './components/Agents.tsx';
import { Cloud } from './components/Cloud.tsx';
import { Enterprise } from './components/Enterprise.tsx';
import { OurStory } from './components/OurStory.tsx';
import { CaseStudies } from './components/CaseStudies.tsx';
import { WaveBackground } from './components/WaveBackground.tsx';

// Mapping between section IDs and their SEO-friendly URL paths
const URL_MAPPING: Record<string, string> = {
  'hero': '/',
  'pos': '/pos',
  'case-study': '/case-study',
  'studio': '/studio',
  'agents': '/agents',
  'cloud': '/cloud',
  'enterprise': '/enterprise',
  'our-story': '/our-story'
};

const App: React.FC = () => {
  const navigateTo = (id: string, updateUrl = true) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (updateUrl) {
        const path = URL_MAPPING[id] || `/${id}`;
        window.history.pushState({ id }, '', path);
      }
    }
  };

  // Handle initial load and deep linking
  useEffect(() => {
    const currentPath = window.location.pathname;
    const entry = Object.entries(URL_MAPPING).find(([id, path]) => path === currentPath);
    
    // If we find a direct mapping, use it. 
    // Otherwise, try to find an ID that matches the path (e.g. /pos -> pos)
    const idToScroll = entry ? entry[0] : currentPath.replace('/', '');

    if (idToScroll) {
      const timer = setTimeout(() => {
        navigateTo(idToScroll, false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Sync URL with scroll position using Intersection Observer
  useEffect(() => {
    const sections = Object.keys(URL_MAPPING);
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const path = URL_MAPPING[id] || `/${id}`;
          if (window.location.pathname !== path) {
            window.history.replaceState({ id }, '', path);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const id = event.state?.id || 'hero';
      navigateTo(id, false);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="min-h-screen relative selection:bg-[#2D9B9B] selection:text-white">
      <WaveBackground />
      
      <Header onNavigate={navigateTo} />
      
      <main className="pb-32">
        <section id="hero" className="bg-white w-full border-b border-black/5">
          <Hero 
            onStart={() => navigateTo('pos')} 
            onViewCaseStudy={() => navigateTo('case-study')} 
          />
        </section>

        <div className="container mx-auto px-6 mt-40 space-y-60">
          <section id="pos" className="scroll-mt-32">
            <POS />
          </section>

          <section id="case-study" className="scroll-mt-32">
            <CaseStudies />
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
