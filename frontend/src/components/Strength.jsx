import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Strength = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const strengths = [
    {
      img: "/images/collective_learning.png",
      title: "Collective learning",
    },
    {
      img: "/images/peer_learning.png",
      title: "Peer learning",
    },
    {
      img: "/images/cordial_atmosphere.png",
      title: "Cordial atmosphere",
    },
    {
      img: "/images/safe_campus.png",
      title: "Safe and Secure campus",
    },
    {
      img: "/images/learning_environment.png",
      title: "Learning environment",
    },
    {
      img: "/images/mentoring.png",
      title: "Mentoring",
    },
    {
      img: "/images/learning_resources.jpg",
      title: "Learning resources",
    },
    {
      img: "/images/learning_community.jpg",
      title: "Learning community",
    }
  ];

  return (
    <div className="bg-white py-12 px-6">
      <div className="max-w-8xl mx-auto ml-6">

        {/* Section Header */}
        <div className="mb-6 flex justify-between items-center">
          <div>
            <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold">
              Strength
            </span>
            <h2 className="text-3xl font-bold mt-3 text-black">
              Empowered by Strength, Driven by
            </h2>
            <h2 className="text-3xl font-bold mt-1 text-black">Knowledge</h2>
          </div>

          {/* Buttons Positioned to the Right & Left*/}
          <div className="flex gap-3">
            <button
              className="bg-blue-500 p-3 rounded-full shadow-md text-white"
              onClick={() => scroll("left")}
            >
              <FaArrowLeft />
            </button>
            <button
              className="bg-blue-500 p-3 rounded-full shadow-md text-white"
              onClick={() => scroll("right")}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Scrollable Card Section */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden scrollbar-hide scroll-smooth"
          >
            {strengths.map((item, index) => (
              <div
                key={index}
                className="min-w-[250px] bg-white p-4 rounded-lg border border-gray-300 shadow-lg"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-36 object-cover rounded-md"
                />
                <h3 className="font-semibold text-lg mt-4 text-black">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2 cursor-pointer">
                  Learn More →
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Button */}
        <div className="text-center mt-8">
          <button className="bg-blue-700 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition">
            Contact Us →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Strength;
