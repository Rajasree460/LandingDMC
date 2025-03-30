import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

function Footer() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <footer className="bg-[#03254c] text-white py-12">
  <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
    
    {/* Logo Section */}
    <div>
      <img src="/logos/logo.webp" alt="DMC Logo" className="h-30 w-32 mb-4" />
      <p className="text-sm text-gray-300">
        Established in 2016, Deeniyat Muallima College is a community-based college,
        empowering Muslim women in West Bengal where drop-out rates are high.
      </p>
      <div className="flex space-x-3 mt-4">
        <a href="#" className="h-7 w-7 bg-white rounded-full flex items-center justify-center shadow-md">
          <img src="/iconimg/fb.png" alt="Facebook" className="h-4 w-4 object-contain" />
        </a>
        <a href="#" className="h-7 w-7 bg-white rounded-full flex items-center justify-center shadow-md">
          <img src="/iconimg/yt.webp" alt="YouTube" className="h-4 w-4 object-contain" />
        </a>
        <a href="#" className="h-7 w-7 bg-white rounded-full flex items-center justify-center shadow-md">
          <img src="/iconimg/insta.webp" alt="Instagram" className="h-4 w-4 object-contain" />
        </a>
        <a href="#" className="h-7 w-7 bg-white rounded-full flex items-center justify-center shadow-md">
          <img src="/iconimg/x.webp" alt="Twitter" className="h-4 w-4 object-contain" />
        </a>
        <a href="#" className="h-7 w-7 bg-white rounded-full flex items-center justify-center shadow-md">
          <img src="/iconimg/linkedin.png" alt="LinkedIn" className="h-4 w-4 object-contain" />
        </a>
      </div>
    </div>

    {/* About Us Section */}
    <div>
      <h3 className="font-bold text-lg mb-8">About Us</h3> 
      <ul className="text-sm text-gray-300 space-y-6"> 
        <li><a href="#" className="hover:text-white">Why DMC</a></li>
        <li><a href="#" className="hover:text-white">Mission & Vision</a></li>
        <li><a href="#" className="hover:text-white">History</a></li>
      </ul>
    </div>

    {/* Quick Links Section */}
    <div>
      <h3 className="font-bold text-lg mb-8">Quick Links</h3> 
      <ul className="text-sm text-gray-300 space-y-6">
        <li><a href="#" className="hover:text-white">Admission</a></li>
        <li className="relative"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <a href="#" className="hover:text-white flex items-center">
            Courses <i className="bi bi-chevron-down ml-2"></i>
          </a>
          {showDropdown && (
            <ul className="absolute left-0 mt-2 w-48 bg-white text-[#03254c] shadow-lg rounded-md py-2">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Diploma in Deeniyat</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Online Deeniyat Certificate</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Professional Certification</a></li>
            </ul>
          )}
        </li>
        <li><a href="#" className="hover:text-white">Our Team</a></li>
        <li><a href="#" className="hover:text-white">Events</a></li>
        <li><a href="#" className="hover:text-white">Outreach Program</a></li>
      </ul>
    </div>

    {/* Contact Us Section */}
    <div>
      <h3 className="font-bold text-lg mb-8">Contact Us</h3> 
      <div className="text-sm text-gray-300 space-y-6">
        <div className="flex items-center">
          <i className="bi bi-envelope mr-2"></i>
          <span>Mail</span>
        </div>
        <p><a href="mailto:contact@dmcedu.org" className="hover:text-white">contact@dmcedu.org</a></p>
        <div className="flex items-center">
          <i className="bi bi-telephone mr-2"></i>
          <span>Tel</span>
        </div>
        <p>9143163414 - 7003387332</p>
        <p>7890090146</p>
        <div className="flex items-start">
          <i className="bi bi-geo-alt mr-2"></i>
          <span>Address</span>
        </div>
        <p>DMC Nagar, Garpa, Beside Lake Land Country Club, Kona Expressway, Santragachi, Howrah - 711403</p>
      </div>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="container mx-auto px-4 mt-8 border-t border-gray-700 py-4 flex justify-between text-sm text-gray-300">
    <div>Copyright © 2024</div>
    <div>
      All Rights Reserved | <a href="#" className="hover:text-white underline">Terms and Conditions</a> | <a href="#" className="hover:text-white underline">Privacy Policy</a>
    </div>
  </div>
</footer>

  );
}

export default Footer;
