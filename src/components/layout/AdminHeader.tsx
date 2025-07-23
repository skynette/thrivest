'use client';

import Image from 'next/image';
import { Shield, User, Bell } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export default function AdminHeader() {
  const { user } = useAuth();

  return (
    <header className="bg-[#0B2653] text-white h-16 flex items-center justify-between px-4 md:px-6 border-b border-blue-800">
      <div className="flex items-center space-x-4">
        <Image
          src="/images/logo.png"
          alt="ThriVest Africa"
          width={120}
          height={40}
          className="h-8 w-auto"
        />
        <div className="hidden sm:flex items-center space-x-2 bg-sky-400 text-white px-3 py-1 rounded-full text-xs font-bold">
          <Shield className="h-3 w-3" />
          <span>ADMIN</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-2 md:space-x-4">
        {/* Notifications */}
        <button className="relative p-2 hover:bg-blue-700 rounded-full transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Admin Profile */}
        <div className="flex items-center space-x-2">
          <div className="bg-sky-400 rounded-full p-1.5">
            <User className="h-4 w-4 md:h-5 md:w-5 text-[#0B2653]" />
          </div>
          <div className="text-sm hidden sm:block">
            <div className="font-semibold">{user?.firstName || 'Admin'}</div>
            <div className="text-xs text-blue-200">{user?.role || 'Administrator'}</div>
          </div>
        </div>
      </div>
    </header>
  );
}