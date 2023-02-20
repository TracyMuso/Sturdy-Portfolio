import { Col, Row, Container } from 'react-bootstrap';

const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <h2>About me</h2>
          <p>
            Software developer by day, blockchain enthusiast by night. My interest in software development started back in 2021 and my interest in blockchain development started way before that. I dabbled in smart contracts for a bit and decided to learn fullstack development instead. Last year February, I enrolled in Microverse, an online school that teaches fullstack development with real world projects. I collaborate with international developers everyday and simultaneously build frontend and backend projects with React and Ruby on Rails, which is my preferred technology. Wanna get in touch?
            {' '}
            <a href="#connect">Contact me</a>
            {' '}
            <br />
            If you`d like to enroll or learn more about Microverse, please click
            {' '}
            <a href="https://www.microverse.org/?grsf=7r7yev">here</a>
            {' '}
            !
          </p>
        </Row>
        <br />
        <h3>Here are some technologies I work with: </h3>
        <Row>
          <Col size={12} sm={6} md={4}>
            <div className="skill-card">
              <h2>Frontend</h2>
              <ul className="skill-set">
                <li>Javascript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </Col>
          <Col xs={6} md={4}>
            <div className="skill-card">
              <h2>Backend</h2>
              <ul className="skill-set">
                <li>Ruby</li>
                <li>Ruby on Rails</li>
                <li>Postman</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </Col>
          <Col xs={6} md={4}>
            <div className="skill-card">
              <h2>Tools and Methods</h2>
              <ul className="skill-set">
                <li>Git</li>
                <li>Gitflow</li>
                <li>Netlify</li>
              </ul>
            </div>
          </Col>
        </Row>
        <br />
      </Container>
      <br />
    </section>
  );
};

export default About;
