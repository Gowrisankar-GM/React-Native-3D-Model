import React from 'react';
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader';
import {ModelData} from '../assests/Model';

const ThreeDScenes = props => {
  const objLoader = new OBJLoader().parse(ModelData);

  return (
    <group dispose={null} scale={2} position={[0, -2, 0]}>
      <primitive object={objLoader} />;
    </group>
  );
};
export default ThreeDScenes;
