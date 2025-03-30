import React from "react";
import ClockIcon from "../assets/icons/clock.svg"; 

const courses = [
  {
    type: "Diploma Degree",
    duration: "2 Years",
    title: "Diploma in Deeniyat Education",
    description: [
      "Perfect blend of Islamic and Modern Education",
      "A modern effort to impart Islamic education in one’s own mother tongue",
    ],
  },
  {
    type: "Short-Term Degree",
    duration: "1 Year",
    title: "Kairat –e- Hafs- 1 Year",
    description: [
      "Minimum Qualification: Passed Bukhari Sharif Alema & Hafiza having knowledge of Urdu",
    ],
  },
  {
    type: "Short-Term Degree",
    duration: "1 Year",
    title: "Online Deeniyat Certificate Course",
    description: [
      "A one-year duration course to build a strong foundation on Deeniyat.",
      "Reading the Quran with its meaning, Hadees, Aqaid, Masaail, Islamic teachings, and an overall knowledge of Arabic and Urdu language.",
    ],
  },
  {
    type: "Diploma Degree",
    duration: "2 Years",
    title: "Professional Certificate Course",
    description: [
      "Apart from the aforementioned courses, Diploma and Certificate courses are being planned to be launched on subjects such as Nutrition, Methods of Child Education, Management, and Computer subjects.",
    ],
  },
];

const CourseCard = ({ type, duration, title, description }) => {
  return (
    <div className="relative bg-white rounded-lg p-6 border border-gray-200 group transition-all duration-300 hover:shadow-lg">
      {/* Left Ribbon - Course Type */}
      <span className="absolute top-0 left-0 px-4 py-1 text-sm font-semibold rounded-br-lg 
        bg-gray-200 text-gray-700 transition-all duration-300 ease-in-out 
        group-hover:bg-blue-100 group-hover:text-blue-600 group-hover:shadow-md">
        {type}
      </span>

      {/* Right Ribbon - Duration */}
      <span className="absolute top-0 right-0 px-4 py-1 text-sm font-semibold bg-gray-200 text-gray-700 rounded-bl-lg flex items-center 
        transition-all duration-300 ease-in-out group-hover:bg-blue-100 group-hover:text-blue-600 group-hover:shadow-md">
        <img src={ClockIcon} alt="Duration" className="w-4 h-4 mr-1" />
        {duration}
      </span>

      {/* Course Content */}
      <h3 className="text-xl font-semibold text-gray-900 mt-8">{title}</h3>
      <ul className="mt-3 text-gray-600 text-sm list-disc pl-4">
        {description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="mt-5 flex gap-3">
        <button className="bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700">
          Apply Now →
        </button>
        <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-50">
          Know More
        </button>
      </div>
    </div>
  );
};

const Courses = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700">
            Explore All Courses →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
