'use client';

import React, { useState } from 'react'
import Image from 'next/image'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import { Mail, MapPin, Send } from 'lucide-react'

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission logic here
        console.log('Form submitted:', formData)
        // You can integrate with your email service here
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            
            {/* Hero Section */}
            <section className="relative h-64 overflow-hidden">
                <div className="absolute inset-0">
                    <Image 
                        src="/images/Fund/bottomimg.png" 
                        alt="Contact Us" 
                        fill 
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-[#1e3a5f]/70"></div>
                </div>
                
                <div className="relative z-10 h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
                        <div className="text-white">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                                Contact Us
                            </h1>
                            <p className="text-lg md:text-xl mt-4 max-w-2xl">
                                Get in touch with our team. We&apos;re here to help you with your investment journey and answer any questions you may have.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                                Get in Touch
                            </h2>
                            <p className="text-lg text-gray-600 mb-12">
                                We&apos;d love to hear from you. Whether you&apos;re an entrepreneur seeking funding, a potential partner, or simply interested in learning more about our mission, we&apos;re here to help.
                            </p>

                            {/* Email Addresses */}
                            <div className="space-y-8">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                            <Mail className="h-6 w-6 text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Investment Inquiries</h3>
                                        <p className="text-gray-600 mb-2">For funding applications and investment-related questions</p>
                                        <a 
                                            href="mailto:invest@thrivestafrica.com" 
                                            className="text-blue-600 hover:text-blue-800 font-medium"
                                        >
                                            invest@thrivestafrica.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                                            <Mail className="h-6 w-6 text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">General Information</h3>
                                        <p className="text-gray-600 mb-2">For partnerships, media inquiries, and general questions</p>
                                        <a 
                                            href="mailto:info@thrivestafrica.com" 
                                            className="text-blue-600 hover:text-blue-800 font-medium"
                                        >
                                            info@thrivestafrica.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                                            <Mail className="h-6 w-6 text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Career Opportunities</h3>
                                        <p className="text-gray-600 mb-2">For job applications, internships, and fellowship opportunities</p>
                                        <a 
                                            href="mailto:jobs@thrivestafrica.com" 
                                            className="text-blue-600 hover:text-blue-800 font-medium"
                                        >
                                            jobs@thrivestafrica.com
                                        </a>
                                    </div>
                                </div>

                                {/* Address Section */}
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                                            <MapPin className="h-6 w-6 text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
                                        <p className="text-gray-600">
                                            [Office Address]<br />
                                            [City, Country]<br />
                                            [Postal Code]
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    Send us a Message
                                </h2>
                                
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
                                        className="w-full bg-[#1e3a5f] hover:bg-[#0a1f42] text-white px-6 py-3 rounded-md font-semibold flex items-center justify-center space-x-2"
                                    >
                                        <Send className="h-5 w-5" />
                                        <span>Send Message</span>
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-20">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-12 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Ready to Start Your Journey?
                            </h2>
                            <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
                                Join the movement of women-led businesses transforming Africa&apos;s economy. Whether you&apos;re seeking investment or looking to partner with us, we&apos;re here to support your mission.
                            </p>
                            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                                <a 
                                    href="/apply" 
                                    className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                                >
                                    Apply for Funding
                                </a>
                                <a 
                                    href="/opportunities" 
                                    className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                                >
                                    View Opportunities
                                </a>
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