import React from 'react';
import { Plane } from '@react-three/drei';

const PlaceholderImage = ({ url }) => {

  return (
    <Plane args={[1, 1]} rotation-x={-Math.PI / 2}>
      <meshBasicMaterial>
        <texture url={url} />
      </meshBasicMaterial>
    </Plane>
  );
};

export default PlaceholderImage;