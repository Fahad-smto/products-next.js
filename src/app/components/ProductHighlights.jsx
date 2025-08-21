"use client";

import Link from "next/link";

const products = [
  {
    id: "1",
    name: "High-Performance Laptop",
    description: "Powerful laptop for work and gaming.",
    price: 1200,
    image: "https://images.unsplash.com/photo-1612831662405-40325e3a3b0e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "2",
    name: "Smartphone Pro",
    description: "Latest smartphone with cutting-edge features.",
    price: 899,
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9e7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "3",
    name: "Wireless Headphones",
    description: "Noise-cancelling headphones with long battery life.",
    price: 199,
    image: "https://images.unsplash.com/photo-1580894908361-3df1c5f57c18?auto=format&fit=crop&w=600&q=80",
  },
];

export default function ProductHighlights() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Product Highlights
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {product.description}
                </p>
                <p className="font-bold text-blue-600 mb-4">${product.price}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
