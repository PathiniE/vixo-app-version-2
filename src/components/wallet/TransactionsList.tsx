"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowUpRight, ArrowDownLeft, Trophy } from "lucide-react";
import { Transaction } from "@/types/wallet";
import Image from "next/image";

interface TransactionsListProps {
  transactions: Transaction[];
}

const TransactionsList: React.FC<TransactionsListProps> = ({ transactions }) => {
  const getTransactionIcon = (type: Transaction['type']) => {
    switch (type) {
      case 'deposit':
        return <Image
                  src={"/wallet/deposit.png"}
                  height={40}
                  width={40}
                  alt="deposit"
                                   
                />;
      case 'lottery_participation':
        return <Image
                  src={"/wallet/withdraw.png"}
                  height={40}
                  width={40}
                  alt="lottery_participation"
                                   
                />;
      case 'withdraw':
        return <Image
                  src={"/wallet/withdraw.png"}
                  height={40}
                  width={40}
                  alt="withdraw"
                                   
                />;
      case 'lottery_winning':
        return <Image
                  src={"/wallet/deposit.png"}
                  height={40}
                  width={40}
                  alt="lottery_winning"
                                   
                />;
      default:
        return <CheckCircle className="text-green-500" size={20} />;
    }
  };

  const getTransactionTitle = (type: Transaction['type']) => {
    switch (type) {
      case 'deposit':
        return 'Deposit';
      case 'lottery_participation':
        return 'Lottery participation';
      case 'withdraw':
        return 'Withdraw';
      case 'lottery_winning':
        return 'Lottery winning';
    }
  };



  return (
    <div className="mt-4">
      {/* Black container background */}
      <div className="bg-black rounded-xl p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white text-lg">Recent Transactions</h3>
          <button className="text-[#FFFFFF80] text-sm">See all</button>
        </div>
        
        {/* Narrower transaction list */}
        <div className="space-y-3">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="bg-[#B2B2B233] rounded-lg p-3 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {getTransactionIcon(transaction.type)}
                <div>
                  <p className="text-white font-medium text-sm">
                    {getTransactionTitle(transaction.type)}
                  </p>
                  <p className="text-gray-400 text-xs">on {transaction.date}</p>
                </div>
              </div>
              
              <p className="font-medium text-sm text-white">
                ${transaction.amount.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionsList;