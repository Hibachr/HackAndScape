import React, { useState } from "react";
import Logo from "../assets/logo.png";
import RegForm from "./RegForm";

const Infos = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="infos">
      {/* Left Part */}
      <div className="left-part">
        <h2>
          Hack<span className="blue-text">&</span>Scape
        </h2>
        <h5>SOLVE, DESIGN, ESCAPE..</h5>
        <p>
          Hack & Scape est une compétition de développement et problem-solving
          de trois jours ouverte à toutes les personnes du monde entier.
          Participez à des défis en design, développement mobile, web et
          cybersécurité.
        </p>
        <button className="know-more-btn">Know More</button>
      </div>

      {/* Right Part */}
      <div className="right-part">
        <img src={Logo} alt="logo" className="logo-img" />
        <button className="register-button" onClick={handleOpenModal}>
          Register
        </button>
      </div>

      {/* Modal */}
      {showModal && <RegForm onClose={handleCloseModal} />}
    </div>
  );
};

export default Infos;
