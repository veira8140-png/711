
import React from 'react';

export const WaveBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-40">
      <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        {[...Array(15)].map((_, i) => (
          <path
            key={i}
            className="wave-line"
            d={`M -100,${400 + i * 20} Q 250,${300 - i * 5} 500,${400 + i * 2} T 1100,${400 - i * 10}`}
            style={{ animationDelay: `${i * -2}s`, opacity: 0.1 + (i * 0.02) }}
          />
        ))}
      </svg>
    </div>
  );
};
