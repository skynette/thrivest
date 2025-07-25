'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export const InvestmentSectorsSection: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  
  const sectors = [
    {
      name: "Food and Agribusiness",
      image: "/images/Investment Focus Sectors/Food and Agribusiness.jpg",
      bgColor: "bg-green-500"
    },
    {
      name: "Hospitality", 
      image: "/images/Investment Focus Sectors/Hospitality.jpg",
      bgColor: "bg-pink-500"
    },
    {
      name: "Light Manufacturing",
      image: "/images/Investment Focus Sectors/Manufacturing.jpg", 
      bgColor: "bg-blue-500"
    },
    {
      name: "Health & Wellness",
      image: "/images/Investment Focus Sectors/Healthcare.jpg",
      bgColor: "bg-red-500"
    },
    {
      name: "Technology",
      image: "/images/Investment Focus Sectors/Technology.jpg",
      bgColor: "bg-purple-500"
    },
    {
      name: "Clean Energy & Green Solutions",
      image: "/images/Investment Focus Sectors/Renewable Energy.jpg",
      bgColor: "bg-yellow-500"
    },
    {
      name: "Retail and Consumer Goods",
      image: "/images/Investment Focus Sectors/Retail and Consumer Goods.jpg",
      bgColor: "bg-orange-500"
    }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Calculate how many items to show (groups of 3)
  const groupedSectors = [];
  for (let i = 0; i < sectors.length; i += 3) {
    groupedSectors.push(sectors.slice(i, i + 3));
  }

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background with investment image */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/investment.jpg"
            alt="Investment Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0"></div>
        {/* Flower pattern overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'url("/images/flower-pattern.png")',
          backgroundSize: '200px 200px',
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Investment Focus Sectors
        </h2>
        
        {/* Carousel */}
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {groupedSectors.map((group, groupIndex) => (
              <CarouselItem key={groupIndex} className="pl-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {group.map((sector, index) => (
                    <div
                      key={index}
                      className="relative rounded-3xl overflow-hidden shadow-xl transform transition-transform hover:scale-105"
                      style={{ aspectRatio: '4/3' }}
                    >
                      {/* Sector Image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={sector.image}
                          alt={sector.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      {/* Sector Label */}
                      <div className="absolute top-4 left-4 bg-blue-800 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {sector.name}
                      </div>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <CarouselPrevious className="relative translate-x-0 translate-y-0 bg-white/20 hover:bg-white/30 text-white border-0 h-10 w-10" />
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {groupedSectors.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`transition-all duration-300 ${
                    current === index 
                      ? 'bg-white w-8 h-2 rounded-full' 
                      : 'bg-white/50 w-2 h-2 rounded-full hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide group ${index + 1}`}
                />
              ))}
            </div>
            
            <CarouselNext className="relative translate-x-0 translate-y-0 bg-white/20 hover:bg-white/30 text-white border-0 h-10 w-10" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};