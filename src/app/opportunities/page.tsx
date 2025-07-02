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
                {/* Background with gradient and floral pattern */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-blue-500 to-blue-600"></div>
                    {/* Blue flowers pattern */}
                    <div className="absolute inset-0">
                        <img
                            src="/images/blue-flowers-bg.jpg"
                            alt=""
                            className="w-full h-full object-cover opacity-40"
                        />
                    </div>
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
            <section className="relative overflow-hidden">
                {/* Decorative flowers on sides */}
                <div className="absolute left-0 top-0 bottom-0 w-64 z-0">
                    <img
                        src="/images/flowers-left-decoration.png"
                        alt=""
                        className="h-full w-full object-cover opacity-30"
                    />
                </div>
                <div className="absolute right-0 top-0 bottom-0 w-64 z-0">
                    <img
                        src="/images/flowers-right-decoration.png"
                        alt=""
                        className="h-full w-full object-cover opacity-30"
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                                    We provide catalytic capital and tailored enterprise support to women-led and women-owned MSMEs across Sub-Saharan Africa. Whether you're just starting out or scaling a growth-stage venture, our funds, advisory services, and network access are designed to help your business thrive.
                                </p>

                                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                                    Learn about eligibility, how to apply, and what we look for in investable businesses.
                                </p>
                            </div>

                            <div className="pt-4">
                                <Link href="/apply">
                                    <Button className="bg-sky-500 hover:bg-sky-600 text-white px-12 py-6 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105">
                                        Apply Now
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Right Content - Image */}
                        <div className="relative">
                            <div className="bg-[#1e3a5f] rounded-3xl p-8 lg:p-12">
                                <div className="rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src="/images/woman-entrepreneur-market.jpg"
                                        alt="Woman entrepreneur with fresh produce at market"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Information Section */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                            What We Offer
                        </h2>
                        <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg p-8 shadow-lg">
                            <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">
                                Catalytic Capital
                            </h3>
                            <p className="text-gray-700">
                                Access patient, flexible funding designed to help your business grow sustainably while creating positive social impact.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg p-8 shadow-lg">
                            <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">
                                Advisory Services
                            </h3>
                            <p className="text-gray-700">
                                Receive tailored business support, mentorship, and strategic guidance from experienced professionals in your industry.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg p-8 shadow-lg">
                            <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">
                                Network Access
                            </h3>
                            <p className="text-gray-700">
                                Connect with a vibrant ecosystem of women entrepreneurs, investors, and partners across Sub-Saharan Africa.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}