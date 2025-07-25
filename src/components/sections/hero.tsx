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

export const HeroSection: React.FC = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    // Array of slide images with content
    const slides = [
        { 
            src: '/images/slides/slide 1.jpg', 
            alt: 'Slide 1',
            title: 'Transforming the Landscape',
            subtitle: 'for women-led and women-owned MSMEs across Sub-Saharan Africa'
        },
        { 
            src: '/images/slides/slide 2.jpg', 
            alt: 'Slide 2',
            title: 'Channeling Capital',
            subtitle: 'where the mainstream won’t; into women’s potential'
        },
        { 
            src: '/images/slides/slide 3.jpg', 
            alt: 'Slide 3',
            title: 'Capital is just the beginning',
            subtitle: 'We build capacity and open doors Women entrepreneurs deserve more than a cheque'
        },
        { 
            src: '/images/slides/slide 4.jpg', 
            alt: 'Slide 4',
            title: 'Backing Businesses',
            subtitle: 'that deliver both impact and returns'
        },
        { 
            src: '/images/slides/slide 5.jpg', 
            alt: 'Slide 5',
            title: 'More Women at the Table',
            subtitle: 'More women getting funded. Changing the face of capital allocation  and where it flows'
        },
        { 
            src: '/images/slides/slide 6.jpg', 
            alt: 'Slide 6',
            title: 'Empowering Women',
            subtitle: 'uplifting communities, driving systems change'
        },
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
        <section className="relative h-screen min-h-screen overflow-hidden"> {/* Full viewport height */}
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
                        <CarouselItem key={index} className="pl-0 h-full min-h-screen">
                            <div className="absolute w-full h-full min-h-screen bg-[#1e3a5f]">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={slide.src}
                                        fill
                                        className="object-cover"
                                        alt={slide.alt}
                                        priority={index === 0}
                                    />
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Navigation Arrows - Inside Carousel */}
                <CarouselPrevious className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-0 h-10 w-10 sm:h-12 sm:w-12" />
                <CarouselNext className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-0 h-10 w-10 sm:h-12 sm:w-12" />
            </Carousel>

            {/* Light overlay for text visibility */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Hero Content - Centered */}
            <div className="relative z-10 h-full flex items-center justify-item-left px-4">
                <div className="max-w-7xl mx-12 px-6 lg:px-12">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                        {slides[current]?.title?.split(' ').map((word, index) => (
                            <span key={index}>
                                {word}
                                {index === 0 && <br />}
                                {index > 0 && ' '}
                            </span>
                        ))}
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                        {slides[current]?.subtitle}
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