
import React from 'react';

const POSTS = [
  {
    id: 'hardware-pos-guide',
    title: 'How Modern POS Systems Help Hardware Shops in Kenya Stay in Business',
    excerpt: 'Managing hundreds of items, from nails to cement, requires precision. Learn how offline-capable POS systems transform hardware retail.',
    image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=1200&auto=format&fit=crop',
    date: 'Feb 24, 2025',
    readTime: '18 Min Read',
    path: '/blog/hardware-pos-guide'
  },
  {
    id: 'pos-machine-kenya',
    title: 'POS Machine Kenya: Types, Prices & Where to Buy in 2025',
    excerpt: 'Detailed guide on every hardware type available in Kenya. From handheld Android terminals to i5 desktop systems.',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1200&auto=format&fit=crop',
    date: 'Feb 19, 2025',
    readTime: '25 Min Read',
    path: '/blog/pos-machine-kenya'
  },
  {
    id: 'best-pos-system',
    title: 'Best POS System for Small Business in Kenya: 2025 Guide',
    excerpt: 'Find the right fit for your shop, cafe, or retail store. SimbaPOS, PawaPOS, POSmart, and Uzapoint compared side by side.',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1200&auto=format&fit=crop',
    date: 'Feb 18, 2025',
    readTime: '22 Min Read',
    path: '/blog/best-pos-system-small-business-kenya'
  },
  {
    id: 'pos-cost-guide',
    title: 'How Much Does a POS System Cost in Kenya? 2025 Price Guide',
    excerpt: 'A complete breakdown of hardware, software, M-Pesa integration, and e-TIMS compliance costs for retail shops and restaurants.',
    image: 'https://images.unsplash.com/photo-1556742049-02e53f8218bb?q=80&w=1200&auto=format&fit=crop',
    date: 'Feb 18, 2025',
    readTime: '19 Min Read',
    path: '/blog/pos-cost-guide'
  },
  {
    id: 'e-tims-explained',
    title: 'e-TIMS Kenya Explained: What Every Owner Must Know',
    excerpt: 'The KRA requirement is now mandatory for all businesses. Learn how to stay compliant without the daily headache.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop',
    date: 'Feb 12, 2025',
    readTime: '24 Min Read',
    path: '/blog/e-tims-explained'
  }
];

export const BlogHome: React.FC = () => {
  const navigateToPost = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">
      <header className="space-y-6 text-center max-w-3xl mx-auto">
        <span className="section-label mx-auto">Editorial Bureau</span>
        <h1 className="text-6xl md:text-8xl font-black serif text-black leading-tight tracking-tighter">
          Intelligence for <br/><span className="italic text-gray-400">High Growth.</span>
        </h1>
        <p className="text-xl text-gray-500 font-light leading-relaxed">
          Deep dives into Kenyan retail operations, tax compliance, and business engineering.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {POSTS.map((post) => (
          <button 
            key={post.id} 
            onClick={() => navigateToPost(post.path)}
            className="group text-left space-y-8 block"
          >
            <div className="aspect-[16/9] overflow-hidden glass border-black/5 relative">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-gray-200"></span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-3xl font-bold serif text-black leading-tight group-hover:italic transition-all">
                {post.title}
              </h2>
              <p className="text-gray-500 font-light leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
              <div className="pt-4 flex items-center gap-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-black underline underline-offset-8 decoration-black/10 group-hover:decoration-black transition-all">
                  Read Article
                </span>
                <span className="text-gray-200">→</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
