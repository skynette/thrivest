import React from 'react'
import Image from 'next/image'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const Page = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            
            {/* Hero Section */}
            <section className="relative h-64 overflow-hidden">
                <div className="absolute inset-0">
                    <Image 
                        src="/images/our approach/breadcrum_image.jpg" 
                        alt="Our Approach" 
                        fill 
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-blue-600/70"></div>
                </div>
                
                <div className="relative z-10 h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                            Our Approach
                        </h1>
                    </div>
                </div>
            </section>

            {/* Investment Strategy Section */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="max-w-4xl">
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                            At ThriVest Africa, our investment strategy is built to unlock the potential of women-led and women-owned MSMEs across Sub-Saharan Africa. By combining inclusive finance with sustainable impact, we support businesses that drive long-term socio-economic and environmental value.
                        </p>
                    </div>
                </div>
            </section>

            {/* Investment Criteria Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                                Investment Criteria
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                We invest in businesses that meet the following:
                            </p>
                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Women-led or women-owned or with strong gender representation in leadership or ownership</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Small and medium-sized MSMEs with established operations</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Aligned with ThriVest focus sectors and addressing real market needs</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Registered and active in Sub-Saharan Africa with potential for regional impact</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Revenue generating or viable, with clear paths to profitability and sustainability</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Committed to strong governance, transparency, and ethical practices</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Able to deliver measurable impact, including job creation, gender inclusion, environmental sustainability, and social community development</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative">
                            <Image 
                                src="/images/our approach/invt_crit1.jpg"
                                alt="Investment Criteria"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Investment Process Section */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                        Investment Process
                    </h2>
                    <div className="space-y-6 text-gray-700">
                        <p className="text-lg leading-relaxed">
                            Our investment process is intentional, rigorous, and impact-driven, designed to identify and support high-potential women-led and women-owned MSMEs across Sub-Saharan Africa.
                        </p>
                        <p className="text-lg leading-relaxed">
                            We begin by sourcing opportunities through in-depth market research, ecosystem partnerships, and trusted referrals. Promising businesses are screened based on their alignment with our investment criteria, including leadership strength, market relevance, and potential for social and environmental impact. Businesses that meet our strong process criteria are selected for due diligence, including detailed analysis of their operations, financial performance, governance structures, operational efficiency, market positioning, and ESG (Environmental, Social, and Governance) risks. We evaluate commercial viability, scalability, and the ability to deliver long-term, measurable value to both shareholders and stakeholders.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Throughout the investment lifecycle from sourcing to exit, we integrate globally recognized ESG standards, ensuring our portfolio companies are evaluated and held to the highest ethical and social standards.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Following due diligence, we present investment proposals to our Investment Committee for approval.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Once approved, we negotiate and table investment terms to fit both business needs and fund objectives, with clearly defined exit strategies.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Post-investment, we maintain close collaboration with portfolio companies—supporting strategy execution, strengthening operational capacity, and tracking impact metrics to ensure transparency, resilience, and sustained value creation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Value Creation Section */}
            <section className="py-16 md:py-24 bg-[#1e3a5f] text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        Value Creation
                    </h2>
                    <p className="text-lg md:text-xl leading-relaxed mb-8">
                        ThriVest Africa is more than a capital provider. We work hands-on with businesses to unlock growth and impact:
                    </p>
                    <ul className="space-y-4 text-lg">
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>Tailored technical assistance, mentorship, and coaching</span>
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>Access to markets, industry networks, and strategic partnerships</span>
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>Operational efficiency support: improving systems and processes for productivity</span>
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>ESG integration and gender-inclusive practices</span>
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>Governance strengthening for long-term business sustainability</span>
                        </li>
                    </ul>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Page