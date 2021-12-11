import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Global() {
  const gltf = useLoader(GLTFLoader, "/global.glb");

  return <primitive object={gltf.scene} position={[-1, 2, -1]} scale={0.05} />;
}
