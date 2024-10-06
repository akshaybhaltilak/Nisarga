// import React from 'react';
// import About from './AboutUs';
// import PlantsSection from './Plants';
// import Services from './Services';
// import Gallery from './Gallery';
// import Contact from './Contact';

// const Home = () => {
//   const images = [
//     {
//       src: "/src/assets/fruit.jpg",
//       alt: "Indoor Plant",
//       title: "Indoor Plant"
//     },
//     {
//       src: "/src/assets/fruit1.jpg",
//       alt: "Outdoor Plant",
//       title: "Outdoor Plant"
//     },
//     {
//       src: "/src/assets/mango.jpg",
//       alt: "Succulent Plant",
//       title: "Succulent Plant"
//     },
//     {
//       src: "/src/assets/more.jpg",
//       alt: "Flowering Plant",
//       title: "Flowering Plant"
//     },
//   ];

//   return (
//     <>
//     <div
//       className="h-screen bg-cover bg-center flex items-center justify-center pt-24 mt-10 md:bg-[url('https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-green-100"
//     >
//       <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-4xl mx-4 text-center">
//         {/* Heading with responsive text size */}
//         <h1 className="text-4xl md:text-5xl font-bold text-green-800 leading-tight">
//           Welcome to Nisarg Nursery  AK.
//         </h1>
//         <p className="mt-4 text-base md:text-lg text-green-700">
//           We nurture nature to nurture you!
//         </p>

//         {/* Responsive Buttons */}
//         <div className="mt-8 flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 items-center">
//           <button className="px-6 py-2 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300">
//             Explore More
//           </button>
//           <button className="px-6 py-2 bg-white text-green-700 border border-green-700 font-semibold rounded-lg hover:bg-green-100 transition duration-300">
//             Contact Us
//           </button>
//         </div>

//         {/* Responsive Plant Images Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
//           {images.map((image) => (
//             <div className="relative group" key={image.alt}>
//               <img
//                 src={image.src}
//                 alt={image.alt}
//                 className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
//               />
//               {/* Tooltip Overlay */}
//               <div className="absolute inset-0 bg-black bg-opacity-60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <span className="text-lg">{image.title}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     <About />
//     <PlantsSection />
//     <Services/>
//     <Gallery/>
//     <Contact/>
//     </>
//   );
// };

// export default Home;

import React from 'react';
import About from './AboutUs';
import PlantsSection from './Plants';
import Services from './Services';
import Gallery from './Gallery';
import Contact from './Contact';

const Home = () => {
  const images = [
    {
      src: "/src/assets/fruit.jpg",
      alt: "Indoor Plant",
      title: "Indoor Plant"
    },
    {
      src: "/src/assets/fruit1.jpg",
      alt: "Outdoor Plant",
      title: "Outdoor Plant"
    },
    {
      src: "/src/assets/mango.jpg",
      alt: "Succulent Plant",
      title: "Succulent Plant"
    },
    {
      src: "/src/assets/more.jpg",
      alt: "Flowering Plant",
      title: "Flowering Plant"
    },
  ];

  return (
    <>
      {/* Hero Section with adjusted background image */}
      <div
        className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center pt-24 md:pt-32 bg-green-100"
        // style={{ backgroundImage: `url('https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=600')` }}
      >
        <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-4xl mx-4 text-center">
          {/* Heading with responsive text size */}
          <h1 className="text-3xl md:text-5xl font-bold text-green-800 leading-tight">
            Welcome to Nisarg Nursery AK.
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
        </div>

        {/* Responsive Plant Images Grid with proper margin */}
        <div className="mt-16 md:mt-24 px-4 md:px-0 w-full max-w-5xl">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {images.map((image) => (
              <div className="relative group" key={image.alt}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
                {/* Tooltip Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm sm:text-lg">{image.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Other sections */}
      <About />
      <PlantsSection />
      <Services />
      <Gallery />
      <Contact />
    </>
  );
};

export default Home;
