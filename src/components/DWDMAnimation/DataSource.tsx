import React from 'react';
import type { Channel } from './types';

interface DataSourceProps {
  wavelengths: Channel[];
}

export function DataSource({ wavelengths }: DataSourceProps) {
  const columns = wavelengths.length <= 40 ? 2 : wavelengths.length <= 80 ? 3 : 4;

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">Data Sources</h3>
      <div 
        className="grid gap-1"
        style={{ 
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          maxHeight: '200px',
          overflowY: 'auto'
        }}
      >
        {wavelengths.map((channel) => (
          <div
            key={channel.id}
            className={`h-1.5 rounded-full transition-opacity duration-300 ${
              channel.isActive ? 'opacity-100' : 'opacity-30'
            }`}
            style={{ backgroundColor: channel.color }}
          />
        ))}
      </div>
    </div>
  );
}