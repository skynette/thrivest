// Authentication-related React Query mutations

import { useMutation, useQueryClient, UseMutationResult } from '@tanstack/react-query';
import { authService } from '@/services/api/auth';
import { QUERY_KEYS } from '@/constants/api';
import type { 
  LoginRequest, 
  LoginResponse, 
  CreateUserRequest 
} from '@/types/api';
import type { User } from '@/types/common';

// Login mutation
export const useLogin = (): UseMutationResult<LoginResponse, Error, LoginRequest> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authService.login,
    onSuccess: (data) => {
      // Store tokens
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      
      // Update user profile in cache
      queryClient.setQueryData(QUERY_KEYS.USER_PROFILE, data.user);
    },
    onError: (error) => {
      // Handle login error
      console.error('Login failed:', error);
    },
  });
};

// Register mutation
export const useRegister = (): UseMutationResult<User, Error, CreateUserRequest> => {
  return useMutation({
    mutationFn: authService.register,
    onSuccess: (data) => {
      // Handle successful registration
      console.log('Registration successful:', data);
    },
    onError: (error) => {
      // Handle registration error
      console.error('Registration failed:', error);
    },
  });
};

// Logout mutation
export const useLogout = (): UseMutationResult<void, Error, void> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authService.logout,
    onSuccess: () => {
      // Clear tokens
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      
      // Clear all queries
      queryClient.clear();
    },
    onError: (error) => {
      // Handle logout error
      console.error('Logout failed:', error);
    },
  });
};

// Forgot password mutation
export const useForgotPassword = (): UseMutationResult<void, Error, string> => {
  return useMutation({
    mutationFn: authService.forgotPassword,
    onSuccess: () => {
      // Handle successful password reset request
      console.log('Password reset email sent');
    },
    onError: (error) => {
      // Handle error
      console.error('Failed to send password reset email:', error);
    },
  });
}; 