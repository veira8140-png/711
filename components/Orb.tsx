import React, { memo } from 'react';

interface OrbProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  className?: string;
}

export const Orb: React.FC<OrbProps> = memo(({ size = 'md', className = '' }) => {
  const sizeMap = {
    xs: 'w-6 h-6',
    sm: 'w-12 h-12',
    md: 'w-24 h-24',
    lg: 'w-48 h-48',
    xl: 'w-64 h-64',
    hero: 'w-72 h-72 md:w-[36rem] md:h-[36rem]'
  };

  return (
    <div className={`relative flex items-center justify-center pointer-events-none transform-gpu ${className}`}>
      {/* Volumetric Atmosphere */}
      <div className={`absolute ${sizeMap[size]} rounded-full blur-[80px] md:blur-[120px] opacity-20 bg-gradient-to-tr from-[#7C3AED] to-[#C084FC] mix-blend-screen animate-pulse`}></div>
      
      {/* Main Organic Volume */}
      <div className={`${sizeMap[size]} animate-morph bg-gradient-to-br from-[#1a0b2e] via-[#4c1d95] to-[#0f0720] relative overflow-hidden backdrop-blur-3xl border border-white/20 shadow-[0_0_80px_rgba(124,58,237,0.3)] will-change-transform`}
           style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}>
        
        {/* Cinematic Lighting Layers */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.4),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(124,58,237,0.2),transparent_60%)]"></div>
        
        {/* Subsurface Light */}
        <div className="absolute top-[10%] left-[20%] w-[30%] h-[30%] bg-[#C084FC] blur-[40px] opacity-40 rounded-full"></div>
        
        {/* Fresnel / Rim Lighting */}
        <div className="absolute inset-0 border-[1px] md:border-[2px] border-white/30 rounded-[inherit] shadow-inner"></div>
        
        {/* Micro-Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" 
             style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/carbon-fibre.png")` }}></div>
      </div>
      
      {/* Elegant Ground Reflection (for Hero only) */}
      {size === 'hero' && (
        <div className="absolute -bottom-32 w-[120%] h-24 bg-gradient-to-r from-transparent via-[#7C3AED]/5 to-transparent blur-[60px] rounded-full scale-x-150"></div>
      )}
    </div>
  );
});

Orb.displayName = 'Orb';