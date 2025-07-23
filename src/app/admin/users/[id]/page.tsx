'use client';

import { use } from 'react';
import { useAdminUser } from '@/hooks/queries/useAdmin';
import { ArrowLeft, Edit, Shield, Mail, Phone, Calendar, Activity, FileText } from 'lucide-react';
import Link from 'next/link';
import { format } from 'date-fns';

interface UserViewPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function UserViewPage({ params }: UserViewPageProps) {
  const resolvedParams = use(params);
  const { data: userResponse, isLoading, error } = useAdminUser(resolvedParams.id);

  const user = userResponse?.user;

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

  const getRoleDescription = (role: string) => {
    switch (role) {
      case 'SUPER_ADMIN':
        return 'Full system access and user management';
      case 'ADMIN':
        return 'Can manage users and applications';
      case 'REVIEWER':
        return 'Can review and comment on applications';
      case 'APPLICANT':
        return 'Can submit and manage applications';
      default:
        return 'Standard user access';
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
            <h1 className="text-2xl font-bold text-[#0B2653]">User Details</h1>
            <p className="text-gray-600">View user information and activity</p>
          </div>
        </div>
        <Link
          href={`/admin/users/${resolvedParams.id}/edit`}
          className="flex items-center gap-2 px-4 py-2 bg-[#0B2653] text-white rounded-md hover:bg-[#0a1f42] transition-colors"
        >
          <Edit className="h-4 w-4" />
          Edit User
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="text-center">
              <div className="bg-[#0B2653] rounded-full p-4 inline-block mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {user.firstName} {user.lastName}
              </h3>
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border mt-2 ${getRoleColor(user.role)}`}>
                <Shield className="h-4 w-4 mr-1" />
                {user.role.replace('_', ' ')}
              </div>
              <p className="text-sm text-gray-500 mt-2">
                {getRoleDescription(user.role)}
              </p>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-600 break-all">{user.email}</span>
              </div>
              {user.phone && (
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-600">{user.phone}</span>
                </div>
              )}
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-600">
                  Joined {format(new Date(user.createdAt), 'MMM dd, yyyy')}
                </span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Account Status</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  user.isActive 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {user.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="text-gray-500">Last Updated</span>
                <span className="text-gray-600">
                  {format(new Date(user.updatedAt), 'MMM dd, yyyy')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* User Details & Activity */}
        <div className="lg:col-span-2 space-y-6">
          {/* Account Information */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-500">User ID</label>
                <p className="mt-1 text-sm text-gray-900 font-mono bg-gray-50 p-2 rounded border">
                  {user.id}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">Email Verified</label>
                <p className="mt-1 text-sm">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Verified
                  </span>
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">Account Created</label>
                <p className="mt-1 text-sm text-gray-900">
                  {format(new Date(user.createdAt), 'EEEE, MMMM dd, yyyy \'at\' h:mm a')}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">Last Modified</label>
                <p className="mt-1 text-sm text-gray-900">
                  {format(new Date(user.updatedAt), 'EEEE, MMMM dd, yyyy \'at\' h:mm a')}
                </p>
              </div>
            </div>
          </div>

          {/* Applications */}
          {user.applications && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Applications</h3>
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm">
                  {user.applications.length} total
                </span>
              </div>
              
              {user.applications.length > 0 ? (
                <div className="space-y-3">
                  {user.applications.map((application) => (
                    <div key={application.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {application.businessName || 'Unnamed Application'}
                          </p>
                          <p className="text-xs text-gray-500">
                            {application.fundType} • {application.submittedAt ? `Submitted ${format(new Date(application.submittedAt), 'MMM dd, yyyy')}` : 'Not submitted'}
                          </p>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        application.status === 'APPROVED' ? 'bg-green-100 text-green-800' :
                        application.status === 'REJECTED' ? 'bg-red-100 text-red-800' :
                        application.status === 'UNDER_REVIEW' ? 'bg-sky-100 text-sky-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {application.status.replace('_', ' ')}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <FileText className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500 text-sm">No applications submitted yet</p>
                </div>
              )}
            </div>
          )}

          {/* Activity Log */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="h-5 w-5 text-gray-400" />
              <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="bg-blue-100 p-1 rounded-full">
                  <Shield className="h-3 w-3 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">Account created</p>
                  <p className="text-xs text-gray-500">
                    {format(new Date(user.createdAt), 'MMM dd, yyyy \'at\' h:mm a')}
                  </p>
                </div>
              </div>
              
              {user.updatedAt !== user.createdAt && (
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="bg-green-100 p-1 rounded-full">
                    <Edit className="h-3 w-3 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">Profile updated</p>
                    <p className="text-xs text-gray-500">
                      {format(new Date(user.updatedAt), 'MMM dd, yyyy \'at\' h:mm a')}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}