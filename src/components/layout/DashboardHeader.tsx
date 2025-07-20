'use client';

import Image from 'next/image';
import { User, LogOut, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useDashboardProfile, useCurrentApplication } from '@/hooks/queries/useDashboard';

export default function DashboardHeader() {
  const { data: profile, isLoading: profileLoading } = useDashboardProfile();
  const { data: currentApp, isLoading: appLoading } = useCurrentApplication();
  const { logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const user = profile?.user;
  const applicationId = currentApp?.id ? `TVA-${currentApp.id.slice(-8).toUpperCase()}` : 'N/A';

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
  };

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
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-2 hover:bg-white/10 rounded-lg p-2 transition-colors"
          >
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
            <ChevronDown className="h-4 w-4 transition-transform duration-200" style={{
              transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
            }} />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
              <div className="px-4 py-2 border-b border-gray-100">
                <div className="text-sm font-semibold text-gray-900">
                  {user?.firstName} {user?.lastName}
                </div>
                <div className="text-xs text-gray-500">{user?.email}</div>
              </div>
              <button
                onClick={handleLogout}
                className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}