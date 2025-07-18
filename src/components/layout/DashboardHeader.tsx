'use client';

import Image from 'next/image';
import { User } from 'lucide-react';
import { useDashboardProfile, useCurrentApplication } from '@/hooks/queries/useDashboard';

export default function DashboardHeader() {
  const { data: profile, isLoading: profileLoading } = useDashboardProfile();
  const { data: currentApp, isLoading: appLoading } = useCurrentApplication();

  const user = profile?.user;
  const applicationId = currentApp?.id ? `TVA-${currentApp.id.slice(-8).toUpperCase()}` : 'N/A';

  return (
    <header className="bg-[#0B2653] text-white h-16 flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center space-x-2">
        <Image
          src="/images/logo.png"
          alt="ThriVest Africa"
          width={120}
          height={40}
          className="h-8 w-auto"
        />
      </div>
      
      <div className="flex items-center space-x-2 md:space-x-4">
        <div className="text-right hidden sm:block">
          <div className="text-xs">Application ID</div>
          <div className="font-semibold text-sm">
            {appLoading ? 'Loading...' : applicationId}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="bg-white rounded-full p-1.5">
            <User className="h-4 w-4 md:h-5 md:w-5 text-[#0B2653]" />
          </div>
          <div className="text-sm">
            {profileLoading ? (
              <div className="font-semibold">Loading...</div>
            ) : (
              <>
                <div className="font-semibold">{user?.firstName || 'User'}</div>
                <div className="text-xs -mt-1 hidden sm:block">{user?.lastName || ''}</div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}