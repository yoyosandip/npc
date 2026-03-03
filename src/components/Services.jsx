import React from 'react';
import ServiceCard from './ServiceCard';
import { FaLaptopMedical, FaTools, FaShieldVirus, FaMemory, FaHdd, FaFileContract } from 'react-icons/fa';

const servicesData = [
    {
        id: 1,
        title: 'Laptop Repair',
        description: 'Expert diagnostics and repair for all laptop brands. We fix broken screens, battery issues, keyboard replacements, and motherboard repairs.',
        icon: <FaLaptopMedical />
    },
    {
        id: 2,
        title: 'PC Troubleshooting',
        description: 'System crashing or running slow? Our technicians can diagnose and resolve complex software and hardware issues efficiently.',
        icon: <FaTools />
    },
    {
        id: 3,
        title: 'Virus Removal',
        description: 'Comprehensive malware, spyware, and virus removal. We secure your system and restore its performance without data loss.',
        icon: <FaShieldVirus />
    },
    {
        id: 4,
        title: 'Hardware Upgrade',
        description: 'Boost your computer\'s performance with RAM, SSD, and graphics card upgrades tailored to your specific needs and budget.',
        icon: <FaMemory />
    },
    {
        id: 5,
        title: 'Data Recovery',
        description: 'Accidentally deleted files or failing hard drive? We offer professional data recovery services to retrieve your valuable information.',
        icon: <FaHdd />
    },
    {
        id: 6,
        title: 'Annual Maintenance',
        description: 'Proactive IT support for businesses. Keep your systems running smoothly with our comprehensive Annual Maintenance Contracts (AMC).',
        icon: <FaFileContract />
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Our Services
                    </h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-accent to-blue-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-slate-600 text-lg font-medium">
                        Professional IT solutions for individuals and businesses. Our certified technicians deliver fast, reliable, and affordable services.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map(service => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
