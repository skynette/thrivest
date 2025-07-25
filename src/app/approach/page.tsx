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
                            Our Approach
                        </h1>
                    </div>
                </div>
            </section>

            {/* Investment Strategy Section */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="max-w-9xl">
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                            At ThriVest Africa, our investment strategy is built to unlock the potential of women-led and women-owned MSMEs across Sub-Saharan Africa. By combining inclusive finance with sustainable impact, we support businesses that drive long-term socio-economic and environmental value.
                        </p>
                    </div>
                </div>
            </section>

            {/* Investment Criteria Section */}
            <section className="relative py-16 md:py-24 bg-white">
                <div className="absolute inset-0">
                          <div className="relative w-full h-full">
                            <Image 
                              src="/images/our approach/invt_crit1.jpg" 
                              alt="Investment Criteria"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="absolute inset-0"></div>
                        </div>
                <div className="relative max-w-7xl mx-auto px-6 lg:px-12 ">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        <div className='space-y-8  col-span-2'>
                            <h2 className="text-1xl md:text-2xl lg:text-3xl font-bold text-[#1e3a5f] ">
                                Investment Criteria
                            </h2>
                            <p className="text-lg text-gray-900 mb-6">
                                We invest in businesses that meet the following:
                            </p>
                            <ul className="space-y-4 text-gray-700 text-lg">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-[#539FDA] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Women-led or women-owned or with strong gender representation in leadership or ownership</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-[#539FDA] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Micro, small, and medium-sized enterprises with established operations</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-[#539FDA] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Aligned with ThriVest focus sectors and addressing real market needs</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-[#539FDA] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Registered and active in Sub-Saharan Africa with potential for regional impact</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-[#539FDA] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Revenue generating or viable, with clear paths to profitability and sustainability</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-[#539FDA] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Committed to strong governance, transparency, and ethical practices</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-[#539FDA] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span>Able to deliver measurable impact, including job creation, gender inclusion, environmental sustainability, and social community development</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="relative ">
                            <div >
                                <div className="rounded-2xl overflow-hidden ">
                                    <Image
                                        src="/images/our approach/invt_crit2.png"
                                        alt="Investment Criteria"
                                        width={305}
                                        height={607}
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Investment Process Section */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <h2 className="text-1xl md:text-2xl lg:text-3xl font-bold text-[#1e3a5f] mb-8">
                        Investment Process
                    </h2>
                    <div className="space-y-6 text-gray-700">
                        <p className="text-lg leading-relaxed">
                            Our investment process is intentional, rigorous, and impact-driven, designed to identify and support high-potential women-led and women-owned MSMEs across Sub-Saharan Africa.
                        </p>
                        <p className="text-lg leading-relaxed">
                            We begin by sourcing opportunities through in-depth market research, ecosystem partnerships, and trusted referrals. Promising businesses are screened based on their alignment with our investment criteria, including leadership strength, market relevance, and potential for social and environmental impact. Businesses that meet our strong process criteria are selected for due diligence, including detailed analysis of their operations, financial performance, governance structures, operational efficiency, market positioning, and Environmental, Social, and Governance (ESG) risks. We evaluate commercial viability, scalability, and the ability to deliver long-term, measurable value to both shareholders and stakeholders.
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
                            Post-investment, we maintain close collaboration with portfolio companies, supporting strategy execution, strengthening operational capacity, and tracking impact metrics to ensure transparency, resilience, and sustained value creation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Value Creation Section */}
            <section className="relative py-16 md:py-24 ">
                <div className="absolute inset-0">
                                    <Image
                                        src="/images/about us/corevalues.jpg"
                                        alt="Core Values Background"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-white/0"></div>
                                </div>
                <div className="relative max-w-7xl mx-auto px-6 lg:px-12 bg-white p-8 opacity-85 rounded-xl">
                    <h2 className="text-1xl md:text-2xl lg:text-3xl font-bold mb-8 text-[#1e3a5f]">
                        Value Creation
                    </h2>
                    <p className="text-lg md:text-xl leading-relaxed mb-8">
                        ThriVest Africa is more than a capital provider. We work hands-on with businesses to unlock growth and impact:
                    </p>
                    <ul className="space-y-4 text-lg">
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-[#539fda] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>Tailored technical assistance, mentorship, and coaching</span>
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-[#539fda] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>Access to markets, industry networks, and strategic partnerships</span>
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-[#539fda] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>Operational efficiency and management systems</span>
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-[#539fda] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>ESG integration and gender-inclusive practices</span>
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-[#539fda] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>Governance and institutional strengthening for long-term business sustainability</span>
                        </li>
                    </ul>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Page