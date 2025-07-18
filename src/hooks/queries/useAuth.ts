// Authentication-related React Query hooks

import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { usersService } from '@/services/api/users';
import { QUERY_KEYS, API_CONFIG } from '@/constants/api';
import type { User } from '@/types/common';

// Get current user profile
export const useCurrentUser = (): UseQueryResult<User, Error> => {
  return useQuery({
    queryKey: QUERY_KEYS.USER_PROFILE,
    queryFn: usersService.getCurrentUser,
    staleTime: API_CONFIG.STALE_TIME,
    gcTime: API_CONFIG.CACHE_TIME, // Previously cacheTime
    retry: API_CONFIG.RETRY_ATTEMPTS,
    // Only run if user is authenticated
    enabled: typeof window !== 'undefined' && !!localStorage.getItem('accessToken'),
  });
};

// Check authentication status
export const useAuthStatus = () => {
  const { data: user, isLoading, error } = useCurrentUser();
  
  return {
    user,
    isAuthenticated: !!user,
    isLoading,
    error,
  };
}; 