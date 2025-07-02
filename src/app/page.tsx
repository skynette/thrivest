import { Footer } from "@/components";
import { Header } from "@/components/layout/Header";
import { PartnersSection } from "@/components/layout/partners";
import { WelcomeSection } from "@/components/layout/welcome";
import { HeroSection } from "@/components/sections/hero";
import { InvestmentSectorsSection } from "@/components/sections/investment";

export default function Home() {
    return (
        <div className="min-h-screen">
            {/* Navigation */}
            <Header />

            {/* Hero Section */}
            <HeroSection />

            {/* Welcome Section */}
            <WelcomeSection />

            {/* Investment Focus Sectors */}
            <InvestmentSectorsSection />

            {/* Partners Section */}
            <PartnersSection />

            {/* Footer */}
            <Footer />
        </div>
    );
}