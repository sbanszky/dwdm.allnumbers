import React from 'react';
import { DWDM_CONSTANTS } from './constants';
import type { Channel } from './types';

interface StatsOverlayProps {
  channelCount: number;
  wavelengths: Channel[];
}

export function StatsOverlay({ channelCount, wavelengths }: StatsOverlayProps) {
  const activeChannels = wavelengths.filter(w => w.isActive).length;
  const spacing = wavelengths[0]?.spacing || DWDM_CONSTANTS.CHANNEL_SPACING.STANDARD;
  const totalCapacity = activeChannels * 100; // 100 Gbps per channel
  const density = channelCount <= 40 ? 'Standard' : channelCount <= 80 ? 'Dense' : 'Ultra-Dense';

  const activeWavelengths = wavelengths.filter(w => w.isActive);
  const minWavelength = Math.min(...activeWavelengths.map(w => w.wavelength));
  const maxWavelength = Math.max(...activeWavelengths.map(w => w.wavelength));

  return (
    <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg">
      <h4 className="text-xl font-semibold mb-4 text-center bg-gradient-to-r from-violet-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
        System Statistics
      </h4>
      <ul className="space-y-3 text-sm divide-y divide-gray-700">
        <li className="grid grid-cols-2 gap-4 py-2">
          <span className="text-gray-400">Configuration:</span>
          <span className="text-right font-medium">{density} WDM</span>
        </li>
        <li className="grid grid-cols-2 gap-4 py-2">
          <span className="text-gray-400">Total Channels:</span>
          <span className="text-right font-medium">{channelCount}</span>
        </li>
        <li className="grid grid-cols-2 gap-4 py-2">
          <span className="text-gray-400">Active Channels:</span>
          <span className="text-right font-medium">{activeChannels}</span>
        </li>
        <li className="grid grid-cols-2 gap-4 py-2">
          <span className="text-gray-400">Channel Spacing:</span>
          <span className="text-right font-medium">{spacing} GHz</span>
        </li>
        <li className="grid grid-cols-2 gap-4 py-2">
          <span className="text-gray-400">Total Capacity:</span>
          <span className="text-right font-medium">{totalCapacity} Gbps</span>
        </li>
        <li className="grid grid-cols-2 gap-4 py-2">
          <span className="text-gray-400">Transmission Band:</span>
          <span className="text-right font-medium">C-Band</span>
        </li>
        <li className="grid grid-cols-2 gap-4 py-2">
          <span className="text-gray-400">Frequency Range:</span>
          <span className="text-right font-medium">
            {DWDM_CONSTANTS.START_FREQUENCY.toFixed(2)}-{DWDM_CONSTANTS.END_FREQUENCY.toFixed(2)} THz
          </span>
        </li>
        <li className="grid grid-cols-2 gap-4 py-2">
          <span className="text-gray-400">Wavelength Range:</span>
          <span className="text-right font-medium">
            {maxWavelength.toFixed(2)}-{minWavelength.toFixed(2)} nm
          </span>
        </li>
      </ul>
    </div>
  );
}