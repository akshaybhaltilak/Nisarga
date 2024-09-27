import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-r from-green-600 to-green-800 py-8 mt-10 text-white px-8"
      // style={{
      //   backgroundImage: 'url("https://media.istockphoto.com/id/931878550/photo/hammock-in-tropical-coconut-palm-grove.jpg?s=2048x2048&w=is&k=20&c=m1U2jaSaBzHYBsn2Yf2b7g1DFv-ZtSegy6THzO_q2ZQ=")', // Replace with the correct path to your background image
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      // }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Address Section */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Address</h3>
          <p>
            Kanheri sarap ,
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
            <a href="https://facebook.com" className="bg-green-500 p-3 rounded-full hover:bg-green-600">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="bg-green-500 p-3 rounded-full hover:bg-green-600">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" className="bg-green-500 p-3 rounded-full hover:bg-green-600">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-8 border-t border-gray-300 pt-4 text-sm flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/src/assets/logo.png" alt="Logo" className="h-8" /> {/* Add your logo path */}
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
        <a href="#top" className="bg-green-500 p-3 rounded-full text-white hover:bg-green-600">
          ⬆
        </a>
      </div>
    </footer>
  );
};

export default Footer;
