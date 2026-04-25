"use client";
import { useEffect, useRef } from "react";
import { SERVICES } from "@/lib/constants";

export default function Services() {
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
      id="s-services"
      style={{
        background: "linear-gradient(180deg, #000 0%, #030814 100%)",
        padding: "0 56px",
      }}
    >
      <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto", padding: "80px 0" }}>
        {/* Header */}
        <div className="scene-enter">
          <div style={{
            fontFamily: "var(--nu)", fontSize: 10, fontWeight: 700,
            letterSpacing: "0.22em", textTransform: "uppercase",
            color: "var(--muted)", marginBottom: 12,
            display: "flex", alignItems: "center", gap: 10,
          }}>
            <span style={{ display: "block", width: 20, height: 1, background: "var(--muted)" }} />
            Capabilities
          </div>
        </div>
        <div className="scene-enter scene-enter-d1">
          <h2 style={{
            fontFamily: "var(--fj)", fontSize: "clamp(32px, 3.5vw, 52px)",
            fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 0,
          }}>
            What We Do
          </h2>
        </div>

        {/* Panels */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
            marginTop: 48,
            height: "calc(100vh - 240px)",
          }}
          className="services-panels max-md:grid-cols-1 max-md:h-auto"
          onMouseLeave={(e) => {
            e.currentTarget.querySelectorAll<HTMLElement>(".spanel").forEach((p) => {
              p.style.opacity = "1";
            });
          }}
        >
          {SERVICES.map((s, i) => (
            <div
              key={s.num}
              className={`spanel scene-enter scene-enter-d${i + 2}`}
              style={{
                background: "var(--glass)",
                border: "1px solid var(--border)",
                borderRadius: 24, padding: "40px 32px",
                position: "relative", overflow: "hidden",
                cursor: "none",
                display: "flex", flexDirection: "column",
                transition: "transform 0.4s cubic-bezier(0.23,1,0.32,1), opacity 0.3s, border-color 0.3s, box-shadow 0.4s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.boxShadow = "0 40px 100px rgba(0,0,0,0.6), 0 0 60px rgba(255,107,53,0.06)";
                // Dim siblings
                e.currentTarget.parentElement?.querySelectorAll<HTMLElement>(".spanel").forEach((p) => {
                  if (p !== e.currentTarget) p.style.opacity = "0.45";
                });
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.boxShadow = "";
                e.currentTarget.parentElement?.querySelectorAll<HTMLElement>(".spanel").forEach((p) => {
                  p.style.opacity = "1";
                });
              }}
            >
              {/* Watermark */}
              <div style={{
                position: "absolute", top: 20, right: 28,
                fontFamily: "var(--fj)", fontSize: 140,
                fontWeight: 800, lineHeight: 1,
                color: "var(--orange)", opacity: 0.05,
                letterSpacing: "-0.05em",
                pointerEvents: "none", userSelect: "none",
              }}>
                {s.num}
              </div>

              <div style={{ fontSize: 28, marginBottom: 28, lineHeight: 1 }}>{s.icon}</div>

              <div style={{
                fontFamily: "var(--fj)", fontSize: 20, fontWeight: 800,
                letterSpacing: "-0.02em", marginBottom: 14,
              }}>
                {s.title}
              </div>

              <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.75, fontWeight: 500, flex: 1 }}>
                {s.body}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 28 }}>
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "var(--nu)", fontSize: 10, fontWeight: 700,
                      letterSpacing: "0.07em", color: "rgba(255,255,255,0.4)",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid var(--border)",
                      padding: "5px 12px", borderRadius: 50,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
