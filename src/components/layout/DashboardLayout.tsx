'use client';

import { ReactNode } from 'react';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen">
      <DashboardHeader />
      <div className="flex flex-col md:flex-row">
        <DashboardSidebar />
        <main
          className="flex-1 p-4 md:p-6"
          style={{
            backgroundImage: 'url("/images/admin bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: 'calc(100vh - 4rem)'
          }}
        >
          {children}
        </main>
      </div>
      <footer className="bg-[#0B2653] text-white text-xs p-3 text-center">
        © ThriVest 2025 | Powered by Desunis
      </footer>
    </div>
  );
}