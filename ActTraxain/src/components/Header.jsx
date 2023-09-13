import React, { useEffect, useState } from 'react';
import { useSnapshot } from 'valtio';
import state from '../store';
import { NavLink } from 'react-router-dom';
import logoAvif from '/logonuevo.avif';
import logoPNG from '/logonuevo.png';
import Cross from '/cross.png'
import Barras from '/barras.png'

const Header = () => {
  const snap = useSnapshot(state);
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

  const handleClick = () => {
    // Modify the state when the button is clicked
    if (state.showModal){
      state.showModal=false
    }else{
      state.showModal=true
    }
    
  };

    const logoStyle = {
    width: isMobile ? '150px' : '200px',
    height: isMobile ? '70px' : '100px',
    objectFit: 'contain',
    display: 'flex',
    position: 'fixed',
    zIndex: 9999999999999999999999999,
  };
  const menucitoStyle = {
    width: isMobile ? '70px' : '100px',
    height: isMobile ? '30px' : '50px',
    objectFit: 'contain',
    display: 'flex',
    position: 'fixed',
    zIndex: 9999999999999999999999999,
  };
  var menucito
  if (state.showModal){
    menucito = <img
    src={Cross}
    alt="logo"
    style={menucitoStyle}
    onError={(e) => {
      src = Cross;
    }}
  />
  }else{
    menucito = <img
    src={Barras}
    alt="logo"
    style={menucitoStyle}
    />

  }



  const headerStyle = {
    width: '100%',
    height: isMobile ? '70px' : '100px',
    objectFit: 'contain',
    display: 'flex',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    position: 'fixed',
    top: 0,
    zIndex: 9999999999999999,
    //borderBottom: '3px solid grey', // Add a white border to the bottom
  };

  const masStyle = {
    display: 'flex',
    alignItems: 'center', // Align the content vertically in the middle
    fontSize:28,
    color:'white',
    zIndex: 999999999999999999999999,
  };

  return (
    <div style={headerStyle}>
      <table style={headerStyle}>
        <tbody style={headerStyle}>
          <tr style={headerStyle}>
            <td style={{ width: '80%' }}>
            <NavLink
            to="/">
            <img
                src={logoAvif}
                alt="logo"
                style={logoStyle}
                onError={(e) => {
                  e.target.src = logoPNG;
                }}
              />
            </NavLink>
              
            </td>
            <td style={masStyle}>
              <button
              style={masStyle}
              onClick={handleClick}
                >
                  {menucito}
              </button>
              {/* <NavLink  className="btn btn-sm btn-block nav-btn" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"  
                          to="/sobre-drive-team">
                    Mas
                  </NavLink> */}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Header;