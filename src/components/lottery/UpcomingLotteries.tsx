// src/components/lottery/UpcomingLotteries.tsx
import React, { useState } from "react";
import { Alert, AlertDescription } from '@/components/ui/alert';
import AllLotteries from "./AllLotteries";

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

  const handleLotteryClick = (lottery: LotteryItem) => {
    console.log("Clicked lottery:", lottery.id);
  };

  const handleParticipate = (lottery: LotteryItem, e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Show the alert
    setShowLotteryAlert(true);
    
    
  };

  const handleSeeAllClick = () => {
    setIsModalOpen(true);
  };



  const handleCloseAlert = () => {
    setShowLotteryAlert(false);
    // Restore body opacity when alert is closed
    document.body.style.opacity = '1';
  };

  return (
    <>
      {/* Lottery Alert */}
      {showLotteryAlert && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <Alert className="bg-gray-700 border-gray-600 text-white shadow-xl w-80 relative">
            <button
              onClick={handleCloseAlert}
              className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors text-lg"
            >
              ✕
            </button>
            <AlertDescription className="text-center pt-2 justify-center flex flex-col items-center mt-4">
              <div className="text-white text-base">
                The lottery draw begins at 5:20 PM!
              </div>
              <div className="text-gray-300 text-sm mb-4">
                Please wait for 2 more hours.
              </div>
              <button
                onClick={handleCloseAlert}
                className="bg-[#E25319] text-white px-8 py-2 rounded-lg justify-center"
              >
                OK
              </button>
            </AlertDescription>
          </Alert>
        </div>
      )}

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Upcoming Lotteries</h2>
          <button
            onClick={handleSeeAllClick}
            className="text-white text-base"
          >
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
        onParticipate={handleParticipate}
      />
    </>
  );
};

export default UpcomingLotteries;