import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Plane, Billboard } from "@react-three/drei";
import * as THREE from "three";

const RotatingCards: React.FC<{ cards: { name: string; link: string }[]; radius: number; width: number; height: number }> = ({ cards, radius, width, height }) => {
  const groupRef = useRef<THREE.Group>(null);
  const rotationRef = useRef(0);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      rotationRef.current += e.deltaY * 0.002;
    };
    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = rotationRef.current;
    }
  });

  return (
    <group ref={groupRef}>
      {cards.map((card, i) => {
        const N = cards.length;
        const angle = (i * 2 * Math.PI) / N;
        const x = radius * Math.sin(angle);
        const z = radius * Math.cos(angle);

        return (
          <Billboard key={i} position={[x, 0, z]}>
            <Plane args={[width, height]} onClick={() => window.open(card.link, "_blank")}>
              <meshBasicMaterial color="lightgray" side={THREE.DoubleSide} />
            </Plane>
          </Billboard>
        );
      })}
    </group>
  );
};

const Container3dGallery: React.FC = () => {
  const radius = 3;
  const width = 1;
  const height = 1.5;

  const mockCard = [
    { name: "project2", link: "#" },
    { name: "project2", link: "#" },
    { name: "project3", link: "#" },
    { name: "project4", link: "#" },
    { name: "project5", link: "#" },
    { name: "project6", link: "#" },
    { name: "project8", link: "#" },
  ];

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Canvas camera={{ position: [0, 0, 6] }}>
        <RotatingCards cards={mockCard} radius={radius} width={width} height={height} />
      </Canvas>
    </div>
  );
};

export default Container3dGallery;
