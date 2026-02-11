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
    hero: 'w-72 h-72 md:w-[32rem] md:h-[32rem]'
  };

  return (
    <div className={`relative flex items-center justify-center pointer-events-none transform-gpu ${className}`}>
      {/* Cinematic Ambient Glow - Stationary Glow with optimized blur */}
      <div className={`absolute ${sizeMap[size]} rounded-full blur-[60px] md:blur-[80px] opacity-30 bg-[#7C3AED] mix-blend-screen animate-glow-pulse`}></div>
      <div className={`absolute ${sizeMap[size]} rounded-full blur-[30px] md:blur-[40px] opacity-20 bg-[#C084FC] mix-blend-overlay`}></div>
      
      {/* Main 3D Volume - Optimized with transform-gpu and will-change */}
      <div className={`${sizeMap[size]} animate-morph bg-gradient-to-br from-[#6D28D9] via-[#4C1D95] to-[#1E1B4B] orb-glow relative overflow-hidden backdrop-blur-md border border-white/20 shadow-2xl will-change-transform`}>
        
        {/* Specular Highlight (Main Light Source) */}
        <div className="absolute top-[10%] left-[15%] w-[40%] h-[40%] bg-white/40 blur-xl rounded-full opacity-60 pointer-events-none"></div>
        <div className="absolute top-[5%] left-[10%] w-[15%] h-[15%] bg-white/70 blur-md rounded-full pointer-events-none"></div>
        
        {/* Secondary Subsurface Scattering Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(192,132,252,0.4),transparent_70%)] pointer-events-none"></div>
        
        {/* Deep Core Shadow (Ambient Occlusion) */}
        <div className="absolute bottom-0 right-0 w-[80%] h-[80%] bg-[radial-gradient(circle_at_70%_70%,rgba(0,0,0,0.6),transparent_80%)] pointer-events-none"></div>
        
        {/* Fresnel / Rim Light Effect */}
        <div className="absolute inset-0 border-[3px] md:border-[4px] border-white/10 rounded-[inherit] blur-[1px] pointer-events-none"></div>
        
        {/* Organic Texture Overlay - Reduced complexity for faster paint */}
        <div className="absolute inset-0 opacity-5 mix-blend-soft-light" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #fff 0%, transparent 100%)' }}></div>
      </div>
      
      {/* Static Drop Shadow */}
      {size === 'hero' && (
        <div className="absolute -bottom-24 w-[70%] h-12 bg-black/5 blur-3xl rounded-[100%]"></div>
      )}
    </div>
  );
});

Orb.displayName = 'Orb';