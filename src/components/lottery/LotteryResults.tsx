"use client";
import React, { useState } from "react";
import { Trophy } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

interface ResultItem {
  id: string;
  username: string;
  lotteryNumber: string;
  avatar?: string;
  avatarFallback: string;
  isWinner?: boolean;
}

interface LotteryResultsProps {
  results?: ResultItem[];
}

const LotteryResults: React.FC<LotteryResultsProps> = ({
  results = [
    {
      id: "1",
      username: "user_598***5**",
      lotteryNumber: "#00001",
      avatarFallback: "U1",
      isWinner: false,
    },
    {
      id: "2",
      username: "user_598***5**",
      lotteryNumber: "#00001",
      avatarFallback: "U2",
      isWinner: false,
    },
    {
      id: "3",
      username: "user_598***5**",
      lotteryNumber: "#00001",
      avatarFallback: "U3",
      isWinner: false,
    },
    {
      id: "4",
      username: "user_598***5**",
      lotteryNumber: "#00001",
      avatarFallback: "U4",
      isWinner: false,
    },
    {
      id: "5",
      username: "user_598***5**",
      lotteryNumber: "#00001",
      avatarFallback: "U5",
      isWinner: false,
    },
    {
      id: "6",
      username: "user_598***5**",
      lotteryNumber: "#00001",
      avatarFallback: "U6",
      isWinner: false,
    },
  ],
}) => {
  const myWinnings = results.filter((result) => result.isWinner);

  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <Image
        src="/lottery/fox.png"
        alt="Fox Character"
        width={80}
        height={80}
      />

      <h3 className="text-white text-sm mb-1 mt-2">
        No winnings available yet.
      </h3>
    </div>
  );

  const ResultsList = ({ items }: { items: ResultItem[] }) => (
    <div className="space-y-2 p-4">
      {items.map((result, index) => (
        <div
          key={result.id}
          className="flex items-center p-4 rounded-lg bg-[#070707]"
        >
          {/* Avatar */}
          <Avatar className="w-10 h-10 mr-3">
            <AvatarImage src={result.avatar} alt={result.username} />
            <AvatarFallback className="text-sm">
              {result.avatarFallback}
            </AvatarFallback>
          </Avatar>

          {/* User Info */}
          <div className="flex-1">
            <div className="text-base">
              <span className="text-white">
                {result.isWinner ? "You" : result.username}
              </span>
              <span className="text-white ml-2">
                {result.isWinner ? "won" : "just won"} Lottery{" "}
                {result.lotteryNumber}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-[#191919] min-h-screen">
      <div className="max-w-md mx-auto">
        <Tabs defaultValue="results" className="w-full">
          <TabsList className="flex w-full bg-transparent rounded-none h-10 gap-6 justify-start">
            <TabsTrigger
              value="results"
              className="relative bg-transparent text-white text-xl shadow-none data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none pb-3 data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-1/2 data-[state=active]:after:-translate-x-1/2 data-[state=active]:after:w-8 data-[state=active]:after:h-0.5 data-[state=active]:after:bg-[#E25319] data-[state=active]:after:rounded-full"
            >
              Results
            </TabsTrigger>
            <TabsTrigger
              value="my-winnings"
              className="relative bg-transparent text-white text-xl shadow-none data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none pb-3 data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-1/2 data-[state=active]:after:-translate-x-1/2 data-[state=active]:after:w-8 data-[state=active]:after:h-0.5 data-[state=active]:after:bg-[#E25319] data-[state=active]:after:rounded-full"
            >
              My Winnings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="results" className="mt-0">
            <div className="bg-[#191919]">
              <ResultsList items={results} />
            </div>
          </TabsContent>

          <TabsContent value="my-winnings" className="mt-0">
            <div className="bg-[#191919]">
              {myWinnings.length > 0 ? (
                <ResultsList items={myWinnings} />
              ) : (
                <EmptyState />
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LotteryResults;