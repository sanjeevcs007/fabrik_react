import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/familia.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.5, 0.2, 0.5]}>
        <mesh
          geometry={nodes.mesh_95_0.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.mesh_95_5.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.mesh_95_2.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          geometry={nodes.mesh_95_1.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          geometry={nodes.mesh_95_3.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          geometry={nodes.mesh_95_4.geometry}
          material={materials["Material.003"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/familia.gltf");
