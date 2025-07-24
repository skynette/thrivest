import React from 'react'
import Image from 'next/image'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const SDGAlignmentPage = () => {
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
                        className="Impact"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Breadcrumb */}
                <div className="relative z-10 h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                            Impact <span className="mx-4 opacity-60">|</span> SDG Sustainability
                        </h1>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">

                    {/* Introduction */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            ThriVest Africa&apos;s mission directly contributes to five core Sustainable Development Goals.
                        </h2>
                    </div>

                    {/* SDG Goals Grid */}
                    <div className="space-y-16">

                        {/* SDG 1: No Poverty */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="bg-red-500 text-white p-8 rounded-lg">
                                    <div className="flex items-center mb-6">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                                            <span className="text-red-500 text-2xl font-bold">1</span>
                                        </div>
                                        <h3 className="text-2xl font-bold">No Poverty</h3>
                                    </div>
                                    <p className="text-lg leading-relaxed">
                                        We tackle systemic poverty by providing catalytic capital and tailored support to underserved women-led MSMEs across Sub-Saharan Africa. Our interventions enable sustainable livelihoods, inclusive economic participation, and improved household incomes in low-income communities.
                                    </p>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="bg-red-50 rounded-lg p-8 h-full flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-24 h-24 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                                            <span className="text-white text-3xl">🏠</span>
                                        </div>
                                        <p className="text-red-600 font-semibold">End poverty in all its forms everywhere</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SDG 5: Gender Equality */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="bg-orange-50 rounded-lg p-8 h-full flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-24 h-24 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <span className="text-white text-3xl">⚖️</span>
                                    </div>
                                    <p className="text-orange-600 font-semibold">Achieve gender equality and empower all women and girls</p>
                                </div>
                            </div>
                            <div>
                                <div className="bg-orange-500 text-white p-8 rounded-lg">
                                    <div className="flex items-center mb-6">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                                            <span className="text-orange-500 text-2xl font-bold">5</span>
                                        </div>
                                        <h3 className="text-2xl font-bold">Gender Equality</h3>
                                    </div>
                                    <p className="text-lg leading-relaxed">
                                        We are committed to advancing gender equity by investing in women entrepreneurs, promoting inclusive business practices, and supporting leadership pathways for women in business. Our portfolio prioritizes businesses with strong female representation in ownership, leadership, and workforce.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* SDG 8: Decent Work and Economic Growth */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="bg-purple-500 text-white p-8 rounded-lg">
                                    <div className="flex items-center mb-6">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                                            <span className="text-purple-500 text-2xl font-bold">8</span>
                                        </div>
                                        <h3 className="text-2xl font-bold">Decent Work and Economic Growth</h3>
                                    </div>
                                    <p className="text-lg leading-relaxed">
                                        Through enterprise growth and capital access, we catalyze job creation, decent work conditions, and long-term economic opportunity—especially for women and youth. We support businesses that generate sustainable employment and contribute to national productivity.
                                    </p>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="bg-purple-50 rounded-lg p-8 h-full flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-24 h-24 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                                            <span className="text-white text-3xl">💼</span>
                                        </div>
                                        <p className="text-purple-600 font-semibold">Promote sustained, inclusive and sustainable economic growth</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SDG 9: Industry, Innovation and Infrastructure */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="bg-blue-50 rounded-lg p-8 h-full flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <span className="text-white text-3xl">🏭</span>
                                    </div>
                                    <p className="text-blue-600 font-semibold">Build resilient infrastructure, promote inclusive industrialization</p>
                                </div>
                            </div>
                            <div>
                                <div className="bg-blue-600 text-white p-8 rounded-lg">
                                    <div className="flex items-center mb-6">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                                            <span className="text-blue-600 text-2xl font-bold">9</span>
                                        </div>
                                        <h3 className="text-2xl font-bold">Industry, Innovation and Infrastructure</h3>
                                    </div>
                                    <p className="text-lg leading-relaxed">
                                        We back innovative, scalable MSMEs that are building the future of local industries, improving infrastructure resilience, and expanding access to essential goods and services. Our investments foster inclusive industrialization and support entrepreneurial ecosystems.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* SDG 13: Climate Action */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="bg-green-600 text-white p-8 rounded-lg">
                                    <div className="flex items-center mb-6">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                                            <span className="text-green-600 text-2xl font-bold">13</span>
                                        </div>
                                        <h3 className="text-2xl font-bold">Climate Action</h3>
                                    </div>
                                    <p className="text-lg leading-relaxed">
                                        We are committed to supporting climate-resilient growth by ensuring that the businesses we fund adopt sustainable practices. This includes helping portfolio companies transition to renewable energy sources, reduce their carbon footprint, and implement emission tracking systems. Additionally, we invest in climate-smart and clean energy ventures, accelerating Africa&apos;s transition to a low-carbon economy.
                                    </p>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="bg-green-50 rounded-lg p-8 h-full flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-24 h-24 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                            <span className="text-white text-3xl">🌍</span>
                                        </div>
                                        <p className="text-green-600 font-semibold">Take urgent action to combat climate change and its impacts</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div> </section>
            {/* Summary Section */}
            <section className="relative py-16 md:py-8 bg-white">
                <div className="absolute inset-0">
                    <Image
                        src="/images/about us/corevalues.jpg"
                        alt="Core Values Background"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-white/0"></div>
                </div>
                <div className="text-centre relative max-w-7xl mx-auto px-6 lg:px-12 p-8 opacity-85 rounded-xl">

                    <div className="bg-[#1e3a5f] text-white rounded-lg p-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Our Commitment to the SDGs
                        </h2>
                        <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
                            Through our strategic investments and comprehensive support, we are not just funding businesses—we are catalyzing systemic change that contributes to a more equitable, sustainable, and prosperous future for Sub-Saharan Africa.
                        </p>
                    </div>


                </div>
            </section>

            <Footer />
        </div>
    )
}

export default SDGAlignmentPage