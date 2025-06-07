"use client";
import React from "react";
import Image from "next/image";

interface BottomNavigationProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab = "lotteries",
  onTabChange = () => {},
}) => {
  // Navigation configuration with updated paths
  const navigationPages = {
    play: "/play",
    tasks: "/tasks",
    lotteries: "/pages/lottery",
    friends: "/friends",
    stats: "/stats",
  };

  const tabs = [
    {
      id: "play",
      label: "Play",
      image: "/home/nav/play.png",
      path: navigationPages.play,
    },
    {
      id: "tasks",
      label: "Tasks",
      image: "/home/nav/tasks.png",
      path: navigationPages.tasks,
    },
    {
      id: "lotteries",
      label: "Lotteries",
      image: "/home/nav/lotteries.png",
      path: navigationPages.lotteries,
    },
    {
      id: "friends",
      label: "Friends",
      image: "/home/nav/friends.png",
      path: navigationPages.friends,
    },
    {
      id: "stats",
      label: "Stats",
      image: "/home/nav/stats.png",
      path: navigationPages.stats,
    },
  ];

  const handleTabClick = (tab: any) => {
    onTabChange(tab.id);

    if (typeof window !== "undefined") {
      window.location.href = tab.path;
    }

    console.log(`Navigating to: ${tab.path}`);
  };

  const handleLotteriesClick = () => {
    const lotteriesTab = { id: "lotteries", path: navigationPages.lotteries };
    handleTabClick(lotteriesTab);
  };

  return (
    <div className="fixed bottom-6 left-4 right-4 z-50">
      <div className="relative">
        
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-8">
          <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
            <button
              onClick={() =>
                handleTabClick({
                  id: "lotteries",
                  path: navigationPages.lotteries,
                })
              }
              className="w-16 h-16 rounded-full bg-[#E25319] flex flex-col items-center justify-center shadow-lg hover:bg-orange-600 transition-all duration-200"
            >
              <Image
                src="/home/nav/crown.png"
                alt="Lotteries"
                width={30}
                height={30}
                className="mb-1 object-contain"
              />
              <span className="text-[10px] font-medium text-white leading-none">
                Lotteries
              </span>
            </button>
          </div>
        </div>

        {/* Main navigation bar */}
        <div className="bg-black rounded-2xl shadow-xl">
          <div className="flex justify-around items-center py-4 px-4">
            {tabs.map((tab) => {
              if (tab.id === "lotteries") {
                return (
                  <div
                    key={tab.id}
                    className="flex flex-col items-center space-y-1 p-2 min-w-[64px] opacity-0"
                  >
                    <Image
                      src={tab.image}
                      alt={tab.label}
                      width={30}
                      height={30}
                      className="object-contain"
                    />
                    <span className="text-xs font-medium">Lotteries</span>
                  </div>
                );
              }

              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab)}
                  className={`flex flex-col items-center space-y-1 p-2 rounded-xl transition-all duration-200 min-w-[64px] ${
                    activeTab === tab.id
                      ? "bg-[#E2531933] text-[#FFFFFF80] shadow-md"
                      : "text-[#FFFFFF80]"
                  }`}
                >
                  <Image
                    src={tab.image}
                    alt={tab.label}
                    width={30}
                    height={30}
                    className={`object-contain transition-all duration-200 ${
                      activeTab === tab.id
                        ? "brightness-0 invert"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  />
                  <span className="text-xs font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
