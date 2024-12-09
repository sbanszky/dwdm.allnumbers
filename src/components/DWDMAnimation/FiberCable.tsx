import React from 'react';
import type { AnimationProps } from './types';

export function FiberCable({ wavelengths, isAnimating }: AnimationProps) {
  const density = wavelengths.length <= 40 ? 'low' : wavelengths.length <= 80 ? 'medium' : 'high';
  
  return (
    <div className="relative flex-1 h-32">
      <div className="absolute inset-0 bg-gray-700 rounded-full overflow-hidden">
        <div className="relative h-full w-full">
          {wavelengths.filter(w => w.isActive).map((channel) => (
            <div
              key={channel.id}
              className="absolute inset-0 opacity-50"
              style={{
                backgroundColor: channel.color,
                animation: isAnimating
                  ? `pulse-${density} 1.5s ease-in-out infinite ${channel.id * (0.1 / (wavelengths.length / 40))}s`
                  : 'none',
              }}
            />
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes pulse-low {
          0% { transform: translateX(-100%) scaleX(1.2); }
          100% { transform: translateX(100%) scaleX(1.2); }
        }
        @keyframes pulse-medium {
          0% { transform: translateX(-100%) scaleX(1); }
          100% { transform: translateX(100%) scaleX(1); }
        }
        @keyframes pulse-high {
          0% { transform: translateX(-100%) scaleX(0.8); }
          100% { transform: translateX(100%) scaleX(0.8); }
        }
      `}</style>
    </div>
  );
}