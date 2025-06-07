// src/components/lottery/LotteryHeader.tsx
import React from "react";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";

interface LotteryHeaderProps {
  onBack?: () => void;
  balance?: string;
}

const LotteryHeader: React.FC<LotteryHeaderProps> = ({
  onBack = () => window.history.back(),
  balance = "0.00",
}) => {
  return (
    <>
    <div className="flex items-center justify-between py-4 pt-12">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-white"
      >
        <ChevronLeft size={24} />
        <span className="text-base">Back</span>
      </button>

      {/* Title */}
      <h1 className="text-white text-lg">Wallet</h1>

      {/* Balance */}
      <div className="flex items-center space-x-2 bg-[#E2531933] p-2 rounded-lg">
        <Image
          src={"/lottery/gold-coin.png"}
          height={22}
          width={22}
          alt="coins"
        />
        <span className="text-[#E25319]">{balance}</span>
      </div>
     
    </div>
     <div className="w-full h-32 relative overflow-hidden rounded-lg shadow-lg" >
        <Image
          src={"/lottery/vixo-cover-photo.png"}
          fill
          className="object-cover"
          alt="Vixo Verse"
        />
      </div>
      </>
  );
};

export default LotteryHeader;
