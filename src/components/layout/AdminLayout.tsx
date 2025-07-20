'use client';

import { ReactNode } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';
import { useRequireAdmin } from '@/hooks/useAdminAuth';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { isLoading, isAuthorized } = useRequireAdmin();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0B2653]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
          <p className="mt-4 text-white">Verifying admin access...</p>
        </div>
      </div>
    );
  }

  if (!isAuthorized) {
    return null; // Will redirect via useRequireAdmin hook
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <div className="flex flex-col md:flex-row">
        <AdminSidebar />
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
      <footer className="bg-[#0B2653] text-white text-xs p-3 text-center border-t border-blue-800">
        © ThriVest 2025 | Admin Portal | Powered by Desunis
      </footer>
    </div>
  );
}