import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Get In Touch</h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-accent to-blue-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-slate-600 text-lg font-medium">Have a question or need support? Contact us today.</p>
                </div>

                <div className="flex flex-col lg:flex-row shadow-2xl rounded-3xl overflow-hidden border border-slate-100">

                    {/* Contact Info (Left) */}
                    <div className="w-full lg:w-2/5 bg-slate-900 p-10 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full filter blur-3xl opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-10 text-white">Contact Information</h3>

                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-6 shrink-0">
                                        <FaMapMarkerAlt className="text-accent text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Our Location</h4>
                                        <p className="text-slate-300">Kalara, Sultanagar<br />Daspur, West Bengal, 721211</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-6 shrink-0">
                                        <FaPhoneAlt className="text-accent text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Phone Number</h4>
                                        <p className="text-slate-300">+91 7602281245</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-6 shrink-0">
                                        <FaEnvelope className="text-accent text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Email Address</h4>
                                        <p className="text-slate-300">sandip.bera@narayanpccare.in<br />support@narayanpccare.in</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-6 shrink-0">
                                        <FaClock className="text-accent text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Working Hours</h4>
                                        <p className="text-slate-300">Mon - Sun: 9:00 AM - 8:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 relative z-10">
                            <h4 className="font-bold mb-4">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                                    <FaFacebookF />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                                    <FaTwitter />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form & Map (Right) */}
                    <div className="w-full lg:w-3/5 bg-slate-50 p-10 lg:p-12">
                        <form className="mb-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-slate-700 font-bold mb-2" htmlFor="name">Your Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow bg-white" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-slate-700 font-bold mb-2" htmlFor="email">Email Address</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow bg-white" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="block text-slate-700 font-bold mb-2" htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow bg-white" placeholder="+1 (555) 000-0000" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-slate-700 font-bold mb-2" htmlFor="message">Your Message</label>
                                <textarea id="message" rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow bg-white resize-none" placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="button" className="w-full bg-gradient-to-r from-accent to-dark-blue hover:from-blue-600 hover:to-accent bg-slate-900 text-white font-bold py-4 px-6 rounded-lg transition-all shadow-md transform hover:-translate-y-1">
                                Send Message
                            </button>
                        </form>

                        <div className="h-64 rounded-xl overflow-hidden shadow-inner bg-slate-200 relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d100000!2d-122.399!3d37.793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ3JzM0LjgiTiAxMjLCsDIzJzU2LjQiVw!5e0!3m2!1sen!2sus!4v1620864321683!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Map Location"
                                className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
