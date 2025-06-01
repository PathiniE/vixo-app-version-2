"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

interface BalanceCardProps {
  balance: number;
  tokens: number;
}

const BalanceCard: React.FC<BalanceCardProps> = ({ balance, tokens }) => {
  return (
    <Card className="bg-[#07070761] border-none mt-4 relative overflow-hidden rounded-lg">
      {/* Background Image */}
      <div className="absolute top-0 left-0">
        <Image
          src={"/wallet/balance-blur.png"}
          height={150}
          width={200}
          alt="shadow"
          className="opacity-80"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center ">
        <p className="text-[#FFFFFF80] text-sm mb-4">Balance</p>
        <h2 className="text-[#E25319] text-6xl font-bold mb-4">
          {balance.toLocaleString()},000
          <span className="text-orange-200 text-xl ml-2">USDT</span>
        </h2>
        <div className="h-px bg-[#B2B2B226] w-full"></div>
        <p className="text-white text-lg mt-2">
          {tokens.toLocaleString()} Tokens
        </p>
      </div>
    </Card>
  );
};

export default BalanceCard;