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




const AnimationDown = (props) => {


    const isVisible = props["isVisible"]
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
    var smallBoxStyle = { height: "200px" }

    const updateComponent = () => {
            

      if (window.innerWidth < 768){
        //setIsMobile(1)
        
        textBigStyle = {color:"black", fontSize: 40, lineHeight: 1}
        textSmallStyle = {color:"black", fontSize: 24, lineHeight: 1.1,fontWeight: 400}
        bigBoxStyle = { height: "300px" }
        state.isMobile=true

      }else{
        //setIsMobile(0)
       
        textBigStyle = {color:"white", fontSize: 100,lineHeight: 1, zIndex:999}
        bigBoxStyle = {backgroundColor:"orange", height: "600px",zIndex:999 }
        textSmallStyle = {color:"white", fontSize: 50,lineHeight: 1.1, fontWeight: 400,zIndex:999}
        state.isMobile=false
      }
      const textSmall1 = (
        <TextSmallComponent style={{}}>
          <h4 className='max-w-md  text-gray-600' style={textSmallStyle}>
          + Tienes que calcular las dietas y complementos de tus conductores​<br></br>+ Quieres ahorrar tiempo y problemas legales usando directamente los datos del tacógrafo​​<br></br>+ Necesitas  controlar los tacógrafos y evitar fraudes con el selector de actividades
          </h4>
        </TextSmallComponent>
      );
    
      const textSmall2 = (
        <TextSmallComponent style={{}}>
          <h4 className='max-w-md  text-gray-600' style={textSmallStyle}>
          
            
            ... Conoces el problema, es muy difícil calcular  las dietas de los conductores.​
            <br></br>
            - Calcula de menos, y tendrás un problema con tus empleados.
            <br></br>
            + Calcula de más y tendrás un problema con la seguridad social.
          </h4>
        </TextSmallComponent>
      );
      const textSmall3 = (
          <TextSmallComponent style={{}}>
            <h4 className='max-w-md  text-gray-600' style={textSmallStyle}>
            + Podrán revisar registros de actividades y de  tiempos de trabajo.
              ​<br></br>
              + Verificar que se les está pagando acorde a su convenio.
              ​​<br></br>
              + Corregir errores desde su móvil
            </h4>
          </TextSmallComponent>
        );
      const textBig1 = (
        <TextSmallComponent style={bigBoxStyle}>
          <h1 className='max-w-md  text-gray-600' style={textBigStyle}>
          Si eres Transportista
          </h1>
        </TextSmallComponent>
      );
    
      const textBig2 = (
        <TextSmallComponent style={bigBoxStyle}>
          <h1 className='head-text' style={textBigStyle}>
            Si eres de Recursos Humanos...
            </h1>
        </TextSmallComponent>
      );
      

      const textBig3 = (
          <TextSmallComponent style={bigBoxStyle}>
            <h1 className='head-text' style={textBigStyle}>
            
              Y tus conductores...    
              </h1>
          </TextSmallComponent>
        );
      const textsSmall = ["",textSmall1, textSmall2, textSmall3]
      const texts = ["",textBig1, textBig2, textBig3]

      
      const button =(<CustomButton
        type="filled"
        title="Pruébalo"
        //handleClick={() => state.intro = false}
        customStyles="w-fit px-4 py-2.5 font-bold text-sm"
        cssStyles={{fontSize:34,
                    backgroundColor:"#0B6EE7",
                    borderRadius: '1.975rem', // Rounded border
                    width: state.isMobile ? '150px' : '300px',
                    margin: '30px',
                    padding: '20px',
                    fontWeight: "lighter"}}
        action="external"
        to="https://drive-team.es"


    />)

    const buttons = ["", button,button, button ]
        return (
          
              <AnimatePresence>
                  
                  {snap.intro && (
                      
                          
                        
                              <motion.div className="home" key="motionsdown">
                              <div className="centered-content"> 
                                  <div style={{height:'100px'}}>
                                      
                                  </div>
                                  <div style={{height:'200px'}}>
                                      <TextBig 
                                      texts={texts}
                                      textBigStyle={textBigStyle}
                                      bigBoxStyle={bigBoxStyle}
                                      isMobileL={isMobileL}
                                      timesArray={[0,2100,10000,24000, 32000]}
                                      lapseBetween={2000}
                                      className="text-container" /> 
                                  </div>
                                  <div style={{height:'400px',}}>
                                  <TextBig 
                                  texts={textsSmall}
                                  textBigStyle={textSmallStyle}
                                  bigBoxStyle={smallBoxStyle}
                                  isMobileL={isMobileL}
                                  timesArray={[0,2400,10300,24400, 32000]}
                                  lapseBetween={2000}
                                  className="text-container" /> 
                              </div> 
                              <TextBig 
                                      texts={buttons}
                                      textBigStyle={textBigStyle}
                                      bigBoxStyle={bigBoxStyle}
                                      isMobileL={isMobileL}
                                      timesArray={[0,2100,18000,24000, 32000]}
                                      lapseBetween={2000}
                                      className="text-container" /> 
                              </div>

                          </motion.div>
                        
                  )} 
              </AnimatePresence>
        )

    }   
    if (isVisible){
      return updateComponent()
    }
        
        
}

export default AnimationDown