import TrackVisibility from 'react-on-screen';
import { Row, Col, Container } from 'react-bootstrap';
import contactImg from '../img/contact-img.svg';

const ContactInfo = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              <h2>Contact Info</h2>
              <p>If you want ot get in touch, please contact me from my email or my number which is also connected to whatsapp</p>
              <p>
                <span>Phone:</span>
                {' '}
                +260 779 431 887
              </p>
              <p>
                <span>Gmail: </span>
                <button type="button" className="email-btn">
                  <a href="mailto:musongoletracy@gmail.com">Say hello</a>
                </button>
              </p>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactInfo;
