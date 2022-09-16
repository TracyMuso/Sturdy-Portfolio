/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-quotes */
/* eslint-disable import/prefer-default-export */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect, useState } from 'react';
import logo from './.assets./logo.svg';
import navIcon1 from './.assets./nav-icon1.svg';
import navIcon2 from './.assets./nav-icon2.svg';
import navIcon3 from './.assets./nav-icon3.svg';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      }
      setScrolled(false);
    };
    window.addEventListener('scroll', onscroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar className={scrolled ? 'scrolled' : ''} expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggler-icon'>Hey</span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
href="#home"
          className={activeLink === 'home' ? 'active-navbar-link' : 'navbar-link'}
          onClick={onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
href="#link"
          className={activeLink === 'skills' ? 'active-navbar-link' : 'navbar-link'}
          onClick={onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link href="#link" className={activeLink === 'projects' ? 'active-navbar-link' : 'navbar-link'} onClick={onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='#'><img src={navIcon1} alt="" /></a>
              <a href='#'><img src={navIcon2} alt="" /></a>
              <a href='#'><img src={navIcon3} alt="" /></a>
              <button type='button' className='' onClick={() => console.log('lets connect')}>
                <span>Lets connect!</span>
              </button>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
