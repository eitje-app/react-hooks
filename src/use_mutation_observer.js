import { useEffect } from "react";

export const useMutationObserver = (props) => {
  const {
    mutationFunction,
    observeOptions,
    dependency,
    element = typeof window !== "undefined" && document.body,
  } = props;

  useEffect(() => {
    if (!element) return;

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutationFunction(mutation);
      }
    });

    observer.observe(element, observeOptions);

    return () => observer.disconnect();
  }, [dependency, props.element]);
};
