"use client";

import React from "react";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const WalletHeader: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between py-4 pt-12  safe-area-inset-top">
      <button 
        onClick={() => router.back()}
        className="flex items-center space-x-2 text-white active:scale-95 transition-transform"
        aria-label="Go back"
      >
        <ChevronLeft size={24} />
        <span className="text-base">Back</span>
      </button>
      
      <h1 className="text-white text-lg">Wallet</h1>
      
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-medium">R</span>
        </div>
        <span className="text-orange-400 text-sm">Robert</span>
      </div>
    </div>
  );
};

export default WalletHeader;