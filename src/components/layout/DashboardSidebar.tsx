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
    Users
} from 'lucide-react';

const navigationItems = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Eligibility Check', href: '/dashboard/eligibility', icon: ClipboardCheck },
    { name: 'Select Fund', href: '/dashboard/select-fund', icon: FileText },
    { name: 'Application Form', href: '/dashboard/application', icon: FileText },
    { name: 'Document Upload', href: '/dashboard/documents', icon: Upload },
    { name: 'Status Tracker', href: '/dashboard/status', icon: Activity },
    { name: 'Messages', href: '/dashboard/messages', icon: MessageSquare },
    { name: 'Become a Partner', href: '/dashboard/partner', icon: Users },
];

export default function DashboardSidebar() {
    const pathname = usePathname();

    return (
        <nav className="w-full md:w-48 bg-[#0B2653] min-h-[calc(100vh-4rem)]">
            <div className="py-4 md:py-6">
                <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible">
                    {navigationItems.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center space-x-2 md:space-x-3 px-3 md:px-4 py-2 md:py-3 transition-colors whitespace-nowrap ${isActive
                                        ? 'bg-blue-700 text-white border-l-4 border-blue-400'
                                        : 'text-gray-300 hover:bg-blue-800 hover:text-white'
                                    }`}
                            >
                                <Icon className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                                <span className="text-xs md:text-sm">{item.name}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}