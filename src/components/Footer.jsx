import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-r from-white via-green-100 to-green-500 py-8 mt-10 text-gray-800 px-8"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Address Section */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Address</h3>
          <p>
            Kanheri Sarap,
            <br />
            Tal. Barshitakali, Dist. Akola, Maharashtra.
          </p>
        </div>

        {/* Phone Section */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Phone</h3>
          <p>+91 8308426082 / 8983457789</p>
        </div>

        {/* Email Section */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Email</h3>
          <p>nisarg.nursery@gmail.com</p>
        </div>

        {/* Social Section */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Social</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://facebook.com" className="bg-green-400 p-3 rounded-full hover:bg-green-500 transition duration-300">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="bg-green-400 p-3 rounded-full hover:bg-green-500 transition duration-300">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" className="bg-green-400 p-3 rounded-full hover:bg-green-500 transition duration-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-8 border-t border-gray-300 pt-4 text-sm flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/src/assets/logo.png" alt="Logo" className="h-8" />
          <p>All Rights Reserved by Nisarg Nursery.</p>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Legal Disclaimer</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </div>

      {/* Scroll to top button */}
      <div className="fixed bottom-8 right-8">
        <a href="#top" className="bg-green-400 p-3 rounded-full text-white hover:bg-green-500 transition duration-300">
          ⬆
        </a>
      </div>
    </footer>
  );
};

export default Footer;
