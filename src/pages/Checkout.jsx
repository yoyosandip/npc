import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { FiCheckCircle, FiTruck, FiDollarSign } from 'react-icons/fi';

const Checkout = () => {
    const { cartItems, cartTotal, clearCart } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [isSuccess, setIsSuccess] = useState(false);

    const [address, setAddress] = useState({
        name: user ? user.name : '',
        email: user ? user.email : '',
        street: '',
        city: '',
        zipCode: ''
    });

    const handleInputChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        // Simulate order placement
        setTimeout(() => {
            clearCart();
            setIsSuccess(true);
        }, 1000);
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen pt-28 pb-12 flex items-center justify-center bg-slate-50">
                <div className="bg-white p-12 rounded-2xl shadow-lg text-center max-w-lg w-full mx-4 border-t-4 border-green-500">
                    <FiCheckCircle className="text-green-500 mx-auto mb-6" size={64} />
                    <h2 className="text-3xl font-bold text-slate-800 mb-4">Order Confirmed!</h2>
                    <p className="text-slate-600 mb-8 text-lg">
                        Thank you for your purchase. Your order has been placed successfully and will be shipped soon. Please keep your cash ready at delivery.
                    </p>
                    <button
                        onClick={() => navigate('/')}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-sm"
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        );
    }

    if (cartItems.length === 0) {
        navigate('/cart');
        return null;
    }

    return (
        <div className="min-h-screen pt-28 pb-12 bg-slate-50">
            <div className="container mx-auto px-4 max-w-5xl">
                <h1 className="text-3xl font-bold text-slate-800 mb-8">Checkout</h1>

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Form Section */}
                    <div className="lg:w-2/3">
                        <form onSubmit={handlePlaceOrder} className="space-y-8" id="checkout-form">
                            {/* Shipping Address */}
                            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                                <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                    <FiTruck className="text-blue-500" /> Shipping Information
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                                        <input
                                            type="text" required name="name"
                                            value={address.name} onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                                        <input
                                            type="email" required name="email"
                                            value={address.email} onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Street Address</label>
                                        <input
                                            type="text" required name="street"
                                            value={address.street} onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-slate-400"
                                            placeholder="123 Main St, Apartment 4B"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">City</label>
                                        <input
                                            type="text" required name="city"
                                            value={address.city} onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">ZIP / Postal Code</label>
                                        <input
                                            type="text" required name="zipCode"
                                            value={address.zipCode} onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Payment Method */}
                            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                                <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                    <FiDollarSign className="text-blue-500" /> Payment
                                </h2>
                                <div className="border border-blue-500 bg-blue-50 p-4 rounded-xl flex items-center gap-4 cursor-pointer">
                                    <input type="radio" checked readOnly className="h-5 w-5 text-blue-600 focus:ring-blue-500" />
                                    <div>
                                        <p className="font-semibold text-slate-800 text-lg">Cash on Delivery (COD)</p>
                                        <p className="text-slate-600 text-sm">Pay with cash upon delivery.</p>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:w-1/3">
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sticky top-28">
                            <h2 className="text-xl font-bold text-slate-800 mb-6">Order Summary</h2>

                            <div className="mb-6 space-y-4 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                                {cartItems.map(item => (
                                    <div key={item.id} className="flex gap-4">
                                        <img src={item.images[0]} alt={item.name} className="w-16 h-16 object-cover rounded-md bg-slate-100" />
                                        <div className="flex-1">
                                            <p className="text-sm font-semibold text-slate-800 line-clamp-2">{item.name}</p>
                                            <p className="text-xs text-slate-500 mt-1">Qty: {item.quantity}</p>
                                        </div>
                                        <p className="text-sm font-bold text-slate-800">${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-slate-100 pt-4 mb-6 space-y-3 text-slate-600 pb-4 border-b">
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

                            <div className="flex justify-between items-end mb-8">
                                <span className="text-slate-800 font-bold">Total</span>
                                <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                                    ${cartTotal.toFixed(2)}
                                </span>
                            </div>

                            <button
                                type="submit"
                                form="checkout-form"
                                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-md hover:shadow-lg"
                            >
                                Place Order
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Checkout;
