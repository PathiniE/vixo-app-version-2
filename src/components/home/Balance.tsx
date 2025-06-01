// components/Balance.tsx
'use client';

import React from 'react';

interface BalanceProps {
  amount: string;
}

const Balance: React.FC<BalanceProps> = ({ amount }) => {
  return (
    <div className="text-center">
      <p className="text-gray-400 text-sm mb-2">Your Balance:</p>
      <div className="flex items-center justify-center space-x-2">
        <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
        <span className="text-4xl font-bold">{amount}</span>
      </div>
    </div>
  );
};

export default Balance;