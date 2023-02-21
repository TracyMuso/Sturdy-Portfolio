/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container, Row, Col } from 'react-bootstrap';
import navIcon1 from '../img/nav-icon1.svg';
import githublogo from '../img/github-logo.png';
import navIcon3 from '../img/nav-icon3.svg';
import medium from '../img/medium-new-icon.png';
import wellfound from '../img/wellfound.jpg';
import linkedin from '../img/linkedin-svgrepo-com.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1>TM</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            {/* <div className="social-icon-foot">
              <span className="foot-icon" onClick={() => window.open('https://www.linkedin.com/in/tracy-muso/')}><img src={linkedin} alt="linkedIn icon" className="footer-icons" /></span>
              <span className="foot-icon" onClick={() => window.open('https://github.com/TracyMuso')}><img src={githublogo} alt="github icon" className="footer-icons" /></span>
              <span className="foot-icon" onClick={() => window.open('https://medium.com/@musongoletracy')}><img src={medium} alt="instagram icon" className="footer-icons" /></span>
            </div> */}
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
