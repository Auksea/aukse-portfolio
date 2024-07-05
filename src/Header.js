import React, { useState } from 'react';
import "./Header.css";

function Header() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:thinlightline88@gmail.com';
  };

  return (
    <header className="header">
      <div className="content">
        <h1 className='headingOfHeader'>Professional Web Development</h1>
        <p className='citation'>“Websites promote you 24/7: No employee will do that.” – Paul Cookson</p>
        <button className="email-button" onClick={handleEmailClick}>Email me to discuss your project</button>
      </div>
    </header>
  );
}

export default Header;

