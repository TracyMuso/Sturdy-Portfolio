/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-wrap-multilines */
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import ProjectCard from './ProjectCard';
import projImg1 from '../img/screenshot-dsk.png';
import projImg2 from '../img/space-travelersUI.png';
import projImg3 from '../img/roninUI.png';
import projImg4 from '../img/bmac-sc.png';
import projImg5 from '../img/Homepage.png';
import colorSharp2 from '../img/color-sharp2.png';
import melodyRentals from '../img/melody.png';
import 'animate.css';

const Projects = () => {
  const projects = [
    {
      title: 'Space Travellers Hub, a Rocket booking app, made with React, Redux, and bootstrap',
      description: 'https://github.com/TracyMuso/space-travelers-hub-online',
      imgUrl: projImg2,
      liveLink: 'https://space-uber.netlify.app/',
      sourcelink: 'https://github.com/TracyMuso/space-travelers-hub-online',
    },
    {
      title: 'Melody Rentals, an Instrument rental API, made with Ruby on Rails, PostgreSQL, and Render',
      description: 'https://github.com/TracyMuso/MelodyRentals-BackEnd',
      imgUrl: melodyRentals,
      liveLink: 'https://melody-rentals.onrender.com/api/v1/instruments.json',
      sourceLink: 'https://github.com/TracyMuso/MelodyRentals-BackEnd',
    },
    {
      title: 'MovieLicious, Movie info website, made with Javascript, TVmaze API, and Bootstrap',
      description: 'https://github.com/TracyMuso/Capstone-project-2',
      imgUrl: projImg5,
      liveLink: 'https://tracymuso.github.io/Capstone-project-2/dist/',
      sourceLink: 'https://github.com/TracyMuso/Capstone-project-2',
    },
    {
      title: 'Ronin Finance, a Crypto tracker app, made with React, Redux, and Bootstrap',
      description: 'https://github.com/TracyMuso/Ronin-Finance',
      imgUrl: projImg3,
      liveLink: 'https://ronin-finance.netlify.app/',
      sourceLink: 'https://github.com/TracyMuso/Ronin-Finance',
    },
    {
      title: 'Blockchain Summit, a Conference website made with HTML, CSS, and Javascript',
      description: 'https://github.com/TracyMuso/Capstone-project-1',
      imgUrl: projImg1,
      liveLink: 'https://tracymuso.github.io/Capstone-project-1/',
      sourceLink: 'https://github.com/TracyMuso/Capstone-project-1',
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Projects</h2>
                  <p>Here are some of my noteworthy projects. They are single page applications built with react, bootstrap and webpack</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? 'animate__animated animate__slideInUp' : ''}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            );
                          })
                        }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="pic bg" />
    </section>
  );
};

export default Projects;
