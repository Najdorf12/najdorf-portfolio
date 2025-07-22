import {
  OrbitControls,
  Environment,
  Float,
  PerspectiveCamera,
} from "@react-three/drei";
import { Circle } from "./Circle";

export const CircleExperience = () => {

  return (
    <>
      <directionalLight position={[0,3,2]} intensity={1}  />
      <OrbitControls enableZoom={false} enableRotate={false} />
      <Environment preset="sunset" />
      <Circle />
    </>
  );
};
