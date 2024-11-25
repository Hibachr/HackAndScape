import Infos from "./Infos";
import React from "react";

const RegForm = () => {
  return (
    <section id="register" className="registration-section">
      <div className="registration-container">
        {/* Left Section: Infos */}
        <Infos />

        {/* Right Section: Form */}
        <div className="form-container">
          <h2 className="form-title">Registration Form</h2>
          <form className="form-grid">
            <div className="form-group">
              <label htmlFor="name">name :</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="family-name">family name :</label>
              <input
                type="text"
                id="family-name"
                placeholder="Enter your family name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="university">university :</label>
              <input
                type="text"
                id="university"
                placeholder="Enter your university"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age :</label>
              <input
                type="number"
                id="age"
                placeholder="Enter your age"
                min="17" 
                required
               />
            </div>
            <div className="form-group">
              <label htmlFor="email">email :</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-email">confirm email :</label>
              <input
                type="email"
                id="confirm-email"
                placeholder="Confirm email"
                required
              />
            </div>
            <div className="form-button">
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegForm;
