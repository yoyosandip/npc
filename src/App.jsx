import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import PromoBanner from './components/PromoBanner';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans bg-background text-slate-800 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Products />
      <Services />
      <WhyChooseUs />
      <PromoBanner />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
