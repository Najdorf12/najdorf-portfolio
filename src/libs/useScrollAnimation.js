import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (animationSetup, dependencies = []) => {
  const ctxRef = useRef(null);
  const animationsRef = useRef([]);
  const triggersRef = useRef([]);

  useEffect(() => {
    // Limpiar animaciones anteriores
    animationsRef.current.forEach(anim => anim.kill());
    triggersRef.current.forEach(trigger => trigger.kill());
    animationsRef.current = [];
    triggersRef.current = [];

    // Crear nuevo contexto GSAP
    ctxRef.current = gsap.context(() => {
      const animations = [];
      const triggers = [];

      // Ejecutar la configuración de animaciones
      const cleanupFn = animationSetup({ 
        timelines: animations, 
        triggers 
      });

      // Guardar referencias para limpieza
      animationsRef.current = animations;
      triggersRef.current = triggers;

      return () => {
        if (typeof cleanupFn === "function") {
          cleanupFn();
        }
      };
    });

    return () => {
      // Limpiar al desmontar
      if (ctxRef.current) {
        ctxRef.current.revert();
      }
      animationsRef.current.forEach(anim => anim.kill());
      triggersRef.current.forEach(trigger => trigger.kill());
    };
  }, dependencies);

  return ctxRef;
};