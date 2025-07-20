'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    ClipboardCheck,
    FileText,
    Upload,
    Activity,
    MessageSquare,
    Users,
    LogOut
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const navigationItems = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Eligibility Check', href: '/dashboard/eligibility', icon: ClipboardCheck },
    { name: 'My Applications', href: '/dashboard/applications', icon: FileText },
    { name: 'Select Fund', href: '/dashboard/select-fund', icon: FileText },
    { name: 'Application Form', href: '/dashboard/application', icon: FileText },
    { name: 'Document Upload', href: '/dashboard/documents', icon: Upload },
    { name: 'Status Tracker', href: '/dashboard/status', icon: Activity },
    { name: 'Messages', href: '/dashboard/messages', icon: MessageSquare },
    { name: 'Become a Partner', href: '/dashboard/partner', icon: Users },
];

export default function DashboardSidebar() {
    const pathname = usePathname();
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
    };

    return (
        <nav className="w-full md:w-48 bg-[#0B2653] md:min-h-[calc(100vh-4rem)] flex flex-col">
            <div className="py-2 md:py-6 flex-1">
                <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible scrollbar-hide">
                    {navigationItems.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center space-x-2 md:space-x-3 px-3 md:px-4 py-2 md:py-3 transition-colors whitespace-nowrap ${isActive
                                        ? 'bg-blue-700 text-white md:border-l-4 md:border-blue-400'
                                        : 'text-gray-300 hover:bg-blue-800 hover:text-white'
                                    }`}
                            >
                                <Icon className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                                <span className="text-xs md:text-sm hidden md:block">{item.name}</span>
                                <span className="text-xs md:hidden">{item.name.split(' ')[0]}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
            
            {/* Logout button at bottom - only visible on desktop */}
            <div className="hidden md:block border-t border-blue-800">
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-blue-800 hover:text-white transition-colors"
                >
                    <LogOut className="h-5 w-5 flex-shrink-0" />
                    <span className="text-sm">Logout</span>
                </button>
            </div>
        </nav>
    );
}