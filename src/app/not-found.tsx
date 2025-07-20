'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Home, ArrowLeft, Search, HelpCircle } from 'lucide-react';

export default function NotFound() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B2653] to-[#1e40af] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/images/logo-white.png"
            alt="ThriVest Africa"
            width={150}
            height={50}
            className="mx-auto"
          />
        </div>

        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-white/20 mb-4">404</div>
          <div className="bg-white/10 rounded-full p-6 inline-block mb-6">
            <Search className="h-16 w-16 text-white" />
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-blue-100 text-lg mb-2">
            Oops! The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <p className="text-blue-200 text-sm">
            It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#0B2653] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Home className="h-5 w-5" />
              Go Home
            </Link>
            <button
              onClick={handleGoBack}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              Go Back
            </button>
          </div>

          {/* Secondary Actions */}
          <div className="pt-4 border-t border-white/20">
            <p className="text-blue-200 text-sm mb-4">
              Need help? Try these options:
            </p>
            <div className="flex flex-col sm:flex-row gap-2 text-sm">
              <Link
                href="/about/who-we-are"
                className="text-blue-100 hover:text-white underline"
              >
                About Us
              </Link>
              <span className="text-blue-300 hidden sm:inline">•</span>
              <Link
                href="/contact"
                className="text-blue-100 hover:text-white underline"
              >
                Contact Support
              </Link>
              <span className="text-blue-300 hidden sm:inline">•</span>
              <Link
                href="/opportunities"
                className="text-blue-100 hover:text-white underline"
              >
                Our Programs
              </Link>
            </div>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <HelpCircle className="h-4 w-4 text-blue-200" />
            <span className="text-blue-200 text-sm font-medium">Quick Tip</span>
          </div>
          <p className="text-blue-100 text-xs">
            If you think this is an error, please contact our support team with the URL you were trying to access.
          </p>
        </div>
      </div>
    </div>
  );
}