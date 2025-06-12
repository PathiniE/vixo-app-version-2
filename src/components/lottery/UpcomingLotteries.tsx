// src/components/lottery/UpcomingLotteries.tsx
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import AllLotteries from "./AllLotteries";
import LotteryParticipation from "./LotteryParticipation";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LotteryItem {
  id: string;
  prize: string;
  startDate: string;
}

interface UpcomingLotteriesProps {
  lotteries?: LotteryItem[];
}

const UpcomingLotteries: React.FC<UpcomingLotteriesProps> = ({
  lotteries = [
    {
      id: "1",
      prize: "10 USDT",
      startDate: "Jun 4, 2025",
    },
    {
      id: "2",
      prize: "10 USDT",
      startDate: "Jun 5, 2025",
    },
    {
      id: "3",
      prize: "10 USDT",
      startDate: "Jun 9, 2025",
    },
  ],
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showLotteryAlert, setShowLotteryAlert] = useState(false);
  const [showBettingModal, setShowBettingModal] = useState(false);
  const [selectedLottery, setSelectedLottery] = useState<LotteryItem | null>(
    null
  );

  const handleLotteryClick = (lottery: LotteryItem) => {
    console.log("Clicked lottery:", lottery.id);
  };

  // Function to check if lottery is currently ongoing
  const isLotteryOngoing = (lottery: LotteryItem): boolean => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();
    const currentTime = currentHour * 60 + currentMinute;

    const lotteryStartTime = 17 * 60 + 20; // 5:20 PM in minutes

    return lottery.id === "1" && currentTime >= lotteryStartTime;
  };

  const handleParticipate = (lottery: LotteryItem, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedLottery(lottery);

    if (isLotteryOngoing(lottery)) {
      // Show betting modal if lottery is ongoing
      setShowBettingModal(true);
    } else {
      // Show alert dialog if lottery hasn't started yet
      setShowLotteryAlert(true);
    }
  };

  const handleSeeAllClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseAlert = () => {
    setShowLotteryAlert(false);
  };

  const handleCloseBettingModal = () => {
    setShowBettingModal(false);
    setSelectedLottery(null);
  };

  return (
    <>
      {/* Alert for lottery not started yet */}
      <AlertDialog open={showLotteryAlert} onOpenChange={setShowLotteryAlert}>
        <AlertDialogContent className="bg-black/30 backdrop-blur-md border border-white/10 text-white max-w-sm shadow-2xl">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowLotteryAlert(false)}
            className="absolute right-2 top-2 text-gray-400 hover:text-white h-10 w-10 hover:bg-white/10"
          >
            <X size={20} />
          </Button>
          <AlertDialogHeader className="text-center">
            <AlertDialogTitle className="sr-only">
              Lottery Not Started
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center flex flex-col mt-2 space-y-2">
              <span className="text-[#FFFFFF80] text-lg">
                The lottery draw begins at 5:20 PM!
              </span>
              <span className="text-[#FFFFFF80] text-sm">
                Please wait for 2 more hours.
              </span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex justify-center mt-4">
            <AlertDialogAction
              onClick={handleCloseAlert}
              className="bg-[#E2531933] text-[#E25319] px-8 py-2 text-lg rounded-lg"
            >
              OK
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>

      {/* Betting Modal */}
      <LotteryParticipation
        isOpen={showBettingModal}
        onClose={handleCloseBettingModal}
        lottery={selectedLottery}
      />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Upcoming Lotteries</h2>
          <button onClick={handleSeeAllClick} className="text-white text-base">
            See all
          </button>
        </div>

        <div className="flex gap-2">
          {lotteries.map((lottery) => (
            <div
              key={lottery.id}
              onClick={() => handleLotteryClick(lottery)}
              className="bg-black rounded-lg p-3 flex-1 cursor-pointer"
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
                  onClick={(e) => handleParticipate(lottery, e)}
                  className="w-full bg-[#E25319] text-white py-2 px-2 rounded-lg text-sm hover:bg-[#d14a15] transition-colors"
                >
                  Participate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AllLotteries
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lotteries={lotteries}
      />
    </>
  );
};

export default UpcomingLotteries;