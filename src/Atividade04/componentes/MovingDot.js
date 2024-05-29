import { useState } from "react";

export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  return (
    <div
      onPointerMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x - 10}px, ${position.y - 10}px)`, // Adjusted to center the dot
          width: 20,
          height: 20,
        }}
      ></div>
    </div>
  );
}
