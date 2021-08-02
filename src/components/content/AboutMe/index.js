import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function InfoSection({ title, desc, parity }) {
  return (
    <div className="container info-section">
      <div className={`about-image ${parity ? 'second' : 'first'}`}>

      </div>
      <div className={`about-text ${parity ? 'first' : 'second'}`}>
        <div className="h3">{title}</div>
        <div className="body">{desc}</div>
      </div>
    </div>
  )
}
AboutMe.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  parity: PropTypes.string.isRequired,
}


function AboutMe({ id }) {
  const content = [
    { title: 'Mockups in a blink of an eye', desc: 'From wireframing to prototyping, low to high fidelity, get comprehensive and beautifully designed user-experiences quick & easily' },
    { title: 'Seamless implementations', desc: 'Efficiently creating responsive and interactive user-interfaces using modern languages and frameworks' },
    { title: 'Code that’s designed to last', desc: 'Writing scalable, clean, and organized solutions to stand the test of time using data structures and algorithms that fit' }
  ];

  return (
    <div id={id} >
      <div className="header-container">
        <div className="h3 bold">Why Hire Me?</div>
        <div className="section-container">
          {content.map((section, i) => (
            <InfoSection title={section.title} desc={section.desc} parity={i % 2 === 0} />
          ))}
        </div>
        <br />
      </div>
    </div>
  );
}

AboutMe.propTypes = {
  id: PropTypes.string.isRequired
}

export default AboutMe;