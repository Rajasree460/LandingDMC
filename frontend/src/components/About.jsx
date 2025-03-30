import React from "react";

const About = () => {
  const sections = [
    {
      title: "Why DMC",
      image: "/images/dmc.png",
      description: [
      "Established in 2016, Deeniyat Muallima College is a community-based college that aims to empower Muslim women in West Bengal as the drop-out rate is high among them.",
      "Founded with the vision of blending Islamic education with modern knowledge, the college aimed to empower Muslim girls and enhance their capabilities to contribute equally to human well-being.",
    ],
      points: [
        "DMC is keen to set up a model center for learning, focusing on the collective learning endeavor of the girls.",
        "We have uniquely combined Islamic education and general education, enabling women to contribute equally to human well-being.",
      ],
      reverse: false,
    },
    {
      title: "History",
      image: "/images/history.png",
      description: "",
      points: [
        "Deeniyat Muallima College (DMC) was founded in 2016 under the leadership of Sheikh Hyder Ali.",
        "Key associates Asfar, Mohsin, Hannan, and Rashidul Kandari played active roles in resource mobilization.",
        "In 2016, the college began on a temporary campus with a few teachers, guided by Principal Janab Ruhul Amin, who later received the 'Shikkha Ratna' for his contribution to education.",
        "By 2018, DMC expanded and, with support from Sheikh Masud Rahman, acquired a five-story building in Garpa, Santragachi.",
        "The institution has continuously evolved, striving to provide quality education and better opportunities for Muslim girls.",
      ],
      reverse: true,
    },
    {
      title: "Mission",
      image: "/images/mission.png",
      description:[
        "At DMC, we aim to foster an inclusive and empowered community of Muslim girls guided by Islamic values and modern education, aiding the transition to higher education.",
        "We are committed to providing academic opportunities for Muslim girls for higher education and instilling diverse skills that empower them to secure meaningful employment opportunities.",
        "We aim to build a culture of collective learning through innovative outreach programs, group learning, and collective actions.",
      ],
      points: [
        
      ],
      reverse: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      
      {/*  About Us Heading */}
      <div className="flex items-center justify-center mb-10">
        <div className="w-16 h-1 bg-blue-500 mr-4"></div>
        <h1 className="text-3xl sm:text-4xl font-bold text-black">About Us</h1>
        <div className="w-16 h-1 bg-blue-500 ml-4"></div>
      </div>

      {/* Sections */}
        <div className="max-w-9xl mx-auto space-y-12">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`bg-white shadow-md px-6 sm:px-8 py-6 rounded-lg border border-gray-300 flex flex-col ${
                section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-6`}
            >
              {/* Image */}
              <img
                src={section.image}
                alt={section.title}
                className="w-full sm:w-[350px] rounded-lg"
              />

              {/* Text Content */}
              <div>
                <h2 className="text-2xl font-bold text-blue-700">{section.title}</h2>

                {/* First description as a separate paragraph */}
                <p className="py-2 text-gray-600">{section.description[0]}</p>

                {/* Middle description(s) in a single paragraph */}
                {section.description.length > 2 && (
                  <p className="text-gray-600">{section.description.slice(1, -1).join(" ")}</p>
                )}

                {/* Last description as a separate paragraph */}
                {section.description.length > 1 && (
                  <p className="text-gray-600 mt-2">{section.description[section.description.length - 1]}</p>
                )}

                {/* List of points */}
                {section.points && section.points.length > 0 && (
                  <ul className="list-disc pl-6 text-gray-600 space-y-1 mt-2">
                    {section.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                )}

                {/* Know More Link */}
                <p className="text-blue-700 font-bold mt-4 inline-block cursor-pointer hover:underline">
                  Know More
                </p>
              </div>
            </div>
          ))}
        </div>

    </div>
  );
};

export default About;
