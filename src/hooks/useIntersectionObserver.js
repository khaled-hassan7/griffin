import { useEffect, useState } from "react";

function useIntersectionObserver(id, threshold = 0, initialValue = false) {
  const [isIntersecting, setIsIntersecting] = useState(initialValue);
  useEffect(() => {
    const element = document.getElementById(id);
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold },
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, [id, threshold]);

  return isIntersecting;
}

export default useIntersectionObserver;
