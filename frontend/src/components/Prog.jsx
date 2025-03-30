import React, { useState } from "react";

const Prog = () => {
  const [selectedTab, setSelectedTab] = useState("Educational visit");

  const tabs = [
    "Educational visit",
    "Experiential Learning Visit",
    "Special events",
  ];

  const content = {
    "Educational visit": {
      title: "Educational visit",
      description:
        "Yearly educational visits are planned in some of the important places of learning in the city and neighbouring districts. These visits are planned, and executed by the teachers and students together.",
    },
    "Experiential Learning Visit": {
      title: "Experiential Learning Visit",
      description:
        "Experiential learning visits offer students an opportunity to engage in hands-on activities outside the classroom, enhancing their critical thinking and problem-solving skills.",
    },
    "Special events": {
      title: "Special events",
      description:
        "Special events are organized to celebrate important days, foster creativity, and encourage students' active participation in various co-curricular activities.",
    },
  };

  return (
    <section style={{ padding: "40px", backgroundColor: "#fff" }}>
      <h2 style={{ fontSize: "28px", fontWeight: "bold", textAlign: "left", color: "black" }}>
        Outreach Program
      </h2>
      <p style={{ color: "#666", textAlign: "left" }}>
        The Outreach Program is an essential component of DMC’s curriculum,
        designed to give students meaningful, real-world experiences. The
        primary goal is to enhance their learning beyond the classroom by
        engaging in diverse activities in different contexts. Through these
        initiatives, students strengthen their communication skills, build
        confidence, and develop a sense of camaraderie while positively
        impacting society.
      </p>

      <div className="flex flex-wrap justify-start gap-2 mt-5 bg-white border p-2 rounded-lg w-fit">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-4 py-2 text-lg font-medium rounded-md transition-all ${
              selectedTab === tab
                ? "bg-blue-100 text-blue-700 font-bold"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>


      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <div style={{ flex: 2, position: "relative", overflow: "hidden" }}>
          <div className="image-container">
            <img
              src="/images/edu-tour.png"
              alt="Educational Tour"
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <div className="hover-overlay">
              <h3>Educational Tour</h3>
              <p>18 August 2024</p>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
          {[{ src: "/images/group.png", title: "Group Activity", date: "5 July 2024" },
            { src: "/images/discussion.png", title: "Discussion", date: "20 June 2024" }].map((image, index) => (
            <div key={index} className="image-container">
              <img
                src={image.src}
                alt={image.title}
                style={{ width: "100%", borderRadius: "10px", height: "100%" }}
              />
              <div className="hover-overlay">
                <h3>{image.title}</h3>
                <p>{image.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h3
        style={{
          fontSize: "22px",
          fontWeight: "bold",
          marginTop: "20px",
          textTransform: "capitalize",
          color: "#000",
        }}
      >
        {content[selectedTab].title}
      </h3>
      <p style={{ color: "#666", maxWidth: "90%" }}>
        {content[selectedTab].description}
      </p>

      {/* CSS Styles */}
      <style>
        {`
          .image-container {
            position: relative;
            border-radius: 10px;
            overflow: hidden;
          }
          .hover-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3), transparent);
            color: white;
            padding: 10px;
            border-radius: 0 0 10px 10px;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
          }
          .image-container:hover .hover-overlay {
            opacity: 1;
          }
          .hover-overlay h3 {
            font-size: 16px;
            margin: 0;
          }
          .hover-overlay p {
            font-size: 12px;
            margin: 0;
            color: #ccc;
          }
        `}
      </style>
    </section>
  );
};

export default Prog;
