import { OrbitControls } from '@react-three/drei'
import { useLoader, useFrame } from 'react-three-fiber';
import { useSnapshot } from 'valtio';
import state from  '../store';
import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const GLBModel = ({ url,  scrollPosition }) => {
  return (
    
        <Model url={url} />
     
  );
};

const Model = ({ url }) => {
  
  const snap = useSnapshot(state)
   var rotationDir = snap.rollindDir
 

    const { scene } = useLoader(GLTFLoader, url);

    if (rotationDir === 0){
      rotationDir = 1
    }
  
    // Adjust scale and rotation to fit and flip the model
     scene.scale.set(0.1, 0.1, 0.1);
    // scene.rotation.y = Math.PI; // Flips the model horizontally
   var rotationDirOr = 0
    //Set up rotation animation
    useFrame((state) => {
      if (rotationDir<20){
        
        scene.rotation.y += 0.01*rotationDir
        //scene.rotation.y += rotationDir*0.01
        rotationDirOr=rotationDir
        //console.log(rotationDir,scene.rotation.y)
      }
    
    });
    return <primitive object={scene} />;
  };

export default GLBModel;
