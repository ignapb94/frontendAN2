import React, { useEffect, useState } from 'react';
import './Footer.css'; // Import your CSS file for styling
import { Link, NavLink } from 'react-router-dom';
import logoX from '/X.png';
import youtube from '/youtube.png';
import insta from '/insta.png';
import linkedin from '/linkedin.png';

import state from '../store';

const Footer = () => {
  // Get the current domain (hostname)
  const currentDomain = window.location.hostname;

  // Specify the route
  const routeAbout = '/sobre-drive-team'; // Change this to your desired route
  const routeLegal = '/legal'; // Change this to your desired route

  // Create the full URL by combining the current domain and the route
  const aboutUrl = `http://${currentDomain}${routeAbout}`;
  const legalUrl = `http://${currentDomain}${routeLegal}`;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      let areWeMobile = window.innerWidth < 768;
      state.isMobile = areWeMobile;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const logoStyle = {
    width: isMobile ? '150px' : '50px',
    height: isMobile ? '70px' : '50px',
    objectFit: 'contain',
    display: 'flex',
    position: 'fixed',
    zIndex: 9999999999999999999999999999,
  };
  return (
    <footer className="footer" style={{backgroundColor:"#4E4F4E"}}>
      <div className="footer-content">
        <div className="footer-section">
          <h3><NavLink
            to="/sobre-drive-team">About Us
            </NavLink></h3>
        </div>
        <div className="footer-section">
          <h3>Contacto</h3>
          <a mailto="ignacio@traxain.com">ignacio@traxain.com</a>
          <p>638269633</p>
        </div>
        <div className="footer-section">
          <h3>
          <NavLink
            to="/legal">Terms and Conditions
            </NavLink>
            </h3>
        </div>
        <div className="footer-section" style={{ display: 'flex', alignItems: 'center' }}>
          
          {/* Add social media icons or links here */}

          <table style={{width:"100%"}}>
          <tr style={{width:"100%"}}>
                <td style={{width:"33%"}}>
               
                </td>
                <td style={{width:"33%"}}>
                <h3>Follow Us</h3>

                </td>
                <td style={{width:"33%"}}>
                

                </td>
              </tr>
            <tbody style={{width:"100%"}}>
              <tr style={{width:"100%"}}>
                <td style={{width:"33%"}}>
                <a href="https://twitter.com/traxain" target="_blank" rel="noopener noreferrer">
                  <img
                    src={logoX}
                    alt="logo"
                    style={logoStyle}
                    onError={(e) => {
                      e.target.src = logoX;
                    }}
                  />
                </a>
                </td>
                <td style={{width:"33%"}}>
                <a href="https://www.linkedin.com/company/" target="_blank" rel="noopener noreferrer">
                  <img
                    src={linkedin}
                    alt="logo"
                    style={logoStyle}
                    onError={(e) => {
                      e.target.src = linkedin;
                    }}
                  />
                </a>

                </td>
                <td style={{width:"33%"}}>
                <a href="https://www.youtube.com/@traxain4839" target="_blank" rel="noopener noreferrer">
                  <img
                    src={youtube}
                    alt="logo"
                    style={logoStyle}
                    onError={(e) => {
                      e.target.src = youtube;
                    }}
                  />
                </a>

                </td>
              </tr>

            </tbody>

          </table>
          
          
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;