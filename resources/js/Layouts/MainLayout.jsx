import React from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import CartSidebar from '@/Components/CartSidebar';

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans text-gray-900 antialiased selection:bg-orange-100 selection:text-orange-900">
            <Navbar />
            <CartSidebar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
}
