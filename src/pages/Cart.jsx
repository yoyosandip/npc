import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FiTrash2, FiMinus, FiPlus, FiArrowRight, FiShoppingBag } from 'react-icons/fi';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
    const navigate = useNavigate();

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen pt-28 pb-12 bg-slate-50 flex items-center justify-center">
                <div className="bg-white p-12 rounded-2xl shadow-sm text-center max-w-lg w-full">
                    <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FiShoppingBag className="text-slate-400" size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">Your cart is empty</h2>
                    <p className="text-slate-500 mb-8">Looks like you haven't added any products to your cart yet.</p>
                    <button
                        onClick={() => navigate('/products')}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                    >
                        Start Shopping
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-28 pb-12 bg-slate-50">
            <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
                <h1 className="text-3xl font-bold text-slate-800 mb-8 flex items-center gap-3">
                    <FiShoppingBag /> Shopping Cart
                </h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items */}
                    <div className="lg:w-2/3">
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                            {cartItems.map((item) => (
                                <div key={item.id} className="p-6 border-b border-slate-100 last:border-0 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                    <div className="w-24 h-24 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0">
                                        <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                                    </div>

                                    <div className="flex-grow">
                                        <Link to={`/product/${item.id}`} className="text-lg font-semibold text-slate-800 hover:text-blue-600 mb-1 block line-clamp-1">
                                            {item.name}
                                        </Link>
                                        <p className="text-sm text-slate-500 mb-2">{item.category}</p>
                                        <div className="text-lg font-bold text-blue-600">
                                            ${item.price.toFixed(2)}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                                        {/* Quantity Controls */}
                                        <div className="flex items-center border border-slate-200 rounded-lg">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="p-2 text-slate-500 hover:text-blue-600 hover:bg-slate-50 transition-colors rounded-l-lg"
                                            >
                                                <FiMinus size={16} />
                                            </button>
                                            <span className="w-12 text-center font-medium text-slate-700">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="p-2 text-slate-500 hover:text-blue-600 hover:bg-slate-50 transition-colors rounded-r-lg"
                                            >
                                                <FiPlus size={16} />
                                            </button>
                                        </div>

                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-full transition-colors"
                                            title="Remove item"
                                        >
                                            <FiTrash2 size={20} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:w-1/3">
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sticky top-28">
                            <h2 className="text-xl font-bold text-slate-800 mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-6 text-slate-600">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span className="font-semibold text-slate-800">${cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span className="text-green-600 font-medium">Free</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Tax</span>
                                    <span className="font-semibold text-slate-800">$0.00</span>
                                </div>
                            </div>

                            <div className="border-t border-slate-100 pt-4 mb-8 flex justify-between items-end">
                                <span className="text-slate-800 font-bold">Total</span>
                                <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                                    ${cartTotal.toFixed(2)}
                                </span>
                            </div>

                            <button
                                onClick={() => navigate('/checkout')}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                            >
                                Proceed to Checkout
                                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
