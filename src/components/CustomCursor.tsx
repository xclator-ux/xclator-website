"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;

    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMove = (e: MouseEvent) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      dot.style.left = e.clientX + "px";
      dot.style.top  = e.clientY + "px";
    };
    document.addEventListener("mousemove", onMove);

    let raf: number;
    const animate = () => {
      pos.current.rx += (pos.current.mx - pos.current.rx) * 0.1;
      pos.current.ry += (pos.current.my - pos.current.ry) * 0.1;
      ring.style.left = pos.current.rx + "px";
      ring.style.top  = pos.current.ry + "px";
      raf = requestAnimationFrame(animate);
    };
    animate();

    const expand = () => {
      dot.style.width  = "18px";
      dot.style.height = "18px";
      ring.style.width  = "50px";
      ring.style.height = "50px";
    };
    const shrink = () => {
      dot.style.width  = "10px";
      dot.style.height = "10px";
      ring.style.width  = "34px";
      ring.style.height = "34px";
    };
    document.querySelectorAll("a, button, .pcard, .spanel").forEach((el) => {
      el.addEventListener("mouseenter", expand);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        id="custom-cursor"
        ref={dotRef}
        style={{
          width: 10, height: 10,
          background: "var(--orange)",
          borderRadius: "50%",
          position: "fixed", top: 0, left: 0,
          pointerEvents: "none", zIndex: 9999,
          transform: "translate(-50%,-50%)",
          transition: "width 0.2s, height 0.2s",
          mixBlendMode: "screen",
        }}
      />
      <div
        id="custom-cursor-ring"
        ref={ringRef}
        style={{
          width: 34, height: 34,
          border: "1px solid rgba(255,107,53,0.35)",
          borderRadius: "50%",
          position: "fixed", top: 0, left: 0,
          pointerEvents: "none", zIndex: 9998,
          transform: "translate(-50%,-50%)",
          transition: "width 0.25s, height 0.25s",
        }}
      />
    </>
  );
}
