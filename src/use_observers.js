import { useEffect, useRef, useState } from "react";
import { useMutationObserver } from "./use_mutation_observer";

export const useResizeObserver = (ref) => {
  const [sizes, setSizes] = useState({});

  const observer = useRef(
    new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const { width, height } = entry.contentRect;
      setSizes({ width, height });
    })
  );

  useEffect(() => {
    if (ref.current) {
      observer.current.observe(ref.current);
    }

    return () => {
      ref.current && observer.current.unobserve(ref.current);
    };
  }, [ref, observer]);

  return sizes;
};

export const useHeightObserver = (ref) => {
  const [height, setHeight] = useState(0);

  const mutationFunction = () => {
    if (ref.current) {
      setHeight(ref.current.clientHeight);
    }
  };

  const observeOptions = {
    childList: true,
    subtree: true,
  };

  useMutationObserver({
    mutationFunction,
    observeOptions,
    dependency: ref,
    element: ref.current,
  });

  return height;
};

export const useIntersectionObserver = (ref, onChange, opts = {}) => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleIntersection, opts);
  }, []);

  const handleIntersection = ([entry]) => {
    return onChange(entry);
  };

  useEffect(() => {
    ref.current && observerRef.current.observe(ref.current);

    return () => {
      observerRef.current?.disconnect?.();
    };
  }, [ref]);
};
