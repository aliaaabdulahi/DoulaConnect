import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import FeaturedDoula from './components/FeaturedDoula';
import BestDoulas from './components/BestDoulas';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <SearchBar />
      <Categories />
      <FeaturedDoula />
      <BestDoulas />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
