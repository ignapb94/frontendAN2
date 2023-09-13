import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'   
import { useSnapshot } from 'valtio'
import { easing } from 'maath'
import state from './../store';
import { Group } from 'three';



const CameraRig = ({children}) => {
    const group = useRef();
    const snap = useSnapshot(state)

    useFrame((state, delta) => {
        const isBreakpoint = window.innerWdth <= 1260;
        const isMobile =window.innerWidth <= 600
        //set iniial position of the model
        let targetPosition = [-0.4, 0, 2];
        if (snap.intro) {
            if(isBreakpoint) targetPosition = [0,0,2]
            if(isMobile) targetPosition = [0,0.2, 2.5]
        }else{
            if(isMobile) targetPosition = [0,0, 2.5]
            else targetPosition = [0,0,2]
        }

        // set variable camera position
        easing.damp3(state.camera.position, targetPosition, 0.25, delta)
        

        easing.dampE(
            group.current.rotation,
            [state.pointer.y , -state.pointer.x , 0],
            0.25,
        )
    
    }
    )

    //set the model rotation smootly
   

  return <group  ref={group}>{children}</group>
  
}

export default CameraRig