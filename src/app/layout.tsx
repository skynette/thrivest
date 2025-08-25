import type { Metadata } from "next";
import { Barlow_Condensed, Poppins } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";
import { AuthProvider } from "@/contexts/AuthContext";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

const leagueGothic = Barlow_Condensed({
  variable: "--font-leagueGothic",
  weight: '500',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: "ThriVest Africa - Empowering African Businesses Through Strategic Investment",
    template: "%s | ThriVest Africa"
  },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="application-name" content="ThriVest Africa" />
        <meta name="apple-mobile-web-app-title" content="ThriVest Africa" />
        <meta property="og:site_name" content="ThriVest Africa" />
        <meta name="twitter:site" content="@ThriVestAfrica" />
        <meta name="brand" content="ThriVest Africa" />
        <meta name="organization-name" content="ThriVest Africa" />
        <meta name="company-name" content="ThriVest Africa" />
        <meta property="og:brand" content="ThriVest Africa" />
        <meta name="google-site-verification" content="google-site-verification-code-here" />
        <link rel="canonical" href="https://thrivestafrica.com" />
      </head>
      <body
        className={`${poppins.variable} ${leagueGothic.variable} antialiased font-sans`}
      >

        <ErrorBoundary>
          <QueryProvider>
            <AuthProvider>
              {children}
            </AuthProvider>
          </QueryProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
