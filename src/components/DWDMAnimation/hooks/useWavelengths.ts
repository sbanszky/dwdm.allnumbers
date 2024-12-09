import { useState, useCallback, useMemo } from 'react';
import { DWDM_CONSTANTS, frequencyToWavelength } from '../constants';
import type { Channel } from '../types';

const getChannelSpacing = (count: number): number => {
  switch (count) {
    case 160: return DWDM_CONSTANTS.CHANNEL_SPACING.ULTRA_DENSE;
    case 80: return DWDM_CONSTANTS.CHANNEL_SPACING.DENSE;
    case 40: return DWDM_CONSTANTS.CHANNEL_SPACING.STANDARD;
    default: return DWDM_CONSTANTS.CHANNEL_SPACING.STANDARD;
  }
};

const generateWavelengths = (count: number): Channel[] => {
  const spacing = getChannelSpacing(count);
  const spacingTHz = spacing / 1000; // Convert GHz to THz
  
  return Array.from({ length: count }, (_, i) => {
    const frequency = DWDM_CONSTANTS.START_FREQUENCY + (i * spacingTHz);
    const wavelength = frequencyToWavelength(frequency);
    
    // Calculate color based on position in spectrum (violet to green)
    const hue = 280 + (i * 120 / count); // 280° is violet, +120° covers the spectrum to green
    
    return {
      id: i,
      frequency,
      wavelength,
      color: `hsl(${hue}, 100%, 50%)`,
      isActive: true,
      spacing
    };
  });
};

export const useWavelengths = (channelCount: number) => {
  const [wavelengths, setWavelengths] = useState<Channel[]>(() => 
    generateWavelengths(channelCount)
  );

  useMemo(() => {
    setWavelengths(generateWavelengths(channelCount));
  }, [channelCount]);

  const toggleWavelength = useCallback((id: number) => {
    setWavelengths(prev => 
      prev.map(w => w.id === id ? { ...w, isActive: !w.isActive } : w)
    );
  }, []);

  return { wavelengths, toggleWavelength };
};