import React, { useState, useEffect } from 'react';
import { runVeiraTool } from '../services/gemini.ts';

interface FooterProps {
  onNavigate: (id: string) => void;
}

interface ToolDetail {
  name: string;
  icon: string;
  seoTitle: string;
  metaDescription: string;
  placeholder: string;
  h1: string;
  faqs: { q: string; a: string }[];
}

const TOOL_DETAILS: Record<string, ToolDetail> = {
  'Daily Sales Tracker': {
    name: 'Daily Sales Tracker',
    icon: '📊',
    seoTitle: 'Daily Sales Tracker – Free Tool for Retailers in Kenya',
    h1: 'Track Your Daily Sales Instantly',
    metaDescription: 'Free Daily Sales Tracker – Quickly track daily sales, calculate profits, and prevent lost revenue in your retail shop.',
    placeholder: "e.g., 'Today I sold 45 items, total cash 22,500 KES, M-PESA 18,000 KES. Cost of goods was 30,000 KES.'",
    faqs: [
      { q: "How do I calculate daily sales?", a: "Sum all cash and digital payments received. Veira's tracker helps you reconcile these against your inventory movement automatically." },
      { q: "Can I use this for M-PESA reconciliation?", a: "Yes, it specifically identifies gaps between your M-PESA statement and recorded shop sales." }
    ]
  },
  'Staff Theft Risk Calculator': {
    name: 'Staff Theft Risk Calculator',
    icon: '🛡️',
    seoTitle: 'Staff Theft Risk Calculator – Protect Your Retail Profits',
    h1: 'Detect Weak Spots Before Money Disappears',
    metaDescription: 'Free Staff Theft Risk Calculator – Identify potential losses from staff mismanagement before money disappears.',
    placeholder: "e.g., 'I have 3 staff members, we do manual stock taking once a week, and I am away from the shop 4 days a week.'",
    faqs: [
      { q: "How to prevent employee theft in retail?", a: "Implement automated POS tracking, perform blind stock counts, and use AI agents like Tiri to flag anomalies." },
      { q: "What are common signs of retail theft?", a: "Frequent small stock-outs, mismatched cash balances, and high volumes of 'voided' transactions." }
    ]
  },
  'ETIMS Compliance Checker': {
    name: 'ETIMS Compliance Checker',
    icon: '✅',
    seoTitle: 'ETIMS Compliance Checker – Stay Audit-Ready in Kenya',
    h1: 'Ensure Your Shop Meets KRA Regulations',
    metaDescription: 'Free ETIMS Compliance Checker – Check if your business meets KRA/ETIMS standards and avoid heavy fines.',
    placeholder: "e.g., 'I sell hardware supplies in Nairobi, I currently issue manual receipts, and my annual turnover is 4M KES.'",
    faqs: [
      { q: "Is ETIMS mandatory for small businesses?", a: "Yes, KRA requires all VAT-registered businesses and those on turnover tax to integrate with eTIMS." },
      { q: "What happens if I'm not eTIMS compliant?", a: "Non-compliance can lead to heavy penalties and inability to claim input VAT for your business." }
    ]
  },
  'Profit Margin Estimator': {
    name: 'Profit Margin Estimator',
    icon: '💰',
    seoTitle: 'Profit Margin Estimator – Know Your True Profits',
    h1: 'Calculate Profits After Expenses Instantly',
    metaDescription: 'Free Profit Margin Calculator – Know exactly what you earn after expenses for every sale in the Kenyan market.',
    placeholder: "e.g., 'I buy electronic accessories at 800 KES. My rent is 20k and I want to clear 15% net profit.'",
    faqs: [
      { q: "How to calculate profit margins for retail?", a: "Subtract the Cost of Goods Sold (COGS) from the selling price, then divide by the selling price to get the percentage." },
      { q: "Should I include M-PESA fees in my margin?", a: "Yes, all transaction costs should be accounted for to ensure your net profit is accurate." }
    ]
  },
  'Stock Alert Calculator': {
    name: 'Stock Alert Calculator',
    icon: '📦',
    seoTitle: 'Stock Alert Calculator – Prevent Inventory Issues',
    h1: 'Never Run Out of Stock',
    metaDescription: 'Free Stock Alert Calculator – Track inventory and prevent stockouts or hidden losses in your store.',
    placeholder: "e.g., 'I sell milk. I sell 50 packets a day. It takes 2 days for the supplier to deliver.'",
    faqs: [
      { q: "How to manage retail inventory efficiently?", a: "Set reorder points for every item and use automated alerts to notify you when stock is low." },
      { q: "What is safety stock?", a: "Extra inventory kept as a buffer against supply chain delays or sudden spikes in customer demand." }
    ]
  },
  'Customer Visit Estimator': {
    name: 'Customer Visit Estimator',
    icon: '👥',
    seoTitle: 'Customer Visit Estimator – Predict Revenue from Traffic',
    h1: 'Estimate Monthly Customer Visits',
    metaDescription: 'Free Customer Visit Estimator – Understand foot traffic and plan smarter for your retail business in Nairobi.',
    placeholder: "e.g., 'I run a chemist in a busy estate. Most people come in the evening between 6pm and 9pm.'",
    faqs: [
      { q: "How to estimate revenue from foot traffic?", a: "Multiply total daily visitors by your conversion rate and average transaction value." },
      { q: "Why track footfall?", a: "It helps you optimize staff shifts and marketing efforts for peak hours." }
    ]
  },
  'Business Growth Analyzer': {
    name: 'Business Growth Potential Analyzer',
    icon: '🚀',
    seoTitle: 'Business Growth Calculator – Plan Your Next Move',
    h1: 'Analyze Your Shop\'s Growth Potential',
    metaDescription: 'Free Business Growth Analyzer – Get insights on scaling your shop effectively and opening new branches.',
    placeholder: "e.g., 'I have one profitable boutique in Nairobi. My monthly net profit is 150k KES consistently.'",
    faqs: [
      { q: "When is the right time to open a second branch?", a: "When your first location has a documented system, stable cash flow, and a trained team." },
      { q: "How does Veira help with scaling?", a: "Veira Cloud allows you to manage multiple locations from one dashboard with total visibility." }
    ]
  },
  'Staff Scheduling Helper': {
    name: 'Staff Scheduling Helper',
    icon: '📅',
    seoTitle: 'Staff Scheduling Helper – Simplify Shift Planning',
    h1: 'Generate Weekly Staff Schedules Instantly',
    metaDescription: 'Free Staff Scheduling Tool – Save time and reduce errors planning shifts for your retail team.',
    placeholder: "e.g., 'I have 4 staff members. I need 2 on the floor at all times. Shop opens 8am to 9pm.'",
    faqs: [
      { q: "What are best practices for retail staff scheduling?", a: "Rotate difficult shifts fairly, use peak-hour traffic data to schedule more staff, and provide schedules 2 weeks in advance." },
      { q: "How to reduce absenteeism?", a: "Clear communication and flexible scheduling using tools that staff can access on their phones." }
    ]
  },
  'Quick Tax Calculator': {
    name: 'Quick Tax Calculator',
    icon: '🧾',
    seoTitle: 'Quick Tax Calculator – Estimate Taxes Easily',
    h1: 'Calculate Your Shop\'s Tax Obligations',
    metaDescription: 'Free Tax Calculator – Quickly estimate KRA taxes including Turnover Tax and VAT to avoid surprises later.',
    placeholder: "e.g., 'My gross sales for July were 450,000 KES. I am on Turnover Tax.'",
    faqs: [
      { q: "How to calculate taxes for your retail business?", a: "Identify your tax category (TOT or VAT), sum your gross sales, and apply the relevant percentage." },
      { q: "Does this file my taxes automatically?", a: "No, this is an estimator. Use it to set aside tax money so you're ready when filing is due." }
    ]
  },
  'Expense Tracker': {
    name: 'Expense Tracker',
    icon: '💸',
    seoTitle: 'Expense Tracker – Track and Save for Small Business',
    h1: 'Know Where Your Money Goes',
    metaDescription: 'Free Expense Tracker – Track expenses and identify areas to save money in your retail shop or startup.',
    placeholder: "e.g., 'Rent: 30k, Electricity: 5k, Supplier A: 120k, Staff Lunch: 2k.'",
    faqs: [
      { q: "How to track expenses effectively?", a: "Record every shilling spent, no matter how small. Categorize expenses to find hidden leaks." },
      { q: "What is a burn rate?", a: "The total amount of cash your business spends each month on overhead before making a profit." }
    ]
  },
  'Free Logo Generator': {
    name: 'Free Logo Generator',
    icon: '🎨',
    seoTitle: 'Free Logo Generator – Build Your Brand Fast',
    h1: 'Create a Professional Logo in Minutes',
    metaDescription: 'Free Logo Generator – Make a clean, professional brand logo for your Kenyan business instantly using AI.',
    placeholder: "e.g., 'A logo for a high-end boutique called Zuri Styles. Minimalist, using gold and black colors.'",
    faqs: [
      { q: "How to design a logo for your business?", a: "Keep it simple, ensure high contrast, and choose colors that reflect your industry vibe." },
      { q: "Can I use this for my shop sign?", a: "Yes, the AI generates high-quality SVG code that can be scaled for large printing." }
    ]
  },
  'Business Name Generator': {
    name: 'Business Name Generator',
    icon: '🏷️',
    seoTitle: 'Business Name Generator – Find a Strong Name',
    h1: 'Generate Memorable Business Names',
    metaDescription: 'Free Business Name Generator – Quickly find a unique and memorable name for your business in the Kenyan market.',
    placeholder: "e.g., 'Names for a new delivery business in Nairobi focused on speed and reliability.'",
    faqs: [
      { q: "How to choose a great business name?", a: "Ensure it's easy to spell, memorable, and not too similar to competitors." },
      { q: "How to check name availability?", a: "Once you have a name, perform a search on the BRS portal in Kenya." }
    ]
  },
  'Social Media Content Generator': {
    name: 'Social Media Content Generator',
    icon: '✍️',
    seoTitle: 'Social Media Content Generator – Post Instantly',
    h1: 'Generate Ready-to-Use Posts for Your Business',
    metaDescription: 'Free AI Social Media Content Generator – Create engaging Instagram, Facebook, and WhatsApp posts instantly.',
    placeholder: "e.g., 'Write a post for a weekend clearance sale on shoes. Buy 1 get 1 free.'",
    faqs: [
      { q: "How to post consistently on social media?", a: "Use AI to batch-create content and schedule posts in advance to save time." },
      { q: "What makes a high-engagement post?", a: "Strong visuals, a clear call-to-action (CTA), and content that solves a customer problem." }
    ]
  },
  'Business Card Generator': {
    name: 'Business Card Generator',
    icon: '💳',
    seoTitle: 'Business Card Generator – Print Ready Designs',
    h1: 'Create Professional Business Cards Fast',
    metaDescription: 'Free Business Card Generator – Design and download printable cards instantly for your retail business.',
    placeholder: "e.g., 'Modern business card for Jane Doe, CEO of Radiant Beauty. Include phone and Instagram.'",
    faqs: [
      { q: "How to design cards without a designer?", a: "Our AI generates balanced, modern layouts that include all your essential contact info." },
      { q: "What information should I include?", a: "Name, business name, phone number, M-PESA Till, and social media handle." }
    ]
  },
  'Promo Poster and Flyer Generator': {
    name: 'Promo Poster and Flyer Generator',
    icon: '📢',
    seoTitle: 'Promo Poster & Flyer Generator – Design Quickly',
    h1: 'Launch Promotions Without a Designer',
    metaDescription: 'Free Poster & Flyer Generator – Make marketing materials in minutes for shop windows and WhatsApp status.',
    placeholder: "e.g., 'A poster for a Back to School sale. Focus on stationery and uniforms. 20% off.'",
    faqs: [
      { q: "How to create marketing posters fast?", a: "Use AI to generate the layout, then refine the text and share directly via social channels." },
      { q: "What's the best flyer size?", a: "A5 is standard for physical flyers, while 1080x1920 is best for phone screens." }
    ]
  },
  'QR Code Generator': {
    name: 'QR Code Generator',
    icon: '🔗',
    seoTitle: 'QR Code Generator – Connect Customers Instantly',
    h1: 'Generate Payment & Info QR Codes',
    metaDescription: 'Free QR Code Generator – Share menus, WhatsApp links, or M-PESA details instantly with your customers.',
    placeholder: "e.g., 'Generate a QR code that links to my WhatsApp business catalog at wa.me/254...'",
    faqs: [
      { q: "How to use QR codes in your shop?", a: "Place them at the till for payments, on tables for menus, or on receipts for feedback." },
      { q: "Are these QR codes free?", a: "Yes, static QR codes generated by Veira are completely free and never expire." }
    ]
  },
  'Customer Feedback Form Generator': {
    name: 'Customer Feedback Form Generator',
    icon: '📝',
    seoTitle: 'Customer Feedback Form Generator – Improve Service',
    h1: 'Collect Reviews & Insights',
    metaDescription: 'Free Feedback Form Generator – Understand your customers and improve service quality in your shop.',
    placeholder: "e.g., 'I want to know if my customers are happy with our home delivery service.'",
    faqs: [
      { q: "How to collect and act on feedback?", a: "Ask clear questions, provide a small incentive for responding, and review results weekly." },
      { q: "Why is feedback important?", a: "It identifies service gaps before they drive customers away to competitors." }
    ]
  },
  'Loyalty Program Calculator': {
    name: 'Loyalty Program Calculator',
    icon: '🎁',
    seoTitle: 'Loyalty Program Calculator – Boost Repeat Sales',
    h1: 'Design Reward Programs That Work',
    metaDescription: 'Free Loyalty Program Calculator – Increase repeat visits without hurting profits in the Kenyan retail market.',
    placeholder: "e.g., 'I want to give a reward after 10 visits. My average basket size is 1,200 KES.'",
    faqs: [
      { q: "How to design loyalty programs for small shops?", a: "Choose simple rewards like a free item after X purchases or a small discount for loyal members." },
      { q: "How does Veira automate loyalty?", a: "Veira's full POS tracks customer points automatically based on their phone number." }
    ]
  },
  'Simple Invoice Generator': {
    name: 'Simple Invoice Generator',
    icon: '🧾',
    seoTitle: 'Simple Invoice Generator – Fast & Professional',
    h1: 'Create Clean Invoices Instantly',
    metaDescription: 'Free Invoice Generator – Make professional, audit-ready invoices for your customers in seconds.',
    placeholder: "e.g., 'Invoice for 10 office chairs sold to ABC Limited. Price per unit 5,500 KES.'",
    faqs: [
      { q: "How to generate invoices quickly?", a: "Use a template that calculates totals automatically and includes your payment details clearly." },
      { q: "Is this a tax invoice?", a: "For KRA compliance, you should use the full Veira POS which integrates with eTIMS." }
    ]
  },
  'Discount and Promotion Planner': {
    name: 'Discount and Promotion Planner',
    icon: '💸',
    seoTitle: 'Discount & Promotion Planner – Plan Sales Strategically',
    h1: 'Run Offers That Drive Revenue',
    metaDescription: 'Free Discount & Promotion Planner – Plan promotions and flash sales without destroying your profit margins.',
    placeholder: "e.g., 'I have excess stock of winter jackets. I want to run a 3-day flash sale to clear 50 units.'",
    faqs: [
      { q: "How to plan sales & promotions?", a: "Calculate the break-even point for the discount and set a strict time limit to create urgency." },
      { q: "What is the best way to announce a sale?", a: "Use WhatsApp status and personal messages to your existing customer database." }
    ]
  }
};

