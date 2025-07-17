import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Aurora from './components/Aurora';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Aurora />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Contact />
      <Resume />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
