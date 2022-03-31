import React from 'react';
import Navbar from './components/Navbar';
import { Hero, PopularProducts, MoreProducts, BestSellers, Testimonials } from './container';

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
      </div>
      <PopularProducts />
      <MoreProducts />
      <BestSellers />
      <Testimonials />
    </>
  );
};

export default App;
