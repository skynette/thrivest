'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { applicationApi, userApi } from '@/lib/api';

// Admin dashboard queries
export const useAdminStats = () => {
  return useQuery({
    queryKey: ['admin', 'stats'],
    queryFn: async () => {
      const [applicationsResponse, usersResponse] = await Promise.all([
        applicationApi.getAll(),
        userApi.getStats(),
      ]);
      return {
        applications: applicationsResponse,
        users: usersResponse,
      };
    },
    staleTime: 2 * 60 * 1000, // 2 minutes for admin stats
    gcTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Admin applications queries
export const useAdminApplications = (params?: {
  status?: string;
  fundType?: string;
  search?: string;
  page?: number;
  limit?: number;
}) => {
  return useQuery({
    queryKey: ['admin', 'applications', params],
    queryFn: () => applicationApi.getAll(params),
    staleTime: 1 * 60 * 1000, // 1 minute
    gcTime: 5 * 60 * 1000,
  });
};

// Admin users queries
export const useAdminUsers = (params?: {
  search?: string;
  role?: string;
  page?: number;
  limit?: number;
}) => {
  return useQuery({
    queryKey: ['admin', 'users', params],
    queryFn: () => userApi.getAll(params),
    staleTime: 1 * 60 * 1000, // 1 minute
    gcTime: 5 * 60 * 1000,
  });
};

// Individual user query
export const useAdminUser = (userId: string) => {
  return useQuery({
    queryKey: ['admin', 'users', userId],
    queryFn: () => userApi.getById(userId),
    enabled: !!userId,
    staleTime: 2 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });
};

// Individual application query
export const useAdminApplication = (applicationId: string) => {
  return useQuery({
    queryKey: ['admin', 'applications', applicationId],
    queryFn: () => applicationApi.getById(applicationId),
    enabled: !!applicationId,
    staleTime: 2 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });
};

// Mutations
export const useUpdateApplicationStatus = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, status, reviewNotes }: { id: string; status: string; reviewNotes?: string }) =>
      applicationApi.updateStatus(id, status, reviewNotes),
    onSuccess: () => {
      // Invalidate and refetch related queries
      queryClient.invalidateQueries({ queryKey: ['admin', 'applications'] });
      queryClient.invalidateQueries({ queryKey: ['admin', 'stats'] });
    },
  });
};

export const useUpdateUserRole = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, role }: { id: string; role: string }) =>
      userApi.updateRole(id, role),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin', 'users'] });
      queryClient.invalidateQueries({ queryKey: ['admin', 'stats'] });
    },
  });
};

export const useUpdateUserStatus = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, isActive }: { id: string; isActive: boolean }) =>
      userApi.updateStatus(id, isActive),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin', 'users'] });
      queryClient.invalidateQueries({ queryKey: ['admin', 'stats'] });
    },
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: string) => userApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin', 'users'] });
      queryClient.invalidateQueries({ queryKey: ['admin', 'stats'] });
    },
  });
};

export const useDeleteApplication = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: string) => applicationApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin', 'applications'] });
      queryClient.invalidateQueries({ queryKey: ['admin', 'stats'] });
    },
  });
};