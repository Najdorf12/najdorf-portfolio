import {
  OrbitControls,
  Environment,
  Float,
  PerspectiveCamera,
} from "@react-three/drei";
import  Torus  from "./Torus";

export const TorusExperience = ({ modelContainerRef }) => {
  return (
    <>
      <OrbitControls enableZoom={false} enableRotate={false} />
       <spotLight position={[0, 15, 0]} color={"#212121"} angle={0.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
      <PerspectiveCamera makeDefault position={[0, 0, 12]} />
      <Environment files="/minedump_flats_1k.exr" blur={0} background={false} />
      <Torus modelContainerRef={modelContainerRef} />
    </>
  );
};