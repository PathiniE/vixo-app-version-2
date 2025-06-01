// components/LevelProgress.tsx
'use client';

import React from 'react';

interface LevelProgressProps {
  gameType: string;
  levelsLeft: string;
  progress: number; // 0-100
}

const LevelProgress: React.FC<LevelProgressProps> = ({ 
  gameType, 
  levelsLeft, 
  progress 
}) => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center space-x-2 mb-2">
        <span className="text-green-400 text-sm">{gameType}</span>
        <span className="text-white text-sm">levels left {levelsLeft}</span>
      </div>
      {/* Progress Bar */}
      <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-green-400 to-yellow-400 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default LevelProgress;