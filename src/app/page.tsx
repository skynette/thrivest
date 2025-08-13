import { Footer } from "@/components";
import { Header } from "@/components/layout/Header";
import { PartnersSection } from "@/components/layout/partners";
import { WelcomeSection } from "@/components/layout/welcome";
import { HeroSection } from "@/components/sections/hero";
import { InvestmentSectorsSection } from "@/components/sections/investment";

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ThriVest Africa',
  url: 'https://thrivestafrica.com',
  logo: 'https://thrivestafrica.com/images/logo.png',
  description: 'ThriVest Africa - Empowering African businesses through strategic investment and sustainable growth opportunities.',
  sameAs: [
    'https://twitter.com/ThriVestAfrica',
    'https://linkedin.com/company/thrivest-africa',
    'https://facebook.com/ThriVestAfrica'
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'NG',
    addressRegion: 'Lagos'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    url: 'https://thrivestafrica.com/contact'
  }
}

export default function Home() {
    return (
        <div className="min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
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