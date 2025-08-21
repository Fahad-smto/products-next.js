"use client";

import Link from "next/link";

const saleProducts = [
  {
    id: "1",
    name: "Gaming Laptop",
    originalPrice: 1500,
    discountedPrice: 1200,
    image: "https://images.unsplash.com/photo-1603783521980-1b02fc408cc3?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "2",
    name: "Wireless Headphones",
    originalPrice: 250,
    discountedPrice: 199,
    image: "https://images.unsplash.com/photo-1580894908361-3df1c5f57c18?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "3",
    name: "Smartphone Pro",
    originalPrice: 999,
    discountedPrice: 899,
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9e7?auto=format&fit=crop&w=600&q=80",
  },
];

export default function ExclusiveSale() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Exclusive Sale
        </h2>

        {/* Sale Products */}
        <div className="grid gap-8 md:grid-cols-3">
          {saleProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="mb-2">
                  <span className="line-through text-gray-500 mr-2">
                    ${product.originalPrice}
                  </span>
                  <span className="font-bold text-red-500">
                    ${product.discountedPrice}
                  </span>
                </p>
                {/* <Link
                  href={`/products/${product.id}`}
                  className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300"
                >
                  Grab Now
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
