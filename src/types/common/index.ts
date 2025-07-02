// Common types used throughout the application

export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
  errors?: string[];
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface SelectOption {
  label: string;
  value: string | number;
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface User extends BaseEntity {
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user';
} 