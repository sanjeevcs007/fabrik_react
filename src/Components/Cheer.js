import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/cheer.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.5, 0.2, 0.5]}>
        {/* <group scale={[500]}> */}
        <mesh
          geometry={nodes.mesh_92_0.geometry}
          material={materials["Material.011"]}
        />
        <mesh
          geometry={nodes.mesh_92_2.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          geometry={nodes.mesh_92_4.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          geometry={nodes.mesh_92_5.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          geometry={nodes.mesh_92_1.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          geometry={nodes.mesh_92_3.geometry}
          material={materials["Material.012"]}
        />
        {/* </group> */}
      </group>
    </group>
  );
}

useGLTF.preload("/cheer.gltf");
