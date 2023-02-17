/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ProjectCard = ({ title, description, imgUrl, liveLink, sourceLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="pic 1" className="pr-pic" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div>
            <button type="button" className="btn-link" onClick={() => window.open(liveLink)}>See live</button>
            <button type="button" className="btn-link" onClick={() => window.open(sourceLink)}>See source</button>
          </div>
        </div>
      </div>
    </Col>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  sourceLink: PropTypes.string.isRequired,
};

export default ProjectCard;
