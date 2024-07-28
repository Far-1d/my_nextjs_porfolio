"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const World = dynamic(() => import("./Globe").then((m) => m.World), {
  ssr: false,
});

export function GlobeDemo() {
  const globeConfig = {
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,1)",
    ambientLight: "#fff",
    directionalLeftLight: "#fff",
    directionalTopLight: "#fff",
    pointLight: "#ffffff",
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 1,
    initialPosition: { lat: 35.91, lng: 46.65 },
    autoRotate: false,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];

  return (
    <div className="flex items-center justify-center absolute -left-5 top-40 
    md:top-40 w-full h-full">
      <div className="max-w-7xl mx-auto w-lvw relative overflow-hidden px-4 h-96">
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-12" />
        <div className="absolute w-full h-72 md:h-full z-10">
          <World data={[]} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
}
