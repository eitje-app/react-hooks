import { useEffect, useRef, useState } from "react";

export const useHover = () => {
  const [isHovering, setHovering] = useState(false);
  const hoverActions = {
    onMouseEnter: () => setHovering(true),
    onMouseLeave: () => setHovering(false),
  };
  return { hoverActions, isHovering, setHovering };
};

export default useHover;

export const useDelayedHover = (isHovering) => {
  const [delayedHovering, setDelayedHovering] = useState(isHovering);
  const timeoutIdRef = useRef(null);

  useEffect(() => {
    if (isHovering) {
      clearTimeout(timeoutIdRef.current);
      setDelayedHovering(true);
    } else {
      // Clear any existing timeout and start a new one
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = setTimeout(() => {
        setDelayedHovering(false);
      }, 200);
    }

    return () => clearTimeout(timeoutIdRef.current);
  }, [isHovering]);

  return delayedHovering;
};

export const useIsHovered = (element) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!element) return;

    const handleMouseOver = (event) => {
      if (element.contains(event.target)) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (event) => {
      if (!element.contains(event.relatedTarget)) {
        setIsHovered(false);
      }
    };

    element.addEventListener("mouseover", handleMouseOver);
    element.addEventListener("mouseout", handleMouseOut);

    return () => {
      element.removeEventListener("mouseover", handleMouseOver);
      element.removeEventListener("mouseout", handleMouseOut);
    };
  }, [element]);

  return isHovered;
};
