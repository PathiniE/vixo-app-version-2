import React, { useState, useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface LotteryItem {
  id: string;
  prize: string;
  startDate: string;
}

interface LotteryParticipationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lottery: LotteryItem | null;
}

const LotteryParticipation: React.FC<LotteryParticipationModalProps> = ({
  isOpen,
  onClose,
  lottery,
}) => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 5, seconds: 0 });

  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          clearInterval(timer);
          return { minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  const handleBetNow = () => {
    console.log("Bet placed for lottery:", lottery?.id);
    // Add betting logic here
  };

  if (!lottery) return null;

  const formatTime = (time: number) => time.toString().padStart(2, "0");

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="bottom"
        className="bg-[#191919] border-none rounded-t-lg max-h-[90vh] p-0 [&>button]:hidden"
        onPointerDownOutside={onClose}
      >
        <SheetHeader className="p-4">
          <div className="flex items-center justify-between relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white h-10 w-auto px-2 flex items-center gap-1"
            >
              <ChevronLeft size={20} />
              <span className="text-base">Close</span>
            </Button>
          </div>
        </SheetHeader>

        <div className="flex flex-col items-center justify-center px-6 pb-8 space-y-8">
          {/* Lottery Fund Header */}
          <div className="text-center space-y-2">
            <div className="text-gray-400 text-sm">Lottery Fund</div>
            <div
              className="text-5xl font-bold"
              style={{
                background: "linear-gradient(to right, #F4B92E, #E25319)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {lottery.prize.split(" ")[0]} USDT
            </div>
            <div className="text-white text-lg">
              Lottery #{lottery.id.padStart(5, "0")}
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="relative">
            {/* Circular Progress Ring */}
            <div className="relative w-48 h-48">
              <svg
                className="w-full h-full transform -rotate-90"
                viewBox="0 0 100 100"
              >
                {/* Black background circle */}
                <circle cx="50" cy="50" r="40" fill="#000000" />
                {/* Background circle border */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="transparent"
                  stroke="#333"
                  strokeWidth="2"
                />
                {/* Progress circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="transparent"
                  stroke="#E25319"
                  strokeWidth="3"
                  strokeDasharray={`${2 * Math.PI * 45}`}
                  strokeDashoffset={`${2 * Math.PI * 45 * 0.25}`} // 75% complete
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-linear"
                />
              </svg>

              {/* Timer Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-4xl font-bold">
                  {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
                </div>
              </div>
            </div>
          </div>

          {/* Bet Now Button */}
          <Button
            onClick={handleBetNow}
            className="bg-[#E2531933] text-[#E25319] px-10 py-4 text-lg font-semibold rounded-lg hover:bg-[#E2531955] transition-colors"
          >
            Bet Now
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default LotteryParticipation;
