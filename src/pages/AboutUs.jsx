// import React from 'react';

// const About = () => {
//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="container mx-auto px-6 md:px-12">
//         <h1 className="text-4xl font-bold text-center text-green-700 mb-8">About Nisarg Nursery</h1>

//         {/* Content Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div>
//             <p className="text-lg mb-6">
//               Nisarg Nursery is based in Kanheri Sarap and is regarded as one of the Best Nurseries . Founded in 2010, the founders have more than two decades of experience in satisfying retail and wholesale customers, creating an unending list of happy clients.

              


//             </p>
//             <p className="text-lg mb-6">
//               We at Nisarg Nursery help our clients to celebrate gardening and nature in its true colors. With 7000 amazing live plants, it is truly a plant lover's paradise. Nisarg Nursery has earned a reputation as a leading firm in the field of plant nurseries and interior and exterior landscaping.
//             </p>
//             <p className="text-lg">
//               For several years, Nisarg has become synonymous with greenery. We pride ourselves on superior quality, reliability, professionalism, and cost-effectiveness in our every product and service
//             </p>
//           </div>

//           {/* Image Section */}
//           <div className="grid grid-cols-2 gap-4">
//             <img
//               src="/src/assets/good.jpg"
//               alt="Garden"
//               className="w-full h-auto rounded-lg shadow-md"
//             />
//             {/* <img
//               src="/src/assets/super.jpg"
//               alt="Nursery plants"
//               className="w-full h-auto rounded-lg shadow-md"
//             /> */}
//             <img
//               src="/src/assets/dec.jpg"
//               alt="Landscaping"
//               className="w-full h-full rounded-lg shadow-md"
//             />
//             {/* <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSta1YWg2uoxUGgAUnA7-w-L2t8Bm8L08q5Jg&s"
//               alt="Flowers"
//               className="w-full h-full rounded-lg shadow-md"
//             /> */}
//           </div>
//         </div>

//         {/* Call-to-Action */}
//         <div className="mt-12 text-center">
//           <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold">
//             Explore Our Plants
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import React from 'react';

const About = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-8">About Nisarg Nursery</h1>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Text Section */}
          <div>
            <p className="text-lg mb-6">
              Nisarg Nursery is based in Kanheri Sarap and is regarded as one of the Best Nurseries. Founded in 2010, the founders have more than two decades of experience in satisfying retail and wholesale customers, creating an unending list of happy clients.
            </p>
            <p className="text-lg mb-6">
              We at Nisarg Nursery help our clients to celebrate gardening and nature in its true colors. With 7000 amazing live plants, it is truly a plant lover's paradise. Nisarg Nursery has earned a reputation as a leading firm in the field of plant nurseries and interior and exterior landscaping.
            </p>
            <p className="text-lg">
              For several years, Nisarg has become synonymous with greenery. We pride ourselves on superior quality, reliability, professionalism, and cost-effectiveness in our every product and service.
            </p>
          </div>

          {/* Image Section (Column Layout for All Screens) */}
          <div className="flex flex-col gap-4">
            {/* Image 1 */}
            <div className="w-full h-full">
              <img
                src="/src/assets/good.jpg"
                alt="Garden"
                className="w-full h-auto rounded-lg shadow-md object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="w-full h-full">
              <img
                src="/src/assets/dec.jpg"
                alt="Landscaping"
                className="w-full h-auto rounded-lg shadow-md object-cover"
              />
            </div>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="mt-12 text-center">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold">
            Explore Our Plants
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
