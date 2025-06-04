"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";

interface DepositModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Deposit: React.FC<DepositModalProps> = ({ isOpen, onClose }) => {
  const [selectedAmount, setSelectedAmount] = React.useState<number | null>(
    null
  );
  const [customAmount, setCustomAmount] = React.useState<string>("");

  const predefinedAmounts = [50, 100, 150, 200, 250];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount(amount.toString());
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);

    // Check if the entered value matches any predefined amount
    const numValue = parseFloat(value);
    if (predefinedAmounts.includes(numValue)) {
      setSelectedAmount(numValue);
    } else {
      setSelectedAmount(null);
    }
  };

  const handleDeposit = () => {
    const amount = selectedAmount || parseFloat(customAmount);
    if (amount && amount > 0) {
      console.log("Depositing:", amount);
      
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent
        className="sm:max-w-md bg-[#191919] border-none text-white bottom-0 top-auto translate-y-0 data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom [&>button]:hidden"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-white hover:bg-gray-700 h-10 w-auto px-2 flex items-center gap-1"
          >
            <ChevronLeft size={24} />
            <span className="text-base">Close</span>
          </Button>
          <DialogTitle className="text-white text-xl">Deposit</DialogTitle>
          <div className="w-8" />
        </DialogHeader>

        <div className="space-y-6">
          {/* Amount Input */}
          <div className="space-y-2">
            <Card className="bg-[#B2B2B233] rounded-lg border-none">
              <CardContent className=" flex items-center">
                <Input
                  type="number"
                  placeholder="$50.00"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className="bg-transparent text-white text-base border-none outline-none ring-0 focus-visible:ring-0 placeholder-gray-400 p-0 h-4 min-h-0"
                />
              </CardContent>
            </Card>
            <Label className="text-gray-400 text-sm">
              Enter or select deposit amount
            </Label>
          </div>

          {/* Predefined Amount Buttons */}
          <div className="grid grid-cols-3 gap-3">
            {predefinedAmounts.map((amount) => (
              <Button
                key={amount}
                onClick={() => handleAmountSelect(amount)}
                variant={selectedAmount === amount ? "default" : "secondary"}
                className={`py-4 px-6 text-lg font-medium transition-colors min-h-[50px] ${
                  selectedAmount === amount
                    ? "bg-[#E2531933] border-[#E25319] border text-white"
                    : "bg-[#FFFFFF33]  text-white border-[#B2B2B2] border"
                }`}
              >
                ${amount}
              </Button>
            ))}
          </div>

          {/* Deposit Button */}
          <Button
            onClick={handleDeposit}
            className="w-full bg-[#E25319] text-white py-6 text-lg font-medium"
            size="lg"
            disabled={!selectedAmount && !customAmount}
          >
            Deposit
          </Button>

          {/* Terms and Conditions */}
          <div className="space-y-2">
            <Label className="text-white font-medium">
              Terms and Conditions
            </Label>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li>
                • Lorem ipsum dolor sit amet consectetur. Urna orci non id
                porttitor blandit.
              </li>
              <li>
                • Lorem ipsum dolor sit amet consectetur. Urna orci non id
                porttitor blandit.
              </li>
              <li>
                • Lorem ipsum dolor sit amet consectetur. Urna orci non id
                porttitor blandit.
              </li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Deposit;
