export interface Transaction {
  id: string;
  type: 'deposit' | 'lottery_participation' | 'withdraw' | 'lottery_winning';
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'failed';
}

export interface WalletData {
  balance: number;
  tokens: number;
  recentTransactions: Transaction[];
}