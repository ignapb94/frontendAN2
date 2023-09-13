import React, { useEffect, useState, Suspense, useRef } from 'react';

import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';
import Earth from './Earth';
import Earth2 from './example';
import Truck from './Truck';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';
import GLBModel from './GLBModel';

import { useSnapshot } from 'valtio'
import state from '../store'

import { motion, AnimatePresence } from 'framer-motion';
import { OrbitControls } from '@react-three/drei'
import PlaceholderImage from '../components/PlaceholderImage';
import AnimationDown from '../components/AnimationDown';
import IntersectionObserverComponent from '../components/IntersectionObserverComponent'
import AnimationPresentation from '../components/AnimationPresentation';
import  { 
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
  slideStopSlideAnimation,
  appearAnimation,


} from '../config/motion'


const CanvasModel = () => {

  const orbitControlsRef = useRef();
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const snap = useSnapshot(state)
  const [scrollPosition, setScrollPosition] = useState(0);
  const targetRef = useRef(null);
  const handleScroll = () => {

    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isVisibleDown, setIsVisibleDown] = useState(false);
  
    const handleVisibleDown = (visible) => {
        
      setIsVisibleDown(visible);
    };

    const [isVisiblePres, setIsVisiblePres] = useState(false);
  
    const handleVisiblePres = (visible) => {
        
      setIsVisiblePres(visible);
    };

  // useEffect(() => {
  //   const controls = orbitControlsRef.current;
  
  //   const handleControlsChange = () => {

  //     if (controls) {
  //       const newRotation = { ...controls.object.rotation };
  //       setRotation(newRotation);

  //     }
  //   };

  //   const intervalId = setInterval(handleControlsChange, 1000);

  //     return () => {
  //       clearInterval(intervalId);
  //       if (controls) {
  //         controls.removeEventListener('change', handleControlsChange);
  //       }
  //     };
  
      
  // }, []);

 

  var overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    //height: '100%',1500px
    height:"1000px",
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust alpha for transparency
    zIndex: 99,
  };

  var overlayStyleTwo = {
    position: 'absolute',
    button: 0,
    left: 0,
    width: '100%',
    //height: '100%',1500px
    height:"1000px",
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust alpha for transparency
    zIndex: 99,
  };


  const width= window.innerWidth
  const height= window.innerHeight

  const heightBackground = height*1.2
  const targetWidthBack = heightBackground*100/width
  const backgroundSize = targetWidthBack + "%" + " 120%"



  var bakgroundStyle ={ 
                        height: '100%', 
                        overflow: 'auto',
                        backgroundImage: 'url("/earth_photo1.png")',
                        //backgroundSize: '50% 50%',
                        backgroundSize: backgroundSize,
                        //backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat', 
                        width: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.9)', // Adjust opacity (last value) as needed
                        pointerEvents: 'none'
                      }

  if (snap.isMobile){
    bakgroundStyle = { 
      height: '100%', 
      overflow: 'auto',
      backgroundImage: 'url("/earth_photo1.png")',
      //backgroundSize: '50% 50%',
      backgroundSize: '250% 150%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat', 
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.9)', // Adjust opacity (last value) as needed
      pointerEvents: 'none'
    }

  };



  return (
   
<div style={{height: '1000px'}}>

<div style={bakgroundStyle}>
        <div style={overlayStyle}></div>
        <AnimatePresence>{
       (
          <motion.div 
                        // {...headTextAnimation}
                        {...appearAnimation}
                        style={{
                          width: '100%',
                          maxWidth: '100%',
                          //height: '1500px', // Set the height of the first shirt container
                          height: '100%', // Set the height of the first shirt container
                          transition: 'all',
                          transitionTimingFunction: 'ease-in',
                          transform: `translateY(${scrollPosition}px)`,
                          zIndex: 2,
                          
                          
                          }}
                        >
       <Canvas
      camera={{ position: [0, 0, 43], fov: 25  }}
      shadows
        
        gl={{ preserveDrawingBuffer: true }}
        style={{
        width: '100%',
        maxWidth: '100%',
        //height: '1500px', // Set the height of the first shirt container
        height: '100%', // Set the height of the first shirt container
        transition: 'all',
        transitionTimingFunction: 'ease-in',
        transform: `translateY(${scrollPosition}px)`,
        zIndex: 2,
        
        
        }}
    //   onCreated={({ gl }) => {
    //     gl.physicallyCorrectLights = true;
    //   }}
    >
      

      <ambientLight intensity={2} /> 
      <spotLight position={[10, 10, 10]} angle={0.1} penumbra={1} intensity={2} castShadow />
      <Suspense fallback={<PlaceholderImage url={"/earth_photo.png"} />}>
      
       <GLBModel  url="/earth2.glb" scrollPosition={scrollPosition} />
       
       </Suspense>
         <OrbitControls
          ref={orbitControlsRef}
          enableZoom={false}
          enablePan={true}
          enableRotate={true}
         
        />


       </Canvas>
       </motion.div>)}
       </AnimatePresence>
        
      </div> 
        



      
      <div style={{ height: state.isMobile ? '900px' : '600px', backgroundColor: 'orange', fontSize: 40, textAlign:"center"}}>
      <table style={{width: "100%"}}>
        <tbody style={{width: "100%"}}>
          <tr style={{width: "100%"}}>
            <td style={{width: "10%"}}>

            </td>
            <td style={{width: "80%"}}>

            </td>
            <td style={{width: "10%"}}>

            </td>

          </tr>
        </tbody>
      </table>
      <IntersectionObserverComponent targetRef={targetRef} onVisible={handleVisiblePres} />
      <AnimationPresentation
       isVisible={isVisibleDown}
      />
      </div>
      
        

      <div style={overlayStyleTwo}></div>
       <div style={{ height: '1100px', width: '100%', overflow: 'auto' }}>
       <IntersectionObserverComponent targetRef={targetRef} onVisible={handleVisibleDown} />
       <div style={{width: '100%',zIndex:100000, position:"absolute"}}>
       <AnimationDown
      
      isVisible={isVisibleDown}
      />
       </div>
      
      {/* <AnimationPresentation/> */}

       <Canvas
      camera={{ position: [0, 0, 5], fov: 25  }}
      shadows
        
      gl={{ preserveDrawingBuffer: true }}
      style={{
      width: '100%',
      maxWidth: '100%',
      //height: '1500px', // Set the height of the first shirt container
      height: '100%', // Set the height of the first shirt container
      transition: 'all',
      transitionTimingFunction: 'ease-in',
      transform: `translateY(${scrollPosition}px)`,
      zIndex: 2,
        }}
      // onCreated={({ gl }) => {
      //   gl.physicallyCorrectLights = true;
      // }}
    >

      <ambientLight intensity={10} /> {/* Increase the intensity value to make the model brighter */}
      <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} castShadow />
      <Suspense fallback={null}>
       <GLBModel  url="/truck.glb" scrollPosition={scrollPosition}   style={overlayStyleTwo}/>
       </Suspense>
       <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />

       </Canvas>
       
      </div> 
 
    </div>
  );
};



export default CanvasModel;