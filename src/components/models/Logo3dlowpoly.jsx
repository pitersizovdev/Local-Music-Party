import React from 'react';
import { useGLTF } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';

export default function Logo3dlowpoly(props) {
  const { nodes, materials } = useGLTF('/logo3dlowpoly.gltf');

  return (
    <group scale={0.35} rotation={[0, -15 * Math.PI / 180, 0]} {...props} dispose={null}>
      <mesh geometry={nodes.FIXED001.geometry} material={new MeshStandardMaterial({ color: 'RebeccaPurple', metalness: 1, roughness: 0.09 })} position={[0, 0.962, 2.418]} rotation={[Math.PI / 2.1, -0.1, 0.2]} scale={6.063} />
      <mesh geometry={nodes.FIXED.geometry} material={new MeshStandardMaterial({ color: '#697adf', metalness: 1, roughness: 0.09 })} position={[0.3, -0.2, 0.2]} rotation={[Math.PI / 0.10025, -0.2, -0.095]}/>
      <pointLight position={[-21, -12, 3]} color='pink' intensity={30} decay={-10} /> 
      <pointLight position={[10, -5, 10]} color='RebeccaPurple' intensity={300} decay={-10} /> 
      <pointLight position={[-30, 125, 150]} color='SlateBlue' intensity={9} decay={-1} />
    </group>
  );
}

useGLTF.preload('/logo3dlowpoly.gltf');