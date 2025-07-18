import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";

import Contact from "./Layout/Contact";

function App() {
  const lenisRef = useRef();

  useEffect(() => {

  }, []);

  useLayoutEffect(() => {
 
  }, []);

  return (
    <main>
      <ReactLenis
        root
        ref={lenisRef}
        options={{
          smooth: true,
        }}
      />
      <div
        id="mainRef"
        className=""
      >
      </div>
      <Contact />
    </main>
  );
}

export default App;
