'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChevronDown, Plus, Loader2 } from 'lucide-react';
import { applicationApi } from '@/lib/api';
import type { ApplicationFormData, FundType } from '@/types/common';

interface FormErrors {
    [key: string]: string;
}

export default function EligibilityCheck() {
    const router = useRouter();
    const [selectedFund, setSelectedFund] = useState<FundType>('IGNITE');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const [generalError, setGeneralError] = useState('');
    const [uploadedFiles, setUploadedFiles] = useState<{ [key: string]: File }>({});
    const [developmentStage, setDevelopmentStage] = useState<string[]>([]);
    const [agreements, setAgreements] = useState({
        privacyAccepted: false,
        informationAccurate: false,
        digitalSignature: false,
    });
    
    const [formData, setFormData] = useState<Partial<ApplicationFormData>>({
        fundType: 'IGNITE',
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
        productDescription: '',
        demoLink: '',
        valueProposition: '',
        competitiveLandscape: '',
        marketStrategy: '',
        pricingModel: '',
        fundingRequested: '',
        fundUtilization: '',
        timeline: '',
        previousFunding: '',
        impactDescription: '',
        jobsAnticipated: '',
        inclusionPlans: '',
    });

    const requiredFields = [
        'businessName',
        'businessLocation',
        'yearFounded',
        'legalStatus',
        'sector',
        'founderName',
        'founderGender',
        'founderRole',
        'founderEmail',
        'founderEducation',
        'motivation',
        'businessIdea',
        'targetMarket',
        'problem',
        'vision',
        'fundingRequested',
        'fundUtilization',
        'timeline',
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleFundSelection = (fund: FundType) => {
        setSelectedFund(fund);
        setFormData(prev => ({ ...prev, fundType: fund }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, documentType: string) => {
        const file = e.target.files?.[0];
        if (file) {
            setUploadedFiles(prev => ({ ...prev, [documentType]: file }));
        }
    };

    const handleDevelopmentStageChange = (stage: string) => {
        setDevelopmentStage(prev => {
            if (prev.includes(stage)) {
                return prev.filter(s => s !== stage);
            }
            return [...prev, stage];
        });
    };

    const handleAgreementChange = (type: keyof typeof agreements) => {
        setAgreements(prev => ({ ...prev, [type]: !prev[type] }));
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        let isValid = true;

        // Check required fields
        requiredFields.forEach(field => {
            if (!formData[field as keyof ApplicationFormData]) {
                newErrors[field] = `${field.replace(/([A-Z])/g, ' $1').trim()} is required`;
                isValid = false;
            }
        });

        // Validate email
        if (formData.founderEmail && !/\S+@\S+\.\S+/.test(formData.founderEmail)) {
            newErrors.founderEmail = 'Please enter a valid email address';
            isValid = false;
        }

        // Check development stage
        if (developmentStage.length === 0) {
            newErrors.developmentStage = 'Please select at least one development stage';
            isValid = false;
        }

        // Check agreements
        if (!agreements.privacyAccepted) {
            newErrors.privacyAccepted = 'You must accept the privacy policy';
            isValid = false;
        }
        if (!agreements.informationAccurate) {
            newErrors.informationAccurate = 'You must declare that information is accurate';
            isValid = false;
        }
        if (!agreements.digitalSignature) {
            newErrors.digitalSignature = 'Digital signature is required';
            isValid = false;
        }

        // Check required file (pitch deck)
        if (!uploadedFiles.pitchDeck) {
            newErrors.pitchDeck = 'Pitch deck is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setGeneralError('');

        if (!validateForm()) {
            // Scroll to first error
            const firstErrorField = Object.keys(errors)[0];
            const element = document.getElementsByName(firstErrorField)[0];
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }

        setIsSubmitting(true);

        try {
            // Prepare form data with all required fields
            const applicationData: ApplicationFormData = {
                ...formData as ApplicationFormData,
                developmentStage,
                privacyAccepted: agreements.privacyAccepted,
                informationAccurate: agreements.informationAccurate,
                digitalSignature: agreements.digitalSignature,
            };

            // Create application
            const response = await applicationApi.create(applicationData);
            
            if (!response.success) {
                throw new Error(response.message || 'Failed to create application');
            }

            const applicationId = response.application.id;

            // Upload documents
            const uploadPromises = Object.entries(uploadedFiles).map(([documentType, file]) => 
                applicationApi.uploadDocument(applicationId, file, documentType)
            );

            try {
                await Promise.all(uploadPromises);
            } catch (uploadError) {
                console.error('Some files failed to upload:', uploadError);
                // Continue anyway - application is created
            }

            // Submit the application
            await applicationApi.submit(applicationId);

            // Redirect to success page or dashboard
            router.push('/dashboard/applications?success=true');
            
        } catch (err) {
            console.error('Application submission error:', err);
            
            // Handle error response
            let errorMessage = 'Failed to submit application. Please try again.';
            
            const error = err as { error?: string; message?: string } | string;
            
            if (typeof error === 'object' && error?.error) {
                errorMessage = error.error;
            } else if (typeof error === 'object' && error?.message) {
                errorMessage = error.message;
            } else if (typeof error === 'string') {
                errorMessage = error;
            }
            
            setGeneralError(errorMessage);
            
            // Scroll to top to show error
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleAddFounder = () => {
        // TODO: Implement multi-founder functionality
        console.log('Add founder clicked');
    };

    const handleUploadBio = () => {
        // Trigger file input for bio upload
        const bioInput = document.getElementById('founderBio') as HTMLInputElement;
        if (bioInput) {
            bioInput.click();
        }
    };

    return (
        <div className="max-w-6xl mx-auto py-6">
            <h1 className="text-xl font-semibold text-[#0B2653] mb-6">
                Select the fund best suited to your business stage:
            </h1>

            {/* Error Message */}
            {generalError && (
                <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                    {generalError}
                </div>
            )}

            {/* Fund Selection Tabs */}
            <div className="flex gap-4 mb-6">
                <button
                    className={`flex items-center justify-between px-6 py-3 rounded-t-lg ${selectedFund === 'IGNITE'
                            ? 'bg-[#0B2653] text-white'
                            : 'bg-[#3B82F6] text-white'
                        }`}
                    onClick={() => handleFundSelection('IGNITE')}
                >
                    <div>
                        <div className="font-semibold">ThriVest Ignite Fund</div>
                        <div className="text-xs opacity-80">(FOR STARTUPS AND EARLY STAGE)</div>
                    </div>
                    {selectedFund === 'IGNITE' && <ChevronDown className="ml-2 h-5 w-5" />}
                </button>

                <button
                    className={`flex items-center justify-between px-6 py-3 rounded-t-lg ${selectedFund === 'ELEVATE'
                            ? 'bg-[#0B2653] text-white'
                            : 'bg-[#3B82F6] text-white'
                        }`}
                    onClick={() => handleFundSelection('ELEVATE')}
                >
                    <div>
                        <div className="font-semibold">ThriVest Elevate Fund</div>
                        <div className="text-xs opacity-80">(FOR GROWTH STAGE BUSINESSES)</div>
                    </div>
                    {selectedFund === 'ELEVATE' && <ChevronDown className="ml-2 h-5 w-5" />}
                </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
                <div className="bg-white bg-opacity-90 rounded-lg p-6 shadow-sm border border-gray-200">
                    <p className="text-sm text-gray-600 mb-4">
                        This form helps us understand your business, funding needs, and growth potential.<br />
                        Please complete all required fields. Fields marked with * are required.
                    </p>

                    <div className="space-y-6">
                        {/* Business Overview Section */}
                        <div className="bg-blue-50 rounded-md p-4">
                            <h2 className="text-sm font-semibold text-[#0B2653] mb-3">Business Overview</h2>
                            <div className="space-y-3">
                                <div>
                                    <input
                                        type="text"
                                        name="businessName"
                                        placeholder="Business name *"
                                        value={formData.businessName}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 rounded border ${errors.businessName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm`}
                                    />
                                    {errors.businessName && <p className="text-red-500 text-xs mt-1">{errors.businessName}</p>}
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        name="businessLocation"
                                        placeholder="Business location (Country, City) *"
                                        value={formData.businessLocation}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 rounded border ${errors.businessLocation ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm`}
                                    />
                                    {errors.businessLocation && <p className="text-red-500 text-xs mt-1">{errors.businessLocation}</p>}
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        name="yearFounded"
                                        placeholder="Year founded or anticipated launch date *"
                                        value={formData.yearFounded}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 rounded border ${errors.yearFounded ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm`}
                                    />
                                    {errors.yearFounded && <p className="text-red-500 text-xs mt-1">{errors.yearFounded}</p>}
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        name="legalStatus"
                                        placeholder="Legal status (registered / not registered/planned registration timeline) *"
                                        value={formData.legalStatus}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 rounded border ${errors.legalStatus ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm`}
                                    />
                                    {errors.legalStatus && <p className="text-red-500 text-xs mt-1">{errors.legalStatus}</p>}
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        name="sector"
                                        placeholder="Sector & sub-sector *"
                                        value={formData.sector}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 rounded border ${errors.sector ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm`}
                                    />
                                    {errors.sector && <p className="text-red-500 text-xs mt-1">{errors.sector}</p>}
                                </div>

                                <input
                                    type="text"
                                    name="website"
                                    placeholder="Website and/or social media links (optional)"
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
                                    <div className="flex-1">
                                        <input
                                            type="text"
                                            name="founderName"
                                            placeholder="Full name(s) of founder(s) *"
                                            value={formData.founderName}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-2 rounded border ${errors.founderName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm`}
                                        />
                                        {errors.founderName && <p className="text-red-500 text-xs mt-1">{errors.founderName}</p>}
                                    </div>

                                    <div className="w-24">
                                        <input
                                            type="text"
                                            name="founderGender"
                                            placeholder="Gender *"
                                            value={formData.founderGender}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-2 rounded border ${errors.founderGender ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm`}
                                        />
                                    </div>

                                    <div className="w-24">
                                        <input
                                            type="text"
                                            name="founderRole"
                                            placeholder="Role *"
                                            value={formData.founderRole}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-2 rounded border ${errors.founderRole ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm`}
                                        />
                                    </div>

                                    <button
                                        type="button"
                                        onClick={handleAddFounder}
                                        className="bg-white p-2 rounded border border-gray-300 hover:bg-gray-50"
                                    >
                                        <Plus className="h-5 w-5 text-blue-500" />
                                    </button>
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        name="founderEmail"
                                        placeholder="Contact email (used for confirmation and tracking) *"
                                        value={formData.founderEmail}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 rounded border ${errors.founderEmail ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm`}
                                    />
                                    {errors.founderEmail && <p className="text-red-500 text-xs mt-1">{errors.founderEmail}</p>}
                                </div>

                                <div className="flex gap-3">
                                    <div className="flex-1">
                                        <textarea
                                            name="founderEducation"
                                            placeholder="Founders' educational background and relevant experience *"
                                            value={formData.founderEducation}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-2 rounded border ${errors.founderEducation ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm min-h-[100px]`}
                                        />
                                        {errors.founderEducation && <p className="text-red-500 text-xs mt-1">{errors.founderEducation}</p>}
                                    </div>

                                    <div className="w-28 flex flex-col items-center justify-center bg-white rounded border border-gray-300 p-3">
                                        <p className="text-xs text-center text-gray-600 mb-3">
                                            Upload founder/team bios (PDF)
                                        </p>
                                        <input
                                            type="file"
                                            id="founderBio"
                                            accept=".pdf"
                                            onChange={(e) => handleFileChange(e, 'founderBio')}
                                            className="hidden"
                                        />
                                        <button
                                            type="button"
                                            onClick={handleUploadBio}
                                            className="bg-white p-2 rounded-full border border-gray-300 hover:bg-gray-50"
                                        >
                                            <Plus className="h-5 w-5 text-blue-500" />
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <textarea
                                        name="motivation"
                                        placeholder="Motivation for starting the business *"
                                        value={formData.motivation}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 rounded border ${errors.motivation ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm min-h-[100px]`}
                                    />
                                    {errors.motivation && <p className="text-red-500 text-xs mt-1">{errors.motivation}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Business Concept & Vision Section */}
                        <div className="bg-blue-50 rounded-md p-4">
                            <h2 className="text-sm font-semibold text-[#0B2653] mb-3">Business Concept & Vision</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div>
                                    <textarea
                                        name="businessIdea"
                                        placeholder="Business idea summary (what you do and why it matters) *"
                                        value={formData.businessIdea}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 rounded border ${errors.businessIdea ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm min-h-[120px]`}
                                    />
                                    {errors.businessIdea && <p className="text-red-500 text-xs mt-1">{errors.businessIdea}</p>}
                                </div>

                                <div>
                                    <textarea
                                        name="targetMarket"
                                        placeholder="Target market and customer segments *"
                                        value={formData.targetMarket}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 rounded border ${errors.targetMarket ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm min-h-[120px]`}
                                    />
                                    {errors.targetMarket && <p className="text-red-500 text-xs mt-1">{errors.targetMarket}</p>}
                                </div>

                                <div>
                                    <textarea
                                        name="problem"
                                        placeholder="The problem being solved and why it's important *"
                                        value={formData.problem}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 rounded border ${errors.problem ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm min-h-[120px]`}
                                    />
                                    {errors.problem && <p className="text-red-500 text-xs mt-1">{errors.problem}</p>}
                                </div>

                                <div>
                                    <textarea
                                        name="vision"
                                        placeholder="Long-term vision for the company *"
                                        value={formData.vision}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 rounded border ${errors.vision ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm min-h-[120px]`}
                                    />
                                    {errors.vision && <p className="text-red-500 text-xs mt-1">{errors.vision}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Product or Service Status Section */}
                        <div className="bg-blue-50 rounded-md p-4 mt-6">
                            <h2 className="text-sm font-semibold text-[#0B2653] mb-3">Product or Service Status</h2>
                            <div className="space-y-3">
                                <div className="w-full px-4 py-3 bg-white rounded border border-gray-300">
                                    <span className="text-sm text-gray-700">Current development stage: *</span>
                                    <div className="flex items-center space-x-4 mt-2">
                                        {['Idea', 'Prototype', 'MVP', 'Pilot'].map(stage => (
                                            <label key={stage} className="flex items-center space-x-1 text-sm">
                                                <input 
                                                    type="checkbox" 
                                                    checked={developmentStage.includes(stage)}
                                                    onChange={() => handleDevelopmentStageChange(stage)}
                                                    className="rounded border-gray-300 text-blue-500 focus:ring-blue-500" 
                                                />
                                                <span>{stage}</span>
                                            </label>
                                        ))}
                                    </div>
                                    {errors.developmentStage && <p className="text-red-500 text-xs mt-1">{errors.developmentStage}</p>}
                                </div>

                                <input
                                    type="text"
                                    name="productDescription"
                                    placeholder="Core product or service description"
                                    value={formData.productDescription}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                />

                                <input
                                    type="text"
                                    name="demoLink"
                                    placeholder="Demo link, product images, or mockups (upload)"
                                    value={formData.demoLink}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                />

                                <input
                                    type="text"
                                    name="valueProposition"
                                    placeholder="Unique value proposition"
                                    value={formData.valueProposition}
                                    onChange={handleInputChange}
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
                                    name="competitiveLandscape"
                                    placeholder="Competitive landscape (direct and indirect competitors)"
                                    value={formData.competitiveLandscape}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                />

                                <input
                                    type="text"
                                    name="marketStrategy"
                                    placeholder="Go-to-market strategy (how you plan to reach and acquire customers)"
                                    value={formData.marketStrategy}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                />

                                <input
                                    type="text"
                                    name="pricingModel"
                                    placeholder="Current or planned pricing model"
                                    value={formData.pricingModel}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                />
                            </div>
                        </div>

                        {/* Funding Requirements Section */}
                        <div className="bg-blue-50 rounded-md p-4 mt-6">
                            <h2 className="text-sm font-semibold text-[#0B2653] mb-3">Funding Requirements</h2>
                            <div className="space-y-3">
                                <div>
                                    <input
                                        type="text"
                                        name="fundingRequested"
                                        placeholder="Funding requested *"
                                        value={formData.fundingRequested}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 rounded border ${errors.fundingRequested ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm`}
                                    />
                                    {errors.fundingRequested && <p className="text-red-500 text-xs mt-1">{errors.fundingRequested}</p>}
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        name="fundUtilization"
                                        placeholder="Breakdown of fund utilization (e.g. product development, hiring, marketing, operations) *"
                                        value={formData.fundUtilization}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 rounded border ${errors.fundUtilization ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm`}
                                    />
                                    {errors.fundUtilization && <p className="text-red-500 text-xs mt-1">{errors.fundUtilization}</p>}
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        name="timeline"
                                        placeholder="Timeline to launch, break-even, or next milestone *"
                                        value={formData.timeline}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-2 rounded border ${errors.timeline ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm`}
                                    />
                                    {errors.timeline && <p className="text-red-500 text-xs mt-1">{errors.timeline}</p>}
                                </div>

                                <input
                                    type="text"
                                    name="previousFunding"
                                    placeholder="Previous funding or grants (if any) — from whom and how much"
                                    value={formData.previousFunding}
                                    onChange={handleInputChange}
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
                                    name="impactDescription"
                                    placeholder="How your business will contribute to gender inclusion, job creation, or environmental sustainability"
                                    value={formData.impactDescription}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                />

                                <input
                                    type="text"
                                    name="jobsAnticipated"
                                    placeholder="Number of jobs you anticipate creating in the first 1-2 years"
                                    value={formData.jobsAnticipated}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                />

                                <input
                                    type="text"
                                    name="inclusionPlans"
                                    placeholder="Plans for inclusive hiring or community involvement"
                                    value={formData.inclusionPlans}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                />
                            </div>
                        </div>

                        {/* Supporting Documents Section */}
                        <div className="bg-blue-50 rounded-md p-4 mt-6">
                            <h2 className="text-sm font-semibold text-[#0B2653] mb-3">Supporting Documents</h2>
                            <div className="space-y-3">
                                <div>
                                    <div className="flex items-center justify-between w-full px-4 py-2 bg-white rounded border border-gray-300 text-sm">
                                        <span>Pitch deck (required) *</span>
                                        <input 
                                            type="file" 
                                            id="pitchDeck"
                                            accept=".pdf,.ppt,.pptx,.doc,.docx"
                                            onChange={(e) => handleFileChange(e, 'pitchDeck')}
                                            className="text-xs file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                        />
                                    </div>
                                    {errors.pitchDeck && <p className="text-red-500 text-xs mt-1">{errors.pitchDeck}</p>}
                                </div>

                                <div className="flex items-center justify-between w-full px-4 py-2 bg-white rounded border border-gray-300 text-sm">
                                    <span>Concept note or Business Plan</span>
                                    <input 
                                        type="file" 
                                        id="businessPlan"
                                        accept=".pdf,.doc,.docx"
                                        onChange={(e) => handleFileChange(e, 'businessPlan')}
                                        className="text-xs file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                    />
                                </div>

                                <div className="flex items-center justify-between w-full px-4 py-2 bg-white rounded border border-gray-300 text-sm">
                                    <span>Visuals or testimonials (optional but encouraged)</span>
                                    <input 
                                        type="file" 
                                        id="visuals"
                                        accept=".pdf,.jpg,.jpeg,.png,.mp4,.mov,.doc,.docx"
                                        onChange={(e) => handleFileChange(e, 'visuals')}
                                        className="text-xs file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                    />
                                </div>

                                <div className="flex items-center justify-between w-full px-4 py-2 bg-white rounded border border-gray-300 text-sm">
                                    <span>Letters of support or references (optional)</span>
                                    <input 
                                        type="file" 
                                        id="references"
                                        accept=".pdf,.doc,.docx"
                                        onChange={(e) => handleFileChange(e, 'references')}
                                        className="text-xs file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                    />
                                </div>

                                <div className="flex items-center justify-between w-full px-4 py-2 bg-white rounded border border-gray-300 text-sm">
                                    <span>Incorporation documents or progress toward legal registration</span>
                                    <input 
                                        type="file" 
                                        id="incorporation"
                                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                        onChange={(e) => handleFileChange(e, 'incorporation')}
                                        className="text-xs file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Declaration & Agreement Section */}
                        <div className="bg-blue-50 rounded-md p-4 mt-6">
                            <h2 className="text-sm font-semibold text-[#0B2653] mb-3">Declaration & Agreement</h2>
                            <div className="space-y-3">
                                <div>
                                    <div className="flex items-center justify-between w-full px-4 py-2 bg-white rounded border border-gray-300 text-sm">
                                        <label htmlFor="privacyPolicy" className="cursor-pointer">
                                            I accept the data use and privacy policy *
                                        </label>
                                        <input 
                                            type="checkbox" 
                                            id="privacyPolicy"
                                            checked={agreements.privacyAccepted}
                                            onChange={() => handleAgreementChange('privacyAccepted')}
                                            className="rounded border-gray-300 text-blue-500 focus:ring-blue-500" 
                                        />
                                    </div>
                                    {errors.privacyAccepted && <p className="text-red-500 text-xs mt-1">{errors.privacyAccepted}</p>}
                                </div>

                                <div>
                                    <div className="flex items-center justify-between w-full px-4 py-2 bg-white rounded border border-gray-300 text-sm">
                                        <label htmlFor="accurateInfo" className="cursor-pointer">
                                            I declare that all submitted information is accurate *
                                        </label>
                                        <input 
                                            type="checkbox" 
                                            id="accurateInfo"
                                            checked={agreements.informationAccurate}
                                            onChange={() => handleAgreementChange('informationAccurate')}
                                            className="rounded border-gray-300 text-blue-500 focus:ring-blue-500" 
                                        />
                                    </div>
                                    {errors.informationAccurate && <p className="text-red-500 text-xs mt-1">{errors.informationAccurate}</p>}
                                </div>

                                <div>
                                    <div className="flex items-center justify-between w-full px-4 py-2 bg-white rounded border border-gray-300 text-sm">
                                        <label htmlFor="digitalSignature" className="cursor-pointer">
                                            Digital signature: I hereby sign with my typed name and date *
                                        </label>
                                        <input 
                                            type="checkbox" 
                                            id="digitalSignature"
                                            checked={agreements.digitalSignature}
                                            onChange={() => handleAgreementChange('digitalSignature')}
                                            className="rounded border-gray-300 text-blue-500 focus:ring-blue-500" 
                                        />
                                    </div>
                                    {errors.digitalSignature && <p className="text-red-500 text-xs mt-1">{errors.digitalSignature}</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end mt-6">
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#0B2653] hover:bg-[#0a1f42] text-white px-6 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Submitting...
                            </>
                        ) : (
                            'SUBMIT APPLICATION'
                        )}
                    </Button>
                </div>
            </form>

            {/* Footer */}
            <div className="text-xs text-[#0B2653] mt-6">
                © ThriVest 2025 | Powered by Desunis
            </div>
        </div>
    );
}