/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-quotes */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from '../img/logo.svg';
import navIcon1 from '../img/nav-icon1.svg';
import githublogo from '../img/github-logo.png';
import navIcon3 from '../img/nav-icon3.svg';
import medium from '../img/medium-new-icon.png';
import wellfound from '../img/wellfound.jpg';
import linkedin from '../img/linkedin-svgrepo-com.svg';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
        <Container>
          <Navbar.Brand href="/">
            <h1 className="logo">TM</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <span className="git-icon" onClick={() => window.open('https://www.linkedin.com/in/tracy-muso/')}><img src={linkedin} alt="linkedIn icon" className="github-icon" /></span>
                <span className="git-icon" onClick={() => window.open('https://github.com/TracyMuso')}><img src={githublogo} alt="github icon" className="github-icon" /></span>
                <span className="git-icon" onClick={() => window.open('https://medium.com/@musongoletracy')}><img src={medium} alt="instagram icon" className="github-icon" /></span>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};

export default NavBar;
