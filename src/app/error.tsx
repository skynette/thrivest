'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { RefreshCw, Home, ArrowLeft, AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  const handleGoBack = () => {
    router.back();
  };

  const handleTryAgain = () => {
    reset();
  };

  const isNetworkError = error.message.includes('fetch') || error.message.includes('network');
  const isAuthError = error.message.includes('401') || error.message.includes('unauthorized');

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

        {/* Error Illustration */}
        <div className="mb-8">
          <div className="bg-red-500/20 rounded-full p-6 inline-block mb-6">
            <AlertTriangle className="h-16 w-16 text-red-400" />
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            {isNetworkError ? 'Connection Error' : isAuthError ? 'Access Denied' : 'Something went wrong'}
          </h1>
          <p className="text-blue-100 text-lg mb-2">
            {isNetworkError 
              ? 'Unable to connect to our servers.'
              : isAuthError
              ? 'You need to log in to access this page.'
              : 'An unexpected error occurred.'
            }
          </p>
          <p className="text-blue-200 text-sm">
            {isNetworkError 
              ? 'Please check your internet connection and try again.'
              : isAuthError
              ? 'Please log in and try again.'
              : 'We apologize for the inconvenience. Please try refreshing the page.'
            }
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleTryAgain}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#0B2653] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <RefreshCw className="h-5 w-5" />
              Try Again
            </button>
            <button
              onClick={handleGoBack}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              Go Back
            </button>
          </div>

          {/* Secondary Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 px-4 py-2 text-blue-100 hover:text-white underline"
            >
              <Home className="h-4 w-4" />
              Home Page
            </Link>
            {isAuthError && (
              <Link
                href="/login"
                className="flex items-center justify-center gap-2 px-4 py-2 text-blue-100 hover:text-white underline"
              >
                Login
              </Link>
            )}
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 px-4 py-2 text-blue-100 hover:text-white underline"
            >
              Contact Support
            </Link>
          </div>
        </div>

        {/* Error Details (Development) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 p-4 bg-red-500/10 rounded-lg border border-red-500/20 text-left">
            <details className="text-sm">
              <summary className="text-red-200 font-medium cursor-pointer mb-2">
                Error Details (Development)
              </summary>
              <pre className="text-red-100 text-xs overflow-auto whitespace-pre-wrap">
                {error.message}
                {error.digest && `\nDigest: ${error.digest}`}
              </pre>
            </details>
          </div>
        )}

        {/* Help Text */}
        <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
          <p className="text-blue-100 text-xs">
            If this problem persists, please contact our support team with the error details and the page you were trying to access.
          </p>
        </div>
      </div>
    </div>
  );
}