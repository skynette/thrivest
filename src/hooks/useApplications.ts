'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { applicationApi } from '@/lib/api';

// Get user's applications
export const useMyApplications = () => {
  return useQuery({
    queryKey: ['applications', 'my'],
    queryFn: () => applicationApi.getMyApplications(),
  });
};

// Get application by ID
export const useApplication = (id: string) => {
  return useQuery({
    queryKey: ['applications', id],
    queryFn: () => applicationApi.getById(id),
    enabled: !!id,
  });
};

// Create application mutation
export const useCreateApplication = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: any) => applicationApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['applications'] });
    },
  });
};

// Update application mutation
export const useUpdateApplication = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) => 
      applicationApi.update(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ['applications', id] });
      queryClient.invalidateQueries({ queryKey: ['applications', 'my'] });
    },
  });
};

// Submit application mutation
export const useSubmitApplication = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => applicationApi.submit(id),
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: ['applications', id] });
      queryClient.invalidateQueries({ queryKey: ['applications', 'my'] });
    },
  });
};

// Upload document mutation
export const useUploadDocument = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, file, documentType }: { 
      id: string; 
      file: File; 
      documentType: string; 
    }) => applicationApi.uploadDocument(id, file, documentType),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ['applications', id] });
    },
  });
};

// Admin hooks
export const useAllApplications = (params?: {
  status?: string;
  fundType?: string;
  page?: number;
  limit?: number;
}) => {
  return useQuery({
    queryKey: ['applications', 'admin', params],
    queryFn: () => applicationApi.getAll(params),
  });
};

export const useUpdateApplicationStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, status, reviewNotes }: { 
      id: string; 
      status: string; 
      reviewNotes?: string; 
    }) => applicationApi.updateStatus(id, status, reviewNotes),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['applications'] });
    },
  });
};