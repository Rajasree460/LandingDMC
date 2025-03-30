import React from "react";

const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
];

function Gallery() {
  return (
    <div className="bg-white py-10 text-center">
      {/* Title Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Gallery</h2>
        <p className="mt-2 text-lg text-gray-500">
          Explore Our Journey: A Visual Showcase of Milestones and Memories
        </p>
      </div>

      {/* Image Grid with Tilt Effect */}
      <div className="mt-8 flex justify-center gap-6 flex-wrap">
        {images.map((src, index) => (
          <div
            key={index}
            className={`w-40 sm:w-52 md:w-60 lg:w-64 xl:w-72 h-48 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 
              ${index % 2 === 0 ? "rotate-[-6deg]" : "rotate-[6deg]"} hover:rotate-0`}
          >
            <img className="w-full h-full object-cover rounded-xl" src={src} alt={`Gallery Image ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Centered Button */}
      <div className="mt-10 flex justify-center">
        <button className="bg-blue-700  text-white font-semibold py-3 px-6 rounded-lg flex items-center space-x-2">
          <span>See All Images</span>
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Gallery;
