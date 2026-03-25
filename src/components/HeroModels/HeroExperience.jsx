import { OrbitControls, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import HeroLight from "./HeroLight";
import { Suspense } from "react";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });
  return (
    <Canvas shadows={!isMobile} dpr={[1, 1.5]} camera={{ position: [0, 0, 15], fov: 45 }}>
      <HeroLight />

      <OrbitControls
        enablePan={false}
        enableZoom={!isMobile}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <group
        scale={isMobile ? 0.7 : 1}
        position={[0, -2, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <Suspense fallback={<Html center>Loading...</Html>}>
          <Room isMobile={isMobile} />
        </Suspense>
      </group>
    </Canvas>
  );
};

export default HeroExperience;
