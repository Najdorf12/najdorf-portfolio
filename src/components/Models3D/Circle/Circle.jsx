import { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

export function Circle(props) {
  const { nodes, materials } = useGLTF(
    "/models/Circle/supersimple-circle-red.glb"
  );
  const circleRef = useRef();
  const circleRef2 = useRef();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const circlePosition = isMobile ? [0, 0.3, 2.5] : [0, -0.3, 6.5];
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <group scale={14} position={[0, 1, 0]} {...props} dispose={null}>
      <group position={circlePosition} rotation={[Math.PI / 2, 0, Math.PI]}>
        <mesh
          ref={circleRef}
          geometry={nodes.Object_4.geometry}
          material={materials["Material.001"]}
        />
      </group>
      <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          ref={circleRef2}
          geometry={nodes.Object_4.geometry}
          material={materials["Material.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/Circle/supersimple-circle-red.glb");
