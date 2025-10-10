'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ChevronDown, Menu, X, User, LogOut } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth, useLogout } from '@/hooks/useAuth';

export const Header: React.FC = () => {
    const { user, isAuthenticated } = useAuth();
    const logoutMutation = useLogout();

    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const [isFundsDropdownOpen, setIsFundsDropdownOpen] = useState(false);
    const [isOpptDropdownOpen, setIsOpptDropdownOpen] = useState(false);
    const [isImpactDropdownOpen, setIsImpactDropdownOpen] = useState(false);
    const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

    const toggleAboutDropdown = () => {
        setIsAboutDropdownOpen(!isAboutDropdownOpen);
    };

    const toggleFundsDropdown = () => {
        setIsFundsDropdownOpen(!isFundsDropdownOpen);
    };

    const toggleOpptDropdown = () => {
        setIsOpptDropdownOpen(!isOpptDropdownOpen);
    };

    const toggleImpactDropdown = () => {
        setIsImpactDropdownOpen(!isImpactDropdownOpen);
    };

    const toggleResourcesDropdown = () => {
        setIsResourcesDropdownOpen(!isResourcesDropdownOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);

    };


    return (
        <header className="bg-[#1e3a5f] shadow-lg relative z-50">
            <div className="max-w-full px-6 lg:px-12">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/">
                            <Image
                                src="/images/logo.png"
                                alt="ThriVest Africa"
                                width={150}
                                height={60}
                                className="h-12 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden xl:flex items-center space-x-1">
                        <Link
                            href="/"
                            className="font-navbar text-white hover:text-gray-300 px-4 py-2 text-sm transition-colors duration-200"
                        >
                            HOME
                        </Link>

                        {/* About Us Dropdown */}
                        <div className="relative">
                            <button
                                onClick={toggleAboutDropdown}
                                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                                onMouseLeave={() => setIsAboutDropdownOpen(false)}
                                className="font-navbar text-white hover:text-gray-300 px-4 py-2 text-sm transition-colors duration-200 flex items-center"
                            >
                                ABOUT US
                                <ChevronDown className="ml-1 h-3 w-3" />
                            </button>
                            {isAboutDropdownOpen && (
                                <div
                                    className="absolute top-full left-0 mt-0 w-48 bg-[#5ba3d0] rounded-b-md shadow-lg z-10"
                                    onMouseEnter={() => setIsAboutDropdownOpen(true)}
                                    onMouseLeave={() => setIsAboutDropdownOpen(false)}
                                >
                                    <div className="py-1">
                                        <a
                                            href="/about/who-we-are"
                                            className="block px-4 py-2 text-sm text-white hover:bg-[#4a92bf]"
                                        >
                                            Who we are
                                        </a>
                                        <a
                                            href="#"
                                            className=" block px-4 py-2 text-sm text-white hover:bg-[#4a92bf]"
                                        >
                                            Our Team
                                        </a>
                                        <a
                                            href="/approach#investment-committee"
                                            className=" block px-4 py-2 text-sm text-white hover:bg-[#4a92bf]"
                                        >
                                            Investment Committee
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>

                        <a
                            href="/approach"
                            className="font-navbar text-white hover:text-gray-300 px-4 py-2 text-sm transition-colors duration-200"
                        >
                            OUR APPROACH
                        </a>

                        {/* Funds Dropdown */}
                        <div className="relative">
                            <button
                                onClick={toggleFundsDropdown}
                                onMouseEnter={() => setIsFundsDropdownOpen(true)}
                                onMouseLeave={() => setIsFundsDropdownOpen(false)}
                                className="font-navbar text-white hover:text-gray-300 px-4 py-2 text-sm transition-colors duration-200 flex items-center"
                            >
                                FUNDS
                                <ChevronDown className="ml-1 h-3 w-3" />
                            </button>
                            {isFundsDropdownOpen && (
                                <div
                                    className="absolute top-full left-0 mt-0 w-48 bg-[#5ba3d0] rounded-b-md shadow-lg z-10"
                                    onMouseEnter={() => setIsFundsDropdownOpen(true)}
                                    onMouseLeave={() => setIsFundsDropdownOpen(false)}
                                >
                                    <div className="py-1">
                                        <a
                                            href="/funds/ignite-funds"
                                            className="block px-4 py-2 text-sm text-white hover:bg-[#4a92bf]"
                                        >
                                            Ignite Funds
                                        </a>
                                        <a
                                            href="/funds/elevate-funds"
                                            className="block px-4 py-2 text-sm text-white hover:bg-[#4a92bf]"
                                        >
                                            Elevate Funds
                                        </a>

                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Opportunities Dropdown */}
                        <div className="relative">
                            <button
                                onClick={toggleOpptDropdown}
                                onMouseEnter={() => setIsOpptDropdownOpen(true)}
                                onMouseLeave={() => setIsOpptDropdownOpen(false)}
                                className="font-navbar text-white hover:text-gray-300 px-4 py-2 text-sm transition-colors duration-200 flex items-center"
                            >
                                OPPORTUNITIES
                                <ChevronDown className="ml-1 h-3 w-3" />
                            </button>
                            {isOpptDropdownOpen && (
                                <div
                                    className="absolute top-full left-0 mt-0 w-48 bg-[#5ba3d0] rounded-b-md shadow-lg z-10"
                                    onMouseEnter={() => setIsOpptDropdownOpen(true)}
                                    onMouseLeave={() => setIsOpptDropdownOpen(false)}
                                >
                                    <div className="py-1">
                                        <a
                                            href="/opportunities/support"
                                            className="block px-4 py-2 text-sm text-white hover:bg-[#4a92bf]"
                                        >
                                            Business Support and Funding
                                        </a>
                                        <a
                                            href="/opportunities/partner"
                                            className="block px-4 py-2 text-sm text-white hover:bg-[#4a92bf]"
                                        >
                                            Become a partner
                                        </a>

                                    </div>
                                </div>
                            )}
                        </div>
                        <a
                            href="#"
                            className="font-navbar text-white hover:text-gray-300 px-4 py-2 text-sm transition-colors duration-200"
                        >
                            INVESTMENTS
                        </a>

                        {/* Impact Dropdown */}
                        <div className="relative">
                            <button
                                onClick={toggleImpactDropdown}
                                onMouseEnter={() => setIsImpactDropdownOpen(true)}
                                onMouseLeave={() => setIsImpactDropdownOpen(false)}
                                className="font-navbar text-white hover:text-gray-300 px-4 py-2 text-sm transition-colors duration-200 flex items-center"
                            >
                                IMPACT
                                <ChevronDown className="ml-1 h-3 w-3" />
                            </button>
                            {isImpactDropdownOpen && (
                                <div
                                    className="absolute top-full left-0 mt-0 w-48 bg-[#5ba3d0] rounded-b-md shadow-lg z-10"
                                    onMouseEnter={() => setIsImpactDropdownOpen(true)}
                                    onMouseLeave={() => setIsImpactDropdownOpen(false)}
                                >
                                    <div className="py-1">
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-white hover:bg-[#4a92bf]"
                                        >
                                            Our Results
                                        </a>
                                        <a
                                            href="/impact/esg-sustainability"
                                            className="block px-4 py-2 text-sm text-white hover:bg-[#4a92bf]"
                                        >
                                            ESG and Sustainability
                                        </a>
                                        <a
                                            href="/impact/sdg-alignment"
                                            className="block px-4 py-2 text-sm text-white hover:bg-[#4a92bf]"
                                        >
                                            Our SDG Alignment
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-white hover:bg-[#4a92bf]"
                                        >
                                            Case studies
                                        </a>
                                        <a
                                            href="#"
                                            className=" block px-4 py-2 text-sm text-white hover:bg-[#4a92bf]"
                                        >
                                            Impact Report
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                        <a
                            href="/careers"
                            className="font-navbar text-white hover:text-gray-300 px-4 py-2 text-sm transition-colors duration-200"
                        >
                            CAREERS
                        </a>

                        {/* Resources Dropdown */}
                        <div className="relative">
                            <button
                                onClick={toggleResourcesDropdown}
                                onMouseEnter={() => setIsResourcesDropdownOpen(true)}
                                onMouseLeave={() => setIsResourcesDropdownOpen(false)}
                                className="font-navbar text-white hover:text-gray-300 px-4 py-2 text-sm transition-colors duration-200 flex items-center"
                            >
                                RESOURCES
                                <ChevronDown className="ml-1 h-3 w-3" />
                            </button>
                            {isResourcesDropdownOpen && (
                                <div
                                    className="absolute top-full left-0 mt-0 w-48 bg-[#5ba3d0] rounded-b-md shadow-lg z-10"
                                    onMouseEnter={() => setIsResourcesDropdownOpen(true)}
                                    onMouseLeave={() => setIsResourcesDropdownOpen(false)}
                                >
                                    <div className="py-1">
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-white hover:bg-[#4a92bf]"
                                        >
                                            News and Publication
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-white hover:bg-[#4a92bf]"
                                        >
                                            Media
                                        </a>
                                        <a
                                            href="/resources/faq"
                                            className="block px-4 py-2 text-sm text-white hover:bg-[#4a92bf]"
                                        >
                                            FAQs
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                        <a
                            href="/contact"
                            className="font-navbar text-white hover:text-gray-300 px-4 py-2 text-sm transition-colors duration-200"
                        >
                            CONTACT US
                        </a>
                    </nav>

                    {/* Auth Section - Desktop Only */}
                    <div className="hidden xl:flex items-center">
                        {isAuthenticated ? (
                            <div className="relative">
                                <button
                                    onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                                    className="flex items-center font-navbar text-white hover:text-gray-300 px-4 py-2 text-sm transition-colors duration-200"
                                >
                                    <User className="h-4 w-4 mr-2" />
                                    {user?.firstName}
                                    <ChevronDown className="ml-1 h-3 w-3" />
                                </button>
                                {isUserDropdownOpen && (
                                    <div className="absolute top-full right-0 mt-0 w-48 bg-[#5ba3d0] rounded-b-md shadow-lg z-10">
                                        <div className="py-1">
                                            <Link
                                                href="/dashboard"
                                                className="font-navbar block px-4 py-2 text-sm text-white hover:bg-[#4a92bf]"
                                            >
                                                Dashboard
                                            </Link>
                                            <button
                                                onClick={() => logoutMutation.mutate()}
                                                className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-[#4a92bf]"
                                            >
                                                <LogOut className="h-4 w-4 mr-2" />
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link href="/apply">
                                <Button
                                    className="bg-[#00a8e8] hover:bg-[#0090c8] text-white px-8 py-2 rounded-full text-sm font-semibold transition-colors duration-200 uppercase"
                                    variant="default"
                                >
                                    LOGIN
                                </Button>
                            </Link>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="xl:hidden">
                        <button
                            type="button"
                            onClick={toggleMobileMenu}
                            className="text-white hover:text-gray-300 p-2"
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <div className="xl:hidden absolute top-full left-0 right-0 bg-[#1e3a5f] shadow-lg z-50">
                        <nav className="flex flex-col py-4">
                            <Link
                                href="/"
                                className="text-white hover:bg-[#2a4a6f] px-6 py-3 text-sm font-medium transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                HOME
                            </Link>

                            {/* Mobile About Dropdown */}
                            <div>
                                <button
                                    onClick={toggleAboutDropdown}
                                    className="text-white hover:bg-[#2a4a6f] px-6 py-3 text-sm font-medium transition-colors duration-200 flex items-center justify-between w-full"
                                >
                                    ABOUT US
                                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>
                                {isAboutDropdownOpen && (
                                    <div className="bg-[#2a4a6f]">
                                        <a
                                            href="/about/who-we-are"
                                            className="block px-10 py-3 text-sm text-white hover:bg-[#35567f]"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            Who we are
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-10 py-3 text-sm text-white hover:bg-[#35567f]"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            Our Team
                                        </a>
                                        <a
                                            href="/approach#investment-committee"
                                            className="block px-10 py-3 text-sm text-white hover:bg-[#35567f]"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            Investment Committee
                                        </a>
                                    </div>
                                )}
                            </div>

                            <a
                                href="/approach"
                                className="text-white hover:bg-[#2a4a6f] px-6 py-3 text-sm font-medium transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                OUR APPROACH
                            </a>

                            {/* Mobile Funds Dropdown */}
                            <div>
                                <button
                                    onClick={toggleFundsDropdown}
                                    className="text-white hover:bg-[#2a4a6f] px-6 py-3 text-sm font-medium transition-colors duration-200 flex items-center justify-between w-full"
                                >
                                    FUNDS
                                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isFundsDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>
                                {isFundsDropdownOpen && (
                                    <div className="bg-[#2a4a6f]">
                                        <a
                                            href="/funds/ignite-funds"
                                            className="block px-10 py-3 text-sm text-white hover:bg-[#35567f]"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            Ignite Funds
                                        </a>
                                        <a
                                            href="/funds/elevate-funds"
                                            className="block px-10 py-3 text-sm text-white hover:bg-[#35567f]"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            Elevate Funds
                                        </a>
                                    </div>
                                )}
                            </div>

                            <div>
                                <button
                                    onClick={toggleOpptDropdown}
                                    className="text-white hover:bg-[#2a4a6f] px-6 py-3 text-sm font-medium transition-colors duration-200 flex items-center justify-between w-full"
                                >
                                    OPPORTUNITIES
                                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isOpptDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>
                                {isOpptDropdownOpen && (
                                    <div className="bg-[#2a4a6f]">
                                        <a
                                            href="/opportunities/support"
                                            className="block px-10 py-3 text-sm text-white hover:bg-[#35567f]"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            Business Support and Funding
                                        </a>
                                        <a
                                            href="/opportunities/partner"
                                            className="block px-10 py-3 text-sm text-white hover:bg-[#35567f]"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            Become a partner
                                        </a>
                                    </div>
                                )}
                            </div>
                            
                            <a
                                href="#"
                                className="text-white hover:bg-[#2a4a6f] px-6 py-3 text-sm font-medium transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                INVESTMENTS
                            </a>

                            {/* Mobile Impact Dropdown */}
                            <div>
                                <button
                                    onClick={toggleImpactDropdown}
                                    className="text-white hover:bg-[#2a4a6f] px-6 py-3 text-sm font-medium transition-colors duration-200 flex items-center justify-between w-full"
                                >
                                    IMPACT
                                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isImpactDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>
                                {isImpactDropdownOpen && (
                                    <div className="bg-[#2a4a6f]">
                                        <a
                                            href="#"
                                            className="block px-10 py-3 text-sm text-white hover:bg-[#35567f]"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            Our Results
                                        </a>
                                        <a
                                            href="/impact/esg-sustainability"
                                            className="block px-10 py-3 text-sm text-white hover:bg-[#35567f]"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            ESG and Sustainability
                                        </a>
                                        <a
                                            href="/impact/sdg-alignment"
                                            className="block px-10 py-3 text-sm text-white hover:bg-[#35567f]"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            Our SDG Alignment
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-10 py-3 text-sm text-white hover:bg-[#35567f]"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            Case studies
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-10 py-3 text-sm text-white hover:bg-[#35567f]"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            Impact Report
                                        </a>
                                    </div>
                                )}
                            </div>
                            <a
                                href="/careers"
                                className="text-white hover:bg-[#2a4a6f] px-6 py-3 text-sm font-medium transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                CAREERS
                            </a>

                            {/* Mobile Resources Dropdown */}
                            <div>
                                <button
                                    onClick={toggleResourcesDropdown}
                                    className="text-white hover:bg-[#2a4a6f] px-6 py-3 text-sm font-medium transition-colors duration-200 flex items-center justify-between w-full"
                                >
                                    RESOURCES
                                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isResourcesDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>
                                {isResourcesDropdownOpen && (
                                    <div className="bg-[#2a4a6f]">
                                        <a
                                            href="#"
                                            className="block px-10 py-3 text-sm text-white hover:bg-[#35567f]"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            News and Publication
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-10 py-3 text-sm text-white hover:bg-[#35567f]"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            Media
                                        </a>
                                        <a
                                            href="/resources/faq"
                                            className="block px-10 py-3 text-sm text-white hover:bg-[#35567f]"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            FAQs
                                        </a>
                                    </div>
                                )}
                            </div>
                            <a
                                href="/contact"
                                className="text-white hover:bg-[#2a4a6f] px-6 py-3 text-sm font-medium transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                CONTACT US
                            </a>

                            {/* Auth Section in Mobile Menu */}
                            <div className="px-6 pt-4 pb-2">
                                {isAuthenticated ? (
                                    <div className="space-y-2">
                                        <Link href="/dashboard">
                                            <Button
                                                className="bg-[#00a8e8] hover:bg-[#0090c8] text-white px-8 py-2 rounded-full text-sm font-semibold transition-colors duration-200 uppercase w-full"
                                                variant="default"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                DASHBOARD
                                            </Button>
                                        </Link>
                                        <Button
                                            className="bg-red-600 hover:bg-red-700 text-white px-8 py-2 rounded-full text-sm font-semibold transition-colors duration-200 uppercase w-full"
                                            variant="default"
                                            onClick={() => {
                                                logoutMutation.mutate();
                                                setIsMobileMenuOpen(false);
                                            }}
                                        >
                                            LOGOUT
                                        </Button>
                                    </div>
                                ) : (
                                    <Link href="/apply">
                                        <Button
                                            className="bg-[#00a8e8] hover:bg-[#0090c8] text-white px-8 py-2 rounded-full text-sm font-semibold transition-colors duration-200 uppercase w-full"
                                            variant="default"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            LOGIN
                                        </Button>
                                    </Link>
                                )}
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};