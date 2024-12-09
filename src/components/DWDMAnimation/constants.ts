// ITU-T G.694.1 DWDM Standards
export const DWDM_CONSTANTS = {
  // C-band frequency range (THz)
  START_FREQUENCY: 191.7, // ~1565.50 nm
  END_FREQUENCY: 196.1,   // ~1530.33 nm
  
  // Standard channel spacings (GHz)
  CHANNEL_SPACING: {
    ULTRA_DENSE: 12.5,  // 160 channels
    DENSE: 25,         // 80 channels
    STANDARD: 50       // 40 channels
  }
} as const;

// Convert frequency (THz) to wavelength (nm)
export const frequencyToWavelength = (frequencyTHz: number): number => {
  const SPEED_OF_LIGHT = 299792.458; // speed of light in km/s
  return (SPEED_OF_LIGHT / frequencyTHz);
};

// Convert wavelength (nm) to frequency (THz)
export const wavelengthToFrequency = (wavelengthNm: number): number => {
  const SPEED_OF_LIGHT = 299792.458;
  return (SPEED_OF_LIGHT / wavelengthNm);
};