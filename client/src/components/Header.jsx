import PropTypes from "prop-types";
import Logo from "../assets/logo.svg";

const Header = ({ onRegisterClick }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#agenda">Agenda</a></li>
          <li><a href="#sponsors">Sponsors</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div>
        <button onClick={onRegisterClick} className="register-button">
          Register
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  onRegisterClick: PropTypes.func.isRequired, 
};

export default Header;
