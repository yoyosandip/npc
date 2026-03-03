import React from 'react';

const ServiceCard = ({ service }) => {
    return (
        <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="w-16 h-16 rounded-2xl bg-sky-50 text-accent flex items-center justify-center text-3xl mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300 shadow-inner">
                {service.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">{service.title}</h3>
            <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed font-medium">
                {service.description}
            </p>
            <a href="#contact" className="inline-flex items-center text-accent font-bold hover:text-blue-700 transition-colors">
                Learn More
                <svg xmlns="http://www.w3.org/2000/00/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </a>
        </div>
    );
};

export default ServiceCard;
