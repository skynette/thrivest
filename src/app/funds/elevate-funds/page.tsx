import React from 'react'
import Image from 'next/image'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const ElevateFundsPage = () => {
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
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                            Funds <span className="mx-4 opacity-60">|</span> Elevate Fund
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
                <div className="relative max-w-7xl mx-auto px-6 lg:px-12 mb-12 bg-white p-8 opacity-85 rounded-xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-8">
                        ThriVest Elevate Fund – Growth Investment Strategy
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Left Column */}
                        <div>


                            <div className="space-y-8">
                                {/* Objective */}
                                <div>
                                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">Objective:</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        To partner with established women-led MSMEs to drive expansion, institutional resilience, and deep socio-economic and environmental impact.
                                    </p>
                                </div>

                                {/* Tagline */}
                                <div>
                                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">Tagline:</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Scaling proven women-led and women-owned enterprises for inclusive and sustainable growth.
                                    </p>
                                </div>

                                {/* Fund Description */}
                                <div>
                                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">Fund Description</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        The ThriVest Elevate Fund is our growth-stage investment vehicle supporting mature MSMEs with strong fundamentals and high potential for scale. We provide growth capital and strategic support to accelerate expansion and long-term sustainability.
                                    </p>
                                </div>

                                {/* Fund Philosophy */}
                                <div>
                                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">Fund Philosophy</h3>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Our growth-stage fund is built on a clear belief that established, women-led businesses are powerful engines for inclusive economic transformation. We combine capital with strategic guidance to help them scale sustainably and competitively. Our philosophy is anchored in these core principles:
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-8">
                            {/* Key Features */}
                            <div className="space-y-8">
                                <div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#1e3a5f] mb-4 ">• Investing in Resilience and Impact</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            We partner with women-led MSMEs that have proven their value and are ready to scale. Our goal is to strengthen business resilience while maximizing socio-economic and environmental returns.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">• Gender Lens as a Growth Strategy</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        We see women&apos;s leadership not as a niche, but as a strategic asset. Our investments leverage the performance and innovation advantages of gender-diverse leadership to drive superior outcomes.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">• Structured Growth and Sustainable Systems</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        We support institutional development through governance enhancement, operational efficiency, and ESG integration, ensuring long-term competitiveness and risk management.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">• Long-Term Capital, Strategic Partnership</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        We bring growth capital with a long-term outlook, working closely with founders to support expansion, prepare for exit, and unlock broader market opportunities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="bg-[#1e3a5f] rounded-lg p-8 md:p-12 text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                            INVESTMENT CRITERIA
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <h3 className="text-lg font-bold mb-4">STAGE</h3>
                                <p className="text-l">3+ years of operation with a track record of buriness growth and market traction</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-lg font-bold mb-4">BUSINESS MODEL</h3>
                                <p className="text-l">
                                    Established, revenue-generating, and scalable with solid cash flow and growth potential
                                </p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-lg font-bold mb-4">TICKET SIZE</h3>
                                <p className="text-l">$10,000 to $2,000,000 +</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default ElevateFundsPage