'use client';

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
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
            answer: "ThriVest Africa is a private investment and enterprise support firm advancing gender-lens investing across Africa. We provide catalytic capital, inclusive financial solutions, and strategic business support to unlock the growth of women-led and women-owned MSMEs. Our work is rooted in driving gender equity, economic inclusion, and climate resilience."
        },
        {
            question: "What types of businesses does ThriVest invest in?",
            answer: "We back women-led, women-owned, or gender-diverse MSMEs that are:",
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
                "Healthcare",
                "Technology and Digital Solutions",
                "Manufacturing and Value-Addition",
                "Hospitality and Tourism",
                "Renewable Energy and Climate Solutions",
                "Retail and Consumer Goods"
            ],
            additionalText: "These sectors offer significant potential for job creation, innovation, and gender-inclusive economic growth."
        },
        {
            question: "What is the difference between the ThriVest Ignite and Elevate Funds?",
            answer: "ThriVest Ignite Fund is our early-stage investment strategy targeting startups and pre-seed to Series A businesses with investment amounts typically ranging from $5K-$50K. ThriVest Elevate Fund focuses on growth-stage businesses with 3+ years of operation and proven track records, offering investments of $50K-$500K and above. Ignite supports innovation and early-stage development, while Elevate accelerates scaling and expansion of established businesses."
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
                <div className="absolute inset-0">
                    <Image 
                        src="/images/Fund/bottomimg.png" 
                        alt="Resources - FAQs" 
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
                                <Link href="/resources/news-publication" className="hover:text-blue-200 transition-colors">
                                    News and Publication
                                </Link>
                                <Link href="/resources/media" className="hover:text-blue-200 transition-colors">
                                    Media
                                </Link>
                                <span className="text-blue-200">FAQs</span>
                            </div>
                            
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                                Resources | FAQs
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-6 lg:px-12">
                    
                    {/* Introduction */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Frequently Asked Questions (FAQs)
                        </h2>
                        <p className="text-lg text-gray-600">
                            Find answers to common questions about ThriVest Africa, our investment approach, and how we support women-led businesses across Sub-Saharan Africa.
                        </p>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-4">
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
                                                {faq.answer}
                                            </p>
                                            
                                            {faq.bulletPoints && (
                                                <ul className="space-y-2 mb-4">
                                                    {faq.bulletPoints.map((point, pointIndex) => (
                                                        <li key={pointIndex} className="flex items-start">
                                                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
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

                    {/* Contact Section */}
                    <div className="mt-16 text-center">
                        <div className="bg-[#1e3a5f] text-white rounded-lg p-8 md:p-12">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                Still have questions?
                            </h3>
                            <p className="text-lg mb-6">
                                We're here to help. Get in touch with our team for more information.
                            </p>
                            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                                <Link 
                                    href="/contact"
                                    className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                                >
                                    Contact Us
                                </Link>
                                <Link 
                                    href="/apply"
                                    className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                                >
                                    Apply Now
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    )
}

export default FAQPage