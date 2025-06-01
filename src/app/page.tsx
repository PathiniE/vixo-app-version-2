// app/page.tsx
"use client";

import React, { useState } from "react";
import Header from "@/components/home/Header";
import Balance from "@/components/home/Balance";
import LevelProgress from "@/components/home/LevelProgress";
import FoxCharacter from "@/components/home/FoxCharacter";
import BottomNavigation from "@/components/home/BottomNavigation";

export default function Home() {
  const [activeTab, setActiveTab] = useState("lotteries");

  const handleFoxClick = () => {
    console.log("Fox button clicked!");
    // Add your navigation or action logic here
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    console.log(`Tab changed to: ${tab}`);
    // Add your navigation logic here
  };

  return (
    <div className="min-h-screen bg-[#191919] flex flex-col px-6">
      {/* Header */}
      <Header />

      {/* Balance Section */}
      <div className="flex justify-center pt-8 mb-8">
        <Balance amount="000,000" />
      </div>

      {/* Level Progress */}
      <div className="">
        <LevelProgress gameType="Gamesbet" levelsLeft="10/10" progress={100} />
      </div>

      {/* Fox Character Button - Centered and takes remaining space */}
      <div className="flex-1 flex items-center justify-center">
        <FoxCharacter onClick={handleFoxClick} />
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
}