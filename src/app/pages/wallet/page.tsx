"use client";

import React from "react";
import WalletHeader from "@/components/wallet/WalletHeader";
import BalanceCard from "@/components/wallet/BalanceCard";
import RechargeSection from "@/components/wallet/Recharge";
import TransactionsList from "@/components/wallet/TransactionsList";
import { WalletData } from "@/types/wallet";

const WalletPage: React.FC = () => {
  // Mock data - replace with actual API call
  const walletData: WalletData = {
    balance: 0,
    tokens: 0,
    recentTransactions: [
      {
        id: '1',
        type: 'deposit',
        amount: 20.00,
        date: '04/03/05',
        status: 'completed'
      },
      {
        id: '2',
        type: 'lottery_participation',
        amount: 20.00,
        date: '04/03/05',
        status: 'completed'
      },
      {
        id: '3',
        type: 'withdraw',
        amount: 20.00,
        date: '04/03/05',
        status: 'completed'
      },
      {
        id: '4',
        type: 'lottery_winning',
        amount: 20.00,
        date: '04/03/05',
        status: 'completed'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#191919] flex flex-col px-6">
      <WalletHeader />
      <BalanceCard balance={walletData.balance} tokens={walletData.tokens} />
      <RechargeSection />
      <TransactionsList transactions={walletData.recentTransactions} />
    </div>
  );
};

export default WalletPage;
