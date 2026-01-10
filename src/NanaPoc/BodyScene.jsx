import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import BodyHitZones from "./BodyHitZones";

export default function BodyScene() {
  return (
    <Canvas camera={{ position: [0, 1.5, 4] }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 2]} />
      <OrbitControls />
      <BodyHitZones />
    </Canvas>
  );
}


