// Authentication API service

import { apiClient } from './client';
import { API_ENDPOINTS } from '@/constants/api';
import type { 
  LoginRequest, 
  LoginResponse, 
  CreateUserRequest 
} from '@/types/api';
import type { User } from '@/types/common';

export const authService = {
  // Login user
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    const response = await apiClient.post<LoginResponse>(
      API_ENDPOINTS.AUTH.LOGIN,
      credentials
    );
    return response.data;
  },

  // Register new user
  register: async (userData: CreateUserRequest): Promise<User> => {
    const response = await apiClient.post<User>(
      API_ENDPOINTS.AUTH.REGISTER,
      userData
    );
    return response.data;
  },

  // Logout user
  logout: async (): Promise<void> => {
    await apiClient.post(API_ENDPOINTS.AUTH.LOGOUT);
  },

  // Refresh access token
  refreshToken: async (): Promise<{ accessToken: string }> => {
    const response = await apiClient.post<{ accessToken: string }>(
      API_ENDPOINTS.AUTH.REFRESH
    );
    return response.data;
  },

  // Forgot password
  forgotPassword: async (email: string): Promise<void> => {
    await apiClient.post(API_ENDPOINTS.AUTH.FORGOT_PASSWORD, { email });
  },

  // Reset password
  resetPassword: async (token: string, password: string): Promise<void> => {
    await apiClient.post(API_ENDPOINTS.AUTH.RESET_PASSWORD, {
      token,
      password,
    });
  },
}; 