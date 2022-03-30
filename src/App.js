import React from 'react';
import Navbar from './components/Navbar';
import { Hero, PopularProducts } from './container';
import BestSellers from './container/BestSellers';
import MoreProducts from './container/MoreProducts';
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
    </>
  );
};

export default App;
