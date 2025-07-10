'use client';

import Image from 'next/image';
import { User } from 'lucide-react';

interface DashboardHeaderProps { }

export default function DashboardHeader({ }: DashboardHeaderProps) {
  return (
    <header className="bg-[#0B2653] text-white h-16 flex items-center justify-between px-6">
      <div className="flex items-center space-x-2">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-white">
            ThriVest
          </h1>
          <h2 className="text-xl font-bold text-white -mt-1">
            Africa
          </h2>
          <p className="text-[8px] text-gray-300 -mt-1">
            Investing in the Potential, Ensuring Africa&apos;s Future
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="text-right">
          <div className="text-xs">Application ID</div>
          <div className="font-semibold text-sm">TVA-2025-00127</div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="bg-white rounded-full p-1.5">
            <User className="h-5 w-5 text-[#0B2653]" />
          </div>
          <div className="text-sm">
            <div className="font-semibold">Isaac</div>
            <div className="text-xs -mt-1">Femi</div>
          </div>
        </div>
      </div>
    </header>
  );
}