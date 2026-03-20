import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FiMail, FiLock, FiUser, FiArrowRight } from 'react-icons/fi';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (register(name, email, password)) {
            navigate('/profile');
        }
    };

    return (
        <div className="min-h-screen flex bg-slate-50 flex-row-reverse">
            {/* Right side Image/Branding */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-slate-900 items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-bl from-blue-600/90 to-teal-500/90 mix-blend-multiply z-10" />
                <img
                    src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=1200"
                    alt="Register Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-20 text-center px-12 text-white">
                    <h1 className="text-5xl font-extrabold mb-6 tracking-tight">Join Our Community</h1>
                    <p className="text-xl text-blue-100 mb-8 max-w-lg mx-auto leading-relaxed">
                        Create an account to track your orders, save your wishlist, and experience a faster checkout.
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-blue-200">
                        <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                        <span className="w-2 h-2 rounded-full bg-blue-400/50"></span>
                        <span className="w-2 h-2 rounded-full bg-blue-400/50"></span>
                    </div>
                </div>
            </div>

            {/* Left side form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 xl:p-24 pt-28 lg:pt-8 bg-white relative shadow-2xl z-10">
                <div className="max-w-md w-full">
                    {/* Mobile Logo Fallback */}
                    <div className="lg:hidden text-center mb-10">
                        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                            Narayan PC Care
                        </h2>
                    </div>

                    <div className="text-center lg:text-left mb-10">
                        <h2 className="text-3xl font-bold text-slate-800 mb-3">Create an account</h2>
                        <p className="text-slate-500">Start your journey with us today</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-1">
                            <label className="text-sm font-semibold text-slate-700">Full Name</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <FiUser className="h-5 w-5 text-slate-400" />
                                </div>
                                <input
                                    type="text"
                                    required
                                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                                    placeholder="John Doe"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-semibold text-slate-700">Email Address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <FiMail className="h-5 w-5 text-slate-400" />
                                </div>
                                <input
                                    type="email"
                                    required
                                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-semibold text-slate-700">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <FiLock className="h-5 w-5 text-slate-400" />
                                </div>
                                <input
                                    type="password"
                                    required
                                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-slate-900 hover:bg-black text-white font-bold py-3.5 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 group mt-4"
                        >
                            <span>Get Started</span>
                            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <p className="mt-8 text-center text-slate-600">
                        Already have an account?{' '}
                        <Link to="/login" className="text-blue-600 font-bold hover:text-blue-700 hover:underline">
                            Sign In here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Register;
