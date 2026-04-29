import React from 'react';
import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="bg-white border-t py-20 mt-auto">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-1">
                    <div className="text-2xl font-bold text-orange-600 mb-6 uppercase tracking-tighter">Innovation</div>
                    <p className="text-gray-500 leading-relaxed mb-6">Redefining modern fashion with sustainable practices and timeless designs.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="w-10 h-10 rounded-full border flex items-center justify-center text-gray-400 hover:bg-orange-600 hover:text-white transition"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="w-10 h-10 rounded-full border flex items-center justify-center text-gray-400 hover:bg-orange-600 hover:text-white transition"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="w-10 h-10 rounded-full border flex items-center justify-center text-gray-400 hover:bg-orange-600 hover:text-white transition"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
                <div>
                    <h4 className="text-gray-900 font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
                    <ul className="space-y-4 text-gray-500 text-sm">
                        <li><Link href="/" className="hover:text-orange-600">Home</Link></li>
                        <li><Link href="/shop" className="hover:text-orange-600">Shop</Link></li>
                        <li><Link href="/about" className="hover:text-orange-600">About Us</Link></li>
                        <li><Link href="/contact" className="hover:text-orange-600">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-gray-900 font-bold mb-6 uppercase tracking-wider text-sm">Support</h4>
                    <ul className="space-y-4 text-gray-500 text-sm">
                        <li><Link href="/privacy-policy" className="hover:text-orange-600">Privacy Policy</Link></li>
                        <li><Link href="/terms-conditions" className="hover:text-orange-600">Terms & Conditions</Link></li>
                        <li><Link href="/shipping-returns" className="hover:text-orange-600">Shipping & Returns</Link></li>
                        <li><Link href="/contact" className="hover:text-orange-600">FAQs</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-gray-900 font-bold mb-6 uppercase tracking-wider text-sm">Newsletter</h4>
                    <p className="text-gray-500 text-sm mb-6">Stay updated with our latest news and offers.</p>
                    <div className="flex">
                        <input type="email" placeholder="Email address" className="bg-gray-100 border-none px-4 py-3 rounded-l-lg w-full focus:ring-1 focus:ring-orange-600" />
                        <button className="bg-orange-600 text-white px-6 py-3 rounded-r-lg hover:bg-orange-700 transition">Join</button>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-gray-100 text-center">
                <p className="text-gray-400 text-xs">© {new Date().getFullYear()} Innovation Revamped. All rights reserved.</p>
            </div>
        </footer>
    );
}
