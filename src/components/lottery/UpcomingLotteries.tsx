// src/components/lottery/UpcomingLotteries.tsx
import React, { useState } from "react";
import AllLotteries from "./AllLotteries";
import LotteryParticipation from "./LotteryParticipation";

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
  const [isParticipationModalOpen, setIsParticipationModalOpen] = useState(false);
  const [selectedLottery, setSelectedLottery] = useState<LotteryItem | null>(null);

  const handleLotteryClick = (lottery: LotteryItem) => {
    console.log("Clicked lottery:", lottery.id);
  };

  const handleParticipate = (lottery: LotteryItem, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedLottery(lottery);
    setIsParticipationModalOpen(true);
    // Close the all lotteries modal if it's open
    if (isModalOpen) {
      setIsModalOpen(false);
    }
  };

  const handleSeeAllClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseParticipationModal = () => {
    setIsParticipationModalOpen(false);
    setSelectedLottery(null);
  };

  return (
    <>
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

      <LotteryParticipation
        isOpen={isParticipationModalOpen}
        onClose={handleCloseParticipationModal}
        lottery={selectedLottery}
      />
    </>
  );
};

export default UpcomingLotteries;