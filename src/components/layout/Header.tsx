'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const Header: React.FC = () => {
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleAboutDropdown = () => {
        setIsAboutDropdownOpen(!isAboutDropdownOpen);
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
                            className="text-white hover:text-gray-300 px-4 py-2 text-sm font-medium transition-colors duration-200"
                        >
                            HOME
                        </Link>

                        {/* About Us Dropdown */}
                        <div className="relative">
                            <button
                                onClick={toggleAboutDropdown}
                                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                                onMouseLeave={() => setIsAboutDropdownOpen(false)}
                                className="text-white hover:text-gray-300 px-4 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
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
                                            href="/about/our-team"
                                            className="block px-4 py-2 text-sm text-white hover:bg-[#4a92bf]"
                                        >
                                            Our Team
                                        </a>
                                        <a
                                            href="/about/advisors"
                                            className="block px-4 py-2 text-sm text-white hover:bg-[#4a92bf]"
                                        >
                                            Advisors
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>

                        <a
                            href="/approach"
                            className="text-white hover:text-gray-300 px-4 py-2 text-sm font-medium transition-colors duration-200"
                        >
                            OUR APPROACH
                        </a>
                        <a
                            href="/fund"
                            className="text-white hover:text-gray-300 px-4 py-2 text-sm font-medium transition-colors duration-200"
                        >
                            FUND
                        </a>
                        <a
                            href="/opportunities"
                            className="text-white hover:text-gray-300 px-4 py-2 text-sm font-medium transition-colors duration-200"
                        >
                            OPPORTUNITIES
                        </a>
                        <a
                            href="/investments"
                            className="text-white hover:text-gray-300 px-4 py-2 text-sm font-medium transition-colors duration-200"
                        >
                            INVESTMENTS
                        </a>
                        <a
                            href="/impact"
                            className="text-white hover:text-gray-300 px-4 py-2 text-sm font-medium transition-colors duration-200"
                        >
                            IMPACT
                        </a>
                        <a
                            href="/careers"
                            className="text-white hover:text-gray-300 px-4 py-2 text-sm font-medium transition-colors duration-200"
                        >
                            CAREERS
                        </a>
                        <a
                            href="/resources"
                            className="text-white hover:text-gray-300 px-4 py-2 text-sm font-medium transition-colors duration-200"
                        >
                            RESOURCES
                        </a>
                        <a
                            href="/contact"
                            className="text-white hover:text-gray-300 px-4 py-2 text-sm font-medium transition-colors duration-200"
                        >
                            CONTACT US
                        </a>
                    </nav>

                    {/* Login Button - Desktop Only */}
                    <div className="hidden xl:flex items-center">
                        <Button
                            className="bg-[#00a8e8] hover:bg-[#0090c8] text-white px-8 py-2 rounded-full text-sm font-semibold transition-colors duration-200 uppercase"
                            variant="default"
                        >
                            LOGIN
                        </Button>
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
                                            href="/about/our-team"
                                            className="block px-10 py-3 text-sm text-white hover:bg-[#35567f]"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            Our Team
                                        </a>
                                        <a
                                            href="/about/advisors"
                                            className="block px-10 py-3 text-sm text-white hover:bg-[#35567f]"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            Advisors
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
                            <a
                                href="/fund"
                                className="text-white hover:bg-[#2a4a6f] px-6 py-3 text-sm font-medium transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                FUND
                            </a>
                            <a
                                href="/opportunities"
                                className="text-white hover:bg-[#2a4a6f] px-6 py-3 text-sm font-medium transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                OPPORTUNITIES
                            </a>
                            <a
                                href="/investments"
                                className="text-white hover:bg-[#2a4a6f] px-6 py-3 text-sm font-medium transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                INVESTMENTS
                            </a>
                            <a
                                href="/impact"
                                className="text-white hover:bg-[#2a4a6f] px-6 py-3 text-sm font-medium transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                IMPACT
                            </a>
                            <a
                                href="/careers"
                                className="text-white hover:bg-[#2a4a6f] px-6 py-3 text-sm font-medium transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                CAREERS
                            </a>
                            <a
                                href="/resources"
                                className="text-white hover:bg-[#2a4a6f] px-6 py-3 text-sm font-medium transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                RESOURCES
                            </a>
                            <a
                                href="/contact"
                                className="text-white hover:bg-[#2a4a6f] px-6 py-3 text-sm font-medium transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                CONTACT US
                            </a>

                            {/* Login Button in Mobile Menu */}
                            <div className="px-6 pt-4 pb-2">
                                <Button
                                    className="bg-[#00a8e8] hover:bg-[#0090c8] text-white px-8 py-2 rounded-full text-sm font-semibold transition-colors duration-200 uppercase w-full"
                                    variant="default"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    LOGIN
                                </Button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};