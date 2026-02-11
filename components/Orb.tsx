
import React from 'react';

interface OrbProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Orb: React.FC<OrbProps> = ({ size = 'md', className = '' }) => {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-32 h-32',
    xl: 'w-64 h-64'
  };

  return (
    <div className={`relative flex items-center justify-center animate-orb ${className}`}>
      <div className={`${sizeMap[size]} rounded-full bg-gradient-to-br from-[#8A3FA0] via-[#9B4BB6] to-[#531753] orb-glow relative overflow-hidden`}>
        {/* Parametric light reflections */}
        <div className="absolute top-[-10%] left-[-10%] w-full h-full bg-white/10 blur-xl rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-full h-full bg-black/20 blur-xl rounded-full"></div>
      </div>
    </div>
  );
};
