import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";

function Header() {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  return (
    <header className="header">
      <div className="content">
        <h1>Hey there <span role="img" aria-label="waving hand emoji">👋</span></h1>
        <h2>I am Aukse, Web developer</h2>
        <p className='citation'>“Websites promote you 24/7: No employee will do that.” – Paul Cookson</p>
        <div className="icons">
          <a href="https://www.linkedin.com/in/aukse17/" target="_blank" rel="noopener noreferrer" onClick={() => handleIconClick('linkedin')} className={activeIcon === 'linkedin' ? 'active' : ''}>
            <FontAwesomeIcon icon={faLinkedin} size="3x" className="icon-linkedin" />
          </a>
          <a href="mailto:thinlightline88@gmail.com" onClick={() => handleIconClick('email')} className={activeIcon === 'email' ? 'active' : ''}>
            <FontAwesomeIcon icon={faEnvelope} size="3x" className="icon-email" />
          </a>
          <a href="https://github.com/Auksea" target="_blank" rel="noopener noreferrer" onClick={() => handleIconClick('github')} className={activeIcon === 'github' ? 'active' : ''}>
            <FontAwesomeIcon icon={faGithub} size="3x" className="icon-github" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;

