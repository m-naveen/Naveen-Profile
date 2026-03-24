import React, { useRef, useEffect, useState } from "react";
import "./AnimatedSection.css";

export default function AnimatedSection({ children, className = "", delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Once visible, stop observing so it doesn't animate out and in repeatedly
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    const el = domRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <div
      className={`animated-section ${isVisible ? "is-visible" : ""} ${className}`}
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
