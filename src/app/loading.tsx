import Image from 'next/image';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B2653] to-[#1e40af] flex items-center justify-center">
      <div className="text-center">
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

        {/* Loading Spinner */}
        <div className="mb-6">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-white/20 border-t-white mx-auto"></div>
        </div>

        {/* Loading Text */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
          <p className="text-blue-100 text-sm">Please wait while we prepare your content</p>
        </div>

        {/* Progress Animation */}
        <div className="mt-8">
          <div className="w-48 mx-auto bg-white/20 rounded-full h-1">
            <div className="bg-white h-1 rounded-full animate-pulse w-3/5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}