import React, { useState, useRef } from "react";
import Image from "next/image";

const DraggableResizableImage = ({
  src,
  alt,
  x = 0,
  y = 0,
  initialWidth = 100,
  initialHeight = 100,
}) => {
  const [size, setSize] = useState({
    width: initialWidth,
    height: initialHeight,
  });
  const [isResizing, setIsResizing] = useState(false);
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    if (isResizing) {
      const newWidth = Math.max(50, e.clientX - x);
      const newHeight = Math.max(50, e.clientY - y);
      setSize({ width: newWidth, height: newHeight });
    }
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  return (
    <div
      style={{
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
        zIndex: 1000,
        borderRadius: "4px",
        overflow: "hidden",
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <Image
        ref={imageRef}
        src={src}
        alt={alt}
        layout="fill"
        draggable="false"
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

export default DraggableResizableImage;
