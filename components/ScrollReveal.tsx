"use client";

import { useEffect, useRef, useState } from "react";

const defaultOptions = { rootMargin: "0px 0px -8% 0px", threshold: 0.1 };

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  options,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  options?: IntersectionObserverInit;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      options ?? defaultOptions
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={visible && delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
