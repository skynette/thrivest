'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAdminApplication, useUpdateApplicationStatus } from '@/hooks/queries/useAdmin';
import { format } from 'date-fns';
import { 
  ArrowLeft, 
  CheckCircle, 
  XCircle, 
  Edit,
  MessageSquare,
  Download,
  Building,
  User,
  MapPin,
  Calendar,
  DollarSign,
  Target,
  FileText
} from 'lucide-react';

export default function AdminApplicationDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [reviewNotes, setReviewNotes] = useState('');

  // React Query hooks
  const { 
    data: applicationResponse, 
    isLoading, 
    error 
  } = useAdminApplication(params.id as string);
  
  const updateStatusMutation = useUpdateApplicationStatus();

  const application = applicationResponse?.application;

  // Set review notes when application loads
  useState(() => {
    if (application?.reviewNotes) {
      setReviewNotes(application.reviewNotes);
    }
  });

  const handleStatusUpdate = async (status: string) => {
    if (!application) return;
    
    try {
      await updateStatusMutation.mutateAsync({
        id: application.id,
        status,
        reviewNotes: reviewNotes || undefined
      });
    } catch (err) {
      console.error('Error updating status:', err);
      alert('Failed to update application status');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'APPROVED':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'REJECTED':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'UNDER_REVIEW':
        return 'bg-sky-100 text-sky-800 border-sky-200';
      case 'SUBMITTED':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'NEEDS_REVISION':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
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

  if (error || (!isLoading && !application)) {
    return (
      <div className="max-w-6xl mx-auto py-6">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {typeof error === 'string' ? error : 'Application not found'}
        </div>
        <button
          onClick={() => router.push('/admin/applications')}
          className="mt-4 text-[#0B2653] hover:underline flex items-center"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Applications
        </button>
      </div>
    );
  }

  if (!application) {
    return (
      <div className="max-w-6xl mx-auto py-6">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          Application not found
        </div>
        <button
          onClick={() => router.push('/admin/applications')}
          className="mt-4 text-[#0B2653] hover:underline flex items-center"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Applications
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
        <div>
          <button
            onClick={() => router.push('/admin/applications')}
            className="text-[#0B2653] hover:underline flex items-center mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Applications
          </button>
          
          <h1 className="text-2xl font-bold text-[#0B2653] mb-2">{application.businessName}</h1>
          <div className="flex flex-wrap items-center gap-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(application.status)}`}>
              {application.status.replace(/_/g, ' ')}
            </span>
            <span className="text-sm text-gray-600">
              ID: {application.id.slice(0, 8)}...
            </span>
            <span className="text-sm text-gray-600">
              Fund: {application.fundType}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => router.push(`/admin/applications/${application.id}/edit`)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <Edit className="h-4 w-4" />
            Edit
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-600">Name</p>
                <p className="font-medium">{application.founderName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-medium">{application.founderEmail}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Gender</p>
                <p className="font-medium">{application.founderGender}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Role</p>
                <p className="font-medium">{application.founderRole}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Educational Background & Experience</p>
                <p className="text-gray-800 whitespace-pre-wrap">{application.founderEducation}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Motivation</p>
                <p className="text-gray-800 whitespace-pre-wrap">{application.motivation}</p>
              </div>
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

          {/* Funding Requirements */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-[#0B2653] mb-4 flex items-center">
              <DollarSign className="h-5 w-5 mr-2" />
              Funding Requirements
            </h2>
            <div className="space-y-4">
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
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Status Actions */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Status</h3>
            
            <div className="space-y-3">
              <button
                onClick={() => handleStatusUpdate('UNDER_REVIEW')}
                disabled={updateStatusMutation.isPending || application.status === 'UNDER_REVIEW'}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <MessageSquare className="h-4 w-4" />
                Mark Under Review
              </button>
              
              <button
                onClick={() => handleStatusUpdate('APPROVED')}
                disabled={updateStatusMutation.isPending || application.status === 'APPROVED'}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <CheckCircle className="h-4 w-4" />
                Approve Application
              </button>
              
              <button
                onClick={() => handleStatusUpdate('REJECTED')}
                disabled={updateStatusMutation.isPending || application.status === 'REJECTED'}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <XCircle className="h-4 w-4" />
                Reject Application
              </button>
              
              <button
                onClick={() => handleStatusUpdate('NEEDS_REVISION')}
                disabled={updateStatusMutation.isPending || application.status === 'NEEDS_REVISION'}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Edit className="h-4 w-4" />
                Request Revision
              </button>
            </div>
          </div>

          {/* Review Notes */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Review Notes</h3>
            <textarea
              value={reviewNotes}
              onChange={(e) => setReviewNotes(e.target.value)}
              placeholder="Add review notes..."
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B2653] focus:border-transparent"
            />
            <button
              onClick={() => handleStatusUpdate(application.status)}
              disabled={updateStatusMutation.isPending}
              className="mt-3 w-full px-4 py-2 bg-[#0B2653] text-white rounded-md hover:bg-[#0a1f42] disabled:opacity-50"
            >
              {updateStatusMutation.isPending ? 'Saving...' : 'Save Notes'}
            </button>
          </div>

          {/* Application Info */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Info</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-600">Created</p>
                <p className="font-medium">{format(new Date(application.createdAt), 'MMM dd, yyyy HH:mm')}</p>
              </div>
              {application.submittedAt && (
                <div>
                  <p className="text-gray-600">Submitted</p>
                  <p className="font-medium">{format(new Date(application.submittedAt), 'MMM dd, yyyy HH:mm')}</p>
                </div>
              )}
              <div>
                <p className="text-gray-600">Last Updated</p>
                <p className="font-medium">{format(new Date(application.updatedAt), 'MMM dd, yyyy HH:mm')}</p>
              </div>
              {application.reviewedAt && (
                <div>
                  <p className="text-gray-600">Reviewed</p>
                  <p className="font-medium">{format(new Date(application.reviewedAt), 'MMM dd, yyyy HH:mm')}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}