import { useState, useEffect } from "react";

type ScrollDirection = "up" | "down" | null;

export const useScrollDirection = (threshold = 10) => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);
  const [prevScroll, setPrevScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (Math.abs(currentScroll - prevScroll) < threshold) {
        return;
      }

      if (currentScroll > prevScroll && currentScroll > 50) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setPrevScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll, threshold]);

  return scrollDirection;
};
