import React from 'react'
import Image from 'next/image'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const ImpactResultsPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            
            {/* Hero Section */}
            <section className="relative h-64 overflow-hidden">
                {/* Background with breadcrumb image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/about us/breadcrumb bg.jpg"
                        alt="Our Approach"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Breadcrumb */}
                <div className="relative z-10 h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white">
                            Impact <span className="mx-4 opacity-60">|</span> Our Results
                        </h1>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="relative py-16 md:py-24">
                <div className="absolute inset-0">
                                                        <Image
                                                            src="/images/about us/corevalues.jpg"
                                                            alt="Core Values Background"
                                                            fill
                                                            className="object-cover"
                                                        />
                                                        <div className="absolute inset-0 bg-white/0"></div>
                                                    </div>
                <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
                    
                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
                        
                        {/* Left Column - Impact Metrics */}
                        <div className="bg-[#1e3a5f] rounded-lg p-8 md:p-12 text-white">
                            <div className="space-y-6">
                                <div className="border-b border-blue-400 pb-4">
                                    <h3 className="text-lg font-semibold mb-2">Total Enterprises Supported:</h3>
                                    <p className="text-2xl font-bold text-blue-200">[X]</p>
                                </div>

                                <div className="border-b border-blue-400 pb-4">
                                    <h3 className="text-lg font-semibold mb-2">Countries of Operation:</h3>
                                    <p className="text-blue-200">[List or Map Highlight]</p>
                                </div>

                                <div className="border-b border-blue-400 pb-4">
                                    <h3 className="text-lg font-semibold mb-2">Direct Jobs Created:</h3>
                                    <p className="text-2xl font-bold text-blue-200">[X]</p>
                                </div>

                                <div className="border-b border-blue-400 pb-4">
                                    <h3 className="text-lg font-semibold mb-2">Indirect Jobs:</h3>
                                    <p className="text-2xl font-bold text-blue-200">[X]</p>
                                </div>

                                <div className="border-b border-blue-400 pb-4">
                                    <h3 className="text-lg font-semibold mb-2">% Female Employees Across Portfolio:</h3>
                                    <p className="text-2xl font-bold text-blue-200">[X]%</p>
                                </div>

                                <div className="border-b border-blue-400 pb-4">
                                    <h3 className="text-lg font-semibold mb-2">% Women in Leadership/Board:</h3>
                                    <p className="text-2xl font-bold text-blue-200">[X]%</p>
                                </div>

                                <div className="border-b border-blue-400 pb-4">
                                    <h3 className="text-lg font-semibold mb-2">% Employees Under 30:</h3>
                                    <p className="text-2xl font-bold text-blue-200">[X]%</p>
                                </div>

                                <div className="border-b border-blue-400 pb-4">
                                    <h3 className="text-lg font-semibold mb-2">Capital Raised:</h3>
                                    <p className="text-2xl font-bold text-blue-200">[$X]</p>
                                </div>

                                <div className="border-b border-blue-400 pb-4">
                                    <h3 className="text-lg font-semibold mb-2">Total Revenue generated by MSMEs:</h3>
                                    <p className="text-2xl font-bold text-blue-200">[$X]</p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Tax Contributions by Portfolio Companies:</h3>
                                    <p className="text-2xl font-bold text-blue-200">[$X]</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Visual/Additional Content */}
                        
                    </div>
                    </div>
                </section>
                   

            <Footer />
        </div>
    )
}

export default ImpactResultsPage