import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (login(email, password)) {
            navigate('/profile');
        }
    };

    return (
        <div className="min-h-screen flex bg-slate-50">
            {/* Left side Image/Branding */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-slate-900 items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-teal-500/90 mix-blend-multiply z-10" />
                <img
                    src="https://images.unsplash.com/photo-1593640495253-23196b27a87f?auto=format&fit=crop&q=80&w=1200"
                    alt="Login Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-20 text-center px-12 text-white">
                    <h1 className="text-5xl font-extrabold mb-6 tracking-tight">Welcome Back to <br />Narayan PC Care</h1>
                    <p className="text-xl text-blue-100 mb-8 max-w-lg mx-auto leading-relaxed">
                        Access your account to view orders, update your profile, and discover our latest tech deals.
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-blue-200">
                        <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                        <span className="w-2 h-2 rounded-full bg-blue-400/50"></span>
                        <span className="w-2 h-2 rounded-full bg-blue-400/50"></span>
                    </div>
                </div>
            </div>

            {/* Right side form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 xl:p-24 pt-28 lg:pt-8 bg-white relative">
                <div className="max-w-md w-full">
                    {/* Mobile Logo Fallback */}
                    <div className="lg:hidden text-center mb-10">
                        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                            Narayan PC Care
                        </h2>
                    </div>

                    <div className="text-center lg:text-left mb-10">
                        <h2 className="text-3xl font-bold text-slate-800 mb-3">Sign in to your account</h2>
                        <p className="text-slate-500">Enter your details to access your portal</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
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
                            <div className="flex justify-end pt-1">
                                <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">Forgot password?</a>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-slate-900 hover:bg-black text-white font-bold py-3.5 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 group mt-4"
                        >
                            <span>Sign In</span>
                            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <p className="mt-8 text-center text-slate-600">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-blue-600 font-bold hover:text-blue-700 hover:underline">
                            Create an account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Login;
