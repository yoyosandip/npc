import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { dummyProducts } from '../data/dummyProducts';
import { useCart } from '../context/CartContext';
import { FiChevronLeft, FiChevronRight, FiCheck } from 'react-icons/fi';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const product = dummyProducts.find(p => p.id === parseInt(id));
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!product) {
        return (
            <div className="min-h-screen pt-24 text-center">
                <h2 className="text-2xl font-bold text-slate-700">Product not found.</h2>
                <button onClick={() => navigate('/products')} className="mt-4 text-blue-600 hover:underline">
                    Go back to Products
                </button>
            </div>
        );
    }

    const handleNextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    };

    const handleAddToCart = () => {
        addToCart(product);
        // Could show a toast notification here
    };

    const handleBuyNow = () => {
        addToCart(product);
        navigate('/checkout');
    };

    return (
        <div className="min-h-screen pt-28 pb-12 bg-slate-50">
            <div className="container mx-auto px-4 max-w-6xl">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-8 flex items-center text-slate-500 hover:text-blue-600 transition-colors font-medium"
                >
                    <FiChevronLeft size={20} className="mr-1" /> Back
                </button>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col md:flex-row">

                    {/* Image Slider */}
                    <div className="md:w-1/2 relative bg-slate-100 min-h-[400px] flex items-center justify-center">
                        <img
                            src={product.images[currentImageIndex]}
                            alt={product.name}
                            className="w-full h-full object-cover max-h-[600px]"
                        />
                        {product.images.length > 1 && (
                            <>
                                <button
                                    onClick={handlePrevImage}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2 rounded-full shadow-md backdrop-blur-sm transition-all"
                                >
                                    <FiChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={handleNextImage}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2 rounded-full shadow-md backdrop-blur-sm transition-all"
                                >
                                    <FiChevronRight size={24} />
                                </button>

                                {/* Dots indicator */}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                    {product.images.map((_, idx) => (
                                        <div
                                            key={idx}
                                            className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-blue-600 w-4' : 'bg-white/70'}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold text-blue-600 shadow-sm">
                            {product.category}
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="md:w-1/2 p-8 lg:p-12 flex flex-col">
                        <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">{product.name}</h1>
                        <div className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500 mb-6">
                            ${product.price.toFixed(2)}
                        </div>

                        <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                            {product.description}
                        </p>

                        <div className="mb-10">
                            <h3 className="text-xl font-bold text-slate-800 mb-4">Key Features</h3>
                            <ul className="space-y-3">
                                {product.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start text-slate-700">
                                        <FiCheck className="text-teal-500 mt-1 mr-3 flex-shrink-0" size={20} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Actions */}
                        <div className="mt-auto pt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={handleAddToCart}
                                className="flex-1 border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white font-bold py-4 rounded-xl transition-colors text-center shadow-sm"
                            >
                                Add to Cart
                            </button>
                            <button
                                onClick={handleBuyNow}
                                className="flex-1 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-bold py-4 rounded-xl transition-colors shadow-md transform hover:-translate-y-0.5"
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
