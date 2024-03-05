import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Logod(props) {
  const { nodes, materials } = useGLTF("/logod.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ресурс_4.geometry}
        material={materials["Plastic Shader"]}
        position={[0, 0.844, 0.422]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ресурс_5.geometry}
        material={materials["Sweet Plastic"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/logod.glb");