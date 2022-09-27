import React from 'react';
import NavBar from './components/navbar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import ProjectCard from './components/ProjectCard';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
