import React from "react";
import PropTypes from "prop-types";

const RegForm = ({ onClose }) => {

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); 
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="close-modal-button" onClick={onClose}>
          &times;
        </button>
        <div className="registration-container">
          <div className="form-container">
            <h3 className="form-title">Registration Form</h3>
            <form className="form-grid">
              <div className="form-group">
                <label htmlFor="name">first name :</label>
                <input type="text" id="name" placeholder="Enter your first name" required />
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
      </div>
    </div>
  );
};

RegForm.propTypes = {
  onClose: PropTypes.func.isRequired, 
};

export default RegForm;
