import React from 'react';
import Navbar from './components/Navbar';
import { Hero, PopularProducts, MoreProducts, BestSellers, Testimonials, NewsLetter } from './container';

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
      <NewsLetter />
    </>
  );
};

export default App;
