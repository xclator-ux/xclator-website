"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function About() {
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
      id="s-about"
      style={{
        background: "linear-gradient(135deg, #000 0%, #05081A 100%)",
        padding: "0 56px",
      }}
    >
      <div
        className="about-grid"
        style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 80, alignItems: "center",
          width: "100%", maxWidth: 1200, margin: "0 auto",
        }}
      >
        {/* Left */}
        <div>
          <div className="scene-enter" style={{ marginBottom: 14 }}>
            <div style={{
              fontFamily: "var(--nu)", fontSize: 10, fontWeight: 700,
              letterSpacing: "0.22em", textTransform: "uppercase",
              color: "var(--muted)",
              display: "flex", alignItems: "center", gap: 10,
            }}>
              <span style={{ display: "block", width: 20, height: 1, background: "var(--muted)" }} />
              The Studio
            </div>
          </div>

          <h2
            className="scene-enter scene-enter-d1"
            style={{
              fontFamily: "var(--fj)",
              fontSize: "clamp(28px, 3vw, 44px)",
              fontWeight: 800, letterSpacing: "-0.025em",
              lineHeight: 1.2, marginBottom: 28,
            }}
          >
            Lean Team.<br />Real Products.<br />Shipped Fast.
          </h2>

          <p className="scene-enter scene-enter-d2" style={{
            color: "var(--muted)", fontSize: 15, lineHeight: 1.8,
            fontWeight: 500, marginBottom: 18,
          }}>
            Xclator AI LLC is a US-registered AI product studio. What started as an agency over two
            years ago grew into a product company, formalized in 2026 — led by founder Abdul Moiz and a
            senior six-person team.
          </p>

          <p className="scene-enter scene-enter-d2" style={{
            color: "var(--muted)", fontSize: 15, lineHeight: 1.8,
            fontWeight: 500, marginBottom: 24,
          }}>
            Small team, big output. We ship our own SaaS products and build custom AI systems for
            clients — moving faster than groups many times our size. That&apos;s the edge.
          </p>

          <div className="scene-enter scene-enter-d2">
            <Link href="/about" style={{
              fontFamily: "var(--nu)", fontSize: 14, fontWeight: 700,
              color: "var(--orange)", textDecoration: "none",
            }}>
              Read our story →
            </Link>
          </div>

          <div className="scene-enter scene-enter-d3" style={{
            display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap",
          }}>
            <SocialBtn href={SOCIAL_LINKS.linkedin} label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16 }}>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </SocialBtn>

            <SocialBtn href={SOCIAL_LINKS.whatsapp} label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.932-1.438C8.37 21.483 10.132 22 11.999 22 17.523 22 22 17.523 22 12S17.523 2 11.999 2z" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </SocialBtn>

            <SocialBtn href={`mailto:${SOCIAL_LINKS.email}`} label="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 16, height: 16 }}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </SocialBtn>
          </div>
        </div>

        {/* Right — Founder photo */}
        <div
          className="about-visual scene-enter scene-enter-d2"
          style={{
            position: "relative", display: "flex",
            alignItems: "center", justifyContent: "center",
            height: 400,
          }}
        >
          {/* Outer ring */}
          <div style={{
            position: "absolute", width: 380, height: 380,
            borderRadius: "50%",
            border: "1px solid rgba(77,201,246,0.12)",
            animation: "ringBreath 7s ease-in-out infinite",
          }} />
          {/* Inner ring — slightly larger than photo */}
          <div style={{
            position: "absolute", width: 316, height: 316,
            borderRadius: "50%",
            border: "1px solid rgba(77,201,246,0.10)",
            animation: "ringBreath 7s ease-in-out 1.5s infinite",
          }} />

          {/* Photo container — floats + glows */}
          <div style={{
            position: "relative",
            width: 280, height: 280,
            borderRadius: "50%",
            flexShrink: 0,
            animation: "orbFloat 8s ease-in-out infinite",
            boxShadow: "0 0 120px rgba(77,201,246,0.12), 0 0 200px rgba(255,107,53,0.06)",
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/founder.jpg"
              alt="Abdul Moiz — Founder of Xclator"
              style={{
                width: 280, height: 280,
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
                opacity: 0.88,
                maskImage: "radial-gradient(circle, black 55%, transparent 82%)",
                WebkitMaskImage: "radial-gradient(circle, black 55%, transparent 82%)",
              }}
            />
            {/* Vignette — darkens the edges to dissolve into background */}
            <div style={{
              position: "absolute", inset: 0,
              borderRadius: "50%",
              background: "radial-gradient(circle at center, transparent 42%, rgba(0,0,4,0.35) 65%, rgba(0,0,4,0.82) 84%)",
              pointerEvents: "none",
            }} />
            {/* Color tint — pulls photo toward dark navy palette */}
            <div style={{
              position: "absolute", inset: 0,
              borderRadius: "50%",
              background: "rgba(5,10,24,0.22)",
              mixBlendMode: "color",
              pointerEvents: "none",
            }} />
          </div>

          {/* Floating badge — top right */}
          <div style={{
            position: "absolute", top: 50, right: 20,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid var(--border)",
            borderRadius: 14, padding: "10px 18px",
            backdropFilter: "blur(12px)",
            fontFamily: "var(--nu)", fontSize: 11, fontWeight: 700,
            color: "var(--muted)",
          }}>
            <span style={{ color: "var(--cyan)" }}>{"// shipping since 2026"}</span>
          </div>
          {/* Floating badge — bottom left */}
          <div style={{
            position: "absolute", bottom: 70, left: 10,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid var(--border)",
            borderRadius: 14, padding: "10px 18px",
            backdropFilter: "blur(12px)",
            fontFamily: "var(--nu)", fontSize: 11, fontWeight: 700,
            color: "var(--muted)",
          }}>
            <span style={{ color: "var(--orange)" }}>→ Pakistan to the world</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialBtn({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      style={{
        display: "inline-flex", alignItems: "center", gap: 9,
        fontFamily: "var(--nu)", fontSize: 13, fontWeight: 700,
        color: "rgba(255,255,255,0.65)", textDecoration: "none",
        padding: "10px 20px", borderRadius: 50,
        border: "1px solid var(--border)",
        background: "var(--glass)", backdropFilter: "blur(8px)",
        transition: "all 0.25s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "var(--white)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
        e.currentTarget.style.background = "rgba(255,255,255,0.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "rgba(255,255,255,0.65)";
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.background = "var(--glass)";
      }}
    >
      {children}
      {label}
    </a>
  );
}
