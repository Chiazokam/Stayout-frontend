import React from 'react';
import { Row, Col } from 'reactstrap';


const AboutBox = (props) => {
  const {
    className, src, alt, aboutText
  } = props;

  return (
    <Col md='4' className={`about-box ${className}`}>
      <div>
        <img className='about-image' src={src} alt={alt} />
        <p className='about-text'>{aboutText}</p>
      </div>
    </Col>
  );
};

export default AboutBox;
