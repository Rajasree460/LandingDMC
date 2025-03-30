import React, { useState } from "react";

const teamMembers = [
  {
    name: "Dr. Arunjyoti Bhikkhu",
    role: "Member of Minority Development Alliance, MA & ME, Government of West Bengal",
    image: "/images/arunjyoti.png", 
  },
  {
    name: "Dr. Arunjyoti Bhikkhu",
    role: "Member of Minority Development Alliance, MA & ME, Government of West Bengal",
    image: "/images/arunjyoti.png", 
  },
  {
    name: "Dr. Arunjyoti Bhikkhu",
    role: "Member of Minority Development Alliance, MA & ME, Government of West Bengal",
    image: "/images/arunjyoti.png", 
  },
  {
    name: "Dr. Arunjyoti Bhikkhu",
    role: "Member of Minority Development Alliance, MA & ME, Government of West Bengal",
    image: "/images/arunjyoti.png", 
  },
  {
    name: "Dr. Arunjyoti Bhikkhu",
    role: "Member of Minority Development Alliance, MA & ME, Government of West Bengal",
    image: "/images/arunjyoti.png", 
  },
  {
    name: "Dr. Arunjyoti Bhikkhu",
    role: "Member of Minority Development Alliance, MA & ME, Government of West Bengal",
    image: "/images/arunjyoti.png", 
  },
];

const Team = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;
  
  const prevSlide = () => {
  if (startIndex > 0) {
    setStartIndex(startIndex - itemsPerPage);
  }
};

const nextSlide = () => {
  if (startIndex + itemsPerPage < teamMembers.length) {
    setStartIndex(startIndex + itemsPerPage);
  }
};

return (
  <section className="text-center py-12 bg-white">
    <h2 className="text-3xl font-bold text-black">Our Team</h2>
    <p className="text-gray-500 mt-2">Meet Our Faculty and Committee Members</p>

    {/* Team Members Grid */}
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-16">
      {teamMembers.slice(startIndex, startIndex + itemsPerPage).map((member, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden p-4 flex flex-col items-center">
          <img
            src={member.image}
            alt={member.name}
            className="w-80 h-full object-cover rounded-lg"
          />
          <div className="mt-4 text-start">
            <h3 className="text-lg font-bold text-blue-700 ml-3">{member.name}</h3>
            <p className="text-sm text-gray-600 mt-1 ml-3">{member.role}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Navigation Buttons */}
    <div className="flex justify-between items-center mt-6 px-4 md:px-16">
      <button 
        className="text-gray-500 flex items-center hover:text-gray-700" 
        onClick={prevSlide}
      >
        &#8592; Previous
      </button>

      <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center">
        See All Faculty Members &#8594;
      </button>

      <button 
        className="text-gray-500 flex items-center hover:text-gray-700" 
        onClick={nextSlide}
      >
        Next &#8594;
      </button>
    </div>
  </section>
);
};

export default Team;
