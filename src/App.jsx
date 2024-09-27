

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Plants from './pages/Plants';
import Navbar from './components/Navbar';
import './App.css'
import Footer from './components/Footer';


// Import other components

function App() {
  return (
    <Router>
      <Navbar />
      
   
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/about" element={<AboutUs />} />
        <Route path="/plants" element={<Plants />} />
        Add routes for other pages */}
      </Routes>
    
      <Footer/>
    </Router>
  );
}

export default App;
