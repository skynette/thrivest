'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authApi } from '@/lib/api';
import { useAuth as useAuthContext } from '@/contexts/AuthContext';

// Use the context hook
export const useAuth = () => {
  return useAuthContext();
};

// Login mutation
export const useLogin = () => {
  const { login } = useAuthContext();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      await login(data.email, data.password);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });
};

// Register mutation
export const useRegister = () => {
  const { register } = useAuthContext();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
      phone?: string;
    }) => {
      await register(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });
};

// Logout mutation
export const useLogout = () => {
  const { logout } = useAuthContext();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      logout();
    },
    onSuccess: () => {
      queryClient.clear();
    },
  });
};

// Update profile mutation
export const useUpdateProfile = () => {
  const { updateProfile } = useAuthContext();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: any) => {
      await updateProfile(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });
};

// Change password mutation
export const useChangePassword = () => {
  return useMutation({
    mutationFn: async (data: { currentPassword: string; newPassword: string }) => {
      return authApi.changePassword(data);
    },
  });
};

// Get user profile query
export const useUserProfile = () => {
  const { user, isAuthenticated } = useAuthContext();

  return useQuery({
    queryKey: ['user'],
    queryFn: () => authApi.getProfile(),
    enabled: isAuthenticated,
    initialData: user ? { user } : undefined,
  });
};