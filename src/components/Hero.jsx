import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')` }}
            >
                <div className="absolute inset-0 bg-slate-900/75"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16 animate-fade-in">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                    Your Trusted Partner for <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-300">Computer & Laptop Solutions</span>
                </h1>
                <p className="text-lg md:text-2xl text-slate-200 mb-10 font-medium">
                    Sales &bull; Repairs &bull; Upgrades &bull; IT Support
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="#products" className="bg-gradient-to-r from-accent to-blue-500 hover:from-blue-500 hover:to-accent text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-accent/20 transition-all transform hover:-translate-y-1">
                        Shop Now
                    </a>
                    <a href="#services" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1">
                        Book a Service
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
