import { ReactLenis } from "lenis/react";
import { useEffect, useRef, useState, lazy } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import { TorusExperience } from "./components/Models3D/Torus/TorusExperience";
import Home from "./Layout/Home";
import About from "./Layout/About";
import Works from "./Layout/Works";
const Contact = lazy(() => import("./Layout/Contact"));
import LoaderScreen from "./components/Loader/LoaderScreen";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const lenisRef = useRef();
  const modelContainerRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false);
  const mainRef = useRef(null);

  useEffect(() => {
    if (!isLoaded) return;

    const update = (time) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };

    gsap.ticker.add(update);

    ScrollTrigger.defaults({
      scroller: document.body,
    });

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) {
          lenisRef.current?.lenis?.scrollTo(value, { immediate: true });
        }
        return lenisRef.current?.lenis?.scroll || 0;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: "transform",
    });

    lenisRef.current?.lenis?.on("scroll", ScrollTrigger.update);

    return () => {
      gsap.ticker.remove(update);
      lenisRef.current?.lenis?.off("scroll", ScrollTrigger.update);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isLoaded]);

  return (
    <>
      <ReactLenis
        root
        ref={lenisRef}
        options={{
          lerp: 0.08,
          smoothWheel: true,
          syncTouch: true,
          normalizeWheel: true,
          duration: 1.2,
          autoRaf: false,
        }}
      >
        <main
          id="mainRef"
          ref={mainRef}
          className="relative w-full z-40 overflow-hidden font-[Montserrat] bg-white"
        >
          {/* Contenido principal siempre renderizado */}
          <div
            ref={modelContainerRef}
            className="fixed inset-0 z-50 w-full h-screen overflow-hidden lg:block"
          >
            <Canvas>
              <TorusExperience modelContainerRef={modelContainerRef} />
            </Canvas>
          </div>
          <Home />
          <About />
          
          {/* LoaderScreen dentro del main pero con posición fija */}
          <LoaderScreen 
            onLoaded={() => setIsLoaded(true)} 
            containerRef={mainRef}
          />
        </main>
        {isLoaded && (
          <>
            <Works />
            <Contact />
          </>
        )}
      </ReactLenis>
    </>
  );
}

export default App;