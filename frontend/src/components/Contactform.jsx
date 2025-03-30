import React, { useState } from "react";

function Contactform() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    course: [],
    message: "",
  });

  const courses = [
    "Diploma in Deeniyat Education",
    "Online Deeniyat Certificate Course",
    "Kairat -e- Hafs",
    "Professional Certificate Course",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        course: checked
          ? [...prev.course, value]
          : prev.course.filter((c) => c !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700">Name</label>
            <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-md bg-white"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-md bg-white"
              placeholder="you@company.com"
            />
          </div>
        </div>

        {/* Phone & Organization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700">Phone number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-md bg-white"
              placeholder="+1 (555) 000-0000"
            />
          </div>
          <div>
            <label className="block text-gray-700">Organization</label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="w-full p-3 border rounded-md bg-white"
              placeholder="Your organization"
            />
          </div>
        </div>

        {/* Course Name Selection */}
        <div>
          <label className="block text-gray-700 mb-2">Course name</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {courses.map((course, index) => (
              <label key={index} className="flex items-center space-x-2 text-gray-600">
                <input
                  type="checkbox"
                  name="course"
                  value={course}
                  checked={formData.course.includes(course)}
                  onChange={handleChange}
                  className="w-4 h-4 appearance-none border border-gray-400 rounded-sm bg-white checked:bg-blue-600 checked:border-transparent focus:ring-2 focus:ring-blue-400"
                />
                <span>{course}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-gray-700">Your message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-md h-24 bg-white"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-3 w-40 sm:w-80 rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Contact Us
          </button>
        </div>

      </form>
    </div>
  );
}

export default Contactform;



// import React, { useState } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

// function Contactform() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     organization: "",
//     course: [],
//     message: "",
//   });

//   const courses = [
//     "Diploma in Deeniyat Education",
//     "Online Deeniyat Certificate Course",
//     "Kairat -e- Hafs",
//     "Professional Certificate Course",
//     "Other",
//   ];

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === "checkbox") {
//       setFormData((prev) => ({
//         ...prev,
//         course: checked
//           ? [...prev.course, value]
//           : prev.course.filter((c) => c !== value),
//       }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handlePhoneChange = (value) => {
//     setFormData((prev) => ({ ...prev, phone: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);
//   };

//   return (
//     <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Name & Email */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label className="block text-gray-700">Name</label>
//             <input 
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-md bg-white"
//               placeholder="Your name"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-md bg-white"
//               placeholder="you@company.com"
//             />
//           </div>
//         </div>

//         {/* Phone & Organization */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div >
//             <label className="block text-gray-700">Phone number</label>
//             <PhoneInput
//               country={"us"}
//               value={formData.phone}
//               onChange={handlePhoneChange}
//               inputClass="w-full p-3 border rounded-md bg-white text-gray-600"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Organization</label>
//             <input
//               type="text"
//               name="organization"
//               value={formData.organization}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-md bg-white"
//               placeholder="Your organization"
//             />
//           </div>
//         </div>

//         {/* Course Name Selection */}
//         <div>
//           <label className="block text-gray-700 mb-2">Course name</label>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
//             {courses.map((course, index) => (
//               <label key={index} className="flex items-center space-x-2 text-gray-600">
//                 <input
//                   type="checkbox"
//                   name="course"
//                   value={course}
//                   checked={formData.course.includes(course)}
//                   onChange={handleChange}
//                   className="w-4 h-4 appearance-none border border-gray-400 rounded-sm bg-white checked:bg-blue-600 checked:border-transparent focus:ring-2 focus:ring-blue-400"
//                 />
//                 <span>{course}</span>
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* Message */}
//         <div>
//           <label className="block text-gray-700">Your message</label>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full p-3 border rounded-md h-24 bg-white"
//             placeholder="Write your message here..."
//           ></textarea>
//         </div>

//         {/* Submit Button */}
//         <div className="text-center">
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
//           >
//             Contact Us
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Contactform;
