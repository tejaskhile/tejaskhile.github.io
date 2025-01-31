import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const Animated = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const loadVanta = async () => {
      const VANTA = (await import('vanta/dist/vanta.birds.min')).default;
      
      const effect = VANTA({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.0,
        scaleMobile: 1.00,
        backgroundColor: 0x72a8f7,
        color1: 0xf79797,
        color2: 0xff4646,
        birdSize: 5.0,
        speedLimit: 30.00,
        separation: 200.00,
        alignment: 50.00,
        cohesion: 20.00,
        quantity: 3.00
      });

      return () => effect.destroy();
    };

    loadVanta();
  }, []);

  return <div ref={vantaRef} style={{ height: "100%", width: "100%" }} />;
};

export default Animated;