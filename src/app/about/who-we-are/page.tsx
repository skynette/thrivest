import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Eye, Target } from "lucide-react";

export default function AboutPage() {
    const coreValues = [
        {
            title: "Integrity",
            description: "We uphold the highest ethical standards, fostering trust, transparency, and accountability in all our interactions. Integrity is the cornerstone of our culture and guides every decision we make."
        },
        {
            title: "Impact-led",
            description: "We are motivated by a deep commitment to improving the lives of women. Our investments are focused on generating meaningful environmental and socio-economic outcomes, empowering women entrepreneurs, and advancing sustainable development."
        },
        {
            title: "Innovation",
            description: "We encourage creativity, bold thinking, and a willingness to challenge the status quo. By embracing new technologies and ideas, we continuously evolve to stay ahead and drive transformative impact."
        },
        {
            title: "Partnership",
            description: "We believe in the power of collaboration. By building strong relationships with our stakeholders and fostering teamwork internally, we amplify our ability to support and scale women-led businesses."
        },
        {
            title: "Excellence",
            description: "We are committed to delivering exceptional quality in everything we do. By maintaining high standards and a culture of continuous improvement, we attract and retain top-tier talent aligned with our impact-driven mission."
        },
        {
            title: "Inclusivity",
            description: "We value diversity and ensure that every voice is heard. Our commitment to gender equity and inclusive practices creates a culture where all team members and the women entrepreneurs we support can thrive."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <Header />

            {/* Hero Section with Breadcrumb */}
            <section className="relative h-64 overflow-hidden">
                {/* Background with breadcrumb image */}
                <div className="absolute inset-0">
                    <img
                        src="/images/about us/breadcrumb bg.jpg"
                        alt="About Us Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Breadcrumb */}
                <div className="relative z-10 h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                            About Us <span className="mx-4 opacity-60">|</span> Who we are
                        </h1>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="relative py-16 overflow-hidden">
                {/* Background with text area image */}
                <div className="absolute inset-0">
                    <img
                        src="/images/about us/text area.jpg"
                        alt="Text Area Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-white/0"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="space-y-8">
                        {/* Vision */}
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="bg-[#1e3a5f] p-8 rounded-lg flex items-center justify-center min-w-[150px]">
                                <div className="text-center">
                                    <Eye className="w-12 h-12 text-white mx-auto mb-3" />
                                    <h3 className="text-white text-xl font-bold">Vision</h3>
                                </div>
                            </div>
                            <div className="flex-1 bg-white/90 p-8 rounded-lg shadow-lg">
                                <p className="text-gray-700 leading-relaxed">
                                    To become Africa&apos;s leading impact investment platform focused on women-led and women-owned businesses across key economic sectors, positioning ourselves as a catalyst for change in gender equality and entrepreneurship.
                                </p>
                            </div>
                        </div>

                        {/* Mission */}
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="bg-[#1e3a5f] p-8 rounded-lg flex items-center justify-center min-w-[150px]">
                                <div className="text-center">
                                    <Target className="w-12 h-12 text-white mx-auto mb-3" />
                                    <h3 className="text-white text-xl font-bold">Mission</h3>
                                </div>
                            </div>
                            <div className="flex-1 bg-white/90 p-8 rounded-lg shadow-lg">
                                <p className="text-gray-700 leading-relaxed">
                                    To empower African women-led and women-owned MSMEs through inclusive financial services, sustainable investment, and capacity-building support, thereby closing the gender financial gap, eliminating poverty, driving economic growth, and addressing climate change in alignment with the Sustainable Development Goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="relative py-16 overflow-hidden">
                {/* Background with core values image */}
                <div className="absolute inset-0">
                    <img
                        src="/images/about us/corevalues.jpg"
                        alt="Core Values Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-white/0"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-12">
                        Core Values
                        <div className="w-24 h-1 bg-blue-500 mt-4"></div>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {coreValues.map((value, index) => (
                            <div key={index} className="bg-white/80 p-6 rounded-lg shadow-lg space-y-3">
                                <h3 className="text-xl font-bold text-[#1e3a5f]">
                                    {value.title}
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}