const FooterLink: React.FC<{ label: string; href?: string; onClick?: (e: React.MouseEvent) => void; isNew?: boolean }> = ({ label, href = "#", onClick, isNew }) => (
  <li>
    <a 
      href={href} 
      onClick={onClick}
      className="text-[13px] text-gray-500 hover:text-[#2D9B9B] transition-colors duration-200 flex items-center gap-2 group whitespace-nowrap"
    >
      {label}
      {isNew && (
        <span className="text-[9px] bg-[#2D9B9B]/10 text-[#2D9B9B] px-1.5 py-0.5 font-bold rounded-sm uppercase tracking-tighter">New</span>
      )}
    </a>
  </li>
);

const ToolItem: React.FC<{ icon: string; label: string; desc: string; onClick: () => void }> = ({ icon, label, desc, onClick }) => (
  <li>
    <button 
      onClick={(e) => { e.preventDefault(); onClick(); }}
      className="w-full text-left group flex items-start gap-3 p-2 -ml-2 rounded-xl hover:bg-white hover:shadow-xl hover:shadow-[#2D9B9B]/5 transition-all duration-300"
    >
      <span className="text-xl shrink-0 grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110">{icon}</span>
      <div className="space-y-0.5">
        <span className="block text-[13px] font-semibold text-gray-700 group-hover:text-[#2D9B9B] transition-colors">{label}</span>
        <span className="block text-[11px] text-gray-400 font-light leading-tight group-hover:text-gray-500">{desc}</span>
      </div>
    </button>
  </li>
);

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();
  const [activeTool, setActiveTool] = useState<ToolDetail | null>(null);
  const [toolInput, setToolInput] = useState('');
  const [toolResult, setToolResult] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isKeyError, setIsKeyError] = useState(false);

  // Dynamic SEO Updates
  useEffect(() => {
    if (activeTool) {
      document.title = activeTool.seoTitle;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', activeTool.metaDescription);
    } else {
      document.title = "The Best POS System in Kenya | Easy, Fast & Tax Ready | Veira";
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', "Easy shop management in Kenya. Track sales, use M-PESA, and stay tax ready with Veira's simple cloud POS.");
    }
  }, [activeTool]);

  const handleNav = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onNavigate(id);
  };

  const handleLaunchTool = async () => {
    if (!activeTool || !toolInput.trim()) return;
    setIsGenerating(true);
    setToolResult(null);
    setError(null);
    setIsKeyError(false);
    try {
      const result = await runVeiraTool(activeTool.name, toolInput);
      setToolResult(result);
    } catch (err: any) {
      console.error(err);
      if (err.message === "API_KEY_MISSING") {
        setError("AI access not configured. You need to connect an API key to use these tools.");
        setIsKeyError(true);
      } else {
        setError(err.message || "An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const handleConnectAI = async () => {
    // @ts-ignore
    if (window.aistudio && typeof window.aistudio.openSelectKey === 'function') {
      // @ts-ignore
      await window.aistudio.openSelectKey();
      setError(null);
      setIsKeyError(false);
      // Wait a tiny bit and try again or just let user click again
    }
  };

  const resetTool = () => {
    setActiveTool(null);
    setToolInput('');
    setToolResult(null);
    setError(null);
    setIsGenerating(false);
    setIsKeyError(false);
  };

  const isSvg = (str: string) => str.trim().startsWith('<svg') || str.includes('</svg>');

  const handleCopy = () => {
    if (!toolResult) return;
    navigator.clipboard.writeText(toolResult);
    setCopyFeedback(true);
    setTimeout(() => setCopyFeedback(false), 2000);
  };

  return (
    <footer className="bg-white border-t border-black/5 pt-32 pb-16 px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-16 gap-x-8 mb-32">
          
          <div className="col-span-2 md:col-span-1 space-y-12">
            <div className="space-y-6">
              <a href="#" onClick={(e) => handleNav(e, 'hero')} className="text-3xl font-black serif tracking-tighter uppercase text-black">veira.</a>
              <p className="text-[14px] text-gray-400 font-light leading-relaxed max-w-[240px]">
                The leading retail intelligence platform and cloud POS system for high-growth businesses in Kenya.
              </p>
            </div>
            <div className="space-y-6">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black">Solutions</h4>
              <ul className="space-y-4">
                <FooterLink label="Cloud POS System" onClick={(e) => handleNav(e, 'pos')} />
                <FooterLink label="Inventory Management" onClick={(e) => handleNav(e, 'pos')} />
                <FooterLink label="M-PESA Integration" onClick={(e) => handleNav(e, 'pos')} isNew />
                <FooterLink label="AI Agent Workforce" onClick={(e) => handleNav(e, 'agents')} />
                <FooterLink label="Enterprise Oversight" onClick={(e) => handleNav(e, 'enterprise')} />
                <FooterLink label="eTIMS Compliance" onClick={(e) => handleNav(e, 'faq')} />
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black">🏢 Operations</h4>
              <p className="text-[10px] text-gray-400 font-medium">Control. Protect. Remove Guesswork.</p>
            </div>
            <ul className="space-y-3">
              <ToolItem icon="📊" label="Sales Tracker" desc="See what you made today." onClick={() => setActiveTool(TOOL_DETAILS['Daily Sales Tracker'])} />
              <ToolItem icon="🛡️" label="Theft Risk Calc" desc="Detect weak spots early." onClick={() => setActiveTool(TOOL_DETAILS['Staff Theft Risk Calculator'])} />
              <ToolItem icon="✅" label="eTIMS Checker" desc="Stay audit-ready." onClick={() => setActiveTool(TOOL_DETAILS['ETIMS Compliance Checker'])} />
              <ToolItem icon="💰" label="Margin Estimator" desc="Know what you keep." onClick={() => setActiveTool(TOOL_DETAILS['Profit Margin Estimator'])} />
              <ToolItem icon="📦" label="Stock Alerts" desc="Prevent silent shrinkage." onClick={() => setActiveTool(TOOL_DETAILS['Stock Alert Calculator'])} />
              <ToolItem icon="👥" label="Visit Estimator" desc="Plan smarter traffic." onClick={() => setActiveTool(TOOL_DETAILS['Customer Visit Estimator'])} />
              <ToolItem icon="🚀" label="Growth Analyzer" desc="Plan your expansion." onClick={() => setActiveTool(TOOL_DETAILS['Business Growth Analyzer'])} />
              <ToolItem icon="📅" label="Staff Planner" desc="Simplify shop shifts." onClick={() => setActiveTool(TOOL_DETAILS['Staff Scheduling Helper'])} />
              <ToolItem icon="🧾" label="Tax Calculator" desc="No surprises later." onClick={() => setActiveTool(TOOL_DETAILS['Quick Tax Calculator'])} />
              <ToolItem icon="💸" label="Expense Tracker" desc="Know where money goes." onClick={() => setActiveTool(TOOL_DETAILS['Expense Tracker'])} />
            </ul>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black">🎨 Branding</h4>
              <p className="text-[10px] text-gray-400 font-medium">Look Pro. Attract. Convert.</p>
            </div>
            <ul className="space-y-3">
              <ToolItem icon="🎨" label="Logo Generator" desc="Brand identity in minutes." onClick={() => setActiveTool(TOOL_DETAILS['Free Logo Generator'])} />
              <ToolItem icon="🏷️" label="Name Generator" desc="Memorable business names." onClick={() => setActiveTool(TOOL_DETAILS['Business Name Generator'])} />
              <ToolItem icon="✍️" label="Content Gen" desc="Persuasive social posts." onClick={() => setActiveTool(TOOL_DETAILS['Social Media Content Generator'])} />
              <ToolItem icon="💳" label="Card Generator" desc="Ready-to-print cards." onClick={() => setActiveTool(TOOL_DETAILS['Business Card Generator'])} />
              <ToolItem icon="📢" label="Poster Creator" desc="No designer needed." onClick={() => setActiveTool(TOOL_DETAILS['Promo Poster and Flyer Generator'])} />
              <ToolItem icon="🔗" label="QR Generator" desc="Connect instantly." onClick={() => setActiveTool(TOOL_DETAILS['QR Code Generator'])} />
            </ul>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black">💬 Engagement</h4>
              <p className="text-[10px] text-gray-400 font-medium">Turn visitors into repeat buyers.</p>
            </div>
            <ul className="space-y-3">
              <ToolItem icon="📝" label="Feedback Forms" desc="Collect insights easily." onClick={() => setActiveTool(TOOL_DETAILS['Customer Feedback Form Generator'])} />
              <ToolItem icon="🎁" label="Loyalty Calc" desc="Rewards that protect profit." onClick={() => setActiveTool(TOOL_DETAILS['Loyalty Program Calculator'])} />
              <ToolItem icon="🧾" label="Invoice Gen" desc="Shareable invoices fast." onClick={() => setActiveTool(TOOL_DETAILS['Simple Invoice Generator'])} />
              <ToolItem icon="💸" label="Promo Planner" desc="Run offers that work." onClick={() => setActiveTool(TOOL_DETAILS['Discount and Promotion Planner'])} />
            </ul>
          </div>

          <div className="space-y-12">
            <div className="space-y-6">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-black">Company</h4>
              <ul className="space-y-4">
                <FooterLink label="Our Story" onClick={(e) => handleNav(e, 'our-story')} />
                <FooterLink label="Success Proof" onClick={(e) => handleNav(e, 'testimonials')} />
                <FooterLink label="Pricing Plans" onClick={(e) => handleNav(e, 'pricing')} />
                <FooterLink label="Help Center (FAQ)" onClick={(e) => handleNav(e, 'faq')} />
                <FooterLink label="Contact Us" href="mailto:hello@veira.co" />
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-16 pb-12 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-black">All tools powered by Veira AI Intelligence.</p>
            <p className="text-[13px] text-gray-400 font-light italic">Zero setup. No email required. Instant business clarity.</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?u=veira${i}`} alt="User" className="w-full h-full object-cover grayscale" />
                </div>
              ))}
            </div>
            <p className="text-[11px] text-gray-500 font-medium">Trusted by 1,200+ shop owners in Kenya</p>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[11px] text-gray-400 font-medium">© {currentYear} Veira Intelligence Limited • Westlands, Nairobi</p>
          <div className="flex items-center gap-6">
            {['𝕏', 'LinkedIn', 'Instagram', 'WhatsApp'].map(social => (
              <a key={social} href="#" className="text-[13px] text-gray-400 hover:text-[#2D9B9B] transition-colors">{social}</a>
            ))}
          </div>
        </div>
      </div>

      {activeTool && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={resetTool}></div>
          <div className="bg-white rounded-[2.5rem] p-8 md:p-14 max-w-3xl w-full relative z-[210] shadow-2xl animate-in zoom-in-95 fade-in duration-300 max-h-[90vh] overflow-y-auto border border-white/20">
            <button 
              onClick={resetTool}
              className="absolute top-8 right-8 w-10 h-10 flex items-center justify-center rounded-full bg-black/5 text-gray-400 hover:text-black hover:bg-black/10 transition-all"
            >
              ✕
            </button>
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-4xl shadow-sm">
                    {activeTool.icon}
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#2D9B9B]">Veira Power-up Suite</span>
                    <h1 className="text-3xl md:text-4xl font-black serif italic text-black leading-tight">
                      {activeTool.h1}
                    </h1>
                  </div>
                </div>
                <div className="p-6 bg-[#2D9B9B]/5 border-l-4 border-[#2D9B9B] rounded-r-xl">
                  <p className="text-gray-700 font-light text-lg italic leading-relaxed">
                    {activeTool.metaDescription}
                  </p>
                </div>
              </div>

              {error && (
                <div className="p-6 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-sm font-medium animate-in fade-in zoom-in-95">
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">⚠️</span>
                    <div className="space-y-4">
                      <p>{error}</p>
                      <div className="flex flex-wrap gap-4">
                        {isKeyError ? (
                          <button 
                            onClick={handleConnectAI}
                            className="bg-red-600 text-white px-6 py-2 rounded-xl text-[10px] uppercase tracking-widest font-bold shadow-lg shadow-red-500/20 hover:bg-red-700 transition-all"
                          >
                            Connect AI Account
                          </button>
                        ) : (
                          <button 
                            onClick={() => setError(null)}
                            className="text-[10px] uppercase tracking-widest font-bold underline"
                          >
                            Dismiss and Try Again
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {!toolResult ? (
                <div className="space-y-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Step 1: Input your business details</label>
                    <textarea 
                      autoFocus
                      placeholder={activeTool.placeholder}
                      className="w-full bg-gray-50 border-2 border-black/5 rounded-2xl px-6 py-6 focus:outline-none focus:border-[#2D9B9B] focus:bg-white transition-all font-light text-black min-h-[180px] resize-none text-xl leading-relaxed shadow-inner"
                      value={toolInput}
                      onChange={(e) => setToolInput(e.target.value)}
                    />
                  </div>
                  <button 
                    disabled={isGenerating || !toolInput.trim()}
                    onClick={handleLaunchTool}
                    className="cta-primary w-full py-8 text-[12px] font-bold uppercase tracking-[0.4em] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-4 rounded-2xl shadow-xl shadow-[#2D9B9B]/20"
                  >
                    {isGenerating ? (
                      <>
                        <div className="w-2.5 h-2.5 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                        <div className="w-2.5 h-2.5 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                        <div className="w-2.5 h-2.5 bg-white rounded-full animate-bounce"></div>
                      </>
                    ) : (
                      `Generate Your ${activeTool.name} Now`
                    )}
                  </button>
                </div>
              ) : (
                <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
                  <div className="relative group/result">
                    <div className="absolute -inset-2 bg-gradient-to-r from-[#2D9B9B]/20 to-purple-500/10 rounded-3xl blur opacity-30 group-hover/result:opacity-50 transition-opacity"></div>
                    <div className="relative p-10 bg-white rounded-3xl border border-black/5 shadow-sm overflow-hidden">
                      {isSvg(toolResult) ? (
                        <div className="flex flex-col items-center gap-8 py-4">
                          <div className="w-full max-w-[360px] aspect-square flex items-center justify-center bg-white p-8 rounded-3xl shadow-2xl overflow-hidden ring-1 ring-black/5 border-8 border-gray-50" 
                               dangerouslySetInnerHTML={{ __html: toolResult }} />
                          <div className="text-center space-y-2">
                            <p className="text-[12px] text-black font-bold uppercase tracking-widest">High-Fidelity Branding Created</p>
                            <p className="text-[11px] text-gray-400 italic">This vector asset is ready for your storefront and social media.</p>
                          </div>
                        </div>
                      ) : (
                        <div className="prose prose-lg max-w-none text-gray-800 font-light whitespace-pre-wrap leading-relaxed italic selection:bg-[#2D9B9B] selection:text-white">
                          {toolResult}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <button 
                      onClick={() => { setToolResult(null); setToolInput(''); }}
                      className="py-6 bg-black/5 rounded-2xl text-[11px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all border border-transparent shadow-sm"
                    >
                      Start New Analysis
                    </button>
                    <button 
                      onClick={handleCopy}
                      className="cta-primary py-6 text-[11px] font-bold uppercase tracking-widest rounded-2xl flex items-center justify-center gap-2 shadow-lg"
                    >
                      {copyFeedback ? '✓ Copied!' : isSvg(toolResult) ? 'Copy SVG Code' : 'Copy Result'}
                    </button>
                  </div>
                </div>
              )}

              <div className="pt-12 border-t border-black/5 space-y-8">
                <div className="space-y-2">
                  <h4 className="text-[12px] font-bold uppercase tracking-[0.3em] text-black">Common Questions</h4>
                  <p className="text-[10px] text-gray-400 font-medium">Learn more about using {activeTool.name} for your business.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {activeTool.faqs.map((faq, idx) => (
                    <div key={idx} className="space-y-3 p-6 bg-gray-50/50 rounded-2xl border border-black/5">
                      <h5 className="font-bold text-sm text-black italic">Q: {faq.q}</h5>
                      <p className="text-sm text-gray-500 font-light leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-black/5 text-center space-y-4">
                <p className="text-[11px] text-gray-400 font-medium uppercase tracking-[0.4em]">Veira Global Intelligence Suite</p>
                <div className="flex justify-center gap-8 opacity-40">
                  <span className="text-[9px] font-bold uppercase tracking-widest">Nairobi</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest">Westlands</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest">Cloud POS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};