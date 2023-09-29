// 'use client'
import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = e => {
    // setMousePosition({ x: e.clientX, y: e.clientY });
    setMousePosition({ x: e.clientX + window.scrollX, y: e.clientY + window.scrollY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

export default useMousePosition;