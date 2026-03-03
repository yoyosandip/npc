import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <div className="w-full lg:w-1/2 relative group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent to-blue-600 rounded-3xl transform -translate-x-4 translate-y-4 group-hover:-translate-x-6 group-hover:translate-y-6 transition-transform duration-500 opacity-60"></div>
                        <img
                            src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Computer Repair Workspace"
                            className="relative z-10 rounded-3xl shadow-2xl w-full object-cover h-[500px] border-4 border-white"
                        />
                    </div>

                    <div className="w-full lg:w-1/2">
                        <h2 className="text-base text-accent font-bold tracking-wider uppercase mb-2">About TechNova</h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                            Your Reliable IT Setup & Repair Partner
                        </h3>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                            Narayan PC Care is a trusted local technology partner providing computer sales, laptop repairs, custom builds, and IT support services for individuals and businesses. We are committed to delivering top-notch solutions with a focus on integrity and customer satisfaction.
                        </p>

                        <ul className="space-y-5 mb-10">
                            <li className="flex items-center text-slate-800 text-lg font-bold">
                                <FaCheckCircle className="text-accent mr-4 text-2xl" />
                                10+ Years Experience
                            </li>
                            <li className="flex items-center text-slate-800 text-lg font-bold">
                                <FaCheckCircle className="text-accent mr-4 text-2xl" />
                                1000+ Happy Customers
                            </li>
                            <li className="flex items-center text-slate-800 text-lg font-bold">
                                <FaCheckCircle className="text-accent mr-4 text-2xl" />
                                Professional Service Guarantee
                            </li>
                        </ul>

                        <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-10 rounded-full transition-colors shadow-lg shadow-slate-900/20">
                            Discover More
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
