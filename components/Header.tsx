import React, { useState, useEffect } from 'react';
import { Orb } from './Orb.tsx';

interface HeaderProps {
  onNavigate: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    { label: 'AGENTS', id: 'agents' },
    { label: 'CLOUD', id: 'cloud' },
    { label: 'ENTERPRISE', id: 'enterprise' },
    { label: 'OUR STORY', id: 'our-story' }
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
            <span className="text-2xl font-bold tracking-tighter serif text-black">veira.</span>
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
        <div className="flex flex-col space-y-8 text-center">
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
        </div>
        
        <div className="pt-8 border-t border-black/5 w-64 text-center">
          <button className="cta-primary w-full py-5 text-[10px] font-bold uppercase tracking-[0.2em]">
            Talk To Us
          </button>
        </div>

        <div className="absolute bottom-12 text-[8px] uppercase tracking-[0.5em] text-gray-300 font-bold">
          Veira Intelligence • Global Standards
        </div>
      </div>
    </>
  );
};