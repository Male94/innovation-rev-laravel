import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Cart({ items }) {
    const total = items.reduce((sum, item) => {
        const discount = item.discount || 0;
        const price = parseFloat(item.lkr_price) * (1 - discount / 100);
        return sum + price * item.quantity;
    }, 0);

    return (
        <MainLayout>
            <Head title="Cart | Innovation Revamped" />
            <div className="bg-gray-50 min-h-screen py-12">
                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                    <h1 className="text-3xl font-black text-gray-900 mb-10">Your Cart</h1>

                    {items.length === 0 ? (
                        <div className="text-center py-24">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto text-gray-200 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <p className="text-xl font-bold text-gray-400 mb-8">Your cart is empty</p>
                            <Link href="/shop" className="bg-orange-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-orange-700 transition">
                                Continue Shopping
                            </Link>
                        </div>
                    ) : (
                        <div className="flex flex-col lg:flex-row gap-10">
                            {/* Items List */}
                            <div className="flex-1 space-y-4">
                                {items.map((item) => (
                                    <CartItem key={item.key} item={item} />
                                ))}
                            </div>

                            {/* Order Summary */}
                            <div className="w-full lg:w-80">
                                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sticky top-24">
                                    <h2 className="text-xl font-black text-gray-900 mb-6">Order Summary</h2>
                                    <div className="space-y-3 mb-6 border-b pb-6">
                                        {items.map((item) => {
                                            const discount = item.discount || 0;
                                            const price = parseFloat(item.lkr_price) * (1 - discount / 100);
                                            return (
                                                <div key={item.key} className="flex justify-between text-sm text-gray-600">
                                                    <span className="truncate max-w-[160px]">{item.product_name} × {item.quantity}</span>
                                                    <span className="font-bold">Rs. {(price * item.quantity).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="flex justify-between text-lg font-black text-gray-900 mb-8">
                                        <span>Total</span>
                                        <span>Rs. {total.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                                    </div>
                                    <Link
                                        href="/checkout"
                                        className="block w-full bg-gray-900 hover:bg-black text-white text-center font-black py-4 rounded-2xl transition shadow-xl"
                                    >
                                        Proceed to Checkout
                                    </Link>
                                    <Link href="/shop" className="block text-center text-sm text-gray-400 hover:text-gray-700 mt-4 font-semibold transition">
                                        ← Continue Shopping
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </MainLayout>
    );
}

function CartItem({ item }) {
    const removeForm = useForm({});
    const updateForm = useForm({ quantity: item.quantity });

    const discount = item.discount || 0;
    const price = parseFloat(item.lkr_price) * (1 - discount / 100);

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center gap-6">
            <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                <img
                    src={`/img/mainImg/${item.product_id}.jpg`}
                    alt={item.product_name}
                    className="w-full h-full object-cover"
                    onError={(e) => e.target.src = '/img/placeholder-product.jpg'}
                />
            </div>

            <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900 truncate mb-1">{item.product_name}</h3>
                {item.size && <p className="text-xs text-gray-400 font-medium mb-2">Size: {item.size}</p>}
                <p className="text-orange-600 font-black">
                    Rs. {price.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    {discount > 0 && <span className="ml-2 text-xs text-gray-400 line-through">Rs. {parseFloat(item.lkr_price).toLocaleString()}</span>}
                </p>
            </div>

            <div className="flex items-center gap-3">
                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                    <button
                        onClick={() => {
                            if (item.quantity > 1) {
                                updateForm.setData('quantity', item.quantity - 1);
                                updateForm.patch(`/cart/${item.key}`);
                            }
                        }}
                        className="w-9 h-9 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition font-bold"
                    >−</button>
                    <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                    <button
                        onClick={() => {
                            updateForm.setData('quantity', item.quantity + 1);
                            updateForm.patch(`/cart/${item.key}`);
                        }}
                        className="w-9 h-9 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition font-bold"
                    >+</button>
                </div>

                <button
                    onClick={() => removeForm.delete(`/cart/${item.key}`)}
                    className="w-9 h-9 flex items-center justify-center text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
