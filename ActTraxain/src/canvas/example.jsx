import React from 'react'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal, useGLTF, useTexture} from '@react-three/drei'

import * as THREE from 'three';

import state from '../store';
const Earth2 = () => {
    const snap = useSnapshot(state)
    const { nodes, materials } = useGLTF('/earth2.glb');
    //const { nodes, materials } = useGLTF('/mercedes+atego.obj');
    const logoTexture = useTexture(snap.logoDecal)
    logoTexture.anisotropy = 16;
    const fullTexture = useTexture(snap.fullDecal)
    
    //useFrame((state, delta) => easing.dampC(materials.lambert1.color, snap.color, 0.25, delta));
    
    const stateString = JSON.stringify(snap)



    const scaleVector = new THREE.Vector3(0.1, 0.1, 0.1); // Adjust the values as needed
    return (
      <group scale={scaleVector} key={stateString}>
            <mesh
            
                castShadow
                geometry={nodes.mesh_0.geometry}
                material={materials.material0}
                material-roughness={1}
                dispose={null}>
                {/* {snap.isFullTexture && (
                    <Decal
                    position={[0, 0, 0]}
                    rotation={[0, 0, 0]}
                    scale={1}
                    map={fullTexture}
                    />
                )} */}
                {snap.isLogoTexture && (
                    <Decal
                    position={[0, 0.04, 0.15]}
                    rotation={[0, 0, 0]}
                    scale={0.0001}
                    map={logoTexture}
                    //map-anisotropy={16}
                    depthTest={false}
                    depthWrite={true}
                    />
                )}
            </mesh>
        </group>
    )
}

export default Earth2