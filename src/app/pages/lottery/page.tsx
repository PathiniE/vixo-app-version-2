// src/app/pages/lottery/page.tsx
"use client";
import React from "react";
import LotteryHeader from "@/components/lottery/LotteryHeader";
import ActiveLottery from "@/components/lottery/ActiveLottery";
import UpcomingLotteries from "@/components/lottery/UpcomingLotteries";
import LotteryResults from "@/components/lottery/LotteryResults";

const LotteryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#191919] flex flex-col px-6 ">
      {/* Header */}
      <LotteryHeader />

      {/* Main Content */}
      <div className="pb-24 space-y-6">
        {/* Active Lottery */}
        <ActiveLottery />

        {/* Upcoming Lotteries */}
        <UpcomingLotteries />

        {/* Recent Results */}
        <LotteryResults />
      </div>
    </div>
  );
};

export default LotteryPage;
