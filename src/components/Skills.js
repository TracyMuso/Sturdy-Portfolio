/* eslint-disable react/jsx-boolean-value */
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../img/meter1.svg';
import meter2 from '../img/meter2.svg';
import meter3 from '../img/meter3.svg';
import colorSharp from '../img/color-sharp.png';

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
    // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <strong>My skill stack</strong>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={meter1} alt="pic" />
                  <h5>Rails</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="pic" />
                  <h5>Nodejs</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="pic" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="pic" />
                  <h5>Rails</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="pic 2" />
    </section>
  );
};

export default Skills;
