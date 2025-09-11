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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
