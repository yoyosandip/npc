import React from 'react';

const PromoBanner = () => {
    return (
        <section className="relative py-28 flex items-center justify-center bg-fixed bg-center bg-cover"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1593640495253-23196b27a87f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')` }}>
            <div className="absolute inset-0 bg-accent/90 mix-blend-multiply z-0"></div>
            <div className="absolute inset-0 bg-slate-900/60 z-0"></div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                    Get up to <span className="text-yellow-400">25% Discount</span> on Selected Laptops!
                </h2>
                <p className="text-xl text-slate-200 mb-10 font-medium tracking-wide">Limited time offer. Upgrade your setup today and save big.</p>
                <button className="bg-white text-slate-900 hover:bg-slate-100 hover:text-accent px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                    Explore Offers
                </button>
            </div>
        </section>
    );
};

export default PromoBanner;
