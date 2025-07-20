'use client';

import { useState, useMemo } from 'react';
import { useAdminApplications } from '@/hooks/queries/useAdmin';
import { format } from 'date-fns';
import { 
  Eye, 
  Edit, 
  CheckCircle, 
  XCircle, 
  Clock, 
  FileText,
  Download
} from 'lucide-react';
import SearchFilter from '@/components/admin/SearchFilter';
import Pagination from '@/components/admin/Pagination';
import Link from 'next/link';

export default function AdminApplicationsPage() {
  // Search and filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('createdAt');
  const [sortOrder] = useState<'asc' | 'desc'>('desc');
  const [filters, setFilters] = useState<Record<string, string>>({});
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // React Query hooks
  const { 
    data: applicationsResponse, 
    isLoading, 
    error,
    refetch 
  } = useAdminApplications({
    status: filters.status || undefined,
    fundType: filters.fundType || undefined,
    search: searchQuery || undefined,
    page: currentPage,
    limit: itemsPerPage,
  });

  // Status updates handled in detail page

  // Client-side filtering and sorting for additional refinement
  const filteredApplications = useMemo(() => {
    // Extract applications from response
    const applications = applicationsResponse?.applications || [];
    const result = [...applications];

    // Client-side sorting
    result.sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case 'businessName':
          aValue = a.businessName?.toLowerCase() || '';
          bValue = b.businessName?.toLowerCase() || '';
          break;
        case 'fundType':
          aValue = a.fundType;
          bValue = b.fundType;
          break;
        case 'status':
          aValue = a.status;
          bValue = b.status;
          break;
        case 'fundingRequested':
          aValue = parseFloat(a.fundingRequested?.replace(/[^0-9.-]+/g, '') || '0');
          bValue = parseFloat(b.fundingRequested?.replace(/[^0-9.-]+/g, '') || '0');
          break;
        case 'createdAt':
        default:
          aValue = new Date(a.createdAt).getTime();
          bValue = new Date(b.createdAt).getTime();
          break;
      }

      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    return result;
  }, [applicationsResponse, sortBy, sortOrder]);

  const pagination = applicationsResponse?.pagination;

  const sortOptions = [
    { label: 'Created Date', value: 'createdAt' },
    { label: 'Business Name', value: 'businessName' },
    { label: 'Fund Type', value: 'fundType' },
    { label: 'Status', value: 'status' },
    { label: 'Funding Amount', value: 'fundingRequested' },
  ];

  const filterOptions = [
    {
      label: 'Status',
      value: 'status',
      options: [
        { label: 'Draft', value: 'DRAFT' },
        { label: 'Submitted', value: 'SUBMITTED' },
        { label: 'Under Review', value: 'UNDER_REVIEW' },
        { label: 'Approved', value: 'APPROVED' },
        { label: 'Rejected', value: 'REJECTED' },
        { label: 'Needs Revision', value: 'NEEDS_REVISION' },
      ],
    },
    {
      label: 'Fund Type',
      value: 'fundType',
      options: [
        { label: 'Ignite Fund', value: 'IGNITE' },
        { label: 'Elevate Fund', value: 'ELEVATE' },
      ],
    },
    {
      label: 'Sector',
      value: 'sector',
      options: [
        { label: 'Technology', value: 'Technology' },
        { label: 'Healthcare', value: 'Healthcare' },
        { label: 'Education', value: 'Education' },
        { label: 'Agriculture', value: 'Agriculture' },
        { label: 'Finance', value: 'Finance' },
        { label: 'Retail', value: 'Retail' },
        { label: 'Manufacturing', value: 'Manufacturing' },
        { label: 'Other', value: 'Other' },
      ],
    },
  ];

  // Status updates handled in detail page

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'APPROVED':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'REJECTED':
        return <XCircle className="h-4 w-4 text-red-600" />;
      case 'UNDER_REVIEW':
        return <Eye className="h-4 w-4 text-yellow-600" />;
      default:
        return <Clock className="h-4 w-4 text-blue-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'APPROVED':
        return 'bg-green-100 text-green-800';
      case 'REJECTED':
        return 'bg-red-100 text-red-800';
      case 'UNDER_REVIEW':
        return 'bg-yellow-100 text-yellow-800';
      case 'SUBMITTED':
        return 'bg-blue-100 text-blue-800';
      case 'NEEDS_REVISION':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Use server-side pagination if available, otherwise client-side
  const totalPages = pagination?.totalPages || Math.ceil(filteredApplications.length / itemsPerPage);
  const paginatedApplications = pagination ? filteredApplications : filteredApplications.slice(
    (currentPage - 1) * itemsPerPage, 
    currentPage * itemsPerPage
  );

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading applications</p>
          <p className="text-gray-500 text-sm">Please check your connection and try again</p>
          <button 
            onClick={() => refetch()} 
            className="mt-4 px-4 py-2 bg-[#0B2653] text-white rounded hover:bg-[#0a1f42]"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

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
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#0B2653]">Applications Management</h1>
          <p className="text-gray-600 mt-2">Manage and review funding applications</p>
        </div>
        <div className="flex items-center gap-2 mt-4 sm:mt-0">
          <button
            onClick={() => {
              // Export functionality
              console.log('Export applications');
            }}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
          >
            <Download className="h-4 w-4" />
            Export
          </button>
        </div>
      </div>

      <SearchFilter
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSortChange={setSortBy}
        filters={filters}
        onFilterChange={setFilters}
        onRefresh={() => refetch()}
        sortOptions={sortOptions}
        filterOptions={filterOptions}
      />

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Business
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Founder
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fund Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Submitted
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedApplications.map((application) => (
                <tr key={application.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {application.businessName}
                      </div>
                      <div className="text-sm text-gray-500">{application.sector}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {application.founderName}
                      </div>
                      <div className="text-sm text-gray-500">{application.founderEmail}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {application.fundType}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {application.fundingRequested}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getStatusIcon(application.status)}
                      <span className={`ml-2 px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(application.status)}`}>
                        {application.status.replace(/_/g, ' ')}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {format(new Date(application.createdAt), 'MMM dd, yyyy')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/applications/${application.id}`}
                        className="text-[#0B2653] hover:text-[#0a1f42] p-1 rounded hover:bg-gray-100"
                        title="View Details"
                      >
                        <Eye className="h-4 w-4" />
                      </Link>
                      <Link
                        href={`/admin/applications/${application.id}/edit`}
                        className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-gray-100"
                        title="Edit"
                      >
                        <Edit className="h-4 w-4" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredApplications.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No applications found</h3>
            <p className="text-gray-600">
              {searchQuery || Object.keys(filters).length > 0
                ? 'Try adjusting your search or filters'
                : 'No applications have been submitted yet'}
            </p>
          </div>
        )}

        {filteredApplications.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={filteredApplications.length}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
            onItemsPerPageChange={setItemsPerPage}
          />
        )}
      </div>
    </div>
  );
}