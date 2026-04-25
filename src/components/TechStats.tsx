"use client";
import { useEffect, useRef } from "react";
import { TECH_STACK, STATS } from "@/lib/constants";

export default function TechStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const countersDone = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Scene-enter animation
    const sceneEls = section.querySelectorAll<HTMLElement>(".scene-enter");
    const sceneIo = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.15 }
    );
    sceneEls.forEach((el) => sceneIo.observe(el));

    // Counter animation
    const statEls = section.querySelectorAll<HTMLElement>("[data-target]");
    const counterIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting || countersDone.current) return;
          countersDone.current = true;
          statEls.forEach((el) => {
            const target = parseInt(el.dataset.target ?? "0", 10);
            const suffix = el.dataset.suffix ?? "";
            const dur = 2000;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / dur, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              el.textContent = Math.floor(eased * target) + suffix;
              if (p < 1) requestAnimationFrame(tick);
              else el.textContent = target + suffix;
            };
            requestAnimationFrame(tick);
            counterIo.unobserve(el);
          });
        });
      },
      { threshold: 0.5 }
    );
    if (statEls.length) counterIo.observe(statEls[0]);

    return () => { sceneIo.disconnect(); counterIo.disconnect(); };
  }, []);

  const techItems = [...TECH_STACK, ...TECH_STACK]; // duplicate for seamless loop

  return (
    <section
      ref={sectionRef}
      className="snap-section"
      id="s-stats"
      style={{
        background: "linear-gradient(180deg, #030814 0%, #000 100%)",
        padding: "0 56px",
        flexDirection: "column",
        gap: 0,
      }}
    >
      {/* Tech marquee */}
      <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto", paddingTop: 80 }}>
        <div
          className="scene-enter"
          style={{
            fontFamily: "var(--nu)", fontSize: 10, fontWeight: 700,
            letterSpacing: "0.22em", textTransform: "uppercase",
            color: "var(--muted)", textAlign: "center", marginBottom: 32,
          }}
        >
          Built With
        </div>

        <div
          className="scene-enter scene-enter-d1"
          style={{
            overflow: "hidden", width: "100%",
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div
            style={{
              display: "flex", width: "max-content",
              animation: "marquee 24s linear infinite",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
            onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
          >
            {techItems.map((tech, i) => (
              <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
                <span
                  style={{
                    fontFamily: "var(--nu)", fontSize: 13, fontWeight: 700,
                    color: "rgba(255,255,255,0.35)",
                    padding: "0 32px", whiteSpace: "nowrap",
                    letterSpacing: "0.02em",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
                >
                  {tech}
                </span>
                <span style={{ color: "rgba(255,255,255,0.1)", padding: "0 4px" }}>·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{
        width: "100%", maxWidth: 1200, height: 1,
        background: "var(--border)", margin: "56px auto",
      }} />

      {/* Stats */}
      <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto" }}>
        <div
          className="stats-grid scene-enter"
          style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1, background: "var(--border)",
            border: "1px solid var(--border)",
            borderRadius: 24, overflow: "hidden",
          }}
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              style={{ background: "#000", padding: "44px 36px", textAlign: "center" }}
            >
              <div
                data-target={stat.target}
                data-suffix={stat.suffix}
                style={{
                  fontFamily: "var(--fj)",
                  fontSize: "clamp(44px, 5vw, 72px)",
                  fontWeight: 800, letterSpacing: "-0.04em",
                  lineHeight: 1, color: "var(--white)", marginBottom: 10,
                }}
              >
                {stat.target}{stat.suffix}
              </div>
              <div style={{
                fontFamily: "var(--nu)", fontSize: 13, fontWeight: 600,
                color: "var(--muted)", letterSpacing: "0.02em",
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
