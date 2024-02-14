import { Canvas } from "@react-three/fiber";
import {
  Html,
  OrbitControls,
  Preload,
  useFBX,
  useGLTF,
  useProgress,
} from "@react-three/drei";
import { Suspense } from "react";

function CustomizedProduct() {
  return (
    <div className="mx-auto 2xl:max-w-screen-2xl h-96 flex items-center justify-center bg-black/50">
      <div className="w-full h-full">
        <AirJordanCanvas />
      </div>
    </div>
  );
}

export default CustomizedProduct;

const AirJordan = ({ isMobile }) => {
  const computer = useGLTF(
    "./Air Jordan/air_jordan_1_chicago_black_toe/scene.gltf"
  );

  return (
    <mesh>
      <hemisphereLight intensity={15} groundColor="black" />
      <spotLight
        position={[5, 10.25, 1.5]}
        angle={0.42}
        penumbra={0.1}
        intensity={0.1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 27.5}
        position={isMobile ? [0, -3, -2.2] : [0, -1.25, 1.5]}
      />
    </mesh>
  );
};

const AirJordanCanvas = () => {
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
        <AirJordan isMobile={false} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};
