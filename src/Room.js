import { useGLTF } from "@react-three/drei";

export default function Room() {
  const { nodes } = useGLTF("/level.glb");

  return (
    <mesh
      geometry={nodes.Level.geometry}
      material={nodes.Level.material}
      position={[-0.38, 0.69, 0.62]}
      rotation={[Math.PI / 2, -Math.PI / 9, 0]}
    />
  );
}
