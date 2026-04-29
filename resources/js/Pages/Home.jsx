import React from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import ProductCard from '@/Components/ProductCard';

export default function Home({ sliderImages, categories, newArrivals }) {
    return (
        <MainLayout>
            <Head title="Home | Innovation Revamped" />
            
            {/* Hero Section */}
            <div className="relative h-[600px] bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 opacity-60">
                    {sliderImages.length > 0 ? (
                        <img src={`/img/slide_img/${sliderImages[0].slider_img_id}.jpg`} className="w-full h-full object-cover" alt="Hero" />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center text-white text-4xl font-bold">
                            INNOVATION REVAMPED
                        </div>
                    )}
                </div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                    <h2 className="text-orange-500 text-xl font-semibold mb-2 tracking-[0.2em] uppercase">New Collection 2026</h2>
                    <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-6 leading-tight">Elevate Your Style<br/>with Innovation</h1>
                    <Link href="/shop" className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-full font-bold text-lg transition duration-300 shadow-xl">Shop Now</Link>
                </div>
            </div>

            {/* Categories Section */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Explore Categories</h2>
                        <p className="text-gray-500">Discover our curated collections</p>
                    </div>
                    <Link href="/shop" className="text-orange-600 font-semibold hover:underline">View All</Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.slice(0, 4).map((cat) => (
                        <Link key={cat.main_cat_id} href={`/shop?catId=${cat.main_cat_id}`} className="group relative h-80 rounded-2xl overflow-hidden shadow-lg">
                            <div className="absolute inset-0 bg-gray-800 group-hover:scale-110 transition duration-500">
                                <img src={`/img/icons/${cat.main_cat_name.toLowerCase()}.jpg`} className="w-full h-full object-cover opacity-80" alt={cat.main_cat_name} onError={(e) => e.target.src = '/img/placeholder-cat.jpg'} />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                                <h3 className="text-white text-xl font-bold uppercase tracking-wide">{cat.main_cat_name}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* New Arrivals */}
            <div className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">New Arrivals</h2>
                        <div className="w-20 h-1 bg-orange-600 mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {newArrivals.map((product) => (
                            <ProductCard key={product.product_id} product={product} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Customized Order Section */}
            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">Customized Order Requests</h2>
                        <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                            Design unique styles tailored to your preferences. Create a wardrobe that reflects your personality. Place your bespoke order now!
                        </p>
                        <a href="https://wa.me/+94778973200" className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition duration-300 transform hover:scale-105 shadow-xl">
                            <i className="fab fa-whatsapp text-2xl"></i>
                            <span>Inquire via WhatsApp</span>
                        </a>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

