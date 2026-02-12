import React from 'react';

interface FooterProps {
  onNavigate: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onNavigate(id);
  };

  const socialLinks = [
    { name: 'WhatsApp', href: '#', icon: '📲' },
    { name: 'LinkedIn', href: '#', icon: 'in' },
    { name: 'X / Twitter', href: '#', icon: '𝕏' },
    { name: 'Instagram', href: '#', icon: '📸' }
  ];

  return (
    <footer className="bg-white border-t border-black/5 pt-24 pb-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-3xl font-bold serif text-black uppercase tracking-tighter">veira.</span>
              <p className="text-gray-400 text-sm font-light leading-relaxed max-w-xs">
                The leading retail intelligence platform and cloud POS system for high-growth businesses in Kenya.
              </p>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center text-xs text-gray-400 hover:border-[#2D9B9B] hover:text-[#2D9B9B] transition-all duration-300"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product Column */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-black">Solutions</h4>
            <ul className="space-y-4">
              {['POS', 'Cloud', 'Agents', 'Enterprise'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => handleLinkClick(e, item.toLowerCase())}
                    className="text-sm text-gray-500 hover:text-[#2D9B9B] transition-colors font-light"
                  >
                    {item} Management
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-black">Company</h4>
            <ul className="space-y-4">
              {[
                { label: 'Pricing', id: 'pricing' },
                { label: 'Our Story', id: 'our-story' },
                { label: 'Case Studies', id: 'case-studies' },
                { label: 'FAQ', id: 'faq' }
              ].map((link) => (
                <li key={link.id}>
                  <a 
                    href={`#${link.id}`}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className="text-sm text-gray-500 hover:text-[#2D9B9B] transition-colors font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-black">Headquarters</h4>
            <div className="space-y-6">
              <div className="space-y-1">
                <p className="text-sm text-black font-medium">Westlands Office</p>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  Muringa Road, Westlands<br />
                  Nairobi, Kenya
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-black font-medium">Contact</p>
                <p className="text-sm text-gray-500 font-light">hello@veira.co</p>
                <p className="text-sm text-gray-500 font-light">+254 700 000 000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            © {currentYear} Veira Intelligence Limited • All Rights Reserved
          </div>
          <div className="flex gap-8 text-[9px] font-bold uppercase tracking-widest text-gray-300">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-black transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};