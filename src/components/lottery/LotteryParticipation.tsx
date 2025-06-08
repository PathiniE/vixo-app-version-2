import React, { useState, useEffect } from "react";
import { ChevronLeft, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface LotteryItem {
  id: string;
  prize: string;
  startDate: string;
}

interface LotteryParticipationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lottery: LotteryItem | null;
}

const LotteryParticipation: React.FC<LotteryParticipationModalProps> = ({
  isOpen,
  onClose,
  lottery,
}) => {
  const [totalSeconds, setTotalSeconds] = useState(300); // 5 minutes = 300 seconds
  const [showTokenSelectionAlert, setShowTokenSelectionAlert] = useState(false);
  const [showInsufficientFundsAlert, setShowInsufficientFundsAlert] =
    useState(false);
  const [selectedToken, setSelectedToken] = useState<"USDT" | "VIXO" | null>(
    null
  );

  // Mock user balance
  const [userBalance] = useState({
    USDT: 50, // User has 50 USDT
    VIXO: 1000, // User has 1000 VIXO tokens
  });

  // Mock bet amounts
  const betAmounts = {
    USDT: 100, // Costs 100 USDT to bet
    VIXO: 500, // Costs 500 VIXO to bet
  };

  const TOTAL_TIME = 300;

  useEffect(() => {
    if (!isOpen) {
      setTotalSeconds(300); // Reset to 5 minutes when modal opens
      return;
    }

    const timer = setInterval(() => {
      setTotalSeconds((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  const handleBetNow = () => {
    // Show token selection alert first
    setShowTokenSelectionAlert(true);
  };

  const handleTokenSelection = (token: "USDT" | "VIXO") => {
    setSelectedToken(token);
    setShowTokenSelectionAlert(false);

    // Check if user has enough balance
    const requiredAmount = betAmounts[token];
    const availableBalance = userBalance[token];

    if (availableBalance < requiredAmount) {
      setShowInsufficientFundsAlert(true);
    } else {
      // Proceed with betting
      console.log(`Bet placed for lottery: ${lottery?.id} using ${token}`);
      // Add actual betting logic here
      alert(`Bet successfully placed using ${requiredAmount} ${token}!`);
      onClose();
    }
  };

  const handleDeposit = () => {
    setShowInsufficientFundsAlert(false);
    // Add deposit logic here
    console.log("Redirecting to deposit...");
  };

  const handleUseVIXOTokens = () => {
    setShowInsufficientFundsAlert(false);
    // Check VIXO balance and proceed
    handleTokenSelection("VIXO");
  };

  if (!lottery) return null;

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const formatTime = (time: number) => time.toString().padStart(2, "0");

  // Calculate progress: starts at 0 and goes to 100% as time decreases
  const progress = ((TOTAL_TIME - totalSeconds) / TOTAL_TIME) * 100;
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent
          side="bottom"
          className="bg-[#191919] border-none rounded-t-lg max-h-[90vh] p-0 [&>button]:hidden"
          onPointerDownOutside={onClose}
        >
          <SheetHeader className="p-4">
            <div className="flex items-center justify-between relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-white h-10 w-auto px-2 flex items-center gap-1"
              >
                <ChevronLeft size={20} />
                <span className="text-base">Close</span>
              </Button>
            </div>
          </SheetHeader>

          <div className="flex flex-col items-center justify-center px-6 pb-8 space-y-8">
            {/* Lottery Fund Header */}
            <div className="text-center space-y-2">
              <div className="text-gray-400 text-sm">Lottery Fund</div>
              <div
                className="text-5xl font-bold"
                style={{
                  background: "linear-gradient(to right, #F4B92E, #E25319)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {lottery.prize.split(" ")[0]} USDT
              </div>
              <div className="text-white text-lg">
                Lottery #{lottery.id.padStart(5, "0")}
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="relative">
              {/* Circular Progress Ring */}
              <div className="relative w-48 h-48">
                <svg
                  className="w-full h-full transform -rotate-90"
                  viewBox="0 0 100 100"
                >
                  {/* Black background circle */}
                  <circle cx="50" cy="50" r="40" fill="#000000" />
                  {/* Background circle border */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="transparent"
                    stroke="#333"
                    strokeWidth="2"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="transparent"
                    stroke="#E25319"
                    strokeWidth="3"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-linear"
                  />
                </svg>

                {/* Timer Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-4xl font-bold">
                    {formatTime(minutes)}:{formatTime(seconds)}
                  </div>
                </div>
              </div>
            </div>

            {/* Bet Now Button */}
            <Button
              onClick={handleBetNow}
              className="bg-[#E2531933] text-[#E25319] px-10 py-4 text-lg font-semibold rounded-lg hover:bg-[#E2531955] transition-colors"
            >
              Bet Now
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      {/* Token Selection Alert */}
      <AlertDialog
        open={showTokenSelectionAlert}
        onOpenChange={setShowTokenSelectionAlert}
      >
        <AlertDialogContent className="bg-[#2a2a2a] border-none h-52 text-white max-w-sm">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowTokenSelectionAlert(false)}
            className="absolute right-2 top-2 text-gray-400 hover:text-white h-10 w-10"
          >
            <X size={20} />
          </Button>

          <div className="flex gap-4 justify-center py-4">
            <Button
              onClick={() => handleTokenSelection("USDT")}
              className="bg-[#E2531933]  text-[#E25319]  px-8 py-14 text-lg font-semibold rounded-lg border-2 border-[#E25319]"
            >
              USDT
            </Button>
            <Button
              onClick={() => handleTokenSelection("VIXO")}
              variant="outline"
              className="bg-[#FFFFFF33] flex flex-col text-white px-8 py-14 text-lg font-semibold rounded-lg border-2"
            >
              VIXO
              <span className="text-lg">Tokens</span>
            </Button>
          </div>
        </AlertDialogContent>
      </AlertDialog>

      {/* Insufficient Funds Alert */}
      <AlertDialog
        open={showInsufficientFundsAlert}
        onOpenChange={setShowInsufficientFundsAlert}
      >
        <AlertDialogContent className="bg-[#2a2a2a] border-none text-white max-w-sm">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowInsufficientFundsAlert(false)}
            className="absolute right-2 top-2 text-gray-400 hover:text-white h-8 w-8"
          >
            <X size={20} />
          </Button>
          <AlertDialogHeader>
            <AlertDialogDescription className="text-center text-lg text-[#FFFFFF80] mt-2">
              You don't have enough {selectedToken} to place a bet in this
              lottery!
              <br />
              <span className="text-sm">
                Please deposit funds to recharge your wallet.
              </span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex-col flex items-center justify-center">
            <Button
              onClick={handleDeposit}
              className="bg-[#E2531933]  text-[#E25319] py-5 px-6 text-xl"
            >
              Deposit
            </Button>
            <span className="text-center text-[#FFFFFF80] text-sm mt-1">or</span>
            <Button
              onClick={handleUseVIXOTokens}
              className="bg-transparent text-[#FFFFFF80] underline"
            >
              Use VIXO Tokens
            </Button>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default LotteryParticipation;
