/* eslint-disable react-hooks/exhaustive-deps */
import { Row, Container, Col } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';
import { useEffect, useState } from 'react';
import { ArrowDownCircle } from 'react-bootstrap-icons';
import headerImg from '../img/header-img.svg';
import 'animate.css';

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ['Backend Developer', 'Frontend Developer', 'Web Designer'];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker); };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {'Hi! I\'m Tracy, a'}
                    {' '}
                    <span className="txt-rotate" data-period="1000" data-rotate='[ "Backend Developer", "Frontend Developer", "Web Designer" ]'><span className="wrap">{text}</span></span>
                  </h1>
                  <p>I am a fullstack developer specializing in building and designing single-page applications and API`s. I am an open-source enthusiast and mentor to 2 junior developers.</p>
                  <button type="button" className="btn-p">
                    <a href="#projects">Check out my projects &#8595;</a>
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
