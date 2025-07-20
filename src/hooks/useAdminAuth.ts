'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const useAdminAuth = () => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  const isAdmin = user?.role === 'ADMIN' || user?.role === 'SUPER_ADMIN' || user?.role === 'admin';

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        router.push('/admin/login');
      } else if (!isAdmin) {
        router.push('/dashboard');
      }
    }
  }, [isAuthenticated, isAdmin, isLoading, router]);

  return {
    user,
    isAdmin,
    isAuthenticated,
    isLoading,
  };
};

export const useRequireAdmin = () => {
  const { isAdmin, isLoading } = useAdminAuth();
  
  if (isLoading) {
    return { isLoading: true, isAuthorized: false };
  }
  
  return { isLoading: false, isAuthorized: isAdmin };
};