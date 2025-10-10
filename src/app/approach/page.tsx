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

            {/* Investment Committee Section */}
            <section id="investment-committee" className="py-16 md:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <h2 className="text-1xl md:text-2xl lg:text-3xl font-bold text-[#1e3a5f] mb-4">
                        Investment Committee
                    </h2>
                    <div className="w-24 h-1 bg-blue-500 mb-12"></div>

                    <div className="space-y-12">
                        {/* Mrs. Tai Adetokunbo OSHISANYA */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                <div className="lg:col-span-1 p-6 flex flex-col items-center justify-start bg-gray-50">
                                    <div className="relative w-48 h-48 mb-4 rounded-full overflow-hidden">
                                        <Image
                                            src="/images/Tai Oshisanya.jpg"
                                            alt="Mrs. Tai Adetokunbo OSHISANYA"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1e3a5f] text-center mb-2">
                                        Mrs. Tai Adetokunbo OSHISANYA
                                    </h3>
                                    <p className="text-gray-600 text-center text-sm">
                                        Fellow, Institute of Chartered Accountants of Nigeria (ICAN)
                                    </p>
                                </div>
                                <div className="lg:col-span-2 p-6 space-y-4 text-gray-700">
                                    <p className="leading-relaxed">
                                        Tai Oshisanya is the former Executive Director, Finance & Control, and Chief Financial Officer of TotalEnergies EP Nigeria (TEPNG), being its second female Director on the Board and the first Nigerian female CFO of an International Oil & Gas Company in Nigeria. She served from 2018 until her mandatory retirement in March 2022 after 35 years meritorious service to the Company and the TotalEnergies Group.
                                    </p>
                                    <p className="leading-relaxed">
                                        Tai is a Chartered Accountant by profession and had been appointed as Managing Director, and later as Non-Executive Director, of TEPNG&apos;s Closed Pension Fund Administration company, Executive Director of TotalEnergies Upstream Nigeria Ltd (TUPNI), and Senior Executive (Cadre Dirigéants G-300) of TotalEnergies SE, France. She has also worked in TotalEnergies affiliates in the Netherlands, France & South Africa in various Finance & leadership capacities.
                                    </p>
                                    <p className="leading-relaxed">
                                        She possesses 35 years oil & gas experience (18 of which were at Management and senior management level and 8 years at Board level) in the areas of Finance, Internal Controls, SAP ERP, Budget Monitoring & Performance Reporting, Strategy and Board Governance, Joint Venture Finance, Treasury & Cash Management, Pension Fund Administration, Insurance, Project Management, Change Management and Coaching & Mentoring. In addition, she has 4 years&apos; audit experience with the then Deloitte Haskins & Sells Nigeria.
                                    </p>
                                    <p className="leading-relaxed">
                                        Tai holds a B.Sc. degree in Accounting from the University of Lagos, is a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN), an Associate of the Chartered Institute of Taxation of Nigeria (CITN) and holds a Diploma in French from Alliance Française.
                                    </p>
                                    <p className="leading-relaxed">
                                        Since retirement, Tai sits as Independent Non-Executive Director on the Boards of FirstBank Guinea (a subsidiary of First Bank of Nigeria Plc), The CreditVille Group Ltd. (a fintech organisation), and Gloryland Trust International (an elderly recreational NGO). She is a member of GAIA Africa and an Associate member of WIMBIZ, mentoring younger women.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* James Fatimiro */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                <div className="lg:col-span-1 p-6 flex flex-col items-center justify-start bg-gray-50">
                                    <div className="relative w-48 h-48 mb-4 rounded-full overflow-hidden">
                                        <Image
                                            src="/images/James Fatimiro.jpg"
                                            alt="James Fatimiro"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1e3a5f] text-center mb-2">
                                        James Fatimiro
                                    </h3>
                                    <p className="text-gray-600 text-center text-sm">
                                        MBA, FCA
                                    </p>
                                </div>
                                <div className="lg:col-span-2 p-6 space-y-4 text-gray-700">
                                    <p className="leading-relaxed">
                                        James Fatimiro is a seasoned financial expert, policy strategist, and governance professional with over three decades of distinguished service across Nigeria&apos;s public and financial sectors. He served as a Director at the Central Bank of Nigeria (CBN), where he was instrumental in shaping and supervising national monetary policy, financial regulation, and economic strategy.
                                    </p>
                                    <p className="leading-relaxed">
                                        Renowned for his institutional leadership and integrity, James has made significant contributions to Nigeria&apos;s financial system stability, banking sector reforms, and regulatory capacity building. His core expertise spans investment strategy, financial inclusion, risk governance, corporate regulation, and macroeconomic management.
                                    </p>
                                    <p className="leading-relaxed">
                                        He has been deeply involved in high-level policy formulation, inter-agency collaboration, and international financial cooperation—representing Nigeria at several global forums. His strategic insights have consistently enhanced operational efficiency, institutional resilience, and long-term sustainability in both public and private financial institutions.
                                    </p>
                                    <p className="leading-relaxed">
                                        He holds an Advanced Diploma in Accountancy from the Federal Polytechnic, Idah, and an MBA in Finance and Accounts from Ambrose Alli University. He earned a Certificate in Microfinance from Ateneo de Manila University in the Philippines, and holds certifications as a Bank Examiner from the Federal Deposit Insurance Corporation (FDIC) in the USA, in Risk-Based Supervision and in Financial Policy Management from the Central Bank of Nigeria.
                                    </p>
                                    <p className="leading-relaxed">
                                        Professionally, James is a Fellow (FCA) of the Institute of Chartered Accountants of Nigeria since 1991. He is also an Associate of the Chartered Institute of Taxation of Nigeria (ACIT) and a Member of the Chartered Institute of Management.
                                    </p>
                                    <p className="leading-relaxed">
                                        James Fatimiro brings to any board a rare blend of analytical excellence, ethical leadership, and deep understanding of the investment climate, financial governance, and institutional development. He sits on the boards of several organizations across sectors including microfinance banking, agriculture, transportation, and financial and management consultancy.
                                    </p>
                                </div>
                            </div>
                        </div>
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