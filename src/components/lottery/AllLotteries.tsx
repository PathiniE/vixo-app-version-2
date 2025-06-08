// src/components/lottery/AllLotteries.tsx
import React from "react";
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

interface AllLotteriesModalProps {
  isOpen: boolean;
  onClose: () => void;
  lotteries: LotteryItem[];
  onParticipate: (lottery: LotteryItem, e: React.MouseEvent) => void;
}

const AllLotteries: React.FC<AllLotteriesModalProps> = ({
  isOpen,
  onClose,
  lotteries,
  onParticipate,
}) => {
  // Extended lottery data for the modal
  const allLotteries = [
    ...lotteries,
    {
      id: "4",
      prize: "10 USDT",
      startDate: "Jun 10, 2025",
    },
    {
      id: "5",
      prize: "10 USDT",
      startDate: "Jun 11, 2025",
    },
    {
      id: "6",
      prize: "10 USDT",
      startDate: "Jun 15, 2025",
    },
    {
      id: "7",
      prize: "10 USDT",
      startDate: "Jun 15, 2025",
    },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="bottom"
        className="bg-[#191919] border-none rounded-t-lg max-h-[80vh] p-0 [&>button]:hidden"
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
            <SheetTitle className="text-white text-xl absolute left-1/2 transform -translate-x-1/2">
              Upcoming Lotteries
            </SheetTitle>
          </div>
        </SheetHeader>

        <div className="overflow-y-auto p-4 max-h-[calc(80vh-80px)]">
          <div className="grid grid-cols-3 gap-2">
            {allLotteries.map((lottery) => (
              <div
                key={lottery.id}
                className="bg-black rounded-lg p-3 cursor-pointer"
              >
                <div className="text-center space-y-2">
                  {/* Win Prize */}
                  <div>
                    <div className="text-white text-base mb-1">Win</div>
                    <div className="text-white text-3xl font-bold">
                      {lottery.prize.split(" ")[0]}
                      <span className="text-white text-sm ml-1">USDT</span>
                    </div>
                  </div>

                  {/* Start Time */}
                  <div className="text-white text-xs">
                    Start at{" "}
                    {lottery.startDate === "Jun 4, 2025"
                      ? "5:30PM"
                      : lottery.startDate === "Jun 5, 2025"
                      ? "5:30PM"
                      : "5:30PM"}
                  </div>

                  {/* Participate Button */}
                  <button
                    onClick={(e) => onParticipate(lottery, e)}
                    className="w-full bg-[#E25319] text-white py-2 px-2 rounded-lg text-sm hover:bg-[#d14a15] transition-colors"
                  >
                    Participate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AllLotteries;
