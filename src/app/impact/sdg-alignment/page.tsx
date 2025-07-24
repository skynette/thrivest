import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";

export default function AboutPage() {
    const coreValues = [
        {
            logo: "/images/impact/img_1.png",
            description: "We tackle systemic poverty by providing catalytic capital and tailored support to underserved women-led MSMEs across Sub-Saharan Africa. Our interventions enable sustainable livelihoods, inclusive economic participation, and improved household incomes in low-income communities."
        },
        {
            logo: "/images/impact/img_2.png",
            description: "We are committed to advancing gender equity by investing in women entrepreneurs, promoting inclusive business practices, and supporting leadership pathways for women in business. Our portfolio prioritizes businesses with strong female representation in ownership, leadership, and workforce."
        },
        {
            logo: "/images/impact/img_3.png",
            description: "Through enterprise growth and capital access, we catalyze job creation, decent work conditions, and long-term economic opportunity—especially for women and youth. We support businesses that generate sustainable employment and contribute to national productivity. "
        },
        {
            logo: "/images/impact/img_4.png",
            description: "We back innovative, scalable MSMEs that are building the future of local industries, improving infrastructure resilience, and expanding access to essential goods and services. Our investments foster inclusive industrialization and support entrepreneurial ecosystems."
        },
        {
            logo: "/images/impact/img_5.png",
            description: "We are committed to supporting climate-resilient growth by ensuring that the businesses we fund adopt sustainable practices. This includes helping portfolio companies transition to renewable energy sources, reduce their carbon footprint, and implement emission tracking systems. Additionally, we invest in climate-smart and clean energy ventures, accelerating Africa’s transition to a low-carbon economy."
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <Header />

            {/* Hero Section with Breadcrumb */}
            <section className="relative h-64 overflow-hidden">
                {/* Background with breadcrumb image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/about us/breadcrumb bg.jpg"
                        alt="About Us Background"
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
                            Impact <span className="mx-4 opacity-60">|</span> SDG Sustainability
                        </h1>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="relative py-16 overflow-hidden">
                {/* Background with text area image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/about us/corevalues.jpg"
                        alt="Core Values Background"
                        fill
                        className="object-cover"
                        
                    />
                    <div className="absolute inset-0 bg-white/0"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
                    <div className="space-y-8">
                        <p className="text-1xl md:text-2xl text-[#1e3a5f] mb-8">
                            ThriVest Africa’s mission directly contributes to five core Sustainable Development Goals.
                        </p>
                        {/* Vision */}
                        {coreValues.map((value, index) => (
                            <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="bg-white p-8 rounded-xl flex items-center justify-center min-w-[200px] min-h-[200px] relative">
                                        <Image
                                            className="rounded-lg absolute object-contain md:object-cover shadow-lg"
                                            alt=""
                                            src={value.logo}
                                            fill
                                            sizes="(max-width: 150px) 100vw, (max-width: 150px) 50vw, 33vw"
                                        />
                                    
                                </div>
                                <div className="flex-1 bg-white/90 p-8 rounded-lg shadow-lg">
                                    <p className="text-gray-700 leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>

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