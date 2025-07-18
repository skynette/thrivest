import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const ImpactResultsPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            
            {/* Hero Section */}
            <section className="relative h-64 overflow-hidden">
                <div className="absolute inset-0">
                    <Image 
                        src="/images/Fund/bottomimg.png" 
                        alt="Impact - Our Results" 
                        fill 
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-blue-500/70"></div>
                </div>
                
                <div className="relative z-10 h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
                        <div className="text-white">
                            {/* Navigation Links */}
                            <div className="flex items-center space-x-4 text-sm mb-4">
                                <Link href="/impact/sdg-alignment" className="hover:text-blue-200 transition-colors">
                                    Our SDG Alignment
                                </Link>
                                <Link href="/impact/case-studies" className="hover:text-blue-200 transition-colors">
                                    Case Studies
                                </Link>
                                <Link href="/impact/impact-report" className="hover:text-blue-200 transition-colors">
                                    Impact Report
                                </Link>
                            </div>
                            
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                                Impact | Our Results
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                        <div className="bg-blue-100 rounded-lg p-8 md:p-12">
                            <div className="h-full flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-32 h-32 bg-blue-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                                        <span className="text-blue-600 text-2xl font-bold">📊</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                        Visual Impact Representation
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        This space can be used for charts, graphs, or visual representations of the impact metrics shown in the left column.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Impact Information */}
                    <div className="mt-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Our Impact Journey
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Through strategic investments and dedicated support, we continue to empower women-led MSMEs across Sub-Saharan Africa, creating sustainable economic impact and fostering inclusive growth.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-white text-xl font-bold">🌱</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Economic Growth</h3>
                                <p className="text-gray-600">
                                    Supporting businesses that drive local economic development and create sustainable employment opportunities.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-white text-xl font-bold">👥</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Gender Inclusion</h3>
                                <p className="text-gray-600">
                                    Advancing gender equality through investments in women-led enterprises and inclusive business practices.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-white text-xl font-bold">🌍</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Environmental Impact</h3>
                                <p className="text-gray-600">
                                    Promoting sustainable business practices and environmental responsibility across our portfolio.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default ImpactResultsPage