import './App.css'
import Header from './components/Header.jsx'
import RegForm from './components/RegForm.jsx'
import About from './components/About.jsx'
import Agenda from './components/Agenda.jsx'
import Sponsors from './components/Sponsors.jsx'
import ContactUs from './components/ContactUs.jsx'
function App() {
  
  return (
    <>
      <div>
      <Header />
      <main>
        <RegForm />
        <About />
        <Agenda/>
        <Sponsors />
        <ContactUs />
      </main>
      </div>
    </>
  )
}

export default App
