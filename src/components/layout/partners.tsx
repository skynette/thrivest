'use client';

import { useState } from 'react';
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
        { id: 1, name: "Partner 1", logo: "/images/partners/partner1.png" },
        { id: 2, name: "Partner 2", logo: "/images/partners/partner2.png" },
        { id: 3, name: "Partner 3", logo: "/images/partners/partner3.png" },
        { id: 4, name: "Partner 4", logo: "/images/partners/partner4.png" },
        { id: 5, name: "Partner 5", logo: "/images/partners/partner5.png" },
        { id: 6, name: "Partner 6", logo: "/images/partners/partner6.png" },
        { id: 7, name: "Partner 7", logo: "/images/partners/partner7.png" },
        { id: 8, name: "Partner 8", logo: "/images/partners/partner8.png" },
    ];

    return (
        <section className="relative py-16 overflow-hidden">
            {/* Background with partners image */}
            <div className="absolute inset-0">
                <img
                    src="/images/partners.jpg"
                    alt="Partners Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0"></div>
                {/* Decorative flowers */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <img
                        src="/images/flower-decoration-left.png"
                        alt=""
                        className="absolute bottom-0 left-0 w-64 h-auto opacity-80"
                    />
                    <img
                        src="/images/flower-decoration-right.png"
                        alt=""
                        className="absolute top-0 right-0 w-64 h-auto opacity-80"
                    />
                </div>
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
                                <div className="bg-white rounded-lg shadow-lg p-6 h-32 flex items-center justify-center">
                                    {/* Partner Logo Placeholder */}
                                    <div className="w-full h-full flex items-center justify-center">
                                        <span className="text-gray-400 text-sm text-center">
                                            {partner.name}
                                        </span>
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