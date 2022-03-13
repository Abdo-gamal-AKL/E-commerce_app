import React from "react";
import image from "../../assets/Profile IMG.jpg";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="background">
      <div className="container">
        <img src={image} alt="Profile IMG" />
        <h2>Hello, I'm Abdelrahman Gamal</h2>
        <p>Frontend Developer</p>
      </div>
    </div>
  );
};

export default AboutUs;
