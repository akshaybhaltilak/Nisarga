import React from 'react';

import 'aos/dist/aos.css'; // Import AOS animations
import AOS from 'aos';

AOS.init(); // Initialize AOS

const Services = () => {
  return (
    <section className="services bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        
        {/* Farm Management */}
        <div className="service-item flex flex-col lg:flex-row items-center mb-10" data-aos="fade-right">
          <div className="w-full lg:w-1/2 p-6">
            <img
              src="http://www.nisarganursery.com/images/plant/Farm.jpg"
              alt="Farm Management"
              className="rounded-lg shadow-lg hover:scale-105 transform transition duration-500 ease-in-out"
            />
          </div>
          <div className="w-full lg:w-1/2 p-6">
            <h3 className="text-3xl font-semibold mb-4">Farm Management</h3>
            <p className="text-lg leading-relaxed">
              At Nisarga Nursery, we offer expert farm management services. From crop planning and soil health to efficient water management, our team ensures optimal farm productivity using sustainable practices.
            </p>
          </div>
        </div>

        {/* Vertical Garden */}
        <div className="service-item flex flex-col lg:flex-row-reverse items-center mb-10" data-aos="fade-left">
          <div className="w-full lg:w-1/2 p-6">
            <img
              src="http://www.nisarganursery.com/images/plant/vertical.jpg"
              alt="Vertical Garden"
              className="rounded-lg shadow-lg hover:scale-105 transform transition duration-500 ease-in-out"
            />
          </div>
          <div className="w-full lg:w-1/2 p-6">
            <h3 className="text-3xl font-semibold mb-4">Vertical Garden</h3>
            <p className="text-lg leading-relaxed">
              Bring life to your walls with our beautifully designed vertical gardens. Perfect for urban spaces, our vertical gardens are a sustainable way to grow plants in limited space while adding a modern, eco-friendly touch to your surroundings.
            </p>
          </div>
        </div>

        {/* Garden Maintenance */}
        <div className="service-item flex flex-col lg:flex-row items-center mb-10" data-aos="fade-right">
          <div className="w-full lg:w-1/2 p-6">
            <img
              src="http://www.nisarganursery.com/images/plant/garden.jpg"
              alt="Garden Maintenance"
              className="rounded-lg shadow-lg hover:scale-105 transform transition duration-500 ease-in-out"
            />
          </div>
          <div className="w-full lg:w-1/2 p-6">
            <h3 className="text-3xl font-semibold mb-4">Garden Maintenance</h3>
            <p className="text-lg leading-relaxed">
              Our professional garden maintenance services keep your outdoor spaces lush and vibrant all year round. We take care of everything—from regular pruning to seasonal care—so you can enjoy a beautiful, hassle-free garden.
            </p>
          </div>
        </div>

        {/* Plants Relocation */}
        <div className="service-item flex flex-col lg:flex-row-reverse items-center" data-aos="fade-left">
          <div className="w-full lg:w-1/2 p-6">
            <img
              src="http://www.nisarganursery.com/images/plant/relocation.jpg"
              alt="Plants Relocation"
              className="rounded-lg shadow-lg hover:scale-105 transform transition duration-500 ease-in-out"
            />
          </div>
          <div className="w-full lg:w-1/2 p-6">
            <h3 className="text-3xl font-semibold mb-4">Plants Relocation</h3>
            <p className="text-lg leading-relaxed">
              Moving plants can be a delicate task, but with our plant relocation services, you can be assured that your beloved greenery will be safely transferred. We handle everything from small potted plants to large trees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
