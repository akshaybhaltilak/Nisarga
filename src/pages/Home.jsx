import React from 'react';
import About from './AboutUs';
import PlantsSection from './Plants';

const Home = () => {
  const images = [
    {
      src: "https://plus.unsplash.com/premium_photo-1664033881697-b414c9ce1479?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Indoor Plant",
      title: "Indoor Plant"
    },
    {
      src: "https://images.unsplash.com/photo-1715679364566-ee5792f512a5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Outdoor Plant",
      title: "Outdoor Plant"
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1723802454064-03aab6a38d51?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Succulent Plant",
      title: "Succulent Plant"
    },
    {
      src: "https://images.unsplash.com/photo-1523437237164-d442d57cc3c9?q=80&w=1903&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Flowering Plant",
      title: "Flowering Plant"
    },
  ];

  return (
    <>
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center pt-24 mt-10 md:bg-[url('https://media.istockphoto.com/id/609821752/photo/gardeners-working-in-a-greenhouse.jpg?s=612x612&w=0&k=20&c=pJgCp6PrWgGrhnYOblGMy2I_o3PNwg4w9LCUig0pA6A=')] bg-green-100"
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-4xl mx-4 text-center">
        {/* Heading with responsive text size */}
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 leading-tight">
          Welcome to Nisarga Plant Nursery
        </h1>
        <p className="mt-4 text-base md:text-lg text-green-700">
          We nurture nature to nurture you!
        </p>

        {/* Responsive Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 items-center">
          <button className="px-6 py-2 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300">
            Explore More
          </button>
          <button className="px-6 py-2 bg-white text-green-700 border border-green-700 font-semibold rounded-lg hover:bg-green-100 transition duration-300">
            Contact Us
          </button>
        </div>

        {/* Responsive Plant Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {images.map((image) => (
            <div className="relative group" key={image.alt}>
              <img
                src={image.src}
                alt={image.alt}
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
              {/* Tooltip Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-lg">{image.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <About />
    <PlantsSection />
    </>
  );
};

export default Home;
