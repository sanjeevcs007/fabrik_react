import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/soft.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.5, 0.2, 0.5]}>
        <mesh
          geometry={nodes.mesh_98_0.geometry}
          material={materials["Material.044"]}
        />
        <mesh
          geometry={nodes.mesh_98_4.geometry}
          material={materials["Material.042"]}
        />
        <mesh
          geometry={nodes.mesh_98_5.geometry}
          material={materials["Material.043"]}
        />
        <mesh
          geometry={nodes.mesh_98_2.geometry}
          material={materials["Material.045"]}
        />
        <mesh
          geometry={nodes.mesh_98_3.geometry}
          material={materials["Material.047"]}
        />
        <mesh
          geometry={nodes.mesh_98_1.geometry}
          material={materials["Material.046"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/soft.gltf");
