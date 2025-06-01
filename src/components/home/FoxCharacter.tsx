// components/FoxCharacter.tsx
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface FoxCharacterProps {
  onClick: () => void;
}

const FoxCharacter: React.FC<FoxCharacterProps> = ({ onClick }) => {
  return (
    <div className="relative">
      <Button
        onClick={onClick}
        className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 border-4 border-orange-300 shadow-2xl transition-all duration-200 hover:scale-105 p-0"
      >
        <div className="w-24 h-24 relative flex items-center justify-center">
          {/* Placeholder for fox image */}
          <div className="w-20 h-20 bg-orange-200 rounded-full flex items-center justify-center">
            <span className="text-orange-800 text-xs font-bold">FOX IMAGE</span>
          </div>
          {/* When you add your fox image, replace the placeholder above with: */}
          {/* <Image 
            src="/path-to-your-fox-image.png" 
            alt="Fox Character" 
            width={80} 
            height={80}
            className="object-contain"
          /> */}
        </div>
      </Button>
    </div>
  );
};

export default FoxCharacter;