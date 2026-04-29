import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Wishlist({ wishlist }) {
    return (
        <MainLayout>
            <Head title="My Wishlist | Innovation Revamped" />
            
            <div className="bg-gray-50 min-h-screen py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <h1 className="text-3xl font-black text-gray-900 mb-10">My Wishlist</h1>

                    {wishlist.length === 0 ? (
                        <div className="text-center py-24 bg-white rounded-[3rem] shadow-sm border border-gray-100">
                            <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <p className="text-xl font-bold text-gray-400 mb-8">Your wishlist is empty</p>
                            <Link href="/shop" className="bg-gray-900 text-white font-black px-8 py-4 rounded-2xl hover:bg-black transition">
                                Browse Shop
                            </Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {wishlist.map((item) => (
                                <div key={item.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col">
                                    <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                                        <img 
                                            src={`/img/mainImg/${item.product.product_id}.jpg`} 
                                            alt={item.product.product_name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                                            onError={(e) => e.target.src = 'https://placehold.co/400x500/f3f4f6/9ca3af?text=No+Image'}
                                        />
                                        <button 
                                            onClick={() => router.delete(`/wishlist/${item.id}`)}
                                            className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition shadow-sm"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="text-[10px] text-orange-600 font-black uppercase tracking-[0.2em] mb-2">
                                            {item.product.sub_cat?.sub_cat_name || 'Collection'}
                                        </div>
                                        <h3 className="text-gray-900 font-bold text-lg mb-4 line-clamp-1">
                                            {item.product.product_name}
                                        </h3>
                                        <div className="mt-auto flex items-center justify-between">
                                            <span className="text-xl font-black text-gray-900">
                                                Rs. {parseFloat(item.product.lkr_price).toLocaleString()}
                                            </span>
                                            <Link 
                                                href={`/product/${item.product.product_id}`}
                                                className="bg-gray-50 text-gray-900 px-4 py-2 rounded-xl text-sm font-bold hover:bg-orange-600 hover:text-white transition"
                                            >
                                                View Product
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </MainLayout>
    );
}
