import React, { useState } from 'react';
import { Head, Link, useForm, router, usePage } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { useCart } from '@/Contexts/CartContext';

export default function Show({ product }) {
    const { openSidebar } = useCart();
    const [selectedSize, setSelectedSize] = useState(null);

    const price    = parseFloat(product.lkr_price);
    const offer    = product.discount_product || 0;
    const finalPrice = offer > 0 ? price * (1 - offer / 100) : price;
    const originalPrice = offer > 0 ? price : null;

    const { data, setData, post, processing } = useForm({
        product_id: product.product_id,
        quantity: 1,
        size: null,
    });

    const addToCart = (e) => {
        e.preventDefault();
        if (product.sizes?.length > 0 && !selectedSize) {
            alert('Please select a size.');
            return;
        }
        
        // Pass the size directly to post to ensure it's up to date
        post('/cart/add', {
            onSuccess: () => {
                openSidebar();
            }
        });
    };

    return (
        <MainLayout>
            <Head title={`${product.product_name} | Innovation Revamped`} />

            <div className="bg-white">
                {/* Breadcrumb */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
                    <nav className="flex items-center space-x-2 text-xs font-semibold text-gray-400">
                        <Link href="/" className="hover:text-gray-700 transition">Home</Link>
                        <span>/</span>
                        <Link href="/shop" className="hover:text-gray-700 transition">Shop</Link>
                        <span>/</span>
                        {product.main_cat && (
                            <>
                                <Link href={`/shop?catId=${product.main_cat.main_cat_id}`} className="hover:text-gray-700 transition">
                                    {product.main_cat.main_cat_name}
                                </Link>
                                <span>/</span>
                            </>
                        )}
                        <span className="text-gray-900">{product.product_name}</span>
                    </nav>
                </div>

                {/* Product Detail */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* Image */}
                        <div className="w-full lg:w-1/2">
                            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100 shadow-2xl relative">
                                {offer > 0 && (
                                    <div className="absolute top-5 left-5 z-10 bg-red-600 text-white text-sm font-black px-4 py-1.5 rounded-full shadow-lg">
                                        {offer}% OFF
                                    </div>
                                )}
                                <img
                                    src={`/img/mainImg/${product.product_id}.jpg`}
                                    className="w-full h-full object-cover"
                                    alt={product.product_name}
                                    onError={(e) => e.target.src = 'https://placehold.co/600x750/f3f4f6/9ca3af?text=No+Image'}
                                />
                            </div>
                        </div>

                        {/* Info */}
                        <div className="w-full lg:w-1/2 py-4">
                            {product.sub_cat && (
                                <span className="text-orange-600 font-bold uppercase tracking-[0.2em] text-xs mb-3 block">
                                    {product.sub_cat.sub_cat_name}
                                </span>
                            )}

                            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                                {product.product_name}
                            </h1>

                            {/* Price */}
                            <div className="flex items-end gap-4 mb-8">
                                <span className="text-4xl font-black text-gray-900">
                                    Rs. {finalPrice.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                                </span>
                                {originalPrice && (
                                    <div className="flex flex-col pb-1">
                                        <span className="text-lg text-gray-400 line-through leading-none">
                                            Rs. {originalPrice.toLocaleString()}
                                        </span>
                                        <span className="text-red-600 font-bold text-sm">Save {offer}%</span>
                                    </div>
                                )}
                            </div>

                            {/* Description */}
                            {product.product_description && (
                                <p className="text-gray-600 text-base leading-relaxed mb-10 border-l-4 border-orange-100 pl-5">
                                    {product.product_description}
                                </p>
                            )}

                            {/* Add to Cart Form */}
                            <form onSubmit={addToCart} className="space-y-6">
                                {/* Size Selection */}
                                {product.sizes?.length > 0 && (
                                    <div>
                                        <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-4">
                                            Select Size {selectedSize ? '' : <span className="text-red-400 font-normal normal-case tracking-normal text-[11px] ml-1">* required</span>}
                                        </h3>
                                        <div className="flex flex-wrap gap-3">
                                            {product.sizes.map((size) => (
                                                <button
                                                    type="button"
                                                    key={size.product_size_id}
                                                    onClick={() => {
                                                        setSelectedSize(size.product_size);
                                                        setData('size', size.product_size);
                                                    }}
                                                    className={`min-w-[3.5rem] px-4 py-3 rounded-xl border-2 font-bold text-sm transition ${
                                                        selectedSize === size.product_size
                                                            ? 'border-orange-600 bg-orange-50 text-orange-600 shadow-inner'
                                                            : 'border-gray-100 hover:border-gray-300 text-gray-600'
                                                    }`}
                                                >
                                                    {size.product_size}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Quantity */}
                                <div>
                                    <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-4">Quantity</h3>
                                    <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden w-fit">
                                        <button
                                            type="button"
                                            onClick={() => setData('quantity', Math.max(1, data.quantity - 1))}
                                            className="w-12 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition font-black text-lg"
                                        >−</button>
                                        <span className="w-12 text-center font-black text-gray-900">{data.quantity}</span>
                                        <button
                                            type="button"
                                            onClick={() => setData('quantity', data.quantity + 1)}
                                            className="w-12 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition font-black text-lg"
                                        >+</button>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-4 pt-4">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="flex-1 bg-gray-900 hover:bg-black text-white py-5 rounded-2xl font-black text-base transition shadow-2xl disabled:opacity-50 transform hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        {processing ? 'Adding...' : '🛍 Add to Cart'}
                                    </button>
                                    {/* Wishlist Button */}
                                    <button
                                        type="button"
                                        onClick={() => router.post('/wishlist', { product_id: product.product_id })}
                                        className={`px-6 py-5 border-2 rounded-2xl flex items-center justify-center transition font-bold text-sm whitespace-nowrap group/heart ${
                                            usePage().props.wishlistProductIds?.includes(product.product_id)
                                                ? 'border-red-200 bg-red-50 text-red-600'
                                                : 'border-gray-100 text-gray-400 hover:text-red-500 hover:border-red-200'
                                        }`}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${usePage().props.wishlistProductIds?.includes(product.product_id) ? 'fill-red-600' : 'group-hover/heart:fill-red-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </button>
                                    <Link
                                        href="/cart"
                                        className="px-6 py-5 border-2 border-gray-100 rounded-2xl flex items-center justify-center text-gray-400 hover:text-orange-600 hover:border-orange-200 transition font-bold text-sm whitespace-nowrap"
                                    >
                                        View Cart
                                    </Link>
                                </div>
                            </form>

                            {/* Trust Badges */}
                            <div className="mt-10 pt-8 border-t border-gray-100 grid grid-cols-3 gap-4">
                                {[
                                    { icon: '🛡️', label: 'Secure Checkout' },
                                    { icon: '🚚', label: 'Fast Delivery' },
                                    { icon: '↩️', label: 'Easy Returns' },
                                ].map(({ icon, label }) => (
                                    <div key={label} className="flex flex-col items-center text-center gap-1">
                                        <span className="text-2xl">{icon}</span>
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">{label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

