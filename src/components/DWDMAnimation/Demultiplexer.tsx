import React from 'react';
import type { AnimationProps } from './types';

export function Demultiplexer({ wavelengths, isAnimating }: AnimationProps) {
  return (
    <div className="relative w-48 h-48">
      <div className="absolute inset-0 bg-gray-700 rounded-lg transform -rotate-45">
        {wavelengths.filter(w => w.isActive).map((channel, index) => (
          <div
            key={channel.id}
            className="absolute h-1 rounded-full transition-all duration-300"
            style={{
              backgroundColor: channel.color,
              width: '100%',
              top: `${(index * 100) / wavelengths.length}%`,
              animation: isAnimating
                ? `split 2s ease-in-out infinite ${index * 0.1}s`
                : 'none',
            }}
          />
        ))}
      </div>
      
      <style>{`
        @keyframes split {
          0% { transform: translateX(-100%) scaleX(1); }
          50% { transform: translateX(0) scaleX(2); }
          100% { transform: translateX(100%) scaleX(1); }
        }
      `}</style>
    </div>
  );
}