import React from "react";

const galleryImages = [
  "http://www.nisarganursery.com/gallery_img/22rmtaiynr1co88kks.jpg",
  "http://www.nisarganursery.com/gallery_img/1vcy05xjefnooosw0o.jpg",
  "http://www.nisarganursery.com/gallery_img/3e7jclwpamucgw80wg.jpg",
  "http://www.nisarganursery.com/gallery_img/7vnlc0ydptc8c000w.jpg",
  "http://www.nisarganursery.com/gallery_img/25ml8uopsdpcc8k4ck.jpg",
  "http://www.nisarganursery.com/gallery_img/2oix38s14xs0k4k8k0.jpg",
  "http://www.nisarganursery.com/gallery_img/25ml8uopsdpcc8k4ck.jpg",
  "http://www.nisarganursery.com/gallery_img/2oix38s14xs0k4k8k0.jpg",
  // Add as many images as you want
];

const Gallery = () => {
  return (
    <section className="gallery-section py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8 text-green-800">Our Beautiful Plant Gallery</h2>
        <p className="text-center text-lg mb-12 text-gray-600">
          Explore our diverse collection of plants that bring life and freshness to your spaces.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
            >
              <img
                src={image}
                alt={`Plant ${index + 1}`}
                className="w-full h-64 object-cover transform transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-green-900 bg-opacity-0 group-hover:bg-opacity-50 transition duration-500 flex items-center justify-center">
                <p className="text-white font-semibold opacity-0 group-hover:opacity-100 transition duration-500">
                  View Details
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
