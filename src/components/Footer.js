/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container, Row, Col } from 'react-bootstrap';
import navIcon1 from '../img/nav-icon1.svg';
import githublogo from '../img/github-logo.png';
import navIcon3 from '../img/nav-icon3.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1>TM</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/tracy-muso/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/TracyMuso"><img src={githublogo} alt="Icon" /></a>
              <a href="https://instagram.com/tracy_muso"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
