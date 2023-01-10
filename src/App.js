import './App.css';
import Header from './components/header/Header'
import Home from './components/home/Home'
import Qualification from './components/qualification/Qualification';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Certifications from './components/certifications/Certifications';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div>
      <Header/>
      <main className='main'>
        <Home/>
        <Qualification/>
        <Skills/>
        <Projects/>
        <Certifications/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
