import React from 'react';
import { useGLTF } from '@react-three/drei';
import { MeshPhysicalMaterial } from 'three';

export function Logo3d(props) {
  const { nodes } = useGLTF('/logo3d.gltf');

  return (
    <group scale={0.35} {...props} dispose={null}>

<mesh geometry={nodes.Ресурс_4001.geometry} material={new MeshPhysicalMaterial({ color: 'RebeccaPurple', metalness: 1, roughness: 0.09 })} position={[-0.15, 0.9, 0.5]} rotation={[Math.PI / 2 - (4 * Math.PI) / 180, (-5 * Math.PI) / 180, (25 * Math.PI) / 180]} />
<mesh geometry={nodes.Ресурс_5001.geometry} material={new MeshPhysicalMaterial({ color: 'RebeccaPurple', metalness: 1, roughness: 0.09 })} rotation={[Math.PI / 2 - (4 * Math.PI) / 180, (-5 * Math.PI) / 180, (25 * Math.PI) / 180]} />




      <pointLight position={[-20, -10, 1]} color='pink' intensity={30} decay={-10} /> 
      <pointLight position={[10,-5, 10]} color='RebeccaPurple' intensity={300} decay={-10} /> 
<pointLight position={[-50, 125, 150]} color='SlateBlue' intensity={9} decay={-1} />

    </group>
  );
}

useGLTF.preload('/logo3d.gltf');
