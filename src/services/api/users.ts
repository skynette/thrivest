// Users API service

import { apiClient } from './client';
import { API_ENDPOINTS } from '@/constants/api';
import type { 
  UpdateUserRequest 
} from '@/types/api';
import type { User, PaginatedResponse } from '@/types/common';

export const usersService = {
  // Get all users with pagination
  getUsers: async (page = 1, limit = 10): Promise<PaginatedResponse<User>> => {
    const response = await apiClient.get<PaginatedResponse<User>>(
      `${API_ENDPOINTS.USERS.BASE}?page=${page}&limit=${limit}`
    );
    return response.data;
  },

  // Get user by ID
  getUserById: async (id: string): Promise<User> => {
    const response = await apiClient.get<User>(
      API_ENDPOINTS.USERS.BY_ID(id)
    );
    return response.data;
  },

  // Get current user profile
  getCurrentUser: async (): Promise<User> => {
    const response = await apiClient.get<User>(
      API_ENDPOINTS.USERS.PROFILE
    );
    return response.data;
  },

  // Update user
  updateUser: async (id: string, userData: UpdateUserRequest): Promise<User> => {
    const response = await apiClient.patch<User>(
      API_ENDPOINTS.USERS.BY_ID(id),
      userData
    );
    return response.data;
  },

  // Delete user
  deleteUser: async (id: string): Promise<void> => {
    await apiClient.delete(API_ENDPOINTS.USERS.BY_ID(id));
  },
}; 