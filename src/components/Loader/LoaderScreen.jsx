import { useProgress } from "@react-three/drei";
import { useState, useEffect } from "react";

function LoaderScreen({ onLoaded }) {
  const { progress, total, loaded } = useProgress();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (progress >= 100 && loaded >= total) {
      // Add a small delay for smoother transition
      const timer = setTimeout(() => {
        setIsReady(true);
        onLoaded();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [progress, loaded, total, onLoaded]);

  return (
    <div
      className={`fixed inset-0 z-[100] font-text gap-12 text-zinc-600 flex flex-col items-center justify-center bg-white transition-opacity duration-500 ${
        isReady ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-3xl flex flex-col items-center gap-3 ">
        <span className="text-sm">Portfolio</span>AGUSTIN MORRO</div>
      <div className=" text-lg font-montserrat">
        {Math.round(progress)}%
      </div>
    </div>
  );
}

export default LoaderScreen;
