import React, { useState } from 'react';
import { Menu, Users, Info, Crown, Play } from 'lucide-react';

interface BottomNavigationProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab = 'lotteries',
  onTabChange = () => {}
}) => {
  const tabs = [
    { id: 'play', label: 'Play', icon: Play },
    { id: 'tasks', label: 'Tasks', icon: Menu },
    { id: 'lotteries', label: 'Lotteries', icon: Crown },
    { id: 'friends', label: 'Friends', icon: Users },
    { id: 'stats', label: 'Stats', icon: Info }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black xl:hidden">
      <div className="relative">
        {/* Black circular background for elevated lotteries button */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-8">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
            <button
              onClick={() => onTabChange('lotteries')}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
                activeTab === 'lotteries'
                  ? 'bg-orange-500 shadow-lg'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              <Crown className={`w-6 h-6 ${
                activeTab === 'lotteries' ? 'text-white' : 'text-gray-300'
              }`} />
            </button>
          </div>
        </div>

        {/* Main navigation bar */}
        <div className="flex justify-around items-center py-4 px-6 bg-black border-t border-gray-800">
          {tabs.map((tab, index) => {
            if (tab.id === 'lotteries') {
              // Invisible placeholder for lotteries to maintain spacing
              return (
                <div key={tab.id} className="flex flex-col items-center space-y-1 p-3 min-w-[60px] opacity-0">
                  <Crown className="w-5 h-5" />
                  <span className="text-xs font-medium">Lotteries</span>
                </div>
              );
            }
            
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex flex-col items-center space-y-1 p-3 rounded-lg transition-all duration-200 min-w-[60px] ${
                  activeTab === tab.id
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-500 hover:text-gray-300 hover:bg-gray-800/50'
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
  );
};

// Demo component to show the navigation in action
const BottomNavigationDemo = () => {
  const [activeTab, setActiveTab] = useState('lotteries');

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      {/* Main content area */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Bottom Navigation Demo</h2>
          <p className="text-gray-400 mb-6">
            Current active tab: <span className="text-orange-500 font-semibold">{activeTab}</span>
          </p>
          <div className="text-gray-500 text-sm">
            Click on the navigation items below to see the active state changes
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />
      
      {/* Add some bottom padding to account for the fixed navigation */}
      <div className="h-20"></div>
    </div>
  );
};

export default BottomNavigation;