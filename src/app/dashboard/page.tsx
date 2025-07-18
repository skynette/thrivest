'use client';

import { CheckCircle, AlertCircle, Clock, FileText, Loader2 } from 'lucide-react';
import { useApplicationStats } from '@/hooks/queries/useDashboard';
import { useMyApplications } from '@/hooks/useApplications';
import type { Application } from '@/types/common';

// Helper function to format date
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', { 
    day: '2-digit', 
    month: '2-digit', 
    year: 'numeric' 
  });
};

export default function DashboardPage() {
    const { data: stats, isLoading: statsLoading } = useApplicationStats();
    const { data: applications, isLoading: applicationsLoading } = useMyApplications();

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'Approved':
                return <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-green-500" />;
            case 'Under Review':
                return <Clock className="h-6 w-6 md:h-8 md:w-8 text-yellow-500" />;
            case 'Rejected':
                return <AlertCircle className="h-6 w-6 md:h-8 md:w-8 text-red-500" />;
            default:
                return <FileText className="h-6 w-6 md:h-8 md:w-8 text-blue-500" />;
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Approved':
                return 'text-green-600';
            case 'Under Review':
                return 'text-yellow-600';
            case 'Rejected':
                return 'text-red-600';
            default:
                return 'text-blue-600';
        }
    };

    return (
        <div className="space-y-4 md:space-y-6 p-4 md:p-0">
            {/* Status Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {/* Eligibility Status */}
                <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                        <div className="flex-1">
                            <h3 className="text-xs font-medium text-[#0B2653] uppercase leading-tight">
                                ELIGIBILITY STATUS
                            </h3>
                            <p className="text-lg md:text-xl font-semibold text-gray-600 mt-2">
                                {statsLoading ? (
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                ) : (
                                    stats?.eligibilityStatus || 'Not Started'
                                )}
                            </p>
                        </div>
                        <div className="bg-blue-50 rounded-full p-2 flex-shrink-0">
                            {statsLoading ? (
                                <Loader2 className="h-6 w-6 md:h-8 md:w-8 animate-spin text-blue-500" />
                            ) : (
                                getStatusIcon(stats?.eligibilityStatus || 'Not Started')
                            )}
                        </div>
                    </div>
                </div>

                {/* Current Fund */}
                <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
                    <div>
                        <h3 className="text-xs font-medium text-[#0B2653] uppercase leading-tight">
                            CURRENT FUND FOR<br />YOUR BUSINESS STAGE
                        </h3>
                        <p className="text-lg md:text-xl font-semibold text-gray-600 mt-2">
                            {statsLoading ? (
                                <Loader2 className="h-5 w-5 animate-spin" />
                            ) : (
                                stats?.currentFund || 'N/A'
                            )}
                        </p>
                    </div>
                </div>

                {/* Business Stage */}
                <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
                    <div>
                        <h3 className="text-xs font-medium text-[#0B2653] uppercase leading-tight">
                            YOUR BUSINESS<br />STAGE
                        </h3>
                        <p className="text-lg md:text-xl font-semibold text-gray-600 mt-2">
                            {statsLoading ? (
                                <Loader2 className="h-5 w-5 animate-spin" />
                            ) : (
                                stats?.businessStage || 'N/A'
                            )}
                        </p>
                    </div>
                </div>
            </div>

            {/* Account Details Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="p-4 md:p-6">
                    <h3 className="text-base font-semibold text-[#3B82F6] mb-4 uppercase">ACCOUNT DETAILS</h3>
                    <div className="overflow-x-auto">
                        {applicationsLoading ? (
                            <div className="flex items-center justify-center py-8">
                                <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
                                <span className="ml-2 text-gray-500">Loading applications...</span>
                            </div>
                        ) : applications?.applications && applications.applications.length > 0 ? (
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-200">
                                        <th className="text-left py-3 px-2 md:px-4 text-xs md:text-sm font-medium text-gray-500">Date</th>
                                        <th className="text-left py-3 px-2 md:px-4 text-xs md:text-sm font-medium text-gray-500">Amount</th>
                                        <th className="text-left py-3 px-2 md:px-4 text-xs md:text-sm font-medium text-gray-500">Business Stage</th>
                                        <th className="text-left py-3 px-2 md:px-4 text-xs md:text-sm font-medium text-gray-500">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {applications.applications
                                        .sort((a: Application, b: Application) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                                        .map((app: Application) => (
                                            <tr key={app.id} className="border-b border-gray-200">
                                                <td className="py-3 px-2 md:px-4 text-xs md:text-sm">
                                                    {formatDate(app.createdAt)}
                                                </td>
                                                <td className="py-3 px-2 md:px-4 text-xs md:text-sm">
                                                    {app.fundingRequested ? `₦${parseInt(app.fundingRequested).toLocaleString()}` : 'N/A'}
                                                </td>
                                                <td className="py-3 px-2 md:px-4 text-xs md:text-sm">
                                                    {app.fundType === 'IGNITE' ? 'Ignite Fund' : 
                                                     app.fundType === 'ELEVATE' ? 'Elevate Fund' : 
                                                     app.fundType || 'N/A'}
                                                </td>
                                                <td className="py-3 px-2 md:px-4 text-xs md:text-sm font-medium">
                                                    <span className={`${getStatusColor(app.status)} capitalize`}>
                                                        {app.status?.replace('_', ' ').toLowerCase() || 'unknown'}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        ) : (
                            <div className="text-center py-8">
                                <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                                <p className="text-gray-500">No applications found</p>
                                <p className="text-sm text-gray-400 mt-1">Your applications will appear here once you submit them</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Business Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="p-4 md:p-6">
                    <h3 className="text-base font-semibold text-[#3B82F6] mb-4 uppercase">TELL US ABOUT YOUR BUSINESS</h3>
                    <div className="space-y-3 md:space-y-4">
                        <div className="flex items-start space-x-3">
                            <div className="mt-0.5 flex-shrink-0">
                                <div className="h-5 w-5 relative">
                                    <div className="absolute inset-0 bg-blue-100 rounded-sm"></div>
                                    <CheckCircle className="h-5 w-5 text-blue-500 absolute" />
                                </div>
                            </div>
                            <p className="text-gray-700 text-sm md:text-base">Is your business women-led or women-owned?</p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="mt-0.5 flex-shrink-0">
                                <div className="h-5 w-5 relative">
                                    <div className="absolute inset-0 bg-blue-100 rounded-sm"></div>
                                    <CheckCircle className="h-5 w-5 text-blue-500 absolute" />
                                </div>
                            </div>
                            <p className="text-gray-700 text-sm md:text-base">Are you registered and operating in Sub-Saharan Africa?</p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="mt-0.5 flex-shrink-0">
                                <div className="h-5 w-5 relative">
                                    <div className="absolute inset-0 bg-blue-100 rounded-sm"></div>
                                    <CheckCircle className="h-5 w-5 text-blue-500 absolute" />
                                </div>
                            </div>
                            <p className="text-gray-700 text-sm md:text-base">Are you revenue-generating or have a viable model?</p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="mt-0.5 flex-shrink-0">
                                <div className="h-5 w-5 relative">
                                    <div className="absolute inset-0 bg-blue-100 rounded-sm"></div>
                                    <CheckCircle className="h-5 w-5 text-blue-500 absolute" />
                                </div>
                            </div>
                            <p className="text-gray-700 text-sm md:text-base">Are you in one of our focus sectors (e.g. Food and agribusiness, healthcare, technology, manufacturing, hospitality, renewable energy, retail and consumer goods)?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}