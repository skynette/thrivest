'use client';

import React, { useState } from 'react'
import Image from 'next/image'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ChevronDown, ChevronRight } from 'lucide-react'

const FAQPage = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index)
    }

    const faqs = [
        {
            question: "What is ThriVest Africa?",
            answer: "ThriVest Africa is an impact investment firm advancing gender-lens investing across Africa. We provide catalytic capital, inclusive financial solutions, and strategic business support to unlock the growth of women-led and women-owned MSMEs. Our work is rooted in driving gender equity, economic inclusion, and climate resilience."
        },
        {
            question: "What types of businesses does ThriVest invest in?",
            answer: "We back women-led and women-owned MSMEs that are:",
            bulletPoints: [
                "Based in Sub-Saharan Africa with regional growth potential",
                "Early- or growth-stage with scalable, revenue-generating models",
                "Active in our focus sectors and solving real market needs",
                "Committed to strong governance and ethical practices",
                "Positioned for measurable impact in gender inclusion, job creation, and sustainability"
            ]
        },
        {
            question: "What sectors do you focus on?",
            answer: "We focus on sectors that are critical to Africa's sustainable and inclusive transformation, including:",
            bulletPoints: [
                "Food and Agribusiness",
                "Hospitality",
                "Light Manufacturing",
                "Health and Wellness",
                "Technology",
                "Clean Energy and Green Solutions",
                "Retail and Consumer Goods",
            ],
            additionalText: "These sectors offer significant potential for job creation, innovation, and gender-inclusive economic growth."
        },
        {
            question: "What is the difference between the ThriVest Ignite and Elevate Funds?",
            answer: "The ThriVest Ignite Fund is designed for startups and early-stage businesses at the seed stage, typically as they begin to establish product-market fit and demonstrate early traction. It offers ticket sizes ranging from $10K–$100K and supports ventures focused on refining their models, growing their customer base, and laying the groundwork for scale.",
            answer2: "The ThriVest Elevate Fund, on the other hand, targets growth-stage businesses that have been in operation for 3+ years, have a track record of revenue and growth, and are ready to scale. Investment sizes range from $10K–$2million+ and above, with support aimed at expansion, institutional development, and long-term sustainability."
        },
        {
            question: "Do you only invest in women-led businesses?",
            answer: "While we prioritize women-led and women-owned MSMEs, we also consider businesses with strong gender representation in leadership or ownership. Our focus is on advancing gender equity through strategic investments that promote inclusive business practices and create opportunities for women across the value chain, from leadership roles to employment and supply chain participation."
        },
        {
            question: "Do you provide non-financial support?",
            answer: "Yes, we provide comprehensive non-financial support including tailored technical assistance, mentorship and coaching, access to markets and industry networks, operational efficiency support, ESG integration guidance, governance strengthening, and strategic partnerships. Our goal is to build strong foundations for scalable and sustainable growth beyond just capital provision."
        },
        {
            question: "How can my business apply for funding?",
            answer: "Businesses can apply through our eligibility assessment process by visiting our application portal. The process includes completing a detailed application form, submitting supporting documents (business plan, financial statements, impact metrics), and undergoing our comprehensive due diligence process. We encourage businesses to review our investment criteria and ensure alignment with our mission before applying."
        },
        {
            question: "Do you partner with other organizations?",
            answer: "Yes, we actively collaborate with development finance institutions, impact investors, accelerators, incubators, government agencies, and sector-specific organizations. These partnerships help us expand our reach, leverage expertise, and create comprehensive support ecosystems for our portfolio companies. We're always open to strategic partnerships that align with our mission and values."
        },
        {
            question: "Where does ThriVest Africa operate?",
            answer: "ThriVest Africa operates across Sub-Saharan Africa, with a focus on countries and regions where we can create the most significant impact. Our investments target businesses that have regional growth potential and can contribute to broader economic development across the continent. We consider opportunities in all Sub-Saharan African countries that align with our investment criteria and impact objectives."
        },
        {
            question: "How do you measure your impact?",
            answer: "We measure impact through comprehensive ESG scorecards that track greenhouse gas emissions and resource efficiency, job creation (especially for women and youth), gender inclusion metrics, governance effectiveness, community investment, and stakeholder engagement. We also monitor SDG alignment, revenue growth of portfolio companies, and broader economic contributions. Our impact measurement is integrated into post-investment support and reflected in our annual impact reports."
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            {/* Hero Section */}
            <section className="relative h-64 overflow-hidden">
                {/* Background with breadcrumb image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/about us/breadcrumb bg.jpg"
                        alt="FAQs"
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
                            Resources <span className="mx-4 opacity-60">|</span> FAQs
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
                <div className="max-w-4xl mx-auto px-6 lg:px-12">

                    {/* Introduction */}
                    <div className="relative mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                            Frequently Asked Questions (FAQs)
                        </h2>
                        <p className="text-lg text-gray-600">
                            Find answers to common questions about ThriVest Africa, our investment approach, and how we support women-led businesses across Sub-Saharan Africa.
                        </p>
                    </div>

                    {/* FAQ Items */}
                    <div className="relative space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 py-4 text-left flex items-center justify-between bg-[#1e3a5f] hover:bg-[#0a1f42] transition-colors"
                                >
                                    <h3 className="text-lg font-semibold text-white pr-4">
                                        {faq.question}
                                    </h3>
                                    {openFAQ === index ? (
                                        <ChevronDown className="h-5 w-5 text-white flex-shrink-0" />
                                    ) : (
                                        <ChevronRight className="h-5 w-5 text-white flex-shrink-0" />
                                    )}
                                </button>

                                {openFAQ === index && (
                                    <div className="bg-white px-6 pb-6">
                                        <div className="pt-4 border-t border-gray-100">
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                {faq.answer} <br /> <br />
                                                {faq.answer2}
                                            </p>

                                            {faq.bulletPoints && (
                                                <ul className="space-y-2 mb-4">
                                                    {faq.bulletPoints.map((point, pointIndex) => (
                                                        <li key={pointIndex} className="flex items-start">
                                                            <span className="w-2 h-2 bg-[#1e3a5f] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                            <span className="text-gray-700">{point}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            {faq.additionalText && (
                                                <p className="text-gray-700 leading-relaxed">
                                                    {faq.additionalText}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>


                </div>
            </section>

           

            <Footer />
        </div>
    )
}

export default FAQPage