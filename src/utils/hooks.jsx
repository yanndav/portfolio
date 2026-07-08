import { useEffect, useRef } from "react";

export function useHorizontalScroll() {
  const sectionRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const projects = projectsRef.current;

    if (!section || !projects) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();

      const scrollProgress =
        -rect.top / (section.offsetHeight - window.innerHeight);

      const maxScroll = projects.scrollWidth - window.innerWidth;

      projects.style.transform = `translateX(-${scrollProgress * maxScroll}px)`;
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { sectionRef, projectsRef };
}
