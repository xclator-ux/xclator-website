"use client";
import { useEffect, useRef } from "react";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth" });
}

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const els = section.querySelectorAll<HTMLElement>(".scene-enter");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="snap-section"
      id="s-cta"
      style={{
        background: "linear-gradient(180deg, #000 0%, #050A18 60%, #000 100%)",
        textAlign: "center", position: "relative",
      }}
    >
      {/* Blobs */}
      <div style={{
        position: "absolute", width: 600, height: 600,
        borderRadius: "50%", filter: "blur(120px)",
        background: "radial-gradient(circle, rgba(255,107,53,0.08), transparent 70%)",
        top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", width: 400, height: 400,
        borderRadius: "50%", filter: "blur(120px)",
        background: "radial-gradient(circle, rgba(77,201,246,0.06), transparent 70%)",
        top: "50%", left: "40%", transform: "translate(-50%, -50%)",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 2, padding: "0 24px" }}>
        <div className="scene-enter" style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
          <div style={{
            fontFamily: "var(--nu)", fontSize: 10, fontWeight: 700,
            letterSpacing: "0.22em", textTransform: "uppercase",
            color: "var(--muted)",
            display: "flex", alignItems: "center", gap: 10,
          }}>
            <span style={{ display: "block", width: 20, height: 1, background: "var(--muted)" }} />
            Let&apos;s Build
            <span style={{ display: "block", width: 20, height: 1, background: "var(--muted)" }} />
          </div>
        </div>

        <h2
          className="scene-enter scene-enter-d1"
          style={{
            fontFamily: "var(--fj)",
            fontSize: "clamp(40px, 5.5vw, 80px)",
            fontWeight: 800, letterSpacing: "-0.03em",
            lineHeight: 1.05, marginBottom: 18,
            textShadow: "0 0 80px rgba(255,255,255,0.08)",
          }}
        >
          Ready to Build<br />Something?
        </h2>

        <p
          className="scene-enter scene-enter-d2"
          style={{ color: "var(--muted)", fontSize: 18, fontWeight: 500, marginBottom: 48 }}
        >
          Let&apos;s talk about your next AI product.
        </p>

        <div
          className="scene-enter scene-enter-d3"
          style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
        >
          <a
            href="https://wa.me/923019172774"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "var(--orange)", color: "var(--white)",
              fontFamily: "var(--nu)", fontWeight: 700, fontSize: 16,
              padding: "16px 40px", borderRadius: 50,
              textDecoration: "none", display: "inline-block",
              animation: "glowPulse 3s ease-in-out infinite",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = ""; }}
          >
            Start a Project
          </a>

          <a
            href="#"
            onClick={(e) => { e.preventDefault(); scrollToSection("s-products"); }}
            style={{
              background: "transparent", color: "var(--white)",
              fontFamily: "var(--nu)", fontWeight: 600, fontSize: 16,
              padding: "16px 40px", borderRadius: 50,
              textDecoration: "none", display: "inline-block",
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(8px)", transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Explore Products
          </a>
        </div>
      </div>
    </section>
  );
}
