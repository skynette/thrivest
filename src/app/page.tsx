import { Footer } from "@/components";
import { Header } from "@/components/layout/Header";
import { PartnersSection } from "@/components/layout/partners";
import { WelcomeSection } from "@/components/layout/welcome";
import { HeroSection } from "@/components/sections/hero";
import { InvestmentSectorsSection } from "@/components/sections/investment";
import { BrandSchema } from "@/components/SEO/BrandSchema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ThriVest Africa - Empowering African Businesses Through Strategic Investment",
  description: "ThriVest Africa is a leading investment firm empowering African businesses through strategic investment, sustainable growth opportunities, and comprehensive business support across key sectors.",
  keywords: [
    "ThriVest Africa",
    "African investment",
    "venture capital Africa",
    "private equity Nigeria", 
    "business funding Africa",
    "sustainable investment",
    "African startups",
    "growth capital",
    "impact investing Africa",
    "business development Nigeria"
  ],
  authors: [{ name: "ThriVest Africa", url: "https://thrivestafrica.com" }],
  creator: "ThriVest Africa",
  publisher: "ThriVest Africa",
  metadataBase: new URL("https://thrivestafrica.com"),
  alternates: {
    canonical: "https://thrivestafrica.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thrivestafrica.com",
    title: "ThriVest Africa - Empowering African Businesses Through Strategic Investment",
    description: "Leading investment firm empowering African businesses through strategic investment, sustainable growth opportunities, and comprehensive business support.",
    siteName: "ThriVest Africa",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ThriVest Africa - Empowering African Businesses"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "ThriVest Africa - Empowering African Businesses",
    description: "Leading investment firm empowering African businesses through strategic investment and sustainable growth opportunities.",
    creator: "@ThriVestAfrica",
    images: ["/images/twitter-card.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "google-site-verification-code-here",
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ThriVest Africa',
  alternateName: ['Thrivest Africa', 'ThriVest'],
  legalName: 'ThriVest Africa Limited',
  url: 'https://thrivestafrica.com',
  logo: 'https://thrivestafrica.com/images/logo.png',
  description: 'ThriVest Africa - Leading investment firm empowering African businesses through strategic investment and sustainable growth opportunities.',
  slogan: 'Empowering African Businesses Through Strategic Investment',
  foundingLocation: 'Lagos, Nigeria',
  sameAs: [
    'https://twitter.com/ThriVestAfrica',
    'https://linkedin.com/company/thrivest-africa',
    'https://facebook.com/ThriVestAfrica'
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'NG',
    addressRegion: 'Lagos',
    addressLocality: 'Lagos'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    url: 'https://thrivestafrica.com/contact',
    availableLanguage: 'English'
  },
  knowsAbout: [
    'Venture Capital',
    'Private Equity',
    'Impact Investing',
    'African Markets',
    'Business Development',
    'Sustainable Investment'
  ],
  areaServed: {
    '@type': 'Place',
    name: 'Africa'
  }
}

export default function Home() {
    return (
        <div className="min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <BrandSchema />
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