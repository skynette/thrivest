'use client';

import { useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { useAdminUser, useUpdateUserRole, useUpdateUserStatus } from '@/hooks/queries/useAdmin';
import { ArrowLeft, Save, User, Shield, Mail, Phone, Calendar } from 'lucide-react';
import Link from 'next/link';

interface EditUserPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function EditUserPage({ params }: EditUserPageProps) {
  const resolvedParams = use(params);
  const router = useRouter();
  const { data: userResponse, isLoading, error } = useAdminUser(resolvedParams.id);
  const updateUserRoleMutation = useUpdateUserRole();
  const updateUserStatusMutation = useUpdateUserStatus();

  const user = userResponse?.user;

  const [formData, setFormData] = useState({
    role: user?.role || 'APPLICANT',
    isActive: user?.isActive ?? true,
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setIsSaving(true);
    try {
      // Update role if changed
      if (formData.role !== user.role) {
        await updateUserRoleMutation.mutateAsync({
          id: user.id,
          role: formData.role,
        });
      }

      // Update status if changed
      if (formData.isActive !== user.isActive) {
        await updateUserStatusMutation.mutateAsync({
          id: user.id,
          isActive: formData.isActive,
        });
      }

      // Redirect back to users list
      router.push('/admin/users');
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Failed to update user. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'SUPER_ADMIN':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'ADMIN':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'REVIEWER':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'APPLICANT':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0B2653] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading user details...</p>
        </div>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading user details</p>
          <p className="text-gray-500 text-sm mb-4">User not found or access denied</p>
          <Link
            href="/admin/users"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#0B2653] text-white rounded hover:bg-[#0a1f42]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Users
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/users"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Users
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-[#0B2653]">Edit User</h1>
            <p className="text-gray-600">Modify user role and permissions</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Info Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="text-center">
              <div className="bg-[#0B2653] rounded-full p-4 inline-block mb-4">
                <User className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {user.firstName} {user.lastName}
              </h3>
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border mt-2 ${getRoleColor(user.role)}`}>
                <Shield className="h-4 w-4 mr-1" />
                {user.role.replace('_', ' ')}
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-600">{user.email}</span>
              </div>
              {user.phone && (
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-600">{user.phone}</span>
                </div>
              )}
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span className="text-gray-600">
                  Joined {new Date(user.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Status</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  user.isActive 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {user.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit}>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">User Permissions</h3>

              <div className="space-y-6">
                {/* Role Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    User Role
                  </label>
                  <div className="space-y-3">
                    {[
                      { value: 'APPLICANT', label: 'Applicant', description: 'Can submit and manage applications' },
                      { value: 'REVIEWER', label: 'Reviewer', description: 'Can review and comment on applications' },
                      { value: 'ADMIN', label: 'Admin', description: 'Can manage users and applications' },
                      { value: 'SUPER_ADMIN', label: 'Super Admin', description: 'Full system access and user management' },
                    ].map((role) => (
                      <div
                        key={role.value}
                        className={`relative flex items-start p-4 border rounded-lg cursor-pointer transition-colors ${
                          formData.role === role.value
                            ? 'border-[#0B2653] bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => handleChange('role', role.value)}
                      >
                        <input
                          type="radio"
                          name="role"
                          value={role.value}
                          checked={formData.role === role.value}
                          onChange={(e) => handleChange('role', e.target.value)}
                          className="mt-1 h-4 w-4 text-[#0B2653] border-gray-300 focus:ring-[#0B2653]"
                        />
                        <div className="ml-3 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-900">{role.label}</span>
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(role.value)}`}>
                              {role.value.replace('_', ' ')}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">{role.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status Toggle */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Account Status
                  </label>
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Account Active</h4>
                      <p className="text-sm text-gray-500">
                        {formData.isActive 
                          ? 'User can access the platform and submit applications'
                          : 'User account is disabled and cannot access the platform'
                        }
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.isActive}
                        onChange={(e) => handleChange('isActive', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0B2653]"></div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-200">
                <Link
                  href="/admin/users"
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="flex items-center gap-2 px-6 py-2 bg-[#0B2653] text-white rounded-md hover:bg-[#0a1f42] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSaving ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4" />
                      Save Changes
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}