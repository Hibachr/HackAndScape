import React from "react";
import logos from "../assets/Frame 42.png"
const Contact = () => {
    return ( 
        <section id="Contact" className="contact-section"><h2>Contact us</h2>
        <input type="email" id="email"  placeholder="your email..." name="email"></input>
          <img src={logos} alt="404" />
        </section>
    

        ); 
  };
  export default Contact