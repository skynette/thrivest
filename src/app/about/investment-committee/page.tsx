import React from 'react'
import Image from 'next/image'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Metadata } from 'next'

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
                        {/* Tai Adetokunbo OSHISANYA */}
                        <a href="/about/investment-committee/tai-oshisanya" className="group">
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="relative w-full h-64">
                                    <Image
                                        src="/images/Tai Oshisanya.jpg"
                                        alt="Tai Adetokunbo OSHISANYA"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-2 group-hover:text-[#539FDA] transition-colors">
                                        Tai Adetokunbo OSHISANYA
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-3">
                                        Fellow, Institute of Chartered Accountants of Nigeria (ICAN)
                                    </p>
                                </div>
                            </div>
                        </a>

                        {/* James Fatimiro */}
                        <a href="/about/investment-committee/james-fatimiro" className="group">
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="relative w-full h-64">
                                    <Image
                                        src="/images/James Fatimiro.jpg"
                                        alt="James Fatimiro"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-2 group-hover:text-[#539FDA] transition-colors">
                                        James Fatimiro
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-3">
                                        MBA, FCA
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Page
