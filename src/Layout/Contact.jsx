import * as THREE from "three";
import { useRef, useReducer, useMemo, Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  MeshTransmissionMaterial,
  Environment,
  Lightformer,
  Preload,
} from "@react-three/drei";
import {
  CuboidCollider,
  BallCollider,
  Physics,
  RigidBody,
} from "@react-three/rapier";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import { easing } from "maath";

const accents = [/* "#4060ff", "#20ffa0", "#ff4060", */ "#ffcc00", "#9c7443"];
const shuffle = (accent = 0) => [
  { color: "#444", roughness: 0.1 },
  { color: "#444", roughness: 0.75 },
  { color: "#444", roughness: 0.75 },
  { color: "white", roughness: 0.1 },
  { color: "white", roughness: 0.75 },
  { color: "white", roughness: 0.1 },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: accents[accent], roughness: 0.75, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true },
];

export const Contact = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard
      .writeText("agustin.morro@gmail.com")
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Oculta el mensaje después de 2 segundos
      })
      .catch((err) => {
        console.error("Error al copiar el correo:", err);
        // Fallback: Abre el cliente de correo
        window.location.href = "mailto:tuemail@example.com";
      });
  };

  return (
    <>
      <div
        id="contact"
        className="w-full bg-white flex items-center justify-center absolute"
      >
        <div className="w-full h-full absolute">
          <div className="container w-full h-screen">
            <Scene />
          </div>
        </div>

        <section className="w-full h-screen z-50 relative pt-20 text-balance flex flex-col justify-evenly pointer-events-none ">
          <h6 className="font-title text-zinc-300 text-8xl text-center lg:text-9xl xl:text-[12rem] ">
            Let's work together
          </h6>
          <div className="w-full flex flex-col gap-12 justify-between text-gray text-center md:text-gray2 self-end font-text text-[12px] pointer-events-auto px-3 md:flex-row 2xl:text-sm">
            <p className="max-w-[400px]">
              READY TO ELEVATE YOUR DIGITAL PRESENCE? <br />
              STRATEGIC - SLEEK - EFFECTIVE
            </p>
            <div className="max-w-[400px] text-white flex-col justify-start md:text-gray2">
              I'M SOCIAL, SO IF YOU'D LIKE TO TALK ABOUT YOUR PROJECT, DROP ME A
              LINE
              <ul className="text-3xl flex justify-center gap-9 mt-4 pl-3">
                <li className="relative">
                  <button
                    onClick={copyEmailToClipboard}
                    className="hover:text-orange duration-300 relative cursor-pointer"
                  >
                    <i className="bxl bx-gmail"></i>
                  </button>
                  {isCopied && (
                    <div className="text-[9px] text-zinc-400 absolute -bottom-3 ">
                      Copied
                    </div>
                  )}
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/agustin.morro"
                    target="_blank"
                  >
                    <i className="bxl bx-facebook hover:text-orange duration-300"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/agusmorro12"
                    target="_blank"
                  >
                    <i className="bxl bx-instagram hover:text-orange duration-300"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="absolute justify-center bottom-0 self-center  flex z-50 font-text text-sm text-zinc-700 ">
            Agustin Morro
          </div>
        </section>
      </div>
    </>
  );
};
export default Contact;

function Scene(props) {
  const [accent, click] = useReducer((state) => ++state % accents.length, 0);
  const connectors = useMemo(() => shuffle(accent), [accent]);
  return (
    <Canvas
      onClick={click}
      shadows
      dpr={[1, 1.5]}
      gl={{ antialias: false }}
      camera={{ position: [0, 0, 15], fov: 17.5, near: 1, far: 20 }}
      {...props}
    >
      <Suspense fallback={null}>
        <color attach="background" args={["#0C0C0C"]} />
        <ambientLight intensity={0.4} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
          castShadow
        />
        <Physics /*debug*/ gravity={[0, 0, 0]}>
          <Pointer />
          {connectors.map((props, i) => (
            <Connector key={i} {...props} />
          ))}
          <Connector position={[10, 10, 5]}>
            <Model>
              <MeshTransmissionMaterial
                clearcoat={1}
                thickness={0.1}
                anisotropicBlur={0.1}
                chromaticAberration={0.1}
                samples={8}
                resolution={512}
              />
            </Model>
          </Connector>
        </Physics>
        <EffectComposer disableNormalPass multisampling={8}>
          <N8AO distanceFalloff={1} aoRadius={1} intensity={4} />
        </EffectComposer>
        <Environment resolution={256}>
          <group rotation={[-Math.PI / 3, 0, 1]}>
            <Lightformer
              form="circle"
              intensity={4}
              rotation-x={Math.PI / 2}
              position={[0, 5, -9]}
              scale={2}
            />
            <Lightformer
              form="circle"
              intensity={2}
              rotation-y={Math.PI / 2}
              position={[-5, 1, -1]}
              scale={2}
            />
            <Lightformer
              form="circle"
              intensity={2}
              rotation-y={Math.PI / 2}
              position={[-5, -1, -1]}
              scale={2}
            />
            <Lightformer
              form="circle"
              intensity={2}
              rotation-y={-Math.PI / 2}
              position={[10, 1, 0]}
              scale={8}
            />
          </group>
        </Environment>
        <Preload all />
      </Suspense>
    </Canvas>
  );
}

function Connector({
  position,
  children,
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  accent,
  ...props
}) {
  const api = useRef();
  const pos = useMemo(() => position || [r(10), r(10), r(10)], []);
  useFrame((state, delta) => {
    delta = Math.min(0.1, delta);
    api.current?.applyImpulse(
      vec.copy(api.current.translation()).negate().multiplyScalar(0.2)
    );
  });
  return (
    <RigidBody
      linearDamping={4}
      angularDamping={1}
      friction={0.1}
      position={pos}
      ref={api}
      colliders={false}
    >
      <CuboidCollider args={[0.38, 1.27, 0.38]} />
      <CuboidCollider args={[1.27, 0.38, 0.38]} />
      <CuboidCollider args={[0.38, 0.38, 1.27]} />
      {children ? children : <Model {...props} />}
      {accent && (
        <pointLight intensity={4} distance={2.5} color={props.color} />
      )}
    </RigidBody>
  );
}

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef();
  useFrame(({ mouse, viewport }) => {
    ref.current?.setNextKinematicTranslation(
      vec.set(
        (mouse.x * viewport.width) / 2,
        (mouse.y * viewport.height) / 2,
        0
      )
    );
  });
  return (
    <RigidBody
      position={[0, 0, 0]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[1]} />
    </RigidBody>
  );
}

function Model({ children, color = "white", roughness = 0, ...props }) {
  const ref = useRef();
  const { nodes, materials } = useGLTF("/models/c-transformed.glb");
  useFrame((state, delta) => {
    easing.dampC(ref.current.material.color, color, 0.2, delta);
  });
  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      scale={10}
      geometry={nodes.connector.geometry}
    >
      <meshStandardMaterial
        metalness={0.2}
        roughness={roughness}
        map={materials.base.map}
      />
      {children}
    </mesh>
  );
}
