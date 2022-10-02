import { Col, Row, Container } from 'react-bootstrap';

const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <h2>About me</h2>
          <p>
            Hey, my name is Tracy Musongole. I am a fullstack developer and a blockchain developer. My interest in blockchain technology started back in 2020 and my interest in web development started last year in 2021. So I thought, why not integrate my love for both blockchain and web development? Fast forward to today, I am solo learning blockchain development and I enrolled in Microverse, an online school that teaches fullstack development with real world projects and collaborative learning with international developers. If you`d like to enroll, please click
            {' '}
            <a href="https://www.microverse.org/?grsf=7r7yev">here</a>
            {' '}
            to join!
            <br />
            Here are some technologies I work with:
          </p>
          <div className="skill-grid">
            <ul className="skill-set">
              <li>Javascript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>HTML</li>
            </ul>
            <ul className="skill-set">
              <li>Solidity</li>
              <li>Truffle</li>
              <li>CSS/SASS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default About;
