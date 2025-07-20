'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    FileText,
    Users,
    Settings,
    BarChart3,
    MessageSquare,
    LogOut,
    Shield
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const navigationItems = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Applications', href: '/admin/applications', icon: FileText },
    { name: 'Users', href: '/admin/users', icon: Users },
    { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
    { name: 'Messages', href: '/admin/messages', icon: MessageSquare },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminSidebar() {
    const pathname = usePathname();
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
    };

    return (
        <nav className="w-full md:w-64 bg-[#0B2653] md:min-h-[calc(100vh-4rem)] border-r border-blue-800">
            <div className="py-2 md:py-6">
                {/* Admin Badge */}
                <div className="hidden md:flex items-center justify-center mb-6 px-4">
                    <div className="bg-yellow-500 text-[#0B2653] px-3 py-1 rounded-full text-xs font-bold flex items-center">
                        <Shield className="h-3 w-3 mr-1" />
                        ADMIN PORTAL
                    </div>
                </div>

                <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible scrollbar-hide">
                    {navigationItems.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center space-x-2 md:space-x-3 px-3 md:px-4 py-2 md:py-3 transition-colors whitespace-nowrap ${isActive
                                        ? 'bg-blue-700 text-white md:border-l-4 md:border-yellow-400'
                                        : 'text-gray-300 hover:bg-blue-800 hover:text-white'
                                    }`}
                            >
                                <Icon className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                                <span className="text-xs md:text-sm hidden md:block">{item.name}</span>
                                <span className="text-xs md:hidden">{item.name.split(' ')[0]}</span>
                            </Link>
                        );
                    })}
                    
                    {/* Logout Button */}
                    <button
                        onClick={handleLogout}
                        className="flex items-center space-x-2 md:space-x-3 px-3 md:px-4 py-2 md:py-3 transition-colors whitespace-nowrap text-gray-300 hover:bg-red-700 hover:text-white mt-2 md:mt-4"
                    >
                        <LogOut className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                        <span className="text-xs md:text-sm hidden md:block">Logout</span>
                        <span className="text-xs md:hidden">Out</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}