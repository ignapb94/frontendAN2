import React, { useEffect, useState,} from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from  '../store';
import {Header, TextBig, TextSmall, TextSmallComponent, CustomButton } from '../components';
import Canvas from "../canvas";



const Home = () => {




    const snap = useSnapshot(state)

  //const [isMobileL, setIsMobile] = useState(2);

  let textBigStyle
  let textSmallStyle
  let bigBoxStyle 
  let smallBoxStyle = {backgroundColor:"blue", height: "200px" }
  var headerStyle = { width: '200px', height: '100px', objectFit: 'contain' }

  
    useEffect(() => {
      const handleResize = () => {

      

    

        //if (window.innerWidth < 768){
        //   setIsMobile(1)
        //   console.log("is mobile")
        //   textBigStyle = {color:"white", fontSize: 50, lineHeight: 1}
        //   textSmallStyle = {color:"white", fontSize: 14, lineHeight: 1.1,fontWeight: 400}
        //   bigBoxStyle = { height: "300px" }

        // }else{
        //   setIsMobile(0)
        //   console.log("is desktop")
        //   textBigStyle = {color:"white", fontSize: 100,lineHeight: 1}
        //   bigBoxStyle = {backgroundColor:"orange", height: "600px" }
        //   textSmallStyle = {color:"white", fontSize: 50,lineHeight: 1.1, fontWeight: 400}
        // }
        
        
          // let areWeMobile = window.innerWidth < 768
          // state.isMobile=areWeMobile
          
      };

      const handleScroll = () => {
        // Your code here to respond to the scroll event
        console.log('User scrolled!');
        
      };

      handleResize(); // Call it initially to set the state based on the current width
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('scroll', handleScroll);
          window.removeEventListener('resize', handleResize);
      };
  }, []);

  


    
    const lapseBetween = 3100
    const timesArray = [0,0,8100,18000]

    // var textBigStyle = {color:"white", fontSize: 95, lineHeight: 1}
    // var  bigBoxStyle = {backgroundColor:"orange", height: "600px" }
    // var textSmallStyle = {color:"white", fontSize: 50, lineHeight: 1.1,fontWeight: 400}
    // var headerStyle = { width: '200px', height: '100px', objectFit: 'contain' }
    // var smallBoxStyle = {backgroundColor:"blue", height: "200px" }

    //   if (isMobileL===1)  {
    //     console.log("is mobile")
    //     textBigStyle = {color:"white", fontSize: 50, lineHeight: 1}
    //     textSmallStyle = {color:"white", fontSize: 14, lineHeight: 1.1,fontWeight: 400}
    //     bigBoxStyle = { height: "300px" }
        
    //     //headerStyle = { width: '150px', height: '70px', objectFit: 'contain' }
    //     } else if (isMobileL===0) {
    //       console.log("desktop")
    //     textBigStyle = {color:"white", fontSize: 100,lineHeight: 1}
    //     bigBoxStyle = {backgroundColor:"orange", height: "600px" }
    //     textSmallStyle = {color:"white", fontSize: 50,lineHeight: 1.1, fontWeight: 400}
    //   }
        //headerStyle = { width: '200px', height: '100px', objectFit: 'contain' }

        const updateComponent = () => {
            
              var isMobileL
              if (window.innerWidth < 768){
                //setIsMobile(1)
                textBigStyle = {color:"white", fontSize: 60, lineHeight: 1}
                textSmallStyle = {color:"white", fontSize: 24, lineHeight: 1.1,fontWeight: 400}
                bigBoxStyle = { height: "300px" }
                state.isMobile=true
                isMobileL= true
      
              }else{
                //setIsMobile(0)
                textBigStyle = {color:"white", fontSize: 100,lineHeight: 1}
                bigBoxStyle = {backgroundColor:"orange", height: "600px" }
                textSmallStyle = {color:"white", fontSize: 50,lineHeight: 1.1, fontWeight: 400}
                state.isMobile=false
                isMobileL= false
              }

              var textSmall1 = (
                <TextSmallComponent style={{}}>
                  <h4 className='max-w-md  text-gray-600' style={textSmallStyle}>
                  Mantén control sobre la nómina de tus conductores con{' '}
                  <strong>
                    <a href='https://drive-team.es'>Drive-Team.es</a>
                  </strong>
                  </h4>
                </TextSmallComponent>
              );
            
              var textSmall2 = (
                <TextSmallComponent style={{}}>
                  <h4 className='max-w-md  text-gray-600' style={textSmallStyle}>
                  Cumple la normativa y olvídate de problemas laborales, con{' '}
                  <strong>Hacienda, y la Seguridad Social</strong>
                  </h4>
                </TextSmallComponent>
              );
              // var textSmall1 = <h2 className='max-w-md  text-gray-600' style={textSmallStyle}>Mantén control sobre la nómina de tus conductores con <strong><a href='https://drive-team.es'>Drive-Team.es</a></strong></h2>
              
              // var textSmall2 = <h2 className='max-w-md  text-gray-600' style={textSmallStyle}>Cumple la normativa y olvídate de problemas laborales, con <strong>Hacienda, y la Seguridad Social</strong></h2>
              var textBig1 = (
                <TextSmallComponent style={bigBoxStyle}>
                  <h1 className='max-w-md  text-gray-600' style={textBigStyle}>
                  Tienes los datos
                  </h1>
                </TextSmallComponent>
              );
            
              var textBig2 = (
                <TextSmallComponent style={bigBoxStyle}>
                  <h1 className='head-text' style={textBigStyle}>
                  Sácales provecho ahora
                    </h1>
                </TextSmallComponent>
              );
              
              const texts = ["",textBig1, textBig2]
              




              const textsSmall = ["",textSmall1,textSmall2]

              const button =(<CustomButton
              type="filled"
              title="Pruébalo"
              //handleClick={() => state.intro = false}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              cssStyles={{fontSize:state.isMobile ? 24 : 34,
                          backgroundColor:"#E7960B",
                          borderRadius: '1.975rem', // Rounded border
                          width: state.isMobile ? '200px' : '300px',
                          margin: '30px',
                          padding: '20px'}}
              action="external"
              to="https://drive-team.es"

  
          />)

          const button1 =(<CustomButton
            type="filled"
            title="Más info"
            //handleClick={() => state.intro = false}
            customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            cssStyles={{fontSize:state.isMobile ? 24 : 34,
                        backgroundColor:"#0B6EE7",
                        borderRadius: '1.975rem', // Rounded border
                        width: state.isMobile ? '200px' : '300px',
                        margin: '30px',
                        padding: '20px'}}
            action="internal"
            to="/sobre-drive-team"


        />)

              const buttons = ["", button1, button]
              

          

        

                return (
                  <AnimatePresence style={{ overflow: 'hidden'}}>
                    {/* <Header key="header"/> */}
                    
                        {snap.intro && (
                          <motion.div key="content" className="home" style={{position: 'absolute',zIndex:9999}}>
                            <div className="centered-content"> 
                              <div style={{height:'200px'}}>
                                  
                              </div>
                              <div style={{height:'300px'}}>
                                  <TextBig 
                                  texts={texts}
                                  textBigStyle={textBigStyle}
                                  bigBoxStyle={bigBoxStyle}
                                  isMobileL={isMobileL}
                                  timesArray={timesArray}
                                  lapseBetween={2000}
                                  className="text-container" /> 
                              </div>
                              <div style={{height:'200px'}}>
                                  
                                  <TextBig 
                                  texts={textsSmall}
                                  textBigStyle={textSmallStyle}
                                  bigBoxStyle={smallBoxStyle}
                                  isMobileL={isMobileL}
                                  timesArray={[0,8500,13000,18000]}
                                  lapseBetween={2000}
                                  className="text-container" /> 
                              </div>
                              <div style={{height:'200px', width:"100%",textAlign:state.isMobile ? "center" : "left"}}>
                                  
                                  <TextBig 
                                  texts={buttons}
                                  textBigStyle={textSmallStyle}
                                  bigBoxStyle={smallBoxStyle}
                                  isMobileL={isMobileL}
                                  timesArray={timesArray}
                                  lapseBetween={2000}
                                  className="text-container" /> 
                              </div>
                            </div>
                            
                          </motion.div>
                        )}
                  <Canvas style={{overflow: 'hidden', position:"absolute", zIndex:9990}} 
          
          />
                    </AnimatePresence>
                
                  
                  

                      
                )
              

      }

      return updateComponent()
        
        
}

export default Home