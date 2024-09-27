import React from 'react';

const plantsData = [
  { name: 'Indoor & Outdoor', imgSrc: 'http://www.nisarganursery.com/images/plant/indoor.jpg' },
  { name: 'Flowering Plants', imgSrc: 'http://www.nisarganursery.com/images/plant/BlanketFlower.png' },
  { name: 'Fruits Plants', imgSrc: 'http://www.nisarganursery.com/images/plant/orange.jpg' },
  { name: 'Spices Plants', imgSrc: 'http://www.nisarganursery.com/images/plant/Spices.jpg' },
  { name: 'Ficus Plants', imgSrc: 'http://www.nisarganursery.com/images/plant/Ficus.jpg' },
  { name: 'Ground Cover/Lawn', imgSrc: 'http://www.nisarganursery.com/images/plant/Ground.jpg' },
  { name: 'Bamboo Plants', imgSrc: 'http://www.nisarganursery.com/images/Bamboo%20Plants.jpg' },
  { name: 'Climbers Plants', imgSrc: 'http://www.nisarganursery.com/images/Spices_Plants.jpg' },
  { name: 'Aquatic Plants', imgSrc: 'http://www.nisarganursery.com/images/plant/Aquatic.jpg' },
  { name: 'Forest Plants', imgSrc: 'http://www.nisarganursery.com/images/plant/forest.jpg' },
  { name: 'Avenue Plants', imgSrc: 'http://www.nisarganursery.com/images/plant/avanue.jpg' },
  { name: 'Medicinal Plants', imgSrc: 'http://www.nisarganursery.com/images/plant/medicinal.jpg' },
];

const PlantsSection = () => {
  return (
    <section className="py-16 bg-gray-100 mt-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-green-700">Our Plants Collection</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {plantsData.map((plant, index) => (
            <div key={index} className="relative bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img 
                src={plant.imgSrc} 
                alt={plant.name} 
                className="w-full h-64 object-cover" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                <h3 className="text-white text-xl font-semibold">{plant.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlantsSection;
