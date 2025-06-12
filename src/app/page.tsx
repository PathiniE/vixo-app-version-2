// app/page.tsx
"use client";

import React, { useState } from "react";
import Header from "@/components/home/Header";
import Balance from "@/components/home/Balance";
import LevelProgress from "@/components/home/LevelProgress";
import FoxCharacter from "@/components/home/FoxCharacter";
import BottomNavigation from "@/components/home/BottomNavigation";
import Image from "next/image";

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
    <div className="min-h-screen bg-[#191919] flex flex-col relative z-10 px-6">
      
        <Image
          src={"/home/shadow-blob.png"}
          alt="shadow"
          fill
          className="opacity-80 pointer-events-none absolute z-0 w-full h-full"
        />
     
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
