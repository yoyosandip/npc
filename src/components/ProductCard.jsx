import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-slate-100 flex flex-col h-full group">
            <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-100">
                {product.discountBadge && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
                        {product.discountBadge}
                    </div>
                )}
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-800 mb-2 truncate" title={product.name}>{product.name}</h3>
                <p className="text-sm text-slate-500 mb-4 flex-grow line-clamp-2">{product.description}</p>

                <div className="flex items-end justify-between mb-5">
                    <div className="flex flex-col">
                        <span className="text-sm text-slate-400 line-through mb-1">{product.originalPrice}</span>
                        <span className="text-2xl font-extrabold text-slate-900">{product.discountPrice}</span>
                    </div>
                </div>

                <button className="w-full bg-slate-900 hover:bg-accent text-white font-semibold py-3 rounded-xl transition-colors mt-auto shadow-md">
                    Call Now
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
