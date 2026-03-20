import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import PromoBanner from '../components/PromoBanner';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div className="flex flex-col gap-0 w-full">
            <Hero />
            <Products />
            <Services />
            <WhyChooseUs />
            <PromoBanner />
            <About />
            <Testimonials />
            <Contact />
        </div>
    );
};

export default Home;
