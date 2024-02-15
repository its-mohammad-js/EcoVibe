import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import CanvasLoader from "../Loader/CanvasLoader";
import { motion } from "framer-motion-3d";
import { useMediaQuery } from "react-responsive";

const AirJordan = ({ isMobile, rotate }) => {
  const computer = useGLTF(
    "./Air Jordan/air_jordan_1_chicago_black_toe/scene.gltf"
  );

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[5, 1.25, 1.5]}
        angle={0.42}
        penumbra={0.1}
        intensity={0.1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 17 : 27.5}
        position={isMobile ? [0, 0, 0] : [0, -0.5, 0]}
        rotation={rotate}
      />
    </mesh>
  );
};

const AirJordanCanvas = ({ rotate }) => {
  const isMobile = useMediaQuery({ maxWidth: 425 });

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[10, 2]}
      camera={{ position: [18, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <AirJordan isMobile={isMobile} rotate={rotate} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};
export default AirJordanCanvas;

// rotation={isMobile ? [0, -0.3, 0] : [0, -0.25, 0.02]}
