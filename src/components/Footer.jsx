import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaChevronRight } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-900">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Col */}
                    <div className="col-span-1 lg:col-span-1">
                        <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-6 inline-block text-white">
                            TechNova <span className="text-accent text-3xl">.</span>
                        </a>
                        <p className="mb-6 text-slate-400 font-medium line-clamp-4">
                            Your trusted local technology partner providing computer sales, laptop repairs, custom builds, and IT support services for individuals and businesses.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                                <FaTwitter />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                                <FaInstagram />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white text-lg font-bold mb-6 relative inline-block">
                            Quick Links
                            <span className="absolute left-0 -bottom-2 w-1/2 h-0.5 bg-accent"></span>
                        </h4>
                        <ul className="space-y-4">
                            <li><a href="#home" className="hover:text-accent transition-colors flex items-center"><FaChevronRight className="text-xs mr-2 text-accent" /> Home</a></li>
                            <li><a href="#about" className="hover:text-accent transition-colors flex items-center"><FaChevronRight className="text-xs mr-2 text-accent" /> About Us</a></li>
                            <li><a href="#products" className="hover:text-accent transition-colors flex items-center"><FaChevronRight className="text-xs mr-2 text-accent" /> Shop Products</a></li>
                            <li><a href="#services" className="hover:text-accent transition-colors flex items-center"><FaChevronRight className="text-xs mr-2 text-accent" /> Our Services</a></li>
                            <li><a href="#contact" className="hover:text-accent transition-colors flex items-center"><FaChevronRight className="text-xs mr-2 text-accent" /> Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white text-lg font-bold mb-6 relative inline-block">
                            Our Services
                            <span className="absolute left-0 -bottom-2 w-1/2 h-0.5 bg-accent"></span>
                        </h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-accent transition-colors flex items-center"><FaChevronRight className="text-xs mr-2 text-accent" /> Laptop Repair</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors flex items-center"><FaChevronRight className="text-xs mr-2 text-accent" /> PC Troubleshooting</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors flex items-center"><FaChevronRight className="text-xs mr-2 text-accent" /> Data Recovery</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors flex items-center"><FaChevronRight className="text-xs mr-2 text-accent" /> Hardware Upgrades</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors flex items-center"><FaChevronRight className="text-xs mr-2 text-accent" /> Annual Maintenance</a></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h4 className="text-white text-lg font-bold mb-6 relative inline-block">
                            Contact Us
                            <span className="absolute left-0 -bottom-2 w-1/2 h-0.5 bg-accent"></span>
                        </h4>
                        <ul className="space-y-4 text-slate-400">
                            <li>Kalara, Sultanagar, Daspur, West Bengal, 721211</li>
                            <li><strong className="text-white block mt-2">Phone:</strong> +91 7602281245</li>
                            <li><strong className="text-white block mt-2">Email:</strong> sandip.bera@narayanpccare.in</li>
                        </ul>
                    </div>

                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-slate-800 text-center flex flex-col md:flex-row justify-between items-center text-sm font-medium">
                    <p>&copy; {new Date().getFullYear()} Narayan PC Care. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
