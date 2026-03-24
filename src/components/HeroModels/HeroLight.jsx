import { SpotLight } from '@react-three/drei';

const HeroLight = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#4c1d95" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
      <SpotLight
        position={[0, 10, 5]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
        color="#ffffff"
      />
      
      <directionalLight position={[-5, 5, 5]} intensity={0.8} color="#ffffff" />
    </>
  );
};

export default HeroLight;