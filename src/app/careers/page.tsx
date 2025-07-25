import React from 'react'
import Image from 'next/image'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Mail } from 'lucide-react'

const CareersPage = () => {
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
                            Career
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

                <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

                    <div className='mb-16'>
                        <div className="max-w-8xl">
                            <h1 className="text-1xl md:text-2xl lg:text-2xl font-bold mb-6 text-[#1e3a5f]">
                                Build A Purpose-Driven Career, Create Impact Across Africa
                            </h1>
                            <p className="text-lg md:text-xl leading-relaxed">
                                ThriVest Africa is more than an investment firm, we&apos;re a movement committed to unlocking the power of women-led innovation to transform economies and communities. If you&apos;re driven by purpose, bold thinking, and the desire to shape a more inclusive and sustainable Africa, we want to hear from you.
                            </p>
                        </div>
                    </div>

                    {/* Why Join Us Section */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-8">
                            Why Join Us?
                        </h2>
                        <div className="bg-white rounded-lg p-8 shadow-sm">
                            <ul className="space-y-4 text-lg text-gray-700">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-[#1e3a5f] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                    <span>Work on high-impact initiatives that drive gender equity and economic empowerment</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-[#1e3a5f] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                    <span>Collaborate with visionary entrepreneurs, investors, and changemakers</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-[#1e3a5f] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                    <span>Grow in a dynamic, values-driven culture built on impact, innovation, integrity, and inclusion</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-[#1e3a5f] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                    <span>Help reshape the future of MSME financing and climate-aligned investment in Africa</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Opportunities Section */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-8">
                            Opportunities
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Full-Time Roles */}
                            <div className="bg-blue-50 rounded-lg p-8">
                                <h3 className="text-2xl font-bold text-[#539FDA] mb-4">
                                    Full-Time Roles
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Join our core team across investment, operations, impact, and enterprise enablement. We welcome professionals with backgrounds in ESG, business analysis, finance, legal, and strategy; individuals who bring expertise, agility, and a deep commitment to driving systems-level change.
                                </p>
                            </div>

                            {/* Internships */}
                            <div className="bg-blue-100 rounded-lg p-8">
                                <h3 className="text-2xl font-bold text-[#539FDA] mb-4">
                                    Internships
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Our internship program provides hands-on experience for students and recent graduates who are passionate about gender-lens investing, entrepreneurship, and sustainable development. Interns are embedded in real projects and mentored by experienced professionals.
                                </p>
                            </div>

                            {/* Fellowships */}
                            <div className="bg-blue-100 rounded-lg p-8">
                                <h3 className="text-2xl font-bold text-[#539FDA] mb-4">
                                    Fellowships
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    We welcome mid-career professionals and technical specialists interested in short- to medium-term engagements focused on research, ESG integration, strategy, and enterprise support. Ideal for consultants, academics, or development professionals seeking purposeful impact.
                                </p>
                            </div>

                            {/* Partnerships & Collaborations */}
                            <div className="bg-blue-50 rounded-lg p-8">
                                <h3 className="text-2xl font-bold text-[#539FDA] mb-4">
                                    Partnerships & Collaborations
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    We actively engage with advisors, technical partners, accelerators, and sector collaborators who align with our mission. If you&apos;re interested in co-creating value and impact, we&apos;re open to hearing your ideas.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* How to Apply Section */}
                    <div className="relative ">                

                        <div className="bg-[#1e3a5f] text-white rounded-lg p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
                            How to Apply
                        </h2>
                            <div className="max-w-7xl">
                                <p className="text-lg md:text-xl leading-relaxed mb-8">
                                    We&apos;re always open to exceptional talent and mission-aligned collaborators. If you&apos;re interested in joining us or collaborating, please submit the following:
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
                                    <div>
                                        <h3 className="text-xl font-bold mb-4">Required Documents:</h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-[#1e3a5f] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                                <span>Your CV (PDF)</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-[#1e3a5f] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                                <span>A cover letter (PDF) outlining your interest, relevant experience, and alignment with our mission</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold mb-4">Application Details:</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <p className=" mb-2">Send your application to:</p>
                                            <div className='flex items-center space-x-1'>
                                                <div className="w-6 h-6 bg-[#137ecf] rounded-full flex items-center justify-center">
                                                    <Mail className="h-3 w-3 text-white" />
                                                </div>
                                                <a
                                                    href="mailto:careers@thrivestafrica.com"
                                                    className="text-[#137ecf] hover:text-blue-200 transition-colors text-lg"
                                                >
                                                    careers@thrivestafrica.com
                                                </a>
                                            </div>
</div>
                                            <div>
                                                <p className="mb-2">Subject Line Format:</p>
                                                <p className="text-blue-200 bg-blue-900/50 px-4 py-2 rounded font-mono text-sm">
                                                    Application – [Role Title] – [Full-Time / Internship / Fellowship / Partnership]
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    )
}

export default CareersPage