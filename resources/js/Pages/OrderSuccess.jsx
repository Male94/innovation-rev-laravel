import React from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function OrderSuccess({ order }) {
    return (
        <MainLayout>
            <Head title="Order Placed! | Innovation Revamped" />
            <div className="bg-gray-50 min-h-screen py-24">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
                    {/* Success Icon */}
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>

                    <h1 className="text-4xl font-black text-gray-900 mb-4">Order Placed!</h1>
                    <p className="text-gray-500 text-lg mb-2">
                        Thank you, <span className="font-bold text-gray-900">{order.customer_name}</span>!
                    </p>
                    <p className="text-gray-400 mb-10">
                        Your order <span className="font-bold text-gray-600">#{order.order_id}</span> has been received.
                        We'll reach you at <span className="font-bold text-gray-600">{order.customer_email}</span>.
                    </p>

                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-10 text-left">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Order ID</p>
                                <p className="font-black text-gray-900">#{order.order_id}</p>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Total Amount</p>
                                <p className="font-black text-gray-900">Rs. {parseFloat(order.total_amount).toLocaleString()}</p>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Status</p>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700">
                                    Processing
                                </span>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Date</p>
                                <p className="font-bold text-gray-600 text-sm">{new Date(order.created_at).toLocaleDateString()}</p>
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/shop"
                        className="inline-block bg-gray-900 hover:bg-black text-white font-black px-10 py-4 rounded-2xl transition shadow-xl"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </MainLayout>
    );
}

