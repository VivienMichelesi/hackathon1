import { useEffect, useRef } from "react";

export function useEffectAfterMount(fn, deps) {
  const isMountRef = useRef(true);

  useEffect(() => {
    if (!isMountRef.current) {
      fn();
    }
    isMountRef.current = false;
  }, deps);
}

export function debounce(fn, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), wait);
  };
}
