import React from 'react'
import Image from 'next/image'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
    robots: {
        index: false,
        follow: true,
    },
};

const Page = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section */}
            <section className="relative h-64 overflow-hidden">
                {/* Background with breadcrumb image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/about us/breadcrumb bg.jpg"
                        alt="Investment Committee"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Breadcrumb */}
                <div className="relative z-10 h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                            Investment Committee
                        </h1>
                    </div>
                </div>
            </section>

            {/* Investment Committee Section */}


            <section className="relative py-16 md:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="w-24 h-1 bg-blue-500 mb-12"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
                        <div className="absolute inset-0">
                            <Image
                                src="/images/about us/corevalues.jpg"
                                alt="Core Values Background"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-white/0"></div>
                        </div>
                        {/* Tai Adetokunbo Oshisanya */}
                        <div className="rounded-4xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <a href="/about/investment-committee/tai-oshisanya" className="block group/image">
                                <div className="relative w-full h-107 cursor-pointer overflow-hidden">
                                    <Image
                                        src="/images/Tai Oshisanya.jpg"
                                        alt="Tai Adetokunbo Oshisanya"
                                        fill
                                        className="object-contain transition-transform duration-300 group-hover/image:scale-105" />
                                    {/* View Profile Link */}
                                    <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center justify-center">
                                        <h3 className="md:text-sm lg:text-xl text-xl font-bold text-white lg:text-white md:text-[#1e3a5f]">Tai Adetokunbo Oshisanya</h3>
                                        <div className="lg:text-white md:text-[#1e3a5f] flex items-center gap-2 text-white text-xl md:text-sm lg:text-xl rounded-full">
                                            <span>View Profile</span>
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* James Fatimiro */}
                        <div className="rounded-4xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <a href="/about/investment-committee/james-fatimiro" className="block group/image">
                                <div className="relative w-full h-107 cursor-pointer overflow-hidden">
                                    <Image
                                        src="/images/James Fatimiro.jpg"
                                        alt="James Fatimiro"
                                        fill
                                        className="object-contain transition-transform duration-300 group-hover/image:scale-105"
                                    />
                                    {/* View Profile Link */}
                                    <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center justify-center">
                                        <h3 className="lg:text-xl md:text-sm text-xl font-bold text-white lg:text-white md:text-[#1e3a5f]">James Fatimiro</h3>
                                        <div className="lg:text-white md:text-[#1e3a5f] flex items-center gap-2 text-white text-xl md:text-sm lg:text-xl rounded-full">
                                            <span> View Profile</span>
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Page
