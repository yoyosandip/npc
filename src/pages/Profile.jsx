import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FiUser, FiPackage, FiMapPin, FiSettings, FiLogOut, FiEdit2, FiCheckCircle } from 'react-icons/fi';

const Profile = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('dashboard');

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    if (!user) return null;

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: <FiUser className="text-lg" /> },
        { id: 'orders', label: 'My Orders', icon: <FiPackage className="text-lg" /> },
        { id: 'address', label: 'Manage Addresses', icon: <FiMapPin className="text-lg" /> },
        { id: 'settings', label: 'Account Settings', icon: <FiSettings className="text-lg" /> },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-slate-800 border-b border-slate-100 pb-4">Welcome back, {user.name}!</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                                <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center text-white mb-4">
                                    <FiPackage size={24} />
                                </div>
                                <h3 className="text-3xl font-bold text-slate-800">0</h3>
                                <p className="text-slate-600 mt-1">Total Orders</p>
                            </div>
                            <div className="bg-teal-50 rounded-2xl p-6 border border-teal-100">
                                <div className="bg-teal-500 w-12 h-12 rounded-full flex items-center justify-center text-white mb-4">
                                    <FiMapPin size={24} />
                                </div>
                                <h3 className="text-3xl font-bold text-slate-800">1</h3>
                                <p className="text-slate-600 mt-1">Saved Addresses</p>
                            </div>
                        </div>
                        <div className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-100 mt-8">
                            <h3 className="text-xl font-bold text-slate-800 mb-2">Ready to explore?</h3>
                            <p className="text-slate-500 mb-6">Check out our latest products and deals.</p>
                            <button
                                onClick={() => navigate('/products')}
                                className="bg-slate-900 hover:bg-black text-white px-6 py-3 rounded-xl font-medium transition-colors"
                            >
                                Go to Shop
                            </button>
                        </div>
                    </div>
                );
            case 'orders':
                return (
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 border-b border-slate-100 pb-4 mb-6">Order History</h2>
                        {/* Example Empty State */}
                        <div className="bg-slate-50 rounded-2xl p-12 text-center border-2 border-dashed border-slate-200">
                            <FiPackage className="mx-auto text-slate-300 mb-4" size={48} />
                            <h3 className="text-xl font-bold text-slate-700 mb-2">No orders found</h3>
                            <p className="text-slate-500">You haven't placed any orders yet.</p>
                            <button
                                onClick={() => navigate('/products')}
                                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                            >
                                Start Shopping
                            </button>
                        </div>

                        {/* Example mock order item to show how it looks when there are orders */}
                        <div className="mt-8">
                            <h3 className="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-4">Example Order layout</h3>
                            <div className="border border-slate-100 rounded-xl p-6 bg-white shadow-sm flex flex-col md:flex-row justify-between md:items-center gap-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-bold text-slate-800">#ORD-98231</span>
                                        <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-bold flex items-center gap-1">
                                            <FiCheckCircle /> Delivered
                                        </span>
                                    </div>
                                    <p className="text-sm text-slate-500">Placed on Oct 24, 2023</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xl font-bold text-slate-800">$1,349.99</p>
                                    <button className="text-blue-600 text-sm font-semibold hover:underline mt-1">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'address':
                return (
                    <div>
                        <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-6">
                            <h2 className="text-2xl font-bold text-slate-800">Manage Addresses</h2>
                            <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-black transition-colors">
                                Add New
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="border border-blue-200 bg-blue-50/50 rounded-xl p-6 relative">
                                <span className="absolute top-4 right-4 bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">Primary</span>
                                <h4 className="font-bold text-slate-800 mb-1">{user.name}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                    123 Tech Avenue, Suite 100<br />
                                    Kolkata, West Bengal, 700001<br />
                                    India
                                </p>
                                <div className="flex gap-3">
                                    <button className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:underline">
                                        <FiEdit2 size={14} /> Edit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'settings':
                return (
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 border-b border-slate-100 pb-4 mb-6">Account Settings</h2>
                        <div className="max-w-xl space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    defaultValue={user.name}
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    defaultValue={user.email}
                                    disabled
                                    className="w-full px-4 py-2 border border-slate-300 rounded-lg outline-none bg-slate-50 text-slate-500"
                                />
                                <p className="text-xs text-slate-500 mt-1">Email address cannot be changed.</p>
                            </div>
                            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                                Save Changes
                            </button>

                            <hr className="border-slate-100 my-8" />

                            <div>
                                <h3 className="text-lg font-bold text-slate-800 mb-4">Change Password</h3>
                                <div className="space-y-4">
                                    <input type="password" placeholder="Current Password" className="w-full px-4 py-2 border border-slate-300 rounded-lg outline-none focus:border-blue-500" />
                                    <input type="password" placeholder="New Password" className="w-full px-4 py-2 border border-slate-300 rounded-lg outline-none focus:border-blue-500" />
                                    <button className="bg-slate-900 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-black transition-colors">
                                        Update Password
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen pt-28 pb-12 bg-slate-50">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col md:flex-row gap-8">

                    {/* Sidebar */}
                    <div className="w-full md:w-1/4">
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden sticky top-28">
                            <div className="p-6 bg-slate-900 text-white text-center">
                                <div className="w-20 h-20 bg-gradient-to-tr from-blue-500 to-teal-400 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl font-bold shadow-lg">
                                    {user.name.charAt(0).toUpperCase()}
                                </div>
                                <h3 className="font-bold text-lg">{user.name}</h3>
                                <p className="text-slate-400 text-sm truncate">{user.email}</p>
                            </div>
                            <div className="p-3 space-y-1">
                                {menuItems.map(item => (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveTab(item.id)}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === item.id
                                                ? 'bg-blue-50 text-blue-700'
                                                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                            }`}
                                    >
                                        {item.icon} {item.label}
                                    </button>
                                ))}
                                <div className="pt-3 pb-1 mt-3 border-t border-slate-100 rounded-none">
                                    <button
                                        onClick={handleLogout}
                                        className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl font-medium transition-colors"
                                    >
                                        <FiLogOut className="text-lg" /> Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="w-full md:w-3/4">
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 min-h-[600px]">
                            {renderContent()}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default Profile;
