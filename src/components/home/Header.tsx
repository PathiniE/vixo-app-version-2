"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center py-4 pt-12">
      <div className="flex items-center space-x-3 bg-[#F4B92E33] p-2 rounded-lg">
        <Image src={"/home/time.png"} alt="time" height={24} width={24} />
        <span className="text-yellow-400 text-lg font-medium">04:38:20</span>
      </div>
      
      <Link href="/pages/wallet">
      <div className="absolute top-0 right-0">
              <Image
                src={"/wallet/balance-blur.png"}
                height={400}
                width={400}
                alt="shadow"
                className="opacity-80 rotate-90"
              />
            </div>
        <div className="flex items-center space-x-3 bg-[#E2531933] p-2 rounded-lg cursor-pointer active:bg-[#E2531950] active:scale-95 transition-all duration-150">
          <Image src={"/home/wallet.png"} alt="wallet" height={24} width={24} />
          <span className="text-orange-400 text-lg font-medium">Wallet</span>
        </div>
      </Link>
    </div>
  );
};

export default Header;