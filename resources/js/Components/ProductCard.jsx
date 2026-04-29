import React, { useState } from 'react';
import { Link, router, usePage } from '@inertiajs/react';
import { useCart } from '@/Contexts/CartContext';

export default function ProductCard({ product }) {
    const { openSidebar } = useCart();
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [isAdding, setIsAdding] = useState(false);

    const offer = product.discount_product || 0;
    const price = parseFloat(product.lkr_price);
    const originalPrice = offer > 0 ? price / (1 - offer / 100) : price;

    const { wishlistProductIds } = usePage().props;
    const isWishlisted = wishlistProductIds?.includes(product.product_id);

    const handleQuickAdd = (e) => {
        e.preventDefault();
        if (product.sizes?.length > 0 && !selectedSize) {
            alert('Please select a size first');
            return;
        }

        setIsAdding(true);
        router.post(route('cart.add'), {
            product_id: product.product_id,
            size_id: selectedSize,
            color_id: selectedColor,
            quantity: 1
        }, {
            onSuccess: () => {
                setIsAdding(false);
                openSidebar();
            },
            onFinish: () => setIsAdding(false),
        });
    };

    return (
        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
            <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <img 
                    src={`/img/mainImg/${product.product_id}.jpg`} 
                    alt={product.product_name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    onError={(e) => e.target.src = '/img/placeholder-product.jpg'}
                />
                
                {offer > 0 && (
                    <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        {offer}% OFF
                    </div>
                )}
                
                <button 
                    onClick={() => router.post('/wishlist', { product_id: product.product_id })}
                    className={`absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center transition shadow-sm group/heart ${
                        isWishlisted ? 'text-red-500' : 'text-gray-400 hover:text-red-500 hover:bg-white'
                    }`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${isWishlisted ? 'fill-red-500' : 'group-hover/heart:fill-red-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </button>

                {/* Quick Selection Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/95 backdrop-blur-md border-t border-gray-100">
                    <div className="space-y-4">
                        {/* Sizes */}
                        {product.sizes?.length > 0 && (
                            <div>
                                <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-2">Select Size</div>
                                <div className="flex flex-wrap gap-2">
                                    {product.sizes.map(size => (
                                        <button 
                                            key={size.product_size_id}
                                            onClick={() => setSelectedSize(size.product_size_id)}
                                            className={`min-w-[32px] h-8 px-2 rounded-lg text-[10px] font-black transition border-2 ${
                                                selectedSize === size.product_size_id 
                                                ? 'bg-gray-900 border-gray-900 text-white' 
                                                : 'bg-white border-gray-100 text-gray-500 hover:border-gray-900'
                                            }`}
                                        >
                                            {size.product_size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Colors */}
                        {product.colors?.length > 0 && (
                            <div>
                                <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-2">Select Color</div>
                                <div className="flex flex-wrap gap-2">
                                    {product.colors.map(color => (
                                        <button 
                                            key={color.product_color_id}
                                            onClick={() => setSelectedColor(color.product_color_id)}
                                            title={color.product_color_name}
                                            className={`w-6 h-6 rounded-full border-2 transition p-0.5 ${
                                                selectedColor === color.product_color_id ? 'border-gray-900' : 'border-transparent'
                                            }`}
                                        >
                                            <div 
                                                className="w-full h-full rounded-full border border-gray-200 shadow-inner"
                                                style={{ backgroundColor: color.product_color_name.toLowerCase() }}
                                            ></div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <button 
                            onClick={handleQuickAdd}
                            disabled={isAdding}
                            className="w-full bg-gray-900 text-white py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-black transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                        >
                            {isAdding ? 'Adding...' : 'Quick Add'}
                        </button>
                    </div>
                </div>
            </div>

            <div className="p-5">
                <div className="text-xs text-gray-400 uppercase tracking-widest mb-1 font-semibold">
                    {product.sub_cat?.sub_cat_name || 'Collection'}
                </div>
                <h3 className="text-gray-900 font-bold text-lg mb-2 truncate group-hover:text-orange-600 transition">
                    {product.product_name}
                </h3>
                
                <div className="flex items-center space-x-3">
                    <span className="text-xl font-black text-gray-900">
                        Rs. {price.toLocaleString()}
                    </span>
                    {offer > 0 && (
                        <span className="text-sm text-gray-400 line-through">
                            Rs. {originalPrice.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
