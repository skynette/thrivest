import type { Metadata } from "next";
import { League_Gothic } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";
import { AuthProvider } from "@/contexts/AuthContext";

// Removed Poppins font configuration

const leagueGothic = League_Gothic({
  variable: "--font-leagueGothic",
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Thrivest - Modern Next.js Application",
  description: "A scalable Next.js 13 project with TypeScript, Tailwind CSS, and shadcn/ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${leagueGothic.variable} antialiased font-sans`}
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
