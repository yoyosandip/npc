import React from 'react';
import { FaUserTie, FaMicrochip, FaTags, FaShippingFast, FaHeadset } from 'react-icons/fa';

const features = [
    { id: 1, title: 'Certified Technicians', icon: <FaUserTie />, desc: 'Expert professionals handling your devices.' },
    { id: 2, title: 'Genuine Spare Parts', icon: <FaMicrochip />, desc: '100% authentic parts for reliable repairs.' },
    { id: 3, title: 'Affordable Pricing', icon: <FaTags />, desc: 'Competitive rates with no hidden costs.' },
    { id: 4, title: 'Fast Delivery', icon: <FaShippingFast />, desc: 'Quick turnaround time for repairs and sales.' },
    { id: 5, title: '24/7 Support', icon: <FaHeadset />, desc: 'Always available to assist you.' },
];

const WhyChooseUs = () => {
    return (
        <section className="py-24 bg-slate-100">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Why Choose Us</h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-accent to-blue-500 mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {features.map(feature => (
                        <div key={feature.id} className="bg-white p-8 rounded-2xl shadow-sm text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border border-slate-50">
                            <div className="w-20 h-20 mx-auto bg-blue-50 text-accent rounded-full flex items-center justify-center text-3xl mb-6 shadow-inner">
                                {feature.icon}
                            </div>
                            <h3 className="font-bold text-slate-900 mb-3 text-lg">{feature.title}</h3>
                            <p className="text-sm text-slate-600 font-medium">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
