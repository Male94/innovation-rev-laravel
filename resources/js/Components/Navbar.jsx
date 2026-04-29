import React, { useState } from 'react';
import { Link, usePage, router } from '@inertiajs/react';
import { useCart } from '@/Contexts/CartContext';

export default function Navbar() {
    const { openSidebar } = useCart();
    const { url } = usePage();
    const props = usePage().props;
    const cartCount = props.cartCount ?? 0;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const links = [
        { href: '/', label: 'HOME' },
        { href: '/shop', label: 'SHOP' },
        { href: '/about', label: 'ABOUT US' },
        { href: '/contact', label: 'CONTACT' },
    ];

    const isActive = (href) => {
        if (href === '/') return url === '/';
        return url.startsWith(href);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.get('/shop', { search: searchQuery });
            setSearchOpen(false);
            setSearchQuery('');
        }
    };

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <span className="text-2xl font-black tracking-tight">
                            <span className="text-gray-900">INNOVA</span>
                            <span className="text-orange-600">TION</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {links.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className={`text-xs font-bold tracking-widest transition-colors duration-200 ${
                                    isActive(href)
                                        ? 'text-orange-600 border-b-2 border-orange-600 pb-0.5'
                                        : 'text-gray-500 hover:text-gray-900'
                                }`}
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Actions */}
                    <div className="flex items-center space-x-4">
                        {/* Search */}
                        <div className="relative flex items-center">
                            {searchOpen && (
                                <form onSubmit={handleSearch} className="absolute right-full mr-2 animate-in fade-in slide-in-from-right-4 duration-300">
                                    <input
                                        autoFocus
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search products..."
                                        className="w-48 lg:w-64 bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                                    />
                                </form>
                            )}
                            <button 
                                onClick={() => setSearchOpen(!searchOpen)}
                                className={`p-2 transition-colors duration-200 ${searchOpen ? 'text-orange-600' : 'text-gray-400 hover:text-gray-900'}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                                </svg>
                            </button>
                        </div>

                        {/* Wishlist */}
                        <Link href="/wishlist" className="relative p-2 text-gray-400 hover:text-gray-900 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            {props.wishlistCount > 0 && (
                                <span className="absolute -top-0.5 -right-0.5 bg-orange-600 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                                    {props.wishlistCount}
                                </span>
                            )}
                        </Link>

                        {/* Cart */}
                        <button 
                            onClick={openSidebar}
                            className="relative p-2 text-gray-400 hover:text-gray-900 transition focus:outline-none"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            {cartCount > 0 && (
                                <span className="absolute -top-0.5 -right-0.5 bg-gray-900 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </button>

                        {/* Auth */}
                        {props.auth?.user ? (
                            <Link href="/dashboard" className="hidden sm:block text-xs font-bold text-gray-500 hover:text-gray-900 tracking-widest transition">
                                ACCOUNT
                            </Link>
                        ) : (
                            <Link href="/login" className="hidden sm:block bg-gray-900 text-white text-xs font-bold tracking-widest px-4 py-2 rounded-xl hover:bg-black transition">
                                LOGIN
                            </Link>
                        )}

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden p-2 text-gray-400 hover:text-gray-900 transition"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {mobileOpen
                                    ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                }
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileOpen && (
                    <div className="md:hidden border-t border-gray-100 py-4 space-y-2 animate-fade-in">
                        {links.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setMobileOpen(false)}
                                className={`block px-4 py-2 text-xs font-bold tracking-widest transition rounded-lg ${
                                    isActive(href)
                                        ? 'text-orange-600 bg-orange-50'
                                        : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                                }`}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
}

