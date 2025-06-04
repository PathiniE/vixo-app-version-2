'use client'
import React from 'react';
import { Menu, Users, Info, Crown, Play } from 'lucide-react';

interface BottomNavigationProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab = 'lotteries',
  onTabChange = () => {}
}) => {
  // Navigation configuration with updated paths
  const navigationPages = {
    play: '/play',
    tasks: '/tasks',
    lotteries: '/pages/lottery', // Updated path for lottery page
    friends: '/friends',
    stats: '/stats'
  };

  const tabs = [
    { id: 'play', label: 'Play', icon: Play, path: navigationPages.play },
    { id: 'tasks', label: 'Tasks', icon: Menu, path: navigationPages.tasks },
    { id: 'lotteries', label: 'Lotteries', icon: Crown, path: navigationPages.lotteries },
    { id: 'friends', label: 'Friends', icon: Users, path: navigationPages.friends },
    { id: 'stats', label: 'Stats', icon: Info, path: navigationPages.stats }
  ];

  const handleTabClick = (tab: any) => {
    onTabChange(tab.id);
    
    // Navigation logic - choose one based on your routing setup:
    
    // For Next.js App Router (recommended if using Next.js):
    // import { useRouter } from 'next/navigation';
    // const router = useRouter();
    // router.push(tab.path);
    
    // For React Router:
    // import { useNavigate } from 'react-router-dom';
    // const navigate = useNavigate();
    // navigate(tab.path);
    
    // For simple client-side routing:
    if (typeof window !== 'undefined') {
      window.location.href = tab.path;
    }
    
    console.log(`Navigating to: ${tab.path}`);
  };

  const handleLotteriesClick = () => {
    const lotteriesTab = { id: 'lotteries', path: navigationPages.lotteries };
    handleTabClick(lotteriesTab);
  };

  return (
    <div className="fixed bottom-6 left-4 right-4 z-50">
      <div className="relative">
        {/* Elevated lotteries button with black background circle */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-8">
          <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
            <button
              onClick={() => handleTabClick({ id: 'lotteries', path: navigationPages.lotteries })}
              className="w-16 h-16 rounded-full bg-orange-500 flex flex-col items-center justify-center shadow-lg hover:bg-orange-600 transition-all duration-200"
            >
              <Crown className="w-5 h-5 text-white mb-1" />
              <span className="text-[10px] font-medium text-white leading-none">Lotteries</span>
            </button>
          </div>
        </div>

        {/* Main navigation bar */}
        <div className="bg-black rounded-2xl shadow-xl">
          <div className="flex justify-around items-center py-4 px-4">
            {tabs.map((tab) => {
              if (tab.id === 'lotteries') {
                // Invisible placeholder for lotteries to maintain spacing
                return (
                  <div key={tab.id} className="flex flex-col items-center space-y-1 p-2 min-w-[64px] opacity-0">
                    <Crown className="w-5 h-5" />
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
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
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