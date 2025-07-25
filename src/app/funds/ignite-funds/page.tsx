import React from 'react'
import Image from 'next/image'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const IgniteFundsPage = () => {
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
                            Funds <span className="mx-4 opacity-60">|</span> Ignite Fund
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
                <div className="relative max-w-7xl mx-auto px-6 lg:px-12 mb-6 bg-white p-8 opacity-85 rounded-xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-8">
                        ThriVest Ignite Fund
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Left Column */}
                        <div>
                            <div className="space-y-8">
                                {/* Objective */}
                                <div>
                                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">Objective:</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        To support startup and early-stage, women-led MSMEs across Africa with catalytic capital, strategic guidance, and ecosystem access to unlock innovation, inclusion, and sustainable growth.
                                    </p>
                                </div>

                                {/* Tagline */}
                                <div>
                                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">Tagline:</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Fueling bold ideas, empowering women to lead Africa&apos;s next wave of innovation from the ground up.
                                    </p>
                                </div>

                                {/* Fund Description */}
                                <div>
                                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">Fund Description</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        The ThriVest Ignite Fund is our early-stage investment strategy focused on identifying, funding, and scaling high-potential startups led by women. The fund provides catalytic capital alongside strategic partnerships and hands-on support to help visionary entrepreneurs transform bold ideas into scalable businesses. We prioritize startups that are impact-driven, commercially viable, technology-enabled, and committed to solving real-world problems with sustainable business models.
                                    </p>
                                </div>

                                {/* Fund Philosophy */}
                                <div>
                                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">Fund Philosophy</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        We believe early-stage capital, when combined with the right support, can unlock transformational change. The philosophy shapes how we invest and engage with women-led startups:
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-8">
                            {/* Key Features */}
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-4"> <span className='text-[#539fda]'>•&nbsp; &nbsp;</span>Catalyzing Innovation through Inclusion</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        We invest in early-stage, women-led startups solving vital world problems with innovative, inclusive, and locally relevant solutions. Our focus is on unlocking untapped entrepreneurial potential across underserved markets.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-4"><span className='text-[#539fda]'>•&nbsp; &nbsp;</span> Early Capital, Deep Commitment</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        We take calculated early-stage risks and remain actively engaged throughout the startup journey, offering patient capital, operational support, and strategic insight to accelerate growth.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-4"><span className='text-[#539fda]'>•&nbsp; &nbsp;</span> Beyond Capital: Building Strong Foundations</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Our work extends beyond funding. We equip founders with access to networks, mentorship, technical assistance, and investor readiness, laying the groundwork for scalable and sustainable growth.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-[#1e3a5f] "><span className='text-[#539fda]'>•&nbsp; &nbsp;</span> Rooted Locally, Scalable Globally</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        We support ventures that are grounded in African realities but built with the vision and capability to scale regionally and compete globally.
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
                                <p className="text-xl">Seed to Series A</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-lg font-bold mb-4">BUSINESS MODEL</h3>
                                <p className="text-xl">Scalable, inclusive and viable revenue model</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-lg font-bold mb-4">TICKET SIZE</h3>
                                <p className="text-xl">Typically  $10,000-$100,000 </p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>


            <Footer />
        </div>
    )
}

export default IgniteFundsPage