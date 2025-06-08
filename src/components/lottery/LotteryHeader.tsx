// // src/components/lottery/LotteryHeader.tsx
// import React from "react";
// import { ChevronLeft } from "lucide-react";
// import Image from "next/image";

// interface LotteryHeaderProps {
//   onBack?: () => void;
//   balance?: string;
// }

// const LotteryHeader: React.FC<LotteryHeaderProps> = ({
//   onBack = () => window.history.back(),
//   balance = "0.00",
// }) => {
//   return (
//     <>
//     <div className="flex items-center justify-between py-4 pt-12">
//       {/* Back Button */}
//       <button
//         onClick={onBack}
//         className="flex items-center space-x-2 text-white"
//       >
//         <ChevronLeft size={24} />
//         <span className="text-base">Back</span>
//       </button>

//       {/* Title */}
//       <h1 className="text-white text-lg">Wallet</h1>

//       {/* Balance */}
//       <div className="flex items-center space-x-2 bg-[#E2531933] p-2 rounded-lg">
//         <Image
//           src={"/lottery/gold-coin.png"}
//           height={22}
//           width={22}
//           alt="coins"
//         />
//         <span className="text-[#E25319]">{balance}</span>
//       </div>
     
//     </div>
//      <div className="w-full h-32 relative overflow-hidden rounded-lg shadow-lg" >
//         <Image
//           src={"/lottery/vixo-cover-photo.png"}
//           fill
//           className="object-cover"
//           alt="Vixo Verse"
//         />
//       </div>
//       </>
//   );
// };

// export default LotteryHeader;



// src/components/lottery/LotteryHeader.tsx
import React, { useEffect, useState } from "react";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

interface LotteryHeaderProps {
  onBack?: () => void;
  balance?: string;
}

const LotteryHeader: React.FC<LotteryHeaderProps> = ({
  onBack = () => window.history.back(),
  balance = "0.00",
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Array of same image for now - you can replace with different images later
  const carouselImages = [
    "/lottery/vixo-cover-photo.png",
    "/lottery/vixo-cover-photo.png",
    "/lottery/vixo-cover-photo.png",
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Auto-scroll functionality
    const interval = setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [api]);

  return (
    <>
      <div className="flex items-center justify-between py-4 pt-12">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-white"
        >
          <ChevronLeft size={24} />
          <span className="text-base">Back</span>
        </button>

        {/* Title */}
        <h1 className="text-white text-lg">Wallet</h1>

        {/* Balance */}
        <div className="flex items-center space-x-2 bg-[#E2531933] p-2 rounded-lg">
          <Image
            src={"/lottery/gold-coin.png"}
            height={22}
            width={22}
            alt="coins"
          />
          <span className="text-[#E25319]">{balance}</span>
        </div>
      </div>

      {/* Infinite Carousel */}
      <div className="w-full h-32 relative">
        <Carousel
          setApi={setApi}
          className="w-full h-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="h-32 -ml-0">
            {carouselImages.map((image, index) => (
              <CarouselItem key={index} className="h-32 pl-0">
                <div className="w-full h-full relative overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={image}
                    fill
                    className="object-cover"
                    alt={`Vixo Verse ${index + 1}`}
                    priority={index === 0}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Hide default navigation buttons */}
          <CarouselPrevious className="hidden" />
          <CarouselNext className="hidden" />
        </Carousel>

        {/* Carousel Indicators - Overlaid on image */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2  flex justify-center space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all  duration-300 ${
                index === current 
                  ? "bg-white shadow-lg" 
                  : "bg-white/50 hover:bg-white/70 "
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default LotteryHeader;