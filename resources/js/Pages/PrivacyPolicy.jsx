import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function PrivacyPolicy() {
    return (
        <MainLayout>
            <Head title="Privacy Policy | Innovation Revamped" />
            
            <header className="py-16 text-center bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl font-black text-gray-900 uppercase tracking-widest">Privacy Policy</h1>
                </div>
            </header>

            <section className="max-w-4xl mx-auto px-6 py-16">
                <div className="prose prose-orange max-w-none space-y-10">
                    <p className="text-gray-600 leading-relaxed text-lg">
                        This Privacy Policy governs how SR Innovation (Pvt) Ltd collects, uses, maintains, and discloses information collected from users (each, a "User") of the www.innovationrevamped.com website ("Site"). This privacy policy applies to the Site and all products and services offered by SR Innovation (Pvt) Ltd.
                    </p>

                    <div>
                        <h2 className="text-xl font-black text-gray-900 uppercase tracking-wider mb-4">Personal Identification Information</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, place an order, subscribe to the newsletter, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number, and credit card information. Users may, however, visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personal identification information, except that it may prevent them from engaging in certain Site-related activities.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-black text-gray-900 uppercase tracking-wider mb-4">Non-Personal Identification Information</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer, and technical information about the User's means of connection to our Sites, such as the operating system and the Internet service providers utilized and other similar information.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-black text-gray-900 uppercase tracking-wider mb-4">Web Browser Cookies</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Our Site may use "cookies" to enhance the User experience. Users' web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. Users may choose to set their web browser to refuse cookies or to alert them when cookies are being sent. If they do so, note that some parts of the Site may not function properly.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-black text-gray-900 uppercase tracking-wider mb-4">How We Use Collected Information</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            SR Innovation (Pvt) Ltd may collect and use Users' personal information for the following purposes:
                        </p>
                        <ul className="list-disc pl-6 space-y-3 text-gray-600">
                            <li><strong>To improve customer service:</strong> Information you provide helps us respond to your customer service requests and support needs more efficiently.</li>
                            <li><strong>To personalize user experience:</strong> We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.</li>
                            <li><strong>To improve our Site:</strong> We may use the feedback you provide to improve our products and services.</li>
                            <li><strong>To process payments:</strong> We may use the information Users provide about themselves when placing an order only to provide service to that order. We do not share this information with outside parties except to the extent necessary to provide the service.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-black text-gray-900 uppercase tracking-wider mb-4">How We Protect Your Information</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our Site. Sensitive and private data exchange between the Site and its Users happens over an SSL-secured communication channel and is encrypted and protected with digital signatures.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-black text-gray-900 uppercase tracking-wider mb-4">Contacting Us</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
                        </p>
                        <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100 text-center">
                            <p className="font-black text-gray-900">SR Innovation (Pvt) Ltd</p>
                            <p className="text-gray-600">245 Vijaya Kumarathunga Mawatha, Colombo 05</p>
                            <p className="text-gray-900 font-bold mt-4">+94 77 687 4441</p>
                            <p className="text-orange-600 font-bold">info@innovationrevamped.com</p>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
