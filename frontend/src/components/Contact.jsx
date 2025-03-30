import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"; 
import Contactform from "./Contactform";

function Contact() {
  return (
    <div className="bg-base-100 py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center lg:text-left">
          <h2 className="text-3xl font-extrabold text-gray-900">Reach Us</h2>
          <p className="mt-2 text-lg text-gray-500">
            Contact us for any queries related to admission, donation, or anything else.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-2">
              <i className="bi bi-envelope text-gray-700 mr-2"></i>
              <h6 className="font-semibold text-gray-700">Mail</h6>
            </div>
            <p className="text-blue-700">contact@dmcedu.org</p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-2">
              <i className="bi bi-telephone text-gray-700 mr-2"></i>
              <h6 className="font-semibold text-gray-700">Tel</h6>
            </div>
            <p className="text-blue-700">9143163414 - 7003387332</p>
            <p className="text-blue-700">7890090146</p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-2">
              <i className="bi bi-geo-alt text-gray-700 mr-2"></i>
              <h6 className="font-semibold text-gray-700">Address</h6>
            </div>
            <p className="text-blue-700 text-center md:text-left">
              DMC Nagar, Garpa, Beside Lake Land Country Club, Kona Expressway, Santragachi, Howrah - 711403
            </p>
          </div>
        </div>

        <div>
            <Contactform />
        </div>
        
      </div>
    </div>
  );
}

export default Contact;