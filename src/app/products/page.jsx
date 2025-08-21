import React from 'react';
import products from '../../../public/products.json';

const ProductsPage = () => {
    return (
        <div className="max-w-7xl mx-auto p-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                            {product.name}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">
                            {product.description.length > 60
                                ? product.description.slice(0, 60) + "..."
                                : product.description}
                        </p>
                        <p className="text-blue-600 font-bold mb-3">${product.price}</p>
                        <a
                            href={`/products/${product.id}`}
                            className="inline-block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            View Details
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductsPage;