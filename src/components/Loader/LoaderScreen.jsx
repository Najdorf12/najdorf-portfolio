import { useProgress } from "@react-three/drei";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

function LoaderScreen({ onLoaded, containerRef }) {
  const { progress, total, loaded } = useProgress();
  const [displayProgress, setDisplayProgress] = useState(0);
  const titleRef = useRef(null);
  const portfolioRef = useRef(null);
  const loaderRef = useRef(null);

  useEffect(() => {
    gsap.to(
      { value: 0 },
      {
        value: progress,
        duration: 2,
        ease: "power2.out",
        onUpdate: function () {
          setDisplayProgress(Math.round(this.targets()[0].value));
        },
      }
    );

    if (progress >= 100 && loaded >= total) {
      const timer = setTimeout(() => {
        onLoaded();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [progress, loaded, total, onLoaded]);

  useEffect(() => {
    document.fonts.ready.then(() => {
      gsap.from(portfolioRef.current, {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: "power3.out",
      });

      let split = SplitText.create(titleRef.current, {
        type: "chars",
        mask: "chars",
        aria: "auto",
        onSplit: (self) => {
          return gsap.from(self.chars, {
            duration: 3,
            ease: "power3.out",
            yPercent: "random([-150, 150])",
            xPercent: "random([-150, 150])",
            stagger: {
              from: "random",
              amount: 0.6,
            },
            onComplete: () => {
              gsap.to(loaderRef.current, {
                xPercent: -100,
                duration: 1,
                ease: "power3.inOut",
                delay: 0.5,
                onComplete: () => {
                  // Ocultar completamente el loader después de la animación
                  gsap.set(loaderRef.current, { display: "none" });
                },
              });
            },
          });
        },
      });

      return () => split.revert();
    });
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[100] font-text gap-20 text-zinc-500 flex flex-col items-center justify-center bg-black"
    >
      <div className="text-2xl md:text-3xl gap-3 -mt-20 flex flex-col text-center">
        <div ref={portfolioRef} className="text-sm text-white">
          Portfolio
        </div>
        <p ref={titleRef} className="split">
          AGUSTIN MORRO
        </p>
      </div>
      <div className="text-lg font-montserrat">{displayProgress}%</div>
    </div>
  );
}

export default LoaderScreen;
