"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Deposit from "./Deposit";

const Recharge: React.FC = () => {
  const [isDepositModalOpen, setIsDepositModalOpen] = React.useState(false);

  const handleDeposit = () => {
    setIsDepositModalOpen(true);
  };

  const closeDepositModal = () => {
    setIsDepositModalOpen(false);
  };

  return (
    <>
      <Card className="bg-[#070707] mt-4 relative overflow-hidden border-none rounded-lg">
        {/* Background Image Overlay */}
        <div className="absolute bottom-0 right-0">
          <Image
            src={"/wallet/balance-blur.png"}
            height={120}
            width={180}
            alt="shadow"
            className="opacity-50 rotate-180"
          />
        </div>

        {/* Coins Image */}
        <div className="absolute bottom-2 right-4">
          <Image
            src={"/wallet/gold-coin.png"}
            height={120}
            width={120}
            alt="coins"
            className="opacity-90"
          />
        </div>

        <div className="absolute bottom-20 right-0">
          <Image
            src={"/wallet/gold-coin-2.png"}
            height={50}
            width={50}
            alt="coins"
            className="opacity-90"
          />
        </div>

        <div className="absolute bottom-20 right-10">
          <Image
            src={"/wallet/gold-coin-3.png"}
            height={60}
            width={60}
            alt="coins"
            className="opacity-90"
          />
        </div>

        <div className="relative z-10 p-4 flex items-center justify-between">
          <div>
            <h3 className="text-white text-2xl font-medium">Want to recharge</h3>
            <p className="text-white text-2xl">
              your <span className="text-[#E25319]">wallet?</span>
            </p>
          </div>
        </div>

        <div className="relative z-10 px-4">
          <Button
            onClick={handleDeposit}
            className="bg-[#E2531933] text-[#E25319] text-xl px-8 py-6"
          >
            Deposit
          </Button>
        </div>
      </Card>

      {/* Deposit*/}
      <Deposit
        isOpen={isDepositModalOpen}
        onClose={closeDepositModal}
      />
    </>
  );
};

export default Recharge;