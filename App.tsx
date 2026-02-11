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

      <footer className="py-12 md:py-24 px-4 sm:px-6 border-t border-black/5 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-start">
            
            {/* Brand & Socials */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-3xl font-bold serif text-black">veira.</span>
                <p className="text-gray-400 text-sm font-light max-w-xs leading-relaxed">
                  The leading POS system for small business in Kenya. Empowering retail owners with intelligent tools and real-time visibility.
                </p>
              </div>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-black/5 rounded-full flex items-center justify-center text-gray-400 hover:text-black hover:border-black transition-all duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Product Links */}
            <div className="space-y-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black">Product</p>
              <div className="flex flex-col space-y-4 text-[11px] uppercase tracking-widest font-bold text-gray-400">
                <p className="hover:text-black cursor-pointer transition-colors" onClick={() => navigateTo('pos')}>Retail POS</p>
                <p className="hover:text-black cursor-pointer transition-colors" onClick={() => navigateTo('cloud')}>Cloud Sync</p>
                <p className="hover:text-black cursor-pointer transition-colors" onClick={() => navigateTo('studio')}>AI Studio</p>
                <p className="hover:text-black cursor-pointer transition-colors" onClick={() => navigateTo('agents')}>AI Agents</p>
                <p className="hover:text-black cursor-pointer transition-colors" onClick={() => navigateTo('enterprise')}>Enterprise Solutions</p>
              </div>
            </div>

            {/* Connect */}
            <div className="space-y-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black">Connect</p>
              <div className="space-y-4 text-sm font-light text-gray-400">
                <p className="flex items-center gap-2">
                  <span className="text-black font-bold">HQ:</span> Westlands, Nairobi, KE
                </p>
                <a href="mailto:hello@veira.co" className="block hover:text-black cursor-pointer transition-colors underline underline-offset-4 decoration-black/10">hello@veira.co</a>
                <div className="pt-2">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-black mb-1">Support 24/7</p>
                  <p className="text-gray-500">+254 700 000 000</p>
                </div>
              </div>
            </div>

            {/* Google Business Map */}
            <div className="space-y-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black">Find Us</p>
              <div className="relative group overflow-hidden border border-black/5 aspect-[4/3] w-full bg-gray-50">
                {/* Embed a placeholder style map that looks premium */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.163312384!2d36.707308!3d-1.303204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b2a89537!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1704000000000!5m2!1sen!2ske" 
                  className="w-full h-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <a 
                  href="https://share.google/VhjFjdxSAxsw4ATSn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors flex items-center justify-center cursor-pointer"
                >
                  <span className="bg-white px-5 py-3 text-[9px] font-bold uppercase tracking-widest text-black shadow-2xl opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-black hover:text-white">
                    View Google Business Profile
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-black/5 flex flex-col sm:flex-row justify-between items-center gap-6 text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold">
            <div className="space-y-1 text-center sm:text-left">
              <p>© 2024 Veira Intelligence • POS Systems in Kenya – Prices, Features & eTIMS</p>
              <p className="text-[8px] opacity-60">Architected for certainty in Nairobi.</p>
            </div>
            <div className="flex gap-8">
              <p className="hover:text-black cursor-pointer transition-colors">Privacy Policy</p>
              <p className="hover:text-black cursor-pointer transition-colors">Terms of Service</p>
              <p className="hover:text-black cursor-pointer transition-colors" onClick={() => navigateTo('our-story')}>Compliance</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;