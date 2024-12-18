import  { useState } from "react";
import './App.css';
import Header from './components/Header.jsx';
import Infos from './components/Infos.jsx';
import About from './components/About.jsx';
import Agenda from './components/Agenda.jsx';
import Sponsors from './components/Sponsors.jsx';
import ContactUs from './components/ContactUs.jsx';
import RegForm from './components/RegForm.jsx';
import Footer from "./components/Footer.jsx";
import Mentors from "./components/Mentors.jsx"
import Faq from "./components/FAQ.jsx";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div>
        <Header onRegisterClick={toggleModal} />
        <main>
          <Infos />
          <About />
          <Agenda />
          <Mentors/>
          <Sponsors />
          <Faq/>
          <ContactUs />
        </main>
        {isModalOpen && <RegForm onClose={toggleModal} />}
        <Footer/>
      </div>
    </>
  );
}

export default App;
