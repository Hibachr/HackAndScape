import React from "react";
import pic2 from "../assets/pic2.png";
import pic1 from "../assets/pic1.png";

const About = () => {
    return (
      <section id="about" className="about-section">
        <h2>ABOUT US</h2>      
        <div className="about-container">
        <div className="about-left">
        <p>At the heart of the Ultimate Hack&Scape Challenge is a passionate team dedicated to crafting an extraordinary experience. With expertise in event planning, design, and technology, </p>
        <img src={pic1} alt="pic1" />
        <p id="joinus">join us on 27th to 29th december 
            this year at the higher national 
            computer science school </p>
        </div>
        <div className="about-right">
            <img src={pic2} alt="pic2" />
            <p>we’ve come together to create a thrilling adventure that sparks creativity, teamwork, and problem-solving. Our mission is simple: to challenge, inspire, and bring people together for an unforgettable experience. Join us, and let’s unlock the fun together!</p>
        </div>
        </div>
      </section>
    );
  };
  
  export default About;
  