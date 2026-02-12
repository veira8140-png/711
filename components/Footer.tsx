import React from 'react';

interface FooterProps {
  onNavigate: (id: string) => void;
}

const ToolLink: React.FC<{ icon: string; label: string; href?: string; onClick?: (e: React.MouseEvent) => void }> = ({ icon, label, href = "#", onClick }) => (
  <li>
    <a 
      href={href}
      onClick={onClick}
      className="flex items-center gap-3 p-2 -ml-2 rounded-lg hover:bg-black/[0.03] transition-all duration-300 group"
    >
      <span className="text-sm group-hover:scale-125 transition-transform duration-300 grayscale group-hover:grayscale-0">{icon}</span>
      <span className="text-[11px] text-gray-500 group-hover:text-[#2D9B9B] transition-colors font-light">
        {label}
      </span>
    </a>
  </li>
);

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    if (id.startsWith('#')) {
      e.preventDefault();
      onNavigate(id.replace('#', ''));
    }
  };

  const socialLinks = [
    { name: 'WhatsApp', href: '#', icon: '📲' },
    { name: 'LinkedIn', href: '#', icon: 'in' },
    { name: 'X / Twitter', href: '#', icon: '𝕏' },
    { name: 'Instagram', href: '#', icon: '📸' }
  ];

  return (
    <footer className="bg-white border-t border-black/5 pt-24 pb-12 px-6">
      <div className="container mx-auto space-y-20">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 space-y-8">
            <div className="space-y-4">
              <span className="text-3xl font-bold serif text-black uppercase tracking-tighter">veira.</span>
              <p className="text-gray-400 text-xs font-light leading-relaxed max-w-[200px]">
                The leading retail intelligence platform and cloud POS system for high-growth businesses in Kenya.
              </p>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 rounded-full border border-black/5 flex items-center justify-center text-[10px] text-gray-400 hover:border-[#2D9B9B] hover:text-[#2D9B9B] transition-all duration-300"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-8">
            <h4 className="text-[9px] font-bold uppercase tracking-[0.4em] text-black">Solutions</h4>
            <ul className="space-y-4">
              {[
                { label: 'POS Management', id: '#pos' },
                { label: 'Cloud Oversight', id: '#cloud' },
                { label: 'Inventory Sync', id: '#pos' },
                { label: 'Enterprise', id: '#enterprise' }
              ].map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={item.id}
                    onClick={(e) => handleLinkClick(e, item.id)}
                    className="text-xs text-gray-500 hover:text-[#2D9B9B] transition-colors font-light"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog Column */}
          <div className="space-y-8">
            <h4 className="text-[9px] font-bold uppercase tracking-[0.4em] text-black">Insights</h4>
            <ul className="space-y-4">
              {[
                { label: 'Retail Strategies', id: 'blog' },
                { label: 'eTIMS Guide', id: '#faq' },
                { label: 'Business Growth', id: 'blog' },
                { label: 'Market Trends', id: 'blog' }
              ].map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={item.id.startsWith('#') ? item.id : '#'}
                    onClick={(e) => handleLinkClick(e, item.id)}
                    className="text-xs text-gray-500 hover:text-[#2D9B9B] transition-colors font-light"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-8">
            <h4 className="text-[9px] font-bold uppercase tracking-[0.4em] text-black">Company</h4>
            <ul className="space-y-4">
              {[
                { label: 'Pricing Plan', id: '#pricing' },
                { label: 'Our Mission', id: '#our-story' },
                { label: 'Success Proof', id: '#testimonials' },
                { label: 'FAQ', id: '#faq' }
              ].map((link) => (
                <li key={link.id}>
                  <a 
                    href={link.id}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className="text-xs text-gray-500 hover:text-[#2D9B9B] transition-colors font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-8 lg:col-span-2">
            <h4 className="text-[9px] font-bold uppercase tracking-[0.4em] text-black">Contact</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-4">
              <div className="space-y-2">
                <p className="text-xs text-black font-medium">Westlands Office</p>
                <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                  Muringa Road<br />
                  Nairobi, Kenya
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-[11px] text-gray-500 font-light underline decoration-black/5 underline-offset-4">hello@veira.co</p>
                <p className="text-[11px] text-gray-500 font-light">+254 700 000 000</p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Tools Suite - Mega Section */}
        <div className="bg-black/[0.02] rounded-3xl p-8 md:p-12 border border-black/5">
          <div className="space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <h4 className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#2D9B9B]">AI Tool Suite</h4>
                <p className="text-xl font-bold serif italic text-black">Free tools to simplify your business branding, content, and more.</p>
              </div>
              <span className="text-[10px] text-gray-400 font-medium uppercase tracking-widest hidden md:block">Powered by Veira AI Agent Core</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 border-t border-black/5 pt-10">
              {/* Col 1: Operations & Compliance */}
              <div className="space-y-6">
                <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">Operations & Compliance</h5>
                <ul className="space-y-1">
                  <ToolLink icon="📊" label="Daily Sales Tracker" onClick={(e) => handleLinkClick(e, '#pos')} />
                  <ToolLink icon="🛡️" label="Staff Theft Risk Calculator" onClick={(e) => handleLinkClick(e, '#agents')} />
                  <ToolLink icon="✅" label="ETIMS Compliance Checker" onClick={(e) => handleLinkClick(e, '#faq')} />
                  <ToolLink icon="💰" label="Profit Margin Estimator" onClick={(e) => handleLinkClick(e, '#pos')} />
                  <ToolLink icon="📦" label="Stock Alert Calculator" onClick={(e) => handleLinkClick(e, '#pos')} />
                  <ToolLink icon="👥" label="Customer Visit Estimator" onClick={(e) => handleLinkClick(e, '#agents')} />
                  <ToolLink icon="🧾" label="Quick Tax Calculator" onClick={(e) => handleLinkClick(e, '#faq')} />
                </ul>
              </div>

              {/* Col 2: Branding & Marketing */}
              <div className="space-y-6">
                <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">Branding & Marketing</h5>
                <ul className="space-y-1">
                  <ToolLink icon="🎨" label="Free Logo Generator" onClick={(e) => handleLinkClick(e, '#studio')} />
                  <ToolLink icon="🏷️" label="Business Name Generator" onClick={(e) => handleLinkClick(e, '#studio')} />
                  <ToolLink icon="✍️" label="Social Media Content Generator" onClick={(e) => handleLinkClick(e, '#studio')} />
                  <ToolLink icon="💳" label="Business Card Generator" onClick={(e) => handleLinkClick(e, '#studio')} />
                  <ToolLink icon="📢" label="Promo Poster / Flyer Generator" onClick={(e) => handleLinkClick(e, '#studio')} />
                  <ToolLink icon="🔗" label="QR Code Generator" onClick={(e) => handleLinkClick(e, '#studio')} />
                </ul>
              </div>

              {/* Col 3: Customer Engagement & Sales */}
              <div className="space-y-6">
                <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">Engagement & Sales</h5>
                <ul className="space-y-1">
                  <ToolLink icon="📝" label="Customer Feedback Form Generator" onClick={(e) => handleLinkClick(e, '#agents')} />
                  <ToolLink icon="🎁" label="Loyalty Program Calculator" onClick={(e) => handleLinkClick(e, '#agents')} />
                  <ToolLink icon="🧾" label="Simple Invoice Generator" onClick={(e) => handleLinkClick(e, '#pos')} />
                  <ToolLink icon="💸" label="Discount & Promotion Planner" onClick={(e) => handleLinkClick(e, '#agents')} />
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-black/5 text-center">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">
                All tools powered by <span className="text-black">Veira Intelligence</span> — try them for free and simplify your business today!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            © {currentYear} Veira Intelligence Limited
          </div>
          <div className="flex gap-8 text-[9px] font-bold uppercase tracking-widest text-gray-300">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-black transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};