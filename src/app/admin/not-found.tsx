'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Home, ArrowLeft, Shield, Settings } from 'lucide-react';

export default function AdminNotFound() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        {/* Admin Icon */}
        <div className="mb-8">
          <div className="bg-[#0B2653] rounded-full p-4 inline-block mb-4">
            <Shield className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-[#0B2653]">Admin Portal</h1>
        </div>

        {/* 404 Message */}
        <div className="mb-8">
          <div className="text-6xl font-bold text-gray-300 mb-4">404</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Admin Page Not Found
          </h2>
          <p className="text-gray-600 text-lg mb-2">
            The admin page you&apos;re looking for doesn&apos;t exist.
          </p>
          <p className="text-gray-500 text-sm">
            It might have been moved or you don&apos;t have permission to access it.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/admin"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#0B2653] text-white rounded-lg font-semibold hover:bg-[#0a1f42] transition-colors"
            >
              <Settings className="h-5 w-5" />
              Admin Dashboard
            </Link>
            <button
              onClick={handleGoBack}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 border border-gray-300 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              Go Back
            </button>
          </div>

          {/* Admin Navigation */}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-gray-600 text-sm mb-4">
              Quick admin navigation:
            </p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link
                href="/admin/users"
                className="text-[#0B2653] hover:text-[#0a1f42] underline"
              >
                Users Management
              </Link>
              <Link
                href="/admin/applications"
                className="text-[#0B2653] hover:text-[#0a1f42] underline"
              >
                Applications
              </Link>
            </div>
          </div>

          {/* Logout Option */}
          <div className="pt-4 border-t border-gray-200">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 text-gray-500 hover:text-gray-700 text-sm"
            >
              <Home className="h-4 w-4" />
              Exit Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}