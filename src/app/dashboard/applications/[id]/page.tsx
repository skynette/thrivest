'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { applicationApi } from '@/lib/api';
import type { Application } from '@/types/common';
import { format } from 'date-fns';
import { 
    ArrowLeft, 
    Download, 
    FileText, 
    Clock, 
    CheckCircle, 
    XCircle, 
    AlertCircle,
    Building,
    User,
    MapPin,
    Calendar,
    DollarSign,
    Target,
    Briefcase,
    Eye
} from 'lucide-react';

export default function ApplicationDetailPage() {
    const params = useParams();
    const router = useRouter();
    const [application, setApplication] = useState<Application | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if (params.id) {
            fetchApplication(params.id as string);
        }
    }, [params.id]);

    const fetchApplication = async (id: string) => {
        try {
            const response = await applicationApi.getById(id);
            if (response.success) {
                setApplication(response.application);
            } else {
                setError('Failed to fetch application details');
            }
        } catch (err) {
            console.error('Error fetching application:', err);
            const error = err as { error?: string; message?: string };
            setError(error?.error || error?.message || 'Failed to load application details');
        } finally {
            setIsLoading(false);
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'DRAFT':
                return <FileText className="h-6 w-6 text-gray-500" />;
            case 'SUBMITTED':
                return <Clock className="h-6 w-6 text-blue-500" />;
            case 'UNDER_REVIEW':
                return <Eye className="h-6 w-6 text-yellow-500" />;
            case 'APPROVED':
                return <CheckCircle className="h-6 w-6 text-green-500" />;
            case 'REJECTED':
                return <XCircle className="h-6 w-6 text-red-500" />;
            case 'NEEDS_REVISION':
                return <AlertCircle className="h-6 w-6 text-orange-500" />;
            default:
                return <FileText className="h-6 w-6 text-gray-500" />;
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
                    <p className="mt-4 text-gray-600">Loading application details...</p>
                </div>
            </div>
        );
    }

    if (error || !application) {
        return (
            <div className="max-w-6xl mx-auto py-6">
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                    {error || 'Application not found'}
                </div>
                <button
                    onClick={() => router.push('/dashboard/applications')}
                    className="mt-4 text-[#0B2653] hover:underline flex items-center"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Applications
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto py-6">
            {/* Header */}
            <div className="mb-6">
                <button
                    onClick={() => router.push('/dashboard/applications')}
                    className="text-[#0B2653] hover:underline flex items-center mb-4"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Applications
                </button>
                
                <div className="flex items-start justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-[#0B2653] mb-2">{application.businessName}</h1>
                        <div className="flex items-center gap-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(application.status)} flex items-center gap-2`}>
                                {getStatusIcon(application.status)}
                                {application.status.replace(/_/g, ' ')}
                            </span>
                            <span className="text-sm text-gray-600">
                                Application ID: {application.id.slice(0, 8)}...
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Review Notes (if any) */}
            {application.reviewNotes && (
                <div className="mb-6 bg-amber-50 border border-amber-200 p-4 rounded-lg">
                    <h3 className="font-semibold text-amber-900 mb-2">Review Notes</h3>
                    <p className="text-amber-800">{application.reviewNotes}</p>
                    {application.reviewedAt && (
                        <p className="text-sm text-amber-600 mt-2">
                            Reviewed on {format(new Date(application.reviewedAt), 'MMM dd, yyyy')}
                        </p>
                    )}
                </div>
            )}

            {/* Application Details */}
            <div className="space-y-6">
                {/* Business Overview */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h2 className="text-lg font-semibold text-[#0B2653] mb-4 flex items-center">
                        <Building className="h-5 w-5 mr-2" />
                        Business Overview
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm text-gray-600">Business Name</p>
                            <p className="font-medium">{application.businessName}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Location</p>
                            <p className="font-medium flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {application.businessLocation}
                            </p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Year Founded</p>
                            <p className="font-medium flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {application.yearFounded}
                            </p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Legal Status</p>
                            <p className="font-medium">{application.legalStatus}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Sector</p>
                            <p className="font-medium">{application.sector}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Website</p>
                            <p className="font-medium">
                                {application.website ? (
                                    <a href={application.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                        {application.website}
                                    </a>
                                ) : (
                                    'Not provided'
                                )}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Founder Information */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h2 className="text-lg font-semibold text-[#0B2653] mb-4 flex items-center">
                        <User className="h-5 w-5 mr-2" />
                        Founder Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm text-gray-600">Name</p>
                            <p className="font-medium">{application.founderName}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Gender</p>
                            <p className="font-medium">{application.founderGender}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Role</p>
                            <p className="font-medium">{application.founderRole}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Email</p>
                            <p className="font-medium">{application.founderEmail}</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="text-sm text-gray-600 mb-2">Educational Background & Experience</p>
                        <p className="text-gray-800 whitespace-pre-wrap">{application.founderEducation}</p>
                    </div>
                    <div className="mt-4">
                        <p className="text-sm text-gray-600 mb-2">Motivation</p>
                        <p className="text-gray-800 whitespace-pre-wrap">{application.motivation}</p>
                    </div>
                </div>

                {/* Business Concept */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h2 className="text-lg font-semibold text-[#0B2653] mb-4 flex items-center">
                        <Target className="h-5 w-5 mr-2" />
                        Business Concept & Vision
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <p className="text-sm text-gray-600 mb-2">Business Idea</p>
                            <p className="text-gray-800 whitespace-pre-wrap">{application.businessIdea}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600 mb-2">Target Market</p>
                            <p className="text-gray-800 whitespace-pre-wrap">{application.targetMarket}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600 mb-2">Problem Being Solved</p>
                            <p className="text-gray-800 whitespace-pre-wrap">{application.problem}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600 mb-2">Long-term Vision</p>
                            <p className="text-gray-800 whitespace-pre-wrap">{application.vision}</p>
                        </div>
                    </div>
                </div>

                {/* Product/Service Status */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h2 className="text-lg font-semibold text-[#0B2653] mb-4 flex items-center">
                        <Briefcase className="h-5 w-5 mr-2" />
                        Product/Service Status
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <p className="text-sm text-gray-600 mb-2">Development Stage</p>
                            <div className="flex flex-wrap gap-2">
                                {application.developmentStage.map((stage) => (
                                    <span key={stage} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                                        {stage}
                                    </span>
                                ))}
                            </div>
                        </div>
                        {application.productDescription && (
                            <div>
                                <p className="text-sm text-gray-600 mb-2">Product Description</p>
                                <p className="text-gray-800">{application.productDescription}</p>
                            </div>
                        )}
                        {application.valueProposition && (
                            <div>
                                <p className="text-sm text-gray-600 mb-2">Value Proposition</p>
                                <p className="text-gray-800">{application.valueProposition}</p>
                            </div>
                        )}
                        {application.demoLink && (
                            <div>
                                <p className="text-sm text-gray-600 mb-2">Demo Link</p>
                                <a href={application.demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    {application.demoLink}
                                </a>
                            </div>
                        )}
                    </div>
                </div>

                {/* Market Insight */}
                {(application.competitiveLandscape || application.marketStrategy || application.pricingModel) && (
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h2 className="text-lg font-semibold text-[#0B2653] mb-4">Market Insight</h2>
                        <div className="space-y-4">
                            {application.competitiveLandscape && (
                                <div>
                                    <p className="text-sm text-gray-600 mb-2">Competitive Landscape</p>
                                    <p className="text-gray-800">{application.competitiveLandscape}</p>
                                </div>
                            )}
                            {application.marketStrategy && (
                                <div>
                                    <p className="text-sm text-gray-600 mb-2">Go-to-Market Strategy</p>
                                    <p className="text-gray-800">{application.marketStrategy}</p>
                                </div>
                            )}
                            {application.pricingModel && (
                                <div>
                                    <p className="text-sm text-gray-600 mb-2">Pricing Model</p>
                                    <p className="text-gray-800">{application.pricingModel}</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Funding Requirements */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h2 className="text-lg font-semibold text-[#0B2653] mb-4 flex items-center">
                        <DollarSign className="h-5 w-5 mr-2" />
                        Funding Requirements
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <p className="text-sm text-gray-600 mb-2">Fund Type</p>
                            <p className="font-medium text-lg">{application.fundType}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600 mb-2">Funding Requested</p>
                            <p className="font-medium text-lg">{application.fundingRequested}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600 mb-2">Fund Utilization</p>
                            <p className="text-gray-800">{application.fundUtilization}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600 mb-2">Timeline</p>
                            <p className="text-gray-800">{application.timeline}</p>
                        </div>
                        {application.previousFunding && (
                            <div>
                                <p className="text-sm text-gray-600 mb-2">Previous Funding</p>
                                <p className="text-gray-800">{application.previousFunding}</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Impact & ESG */}
                {(application.impactDescription || application.jobsAnticipated || application.inclusionPlans) && (
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h2 className="text-lg font-semibold text-[#0B2653] mb-4">Impact & ESG Commitment</h2>
                        <div className="space-y-4">
                            {application.impactDescription && (
                                <div>
                                    <p className="text-sm text-gray-600 mb-2">Impact Description</p>
                                    <p className="text-gray-800">{application.impactDescription}</p>
                                </div>
                            )}
                            {application.jobsAnticipated && (
                                <div>
                                    <p className="text-sm text-gray-600 mb-2">Jobs Anticipated</p>
                                    <p className="text-gray-800">{application.jobsAnticipated}</p>
                                </div>
                            )}
                            {application.inclusionPlans && (
                                <div>
                                    <p className="text-sm text-gray-600 mb-2">Inclusion Plans</p>
                                    <p className="text-gray-800">{application.inclusionPlans}</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Documents */}
                {application.documents && application.documents.length > 0 && (
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h2 className="text-lg font-semibold text-[#0B2653] mb-4 flex items-center">
                            <FileText className="h-5 w-5 mr-2" />
                            Supporting Documents
                        </h2>
                        <div className="space-y-3">
                            {application.documents.map((doc) => (
                                <div key={doc.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div className="flex items-center">
                                        <FileText className="h-5 w-5 text-gray-500 mr-3" />
                                        <div>
                                            <p className="font-medium">{doc.documentType.replace(/_/g, ' ')}</p>
                                            <p className="text-sm text-gray-600">{doc.fileName}</p>
                                        </div>
                                    </div>
                                    <a
                                        href={doc.fileUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-[#0B2653] hover:underline"
                                    >
                                        <Download className="h-4 w-4 mr-1" />
                                        Download
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Submission Details */}
                <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Submission Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                            <p className="text-gray-600">Created on</p>
                            <p className="font-medium">{format(new Date(application.createdAt), 'MMM dd, yyyy HH:mm')}</p>
                        </div>
                        {application.submittedAt && (
                            <div>
                                <p className="text-gray-600">Submitted on</p>
                                <p className="font-medium">{format(new Date(application.submittedAt), 'MMM dd, yyyy HH:mm')}</p>
                            </div>
                        )}
                        <div>
                            <p className="text-gray-600">Last updated</p>
                            <p className="font-medium">{format(new Date(application.updatedAt), 'MMM dd, yyyy HH:mm')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}