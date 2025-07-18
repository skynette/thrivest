import React from 'react'
import Image from 'next/image'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const CareersPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            
            {/* Hero Section */}
            <section className="relative h-96 overflow-hidden">
                <div className="absolute inset-0">
                    <Image 
                        src="/images/Fund/bottomimg.png" 
                        alt="Careers at ThriVest Africa" 
                        fill 
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-[#1e3a5f]/70"></div>
                </div>
                
                <div className="relative z-10 h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
                        <div className="text-white max-w-4xl">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                                Purpose-Driven Career. Create Impact Across Africa.
                            </h1>
                            <p className="text-lg md:text-xl leading-relaxed">
                                ThriVest Africa is more than an investment firm, we&apos;re a movement committed to unlocking the power of women-led innovation to transform economies and communities. If you&apos;re driven by purpose, bold thinking, and the desire to shape a more inclusive and sustainable Africa, we want to hear from you.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    
                    {/* Why Join Us Section */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                            Why Join Us?
                        </h2>
                        <div className="bg-white rounded-lg p-8 shadow-sm">
                            <ul className="space-y-4 text-lg text-gray-700">
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                    <span>Work on high-impact initiatives that drive gender equity and economic empowerment</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                    <span>Collaborate with visionary entrepreneurs, investors, and changemakers</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                    <span>Grow in a dynamic, values-driven culture built on impact, innovation, integrity, and inclusion</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                    <span>Help reshape the future of MSME financing and climate-aligned investment in Africa</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Opportunities Section */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                            Opportunities
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Full-Time Roles */}
                            <div className="bg-blue-50 rounded-lg p-8">
                                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">
                                    Full-Time Roles
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Join our core team across investment, operations, impact, and enterprise enablement. We welcome professionals with backgrounds in ESG, business analysis, finance, legal, and strategy; individuals who bring expertise, agility, and a deep commitment to driving systems-level change.
                                </p>
                            </div>

                            {/* Internships */}
                            <div className="bg-green-50 rounded-lg p-8">
                                <h3 className="text-2xl font-bold text-green-700 mb-4">
                                    Internships
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Our internship program provides hands-on experience for students and recent graduates who are passionate about gender-lens investing, entrepreneurship, and sustainable development. Interns are embedded in real projects and mentored by experienced professionals.
                                </p>
                            </div>

                            {/* Fellowships */}
                            <div className="bg-purple-50 rounded-lg p-8">
                                <h3 className="text-2xl font-bold text-purple-700 mb-4">
                                    Fellowships
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    We welcome mid-career professionals and technical specialists interested in short- to medium-term engagements focused on research, ESG integration, strategy, and enterprise support. Ideal for consultants, academics, or development professionals seeking purposeful impact.
                                </p>
                            </div>

                            {/* Partnerships & Collaborations */}
                            <div className="bg-orange-50 rounded-lg p-8">
                                <h3 className="text-2xl font-bold text-orange-700 mb-4">
                                    Partnerships & Collaborations
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    We actively engage with advisors, technical partners, accelerators, and sector collaborators who align with our mission. If you&apos;re interested in co-creating value and impact, we&apos;re open to hearing your ideas.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* How to Apply Section */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                            How to Apply
                        </h2>
                        
                        <div className="bg-[#1e3a5f] text-white rounded-lg p-8 md:p-12">
                            <div className="max-w-4xl">
                                <p className="text-lg md:text-xl leading-relaxed mb-8">
                                    We&apos;re always open to exceptional talent and mission-aligned collaborators. If you&apos;re interested in joining us or collaborating, please submit the following:
                                </p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    <div>
                                        <h3 className="text-xl font-bold mb-4">Required Documents:</h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-blue-300 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                                <span>Your CV (PDF)</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-blue-300 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                                                <span>A cover letter (PDF) outlining your interest, relevant experience, and alignment with our mission</span>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-xl font-bold mb-4">Application Details:</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <p className="font-semibold mb-2">Send your application to:</p>
                                                <a 
                                                    href="mailto:jobs@thrivestafrica.com" 
                                                    className="text-blue-300 hover:text-blue-200 transition-colors text-lg"
                                                >
                                                    jobs@thrivestafrica.com
                                                </a>
                                            </div>
                                            
                                            <div>
                                                <p className="font-semibold mb-2">Subject Line Format:</p>
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

                    {/* Call to Action */}
                    <div className="text-center">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Ready to Make an Impact?
                            </h2>
                            <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
                                Join us in building a more inclusive and sustainable future for Africa. Whether you&apos;re looking for a full-time role, internship, fellowship, or partnership opportunity, we&apos;d love to hear from you.
                            </p>
                            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                                <a 
                                    href="mailto:jobs@thrivestafrica.com" 
                                    className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                                >
                                    Send Application
                                </a>
                                <a 
                                    href="/contact" 
                                    className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                                >
                                    Get in Touch
                                </a>
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