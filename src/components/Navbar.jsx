import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiShoppingCart, FiUser } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user } = useAuth();
    const { cartCount } = useCart();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20 || location.pathname !== '/');
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Shop', href: '/products' },
        { name: 'Services', href: '/#services' },
        { name: 'About', href: '/#about' },
    ];

    const isWhiteBg = isScrolled || location.pathname !== '/';

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isWhiteBg ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                        Narayan PC Care
                    </Link>

                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`font-medium hover:text-blue-500 transition-colors ${isWhiteBg ? 'text-slate-700' : 'text-slate-100'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        <Link to={user ? "/profile" : "/login"} className={`${isWhiteBg ? 'text-slate-700' : 'text-white'} hover:text-blue-500 flex items-center gap-1 font-medium`}>
                            <FiUser size={20} />
                            <span>{user ? user.name : "Login"}</span>
                        </Link>
                        <Link to="/cart" className={`${isWhiteBg ? 'text-slate-700' : 'text-white'} hover:text-blue-500 relative`}>
                            <FiShoppingCart size={22} />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center space-x-4">
                        <Link to="/cart" className={`${isWhiteBg ? 'text-slate-700' : 'text-slate-100'} relative`}>
                            <FiShoppingCart size={24} />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`${isWhiteBg ? 'text-slate-900' : 'text-slate-100'} focus:outline-none`}
                        >
                            {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 origin-top overflow-hidden ${isMobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0'
                    }`}
            >
                <div className="flex flex-col space-y-4 px-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="text-slate-700 font-medium text-lg border-b border-gray-100 pb-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to={user ? "/profile" : "/login"}
                        className="text-slate-700 font-medium text-lg border-b border-gray-100 pb-2 flex items-center gap-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <FiUser /> {user ? "Profile" : "Login / Register"}
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
