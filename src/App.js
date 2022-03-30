import React from 'react';
import Navbar from './components/Navbar';
import { Hero, PopularProducts } from './container';
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
    </>
  );
};

export default App;
