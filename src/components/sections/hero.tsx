'use client';

import { useState, useEffect } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";

export const HeroSection: React.FC = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    // Array of slide images
    const slides = [
        { src: '/images/Slide 1.jpg', alt: 'Slide 1' },
        { src: '/images/Slide 2.jpg', alt: 'Slide 2' },
        { src: '/images/Slide 3.jpg', alt: 'Slide 3' },
        { src: '/images/Slide 4.jpg', alt: 'Slide 4' },
        { src: '/images/Slide 5.jpg', alt: 'Slide 5' },
        { src: '/images/Slide 6.jpg', alt: 'Slide 6' },
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

    // Auto-play functionality
    useEffect(() => {
        if (!api) {
            return;
        }

        const interval = setInterval(() => {
            api.scrollNext();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [api]);

    return (
        <section className="relative h-[calc(100vh-80px)] overflow-hidden"> {/* Subtract header height */}
            {/* Carousel Background */}
            <Carousel
                setApi={setApi}
                className="absolute inset-0 w-full h-full"
                opts={{
                    align: "start",
                    loop: true,
                }}
            >
                <CarouselContent className="h-full -ml-0">
                    {slides.map((slide, index) => (
                        <CarouselItem key={index} className="pl-0 h-full">
                            <div className="relative w-full h-full">
                                {/* Using img tag for better debugging */}
                                <img
                                    src={slide.src}
                                    alt={slide.alt}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        console.error(`Failed to load image: ${slide.src}`);
                                        // Fallback to a solid color if image fails to load
                                        e.currentTarget.style.display = 'none';
                                    }}
                                />
                                {/* Fallback background */}
                                <div
                                    className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600 to-blue-800"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Navigation Arrows - Inside Carousel */}
                <CarouselPrevious className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-0 h-10 w-10 sm:h-12 sm:w-12" />
                <CarouselNext className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-0 h-10 w-10 sm:h-12 sm:w-12" />
            </Carousel>

            {/* Dark overlay for text visibility */}
            <div className="absolute inset-0 bg-[#1e3a5f]/70 backdrop-blur-sm"></div>

            {/* Hero Content - Centered */}
            <div className="relative z-10 h-full flex items-center justify-center px-4">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                        Transforming
                        <br />
                        The Landscape
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                        for women-led and women-owned
                        <br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>
                        MSMEs across Sub-Saharan Africa
                    </p>
                </div>
            </div>

            {/* Carousel Dots Indicator */}
            <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={`transition-all duration-300 ${current === index
                                ? 'bg-white w-6 sm:w-8 h-2 sm:h-3 rounded-full'
                                : 'bg-white/50 w-2 sm:w-3 h-2 sm:h-3 rounded-full hover:bg-white/75'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

        </section>
    );
};