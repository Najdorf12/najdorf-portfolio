import { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



const Cube = ({ isMobile }) => {
  const cubeRef = useRef();


  const cubePosition = isMobile ? [0,.3, 2.5] : [0,-.3,6.5];

  useEffect(() => {
    if (cubeRef.current) {
      const ctx = gsap.context(() => {
        // Establecer posición y rotación inicial
        gsap.set(cubeRef.current.position, {
          x: cubePosition[0],
          y: cubePosition[1],
          z: cubePosition[2],
        });
       

        // Animación con ScrollTrigger
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#works",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });

        tl.to(cubeRef.current.rotation, {
          z: -5.5,
          y: -7,
          ease: "none",
        });

        // Animación separada para #contact
        gsap.to("#contact", {
          y: "-100vh",
          ease: "none",
          scrollTrigger: {
            trigger: "#works2",
            start: "bottom bottom",
            end: "+=50%",
            scrub: true,
            pin: true,
          },
        });
      });

      return () => ctx.revert();
    }
  }, [isMobile, cubePosition]);

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#555555" />
    </mesh>
  );
};

const CubeExperience = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas>
      <directionalLight
        intensity={2}
        position={[1, 2, 4.5]}
        color="white"
        castShadow
      />
      <PerspectiveCamera
        makeDefault
        position={isMobile ? [0, 0, 8] : [0, 0, 10]} 
      />
      <group position={[0, 0, 0]} castShadow>
        <Cube isMobile={isMobile} />
      </group>
    </Canvas>
  );
};

export default CubeExperience;