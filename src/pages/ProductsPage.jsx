import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiFilter } from 'react-icons/fi';
import { dummyProducts, getCategories } from '../data/dummyProducts';

const ProductsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = getCategories();

    const filteredProducts = dummyProducts.filter(product => {
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen pt-24 pb-12 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-slate-800 mb-8 text-center">Our Products</h1>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar / Filters */}
                    <div className="w-full md:w-1/4">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 sticky top-28">
                            <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                                <FiFilter /> Filters
                            </h2>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-slate-700 mb-2">Search</label>
                                <div className="relative">
                                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                                    <input
                                        type="text"
                                        placeholder="Search products..."
                                        className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Categories</label>
                                <div className="space-y-2">
                                    {categories.map(category => (
                                        <label key={category} className="flex items-center gap-2 cursor-pointer group">
                                            <input
                                                type="radio"
                                                name="category"
                                                value={category}
                                                checked={selectedCategory === category}
                                                onChange={(e) => setSelectedCategory(e.target.value)}
                                                className="text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer"
                                            />
                                            <span className="text-slate-600 group-hover:text-blue-600 transition-colors">
                                                {category}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="w-full md:w-3/4">
                        {filteredProducts.length === 0 ? (
                            <div className="bg-white p-12 text-center rounded-xl shadow-sm border border-slate-100">
                                <h3 className="text-xl font-semibold text-slate-700">No products found.</h3>
                                <p className="text-slate-500 mt-2">Try adjusting your filters or search term.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredProducts.map(product => (
                                    <Link to={`/product/${product.id}`} key={product.id} className="group">
                                        <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden h-full flex flex-col">
                                            <div className="aspect-video overflow-hidden bg-slate-100 relative">
                                                <img
                                                    src={product.images[0]}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-600 shadow-sm">
                                                    {product.category}
                                                </div>
                                            </div>
                                            <div className="p-5 flex-grow flex flex-col">
                                                <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                                    {product.name}
                                                </h3>
                                                <div className="mt-auto pt-4 flex justify-between items-center border-t border-slate-100">
                                                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                                                        ${product.price.toFixed(2)}
                                                    </span>
                                                    <button className="text-sm bg-slate-900 text-white px-4 py-2 rounded-lg font-medium group-hover:bg-blue-600 transition-colors">
                                                        View Details
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
