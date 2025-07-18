import axios from 'axios';
import type { 
  RegisterFormData, 
  LoginFormData, 
  ApplicationFormData, 
  ContactFormData,
  AuthResponse,
  ProfileResponse,
  ApplicationsResponse,
  Application
} from '@/types/common';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Create axios instance
export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      // Clear token and redirect to login
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error.response?.data || error.message);
  }
);

// Auth API
export const authApi = {
  register: (data: RegisterFormData): Promise<AuthResponse> => api.post('/auth/register', data),
  
  login: (data: LoginFormData): Promise<AuthResponse> => 
    api.post('/auth/login', data),
  
  getProfile: (): Promise<ProfileResponse> => api.get('/auth/me'),
  
  updateProfile: (data: Partial<RegisterFormData>): Promise<ProfileResponse> => api.put('/auth/profile', data),
  
  changePassword: (data: { currentPassword: string; newPassword: string }): Promise<{ success: boolean; message: string }> => 
    api.put('/auth/change-password', data),
};

// Application API
export const applicationApi = {
  create: (data: ApplicationFormData): Promise<{ success: boolean; application: Application; message?: string }> => api.post('/applications', data),
  
  getMyApplications: (): Promise<ApplicationsResponse> => api.get('/applications/my-applications'),
  
  getById: (id: string): Promise<{ success: boolean; application: Application; message?: string }> => api.get(`/applications/${id}`),
  
  update: (id: string, data: Partial<ApplicationFormData>): Promise<{ success: boolean; application: Application; message?: string }> => api.put(`/applications/${id}`, data),
  
  submit: (id: string): Promise<{ success: boolean; application: Application; message?: string }> => api.post(`/applications/${id}/submit`),
  
  uploadDocument: (id: string, file: File, documentType: string): Promise<{ success: boolean; document: any; message?: string }> => {
    const formData = new FormData();
    formData.append('document', file);
    formData.append('documentType', documentType);
    
    return api.post(`/applications/${id}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  
  // Admin endpoints
  getAll: (params?: {
    status?: string;
    fundType?: string;
    page?: number;
    limit?: number;
  }): Promise<{ success: boolean; applications: Application[]; pagination?: any; message?: string }> => api.get('/applications/admin/all', { params }),
  
  updateStatus: (id: string, status: string, reviewNotes?: string): Promise<{ success: boolean; application: Application; message?: string }> =>
    api.patch(`/applications/${id}/status`, { status, reviewNotes }),
};

// Contact API
export const contactApi = {
  submit: (data: ContactFormData): Promise<{ success: boolean; message: string }> => api.post('/contact', data),
  
  // Admin endpoints
  getAll: (params?: {
    responded?: boolean;
    page?: number;
    limit?: number;
  }) => api.get('/contact', { params }),
  
  getById: (id: string) => api.get(`/contact/${id}`),
  
  markResponded: (id: string, responded: boolean = true) =>
    api.patch(`/contact/${id}/respond`, { responded }),
};

// User API (Admin)
export const userApi = {
  getAll: (params?: {
    search?: string;
    role?: string;
    page?: number;
    limit?: number;
  }) => api.get('/users', { params }),
  
  getById: (id: string) => api.get(`/users/${id}`),
  
  updateRole: (id: string, role: string) => 
    api.patch(`/users/${id}/role`, { role }),
  
  updateStatus: (id: string, isActive: boolean) =>
    api.patch(`/users/${id}/status`, { isActive }),
  
  getStats: () => api.get('/users/stats/overview'),
};