import React from 'react';
import NavBar from './components/navbar';
import Banner from './components/Banner';
import About from './components/About';
import Skills from './components/Skills';
import ContactInfo from './components/ContactInfo';
import Projects from './components/Projects';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <ContactInfo />
      <Footer />
    </div>
  );
}

export default App;
