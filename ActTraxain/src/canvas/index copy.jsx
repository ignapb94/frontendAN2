import React, { useEffect, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';
import Earth from './Earth';
import Earth2 from './example';
import Truck from './Truck';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';
import GLBModel from './GLBModel';
import { OrbitControls } from '@react-three/drei'

const CanvasModel = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>

    <GLBModel  url="/earth.glb"  />
      
      <div style={{ height: '1000px', overflow: 'auto' }}>
      <Canvas
      camera={{ position: [0, 0, 25], fov: 25  }}
      shadows
        
        gl={{ preserveDrawingBuffer: true }}
        style={{
        position: "fixed",
        width: '100%',
        maxWidth: '100%',
        height: '1000px', // Set the height of the first shirt container
        //height: '100%', // Set the height of the first shirt container
        transition: 'all',
        transitionTimingFunction: 'ease-in',
        transform: `translateY(${scrollPosition}px)`,
        zIndex: 2,
        }}
    //   onCreated={({ gl }) => {
    //     gl.physicallyCorrectLights = true;
    //   }}
    >
      <GLBModel  url="/earth.glb"  scrollPosition={scrollPosition}   />
      </Canvas>
        {/* // <Canvas
        //   shadows
        //   camera={{ position: [0, 0, 0, 0], fov: 25 }}
        //   gl={{ preserveDrawingBuffer: true }}
        //   style={{
        //     position: "fixed",
        //     width: '100%',
        //     maxWidth: '100%',
        //     //height: '500px', // Set the height of the first shirt container
        //     height: '100%', // Set the height of the first shirt container
        //     transition: 'all',
        //     transitionTimingFunction: 'ease-in',
        //     zIndex: 1,
        //   }}
        // > 
        //   <ambientLight intensity={0.4} />
        //   <Environment preset="city" />
        //   <CameraRig>
        //     {/* <Backdrop /> 
        //     <Center>
        //       <GLBModel  url="/earth2.glb"  />
        //     </Center>
        //   </CameraRig>
        // </Canvas> */}



      </div>
      <div style={{ height: '100px', backgroundColor: 'orange' }} />
       <div style={{ height: '1000px', overflow: 'auto' }}>
       <Canvas
      camera={{ position: [0, 0, 25], fov: 25  }}
      shadows
        
        gl={{ preserveDrawingBuffer: true }}
        style={{
        position: "fixed",
        width: '100%',
        maxWidth: '100%',
        height: '1000px', // Set the height of the first shirt container
        //height: '100%', // Set the height of the first shirt container
        transition: 'all',
        transitionTimingFunction: 'ease-in',
        transform: `translateY(${scrollPosition}px)`,
        zIndex: 2,
        }}
    //   onCreated={({ gl }) => {
    //     gl.physicallyCorrectLights = true;
    //   }}
    >

      <ambientLight intensity={2} /> {/* Increase the intensity value to make the model brighter */}
      <spotLight position={[10, 10, 10]} angle={0.1} penumbra={1} intensity={2} castShadow />
      <Suspense fallback={null}>
       <GLBModel  url="/truck.glb" scrollPosition={scrollPosition}  />
       </Suspense>
       <OrbitControls enableZoom={false} enablePan={true} enableRotate={true} />

       </Canvas>
        {/* // <Canvas
        //   shadows
        //   camera={{ position: [0, 0, 0, 0], fov: 25 }}
        //   gl={{ preserveDrawingBuffer: true }}
        //   style={{
        //     width: '100%',
        //     maxWidth: '100%',
        //     height: '500px', // Set the height of the second shirt container
        //     transition: 'all',
        //     transitionTimingFunction: 'ease-in',
        //     transform: `translateY(${scrollPosition}px)`,
        //     zIndex: 2,
        //   }}
        // > */}
        {/* //   <ambientLight intensity={0.4} />
        //   <Environment preset="city" />
        //   <CameraRig>
        //     <Backdrop />
        //     <Center>
        //       <Truck />
        //     </Center>
        //   </CameraRig>
        // </Canvas>  */}
      </div> 
 
    </div>
  );
};

export default CanvasModel;