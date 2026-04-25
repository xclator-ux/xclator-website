"use client";
import { useEffect, useState } from "react";
import { SECTIONS } from "@/lib/constants";

export default function SectionDots() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sc = document.getElementById("scroll-container");
    if (!sc) return;
    const onScroll = () => {
      const idx = Math.round(sc.scrollTop / window.innerHeight);
      setActive(Math.min(idx, SECTIONS.length - 1));
    };
    sc.addEventListener("scroll", onScroll, { passive: true });
    return () => sc.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (idx: number) => {
    const el = document.getElementById(SECTIONS[idx]);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      id="section-dots"
      style={{
        position: "fixed", right: 28, top: "50%",
        transform: "translateY(-50%)",
        display: "flex", flexDirection: "column", gap: 10,
        zIndex: 900,
      }}
    >
      {SECTIONS.map((_, i) => (
        <button
          key={i}
          onClick={() => scrollTo(i)}
          style={{
            width: 5, height: 5,
            borderRadius: "50%",
            background: active === i ? "var(--orange)" : "rgba(255,255,255,0.2)",
            border: "none", padding: 0, cursor: "pointer",
            transition: "all 0.3s",
            transform: active === i ? "scale(1.6)" : "scale(1)",
            boxShadow: active === i ? "0 0 8px rgba(255,107,53,0.6)" : "none",
          }}
          title={SECTIONS[i]}
        />
      ))}
    </nav>
  );
}
