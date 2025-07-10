'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Plus } from 'lucide-react';

export default function EligibilityCheck() {
    const [selectedFund, setSelectedFund] = useState('ignite');
    const [formData, setFormData] = useState({
        businessName: '',
        businessLocation: '',
        yearFounded: '',
        legalStatus: '',
        sector: '',
        website: '',
        founderName: '',
        founderGender: '',
        founderRole: '',
        founderEmail: '',
        founderEducation: '',
        motivation: '',
        businessIdea: '',
        targetMarket: '',
        problem: '',
        vision: '',
    });
    const [page, setPage] = useState(1);
    const totalPages = 3;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFundSelection = (fund: string) => {
        setSelectedFund(fund);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (page < totalPages) {
            setPage(page + 1);
        } else {
            console.log('Form submitted:', formData);
            // Handle final form submission logic
            // Redirect to next page or show success message
        }
    };

    const handlePrevious = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleUploadBio = () => {
        // Handle bio upload
        console.log('Upload bio clicked');
    };

    const handleAddFounder = () => {
        // Handle adding another founder
        console.log('Add founder clicked');
    };

    return (
        <div className="max-w-6xl mx-auto py-6">
            <h1 className="text-xl font-semibold text-[#0B2653] mb-6">
                Select the fund best suited to your business stage:
            </h1>

            {/* Fund Selection Tabs */}
            <div className="flex gap-4 mb-6">
                <button
                    className={`flex items-center justify-between px-6 py-3 rounded-t-lg ${selectedFund === 'ignite'
                            ? 'bg-[#0B2653] text-white'
                            : 'bg-[#3B82F6] text-white'
                        }`}
                    onClick={() => handleFundSelection('ignite')}
                >
                    <div>
                        <div className="font-semibold">ThriVest Ignite Fund</div>
                        <div className="text-xs opacity-80">(FOR STARTUPS AND EARLY STAGE)</div>
                    </div>
                    {selectedFund === 'ignite' && <ChevronDown className="ml-2 h-5 w-5" />}
                </button>

                <button
                    className={`flex items-center justify-between px-6 py-3 rounded-t-lg ${selectedFund === 'elevate'
                            ? 'bg-[#0B2653] text-white'
                            : 'bg-[#3B82F6] text-white'
                        }`}
                    onClick={() => handleFundSelection('elevate')}
                >
                    <div>
                        <div className="font-semibold">ThriVest Elevate Fund</div>
                        <div className="text-xs opacity-80">(FOR GROWTH STAGE BUSINESSES)</div>
                    </div>
                    {selectedFund === 'elevate' && <ChevronDown className="ml-2 h-5 w-5" />}
                </button>
            </div>

            {/* Form */}
            <div className="bg-white bg-opacity-90 rounded-lg p-6 shadow-sm border border-gray-200">
                <p className="text-sm text-gray-600 mb-4">
                    This form helps us understand your business, funding needs, and growth potential.<br />
                    Please complete all required fields. You may save your progress and return later.
                </p>

                <div className="space-y-6">
                    {/* Business Overview Section */}
                    <div className="bg-blue-50 rounded-md p-4">
                        <h2 className="text-sm font-semibold text-[#0B2653] mb-3">Business Overview</h2>
                        <div className="space-y-3">
                            <input
                                type="text"
                                name="businessName"
                                placeholder="Business name"
                                value={formData.businessName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />

                            <input
                                type="text"
                                name="businessLocation"
                                placeholder="Business location (Country, City)"
                                value={formData.businessLocation}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />

                            <input
                                type="text"
                                name="yearFounded"
                                placeholder="Year founded or anticipated launch date"
                                value={formData.yearFounded}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />

                            <input
                                type="text"
                                name="legalStatus"
                                placeholder="Legal status (registered / not registered/planned registration timeline)"
                                value={formData.legalStatus}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />

                            <input
                                type="text"
                                name="sector"
                                placeholder="Sector & sub-sector"
                                value={formData.sector}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />

                            <input
                                type="text"
                                name="website"
                                placeholder="Website and/or social media links (if applicable)"
                                value={formData.website}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />
                        </div>
                    </div>

                    {/* Founder & Team Section */}
                    <div className="bg-blue-50 rounded-md p-4">
                        <h2 className="text-sm font-semibold text-[#0B2653] mb-3">Founder & Team</h2>
                        <div className="space-y-3">
                            <div className="flex gap-3">
                                <input
                                    type="text"
                                    name="founderName"
                                    placeholder="Full name(s) of founder(s)"
                                    value={formData.founderName}
                                    onChange={handleInputChange}
                                    className="flex-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                />

                                <input
                                    type="text"
                                    name="founderGender"
                                    placeholder="Gender"
                                    value={formData.founderGender}
                                    onChange={handleInputChange}
                                    className="w-24 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                />

                                <input
                                    type="text"
                                    name="founderRole"
                                    placeholder="Role"
                                    value={formData.founderRole}
                                    onChange={handleInputChange}
                                    className="w-24 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                />

                                <button
                                    onClick={handleAddFounder}
                                    className="bg-white p-2 rounded border border-gray-300 hover:bg-gray-50"
                                >
                                    <Plus className="h-5 w-5 text-blue-500" />
                                </button>
                            </div>

                            <input
                                type="email"
                                name="founderEmail"
                                placeholder="Contact email (used for confirmation and tracking)"
                                value={formData.founderEmail}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />

                            <div className="flex gap-3">
                                <textarea
                                    name="founderEducation"
                                    placeholder="Founders' educational background and relevant experience"
                                    value={formData.founderEducation}
                                    onChange={(e) => handleInputChange(e as unknown as React.ChangeEvent<HTMLInputElement>)}
                                    className="flex-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm min-h-[100px]"
                                />

                                <div className="w-28 flex flex-col items-center justify-center bg-white rounded border border-gray-300 p-3">
                                    <p className="text-xs text-center text-gray-600 mb-3">
                                        Upload founder/team bios (PDF)
                                    </p>
                                    <button
                                        onClick={handleUploadBio}
                                        className="bg-white p-2 rounded-full border border-gray-300 hover:bg-gray-50"
                                    >
                                        <Plus className="h-5 w-5 text-blue-500" />
                                    </button>
                                </div>
                            </div>

                            <textarea
                                name="motivation"
                                placeholder="Motivation for starting the business"
                                value={formData.motivation}
                                onChange={(e) => handleInputChange(e as unknown as React.ChangeEvent<HTMLInputElement>)}
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm min-h-[100px]"
                            />
                        </div>
                    </div>

                    {/* Business Concept & Vision Section */}
                    <div className="bg-blue-50 rounded-md p-4">
                        <h2 className="text-sm font-semibold text-[#0B2653] mb-3">Business Concept & Vision</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <textarea
                                name="businessIdea"
                                placeholder="Business idea summary (what you do and why it matters)"
                                value={formData.businessIdea}
                                onChange={(e) => handleInputChange(e as unknown as React.ChangeEvent<HTMLInputElement>)}
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm min-h-[120px]"
                            />

                            <textarea
                                name="targetMarket"
                                placeholder="Target market and customer segments"
                                value={formData.targetMarket}
                                onChange={(e) => handleInputChange(e as unknown as React.ChangeEvent<HTMLInputElement>)}
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm min-h-[120px]"
                            />

                            <textarea
                                name="problem"
                                placeholder="The problem being solved and why it's important"
                                value={formData.problem}
                                onChange={(e) => handleInputChange(e as unknown as React.ChangeEvent<HTMLInputElement>)}
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm min-h-[120px]"
                            />

                            <textarea
                                name="vision"
                                placeholder="Long-term vision for the company"
                                value={formData.vision}
                                onChange={(e) => handleInputChange(e as unknown as React.ChangeEvent<HTMLInputElement>)}
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm min-h-[120px]"
                            />
                        </div>
                    </div>

                    {/* Product or Service Status Section */}
                    <div className="bg-blue-50 rounded-md p-4 mt-6">
                        <h2 className="text-sm font-semibold text-[#0B2653] mb-3">Product or Service Status</h2>
                        <div className="space-y-3">
                            <div className="w-full px-4 py-3 bg-white rounded border border-gray-300 flex items-center gap-4">
                                <span className="text-sm text-gray-700">Current development stage:</span>
                                <div className="flex items-center space-x-4">
                                    <label className="flex items-center space-x-1 text-sm">
                                        <input type="checkbox" className="rounded border-gray-300 text-blue-500 focus:ring-blue-500" />
                                        <span>Idea</span>
                                    </label>
                                    <label className="flex items-center space-x-1 text-sm">
                                        <input type="checkbox" className="rounded border-gray-300 text-blue-500 focus:ring-blue-500" />
                                        <span>Prototype</span>
                                    </label>
                                    <label className="flex items-center space-x-1 text-sm">
                                        <input type="checkbox" className="rounded border-gray-300 text-blue-500 focus:ring-blue-500" />
                                        <span>MVP</span>
                                    </label>
                                    <label className="flex items-center space-x-1 text-sm">
                                        <input type="checkbox" className="rounded border-gray-300 text-blue-500 focus:ring-blue-500" />
                                        <span>Pilot</span>
                                    </label>
                                </div>
                            </div>

                            <input
                                type="text"
                                placeholder="Core product or service description"
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />

                            <input
                                type="text"
                                placeholder="Demo link, product images, or mockups (upload)"
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />

                            <input
                                type="text"
                                placeholder="Unique value proposition"
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />
                        </div>
                    </div>

                    {/* Market Insight Section */}
                    <div className="bg-blue-50 rounded-md p-4 mt-6">
                        <h2 className="text-sm font-semibold text-[#0B2653] mb-3">Market Insight</h2>
                        <div className="space-y-3">
                            <input
                                type="text"
                                placeholder="Competitive landscape (direct and indirect competitors)"
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />

                            <input
                                type="text"
                                placeholder="Go-to-market strategy (how you plan to reach and acquire customers)"
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />

                            <input
                                type="text"
                                placeholder="Current or planned pricing model"
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />
                        </div>
                    </div>

                    {/* Funding Requirements Section */}
                    <div className="bg-blue-50 rounded-md p-4 mt-6">
                        <h2 className="text-sm font-semibold text-[#0B2653] mb-3">Funding Requirements</h2>
                        <div className="space-y-3">
                            <input
                                type="text"
                                placeholder="Funding requested"
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />

                            <input
                                type="text"
                                placeholder="Breakdown of fund utilization (e.g. product development, hiring, marketing, operations)"
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />

                            <input
                                type="text"
                                placeholder="Timeline to launch, break-even, or next milestone"
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />

                            <input
                                type="text"
                                placeholder="Previous funding or grants (if any) — from whom and how much"
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />
                        </div>
                    </div>

                    {/* Impact & ESG Commitment Section */}
                    <div className="bg-blue-50 rounded-md p-4 mt-6">
                        <h2 className="text-sm font-semibold text-[#0B2653] mb-3">Impact & ESG Commitment</h2>
                        <div className="space-y-3">
                            <input
                                type="text"
                                placeholder="How your business will contribute to gender inclusion, job creation, or environmental sustainability"
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />

                            <input
                                type="text"
                                placeholder="Number of jobs you anticipate creating in the first 1-2 years"
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />

                            <input
                                type="text"
                                placeholder="Plans for inclusive hiring or community involvement"
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />
                        </div>
                    </div>

                    {/* Supporting Documents Section */}
                    <div className="bg-blue-50 rounded-md p-4 mt-6">
                        <h2 className="text-sm font-semibold text-[#0B2653] mb-3">Supporting Documents</h2>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between w-full px-4 py-2 bg-white rounded border border-gray-300 text-sm">
                                <span>Pitch deck (required)</span>
                                <button className="text-blue-500 bg-white rounded-full p-1 border border-gray-300 hover:bg-gray-50">
                                    <Plus className="h-4 w-4" />
                                </button>
                            </div>

                            <div className="flex items-center justify-between w-full px-4 py-2 bg-white rounded border border-gray-300 text-sm">
                                <span>Concept note or Business Plan</span>
                                <button className="text-blue-500 bg-white rounded-full p-1 border border-gray-300 hover:bg-gray-50">
                                    <Plus className="h-4 w-4" />
                                </button>
                            </div>

                            <div className="flex items-center justify-between w-full px-4 py-2 bg-white rounded border border-gray-300 text-sm">
                                <span>Visuals or testimonials (optional but encouraged)</span>
                                <button className="text-blue-500 bg-white rounded-full p-1 border border-gray-300 hover:bg-gray-50">
                                    <Plus className="h-4 w-4" />
                                </button>
                            </div>

                            <div className="flex items-center justify-between w-full px-4 py-2 bg-white rounded border border-gray-300 text-sm">
                                <span>Letters of support or references (optional)</span>
                                <button className="text-blue-500 bg-white rounded-full p-1 border border-gray-300 hover:bg-gray-50">
                                    <Plus className="h-4 w-4" />
                                </button>
                            </div>

                            <div className="flex items-center justify-between w-full px-4 py-2 bg-white rounded border border-gray-300 text-sm">
                                <span>Incorporation documents or progress toward legal registration</span>
                                <button className="text-blue-500 bg-white rounded-full p-1 border border-gray-300 hover:bg-gray-50">
                                    <Plus className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Declaration & Agreement Section */}
                    <div className="bg-blue-50 rounded-md p-4 mt-6">
                        <h2 className="text-sm font-semibold text-[#0B2653] mb-3">Supporting Documents</h2>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between w-full px-4 py-2 bg-white rounded border border-gray-300 text-sm">
                                <span>Checkbox to accept data use and privacy policy</span>
                                <div className="bg-white rounded-full p-1 border border-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>

                            <div className="flex items-center justify-between w-full px-4 py-2 bg-white rounded border border-gray-300 text-sm">
                                <span>Declaration that all submitted information is accurate</span>
                                <div className="bg-white rounded-full p-1 border border-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>

                            <div className="flex items-center justify-between w-full px-4 py-2 bg-white rounded border border-gray-300 text-sm">
                                <span>Digital signature: upload typed name and date</span>
                                <button className="text-blue-500 bg-white rounded-full p-1 border border-gray-300 hover:bg-gray-50">
                                    <Plus className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-between mt-6">
                {page > 1 && (
                    <Button
                        onClick={handlePrevious}
                        className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-md"
                    >
                        &lt; PREVIOUS
                    </Button>
                )}
                <div className="flex-1"></div>
                <Button
                    onClick={(e) => handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>)}
                    className="bg-[#0B2653] hover:bg-[#0a1f42] text-white px-6 py-2 rounded-md"
                >
                    {page < totalPages ? 'NEXT >' : 'SUBMIT'}
                </Button>
            </div>

            {/* Footer */}
            <div className="text-xs text-[#0B2653] mt-6">
                © ThriVest 2025 | Powered by Desunis
            </div>
        </div>
    );
}