import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
 
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setLoginOpen(false); // Close login if menu opens
  };

  const toggleLogin = () => {
    setLoginOpen(!loginOpen);
    setMenuOpen(false); // Close menu if login opens
  };

  // const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative">

      {/* Background Section */}
      <div className="hero min-h-screen relative">

        {/* Video Background */}
        <video autoPlay loop muted 
        onLoadedMetadata={(e) => (e.target.playbackRate = 0.5)}
        className="absolute top-0 left-0 w-full h-full object-cover">
          <source src="/animation/dmc2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* <div className="absolute top-0 left-0 w-full h-full">
            
            <iframe
              src="https://www.youtube.com/embed/bpXUFAMwBB4?autoplay=1&mute=1"
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              onLoad={() => setIsLoaded(true)}
              style={{ border: "none" }} 
            />
          </div> */}

        
        <div className="hero-overlay bg-opacity-60 absolute top-0 left-0 w-full h-full"></div>

        {/* Navbar (Placed Over Background) */}
        <nav className="absolute top-0 left-0 w-full bg-transparent text-white p-4 z-50">
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <img src="/logos/logo.webp" alt="DMC Logo" className="h-30 w-32 mr-4 md:mr-8" />

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8 text-lg font-semibold">
              {["Home", "About", "Admission", "Our Team", "Media", "Contact"].map((item) => (
                <li key={item} className="relative cursor-pointer group">
                  <span className="group-hover:border-t-2 group-hover:border-b-2 group-hover:border-white py-1 transition-all duration-300 capitalize">
                    {item}
                  </span>
                </li>
              ))}

              {/* Courses Dropdown */}
              <li
                className="relative cursor-pointer group"
                onMouseEnter={() => setCoursesOpen(true)}
                onMouseLeave={() => setCoursesOpen(false)}
              >
                <span className="group-hover:border-t-2 group-hover:border-b-2 group-hover:border-white py-1 transition-all duration-300 capitalize">
                  Courses
                </span>
                {coursesOpen && (
                  <ul className="absolute left-0 mt-2 bg-black bg-opacity-80 p-2 space-y-2">
                    <li className="px-4 py-2 hover:bg-white hover:text-black capitalize">Course 1</li>
                    <li className="px-4 py-2 hover:bg-white hover:text-black capitalize">Course 2</li>
                    <li className="px-4 py-2 hover:bg-white hover:text-black capitalize">Course 3</li>
                  </ul>
                )}
              </li>
            </ul>

            {/* Login Trigger (Desktop) */}
            <button className="text-3xl ml-4 hidden md:block" onClick={toggleLogin}>
              <i className={`bi ${loginOpen ? 'bi-x' : 'bi-list'}`}></i>
            </button>

            {/* Login Dropdown (Desktop) */}
            {loginOpen && (
              <div className="absolute top-full right-0 md:left-auto mt-2 bg-black bg-opacity-80 rounded shadow-lg z-50 w-48">
                <ul className="py-2 px-4">
                  <li className="py-2 cursor-pointer hover:bg-gray-700 rounded capitalize">Student Login</li>
                  <li className="py-2 cursor-pointer hover:bg-gray-700 rounded capitalize">Management Login</li>
                  <li className="py-2 cursor-pointer hover:bg-gray-700 rounded capitalize">Teacher Login</li>
                </ul>
              </div>
            )}

            {/* Join Us Button (Always Visible on Desktop) */}
            <a href="#" className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded-lg ml-8">
              Join Us <i className="bi bi-arrow-right"></i>
            </a>

            {/* Mobile Login Button */}
            <button className="text-white md:hidden" onClick={toggleLogin}>
              Login
            </button>

            {/* Mobile Menu Icon */}
            <button className="text-3xl md:hidden ml-4" onClick={toggleMenu}>
              <i className={`bi ${menuOpen ? 'bi-x' : 'bi-list'}`}></i>
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <ul className="md:hidden flex flex-col items-center bg-black bg-opacity-60 backdrop-blur-lg py-4 absolute w-full top-16 left-0">
              {["About", "Admission", "Our Team", "Media", "Contact", "Courses"].map((item) => (
                <li key={item} className="py-2 cursor-pointer text-lg capitalize">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </nav>

        {/* Hero Content with Updated Text and Buttons */}
        <div className="hero-content text-center text-white z-10 relative py-20 md:py-32">
    <div className="max-w-4xl mx-auto px-4">
        <p className="text-xl md:text-3xl font-serif">
            For the future
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold">
            Welcome to DMC
        </h1>
        <p className="mt-4 text-lg md:text-2xl">
            Deeniyat Muallima College: Looking Inward, Stepping Forward
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            <button className="px-6 py-3 md:px-12 md:py-4 border border-white text-white rounded-lg hover:bg-white font-bold hover:text-blue-900 transition text-sm md:text-lg">
                View Courses
            </button>
            <div className="flex items-center space-x-3">
                <button className="px-6 py-3 md:px-12 md:py-4 bg-white text-blue-900 font-bold rounded-lg transition duration-300 hover:bg-blue-600 hover:text-white text-sm md:text-lg">
                    Contact Us →
                </button>
                <img src="/iconimg/arrow.png" alt="Arrow" className="w-8 h-8 md:w-10 md:h-10" />
            </div>
        </div>
    </div>
</div>


      </div>
    </div>
  );
};

export default Navbar;
