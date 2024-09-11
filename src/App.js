import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
