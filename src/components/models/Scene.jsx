import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'; 

export default function Scene(props) {
  const { nodes } = useGLTF('/scene.gltf')

  const groupRef = useRef()
  
  if (groupRef.current) {
    groupRef.current.rotation.x = Math.PI / 6
    groupRef.current.rotation.y = 0.7854
  }
  
  return (
    <>
    <group ref={groupRef} scale={0.35} {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={new THREE.MeshStandardMaterial({ color: 'RebeccaPurple'  })} position={[0, -0.051, 0]} />

      <mesh geometry={nodes.Cube002.geometry} material={new THREE.MeshStandardMaterial({ color: 'RebeccaPurple' })} />
      <mesh geometry={nodes.Cube004.geometry} material={new THREE.MeshStandardMaterial({ color: 'Snow', metalness: 1, roughness: 0.09  })} />
      <mesh geometry={nodes.Cube006.geometry} material={new THREE.MeshStandardMaterial({ color: 'Snow', metalness: 1, roughness: 0.09 })} />
      <mesh geometry={nodes.Cube009.geometry} material={new THREE.MeshStandardMaterial({ color: 'Snow', metalness: 1, roughness: 0.09 })} />
      <mesh geometry={nodes.Cube011.geometry} material={new THREE.MeshStandardMaterial({ color: 'Snow', metalness: 1, roughness: 0.09  })} />
      <mesh geometry={nodes.Cylinder002.geometry} material={new THREE.MeshStandardMaterial({ color: 'Snow', metalness: 1, roughness: 0.09  })} />

      <mesh geometry={nodes.SimpleCharacter001.geometry} material={new THREE.MeshStandardMaterial({ color: 0xff0000 })} />
      <mesh geometry={nodes.SimpleCharacter002.geometry} material={new THREE.MeshStandardMaterial({ color: 0x00ff00 })} />
      <mesh geometry={nodes.SimpleCharacter003.geometry} material={new THREE.MeshStandardMaterial({ color: 0x0000ff })} />
      <mesh geometry={nodes.SimpleCharacter004.geometry} material={new THREE.MeshStandardMaterial({ color: 0xffff00 })} />
      <mesh geometry={nodes.SimpleCharacter005.geometry} material={new THREE.MeshStandardMaterial({ color: 0xff00ff })} />
      <mesh geometry={nodes.SimpleCharacter007.geometry} material={new THREE.MeshStandardMaterial({ color: 0x00ffff })} position={[0, 0.043, 0]} />
      <mesh geometry={nodes.SimpleCharacter006.geometry} material={new THREE.MeshStandardMaterial({ color: 0xffffff })} />
      
      <mesh geometry={nodes.Cylinder003.geometry} material={new THREE.MeshStandardMaterial({ color: 'Snow', metalness: 1, roughness: 0.09 })} />
      <mesh geometry={nodes.Cube003.geometry} material={new THREE.MeshStandardMaterial({ color: 'RebeccaPurple'})} />
      
      <mesh geometry={nodes.НЕОН.geometry} material={new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 'Magenta', emissiveIntensity: 1  })} />


      <mesh geometry={nodes.FIXED001.geometry} material={new THREE.MeshStandardMaterial({ color: 'RebeccaPurple' })} />
      <mesh geometry={nodes.Cube001.geometry} material={new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 'Khaki', emissiveIntensity: 1 })} />
        <mesh geometry={nodes.Cube001_1.geometry} material={new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 'Khaki', emissiveIntensity: 1 })} />
        <mesh geometry={nodes.Cube002_1.geometry} material={new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 'LightPink', emissiveIntensity: 1 })} />
        <mesh geometry={nodes.Cube002_2.geometry} material={new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 'LightPink', emissiveIntensity: 1 })} />
    </group>
    <pointLight position={[5, 0, 0]} color='pink' intensity={10} decay={1} /> 
    <pointLight position={[-5, 0, 0]} color='pink' intensity={5} decay={1} /> 
    <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
        </>
  )
}
useGLTF.preload('/scene.gltf')
