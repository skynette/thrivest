// Dashboard-specific React Query hooks

import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { authApi } from '@/lib/api';
import { useMyApplications } from '@/hooks/useApplications';
import { QUERY_KEYS, API_CONFIG } from '@/constants/api';

interface DashboardData {
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
  };
  applications: any[];
  stats: {
    totalApplications: number;
    pendingApplications: number;
    approvedApplications: number;
    rejectedApplications: number;
  };
}

// Get user profile for dashboard
export const useDashboardProfile = (): UseQueryResult<any, Error> => {
  return useQuery({
    queryKey: ['dashboard', 'profile'],
    queryFn: authApi.getProfile,
    staleTime: API_CONFIG.STALE_TIME,
    gcTime: API_CONFIG.CACHE_TIME,
    retry: API_CONFIG.RETRY_ATTEMPTS,
    enabled: !!localStorage.getItem('token'),
  });
};

// Get comprehensive dashboard data
export const useDashboardData = (): UseQueryResult<DashboardData, Error> => {
  const { data: profile } = useDashboardProfile();
  const { data: applications } = useMyApplications();

  return useQuery({
    queryKey: ['dashboard', 'data'],
    queryFn: async () => {
      const stats = {
        totalApplications: applications?.applications?.length || 0,
        pendingApplications: applications?.applications?.filter((app: any) => 
          ['DRAFT', 'SUBMITTED', 'UNDER_REVIEW'].includes(app.status)
        ).length || 0,
        approvedApplications: applications?.applications?.filter((app: any) => 
          app.status === 'APPROVED'
        ).length || 0,
        rejectedApplications: applications?.applications?.filter((app: any) => 
          app.status === 'REJECTED'
        ).length || 0,
      };

      return {
        user: profile?.user || {},
        applications: applications?.applications || [],
        stats,
      };
    },
    enabled: !!profile && !!applications,
    staleTime: API_CONFIG.STALE_TIME,
    gcTime: API_CONFIG.CACHE_TIME,
  });
};

// Get user's current/latest application
export const useCurrentApplication = () => {
  const { data: applications } = useMyApplications();
  
  return useQuery({
    queryKey: ['dashboard', 'current-application'],
    queryFn: () => {
      if (!applications?.applications || applications.applications.length === 0) {
        return null;
      }
      
      // Return the most recent application
      return applications.applications.sort((a: any, b: any) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )[0];
    },
    enabled: !!applications,
    staleTime: API_CONFIG.STALE_TIME,
    gcTime: API_CONFIG.CACHE_TIME,
  });
};

// Get application stats for dashboard cards
export const useApplicationStats = () => {
  const { data: applications } = useMyApplications();
  
  return useQuery({
    queryKey: ['dashboard', 'application-stats'],
    queryFn: () => {
      if (!applications?.applications) {
        return {
          eligibilityStatus: 'Not Started',
          currentFund: 'N/A',
          businessStage: 'N/A',
          latestApplication: null,
        };
      }

      const apps = applications.applications;
      const latestApp = apps.sort((a: any, b: any) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )[0];

      if (!latestApp) {
        return {
          eligibilityStatus: 'Not Started',
          currentFund: 'N/A',
          businessStage: 'N/A',
          latestApplication: null,
        };
      }

      const statusMapping = {
        'DRAFT': 'In Progress',
        'SUBMITTED': 'Under Review',
        'UNDER_REVIEW': 'Under Review',
        'APPROVED': 'Approved',
        'REJECTED': 'Rejected',
        'NEEDS_REVISION': 'Needs Revision',
      };

      const fundMapping = {
        'IGNITE': '₦50,000,000',
        'ELEVATE': '₦100,000,000',
      };

      return {
        eligibilityStatus: statusMapping[latestApp.status as keyof typeof statusMapping] || 'Unknown',
        currentFund: fundMapping[latestApp.fundType as keyof typeof fundMapping] || 'N/A',
        businessStage: latestApp.fundType || 'N/A',
        latestApplication: latestApp,
      };
    },
    enabled: !!applications,
    staleTime: API_CONFIG.STALE_TIME,
    gcTime: API_CONFIG.CACHE_TIME,
  });
};