import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // For menu icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle for mobile menu

  return (
    <nav className="bg-gradient-to-r from-green-600 to-green-800 p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with RGB Effect */}
        <h1 className="text-2xl font-bold text-white hover:text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-green-500 to-blue-500 transition duration-300 ease-in-out">
          Nisarga
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link className="text-white text-lg font-medium hover:text-green-200 transition-all duration-300 ease-in-out" to="/">Home</Link>
          <Link className="text-white text-lg font-medium hover:text-green-200 transition-all duration-300 ease-in-out" to="/about">About Us</Link>
          <Link className="text-white text-lg font-medium hover:text-green-200 transition-all duration-300 ease-in-out" to="/plants">Plants</Link>
          <Link className="text-white text-lg font-medium hover:text-green-200 transition-all duration-300 ease-in-out" to="/services">Services</Link>
          <Link className="text-white text-lg font-medium hover:text-green-200 transition-all duration-300 ease-in-out" to="/gallery">Gallery</Link>
          <Link className="text-white text-lg font-medium hover:text-green-200 transition-all duration-300 ease-in-out" to="/contact">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-green-600 to-green-800 space-y-4 p-6 shadow-lg transition-all duration-300">
          <Link className="block text-white text-lg font-medium hover:text-green-200 transition-all duration-300" to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link className="block text-white text-lg font-medium hover:text-green-200 transition-all duration-300" to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link className="block text-white text-lg font-medium hover:text-green-200 transition-all duration-300" to="/plants" onClick={() => setIsOpen(false)}>Plants</Link>
          <Link className="block text-white text-lg font-medium hover:text-green-200 transition-all duration-300" to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link className="block text-white text-lg font-medium hover:text-green-200 transition-all duration-300" to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link className="block text-white text-lg font-medium hover:text-green-200 transition-all duration-300" to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
