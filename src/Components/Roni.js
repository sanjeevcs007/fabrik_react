import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/roni.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.5, 0.2, 0.5]}>
        <mesh
          geometry={nodes.mesh_11_2.geometry}
          material={materials["Material.033"]}
        />
        <mesh
          geometry={nodes.mesh_11_3.geometry}
          material={materials["Material.035"]}
        />
        <mesh
          geometry={nodes.mesh_11_4.geometry}
          material={materials["Material.030"]}
        />
        <mesh
          geometry={nodes.mesh_11_5.geometry}
          material={materials["Material.031"]}
        />
        <mesh
          geometry={nodes.mesh_11_0.geometry}
          material={materials["Material.032"]}
        />
        <mesh
          geometry={nodes.mesh_11_1.geometry}
          material={materials["Material.034"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/roni.gltf");
