import { useGLTF } from "@react-three/drei";

export default function BodyHitZones() {
  const { scene } = useGLTF("/child.glb");

  return (
    <primitive
      object={scene}
      scale={1.5}
      position={[0, -1, 0]}
    />
  );
}
