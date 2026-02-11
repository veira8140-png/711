
import React from 'react';
import { Orb } from './Orb.tsx';

interface HeaderProps {
  onNavigate: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onNavigate(id);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/95 backdrop-blur-md border-b border-black/5 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <a 
          href="/" 
          className="flex items-center space-x-3 cursor-pointer" 
          onClick={(e) => handleLinkClick(e, 'hero')}
        >
          <Orb size="sm" className="animate-none" />
          <span className="text-2xl font-bold tracking-tighter serif text-black">veira</span>
        </a>
        
        <div className="hidden lg:flex items-center space-x-8 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
          <a 
            href="/pos" 
            onClick={(e) => handleLinkClick(e, 'pos')} 
            className="hover:text-black transition-colors"
          >
            POS
          </a>
          <a 
            href="/case-study" 
            onClick={(e) => handleLinkClick(e, 'case-study')} 
            className="hover:text-black transition-colors"
          >
            Case Study
          </a>
          <a 
            href="/agents" 
            onClick={(e) => handleLinkClick(e, 'agents')} 
            className="hover:text-black transition-colors"
          >
            Agents
          </a>
          <a 
            href="/cloud" 
            onClick={(e) => handleLinkClick(e, 'cloud')} 
            className="hover:text-black transition-colors"
          >
            Cloud
          </a>
          <a 
            href="/enterprise" 
            onClick={(e) => handleLinkClick(e, 'enterprise')} 
            className="hover:text-black transition-colors"
          >
            Enterprise
          </a>
          <a 
            href="/our-story" 
            onClick={(e) => handleLinkClick(e, 'our-story')} 
            className="hover:text-black transition-colors"
          >
            Our Story
          </a>
          <button className="cta-button ml-4 px-6 py-2.5 rounded-full font-bold uppercase tracking-widest text-[10px] shadow-lg shadow-[#2D9B9B]/20">
            Talk To Us
          </button>
        </div>

        <button className="lg:hidden text-black p-2" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};
