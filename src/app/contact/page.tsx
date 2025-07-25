'use client';

import React, { useState } from 'react'
import Image from 'next/image'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Mail, PhoneIcon, Send } from 'lucide-react'
import { useSubmitContact } from '@/hooks/useContact'

const ContactPage = () => {
    const submitContactMutation = useSubmitContact();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [submitError, setSubmitError] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitError('');

        try {
            await submitContactMutation.mutateAsync(formData);
            setIsSubmitted(true);
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Failed to send message. Please try again.';
            setSubmitError(errorMessage);
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            
            {/* Hero Section */}
            <section className="relative h-64 overflow-hidden">
                {/* Background with breadcrumb image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/about us/breadcrumb bg.jpg"
                        alt="Our Approach"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Breadcrumb */}
                <div className="relative z-10 h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                            Contact Us
                        </h1>
                    </div>
                </div>
            </section>


            {/* Main Content */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-1xl md:text-2xl font-bold text-[#10386c] mb-8">
                                Get in Touch
                            </h2>
                            <p className="text-lg text-gray-600 mb-12">
                                We&apos;d love to hear from you. Whether you&apos;re an entrepreneur seeking funding, a potential partner, or simply interested in learning more about our mission, we&apos;re here to help.
                            </p>

                            {/* Email Addresses */}
                            <div className="space-y-8">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-[#539fda] rounded-full flex items-center justify-center">
                                            <Mail className="h-6 w-6 text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-[#10386c] mb-2">Investment Inquiries</h3>
                                        <p className="text-gray-600 mb-2">For funding applications and investment-related questions</p>
                                        <a 
                                            href="mailto:invest@thrivestafrica.com" 
                                            className="text-[#539fda] hover:text-blue-800 font-medium"
                                        >
                                            grow@thrivestafrica.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-[#539fda] rounded-full flex items-center justify-center">
                                            <Mail className="h-6 w-6 text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-[#10386c] mb-2">Whistleblowing</h3>
                                        <p className="text-gray-600 mb-2">For partnerships, media inquiries, and general questions</p>
                                        <a 
                                            href="mailto:info@thrivestafrica.com" 
                                            className="text-[#539fda] hover:text-blue-800 font-medium"
                                        >
                                            complaint@thrivestafrica.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-[#539fda] rounded-full flex items-center justify-center">
                                            <Mail className="h-6 w-6 text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-[#10386c] mb-2">Career Opportunities</h3>
                                        <p className="text-gray-600 mb-2">For job applications, internships, and fellowship opportunities</p>
                                        <a 
                                            href="mailto:jobs@thrivestafrica.com" 
                                            className="text-[#539fda] hover:text-blue-800 font-medium"
                                        >
                                            careers@thrivestafrica.com
                                        </a>
                                    </div>
                                </div>

                                {/* Address Section */}
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-[#539fda] rounded-full flex items-center justify-center">
                                            <PhoneIcon className="h-6 w-6 text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-[#10386c] mb-2">Mobile</h3>
                                        <p className="text-gray-600 mb-2">We’re here to support you, reach out to us on</p>
                                        <p className="text-[#539fda]">
                                             +234-810-735-6947 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <h2 className="text-2xl font-bold text-[#10386c] mb-6">
                                    Send us a Message
                                </h2>
                                
                                {/* Success Message */}
                                {isSubmitted && (
                                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md mb-6">
                                        <p className="font-medium">Message sent successfully!</p>
                                        <p className="text-sm">Thank you for contacting us. We&apos;ll get back to you soon.</p>
                                    </div>
                                )}

                                {/* Error Message */}
                                {submitError && (
                                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">
                                        {submitError}
                                    </div>
                                )}
                                
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter your email address"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter message subject"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                                            placeholder="Enter your message"
                                        />
                                    </div>

                                    <Button 
                                        type="submit"
                                        disabled={submitContactMutation.isPending}
                                        className="w-full bg-[#1e3a5f] hover:bg-[#0a1f42] text-white px-6 py-3 rounded-md font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <Send className="h-5 w-5" />
                                        <span>{submitContactMutation.isPending ? 'Sending...' : 'Send Message'}</span>
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>

                    

                </div>
            </section>

            <Footer />
        </div>
    )
}

export default ContactPage