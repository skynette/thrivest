// User-related React Query hooks

import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { usersService } from '@/services/api/users';
import { QUERY_KEYS, API_CONFIG } from '@/constants/api';
import type { User, PaginatedResponse } from '@/types/common';

// Get all users with pagination
export const useUsers = (page = 1, limit = 10): UseQueryResult<PaginatedResponse<User>, Error> => {
  return useQuery({
    queryKey: [...QUERY_KEYS.USERS, { page, limit }],
    queryFn: () => usersService.getUsers(page, limit),
    staleTime: API_CONFIG.STALE_TIME,
    gcTime: API_CONFIG.CACHE_TIME,
    retry: API_CONFIG.RETRY_ATTEMPTS,
  });
};

// Get user by ID
export const useUser = (id: string): UseQueryResult<User, Error> => {
  return useQuery({
    queryKey: QUERY_KEYS.USER_BY_ID(id),
    queryFn: () => usersService.getUserById(id),
    staleTime: API_CONFIG.STALE_TIME,
    gcTime: API_CONFIG.CACHE_TIME,
    retry: API_CONFIG.RETRY_ATTEMPTS,
    enabled: !!id, // Only run if ID is provided
  });
}; 