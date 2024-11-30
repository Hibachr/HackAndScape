import './App.css'
import Header from './components/Header.jsx'
import RegForm from './components/RegForm.jsx'
import About from './components/About.jsx'
import Agenda from './components/Agenda.jsx'
function App() {
  
  return (
    <>
      <div>
      <Header />
      <main>
        <RegForm />
        <About />
        <Agenda/>
      </main>
      </div>
    </>
  )
}

export default App
