
import React, { useState, useEffect } from 'react';
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
import { BlogHome } from './components/BlogHome.tsx';
import { ETIMSPost } from './components/ETIMSPost.tsx';
import { POSCostPost } from './components/POSCostPost.tsx';
import { BestPOSPost } from './components/BestPOSPost.tsx';
import { POSMachinePost } from './components/POSMachinePost.tsx';
import { HardwarePOSPost } from './components/HardwarePOSPost.tsx';
import { DynamicPSEOPage } from './components/DynamicPSEOPage.tsx';
import { ComparisonPage } from './components/ComparisonPage.tsx';
import pseoPagesData from './data/pseo_pages.json';
import { PSEOPage } from './types/pseo';

type View = 'landing' | 'blog-home' | 'blog-post-etims' | 'blog-post-cost' | 'blog-post-best' | 'blog-post-machine' | 'blog-post-hardware' | 'compare' | 'story' | 'pseo';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('landing');
  const [activePSEOPage, setActivePSEOPage] = useState<PSEOPage | null>(null);

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.replace(/\/$/, '') || '/';
      
      // Check for pSEO pages first
      const pseoPage = (pseoPagesData as PSEOPage[]).find(p => p.url === path);
      if (pseoPage) {
        setActivePSEOPage(pseoPage);
        setCurrentView('pseo');
        window.scrollTo(0, 0);
        return;
      }

      if (path === '/blog') setCurrentView('blog-home');
      else if (path === '/blog/e-tims-explained') setCurrentView('blog-post-etims');
      else if (path === '/blog/pos-cost-guide') setCurrentView('blog-post-cost');
      else if (path === '/blog/best-pos-system-small-business-kenya') setCurrentView('blog-post-best');
      else if (path === '/blog/pos-machine-kenya') setCurrentView('blog-post-machine');
      else if (path === '/blog/hardware-pos-guide') setCurrentView('blog-post-hardware');
      else if (path === '/compare') setCurrentView('compare');
      else if (path === '/story') setCurrentView('story');
      else setCurrentView('landing');
      window.scrollTo(0, 0);
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigateTo = (id: string) => {
    if (id === 'our-story') {
      window.history.pushState({}, '', '/story');
      setCurrentView('story');
      window.scrollTo(0, 0);
      return;
    }

    if (id === 'compare') {
      window.history.pushState({}, '', '/compare');
      setCurrentView('compare');
      window.scrollTo(0, 0);
      return;
    }

    if (currentView !== 'landing') {
      window.history.pushState({}, '', '/');
      setCurrentView('landing');
      window.scrollTo(0, 0);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = window.innerWidth < 768 ? 80 : 100;
          window.scrollTo({ top: element.offsetTop - offset, behavior: "smooth" });
        }
      }, 100);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = window.innerWidth < 768 ? 80 : 100;
      window.scrollTo({ top: element.offsetTop - offset, behavior: "smooth" });
    }
  };

  const handleShowBlogHome = () => {
    window.history.pushState({}, '', '/blog');
    setCurrentView('blog-home');
    window.scrollTo(0, 0);
  };

  const handleShowHome = () => {
    window.history.pushState({}, '', '/');
    setCurrentView('landing');
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'blog-home': return <BlogHome />;
      case 'blog-post-etims': return <ETIMSPost />;
      case 'blog-post-cost': return <POSCostPost />;
      case 'blog-post-best': return <BestPOSPost />;
      case 'blog-post-machine': return <POSMachinePost />;
      case 'blog-post-hardware': return <HardwarePOSPost />;
      case 'pseo': return activePSEOPage ? <DynamicPSEOPage page={activePSEOPage} /> : <BlogHome />;
      case 'compare': return <ComparisonPage />;
      case 'story': return <div className="bg-[#0f0720] min-h-screen"><OurStory /></div>;
      default:
        return (
          <>
            <section id="hero">
              <Hero onStart={() => navigateTo('how-it-works')} onViewDemo={() => navigateTo('case-studies')} />
            </section>
            <div className="container mx-auto px-4 sm:px-6 space-y-32 md:space-y-48 lg:space-y-64 pb-24 md:pb-40">
              <Testimonials />
              <Problem />
              <section id="pos"><POS /></section>
              <Transformation />
              <section id="cloud"><Cloud /></section>
              <section id="agents"><Agents /></section>
              <section id="studio" className="space-y-24">
                <div className="max-w-4xl space-y-6">
                  <span className="section-label">AI Intelligence Suite</span>
                  <h2 className="text-5xl md:text-8xl font-black serif text-black leading-[0.9] tracking-tighter">
                    Visual Commerce <br/><span className="italic text-gray-400">automated.</span>
                  </h2>
                </div>
                <div className="space-y-12"><BrandArchitect /><VisualStudio /></div>
              </section>
              <section id="enterprise"><Enterprise /></section>
              <section id="case-studies"><CaseStudies /></section>
              <section id="pricing"><Pricing /></section>
              <section id="how-it-works"><HowItWorks /></section>
              <FAQ />
            </div>
            <section id="our-story" className="bg-gradient-to-b from-[#2e1065] via-[#1e1b4b] to-[#0f0720] text-white">
              <OurStory />
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen relative selection:bg-[#7C3AED] selection:text-white">
      <WaveBackground />
      <Header onNavigate={navigateTo} onHome={handleShowHome} />
      <main className={`overflow-x-hidden pt-20 ${currentView === 'story' ? 'bg-[#0f0720]' : ''}`}>
        {renderContent()}
      </main>
      <Footer onNavigate={navigateTo} onShowBlog={handleShowBlogHome} />
    </div>
  );
};

export default App;
