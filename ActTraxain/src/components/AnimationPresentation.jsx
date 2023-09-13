import React, { useEffect, useState, Suspense, useLayoutEffect, useRef } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from  '../store';

import { CustomButton, TextBig, TextSmall, IntersectionObserverComponent, TextSmallComponent  } from '../components';

import  { 
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation,
    slideStopSlideAnimation


} from '../config/motion'

import logoAvif from '/logonuevo.avif'
import logoPNG from '/logonuevo.png'




const AnimationPresentation = (props) => {


  //const isVisible = props["isVisible"]
  
    const [isMobileL, setIsMobile] = useState(false);
    useEffect(() => {
      const handleResize = () => {
          setIsMobile(window.innerWidth < 768); // You can adjust this threshold as needed
          
          let areWeMobile = window.innerWidth < 768
          state.isMobile=areWeMobile
          
      };

      handleResize(); // Call it initially to set the state based on the current width

      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

    const snap = useSnapshot(state)

    // const [secondsPassed, setSecondsPassed] = useState(0);

    const targetRef = useRef(null);



  

    // useEffect(() => {
    //     const startTime = new Date().getTime();

    //     const interval = setInterval(() => {
    //         const currentTime = new Date().getTime();
    //         const elapsedTimeInSeconds = Math.floor((currentTime - startTime) / 1000);
            
    //         setSecondsPassed(elapsedTimeInSeconds);
    //     }, 1000);
       
        
        
        




    // }, []);


    var textBigStyle
    var  bigBoxStyle
    var textSmallStyle
    var smallBoxStyle = {backgroundColor:"blue", height: "200px" }

    const updateComponent = () => {
            

      if (window.innerWidth < 768){
        //setIsMobile(1)
        
        textBigStyle = {color:"black", fontSize: 40, lineHeight: 1}
        textSmallStyle = {color:"black", fontSize: 24, lineHeight: 1.1,fontWeight: 400}
        bigBoxStyle = { height: "300px" }
        state.isMobile=true

      }else{
        //setIsMobile(0)
       
        textBigStyle = {color:"white", fontSize: 70,lineHeight: 1}
        bigBoxStyle = {backgroundColor:"orange", height: "600px" }
        textSmallStyle = {color:"white", fontSize: 30,lineHeight: 1.1, fontWeight: 400}
        state.isMobile=false
      }
      const textSmall1 = (
        <TextSmallComponent style={{}}>
          <h4 className='max-w-md  text-gray-600' style={textSmallStyle}>
          Drive-Team te ayuda a llevar el control de tu nómina de forma segura y automática, obteniendo los datos directamente del Tacógrafo
          </h4>
        </TextSmallComponent>
      );
    
      const textSmall2 = (
        <TextSmallComponent style={{}}>
          <h4 className='max-w-md  text-gray-600' style={textSmallStyle}>
          
            
          + Dashboard de productividad de cada conductor
          </h4>
        </TextSmallComponent>
      );
      const textSmall3 = (
          <TextSmallComponent style={{}}>
            <h4 className='max-w-md  text-gray-600' style={textSmallStyle}>
            + Pronostica y calcula las dietas
            </h4>
          </TextSmallComponent>
        );
      const textSmall4 = (
        <TextSmallComponent style={{}}>
          <h4 className='max-w-md  text-gray-600' style={textSmallStyle}>
          + Complementos de desplazamiento y nocturnidad
          </h4>
        </TextSmallComponent>
      );

      const textSmall5 = (
        <TextSmallComponent style={{}}>
          <h4 className='max-w-md  text-gray-600' style={textSmallStyle}>
          + Detecta y aclara las actividades sospechosas
          </h4>
        </TextSmallComponent>
      );

      const button =(<CustomButton
        type="filled"
        title="Aprende Más"
        //handleClick={() => state.intro = false}
        customStyles="w-fit px-4 py-2.5  text-sm"
        cssStyles={{fontSize:state.isMobile ? 24 : 34,
                    color:"white",
                    backgroundColor:"#0B6EE7",
                    borderRadius: '1.975rem', // Rounded border
                    width: state.isMobile ? '200px' : '300px',
                    margin: '30px',
                    padding: '20px',
                    fontWeight: "light"}}
        action="internal"
        to="/sobre-drive-team"


    />)

    const button2 =(<CustomButton
      type="filled"
      title="Pruébalo"
      //handleClick={() => state.intro = false}
      customStyles="w-fit px-4 py-2.5  text-sm"
      cssStyles={{fontSize:state.isMobile ? 24 : 34,
                  color:"white",
                  backgroundColor:"#43980D",
                  borderRadius: '1.975rem', // Rounded border
                  width: state.isMobile ? '200px' : '300px',
                  margin: '30px',
                  padding: '20px',
                  fontWeight: "light"}}
      action="external"
      to="https://drive-team.es"
      />)


      let buttons
      
      
      if ( state.isMobile){
      buttons=(<table style={{width:"100%"}}>
                    <tbody style={{width:"100%"}}>
                      <tr style={{width:"100%"}}>
                      
                          <td style={{width:"100%"}}>
                            {button}
                          </td>
                        </tr>

                        <tr style={{width:"100%"}}>
                          <td style={{width:"100%"}}>
                            {button2}
                          </td>
                        
                      </tr>
                    </tbody>
                  </table>
                  )
                }else{
                  buttons=(<table style={{width:"100%"}}>
                  <tbody style={{width:"100%"}}>
                    <tr style={{width:"100%"}}>
                      <td style={{width:"20%"}}>
                      
                      </td>
                      <td style={{width:"30%"}}>
                        {button}
                      </td>
                      <td style={{width:"30%"}}>
                        {button2}
                      </td>
                      <td style={{width:"20%"}}>
                      
                      </td>
                    </tr>
                  </tbody>
                </table>
                )
                  }

      


      const textBig1 = (
        <TextSmallComponent style={bigBoxStyle}>
          <h1 className='max-w-md  text-gray-600' style={textBigStyle}>
          Drive-Team.es
          </h1>
        </TextSmallComponent>
      );
    
      
      
      const texts = ["",textBig1]

      
      
        return (
          
          <AnimatePresence>
              {snap.intro && (
                  
                      
                    
                          <motion.div className="home" key="motionspresemtatiom"  style={{ zIndex:100}}>
                          <div className="centered-content" > 
                              <div style={{height:'10px'}}>
                                  
                              </div>
                              <div style={{height:state.isMobile ? '500px' : '300px'}}>
                              
                                <TextBig 
                                  texts={["",textBig1,""]}
                                  textBigStyle={textBigStyle}
                                  bigBoxStyle={bigBoxStyle}
                                  isMobileL={isMobileL}
                                  timesArray={[0,0,12100,14100]}
                                  lapseBetween={1000}
                                  fixedDir="right"
                                  className="text-container" /> 
                                
                              
                                <TextBig 
                                  texts={["",textSmall1,""]}
                                  textBigStyle={textBigStyle}
                                  bigBoxStyle={bigBoxStyle}
                                  isMobileL={isMobileL}
                                  timesArray={[0,1000,12100,14100]}
                                  lapseBetween={1000}
                                  fixedDir="right"
                                  className="text-container" /> 
                              
                              
                                <TextBig 
                                  texts={["",textSmall2,""]}
                                  textBigStyle={textBigStyle}
                                  bigBoxStyle={bigBoxStyle}
                                  isMobileL={isMobileL}
                                  timesArray={[0,2000,12100,14100]}
                                  lapseBetween={1000}
                                  fixedDir="right"
                                  className="text-container" /> 
                              
                              
                                <TextBig 
                                  texts={["",textSmall3,""]}
                                  textBigStyle={textBigStyle}
                                  bigBoxStyle={bigBoxStyle}
                                  isMobileL={isMobileL}
                                  timesArray={[0,3000,12100,14100]}
                                  lapseBetween={1000}
                                  fixedDir="right"
                                  className="text-container" /> 
                              
                               
                                <TextBig 
                                  texts={["",textSmall4,""]}
                                  textBigStyle={textBigStyle}
                                  bigBoxStyle={bigBoxStyle}
                                  isMobileL={isMobileL}
                                  timesArray={[0,4000,12100,14100]}
                                  lapseBetween={1000}
                                  fixedDir="right"
                                  className="text-container" /> 
                              
                               
                                <TextBig 
                                  texts={["",textSmall5,""]}
                                  textBigStyle={textBigStyle}
                                  bigBoxStyle={bigBoxStyle}
                                  isMobileL={isMobileL}
                                  timesArray={[0,5000,12100,14100]}
                                  lapseBetween={1000}
                                  fixedDir="right"
                                  className="text-container" /> 
                            </div>
                            <br></br>
                                <TextBig 
                                  texts={["",buttons,""]}
                                  textBigStyle={textBigStyle}
                                  bigBoxStyle={bigBoxStyle}
                                  isMobileL={isMobileL}
                                  timesArray={[0,1000,12100,14100]}
                                  lapseBetween={1000}
                                  fixedDir="right"
                                  className="text-container" 
                                  /> 

             
                              
                              
                          </div>

                      </motion.div>
                    
              )} 
          </AnimatePresence>
    )
      

        

    }
    
   // if (isVisible){
      return updateComponent()
    //}
        
        
}

export default AnimationPresentation