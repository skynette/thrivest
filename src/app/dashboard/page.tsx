'use client';

import { CheckCircle } from 'lucide-react';

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            {/* Status Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Eligibility Status */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-xs font-medium text-[#0B2653] uppercase">ELIGIBILITY STATUS</h3>
                            <p className="text-xl font-semibold text-gray-600 mt-2">In view...</p>
                        </div>
                        <div className="bg-blue-50 rounded-full p-2">
                            <CheckCircle className="h-8 w-8 text-blue-500" />
                        </div>
                    </div>
                </div>

                {/* Current Fund */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div>
                        <h3 className="text-xs font-medium text-[#0B2653] uppercase">CURRENT FUND FOR<br />YOUR BUSINESS STAGE</h3>
                        <p className="text-xl font-semibold text-gray-600 mt-2">₦50,000,000</p>
                    </div>
                </div>

                {/* Business Stage */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div>
                        <h3 className="text-xs font-medium text-[#0B2653] uppercase">YOUR BUSINESS<br />STAGE</h3>
                        <p className="text-xl font-semibold text-gray-600 mt-2">In View...</p>
                    </div>
                </div>
            </div>

            {/* Account Details Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="p-6">
                    <h3 className="text-base font-semibold text-[#3B82F6] mb-4 uppercase">ACCOUNT DETAILS</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Date</th>
                                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Amount</th>
                                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Business Stage</th>
                                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 text-sm">16/06/2025</td>
                                    <td className="py-3 px-4 text-sm">50,000,000</td>
                                    <td className="py-3 px-4 text-sm">Ignite Fund</td>
                                    <td className="py-3 px-4 text-sm text-yellow-500 font-medium">Pending</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 text-sm">16/06/2023</td>
                                    <td className="py-3 px-4 text-sm">10,000,000</td>
                                    <td className="py-3 px-4 text-sm">Ignite Fund</td>
                                    <td className="py-3 px-4 text-sm text-blue-500 font-medium">Approved</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 text-sm"></td>
                                    <td className="py-3 px-4 text-sm"></td>
                                    <td className="py-3 px-4 text-sm"></td>
                                    <td className="py-3 px-4 text-sm"></td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 text-sm"></td>
                                    <td className="py-3 px-4 text-sm"></td>
                                    <td className="py-3 px-4 text-sm"></td>
                                    <td className="py-3 px-4 text-sm"></td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="py-3 px-4 text-sm"></td>
                                    <td className="py-3 px-4 text-sm"></td>
                                    <td className="py-3 px-4 text-sm"></td>
                                    <td className="py-3 px-4 text-sm"></td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-4 text-sm"></td>
                                    <td className="py-3 px-4 text-sm"></td>
                                    <td className="py-3 px-4 text-sm"></td>
                                    <td className="py-3 px-4 text-sm"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Business Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="p-6">
                    <h3 className="text-base font-semibold text-[#3B82F6] mb-4 uppercase">TELL US ABOUT YOUR BUSINESS</h3>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                            <div className="mt-0.5">
                                <div className="h-5 w-5 relative">
                                    <div className="absolute inset-0 bg-blue-100 rounded-sm"></div>
                                    <CheckCircle className="h-5 w-5 text-blue-500 absolute" />
                                </div>
                            </div>
                            <p className="text-gray-700 text-sm">Is your business women-led or women-owned?</p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="mt-0.5">
                                <div className="h-5 w-5 relative">
                                    <div className="absolute inset-0 bg-blue-100 rounded-sm"></div>
                                    <CheckCircle className="h-5 w-5 text-blue-500 absolute" />
                                </div>
                            </div>
                            <p className="text-gray-700 text-sm">Are you registered and operating in Sub-Saharan Africa?</p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="mt-0.5">
                                <div className="h-5 w-5 relative">
                                    <div className="absolute inset-0 bg-blue-100 rounded-sm"></div>
                                    <CheckCircle className="h-5 w-5 text-blue-500 absolute" />
                                </div>
                            </div>
                            <p className="text-gray-700 text-sm">Are you revenue-generating or have a viable model?</p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="mt-0.5">
                                <div className="h-5 w-5 relative">
                                    <div className="absolute inset-0 bg-blue-100 rounded-sm"></div>
                                    <CheckCircle className="h-5 w-5 text-blue-500 absolute" />
                                </div>
                            </div>
                            <p className="text-gray-700 text-sm">Are you in one of our focus sectors (e.g. Food and agribusiness, healthcare, technology, manufacturing, hospitality, renewable energy, retail and consumer goods)?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}