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
                            href="/about"
                            className="inline-flex items-center text-white hover:text-gray-200 mb-4 transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5 mr-1" />
                            Back to About Us
                        </Link>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                            Investment Committee
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
                                    James&apos; experience also extends to executive management roles in the manufacturing, transportation, and consultancy sectors, including at FCMGC.
                                </p>
                                <p className="leading-relaxed">
                                    He holds an Advanced Diploma in Accountancy from the Federal Polytechnic, Idah, and an MBA in Finance and Accounts from Ambrose Alli University. He also earned a Certificate in Microfinance from Ateneo de Manila University in the Philippines, and holds certifications as a Bank Examiner from the Federal Deposit Insurance Corporation (FDIC) in the USA, in Risk-Based Supervision from the Central Bank of Nigeria, and in Financial Policy Management also from the Central Bank of Nigeria.
                                </p>
                                <p className="leading-relaxed">
                                    Professionally, James is a Fellow (FCA) of the Institute of Chartered Accountants of Nigeria since 1991. He is also an Associate of the Chartered Institute of Taxation of Nigeria (ACIT) and a Member of the Chartered Institute of Management.
                                </p>
                                <p className="leading-relaxed">
                                    James Fatimiro brings to any board a rare blend of analytical excellence, ethical leadership, and deep understanding of the investment climate, financial governance, and institutional development. He currently provides advisory services to several financial and nonprofit organizations and is widely respected for his regulatory expertise, strategic acumen, and unwavering commitment to nation-building.
                                </p>
                                <p className="leading-relaxed">
                                    He sits on the boards of several organizations across sectors including microfinance banking, agriculture, transportation, and financial and management consultancy.
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
