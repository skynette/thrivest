'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import AdminLayout from '@/components/layout/AdminLayout';

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  
  // Don't wrap login page with AdminLayout (it has its own auth checks)
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }
  
  return <AdminLayout>{children}</AdminLayout>;
}