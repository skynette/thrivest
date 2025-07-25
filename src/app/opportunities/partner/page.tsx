import React from 'react'
import Image from 'next/image'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Mail } from 'lucide-react'

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
                            Opportunities <span className="mx-4 opacity-60">|</span> Become a Partner
                        </h1>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="relative py-16 md:py-24">
                <div className="absolute inset-0">
                    {/* Decorative flowers pattern */}
                    <Image
                        src="/images/about us/text area.jpg"
                        alt="Text Area Background"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-white/0"></div>

                    {/* Side flower decorations */}
                    <div className="absolute left-0 bottom-0 w-48 h-48 opacity-40">
                        <div className="w-full h-full bg-pink-200 rounded-full blur-3xl"></div>
                    </div>
                    <div className="absolute right-0 top-0 w-48 h-48 opacity-40">
                        <div className="w-full h-full bg-blue-200 rounded-full blur-3xl"></div>
                    </div>
                </div>
                <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Left Column */}
                        <div>
                            <div className="space-y-8">
                                {/* Objective */}
                                <div>
                                    <p className="text-xl md:text-xl text-[#1e3a5f] mb-8">
                                        We believe systems-level change happens through collaboration. ThriVest Africa works with a diverse network of partners who share our vision for inclusive, sustainable growth across Africa.
                                    </p>
                                    <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">Who We Work With</h3>
                                    <h3 className="text-xl text-gray-700 leading-relaxed mb-4">
                                        We actively partner with:
                                    </h3>
                                    <ul className="space-y-4 text-xl text-gray-700">
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-[#539fda] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                            <span>Philanthropic foundations </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-[#539fda] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                            <span>Impact-aligned funders </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-[#539fda] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                            <span>Development finance institutions (DFIs) </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-[#539fda] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                            <span>Accelerators and incubators </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-[#539fda] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                            <span>Technical assistance providers  </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-[#539fda] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                            <span>Research and policy institutions </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-[#539fda] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                            <span>Corporate and ecosystem enablers  </span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Tagline */}
                                <div>
                                    <p className="text-gray-700 leading-relaxed text-xl">
                                        Our partnerships support capital deployment, enterprise development, research, ecosystem building, and more.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-8">
                            {/* Objective */}
                            <div>
                                <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">Why Partner With Us</h3>
                                <ul className="space-y-4 text-lg text-gray-700">
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-[#539fda] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                        <span>Align with a bold gender-lens investment mission</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-[#539fda] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                        <span>Co-deploy catalytic capital for women-led MSMEs </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-[#539fda] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                        <span>Amplify impact through enterprise enablement and capacity building </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-[#539fda] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                        <span>Shape policy, insights, and innovation for inclusive finance in Africa </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-[#539fda] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                        <span>Advance shared goals under the SDGs, especially SDG 1, 5, 8, 9, and 13 </span>
                                    </li>
                                </ul>
                            </div>
                            {/* Tagline */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-[#1e3a5f]">Let’s Collaborate</h3>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    If you&apos;re interested in partnering, co-funding, or contributing expertise, reach out via: 
                                </p>
                                <div className='flex items-center space-x-1'>
                                        <div className="w-6 h-6 bg-[#539fda] rounded-full flex items-center justify-center">
                                            <Mail className="h-3 w-3 text-white" />
                                        </div>
                                        <a
                                    href="mailto:grow@thrivestafrica.com"
                                    className="text-[#539fda] hover:text-blue-500 transition-colors text-lg"
                                >
                                     grow@thrivestafrica.com
                                </a></div>
                                <div>
                                </div>
                                <p className="text-white bg-[#1e3a5f] px-4 py-4 rounded font-mono text-sm">
                                    Subject: [Partnership Inquiry] - [Your Organization Name]
                                </p>
                                <h3 className="text-xl font-bold text-[#1e3a5f] mb-4"> We welcome both long-term collaborations and project-based engagements</h3>
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