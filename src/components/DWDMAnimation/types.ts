export interface Channel {
  id: number;
  frequency: number;    // Frequency in THz
  wavelength: number;   // Wavelength in nm
  color: string;
  isActive: boolean;
  spacing: number;      // Channel spacing in GHz
}

export interface AnimationProps {
  wavelengths: Channel[];
  isAnimating: boolean;
}

export type ChannelCount = 40 | 80 | 160;