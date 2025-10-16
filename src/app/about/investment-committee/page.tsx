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
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="w-24 h-1 bg-blue-500 mb-12"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Tai Adetokunbo Oshisanya */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <a href="/about/investment-committee/tai-oshisanya" className="block group/image">
                                <div className="relative w-full h-64 bg-gray-100 cursor-pointer overflow-hidden">
                                    <Image
                                        src="/images/Tai Oshisanya.jpg"
                                        alt="Tai Adetokunbo Oshisanya"
                                        fill
                                        className="object-contain transition-transform duration-300 group-hover/image:scale-105"
                                    />
                                    {/* View Profile Link */}
                                    <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center">
                                        <div className="flex items-center gap-2 text-white font-semibold bg-black/70 px-4 py-2 rounded-full">
                                            <span>View Profile</span>
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-[#1e3a5f]">
                                    Tai Adetokunbo Oshisanya
                                </h3>
                            </div>
                        </div>

                        {/* James Fatimiro */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <a href="/about/investment-committee/james-fatimiro" className="block group/image">
                                <div className="relative w-full h-64 bg-gray-100 cursor-pointer overflow-hidden">
                                    <Image
                                        src="/images/James Fatimiro.jpg"
                                        alt="James Fatimiro"
                                        fill
                                        className="object-contain transition-transform duration-300 group-hover/image:scale-105"
                                    />
                                    {/* View Profile Link */}
                                    <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center">
                                        <div className="flex items-center gap-2 text-white font-semibold bg-black/70 px-4 py-2 rounded-full">
                                            <span>View Profile</span>
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-[#1e3a5f]">
                                    James Fatimiro
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Page
