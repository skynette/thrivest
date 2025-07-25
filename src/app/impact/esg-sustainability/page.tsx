import React from 'react'
import Image from 'next/image'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'

const ESGSustainabilityPage = () => {
    return (
        <div className="min-h-screen bg-white">
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
                            Impact <span className="mx-4 opacity-60">|</span> ESG & Sustainability
                        </h1>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">

                    {/* Why ESG Matters */}
                    <div className="mb-16">
                        <h2 className="text-1xl md:text-2xl lg:text-3xl font-bold text-[#10386c] mb-8">
                            Why ESG Matters
                        </h2>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Environmental, Social, and Governance factors are at the heart of responsible investing. We believe that businesses that operate sustainably, inclusively, and ethically are more resilient, more innovative, and ultimately more successful.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Our ESG commitment goes beyond compliance, it&apos;s about partnering with enterprises that generate long-term value not only for shareholders but for society and the planet. We prioritize investments that deliver measurable outcomes, from improving livelihoods and advancing gender equity to driving climate resilience and transparent governance.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Where ESG gaps exist, we work closely with businesses to close them through structured action plans, technical assistance, and hands-on engagement.
                            </p>
                        </div>
                    </div>

                    {/* Our ESG Framework */}
                    <div className="mb-16 bg-white rounded-lg p-8 shadow-sm">
                        <h2 className="text-1xl md:text-2xl lg:text-3xl font-bold text-[#10386c] mb-8">
                            Our ESG Framework
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Our ESG framework is a practical, structured approach that guides how we assess, invest in, and support businesses. It is designed to:
                        </p>
                        <ul className="space-y-4 text-lg text-gray-700 mb-6">
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#539fda] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                <span>Identify ESG risks and red flags early during due diligence</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#539fda] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                <span>Highlight impact potential across environmental, social, and governance areas</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#539fda] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                <span>Uncover opportunities for operational improvement and value creation</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#539fda] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                <span>Ensure portfolio alignment with international best practices and local regulations</span>
                            </li>
                        </ul>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            This framework is operationalized through our Environmental and Social Management System (ESMS), which defines the tools, procedures, and responsibilities for ESG integration across the investment lifecycle.
                        </p>
                    </div>

                    {/* ESG in Due Diligence */}
                    <div className="mb-16">
                        <h2 className="text-1xl md:text-2xl lg:text-3xl font-bold text-[#10386c] mb-8">
                            ESG in Due Diligence
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            We embed ESG considerations into the core of our due diligence process to ensure that investment decisions are responsible from the outset.
                        </p>
                        <ul className="space-y-4 text-lg text-gray-700 mb-6">
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#539fda] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                <span>All prospective investees undergo ESG screening to assess compliance, risks, and impact gaps using international and local benchmarks.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#539fda] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                <span>We evaluate ESG performance as an integral part of our assessment, focusing on how businesses operate sustainably, treat employees and suppliers fairly, engage meaningfully with communities, and maintain strong governance, transparency, and ethical accountability.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#539fda] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                <span>When significant ESG risks or gaps are identified, we require the development of a formal Environmental and Social Action Plan (ESAP); a targeted roadmap outlining specific actions, timelines, and responsibilities to address shortcomings and achieve compliance. In some cases, investment is deferred until the ESAP is adopted and early milestones are met.</span>
                            </li>
                        </ul>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Post-investment, portfolio companies are expected to report on ESG performance and demonstrate continuous improvement.
                        </p>
                    </div>

                    {/* Climate-Aligned Investment Strategy */}
                    <div className="mb-16 bg-blue-50 rounded-lg p-8">
                        <h2 className="text-1xl md:text-2xl lg:text-3xl font-bold text-[#10386c] mb-8">
                            Climate-Aligned Investment Strategy
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            We are committed to supporting businesses that mitigate climate change and build environmental resilience. Our approach includes:
                        </p>
                        <ul className="space-y-4 text-lg text-gray-700 mb-6">
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#539fda] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                <span>Prioritizing investments in businesses that adopt renewable energy, green technologies, or low-carbon operations</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#539fda] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                <span>Supporting emission tracking, footprint reduction, and sustainable resource use</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#539fda] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                <span>Encouraging sustainable production methods, adoption of renewable energy sources, energy efficiency, and waste reduction</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#539fda] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                <span>Channeling capital into climate-aligned sectors such as clean energy, eco-friendly manufacturing, and regenerative agriculture</span>
                            </li>
                        </ul>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Our goal is to ensure that environmental sustainability becomes a growth lever, not a trade-off.
                        </p>
                    </div>

                    {/* Gender-Lens Investment Principles */}
                    <div className="mb-16">
                        <h2 className="text-1xl md:text-2xl lg:text-3xl font-bold text-[#10386c] mb-8">
                            Gender-Lens Investment Principles
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Advancing gender equity is central to our investment strategy. Through a gender-lens approach, we:
                        </p>
                        <ul className="space-y-4 text-lg text-gray-700 mb-6">
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#539fda] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                <span>Invest in women-led and women-owned MSMEs</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#539fda] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                <span>Promote equitable opportunities across leadership, ownership, and employment</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#539fda] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                <span>Track key gender metrics such as:
                                    <ul className="ml-6 mt-2 space-y-2">
                                        <li className="flex items-start">
                                            <span className="w-1.5 h-1.5 bg-[#539fda] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span>Representation of women in leadership and on boards</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-1.5 h-1.5 bg-[#539fda] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span>Female workforce participation</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-1.5 h-1.5 bg-[#539fda] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span>Existence of inclusive, gender-sensitive workplace policies</span>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                        </ul>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            We believe that gender inclusion strengthens innovation, culture, and business performance; and we expect our portfolio companies to reflect these values.
                        </p>
                    </div>

                    {/* Governance & Ethical Standards */}
                    <div className="mb-16 bg-white rounded-lg p-8 shadow-sm">
                        <h2 className="text-1xl md:text-2xl lg:text-3xl font-bold text-[#10386c] mb-8">
                            Governance & Ethical Standards
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Strong governance is essential to building resilient and high-performing businesses. We assess and support companies on:
                        </p>
                        <ul className="space-y-4 text-lg text-gray-700 mb-6">
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#539fda] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                <span>Board composition and leadership diversity</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#539fda] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                <span>Internal controls and grievance mechanisms</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#539fda] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                <span>Financial transparency and regulatory compliance</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#539fda] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                <span>Responsible leadership, anti-corruption, and ethical conduct</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#539fda] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                <span>Clear decision-making structures and stakeholder accountability</span>
                            </li>
                        </ul>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            We champion ethical governance and encourage balanced, representative leadership within our investee companies.
                        </p>
                    </div>

                    {/* ESG Outcomes and Impact Tracking */}
                    <div >
                        <h2 className="text-1xl md:text-2xl lg:text-3xl font-bold text-[#10386c] mb-8">
                            ESG Outcomes and Impact Tracking
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            We monitor and report ESG performance through tailored scorecards that track:
                        </p>
                        <ul className="space-y-4 text-lg text-gray-700 mb-6">
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#539fda] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                <span>Greenhouse gas (GHG) emissions and resource efficiency</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#539fda] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                <span>Job creation, especially for women and youth</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#539fda] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                <span>Inclusion and social impact outcomes</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#539fda] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                <span>Governance effectiveness and leadership diversity</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-[#539fda] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                <span>Community investment, and stakeholder engagement</span>
                            </li>
                        </ul>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            These insights inform post-investment support, and portfolio management, and are reflected in our annual impact reports.
                        </p>
                    </div>
                </div>
                </section>
                    {/* ESG Policy & Resources */}
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
                <div className="relative max-w-7xl mx-auto px-6 lg:px-12 bg-white p-8 opacity-85 rounded-xl">
                    <div >
                        <h2 className="text-1xl md:text-2xl lg:text-3xl font-bold text-[#10386c] mb-8">
                            ESG Policy & Resources
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Our ESG Policy sets the guiding principles and performance expectations for our investments, while our ESGMS provides the operational framework for how we identify, assess, and manage ESG risks and opportunities across the investment lifecycle. It guides decision-making from initial screening and due diligence through to post-investment monitoring and exit, ensuring that our portfolio companies align with international ESG best practices and deliver measurable impact.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            Beyond our portfolio, we are equally committed to practicing what we preach. We embed ESG principles into our internal operations and institutional culture, including continuous training, clear ESG responsibilities across functions, and transparent self-reporting on our performance.
                        </p>

                        {/* Download Button */}
                        <div className="text-center">
                            <Button className="bg-[#10386c] hover:bg-[#539fda] text-white px-8 py-3 rounded-md text-lg font-semibold">
                                Download Our ESGMS Manual
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default ESGSustainabilityPage