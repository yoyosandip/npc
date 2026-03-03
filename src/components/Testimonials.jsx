import React from 'react';
import { FaStar } from 'react-icons/fa';

const testimonialsData = [
    {
        id: 1,
        name: 'Sarah Jenkins',
        role: 'Small Business Owner',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
        review: 'TechNova completely overhauled our office network and provided exceptional support. Their team is fast, reliable, and highly professional.'
    },
    {
        id: 2,
        name: 'Michael Rodriguez',
        role: 'Freelance Designer',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
        review: 'My primary work laptop crashed right before a deadline. TechNova recovered all my data and replaced the drive within 24 hours. Lifesavers!'
    },
    {
        id: 3,
        name: 'Emily Chen',
        role: 'Student',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
        review: 'Purchased a refurbished laptop for college from them. It looks and runs like brand new, and the price was unbeatable. Highly recommended.'
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">What Our Clients Say</h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-accent to-blue-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {testimonialsData.map(testimonial => (
                        <div key={testimonial.id} className="bg-white px-8 pt-12 pb-8 rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 relative mt-8 border border-slate-100">
                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover"
                                />
                            </div>
                            <div className="text-center">
                                <div className="flex justify-center text-yellow-400 mb-5">
                                    {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                                </div>
                                <p className="text-slate-600 italic mb-6 font-medium leading-relaxed font-serif">"{testimonial.review}"</p>
                                <div className="w-10 h-1 bg-slate-200 mx-auto mb-4"></div>
                                <h4 className="font-bold text-slate-900 text-lg">{testimonial.name}</h4>
                                <span className="text-sm text-accent font-bold uppercase tracking-wider">{testimonial.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
