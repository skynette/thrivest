'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';
import { useRegister } from '@/hooks/useAuth';
import Link from 'next/link';

export default function ApplicantPortal() {
    const router = useRouter();
    const registerMutation = useRegister();
    
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        isWomenLed: false,
        isSubSaharan: false,
        isRevenueGenerating: false,
        isInFocusSector: false,
        acceptTerms: false
    });

    const [errors, setErrors] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        acceptTerms: ''
    });
    
    const [submitError, setSubmitError] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });

        // Clear error when field is being edited
        if (errors[name as keyof typeof errors]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const validateForm = () => {
        const newErrors = {
            fullName: '',
            email: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
            acceptTerms: ''
        };

        let isValid = true;

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            newErrors.email = 'Valid email is required';
            isValid = false;
        }

        if (!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = 'Phone number is required';
            isValid = false;
        }

        if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
            isValid = false;
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
            isValid = false;
        }

        if (!formData.acceptTerms) {
            newErrors.acceptTerms = 'You must accept the terms';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        if (e) e.preventDefault();
        setSubmitError('');

        if (validateForm()) {
            try {
                // Split full name into first and last name
                const nameParts = formData.fullName.trim().split(' ');
                const firstName = nameParts[0];
                const lastName = nameParts.slice(1).join(' ') || firstName;

                await registerMutation.mutateAsync({
                    firstName,
                    lastName,
                    email: formData.email,
                    phone: formData.phoneNumber,
                    password: formData.password,
                });

                router.push('/dashboard');
            } catch (error: unknown) {
                const errorMessage = error instanceof Error ? error.message : 'Registration failed. Please try again.';
                setSubmitError(errorMessage);
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative">
            {/* Background with gradient and overlay */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute inset-0 bg-gradient-to-br from-[#00a8e8] to-[#1e3a5f]"
                    style={{
                        backgroundImage: `url('/images/application portal bg.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundBlendMode: 'overlay'
                    }}
                >
                    <div className="absolute inset-0 bg-[#1e3a5f]/20"></div>
                </div>
            </div>

            {/* Form Container */}
            <div className="relative z-10 w-full max-w-2xl space-y-8">
                {/* Header */}
                <div className="flex items-center justify-center flex-col">
                    <div className="bg-white rounded-full p-6 mb-4 shadow-lg">
                        <User className="h-12 w-12 text-[#1e3a5f]" />
                    </div>
                    <h2 className="text-4xl font-bold text-white text-center">
                        Applicant Portal
                    </h2>
                    <p className="text-white text-center mt-2">
                        Already have an account?{' '}
                        <Link href="/login" className="text-[#00a8e8] hover:underline">
                            Sign in here
                        </Link>
                    </p>
                </div>

                {/* Registration Form */}
                <div className="space-y-4">
                    {/* Submit Error */}
                    {submitError && (
                        <div className="bg-red-500/20 border border-red-500 text-white px-4 py-3 rounded-md">
                            {submitError}
                        </div>
                    )}
                    
                    {/* Full Name */}
                    <div>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full name"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00a8e8] ${errors.fullName ? 'border-2 border-red-500' : ''
                                }`}
                        />
                        {errors.fullName && (
                            <p className="text-white text-sm mt-1">{errors.fullName}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00a8e8] ${errors.email ? 'border-2 border-red-500' : ''
                                }`}
                        />
                        {errors.email && (
                            <p className="text-white text-sm mt-1">{errors.email}</p>
                        )}
                    </div>

                    {/* Phone Number */}
                    <div>
                        <input
                            type="tel"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00a8e8] ${errors.phoneNumber ? 'border-2 border-red-500' : ''
                                }`}
                        />
                        {errors.phoneNumber && (
                            <p className="text-white text-sm mt-1">{errors.phoneNumber}</p>
                        )}
                    </div>

                    {/* Password and Confirm Password - Side by side on larger screens */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Password */}
                        <div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00a8e8] ${errors.password ? 'border-2 border-red-500' : ''
                                    }`}
                            />
                            {errors.password && (
                                <p className="text-white text-sm mt-1">{errors.password}</p>
                            )}
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                className={`w-full px-4 py-3 rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00a8e8] ${errors.confirmPassword ? 'border-2 border-red-500' : ''
                                    }`}
                            />
                            {errors.confirmPassword && (
                                <p className="text-white text-sm mt-1">{errors.confirmPassword}</p>
                            )}
                        </div>
                    </div>

                    {/* Checkboxes for Business Criteria */}
                    <div className="space-y-3 mt-4">
                        {/* Women-led or women-owned */}
                        <div className="flex items-start">
                            <div className="flex h-5 items-center">
                                <input
                                    id="isWomenLed"
                                    name="isWomenLed"
                                    type="checkbox"
                                    checked={formData.isWomenLed}
                                    onChange={handleInputChange}
                                    className="h-4 w-4 rounded border-gray-300 text-[#00a8e8] focus:ring-[#00a8e8]"
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="isWomenLed" className="text-white">
                                    Is your business women-led or women-owned?
                                </label>
                            </div>
                        </div>

                        {/* Sub-Saharan Africa */}
                        <div className="flex items-start">
                            <div className="flex h-5 items-center">
                                <input
                                    id="isSubSaharan"
                                    name="isSubSaharan"
                                    type="checkbox"
                                    checked={formData.isSubSaharan}
                                    onChange={handleInputChange}
                                    className="h-4 w-4 rounded border-gray-300 text-[#00a8e8] focus:ring-[#00a8e8]"
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="isSubSaharan" className="text-white">
                                    Are you registered and operating in Sub-Saharan Africa?
                                </label>
                            </div>
                        </div>

                        {/* Revenue Generating */}
                        <div className="flex items-start">
                            <div className="flex h-5 items-center">
                                <input
                                    id="isRevenueGenerating"
                                    name="isRevenueGenerating"
                                    type="checkbox"
                                    checked={formData.isRevenueGenerating}
                                    onChange={handleInputChange}
                                    className="h-4 w-4 rounded border-gray-300 text-[#00a8e8] focus:ring-[#00a8e8]"
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="isRevenueGenerating" className="text-white">
                                    Are you revenue-generating or have a viable model?
                                </label>
                            </div>
                        </div>

                        {/* Focus Sectors */}
                        <div className="flex items-start">
                            <div className="flex h-5 items-center">
                                <input
                                    id="isInFocusSector"
                                    name="isInFocusSector"
                                    type="checkbox"
                                    checked={formData.isInFocusSector}
                                    onChange={handleInputChange}
                                    className="h-4 w-4 rounded border-gray-300 text-[#00a8e8] focus:ring-[#00a8e8]"
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="isInFocusSector" className="text-white">
                                    Are you in one of our focus sectors
                                    <span className="block mt-1 text-xs">
                                        (e.g. Food and Agribusiness, Hospitality, Light Manufacturing, Health and Wellness, Technology, Clean Energy and Green Solutions, Retail and Consumer Goods)?
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="bg-[#1e3a5f]/80 p-4 rounded-md mt-6">
                        <div className="flex items-start">
                            <div className="flex h-5 items-center">
                                <input
                                    id="acceptTerms"
                                    name="acceptTerms"
                                    type="checkbox"
                                    checked={formData.acceptTerms}
                                    onChange={handleInputChange}
                                    className={`h-4 w-4 rounded border-gray-300 text-[#00a8e8] focus:ring-[#00a8e8] ${errors.acceptTerms ? 'border-2 border-red-500' : ''
                                        }`}
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="acceptTerms" className="text-white">
                                    Accept our Privacy Policy and Terms of Use
                                </label>
                                {errors.acceptTerms && (
                                    <p className="text-red-300 text-xs mt-1">{errors.acceptTerms}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Register Button */}
                    <div className="flex justify-center pt-4">
                        <Button
                            type="button"
                            onClick={(e) => handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>)}
                            disabled={registerMutation.isPending}
                            className="bg-[#1e3a5f] hover:bg-[#152b47] text-white font-semibold py-3 px-10 rounded-full transition-colors duration-200 text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {registerMutation.isPending ? 'Registering...' : 'Register'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}