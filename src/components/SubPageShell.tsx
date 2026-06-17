"use client";
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/**
 * Shell for all non-home pages. Provides its own scrollable wrapper so the
 * globally `overflow:hidden` body is overridden locally (cursor restored too),
 * with NO scroll-snap. Reuses the existing `.scene-enter` reveal pattern by
 * observing descendants and toggling `.in` on intersection.
 */
export default function SubPageShell({ children }: { children: React.ReactNode }) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const els = wrap.querySelectorAll<HTMLElement>(".scene-enter");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        }),
      { threshold: 0.12, root: wrap }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={wrapRef}
      style={{
        height: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
        background: "var(--bg)",
        cursor: "auto",
        scrollBehavior: "smooth",
      }}
    >
      <Navbar solid />
      <main style={{ position: "relative" }}>{children}</main>
      <Footer />
    </div>
  );
}
