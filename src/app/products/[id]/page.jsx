"use client";
import products from '../../../../public/products.json';

import Link from "next/link";

export default function ProductDetailsPage({ params }) {
    const product = products.find((p) => p.id === params.id);

    if (!product) {
        return (
            <div className="max-w-md mx-auto p-6 text-center">
                <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
                <Link
                    href="/products"
                    className="text-blue-600 underline hover:text-blue-800"
                >
                    Back to Products
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md mt-10">
            {/* Product Image */}
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover rounded-lg mb-6"
            />

            {/* Product Info */}
            <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                {product.name}
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
                {product.description}
            </p>
            <p className="text-xl font-semibold text-blue-600 mb-2">
                Price: ${product.price}
            </p>
            <p className="text-gray-500 mb-6">Category: {product.category}</p>

            {/* Back Button */}
            <Link
                href="/products"
                className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                Back to Products
            </Link>
        </div>
    );
}
