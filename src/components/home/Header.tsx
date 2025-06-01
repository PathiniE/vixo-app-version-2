// components/Header.tsx
"use client";

import React from "react";

import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-4 pt-12">
      <div className="flex items-center space-x-3 bg-[#F4B92E33] p-2 rounded-lg">
        <Image src={"/home/time.png"} alt="time" height={24} width={24} />
        <span className="text-yellow-400 text-lg font-medium">04:38:20</span>
      </div>
      <div className="flex items-center space-x-3 bg-[#E2531933] p-2 rounded-lg">
        <Image src={"/home/wallet.png"} alt="time" height={24} width={24} />
        <span className="text-orange-400 text-lg font-medium">Wallet</span>
      </div>
    </div>
  );
};

export default Header;
