'use client';

import { useState } from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export const Footer: React.FC = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle newsletter signup
        console.log('Newsletter signup:', { name, email });
        // Reset form
        setName('');
        setEmail('');
    };

    return (
        <footer className="bg-[#1e3a5f] text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {/* Logo and Company Info */}
                    <div className="space-y-4">
                        <div>
                            <Image
                                src="/images/logo.png"
                                alt="ThriVest Africa"
                                width={180}
                                height={80}
                                className="h-16 w-auto"
                            />
                            <p className="text-xs text-gray-300 mt-2">
                                ...Investing in her Potentials, Powering Africa&apos;s Future
                            </p>
                        </div>

                        {/* Social Media Links */}
                        <div className="flex space-x-3 pt-4">
                            <a href="https://www.facebook.com/share/1FdukwYrio/?mibextid=wwXIfr" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="https://www.instagram.com/thrivest_africa?igsh=MW1mNXA5cGRsNGY5Yw%3D%3D&utm_source=qr" className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full hover:opacity-90 transition-opacity">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="https://x.com/thrivestafrica?s=11" className="bg-black p-2 rounded-full hover:bg-gra-600 transition-colors">
                                <p className="h-5 w-5 text-center" >X</p>
                            </a>
                            <a href="https://www.linkedin.com/company/thrivest-africa/" className="bg-blue-700 p-2 rounded-full hover:bg-blue-800 transition-colors">
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                                </svg>
                            </a>
                        </div>

                        <div className="text-sm space-y-1 pt-4">
                            <p>Lagos, Nigeria</p>
                        </div>
                    </div>

                    {/* Newsletter Signup */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-semibold">NEWSLETTER</h4>
                        <p className="text-sm">Want to stay up to date with ThriVest Africa insights?</p>

                        <form onSubmit={handleSubmit} className="space-y-3">
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-2 rounded bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 rounded bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
                                required
                            />
                            <Button
                                type="submit"
                                className="w-full bg-sky-500 hover:bg-sky-600 text-white py-2 rounded font-semibold transition-colors duration-200 uppercase"
                            >
                                SUBMIT
                            </Button>
                        </form>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-semibold">QUICK LINK</h4>
                        <nav className="space-y-2">
                            <Link href="/about" className="block hover:text-sky-300 transition-colors">
                                About Us
                            </Link>
                            <Link href="/team" className="block hover:text-sky-300 transition-colors">
                                Our Team
                            </Link>
                            <Link href="/careers" className="block hover:text-sky-300 transition-colors">
                                Careers
                            </Link>
                            <Link href="/financial-report" className="block hover:text-sky-300 transition-colors">
                                Impact
                            </Link>
                            <Link href="/contact" className="block hover:text-sky-300 transition-colors">
                                Contact Us
                            </Link>
                        </nav>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-600">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-4 text-sm">
                            <span>© 2025. ThriVest Africa</span>
                            <Link href="/sitemap" className="hover:text-sky-300 transition-colors">
                                Sitemap
                            </Link>
                        </div>

                        <div className="flex items-center space-x-6 text-sm">
                           
                            <Link href="#" className="hover:text-sky-300 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="hover:text-sky-300 transition-colors">
                                Cookie Policy
                            </Link>
                            <Link href="#" className="hover:text-sky-300 transition-colors">
                                IMS Policy
                            </Link>
                        </div>

                        <Link href="#top" className="text-sm hover:text-sky-300 transition-colors">
                            Back to Top
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};