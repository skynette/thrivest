'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { contactApi } from '@/lib/api';

// Submit contact form mutation
export const useSubmitContact = () => {
  return useMutation({
    mutationFn: (data: {
      name: string;
      email: string;
      subject: string;
      message: string;
    }) => contactApi.submit(data),
  });
};

// Admin hooks
export const useAllContacts = (params?: {
  responded?: boolean;
  page?: number;
  limit?: number;
}) => {
  return useQuery({
    queryKey: ['contacts', 'admin', params],
    queryFn: () => contactApi.getAll(params),
  });
};

export const useContact = (id: string) => {
  return useQuery({
    queryKey: ['contacts', id],
    queryFn: () => contactApi.getById(id),
    enabled: !!id,
  });
};

export const useMarkContactResponded = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, responded }: { id: string; responded?: boolean }) => 
      contactApi.markResponded(id, responded),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
    },
  });
};