// User-related React Query mutations

import { useMutation, useQueryClient, UseMutationResult } from '@tanstack/react-query';
import { usersService } from '@/services/api/users';
import { QUERY_KEYS } from '@/constants/api';
import type { UpdateUserRequest } from '@/types/api';
import type { User } from '@/types/common';

// Update user mutation
export const useUpdateUser = (): UseMutationResult<User, Error, { id: string; data: UpdateUserRequest }> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => usersService.updateUser(id, data),
    onSuccess: (updatedUser, { id }) => {
      // Update user in cache
      queryClient.setQueryData(QUERY_KEYS.USER_BY_ID(id), updatedUser);
      
      // Update user profile if it's the current user
      const currentUser = queryClient.getQueryData(QUERY_KEYS.USER_PROFILE) as User;
      if (currentUser && currentUser.id === id) {
        queryClient.setQueryData(QUERY_KEYS.USER_PROFILE, updatedUser);
      }
      
      // Invalidate users list to refresh
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.USERS });
    },
    onError: (error) => {
      console.error('Failed to update user:', error);
    },
  });
};

// Delete user mutation
export const useDeleteUser = (): UseMutationResult<void, Error, string> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: usersService.deleteUser,
    onSuccess: (_, deletedUserId) => {
      // Remove user from cache
      queryClient.removeQueries({ queryKey: QUERY_KEYS.USER_BY_ID(deletedUserId) });
      
      // Invalidate users list to refresh
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.USERS });
    },
    onError: (error) => {
      console.error('Failed to delete user:', error);
    },
  });
}; 