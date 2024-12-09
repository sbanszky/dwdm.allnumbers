import React from 'react';
import { DWDMAnimation } from './components/DWDMAnimation/DWDMAnimation';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 p-6 shadow-[0_0_15px_rgba(147,51,234,0.3)] border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto flex justify-center">
          <a 
            href="https://allnumbers012.online" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl font-bold relative group"
          >
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              allnumbers012.online
            </span>
            <span className="absolute -inset-x-4 -inset-y-2 group-hover:bg-gradient-to-r from-green-400/10 via-blue-500/10 to-purple-600/10 rounded-lg blur-sm transition-all duration-500"></span>
            <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
          </a>
        </div>
      </header>
      <main className="flex-1 bg-gray-900">
        <DWDMAnimation />
      </main>
    </div>
  );
}

export default App;