import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function TermsAndConditions() {
    return (
        <MainLayout>
            <Head title="Terms & Conditions | Innovation Revamped" />
            
            <header className="py-16 text-center bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl font-black text-gray-900 uppercase tracking-widest">Terms & Conditions</h1>
                </div>
            </header>

            <section className="max-w-4xl mx-auto px-6 py-16">
                <div className="prose prose-orange max-w-none space-y-10">
                    <div className="space-y-4">
                        <p className="text-gray-600 leading-relaxed italic">
                            This website is operated by innovationrevamped.com. Throughout the site, the terms “we”, “us” and “our” refer to innovationrevamped.com.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site.
                        </p>
                    </div>

                    <div className="bg-white border-l-4 border-orange-600 p-8 shadow-sm">
                        <h2 className="text-xl font-black text-gray-900 uppercase tracking-wider mb-4">Section 1 - Online Store Terms</h2>
                        <ul className="list-disc pl-6 space-y-3 text-gray-600">
                            <li>You may not use our products for any illegal or unauthorized purpose nor may you violate any laws in your jurisdiction.</li>
                            <li>You must not transmit any worms or viruses or any code of a destructive nature.</li>
                            <li>A breach or violation of any of the Terms will result in an immediate termination of your Services.</li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-xl font-black text-gray-900 uppercase tracking-wider">Section 2 - General Conditions</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We reserve the right to refuse service to anyone for any reason at any time. You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-xl font-black text-gray-900 uppercase tracking-wider">Section 3 - Modifications to the Service and Prices</h2>
                        <ul className="list-disc pl-6 space-y-3 text-gray-600">
                            <li>Prices for our products are subject to change without notice.</li>
                            <li>We reserve the right at any time to modify or discontinue the Service without notice.</li>
                            <li>We shall not be liable to you or to any third party for any modification, price change, or discontinuance.</li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-xl font-black text-gray-900 uppercase tracking-wider">Section 4 - Products or Services</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Certain products or services may be available exclusively online through the website. We have made every effort to display as accurately as possible the colors and images of our products. We cannot guarantee that your computer monitor's display of any color will be accurate.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-xl font-black text-gray-900 uppercase tracking-wider">Section 5 - Exchange Policy</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Sale items purchased through the Online Store shall be exchanged only through the Online Store. Sale items purchased through our Outlets are non-exchangeable and non-refundable.
                        </p>
                    </div>

                    <div className="pt-8 border-t border-gray-100">
                        <h2 className="text-xl font-black text-gray-900 uppercase tracking-wider mb-4">Contact Information</h2>
                        <p className="text-gray-600">
                            Questions about the Terms of Service should be sent to us at <span className="text-orange-600 font-bold">info@innovationrevamped.com</span>
                        </p>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
