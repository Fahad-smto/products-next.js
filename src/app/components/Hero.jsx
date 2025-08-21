"use client";

import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative  bg-gray-50 dark:bg-gray-900
 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-20 text-center md:text-left md:flex md:items-center md:justify-between">
                    {/* Text content */}
                    <div className="md:max-w-lg space-y-6">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg">
                            Welcome to <span className="text-yellow-300">SaleSphere</span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-white/90">
                            Discover amazing products, explore details, and manage your favorites easily.
                        </p>
                        <div className="flex justify-center md:justify-start gap-4 mt-6">
                            <Link
                                href="/products"
                                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition duration-300"
                            >
                                Explore Products
                            </Link>
                            <Link
                                href="/login"
                                className="px-6 py-3 border border-white text-white font-semibold rounded-lg shadow hover:bg-white hover:text-blue-600 transition duration-300"
                            >
                                Login
                            </Link>
                        </div>
                    </div>

                    {/* Image / Illustration */}
                    <div className="mt-10 md:mt-0 md:ml-10 flex justify-center md:justify-end">
                        <img
                            src="/services.jpg"
                            alt="Hero Illustration"
                            className="w-full max-w-md rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
