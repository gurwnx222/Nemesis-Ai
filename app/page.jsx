import React from 'react';

import Footer from '@/layout/Footer';
import Navbar from '@/layout/Navbar';

import Hero from './components/Hero';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
