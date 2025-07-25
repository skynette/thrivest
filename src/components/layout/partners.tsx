'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";

export const PartnersSection: React.FC = () => {
    const [, setApi] = useState<CarouselApi>();

    // Placeholder for partner logos - replace with actual partner data
    const partners = [
        { id: 1, name: "Partner 1", logo: "/images/our_partners/logo2.png" },
        { id: 2, name: "Partner 2", logo: "/images/our_partners/logo3.png" },
        // { id: 3, name: "Partner 3", logo: "/images/our_partners/logo4.png" },
        // { id: 4, name: "Partner 4", logo: "/images/our_partners/logo5.png" },
        // { id: 5, name: "Partner 5", logo: "/images/our_partners/logo6.png" },
        // { id: 6, name: "Partner 6", logo: "/images/our_partners/logo7.png" },
        // { id: 7, name: "Partner 7", logo: "/images/our_partners/logo8.png" },
        // { id: 8, name: "Partner 8", logo: "/images/our_partners/logo9.png" },
    ];

    return (
        <section className="relative py-16 overflow-hidden">
            {/* Background with partners image */}
            <div className="absolute inset-0">
                <div className="relative w-full h-full">
                    <Image
                        src="/images/partners.jpg"
                        alt="Partners Background"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0"></div>
                {/* Decorative flowers */}
                
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-12">
                    Our Partners
                </h2>

                {/* Partners Carousel */}
                <Carousel
                    setApi={setApi}
                    className="w-full"
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselContent className="-ml-4">
                        {partners.map((partner) => (
                            <CarouselItem key={partner.id} className="pl-4 md:basis-1/3 lg:basis-1/5">
                                <div className="bg-white rounded-lg shadow-lg p-6 h-50 flex items-center justify-center">
                                    {/* Partner Logo Placeholder */}
                                    <div className="w-full h-full flex items-center justify-center relative">
                                        {/* <span className="text-gray-400 text-sm text-center">
                                            {partner.name}
                                        </span> */}
                                        <Image 
                                            className="object-contain md:object-cover" 
                                            alt={partner.name} 
                                            src={partner.logo}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Navigation */}
                    <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg hover:bg-gray-50 text-[#1e3a5f] border-0 h-12 w-12" />
                    <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg hover:bg-gray-50 text-[#1e3a5f] border-0 h-12 w-12" />
                </Carousel>
            </div>
        </section>
    );
};