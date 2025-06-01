// components/home/LevelProgress.tsx
"use client";

import React from "react";
import { HiChevronRight } from "react-icons/hi";

interface LevelProgressProps {
  gameType: string;
  levelsLeft: string;
  progress: number; // 0-100
}

const LevelProgress: React.FC<LevelProgressProps> = ({
  gameType,
  levelsLeft,
  progress,
}) => {
  return (
    <div className="w-full">
      {/* Header with Epic and Level*/}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-1 text-white">
          <span className="text-sm font-medium">Epic</span>
          <HiChevronRight size={16} className="text-white" />
        </div>
        <div className="text-white text-sm">
          Level <span className="text-white font-medium">{levelsLeft}</span>
        </div>
      </div>

      {/* Progress Bar*/}
      <div className="w-full h-3 bg-[#555555] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-green-400 to-yellow-400 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Text Labels - Centered */}
      <div className="flex items-center justify-center mt-6">
        <div className="bg-[#ECA2841F] px-3 py-1 rounded-lg flex items-center space-x-3">
          <span className="text-[#44CB05] text-lg">{gameType}</span>
          <span className="text-white text-lg">levels left {levelsLeft}</span>
        </div>
      </div>
    </div>
  );
};

export default LevelProgress;
