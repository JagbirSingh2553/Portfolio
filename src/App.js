import React from 'react';
import Header from './Components/Header/header';
import About from './Components/About/about';
// import Services from './components/Services';
import Experience from './Components/Experience/experience';
import Contact from './Components/Contact/contact';
import './App.css';
import Projects from './Components/Projects/projects';
import Services from './Components/Services/services';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Experience />
        <Projects />
        <Services />
        <Contact />
      </main>
    </div>
  );
}

export default App;
