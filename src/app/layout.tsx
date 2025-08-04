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
  title: "ThriVest Africa",
  description: "ThriVest Africa - Empowering African businesses through strategic investment and sustainable growth opportunities.",
  keywords: "ThriVest Africa, investment, African businesses, venture capital, private equity, sustainable growth, business funding",
  authors: [{ name: "ThriVest Africa" }],
  creator: "ThriVest Africa",
  publisher: "ThriVest Africa",
  metadataBase: new URL("https://thrivestafrica.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thrivestafrica.com",
    title: "ThriVest Africa",
    description: "ThriVest Africa - Empowering African businesses through strategic investment and sustainable growth opportunities.",
    siteName: "ThriVest Africa",
  },
  twitter: {
    card: "summary_large_image",
    title: "ThriVest Africa",
    description: "ThriVest Africa - Empowering African businesses through strategic investment and sustainable growth opportunities.",
    creator: "@ThriVestAfrica",
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
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
