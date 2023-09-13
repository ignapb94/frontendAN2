import React from 'react';
import { useSnapshot } from 'valtio';
import * as THREE from 'three';
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { Decal, useGLTF, useTexture} from '@react-three/drei'


import state from '../store';

const Earth = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/earth.glb');
  const logoTexture = useTexture(snap.logoDecal);
  logoTexture.anisotropy = 16;
  const fullTexture = useTexture(snap.fullDecal);
  const stateString = JSON.stringify(snap);

  // Accessing the RootNode
  const rootNode = nodes['RootNode'];

  // Accessing the pSphere1 node
  const pSphere1Node = rootNode.children.find((child) => child.name === 'pSphere1');

  


  // Filter the children nodes to get the two distinct psShere1_phong1_0 nodes
  //const psShereNodes = pSphere1Node.children.filter((child) => child.name === 'pSphere1_phong1_0');
  const psShereNodes = pSphere1Node.children

  console.log(psShereNodes.length)
  // Ensure that we have two distinct psShere1_phong1_0 nodes before proceeding
  if (psShereNodes.length !== 2) {
    console.error('Expected two distinct psShere1_phong1_0 nodes inside pSphere1.');
    return null;
  }

  // Accessing the geometries of the two psShere1_phong1_0 nodes
  const psShere1_phong1_0Geometry1 = psShereNodes[0].geometry;
  const psShere1_phong1_0Geometry2 = psShereNodes[1].geometry;

  // Extract attributes from both geometries
  const attributes1 = psShere1_phong1_0Geometry1.attributes;
  const attributes2 = psShere1_phong1_0Geometry2.attributes;
  

  // Combine attributes into new arrays (similar to previous code)
  const combinedPosition = [...attributes1.position.array, ...attributes2.position.array];
  const combinedNormal = [...attributes1.normal.array, ...attributes2.normal.array];
  const combinedUV = [...attributes1.uv.array, ...attributes2.uv.array];
  const combinedUV1 = [...attributes1.uv1.array, ...attributes2.uv1.array];

  // Create a new combined BufferGeometry
  const combinedGeometry = new THREE.BufferGeometry();
  combinedGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(combinedPosition), 3));
  combinedGeometry.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(combinedNormal), 3));
  combinedGeometry.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(combinedUV), 2));
  combinedGeometry.setAttribute('uv1', new THREE.BufferAttribute(new Float32Array(combinedUV1), 2));


  const index1 = psShere1_phong1_0Geometry1.index ? psShere1_phong1_0Geometry1.index.array : null;
  const index2 = psShere1_phong1_0Geometry2.index ? psShere1_phong1_0Geometry2.index.array : null;

  if (index1 && index2) {
    const combinedIndex = new Uint32Array([...index1, ...index2.map((idx) => idx + attributes1.position.count)]);
    combinedGeometry.setIndex(new THREE.BufferAttribute(combinedIndex, 1));
  }

  // Update the bounding box of the combined geometry
  combinedGeometry.computeBoundingBox();

  
  // Now you can use the combinedGeometry in your code to render the combined model
  const geometry = combinedGeometry;


    console.log(psShere1_phong1_0Geometry1)
    console.log(geometry)
    const scaleVector = new THREE.Vector3(0.5, 0.5, 0.5); // Adjust the values as needed
    return (
      <group scale={scaleVector} key={stateString}>
            <mesh
            
                //castShadow
                geometry={geometry}
                material={materials.phong1}
                // material-roughness={1}
                dispose={null}>
                  {/* {snap.isFullTexture && (
                    <Decal
                    position={[0, 0, 0]}
                    rotation={[0, 0, 0]}
                    scale={1}
                    map={fullTexture}
                    />
                )}  */}
                {snap.isLogoTexture && (
                    <Decal
                    position={[0, 0.04, 0.15]}
                    rotation={[0, 0, 0]}
                    //scale={0.00000001}
                    //map={logoTexture}
                    //map-anisotropy={16}
                    depthTest={false}
                    depthWrite={true}
                    />
                )}
            </mesh>
        </group>
    )
}

export default Earth