import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function SocialButton() {
  return (
    <div className= "icons">
    <FontAwesomeIcon icon={faFacebook} className="custom-icon" style={{color: "#000000", fontSize: "40px"}} />
    <FontAwesomeIcon icon={faGithub} className="custom-icon" style={{color: "#000000", fontSize: "40px"}} />
    <FontAwesomeIcon icon={faLinkedin} className="custom-icon" style={{color: "#000000", fontSize: "40px"}} />
    </div>
  );
}

export default SocialButton;