import {
  useRef,
  useLayoutEffect,
  memo,
  useMemo,
  useState,
  useEffect,
} from "react";
import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const defaultMaterialProps = {
  thickness: 0.3,
  roughness: 0.1,
  transmission: 1,
  ior: 1,
  chromaticAberration: 0.02,
  backside: true,
  opacity: 1,
};

const useResponsiveConfig = (viewportWidth) => {
  return useMemo(() => {
    const isMobile = viewportWidth < 768;

    return {
      fontSize: {
        main: isMobile ? 2 : 6,
        subtitle: isMobile ? 0.25 : 0.3,
      },
      torusScale: isMobile ? viewportWidth / 300 : viewportWidth / 500,
      textPosition: isMobile ? [0, 1.5, -2.5] : [0, 0.3, -2],
      subTitlePosition: isMobile
        ? { subtitle1Position: [0, -3.7, 0], subtitle2Position: [0, -4.2, 0] }
        : { subtitle1Position: [0, -4.2, -1], subtitle2Position: [0, -4.6, -1] },
      animations: {
        rotation: {
          enabled: isMobile ? true : true,
          duration: isMobile ? 10 : 10,
        },
        scroll: {
          intensity: isMobile ? 0.5 : 1,
          duration: isMobile ? 0.8 : 1.2,
        },
        wireframe: {
          enabled: isMobile ? true : true,
        },
      },
      model: {
        path: isMobile ? "/models/Torus/torus.glb" : "/models/Torus/torus.glb", // Cambia a torus-low-poly.glb cuando esté disponible
      },
    };
  }, [viewportWidth]);
};

