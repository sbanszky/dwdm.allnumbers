import React from 'react';

interface ControlsProps {
  channelCount: number;
  onChannelCountChange: (count: 40 | 80 | 160) => void;
}

export function Controls({ channelCount, onChannelCountChange }: ControlsProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-between">
      <div className="space-x-4">
        <span className="text-gray-300">Channel Count:</span>
        {[40, 80, 160].map((count) => (
          <button
            key={count}
            onClick={() => onChannelCountChange(count as 40 | 80 | 160)}
            className={`px-4 py-2 rounded ${
              channelCount === count
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {count}
          </button>
        ))}
      </div>
    </div>
  );
}