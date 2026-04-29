import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import ProductCard from '@/Components/ProductCard';

export default function Index({ products, categories }) {
    const { url } = usePage();
    const queryParams = new URLSearchParams(window.location.search);
    const activeCatId = queryParams.get('catId');

    return (
        <MainLayout>
            <Head title="Shop | Innovation Revamped" />
            
            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
                {/* Sidebar Filters */}
                <aside className="w-full md:w-64 flex-shrink-0">
                    <h2 className="text-xl font-bold text-gray-900 mb-8 uppercase tracking-widest">Categories</h2>
                    <div className="space-y-4">
                        <Link 
                            href="/shop" 
                            className={`block py-2 text-sm font-semibold transition ${!activeCatId ? 'text-orange-600 pl-4 border-l-2 border-orange-600' : 'text-gray-500 hover:text-gray-900'}`}
                        >
                            All Products
                        </Link>
                        {categories.map((cat) => (
                            <div key={cat.main_cat_id} className="space-y-2">
                                <Link 
                                    href={`/shop?catId=${cat.main_cat_id}`}
                                    className={`block py-2 text-sm font-bold uppercase tracking-wider transition ${activeCatId == cat.main_cat_id ? 'text-orange-600 pl-4 border-l-2 border-orange-600' : 'text-gray-800 hover:text-orange-600'}`}
                                >
                                    {cat.main_cat_name}
                                </Link>
                                {cat.sub_cats.map((sub) => (
                                    <Link 
                                        key={sub.sub_cat_id}
                                        href={`/shop?catId=${cat.main_cat_id}&subCatId=${sub.sub_cat_id}`}
                                        className="block py-1 pl-4 text-sm text-gray-500 hover:text-orange-600 transition"
                                    >
                                        {sub.sub_cat_name}
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className="mt-12">
                        <h2 className="text-xl font-bold text-gray-900 mb-8 uppercase tracking-widest">Price Range</h2>
                        <div className="space-y-4">
                            <label className="flex items-center space-x-3 cursor-pointer">
                                <input type="checkbox" className="rounded text-orange-600 focus:ring-orange-600" />
                                <span className="text-sm text-gray-600 font-medium">Under Rs. 5,000</span>
                            </label>
                            <label className="flex items-center space-x-3 cursor-pointer">
                                <input type="checkbox" className="rounded text-orange-600 focus:ring-orange-600" />
                                <span className="text-sm text-gray-600 font-medium">Rs. 5,000 - Rs. 10,000</span>
                            </label>
                            <label className="flex items-center space-x-3 cursor-pointer">
                                <input type="checkbox" className="rounded text-orange-600 focus:ring-orange-600" />
                                <span className="text-sm text-gray-600 font-medium">Over Rs. 10,000</span>
                            </label>
                        </div>
                    </div>
                </aside>

                {/* Product Grid */}
                <main className="flex-1">
                    <div className="flex justify-between items-center mb-10">
                        <h1 className="text-2xl font-bold text-gray-900">
                            {activeCatId ? categories.find(c => c.main_cat_id == activeCatId)?.main_cat_name : 'All Collections'}
                            <span className="ml-3 text-sm font-normal text-gray-400">({products.total} items)</span>
                        </h1>
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-500 font-medium">Sort by:</span>
                            <select className="bg-transparent border-none text-sm font-bold text-gray-900 focus:ring-0 cursor-pointer">
                                <option>Latest Arrivals</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Popularity</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.data.map((product) => (
                            <ProductCard key={product.product_id} product={product} />
                        ))}
                    </div>

                    {/* Pagination */}
                    {products.links.length > 3 && (
                        <div className="mt-16 flex justify-center space-x-2">
                            {products.links.map((link, i) => (
                                <Link
                                    key={i}
                                    href={link.url || '#'}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                    className={`px-4 py-2 rounded-lg text-sm font-bold transition ${
                                        link.active 
                                            ? 'bg-orange-600 text-white shadow-lg' 
                                            : link.url 
                                                ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' 
                                                : 'text-gray-300 pointer-events-none'
                                    }`}
                                />
                            ))}
                        </div>
                    )}
                </main>
            </div>
        </MainLayout>
    );
}

