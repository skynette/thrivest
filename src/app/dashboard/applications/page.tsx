'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { applicationApi } from '@/lib/api';
import type { Application } from '@/types/common';
import { format } from 'date-fns';
import { FileText, Eye, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

function ApplicationsContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [applications, setApplications] = useState<Application[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const showSuccess = searchParams.get('success') === 'true';

    useEffect(() => {
        fetchApplications();
    }, []);

    const fetchApplications = async () => {
        try {
            const response = await applicationApi.getMyApplications();
            if (response.success) {
                setApplications(response.applications);
            } else {
                setError('Failed to fetch applications');
            }
        } catch (err) {
            console.error('Error fetching applications:', err);
            const error = err as { error?: string; message?: string };
            setError(error?.error || error?.message || 'Failed to load applications');
        } finally {
            setIsLoading(false);
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'DRAFT':
                return <FileText className="h-5 w-5 text-gray-500" />;
            case 'SUBMITTED':
                return <Clock className="h-5 w-5 text-blue-500" />;
            case 'UNDER_REVIEW':
                return <Eye className="h-5 w-5 text-yellow-500" />;
            case 'APPROVED':
                return <CheckCircle className="h-5 w-5 text-green-500" />;
            case 'REJECTED':
                return <XCircle className="h-5 w-5 text-red-500" />;
            case 'NEEDS_REVISION':
                return <AlertCircle className="h-5 w-5 text-orange-500" />;
            default:
                return <FileText className="h-5 w-5 text-gray-500" />;
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'DRAFT':
                return 'bg-gray-100 text-gray-800';
            case 'SUBMITTED':
                return 'bg-blue-100 text-blue-800';
            case 'UNDER_REVIEW':
                return 'bg-yellow-100 text-yellow-800';
            case 'APPROVED':
                return 'bg-green-100 text-green-800';
            case 'REJECTED':
                return 'bg-red-100 text-red-800';
            case 'NEEDS_REVISION':
                return 'bg-orange-100 text-orange-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0B2653] mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading applications...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto py-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-[#0B2653]">My Applications</h1>
                <p className="text-gray-600 mt-2">Track and manage your funding applications</p>
            </div>

            {/* Success Message */}
            {showSuccess && (
                <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded">
                    <p className="font-semibold">Application submitted successfully!</p>
                    <p className="text-sm mt-1">We will review your application and get back to you soon.</p>
                </div>
            )}

            {/* Error Message */}
            {error && (
                <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                    {error}
                </div>
            )}

            {/* Applications List */}
            {applications.length === 0 ? (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                    <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No applications yet</h3>
                    <p className="text-gray-600 mb-6">Start your funding journey by submitting an application</p>
                    <button
                        onClick={() => router.push('/dashboard/eligibility')}
                        className="bg-[#0B2653] text-white px-6 py-2 rounded-md hover:bg-[#0a1f42]"
                    >
                        Start New Application
                    </button>
                </div>
            ) : (
                <div className="space-y-4">
                    {applications.map((application) => (
                        <div
                            key={application.id}
                            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
                            onClick={() => router.push(`/dashboard/applications/${application.id}`)}
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {application.businessName}
                                        </h3>
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}>
                                            {application.status.replace(/_/g, ' ')}
                                        </span>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-3">
                                        <div>
                                            <span className="font-medium">Fund Type:</span> {application.fundType}
                                        </div>
                                        <div>
                                            <span className="font-medium">Sector:</span> {application.sector}
                                        </div>
                                        <div>
                                            <span className="font-medium">Amount:</span> {application.fundingRequested}
                                        </div>
                                        <div>
                                            <span className="font-medium">Location:</span> {application.businessLocation}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <p className="text-sm text-gray-500">
                                            Submitted on {format(new Date(application.createdAt), 'MMM dd, yyyy')}
                                        </p>
                                        {application.reviewNotes && (
                                            <p className="text-sm text-amber-600">
                                                Review notes available
                                            </p>
                                        )}
                                    </div>
                                </div>
                                
                                <div className="ml-4">
                                    {getStatusIcon(application.status)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* New Application Button */}
            {applications.length > 0 && (
                <div className="mt-6 text-center">
                    <button
                        onClick={() => router.push('/dashboard/eligibility')}
                        className="bg-[#0B2653] text-white px-6 py-2 rounded-md hover:bg-[#0a1f42]"
                    >
                        Start New Application
                    </button>
                </div>
            )}
        </div>
    );
}

export default function ApplicationsPage() {
    return (
        <Suspense fallback={
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0B2653] mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading...</p>
                </div>
            </div>
        }>
            <ApplicationsContent />
        </Suspense>
    );
}