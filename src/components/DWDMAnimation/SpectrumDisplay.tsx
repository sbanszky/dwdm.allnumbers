import React from 'react';
import { DWDM_CONSTANTS, frequencyToWavelength } from './constants';
import type { Channel } from './types';

interface SpectrumDisplayProps {
  wavelengths: Channel[];
}

export function SpectrumDisplay({ wavelengths }: SpectrumDisplayProps) {
  return (
    <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4 text-center bg-gradient-to-r from-violet-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
        Wavelength Spectrum
      </h3>
      <div className="relative h-24 bg-gradient-to-r from-violet-500 via-blue-500 to-emerald-500 rounded-lg overflow-hidden">
        {wavelengths.map((channel) => {
          const position = ((channel.frequency - DWDM_CONSTANTS.START_FREQUENCY) / 
            (DWDM_CONSTANTS.END_FREQUENCY - DWDM_CONSTANTS.START_FREQUENCY)) * 100;
            
          return (
            <div
              key={channel.id}
              className="absolute h-full transition-all duration-300"
              style={{
                left: `${position}%`,
                width: `${Math.max(0.5, 100 / wavelengths.length)}%`,
                background: `linear-gradient(to right, 
                  hsl(${280 + (channel.id * 120 / wavelengths.length)}, 100%, 50%),
                  hsl(${280 + ((channel.id + 1) * 120 / wavelengths.length)}, 100%, 50%)
                )`,
                opacity: channel.isActive ? 1 : 0.2,
              }}
            />
          );
        })}
      </div>
      <div className="flex justify-between mt-4 text-sm text-gray-400">
        <div className="text-center">
          <div>{DWDM_CONSTANTS.START_FREQUENCY.toFixed(2)} THz</div>
          <div className="text-xs">{frequencyToWavelength(DWDM_CONSTANTS.START_FREQUENCY).toFixed(2)} nm</div>
        </div>
        <div className="text-center">
          <div>{DWDM_CONSTANTS.END_FREQUENCY.toFixed(2)} THz</div>
          <div className="text-xs">{frequencyToWavelength(DWDM_CONSTANTS.END_FREQUENCY).toFixed(2)} nm</div>
        </div>
      </div>
    </div>
  );
}