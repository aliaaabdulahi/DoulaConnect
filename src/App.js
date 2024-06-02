import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import FeaturedDoula from './components/FeaturedDoula';
import BestDoulas from './components/BestDoulas';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <React.Fragment>
              <Hero />
              <SearchBar />
              <Categories />
              <FeaturedDoula />
              <BestDoulas />
              <Newsletter />
            </React.Fragment>
          } />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
