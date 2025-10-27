'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { authApi } from '@/lib/api';
import type { RegisterFormData, User } from '@/types/common';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone?: string;
  }) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<RegisterFormData>) => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      if (typeof window === 'undefined') {
        setIsLoading(false);
        return;
      }
      
      const token = localStorage.getItem('token');
      const savedUser = localStorage.getItem('user');
      
      if (token && savedUser) {
        try {
          // Verify token is still valid by fetching fresh user data
          const response = await authApi.getProfile();
          setUser(response.user);
        } catch {
          // Token is invalid, clear storage
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          setUser(null);
        }
      }
      setIsLoading(false);
    };

    initializeAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await authApi.login({ email, password });
      const { user, token } = response;

      if (typeof window !== 'undefined') {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
      }
      setUser(user);
    } catch (error: unknown) {
      console.error('AuthContext login error:', error);
      // Ensure we're throwing the error object with proper message
      throw error;
    }
  };

  const register = async (data: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone?: string;
  }) => {
    try {
      const response = await authApi.register(data);
      const { user, token } = response;
      
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
      }
      setUser(user);
    } catch (error) {
      // Ensure we're throwing the error object with proper message
      throw error;
    }
  };

  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/';
    }
    setUser(null);
  };

  const updateProfile = async (data: Partial<RegisterFormData>) => {
    try {
      const response = await authApi.updateProfile(data);
      setUser(response.user);
      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(response.user));
      }
    } catch (error) {
      // Ensure we're throwing the error object with proper message
      throw error;
    }
  };

  const refreshProfile = async () => {
    try {
      const response = await authApi.getProfile();
      setUser(response.user);
      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(response.user));
      }
    } catch (error) {
      // Ensure we're throwing the error object with proper message
      throw error;
    }
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout,
    updateProfile,
    refreshProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};