const Torus = memo(({ modelContainerRef }) => {
  const { viewport } = useThree();
  const [viewportWidth, setViewportWidth] = useState(viewport.width);
  const responsive = useResponsiveConfig(viewportWidth);
  const { nodes } = useGLTF(responsive.model.path);
  const meshRef = useRef();
  const torusRef = useRef();
  const textGroupRef = useRef();
  const rotationAnimRef = useRef();

  // Detectar cambios de tamaño de ventana
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Ajustar escala del modelo
  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.scale.set(
        responsive.torusScale,
        responsive.torusScale,
        responsive.torusScale
      );
    }
  }, [responsive.torusScale]);

  useLayoutEffect(() => {
    const animations = [];
    const lastPosition = { x: 0, y: 0, z: 0 };
    const lastRotation = { x: 0, y: 0, z: 0 };

    torusRef.current.material._wireframeProgress = 0;

    if (responsive.animations.rotation.enabled) {
      rotationAnimRef.current = gsap.to(torusRef.current.rotation, {
        x: "+=6.28",
        duration: responsive.animations.rotation.duration,
        ease: "none",
        repeat: -1,
      });
      animations.push(rotationAnimRef.current);
    }

    animations.push(
      gsap.to(textGroupRef.current.position, {
        y: 100 * responsive.animations.scroll.intensity,
        z: -10 * responsive.animations.scroll.intensity,
        ease: "none",
        duration: responsive.animations.scroll.duration,
        scrollTrigger: {
          trigger: "#mainRef",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      })
    );

    if (responsive.animations.wireframe.enabled) {
      animations.push(
        gsap.to(torusRef.current.material, {
          _transmission: .6,
          ior: .5,
          duration: responsive.animations.scroll.duration,
          scrollTrigger: {
            trigger: "#more",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        })
      );

      animations.push(
        gsap.to(torusRef.current.material, {
          _wireframeProgress: 1,
          onUpdate: function () {
            torusRef.current.material.wireframe =
              this.targets()[0]._wireframeProgress > 0.5;
          },
          scrollTrigger: {
            trigger: "#about2",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        })
      );
    }

    ScrollTrigger.create({
      trigger: "#about2",
      start: "top top",
      end: "bottom bottom",
      onEnter: () => {
        lastPosition.x = torusRef.current.position.x;
        lastPosition.y = torusRef.current.position.y;
        lastPosition.z = torusRef.current.position.z;
        lastRotation.x = torusRef.current.rotation.x;
        lastRotation.y = torusRef.current.rotation.y;
        lastRotation.z = torusRef.current.rotation.z;

        const rect = modelContainerRef.current.getBoundingClientRect();
        modelContainerRef.current.classList.remove("fixed");
        modelContainerRef.current.classList.add("absolute");
        modelContainerRef.current.style.top = `${rect.top + window.scrollY}px`;
        modelContainerRef.current.style.left = `${rect.left}px`;
        modelContainerRef.current.style.width = `${rect.width}px`;
        modelContainerRef.current.style.height = `${rect.height}px`;

        gsap.set(torusRef.current.position, lastPosition);
        gsap.set(torusRef.current.rotation, lastRotation);
      },
      onLeaveBack: () => {
        modelContainerRef.current.classList.remove("absolute");
        modelContainerRef.current.classList.add("fixed");
        modelContainerRef.current.style.top = "0";
        modelContainerRef.current.style.left = "0";
        modelContainerRef.current.style.width = "100vw";
        modelContainerRef.current.style.height = "100vh";

        gsap.set(torusRef.current.rotation, lastRotation);
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#mainRef",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onLeave: () => {
          if (!modelContainerRef.current.classList.contains("absolute")) {
            const about2Rect = document
              .getElementById("about2")
              .getBoundingClientRect();
            modelContainerRef.current.classList.add("absolute");
            modelContainerRef.current.style.top = `${
              about2Rect.top + window.scrollY
            }px`;
            modelContainerRef.current.style.left = `${about2Rect.left}px`;
            modelContainerRef.current.style.width = `${about2Rect.width}px`;
            modelContainerRef.current.style.height = `${about2Rect.height}px`;
          }
        },
      },
    });

    // Simplificar animaciones de posición en móviles
    tl.to(torusRef.current.position, {
      y: -1 * responsive.animations.scroll.intensity,
      z: -3 * responsive.animations.scroll.intensity,
      ease: "none",
      duration: responsive.animations.scroll.duration,
    })
      .to(torusRef.current.position, {
        x: 2 * responsive.animations.scroll.intensity,
        z: -0.5 * responsive.animations.scroll.intensity,
        y: 0,
        ease: "none",
        duration: responsive.animations.scroll.duration,
      })
      .to(torusRef.current.position, {
        x: 0,
        z: 0,
        y: 0,
        ease: "none",
        duration: responsive.animations.scroll.duration,
      });

    animations.push(tl);

    return () => {
      animations.forEach((anim) => anim?.kill());
      /* ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); */
    };
  }, [modelContainerRef, responsive]);

  return (
    <group>
      <group ref={textGroupRef} position={responsive.textPosition}>
        <Text
          font="/fonts/August-Bold.ttf"
          fontSize={responsive.fontSize.main}
          color="#9c7443"
        >
          Agustin Morro
        </Text>
        <Text
          font="/fonts/Dune_Rise.otf"
          fontSize={responsive.fontSize.subtitle}
          position={responsive.subTitlePosition.subtitle1Position}
          color="#8b867f"
        >
          FULL STACK DEVELOPER
        </Text>
        <Text
          font="/fonts/Dune_Rise.otf"
          fontSize={responsive.fontSize.subtitle}
          position={responsive.subTitlePosition.subtitle2Position}
          color="rgb(255, 255, 255)"
        >
          & UX/UI Designer
        </Text>
      </group>
      <group ref={meshRef} scale={responsive.torusScale}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus.geometry}
          rotation={[1.98, -0.147, -0.406]}
          ref={torusRef}
        >
          <MeshTransmissionMaterial {...defaultMaterialProps} />
        </mesh>
      </group>
    </group>
  );
});

useGLTF.preload("/models/Torus/torus.glb");
// useGLTF.preload("/models/Torus/torus-low-poly.glb");

export default Torus;
