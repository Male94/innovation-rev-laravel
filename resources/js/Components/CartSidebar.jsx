import React from 'react';
import { Link, usePage, router } from '@inertiajs/react';
import { useCart } from '@/Contexts/CartContext';

export default function CartSidebar() {
    const { isSidebarOpen, closeSidebar } = useCart();
    const { cart } = usePage().props;
    
    const cartItems = Object.entries(cart || {});
    const subtotal = cartItems.reduce((acc, [key, item]) => acc + (item.price * item.quantity), 0);

    const removeItem = (key) => {
        router.delete(`/cart/${key}`, {
            preserveScroll: true,
        });
    };

    if (!isSidebarOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] overflow-hidden">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
                onClick={closeSidebar}
            ></div>

            <div className="absolute inset-y-0 right-0 max-w-full flex">
                <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col transform transition ease-in-out duration-500">
                    {/* Header */}
                    <div className="px-6 py-8 border-b border-gray-100 flex items-center justify-between">
                        <h2 className="text-2xl font-black text-gray-900 uppercase tracking-widest">Shopping Cart</h2>
                        <button 
                            onClick={closeSidebar}
                            className="p-2 text-gray-400 hover:text-gray-900 transition"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Items List */}
                    <div className="flex-grow overflow-y-auto px-6 py-8">
                        {cartItems.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-gray-400 font-bold">Your cart is empty</p>
                            </div>
                        ) : (
                            <div className="space-y-8">
                                {cartItems.map(([key, item]) => (
                                    <div key={key} className="flex gap-4">
                                        <div className="w-20 h-24 bg-gray-50 rounded-2xl overflow-hidden flex-shrink-0 border border-gray-100">
                                            <img 
                                                src={`/img/mainImg/${item.id}.jpg`} 
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                                onError={(e) => e.target.src = 'https://placehold.co/100x120/f3f4f6/9ca3af?text=No+Img'}
                                            />
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex justify-between mb-1">
                                                <h4 className="font-bold text-gray-900 line-clamp-1">{item.name}</h4>
                                                <button onClick={() => removeItem(key)} className="text-gray-400 hover:text-red-500 transition">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="text-xs text-gray-400 mb-2 font-medium">
                                                Size: <span className="text-gray-900 font-bold">{item.size_name || 'N/A'}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="text-sm font-black text-gray-900">
                                                    Rs. {parseFloat(item.price).toLocaleString()}
                                                </div>
                                                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                                                    Qty: {item.quantity}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="px-6 py-8 bg-gray-50 border-t border-gray-100 space-y-6">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Subtotal</span>
                            <span className="text-2xl font-black text-gray-900">Rs. {subtotal.toLocaleString()}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <Link 
                                href="/cart"
                                onClick={closeSidebar}
                                className="w-full bg-white border border-gray-200 text-gray-900 font-black py-4 rounded-2xl text-center hover:bg-gray-100 transition shadow-sm"
                            >
                                View Cart
                            </Link>
                            <Link 
                                href="/checkout"
                                onClick={closeSidebar}
                                className="w-full bg-gray-900 text-white font-black py-4 rounded-2xl text-center hover:bg-black transition shadow-xl"
                            >
                                Checkout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
