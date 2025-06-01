// app/page.tsx
'use client';

import React, { useState } from 'react';
import Header from '@/components/home/Header';
import Balance from '@/components/home/Balance';
import LevelProgress from '@/components/home/LevelProgress';
import FoxCharacter from '@/components/home/FoxCharacter';
import BottomNavigation from '@/components/home/BottomNavigation';

export default function Home() {
  const [activeTab, setActiveTab] = useState('lotteries');

  const handleFoxClick = () => {
    console.log('Fox button clicked!');
    // Add your navigation or action logic here
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    console.log(`Tab changed to: ${tab}`);
    // Add your navigation logic here
  };

  return (
    <div className="min-h-screen bg-[#191919] text-white flex flex-col pb-20">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 space-y-8">
        {/* Balance Section */}
        <Balance amount="000,000" />

        {/* Level Progress */}
        <LevelProgress 
          gameType="Gamesbet" 
          levelsLeft="10/10" 
          progress={100} 
        />

        {/* Fox Character Button */}
        <FoxCharacter onClick={handleFoxClick} />
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation 
        activeTab={activeTab} 
        onTabChange={handleTabChange} 
      />
    </div>
  );
}