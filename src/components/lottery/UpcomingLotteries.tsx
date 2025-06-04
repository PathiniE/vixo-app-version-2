// src/components/lottery/UpcomingLotteries.tsx
import React from 'react';


interface LotteryItem {
  id: string;
  prize: string;
  ticketPrice: string;
  startDate: string;
  type: 'daily' | 'weekly' | 'monthly';
  participants?: number;
}

interface UpcomingLotteriesProps {
  lotteries?: LotteryItem[];
}

const UpcomingLotteries: React.FC<UpcomingLotteriesProps> = ({
  lotteries = [
    {
      id: '1',
      prize: '10 USDT',
      ticketPrice: '1 USDT',
      startDate: 'Jun 4, 2025',
      type: 'daily',
      participants: 856
    },
    {
      id: '2',
      prize: '10 USDT',
      ticketPrice: '1 USDT',
      startDate: 'Jun 5, 2025',
      type: 'daily',
      participants: 234
    },
    {
      id: '3',
      prize: '10 USDT',
      ticketPrice: '1 USDT',
      startDate: 'Jun 9, 2025',
      type: 'weekly',
      participants: 1247
    }
  ]
}) => {
  const handleLotteryClick = (lottery: LotteryItem) => {
    console.log('Clicked lottery:', lottery.id);
    // Add navigation or modal logic here
  };

  const handleParticipate = (lottery: LotteryItem, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click when button is clicked
    console.log('Participate in lottery:', lottery.id);
    // Add participation logic here
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Upcoming Lotteries</h2>
        <button className="text-white text-sm font-medium">
          See all
        </button>
      </div>

      <div className="flex gap-2">
        {lotteries.map((lottery) => (
          <div
            key={lottery.id}
            onClick={() => handleLotteryClick(lottery)}
            className="bg-black rounded-lg p-3 flex-1"
          >
            <div className="text-center space-y-2">
              {/* Win Prize */}
              <div>
                <div className="text-white text-sm font-medium mb-1">Win</div>
                <div className="text-white text-2xl font-bold">
                  {lottery.prize.split(' ')[0]}<span className="text-white text-xs ml-1">USTD</span>
                </div>
              </div>

              {/* Start Time */}
              <div className="text-white text-xs">
                Start at {lottery.startDate === 'Jun 4, 2025' ? '5:30PM' : 
                         lottery.startDate === 'Jun 5, 2025' ? '5:30PM' : '5:30PM'}
              </div>

              {/* Participate Button */}
              <button
                onClick={(e) => handleParticipate(lottery, e)}
                className="w-full bg-[#E25319] text-white py-2 px-2 rounded-lg text-sm"
              >
                Participate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingLotteries;