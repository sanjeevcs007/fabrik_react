import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cheer from "./Cheer";
import Familia from "./Familia";
import Soft from "./Soft";
import Roni from "./Roni";
import "../Styles/view.css";

function View() {
  return (
    <div className="d-flex">
      <Canvas
        camera={{ position: [2, 0, 12.25], fov: 15 }}
        style={{
          backgroundColor: "black",
          width: "100vw",
          height: "500px",
        }}
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <Cheer />
        </Suspense>
        <OrbitControls />
      </Canvas>

      <Canvas
        camera={{ position: [2, 0, 12.25], fov: 15 }}
        style={{
          backgroundColor: "black",
          width: "100vw",
          height: "500px",
        }}
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <Familia />
        </Suspense>
        <OrbitControls />
      </Canvas>

      <Canvas
        camera={{ position: [2, 0, 12.25], fov: 15 }}
        style={{
          backgroundColor: "black",
          width: "100vw",
          height: "500px",
        }}
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <Soft />
        </Suspense>
        <OrbitControls />
      </Canvas>

      <Canvas
        camera={{ position: [2, 0, 12.25], fov: 15 }}
        style={{
          backgroundColor: "black",
          width: "100vw",
          height: "500px",
        }}
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <Roni />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default View;
