
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

const URL_MAPPING: Record<string, string> = {
  'hero': '#',
  'pos': '#best-pos-system-for-small-business-in-kenya',
  'case-study': '#pos-system-comparison-kenya',
  'studio': '#retail-management-system-kenya',
  'agents': '#best-pos-software-for-supermarket-in-kenya',
  'cloud': '#cloud-based-pos-system-for-restaurants-in-nairobi',
  'enterprise': '#all-in-one-pos-system-for-cafe-kenya',
  'our-story': '#about-veira-pos-suppliers-kenya'
};

const App: React.FC = () => {
  const navigateTo = (id: string, updateUrl = true) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (updateUrl) {
        const hash = URL_MAPPING[id] || `#${id}`;
        window.history.pushState({ id }, '', hash);
      }
    }
  };

  useEffect(() => {
    const currentHash = window.location.hash || '#';
    const entry = Object.entries(URL_MAPPING).find(([id, hash]) => hash === currentHash);
    const idToScroll = entry ? entry[0] : currentHash.replace('#', '');
    if (idToScroll && idToScroll !== '') {
      const timer = setTimeout(() => navigateTo(idToScroll, false), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const sections = Object.keys(URL_MAPPING);
    const observerOptions = { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 };
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const hash = URL_MAPPING[id] || `#${id}`;
          if (window.location.hash !== hash) {
            window.history.replaceState({ id }, '', hash);
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

  return (
    <div className="min-h-screen relative selection:bg-[#2D9B9B] selection:text-white">
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Veira Intelligence",
          "url": "https://veirahq.com",
          "logo": "https://veirahq.com/logo.png",
          "description": "Leading provider of the best POS system for small business in Kenya.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Nairobi",
            "addressCountry": "Kenya"
          }
        })}
      </script>

      <WaveBackground />
      <Header onNavigate={navigateTo} />
      
      <main>
        <section id="hero" className="bg-white w-full border-b border-black/5">
          <Hero 
            onStart={() => navigateTo('pos')} 
            onViewCaseStudy={() => navigateTo('case-study')} 
          />
        </section>

        {/* Standard Light Sections */}
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
                <h2 className="text-5xl font-bold serif text-black">Retail Management System Kenya</h2>
                <p className="text-gray-500">Advanced branding and visualization tools for the modern retail architect.</p>
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
        </div>

        {/* Isolated Dark Section for Our Story */}
        <section id="our-story" className="scroll-mt-32 mt-60 bg-[var(--veira-deep-plum)] text-white">
          <OurStory />
        </section>
      </main>

      <footer className="bg-white border-t border-black/5 py-12 px-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-[10px] uppercase tracking-widest gap-4">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-[#2D9B9B]"></div>
          <p>System Online • Certainty Enforced</p>
        </div>
        <p>© 2024 Veira Intelligence. Top-rated POS system suppliers Kenya.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-black transition-colors">Terms</a>
          <a href="#" className="hover:text-black transition-colors">Privacy</a>
          <a href="#" className="hover:text-black transition-colors">Data Ethics</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
