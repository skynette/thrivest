// API endpoints and configuration constants

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://thrivest-production.up.railway.app/api';

export const API_ENDPOINTS = {
  // Auth endpoints
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    REGISTER: '/auth/register',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
  },
  
  // User endpoints
  USERS: {
    BASE: '/users',
    PROFILE: '/users/profile',
    BY_ID: (id: string) => `/users/${id}`,
  },
  
  // Add more endpoint groups as needed
} as const;

export const QUERY_KEYS = {
  // Auth query keys
  AUTH: ['auth'] as const,
  
  // User query keys
  USERS: ['users'] as const,
  USER_PROFILE: ['users', 'profile'] as const,
  USER_BY_ID: (id: string) => ['users', id] as const,
  
  // Add more query keys as needed
} as const;

export const API_CONFIG = {
  TIMEOUT: 10000, // 10 seconds
  RETRY_ATTEMPTS: 3,
  STALE_TIME: 5 * 60 * 1000, // 5 minutes
  CACHE_TIME: 10 * 60 * 1000, // 10 minutes
} as const; 