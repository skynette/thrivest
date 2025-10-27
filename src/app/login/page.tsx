'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useLogin } from '@/hooks/useAuth';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  
  const router = useRouter();
  const loginMutation = useLogin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setError('');

    try {
      console.log('Attempting login...');
      await loginMutation.mutateAsync(formData);
      console.log('Login successful, redirecting...');
      router.push('/dashboard');
    } catch (err: unknown) {
      // Handle API error response - check if it's the raw error object from API
      let errorMessage = 'Login failed. Please try again.';

      console.error('Login error:', err);

      // Type guard for error objects
      const isErrorWithCode = (error: unknown): error is { code: string; message?: string } => {
        return typeof error === 'object' && error !== null && 'code' in error;
      };

      const isErrorWithMessage = (error: unknown): error is { message: string; error?: string } => {
        return typeof error === 'object' && error !== null && 'message' in error;
      };

      const isErrorWithErrorField = (error: unknown): error is { error: string } => {
        return typeof error === 'object' && error !== null && 'error' in error;
      };

      // Check for network errors first
      if (isErrorWithCode(err) && (err.code === 'ERR_NETWORK' || err.message?.includes('Network Error'))) {
        errorMessage = 'Cannot connect to server. Please make sure the backend is running on port 5000.';
      }
      // If err is the direct API response object with an error field
      else if (isErrorWithErrorField(err)) {
        errorMessage = err.error;
      }
      // If err is wrapped by React Query or has a message
      else if (isErrorWithMessage(err)) {
        errorMessage = err.message;
      }
      // If err is a string
      else if (typeof err === 'string') {
        errorMessage = err;
      }

      setError(errorMessage);
      console.error('Set error message:', errorMessage);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e3a5f] via-[#2d5a8f] to-[#1e3a5f] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02ek0yNCA0MmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

      <div className="max-w-md w-full space-y-8 relative z-10 bg-white rounded-2xl shadow-2xl p-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link
              href="/register"
              className="font-medium text-[#1e3a5f] hover:text-[#2d5a8f]"
            >
              create a new account
            </Link>
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}
          
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#1e3a5f] focus:border-[#1e3a5f] focus:z-10 sm:text-sm"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#1e3a5f] focus:border-[#1e3a5f] focus:z-10 sm:text-sm"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loginMutation.isPending}
              onClick={(e) => {
                // Ensure form submission is handled properly
                if (loginMutation.isPending) {
                  e.preventDefault();
                  e.stopPropagation();
                }
              }}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#1e3a5f] hover:bg-[#2d5a8f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1e3a5f] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loginMutation.isPending ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;