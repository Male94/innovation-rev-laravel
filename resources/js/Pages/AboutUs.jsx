import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function AboutUs() {
    return (
        <MainLayout>
            <Head title="About Us | Innovation Revamped" />
            
            <header className="py-16 text-center">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-4xl font-black text-gray-900 uppercase tracking-widest">About Us</h1>
                </div>
            </header>

            <section className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <div className="flex flex-col">
                        {/* Our Founder */}
                        <div className="group relative overflow-hidden border-[3px] border-white transition-transform duration-300 hover:scale-[1.02] hover:z-10 shadow-lg">
                            <img src="/img/about_one.jpg" alt="Our Founder" className="w-full h-auto object-cover" />
                            <div className="absolute inset-0 bg-black/40 p-10 flex flex-col justify-center">
                                <h2 className="text-3xl font-black text-white italic mb-4 tracking-wide">Our Founder</h2>
                                <p className="text-white text-base leading-relaxed italic">
                                    <strong>Innovation Revamped</strong> is a boutique fashion brand founded and designed by Ruwani Perera. Growing up immersed in the fashion industry, thanks to her mother's expertise, Ruwani embarked on her own journey of discovery, developing a unique perspective that now defines our brand.
                                </p>
                            </div>
                        </div>

                        {/* Perfect Fit */}
                        <div className="group relative overflow-hidden border-[3px] border-white transition-transform duration-300 hover:scale-[1.02] hover:z-10 shadow-lg md:-mt-20 lg:-mt-32">
                            <img src="/img/about_three.jpg" alt="Perfect Fit" className="w-full h-auto object-cover" />
                            <div className="absolute inset-0 bg-black/40 p-10 flex flex-col justify-center">
                                <h2 className="text-3xl font-black text-white italic mb-4 tracking-wide">Perfect Fit</h2>
                                <p className="text-white text-base leading-relaxed italic">
                                    Understanding the importance of a <strong>perfect fit</strong>, we offer alteration services for any item on display, ensuring you look and feel your best. Additionally, we specialize in bespoke fashion, bringing your custom design ideas to life. With Innovation Revamped, the possibilities are endless!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        {/* Our Craft */}
                        <div className="group relative overflow-hidden border-[3px] border-white transition-transform duration-300 hover:scale-[1.02] hover:z-10 shadow-lg">
                            <img src="/img/about_two.jpg" alt="Our Craft" className="w-full h-auto object-cover" />
                            <div className="absolute inset-0 bg-black/40 p-10 flex flex-col justify-center">
                                <h2 className="text-3xl font-black text-white italic mb-4 tracking-wide">Our Craft</h2>
                                <p className="text-white text-base leading-relaxed italic">
                                    At <strong>Innovation Revamped</strong>, we are dedicated to the meticulous craft of fashion, paying careful attention to every detail. Our pieces are produced in small quantities, ensuring each item remains exclusive and highly valued. We believe in quality over quantity, providing our customers with truly unique garments.
                                </p>
                            </div>
                        </div>

                        {/* Discover Us */}
                        <div className="group relative overflow-hidden border-[3px] border-white transition-transform duration-300 hover:scale-[1.02] hover:z-10 shadow-lg flex-grow">
                            <img src="/img/about_four.jpg" alt="Elegance" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/40 p-10 flex flex-col justify-center">
                                <h2 className="text-3xl font-black text-white italic mb-4 tracking-wide">Discover Us</h2>
                                <p className="text-white text-base leading-relaxed italic mb-8">
                                    Discover the elegance, exclusivity, and exceptional craftsmanship that set us apart. Welcome to Innovation Revamped, where fashion is reimagined.
                                </p>

                                {/* Badges */}
                                <div className="flex flex-wrap gap-6 justify-center mt-auto">
                                    {['Elegance', 'Style', 'Luxury', 'Design'].map((item) => (
                                        <div key={item} className="text-white font-black italic text-xl uppercase tracking-widest px-4 py-2 border border-white/30 rounded">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
