import { useEffect } from "react";

function useLockBodyScroll(lock) {
  useEffect(() => {
    if (!lock) return;

    const original = document.body.style.overflow;
    const originalGutter = document.documentElement.style.scrollbarGutter;

    document.body.style.overflow = "hidden";
    document.documentElement.style.scrollbarGutter = "stable";

    return () => {
      document.body.style.overflow = original;
      document.documentElement.style.scrollbarGutter = originalGutter;
    };
  }, [lock]);
}

export default useLockBodyScroll;
