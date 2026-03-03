import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Products', href: '#products' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                        Narayan PC Care
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`font-medium hover:text-accent transition-colors ${isScrolled ? 'text-slate-700' : 'text-slate-100'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="tel:+1234567890"
                            className="bg-gradient-to-r from-accent to-blue-500 hover:from-blue-500 hover:to-accent text-white px-6 py-2 rounded-full font-semibold shadow-lg transition-all transform hover:-translate-y-0.5"
                        >
                            Call Now
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`${isScrolled ? 'text-slate-900' : 'text-slate-100'} focus:outline-none`}
                        >
                            {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 origin-top overflow-hidden ${isMobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0'
                    }`}
            >
                <div className="flex flex-col space-y-4 px-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-slate-700 font-medium text-lg border-b border-gray-100 pb-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="tel:+917602281245"
                        className="inline-block text-center bg-accent text-white px-6 py-3 rounded-md font-semibold mt-2"
                    >
                        Call Now: 7602281245
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
