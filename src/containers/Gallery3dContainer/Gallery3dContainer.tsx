import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import RotatingCards from "../../components/RotatingCards/RotatingCards";

const Container3dGallery: React.FC = () => {
  const radius = 3;
  const width = 1;
  const height = 1.5;
  const rotationRef = useRef(0);
  const targetRotationRef = useRef(0);

  const mockCard = [
    { name: "project1", link: "#" },
    { name: "project2", link: "#" },
    { name: "project3", link: "#" },
    { name: "project4", link: "#" },
    { name: "project5", link: "#" },
    { name: "project6", link: "#" },
    { name: "project8", link: "#" },
  ];

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    targetRotationRef.current += e.deltaY * 0.002;
  };

  return (
    <Canvas camera={{ position: [0, 0, 4] }} onWheel={handleWheel}>
      <RotatingCards
        cards={mockCard}
        radius={radius}
        width={width}
        height={height}
        rotationRef={rotationRef}
        targetRotationRef={targetRotationRef}
      />
    </Canvas>
  );
};

export default Container3dGallery;
