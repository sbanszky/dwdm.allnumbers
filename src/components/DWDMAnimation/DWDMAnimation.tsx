import React, { useState } from 'react';
import { Settings } from 'lucide-react';
import { Controls } from './Controls';
import { DataSource } from './DataSource';
import { FiberCable } from './FiberCable';
import { Multiplexer } from './Multiplexer';
import { Demultiplexer } from './Demultiplexer';
import { SpectrumDisplay } from './SpectrumDisplay';
import { StatsOverlay } from './StatsOverlay';
import { useWavelengths } from './hooks/useWavelengths';
import { useAnimation } from './hooks/useAnimation';
import type { Channel } from './types';

export function DWDMAnimation() {
  const [channelCount, setChannelCount] = useState<40 | 80 | 160>(40);
  const { wavelengths, toggleWavelength } = useWavelengths(channelCount);
  const { isAnimating, toggleAnimation } = useAnimation();

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            DWDM Fiber Optic Visualization
          </h1>
          <button
            onClick={() => toggleAnimation()}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 via-blue-600 to-purple-700 hover:from-green-400 hover:via-blue-500 hover:to-purple-600 transition-all duration-300 shadow-[0_0_15px_rgba(147,51,234,0.3)]"
          >
            <Settings className="w-5 h-5" />
            <span>{isAnimating ? 'Pause' : 'Start'} Animation</span>
          </button>
        </header>

        <div className="grid grid-cols-1 gap-8">
          <Controls
            channelCount={channelCount}
            onChannelCountChange={setChannelCount}
          />
          
          <div className="relative bg-gray-800/50 rounded-xl p-6 shadow-[0_0_30px_rgba(147,51,234,0.2)] border border-purple-500/20">
            <div className="flex justify-between items-center space-x-4 mb-8">
              <DataSource wavelengths={wavelengths} />
              <Multiplexer wavelengths={wavelengths} isAnimating={isAnimating} />
              <FiberCable wavelengths={wavelengths} isAnimating={isAnimating} />
              <Demultiplexer wavelengths={wavelengths} isAnimating={isAnimating} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <SpectrumDisplay wavelengths={wavelengths} />
              <StatsOverlay channelCount={channelCount} wavelengths={wavelengths} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}