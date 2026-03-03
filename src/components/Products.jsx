import React from 'react';
import ProductCard from './ProductCard';

const productsData = [
    {
        id: 1,
        name: 'Dell Inspiron 15',
        description: '15.6" FHD Display, AMD Ryzen 5, 8GB RAM, 512GB NVMe SSD.',
        originalPrice: '$749.99',
        discountPrice: '$629.99',
        discountBadge: '16% OFF',
        image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 2,
        name: 'HP Pavilion Gaming',
        description: '144Hz IPS, AMD Ryzen 7, NVIDIA RTX 3050, 16GB RAM, 512GB SSD.',
        originalPrice: '$1,099.99',
        discountPrice: '$899.99',
        discountBadge: '18% OFF',
        image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 3,
        name: 'Lenovo ThinkPad X1',
        description: '14" Carbon Fiber, Intel Core i7, 16GB RAM, 1TB SSD, Windows 11 Pro.',
        originalPrice: '$1,899.99',
        discountPrice: '$1,599.99',
        discountBadge: '15% OFF',
        image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 4,
        name: 'Custom Gaming PC',
        description: 'Intel i9-13900K, RTX 4080 16GB, 32GB DDR5, 2TB Gen4 SSD, Liquid Cooling.',
        originalPrice: '$2,999.99',
        discountPrice: '$2,699.99',
        discountBadge: '10% OFF',
        image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 5,
        name: '1TB NVMe SSD',
        description: 'PCIe Gen4 M.2 2280 Internal Solid State Drive. Blazing fast speeds.',
        originalPrice: '$129.99',
        discountPrice: '$99.99',
        discountBadge: '23% OFF',
        image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e265c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 6,
        name: '16GB DDR4 RAM',
        description: '3200MHz Desktop Memory Kit (2 x 8GB), RGB Lighting.',
        originalPrice: '$89.99',
        discountPrice: '$69.99',
        discountBadge: '22% OFF',
        image: 'https://images.unsplash.com/photo-1541028622396-0e1cb3086eb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 7,
        name: '24” LED Monitor',
        description: '1080p FHD, 75Hz Refresh Rate, FreeSync, Ultra-Thin Bezel.',
        originalPrice: '$199.99',
        discountPrice: '$149.99',
        discountBadge: '25% OFF',
        image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 8,
        name: 'Wireless Keyboard & Mouse',
        description: 'Ergonomic Combo, Multi-device connectivity, Long battery life.',
        originalPrice: '$79.99',
        discountPrice: '$59.99',
        discountBadge: '25% OFF',
        image: 'https://images.unsplash.com/photo-1584727638096-042c45049ebe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
];

const Products = () => {
    return (
        <section id="products" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Latest Products & Deals
                    </h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-accent to-blue-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-slate-600 text-lg">
                        Discover top-tier laptops, high-performance components, and essential accessories at unbeatable prices. Upgrade your tech today.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {productsData.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold py-3 px-10 rounded-full transition-all group inline-flex items-center">
                        View All Products
                        <svg xmlns="http://www.w3.org/2000/00/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Products;
