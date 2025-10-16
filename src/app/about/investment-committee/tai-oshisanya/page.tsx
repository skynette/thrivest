import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Metadata } from 'next'
import { ChevronLeft } from 'lucide-react'

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
                <div className="absolute inset-0">
                    <Image
                        src="/images/about us/breadcrumb bg.jpg"
                        alt="Investment Committee"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                <div className="relative z-10 h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
                        <Link
                            href="/about/investment-committee"
                            className="inline-flex items-center text-white hover:text-gray-200 mb-4 transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5 mr-1" />
                            Back to Committee
                        </Link>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                            Tai Adetokunbo OSHISANYA
                        </h1>
                    </div>
                </div>
            </section>

            {/* Member Details Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-1 p-6 flex flex-col items-center justify-start bg-gray-100">
                                <div className="relative w-48 h-48 mb-4 rounded-full overflow-hidden">
                                    <Image
                                        src="/images/Tai Oshisanya.jpg"
                                        alt="Tai Adetokunbo OSHISANYA"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-[#1e3a5f] text-center mb-2">
                                    Tai Adetokunbo OSHISANYA
                                </h3>
                                <p className="text-gray-600 text-center text-sm">
                                    Fellow, Institute of Chartered Accountants of Nigeria (ICAN)
                                </p>
                            </div>
                            <div className="lg:col-span-2 p-6 space-y-4 text-gray-700">
                                <p className="leading-relaxed">
                                    Tai Oshisanya is the former Executive Director, Finance & Control, and Chief Financial Officer of TotalEnergies EP Nigeria (TEPNG), being its second female Director on the Board and the first Nigerian female CFO of an International Oil & Gas Company in Nigeria. She served from 2018 until her mandatory retirement in March 2022 after 35 years meritorious service to the Company and the TotalEnergies Group. She was responsible for management of the company&apos;s financial resources and internal control systems, financial relationships with joint venture partners, and people development.
                                </p>
                                <p className="leading-relaxed">
                                    Tai is a Chartered Accountant by profession and had also been appointed as Managing Director, and later as Non-Executive Director, of TEPNG&apos;s Closed Pension Fund Administration company, Executive Director of TotalEnergies Upstream Nigeria Ltd (TUPNI) - another TotalEnergies&apos; subsidiary in Nigeria, and Senior Executive (Cadre Dirigéants G-300) of TotalEnergies SE, France. She has also worked in TotalEnergies affiliates in the Netherlands, France & South Africa in various Finance & leadership capacities, leaving a trail of testimonials behind her. She speaks French fluently.
                                </p>
                                <p className="leading-relaxed">
                                    She possesses 35 years oil & gas experience (18 of which were at Management and senior management level and 8 years at Board level) in the areas of Finance, Internal Controls, SAP ERP, Budget Monitoring & Performance Reporting, Strategy and Board Governance, Joint Venture Finance, Treasury & Cash Management, Pension Fund Administration, Insurance, Project Management, Change Management and Coaching & Mentoring. In addition, she has 4 years&apos; audit experience with the then Deloitte Haskins & Sells Nigeria prior to joining TotalEnergies EP Nigeria.
                                </p>
                                <p className="leading-relaxed">
                                    Tai holds a B.Sc. degree in Accounting from the University of Lagos, is a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN), an Associate of the Chartered Institute of Taxation of Nigeria (CITN) and holds a Diploma in French from Alliance Française. She has participated in numerous senior management courses and seminars locally and internationally on oil & gas financial management, strategy and leadership, corporate governance and ethics, mentoring and coaching.
                                </p>
                                <p className="leading-relaxed">
                                    Since retirement, Tai sits as Independent Non-Executive Director on the Boards of FirstBank Guinea (a subsidiary of First Bank of Nigeria Plc), The CreditVille Group Ltd. (a fintech organisation), and Gloryland Trust International (an elderly recreational NGO). She serves on ICAN Committees in various capacities, and as an executive committee member of the ICAN Lagos & District Society, where she now serves as Assistant General Secretary, having served 2 years as Technical Secretary. She is a member of GAIA Africa and an Associate member of WIMBIZ, mentoring younger women, learning from their dynamism and thriving from a symbiotic relationship between smarter vs. more experience/exposure.
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

export default Page
