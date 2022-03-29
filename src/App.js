import React from 'react';
import Navbar from './components/Navbar';
import { Hero, PopularProducts } from './container';
const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
      </div>
      <PopularProducts />
    </>
  );
};

export default App;
