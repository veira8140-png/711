import React, { useState, useEffect } from 'react';
import { Orb } from './Orb.tsx';

interface HeaderProps {
  onNavigate: (id: string) => void;
}

// Removed redundant declare global block to fix duplicate identifier and modifier errors.
// window.aistudio is pre-configured in the environment and already declared globally.

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasKey, setHasKey] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    // Check for API key on mount to follow mandatory selection guidelines for paid models
    const checkKey = async () => {
      try {
        // @ts-ignore - aistudio is provided by the execution environment
        if (window.aistudio && typeof window.aistudio.hasSelectedApiKey === 'function') {
          // @ts-ignore
          const selected = await window.aistudio.hasSelectedApiKey();
          setHasKey(selected);
        }
      } catch (e) {
        console.error("Failed to check API key status", e);
      }
    };
    checkKey();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenKey = async () => {
    try {
      // @ts-ignore - aistudio is provided by the execution environment
      if (window.aistudio && typeof window.aistudio.openSelectKey === 'function') {
        // @ts-ignore
        await window.aistudio.openSelectKey();
        // As per guidelines, assume the key selection was successful to mitigate race conditions
        setHasKey(true);
      }
    } catch (e) {
      console.error("Failed to open key selection", e);
    }
  };

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onNavigate(id);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navItems = [
    { label: 'POS', id: 'pos' },
    { label: 'Agents', id: 'agents' },
    { label: 'Enterprise', id: 'enterprise' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Cloud', id: 'cloud' },
    { label: 'Our Story', id: 'our-story' }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-in-out ${
          isScrolled || isMenuOpen 
            ? 'bg-white/95 backdrop-blur-xl py-4 border-b border-black/5 shadow-sm' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a 
            href="#" 
            className="flex items-center gap-3 transition-opacity hover:opacity-70 group"
            onClick={(e) => handleLinkClick(e, 'hero')}
          >
            <Orb size="xs" className="group-hover:scale-110 transition-transform duration-500" />
            <span className="text-2xl font-bold tracking-tighter serif text-black uppercase">veira.</span>
          </a>
          
          <div className="hidden lg:flex items-center space-x-10 xl:space-x-12 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
            {navItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                onClick={(e) => handleLinkClick(e, item.id)} 
                className="hover:text-black transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            {/* Display API Key button if not selected, as per mandatory requirements */}
            {!hasKey && (
              <button 
                onClick={handleOpenKey}
                className="bg-red-500 text-white px-6 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest hover:bg-red-600 transition-all animate-pulse shadow-lg shadow-red-500/20"
              >
                Connect API Key
              </button>
            )}

            <button className="cta-primary px-8 py-3 rounded-none text-[9px]">
              Talk To Us
            </button>
          </div>

          <button 
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none z-[110]" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-6 h-[1px] bg-black transition-all duration-300 ease-out ${isMenuOpen ? 'rotate-45 translate-y-[1px]' : '-translate-y-1'}`}></span>
            <span className={`block w-6 h-[1px] bg-black transition-all duration-300 ease-out ${isMenuOpen ? '-rotate-45 -translate-y-0' : 'translate-y-1'}`}></span>
          </button>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 z-[90] bg-white transition-transform duration-700 ease-in-out lg:hidden flex flex-col justify-center items-center space-y-10 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col space-y-6 text-center px-6">
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`} 
              onClick={(e) => handleLinkClick(e, item.id)} 
              className="text-4xl font-bold serif text-black transition-all hover:italic"
            >
              {item.label}
            </a>
          ))}
          {!hasKey && (
            <button 
              onClick={handleOpenKey}
              className="text-2xl font-bold serif text-red-500 italic animate-pulse"
            >
              Connect API Key
            </button>
          )}
          <a 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); }} 
            className="text-4xl font-bold serif text-black transition-all hover:italic"
          >
            Talk To Us
          </a>
        </div>
        
        <div className="pt-8 border-t border-black/5 w-64 text-center">
          <button className="cta-primary w-full py-5 text-[10px] font-bold uppercase tracking-[0.2em]">
            Talk To Us
          </button>
        </div>
      </div>
    </>
  );
};