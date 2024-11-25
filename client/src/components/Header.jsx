import React from "react";

const Header = () => {
  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo">
        {/* Uncomment the line below and provide the correct path for your logo */}
        {/* <img src="D:/ESMS/website/client/assets/logo.png" alt="Logo" /> */}
        <h1>LOGO</h1>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#agenda">Agenda</a></li>
          <li><a href="#sponsors">Sponsors</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Register Button */}
      <div>
        <a href="#register" className="register-button">
  Register
</a>
      </div>
    </header>
  );
};

export default Header;
