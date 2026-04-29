import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Checkout({ items, total }) {
    const { data, setData, post, processing, errors } = useForm({
        customer_name: '',
        customer_email: '',
        customer_phone: '',
        address: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post('/order');
    };

    return (
        <MainLayout>
            <Head title="Checkout | Innovation Revamped" />
            <div className="bg-gray-50 min-h-screen py-12">
                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                    <h1 className="text-3xl font-black text-gray-900 mb-10">Checkout</h1>

                    <div className="flex flex-col lg:flex-row gap-10">
                        {/* Form */}
                        <div className="flex-1">
                            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
                                <h2 className="text-xl font-black text-gray-900 mb-6">Contact Information</h2>
                                <form onSubmit={submit} className="space-y-5">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Full Name *</label>
                                        <input
                                            type="text"
                                            value={data.customer_name}
                                            onChange={(e) => setData('customer_name', e.target.value)}
                                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                                            placeholder="Your full name"
                                        />
                                        {errors.customer_name && <p className="text-red-500 text-xs mt-1">{errors.customer_name}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email *</label>
                                        <input
                                            type="email"
                                            value={data.customer_email}
                                            onChange={(e) => setData('customer_email', e.target.value)}
                                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                                            placeholder="you@example.com"
                                        />
                                        {errors.customer_email && <p className="text-red-500 text-xs mt-1">{errors.customer_email}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Phone</label>
                                        <input
                                            type="tel"
                                            value={data.customer_phone}
                                            onChange={(e) => setData('customer_phone', e.target.value)}
                                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                                            placeholder="+94 xx xxx xxxx"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Delivery Address</label>
                                        <textarea
                                            value={data.address}
                                            onChange={(e) => setData('address', e.target.value)}
                                            rows={3}
                                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition resize-none"
                                            placeholder="No. 1, Example Street, Colombo"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full bg-gray-900 hover:bg-black text-white font-black py-4 rounded-2xl transition shadow-xl disabled:opacity-50 text-lg mt-4"
                                    >
                                        {processing ? 'Placing Order...' : `Place Order — Rs. ${total.toLocaleString()}`}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Order Items */}
                        <div className="w-full lg:w-80">
                            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sticky top-24">
                                <h2 className="text-xl font-black text-gray-900 mb-6">Order Items</h2>
                                <div className="space-y-4 mb-6 border-b pb-6">
                                    {items.map((item) => (
                                        <div key={item.key} className="flex justify-between text-sm">
                                            <span className="text-gray-600 truncate max-w-[160px]">
                                                {item.product_name}
                                                {item.size && <span className="text-gray-400"> ({item.size})</span>}
                                                <span className="text-gray-400"> × {item.quantity}</span>
                                            </span>
                                            <span className="font-bold text-gray-900 ml-2 whitespace-nowrap">
                                                Rs. {item.subtotal.toLocaleString()}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between text-xl font-black text-gray-900 mb-4">
                                    <span>Total</span>
                                    <span>Rs. {total.toLocaleString()}</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-gray-400 font-semibold">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    Secure & encrypted checkout
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

