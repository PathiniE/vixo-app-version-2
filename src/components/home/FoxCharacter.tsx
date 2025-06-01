// components/home/FoxCharacter.tsx
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
        
      >
        <Image
          src="/home/fox-button.png" 
          alt="Fox Character"
          width={300}
          height={300}
        />
      </Button>
    </div>
  );
};

export default FoxCharacter;