import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';

function CookiesBanner() {
  const [acceptedCookies, setAcceptedCookies] = useState(false);

  const acceptCookies = () => {
    setAcceptedCookies(true);
    // Save the acceptance status to localStorage
    localStorage.setItem('acceptedCookies', 'true');
  };

  // Check if the user has already accepted cookies (using localStorage)
  const localStorageAccepted = localStorage.getItem('acceptedCookies') === 'true';

  if (localStorageAccepted || acceptedCookies) {
    return null; // If cookies are accepted, don't render the banner
  }

  const bannerStyle = {
    position: 'fixed',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: '#f0f0f0', // Change the background color as needed
    padding: '10px',
    textAlign: 'center',
    boxShadow: '0px -2px 5px rgba(0, 0, 0, 0.2)',
    zIndex:9999999 // Optional: Add a shadow
  };

  const buttonStyle = {
    backgroundColor: '#007bff', // Change the button color as needed
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3', // Change the hover color as needed
  };

  return (
    <div style={bannerStyle}>
      <p>Usamos cookies en nuestra página web para ver cómo interactúas con ella. Al aceptarlas, estás de acuerdo con nuestro uso de dichas cookies. 
      <NavLink to={"/cookies"} >
      Política de Cookies.
    </NavLink></p>
    <button
        style={buttonStyle}
        onClick={acceptCookies}
        onMouseEnter={() => setButtonStyle(buttonHoverStyle)}
        onMouseLeave={() => setButtonStyle(buttonStyle)}
      >
        Accept
      </button>
    </div>
  );
}

export default CookiesBanner;