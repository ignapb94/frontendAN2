import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Legal from './components/Legal';
import Cookies from './components/Cookies';
import Page404 from './components/Page404';
import Home from './pages/home';
import Customizer from './pages/customizer';
import { useSnapshot } from 'valtio';
import state from './store';
import CookiesBanner from './components/CookiesBanner';
import { NavLink } from 'react-router-dom';


// Define your semi-transparent modal component
function SemiTransparentModal({ isOpen, onClose }) {

  const handleClick = () => {

    state.showModal=false

  }



  if (state.showModal){
  return (
    <div
      
      onClick={onClose}
      style={{width:"100%",height:state.isMobile ? "600px" : "1000px",position:"fixed", backgroundColor: 'rgba(0, 0, 0, 0.5)',zIndex:99999999, textAlign:"center"}}
    >
      {/* Your modal content here */}
    <table style={{width:"100%",height:state.isMobile ? "600px" : "1000px"}}>
      <tbody>
        <tr style={{width:"100%",height:"20%"}}>

        </tr>
        <tr style={{width:"100%",height:"60%"}}>
          <td  style={{width:"20%",height:"100%"}}>
            
          </td>
          <td  style={{width:"60%",height:"100%", backgroundColor: 'rgba(0, 0, 0, 0.5)', color:"white", fontSize:state.isMobile ? 30 : 40, zIndex:999999999, textAlign:"center"}}>
          <NavLink
            to="/"
            onClick={handleClick}>
              Inicio
            
            
          </NavLink>
            <br></br>
            <br></br>
          <NavLink
            to="/sobre-drive-team"
            onClick={handleClick}>
              Sobre Drive Team
            
            
          </NavLink>
            <br></br>
            <br></br>
            <NavLink
            to="/legal"
            onClick={handleClick}
            >Politica de privacidad
          </NavLink>
          <br></br>
          <br></br>
          <NavLink
            to="/sobre-drive-team"
            onClick={handleClick}>
              Blog
          </NavLink>
            <br></br>

            
          </td>
          <td  style={{width:"20%",height:"100%"}}>
            
          </td>

        </tr>

        <tr style={{width:"100%",height:"20%"}}>

        </tr>
      </tbody>
    </table>
      
    </div>
  );
}
}

function App() {
  const containerRef = useRef(null);
  const [showFooter, setShowFooter] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  var scrollPosition
  const setScrollPosition= (scr) => {
    scrollPosition=scr
  }

  const handleScroll = () => {

    
    const container = containerRef.current;
    if (container) {
      if (state.rollindDir!==(scrollPosition-container.scrollTop)/160){
        state.rollindDir=(scrollPosition-container.scrollTop)/160
      }
      setScrollPosition(container.scrollTop);
      const isScrolledToBottom = container.scrollHeight - container.scrollTop <= container.clientHeight+100;
      console.log(container.scrollHeight- container.scrollTop,  container.clientHeight)

      setShowFooter(isScrolledToBottom);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const snap = useSnapshot(state);


  return (
    <main className="app transition-all ease-in" style={{ overflow: 'auto' }} ref={containerRef}>
      <BrowserRouter>
      <SemiTransparentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <Header style={{ backgroundColor: 'blue' }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-drive-team" element={<About />} />
          <Route path="/*" element={<Page404 />} />
          <Route path="/error-page" element={<Page404 />} />
          <Route path="/redirect" element={<Navigate to="/error-page" />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>
        {showFooter && <Footer />}
        <CookiesBanner />
      </BrowserRouter>

      {/* Render the modal */}
      
    </main>
  );
}

export default App;