// components/Balance.tsx
'use client';

import React from 'react';
import Image from "next/image";

interface BalanceProps {
  amount: string;
}

const Balance: React.FC<BalanceProps> = ({ amount }) => {
  return (
    <div className="text-center">
      <p className="text-[#B2B2B2] text-base mb-1">Your Balance:</p>
      <div className="flex items-center justify-center space-x-3">
         <Image src={"/home/balance.png"} alt="balance" height={50} width={50} />
        <span className="text-5xl font-bold text-white">{amount}</span>
      </div>
    </div>
  );
};

export default Balance;