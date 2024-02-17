import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import CanvasLoader from "../Loader/CanvasLoader";
import { motion } from "framer-motion-3d";
import { useMediaQuery } from "react-responsive";

import { useSpring, animated } from "@react-spring/three";

const NikeShoe = ({ isMobile, animateRole }) => {
  const nikeModel = useGLTF("./3d models/Nike Air Max/scene.gltf");
  const [active, setActive] = useState(false);
  const { rotate } = useSpring({
    rotate: active ? [5, 7.5, 0] : [0, 7.5, 0],
  });

  useEffect(() => {
    setActive(() => {
      return animateRole === "fade" ? true : false;
    });
  }, [animateRole]);

  console.log(rotate);

  return (
    <animated.mesh rotation={rotate}>
      <primitive
        object={nikeModel.scene}
        scale={isMobile ? 15 : 23}
        position={isMobile ? [0, 0, 0] : [0, -1.5, 0]}
        rotation={[0, 7.5, 0]}
      />
    </animated.mesh>
  );
};

const NikeShoeCanvas = ({ animateRole }) => {
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
        <NikeShoe isMobile={isMobile} animateRole={animateRole} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};
export default NikeShoeCanvas;
