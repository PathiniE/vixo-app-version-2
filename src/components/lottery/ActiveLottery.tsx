import React, { useState, useEffect } from "react";
import LotteryParticipation from "./LotteryParticipation";

const LotteryCard = ({
  prizePool = "10 USDT",
  ticketPrice = "1 USDT",
  endTime = new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
}) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isParticipationOpen, setIsParticipationOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  // Function to open participation modal
  const openParticipationModal = () => {
    setIsParticipationOpen(true);
  };

  // Function to close participation modal
  const closeParticipationModal = () => {
    setIsParticipationOpen(false);
  };

  const handleParticipate = () => {
    console.log("Participating in lottery");
    // Call the function to open participation modal
    openParticipationModal();
  };

  // Create lottery data for the modal
  const lotteryData = {
    id: "12345",
    prize: prizePool,
    startDate: new Date().toISOString(),
  };

  return (
    <>
      <div className="w-full mt-8">
        <div className="bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 p-0.5 rounded-2xl">
          <div className="bg-black rounded-2xl p-6">
            {/* Prize Pool */}
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F4B92E] to-[#E25319]">
                {prizePool}
              </div>
              <div className="text-white text-sm">This Lottery ends in:</div>
            </div>

            {/* Countdown Timer */}
            <div className="mb-6">
              <div className="flex justify-center items-center space-x-3 sm:space-x-4">
                <div className="text-center">
                  <div className="text-white text-xs font-medium mb-2">
                    Hours
                  </div>
                  <div className="bg-[#F4B92E] p-0.5 rounded-lg">
                    <div className="bg-black rounded-lg px-4 py-4 sm:px-6 sm:py-5 min-w-[70px] sm:min-w-[80px]">
                      <div className="text-3xl sm:text-4xl font-bold text-white text-center">
                        {timeLeft.hours.toString().padStart(2, "0")}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-white text-2xl sm:text-3xl font-bold">
                  :
                </div>
                <div className="text-center">
                  <div className="text-white text-xs font-medium mb-2">
                    Minutes
                  </div>
                  <div className="bg-[#F4B92E] p-0.5 rounded-lg">
                    <div className="bg-black rounded-lg px-4 py-4 sm:px-6 sm:py-5 min-w-[70px] sm:min-w-[80px]">
                      <div className="text-3xl sm:text-4xl font-bold text-white text-center">
                        {timeLeft.minutes.toString().padStart(2, "0")}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-white text-2xl sm:text-3xl font-bold">
                  :
                </div>
                <div className="text-center">
                  <div className="text-white text-xs font-medium mb-2">
                    Seconds
                  </div>
                  <div className="bg-[#F4B92E] p-0.5 rounded-lg">
                    <div className="bg-black rounded-lg px-4 py-4 sm:px-6 sm:py-5 min-w-[70px] sm:min-w-[80px]">
                      <div className="text-3xl sm:text-4xl font-bold text-white text-center">
                        {timeLeft.seconds.toString().padStart(2, "0")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Participate Button */}
            <button
              onClick={handleParticipate}
              className="w-full bg-[#E2531933] text-[#E25319] py-3 px-5 rounded-lg text-xl hover:bg-[#E2531955] transition-colors"
            >
              Participate for {ticketPrice}
            </button>
          </div>
        </div>
      </div>

      {/* Participation Modal */}
      <LotteryParticipation
        isOpen={isParticipationOpen}
        onClose={closeParticipationModal}
        lottery={lotteryData}
      />
    </>
  );
};

export default LotteryCard;
