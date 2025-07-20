'use client';

import { useMemo } from 'react';
import { FileText, Users, CheckCircle, Clock, TrendingUp, DollarSign } from 'lucide-react';
import { useAdminStats } from '@/hooks/queries/useAdmin';
import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface DashboardStats {
  totalApplications: number;
  totalUsers: number;
  approvedApplications: number;
  pendingApplications: number;
  totalFunding: string;
  monthlyGrowth: number;
}

interface RecentActivity {
  id: string;
  type: 'application' | 'user' | 'approval';
  title: string;
  description: string;
  timestamp: string;
  icon: 'application' | 'user' | 'check';
}

export default function AdminDashboard() {
  const { data: adminData, isLoading, error } = useAdminStats();

  const { stats, recentActivity } = useMemo(() => {
    if (!adminData) {
      return {
        stats: {
          totalApplications: 0,
          totalUsers: 0,
          approvedApplications: 0,
          pendingApplications: 0,
          totalFunding: '₦0',
          monthlyGrowth: 0,
        },
        recentActivity: [],
      };
    }

    const applications = adminData.applications?.applications || [];
    const userStats = adminData.users;
    
    console.log('Processing admin data:', { applications, userStats });

    const approvedCount = applications.filter((app) => app.status === 'APPROVED').length;
    const pendingCount = applications.filter((app) => 
      app.status === 'SUBMITTED' || app.status === 'UNDER_REVIEW'
    ).length;

    const dashboardStats = {
      totalApplications: applications.length,
      totalUsers: userStats?.stats?.overview?.total || 0,
      approvedApplications: approvedCount,
      pendingApplications: pendingCount,
      totalFunding: '₦0',
      monthlyGrowth: userStats?.stats?.overview?.growthRate || 0,
    };

    // Process recent activity
    const activities: RecentActivity[] = [];

    // Add recent applications
    if (applications && applications.length > 0) {
      const recentApps = applications
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 3);

      recentApps.forEach((app) => {
        const timeDiff = new Date().getTime() - new Date(app.createdAt).getTime();
        const daysAgo = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hoursAgo = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutesAgo = Math.floor(timeDiff / (1000 * 60));
        
        let timeText = '';
        if (daysAgo > 0) {
          timeText = `${daysAgo} day${daysAgo > 1 ? 's' : ''} ago`;
        } else if (hoursAgo > 0) {
          timeText = `${hoursAgo} hour${hoursAgo > 1 ? 's' : ''} ago`;
        } else if (minutesAgo > 0) {
          timeText = `${minutesAgo} minute${minutesAgo > 1 ? 's' : ''} ago`;
        } else {
          timeText = 'Just now';
        }

        if (app.status === 'APPROVED') {
          activities.push({
            id: app.id,
            type: 'approval',
            title: 'Application approved',
            description: `${app.businessName || 'Application'} has been approved`,
            timestamp: timeText,
            icon: 'check'
          });
        } else if (app.status === 'SUBMITTED' || app.status === 'UNDER_REVIEW') {
          activities.push({
            id: app.id,
            type: 'application',
            title: 'New application submitted',
            description: `${app.businessName || 'New application'} submitted for review`,
            timestamp: timeText,
            icon: 'application'
          });
        }
      });
    }

    // Add recent users
    if (userStats?.stats?.recent && userStats.stats.recent.length > 0) {
      userStats.stats.recent.slice(0, 3).forEach((user) => {
        if (user.role !== 'ADMIN' && user.role !== 'SUPER_ADMIN') {
          const timeDiff = new Date().getTime() - new Date(user.createdAt).getTime();
          const daysAgo = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
          const hoursAgo = Math.floor(timeDiff / (1000 * 60 * 60));
          const minutesAgo = Math.floor(timeDiff / (1000 * 60));
          
          let timeText = '';
          if (daysAgo > 0) {
            timeText = `${daysAgo} day${daysAgo > 1 ? 's' : ''} ago`;
          } else if (hoursAgo > 0) {
            timeText = `${hoursAgo} hour${hoursAgo > 1 ? 's' : ''} ago`;
          } else if (minutesAgo > 0) {
            timeText = `${minutesAgo} minute${minutesAgo > 1 ? 's' : ''} ago`;
          } else {
            timeText = 'Just now';
          }

          activities.push({
            id: user.id,
            type: 'user',
            title: 'New user registered',
            description: `${user.firstName} ${user.lastName} joined the platform`,
            timestamp: timeText,
            icon: 'user'
          });
        }
      });
    }

    // Sort activities by creation date
    const sortedActivities = activities
      .sort((a, b) => {
        const aUser = userStats?.stats?.recent?.find((u) => u.id === a.id);
        const aApp = applications?.find((app) => app.id === a.id);
        const bUser = userStats?.stats?.recent?.find((u) => u.id === b.id);
        const bApp = applications?.find((app) => app.id === b.id);
        
        const aTime = aUser?.createdAt || aApp?.createdAt;
        const bTime = bUser?.createdAt || bApp?.createdAt;
        
        if (!aTime || !bTime) return 0;
        return new Date(bTime).getTime() - new Date(aTime).getTime();
      })
      .slice(0, 5);

    return { stats: dashboardStats, recentActivity: sortedActivities };
  }, [adminData]);

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading dashboard data</p>
          <p className="text-gray-500 text-sm">Please check your connection and try again</p>
        </div>
      </div>
    );
  }

  const getActivityIcon = (iconType: string) => {
    switch (iconType) {
      case 'application':
        return <FileText className="h-4 w-4 text-blue-600" />;
      case 'user':
        return <Users className="h-4 w-4 text-green-600" />;
      case 'check':
        return <CheckCircle className="h-4 w-4 text-emerald-600" />;
      default:
        return <FileText className="h-4 w-4 text-gray-600" />;
    }
  };

  const getActivityBgColor = (iconType: string) => {
    switch (iconType) {
      case 'application':
        return 'bg-blue-100';
      case 'user':
        return 'bg-green-100';
      case 'check':
        return 'bg-emerald-100';
      default:
        return 'bg-gray-100';
    }
  };

  const StatCard = ({ 
    title, 
    value, 
    icon: Icon, 
    color, 
    trend 
  }: { 
    title: string; 
    value: string | number; 
    icon: React.ComponentType<{ className?: string }>; 
    color: string; 
    trend?: number;
  }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
          {trend !== undefined && (
            <p className={`text-sm ${trend >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {trend >= 0 ? '+' : ''}{trend}% from last month
            </p>
          )}
        </div>
        <div className={`${color} p-3 rounded-full`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0B2653] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#0B2653]">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">Overview of system activity and statistics</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Total Applications"
          value={stats.totalApplications}
          icon={FileText}
          color="bg-blue-500"
          trend={stats.monthlyGrowth}
        />
        <StatCard
          title="Total Users"
          value={stats.totalUsers}
          icon={Users}
          color="bg-green-500"
        />
        <StatCard
          title="Approved Applications"
          value={stats.approvedApplications}
          icon={CheckCircle}
          color="bg-emerald-500"
        />
        <StatCard
          title="Pending Review"
          value={stats.pendingApplications}
          icon={Clock}
          color="bg-orange-500"
        />
        <StatCard
          title="Total Funding"
          value={stats.totalFunding}
          icon={DollarSign}
          color="bg-purple-500"
        />
        <StatCard
          title="Growth Rate"
          value={`${stats.monthlyGrowth}%`}
          icon={TrendingUp}
          color="bg-indigo-500"
        />
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/admin/applications"
            className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <FileText className="h-8 w-8 text-blue-600 mr-3" />
            <div>
              <p className="font-medium text-blue-900">Manage Applications</p>
              <p className="text-sm text-blue-600">Review and process applications</p>
            </div>
          </Link>
          <Link
            href="/admin/users"
            className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
          >
            <Users className="h-8 w-8 text-green-600 mr-3" />
            <div>
              <p className="font-medium text-green-900">Manage Users</p>
              <p className="text-sm text-green-600">View and edit user accounts</p>
            </div>
          </Link>
          <Link
            href="/admin/analytics"
            className="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
          >
            <TrendingUp className="h-8 w-8 text-purple-600 mr-3" />
            <div>
              <p className="font-medium text-purple-900">View Analytics</p>
              <p className="text-sm text-purple-600">System performance metrics</p>
            </div>
          </Link>
          <Link
            href="/admin/settings"
            className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <TrendingUp className="h-8 w-8 text-gray-600 mr-3" />
            <div>
              <p className="font-medium text-gray-900">System Settings</p>
              <p className="text-sm text-gray-600">Configure system options</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {recentActivity.length > 0 ? (
            recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className={`${getActivityBgColor(activity.icon)} p-2 rounded-full mr-3`}>
                  {getActivityIcon(activity.icon)}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                  <p className="text-xs text-gray-600">{activity.description}</p>
                  <p className="text-xs text-gray-500">{activity.timestamp}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-6">
              <p className="text-gray-500 text-sm">No recent activity</p>
              <p className="text-gray-400 text-xs mt-1">Activity will appear here when users interact with the system</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}