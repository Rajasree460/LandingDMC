import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const newsData = [
  {
    id: 1,
    image: "/images/olivia.png",
    author: "Olivia Rhye",
    date: "20 Jan 2022",
    title: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
  },
  {
    id: 2,
    image: "/images/lana1.png",
    author: "Lana Steiner",
    date: "18 Jan 2022",
    title: "Building your API Stack",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing APIs...",
  },
  {
    id: 3,
    image: "/images/lana2.png",
    author: "Lana Steiner",
    date: "18 Jan 2022",
    title: "Building your API Stack",
    description:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing APIs...",
  },
];

const News = () => {
  return (
    <div className="p-6 bg-white w-full">
      <h2 className="text-2xl font-bold text-black mb-5 ml-4">DMC News</h2>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Main News Card */}
        <div className="border border-gray-300 rounded-lg overflow-hidden transition-shadow hover:shadow-xl group">
          <figure>
            <img src={newsData[0].image} alt="News" className="h-60 object-cover w-full" />
          </figure>
          <div className="p-4">
            <p className="text-sm text-gray-500">{newsData[0].author} • {newsData[0].date}</p>
            <h3 className="font-bold text-lg text-black flex items-center gap-1 group-hover:pr-4 relative">
              {newsData[0].title} 
              <i className="bi bi-arrow-up-right absolute opacity-0 group-hover:opacity-100 right-0 transition-opacity"></i>
            </h3>
            <p className="text-gray-600">{newsData[0].description}</p>
            <div className="mt-2">
              <a href="#" className="text-blue-700 font-bold hover:underline">Learn More</a>
            </div>
          </div>
        </div>

        {/* List of Other News */}
        <div className="flex flex-col gap-6">
          {newsData.slice(1).map((news) => (
            <div key={news.id} className="border border-gray-300 rounded-lg overflow-hidden transition-shadow hover:shadow-xl group p-4">
              <div className="flex">
                <figure className="w-2/5">
                  <img src={news.image} alt="News" className="h-40 object-cover w-full" />
                </figure>
                <div className="p-4 w-3/5 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{news.author} • {news.date}</p>
                    <h3 className="font-bold text-lg text-black flex items-center gap-1 group-hover:pr-4 relative">
                      {news.title} 
                      <i className="bi bi-arrow-up-right absolute opacity-0 group-hover:opacity-100 right-0 transition-opacity"></i>
                    </h3>
                    <p className="text-gray-600 truncate">{news.description}</p>
                  </div>
                  <div className="mt-2">
                    <a href="#" className="text-blue-700 font-bold hover:underline">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap justify-between items-center mt-6">
        {/* <button className="btn btn-ghost flex items-center gap-2 text-gray-400 hover:bg-transparent hover:text-gray-400">
          ← Previous
        </button> */}
        <button 
        className="text-gray-500 flex items-center hover:text-gray-700" 
        
      >
        &#8592; Previous
      </button>

        <div className="join bg-white shadow-none flex-wrap justify-center">
          {[1, 2, "...", 8, 9, 10].map((page, index) => (
            <button
              key={index}
              className={`btn join-item bg-white text-gray-400 border-none hover:bg-gray-100 shadow-none ${
                page === 1 ? "bg-gray-200" : ""
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        {/* <button className="btn btn-ghost flex items-center gap-2 text-gray-400 hover:bg-transparent hover:text-gray-400">
          Next →
        </button> */}

        <button 
        className="text-gray-500 flex items-center hover:text-gray-700" 
        
      >
        Next &#8594;
      </button>
      </div>
    </div>
  );
};

export default News;
