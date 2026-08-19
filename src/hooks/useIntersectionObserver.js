import { useEffect, useState } from "react";

function useIntersectionObserver(id, threshold = 0) {
  const [isIntersecting, setIsIntersecting] = useState(false);
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
