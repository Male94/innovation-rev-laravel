import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function ShippingAndReturns() {
    return (
        <MainLayout>
            <Head title="Shipping & Returns | Innovation Revamped" />
            
            <header className="py-16 text-center bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl font-black text-gray-900 uppercase tracking-widest">Shipping & Returns</h1>
                </div>
            </header>

            <section className="max-w-4xl mx-auto px-6 py-16">
                <div className="prose prose-orange max-w-none space-y-12">
                    <div className="bg-orange-50 p-10 rounded-[3rem] border border-orange-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200/20 rounded-full -mr-16 -mt-16"></div>
                        <p className="text-gray-800 leading-relaxed text-lg relative z-10 font-medium">
                            Innovation Revamped will give its customers the opportunity to refund or return/exchange a product provided it is in fully resalable condition. Returns should be made within 7 days and in original, undamaged packaging.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition">
                            <h2 className="text-xl font-black text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                                <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm">✕</span>
                                Exceptions
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                We are unable to offer a refund or exchange on undergarments for hygiene reasons. We will only be refunding damaged or faulty goods. We are also unable to offer a refund or exchange for items on sale.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition">
                            <h2 className="text-xl font-black text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">🚚</span>
                                Delivery Charges
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                We will refund the delivery charge when a product is incorrect, faulty, or damaged, but not when a product is simply unwanted.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-900 text-white p-10 rounded-3xl shadow-2xl">
                        <h2 className="text-lg font-black uppercase tracking-widest mb-4">Important Note</h2>
                        <p className="text-gray-400 leading-relaxed italic border-l-2 border-orange-600 pl-6">
                            Please note that the above policies are subject to change by the Management of Innovation Revamped at any given time without prior notice to the customer.
                        </p>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
