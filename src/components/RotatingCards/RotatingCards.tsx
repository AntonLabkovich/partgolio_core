import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Plane, Billboard, Text } from "@react-three/drei";
import * as THREE from "three";


const RotatingCards: React.FC<{ 
  cards: { name: string; link: string }[]; 
  radius: number; 
  width: number; 
  height: number; 
  rotationRef: React.RefObject<number>; 
  targetRotationRef: React.RefObject<number>; 
}> = ({ cards, radius, width, height, rotationRef, targetRotationRef }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (groupRef.current) {
      rotationRef.current = THREE.MathUtils.lerp(
        rotationRef.current,
        targetRotationRef.current,
        0.1 
      );

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
              <meshBasicMaterial color="#23133f" transparent opacity={0.1} />
              <Text fontSize={0.2} color="black" anchorX="center" anchorY="middle">
                {card.name}
              </Text>
            </Plane>
          </Billboard>
        );
      })}
    </group>
  );
};

export default RotatingCards;