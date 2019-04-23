import React from 'react';
import Nav from './Nav';
import Hero from './Hero';
import Filters from './Filters';
import './App.css';

function Head() {
  return (
    <div className="Head">
      <Nav />
      <Hero />
      <Filters />
    </div>
  );
}

export default Head;
