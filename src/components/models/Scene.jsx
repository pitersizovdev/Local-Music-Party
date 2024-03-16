import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'; 

export default function Scene(props) {
  const { nodes } = useGLTF('/scene.gltf')

  const groupRef = useRef()
  // initial rotation values
  const rotationY = Math.PI / 9
  const rotationX = 0.7
  
  // Animation state variables
  const animationSpeed = 0.001
  const maxRotation = Math.PI / 0.5
  let direction = 1 // 1 for right, -1 for left

  useFrame(() => {
    if (groupRef.current) {
      // Update rotation
      groupRef.current.rotation.y += animationSpeed * direction
      groupRef.current.rotation.x = rotationX

      // Change direction at the limits
      if (groupRef.current.rotation.y >= rotationY + maxRotation) {
        direction = -1
      } else if (groupRef.current.rotation.y <= rotationY - maxRotation) {
        direction = 1
      }
    }
  })

  
  return (
    <>
    <group ref={groupRef} scale={0.35} {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={new THREE.MeshStandardMaterial({ color: 'RebeccaPurple', metalness: 1, roughness: 0.5  })} position={[0, -0.051, 0]} />

      <mesh geometry={nodes.Cube002.geometry} material={new THREE.MeshStandardMaterial({ color: 'RebeccaPurple', metalness: 1, roughness: 0.5  })} />
      <mesh geometry={nodes.Cube004.geometry} material={new THREE.MeshStandardMaterial({ color: 'Snow',})} />
      <mesh geometry={nodes.Cylinder002.geometry} material={new THREE.MeshStandardMaterial({ color: 'Snow',})} />

      <mesh geometry={nodes.SimpleCharacter001.geometry} material={new THREE.MeshStandardMaterial({ color: 'Plum', metalness: 1, roughness: 0.5  })} />
      <mesh geometry={nodes.SimpleCharacter002.geometry} material={new THREE.MeshStandardMaterial({ color: 'PowderBlue', metalness: 1, roughness: 0.5 })} />
      <mesh geometry={nodes.SimpleCharacter003.geometry} material={new THREE.MeshStandardMaterial({ color: 'PaleGreen', metalness: 1, roughness: 0.5 })} />
      <mesh geometry={nodes.SimpleCharacter004.geometry} material={new THREE.MeshStandardMaterial({ color: 'White', metalness: 1, roughness: 0.5 })} />
      <mesh geometry={nodes.SimpleCharacter005.geometry} material={new THREE.MeshStandardMaterial({ color: 'LightCoral', metalness: 1, roughness: 0.5 })} />
      <mesh geometry={nodes.SimpleCharacter007.geometry} material={new THREE.MeshStandardMaterial({ color: 'PaleGoldenRod', metalness: 1, roughness: 0.5 })} position={[0, 0.043, 0]} />
      <mesh geometry={nodes.SimpleCharacter006.geometry} material={new THREE.MeshStandardMaterial({ color: 'MediumTurquoise', metalness: 1, roughness: 0.5 })} />
      
      <mesh geometry={nodes.Cylinder003.geometry} material={new THREE.MeshStandardMaterial({ color: 'Snow', metalness: 1, roughness: 0.5 })} />
      <mesh geometry={nodes.Cube003.geometry} material={new THREE.MeshStandardMaterial({color: 'RebeccaPurple', metalness: 1, roughness: 0.5 })} />
      
      <mesh geometry={nodes.НЕОН.geometry} material={new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 'Magenta', emissiveIntensity: 1  })} />


      <mesh geometry={nodes.FIXED001.geometry} material={new THREE.MeshStandardMaterial({ color: 'RebeccaPurple', metalness: 1, roughness: 0.5 })} />
      <mesh geometry={nodes.Cube001.geometry} material={new THREE.MeshStandardMaterial({ color: 'black', emissive: 'Khaki', emissiveIntensity: 0.8 })} />
        <mesh geometry={nodes.Cube001_1.geometry} material={new THREE.MeshStandardMaterial({ color: 'black', emissive: 'Khaki', emissiveIntensity: 0.8})} />
        <mesh geometry={nodes.Cube002_1.geometry} material={new THREE.MeshStandardMaterial({ color: 'black', emissive: 'LightPink', emissiveIntensity: 0.8 })} />
        <mesh geometry={nodes.Cube002_2.geometry} material={new THREE.MeshStandardMaterial({ color: 'black', emissive: 'LightPink', emissiveIntensity: 0.8 })} />
    </group>
    <pointLight position={[5, 0, 1]} color='pink' intensity={5} decay={1} /> 
    <pointLight position={[-5, 0, 1]} color='pink' intensity={5} decay={1} /> 
    <pointLight position={[0, 3, 1]} color='Plum' intensity={5} decay={1} /> 
    <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
        </>
  )
}
useGLTF.preload('/scene.gltf')
