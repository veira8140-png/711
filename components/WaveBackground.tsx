import React, { memo } from 'react';

export const WaveBackground: React.FC = memo(() => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-40">
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 1000 1000" 
        preserveAspectRatio="none"
        shapeRendering="optimizeSpeed"
      >
        {[...Array(10)].map((_, i) => (
          <path
            key={i}
            className="wave-line"
            d={`M -100,${450 + i * 25} Q 250,${350 - i * 5} 500,${450 + i * 2} T 1100,${450 - i * 10}`}
            style={{ 
              animationDelay: `${i * -1.5}s`, 
              opacity: 0.05 + (i * 0.01),
              transition: 'none' // Performance: skip transitions for background elements
            }}
          />
        ))}
      </svg>
    </div>
  );
});

WaveBackground.displayName = 'WaveBackground';