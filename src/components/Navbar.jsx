import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; 
import { motion } from 'framer-motion'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle for mobile menu

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className=" bg-white p-4 shadow-lg w-full fixed top-0 left-0 z-50"
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo with animated effect */}
        <motion.img
          src="data:image/png;base64,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"
          alt="logo"
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="h-14 w-14 md:h-18 md:w-18 rounded-full shadow-md hover:shadow-xl"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link className="text-black text-md font-semibold hover:text-green-700 transition duration-300" to="/#home" smooth>
            Home
          </Link>
          <Link className="text-black text-md font-semibold hover:text-green-700 transition duration-300" to="/#aboutus" smooth>
            About Us
          </Link>
          <Link className="text-black text-md font-semibold hover:text-green-700 transition duration-300" to="/#plants" smooth>
            Plants
          </Link>
          <Link className="text-black text-md font-semibold hover:text-green-700 transition duration-300" to="/#services" smooth>
            Services
          </Link>
          <Link className="text-black text-md font-semibold hover:text-green-700 transition duration-300" to="/#gallery" smooth>
            Gallery
          </Link>
          <Link className="text-black text-md font-semibold hover:text-green-700 transition duration-300" to="/#contact" smooth>
            Contact
          </Link>
          {/* Call to Action Button */}
          <Link
            className="bg-green-600 text-gray-800 px-5 py-2 rounded-full font-semibold hover:bg-green-900 transition duration-300 shadow-lg"
            to="/book"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
            {isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-white p-6 shadow-lg rounded-lg space-y-4 absolute top-16 left-0 w-full"
        >
          <Link className="block text-black text-md font-semibold hover:text-green-700 transition duration-300" to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link className="block text-black text-md font-semibold hover:text-green-700 transition duration-300" to="/about" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link className="block text-black text-md font-semibold hover:text-green-700 transition duration-300" to="/plants" onClick={() => setIsOpen(false)}>
            Plants
          </Link>
          <Link className="block text-black text-md font-semibold hover:text-green-700 transition duration-300" to="/services" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link className="block text-black text-md font-semibold hover:text-green-700 transition duration-300" to="/gallery" onClick={() => setIsOpen(false)}>
            Gallery
          </Link>
          <Link className="block text-black text-md font-semibold hover:text-green-700 transition duration-300" to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Link
            className="bg-green-600 text-gray-800 px-5 py-2 block text-center rounded-full font-semibold hover:bg-green-800 transition duration-300 shadow-lg"
            to="/book"
            onClick={() => setIsOpen(false)}
          >
            Book Now
          </Link>
        </motion.div>
        
      )}
    </motion.nav>

  );
};

export default Navbar;