import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OpportunitiesPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <Header />

            {/* Hero Section with Breadcrumb */}
            <section className="relative h-64 overflow-hidden">
                {/* Background with application portal image */}
                <div className="absolute inset-0">
                    <img
                        src="/images/application portal bg.jpg"
                        alt="Application Portal Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-600/70"></div>
                </div>

                {/* Breadcrumb */}
                <div className="relative z-10 h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                            Opportunities <span className="mx-4 opacity-60">|</span> Business Support and Funding
                        </h1>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="relative py-16 md:py-24 overflow-hidden">
                {/* Background with decorative flowers */}
                <div className="absolute inset-0">
                    {/* Decorative flowers pattern */}
                    <div className="absolute inset-0 opacity-20" style={{
                        backgroundImage: 'url("/images/flower-pattern.png")',
                        backgroundSize: '300px 300px',
                        backgroundRepeat: 'repeat',
                        backgroundPosition: 'center'
                    }}></div>
                    
                    {/* Side flower decorations */}
                    <div className="absolute left-0 bottom-0 w-48 h-48 opacity-40">
                        <div className="w-full h-full bg-pink-200 rounded-full blur-3xl"></div>
                    </div>
                    <div className="absolute right-0 top-0 w-48 h-48 opacity-40">
                        <div className="w-full h-full bg-blue-200 rounded-full blur-3xl"></div>
                    </div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                                    We provide catalytic capital and tailored enterprise support to women-led and women-owned MSMEs across Sub-Saharan Africa. Whether you&apos;re just starting out or scaling a growth-stage venture, our funds, advisory services, and network access are designed to help your business thrive.
                                </p>

                                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                                    Learn about eligibility, how to apply, and what we look for in investable businesses.
                                </p>
                            </div>

                            <div className="pt-4">
                                <Link href="/apply">
                                    <Button className="bg-sky-500 hover:bg-sky-600 text-white px-12 py-6 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
                                        Apply Now
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Right Content - Image */}
                        <div className="relative">
                            <div className="bg-[#1e3a5f] rounded-3xl p-8 lg:p-12 shadow-2xl">
                                <div className="rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src="/images/Slide 1.jpg"
                                        alt="Business opportunity showcase"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}