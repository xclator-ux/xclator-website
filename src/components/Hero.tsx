"use client";
import { useEffect, useRef } from "react";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  const blob1 = useRef<HTMLDivElement>(null);
  const blob2 = useRef<HTMLDivElement>(null);
  const blob3 = useRef<HTMLDivElement>(null);
  const blob4 = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);

  /* ── Aurora parallax ── */
  useEffect(() => {
    const blobs = [
      { el: blob1.current, sx: 0.012, sy: 0.008 },
      { el: blob2.current, sx: -0.018, sy: -0.010 },
      { el: blob3.current, sx: 0.010, sy: -0.014 },
      { el: blob4.current, sx: -0.022, sy: 0.016 },
    ];
    let tx = 0, ty = 0, cx = 0, cy = 0;
    if (window.matchMedia("(hover: none)").matches) return;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX - window.innerWidth / 2;
      ty = e.clientY - window.innerHeight / 2;
    };
    document.addEventListener("mousemove", onMove);
    let raf: number;
    const tick = () => {
      cx += (tx - cx) * 0.07;
      cy += (ty - cy) * 0.07;
      blobs.forEach((b) => {
        if (!b.el) return;
        b.el.style.transform = `translate(${cx * b.sx * 20}px, ${cy * b.sy * 20}px)`;
      });
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  /* ── Letter split on hero exit ── */
  useEffect(() => {
    const h1 = h1Ref.current;
    if (!h1) return;

    // Wrap each character in a span
    const wrap = (node: Node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const frag = document.createDocumentFragment();
        [...(node.textContent ?? "")].forEach((ch) => {
          if (ch === " " || ch === "\n") {
            frag.appendChild(document.createTextNode(ch));
            return;
          }
          const s = document.createElement("span");
          s.className = "hero-letter";
          s.textContent = ch;
          frag.appendChild(s);
        });
        node.parentNode?.replaceChild(frag, node);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        [...node.childNodes].forEach(wrap);
      }
    };
    [...h1.childNodes].forEach(wrap);

    let exited = false;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting && !exited) {
          exited = true;
          const letters = h1.querySelectorAll<HTMLElement>(".hero-letter");
          letters.forEach((l, i) => {
            const angle = (Math.random() - 0.5) * 120;
            const dist  = 60 + Math.random() * 80;
            const dir   = i % 2 === 0 ? -1 : 1;
            l.style.transition = `transform ${0.45 + Math.random() * 0.2}s cubic-bezier(0.16,1,0.3,1) ${i * 0.018}s, opacity 0.4s ease ${i * 0.018}s`;
            l.style.transform  = `translate(${dir * dist * 0.6}px, ${-dist * 0.4}px) rotate(${angle}deg)`;
            l.style.opacity    = "0";
          });
          setTimeout(() => {
            letters.forEach((l) => {
              l.style.transition = "none";
              l.style.transform  = "";
              l.style.opacity    = "";
            });
            exited = false;
          }, 1400);
        }
      });
    }, { threshold: 0.05 });
    io.observe(h1.closest(".snap-section") ?? h1);
    return () => io.disconnect();
  }, []);

  return (
    <section
      className="snap-section"
      id="s-hero"
      style={{ background: "#000", alignItems: "stretch", justifyContent: "stretch" }}
    >
      {/* Aurora */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div ref={blob1} className="aurora-blob aurora-blob-1" />
        <div ref={blob2} className="aurora-blob aurora-blob-2" />
        <div ref={blob3} className="aurora-blob aurora-blob-3" />
        <div ref={blob4} className="aurora-blob aurora-blob-4" />
      </div>
      <div className="grain-layer" />

      {/* Content */}
      <div
        style={{
          position: "relative", zIndex: 5,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          textAlign: "center", width: "100%", height: "100%",
          padding: "0 32px",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "flex", alignItems: "center", gap: 12,
            justifyContent: "center", marginBottom: 28,
            opacity: 0, transform: "translateY(12px)",
            animation: "fadeUp 0.7s 0.2s forwards",
          }}
        >
          <div style={{ width: 24, height: 1, background: "var(--orange)", flexShrink: 0 }} />
          <span style={{
            fontFamily: "var(--nu)", fontSize: 12, fontWeight: 700,
            letterSpacing: "0.25em", textTransform: "uppercase",
            color: "var(--orange)",
          }}>
            AI Product Studio
          </span>
          <div style={{ width: 24, height: 1, background: "var(--orange)", flexShrink: 0 }} />
        </div>

        {/* Headline */}
        <h1
          ref={h1Ref}
          style={{
            fontFamily: "var(--fj)",
            fontSize: "clamp(52px, 6.5vw, 96px)",
            fontWeight: 800, lineHeight: 0.95,
            letterSpacing: "-0.03em", marginBottom: 24,
            textShadow: "0 0 60px rgba(255,255,255,0.08)",
            opacity: 0, transform: "translateY(24px)",
            animation: "fadeUp 0.9s 0.4s forwards",
          }}
        >
          We Build AI<br />
          Products That{" "}
          <span style={{ color: "var(--orange)", textShadow: "0 0 80px rgba(255,107,53,0.3)" }}>
            Ship.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "var(--nu)", fontSize: 19, fontWeight: 500,
            color: "var(--muted)", lineHeight: 1.6, maxWidth: 500,
            marginBottom: 40,
            opacity: 0, transform: "translateY(16px)",
            animation: "fadeUp 0.8s 0.6s forwards",
          }}
        >
          Product studio. AI agency. From Pakistan to the world.
        </p>

        {/* CTAs */}
        <div
          className="hero-btns"
          style={{
            display: "flex", gap: 16, justifyContent: "center",
            flexWrap: "wrap", marginBottom: 48,
            opacity: 0, transform: "translateY(16px)",
            animation: "fadeUp 0.8s 0.78s forwards",
          }}
        >
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); scrollToSection("s-products"); }}
            style={{
              background: "var(--orange)", color: "var(--white)",
              fontFamily: "var(--nu)", fontWeight: 700, fontSize: 16,
              padding: "16px 40px", borderRadius: 50,
              textDecoration: "none",
              animation: "ctaPulse 3s ease-in-out infinite",
              transition: "transform 0.25s, box-shadow 0.25s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px) scale(1.03)";
              e.currentTarget.style.boxShadow = "0 0 70px rgba(255,107,53,0.6)";
              e.currentTarget.style.animation = "none";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = "";
              e.currentTarget.style.animation = "ctaPulse 3s ease-in-out infinite";
            }}
          >
            Explore Products →
          </a>
          <a
            href="https://wa.me/923019172774"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "transparent", color: "var(--white)",
              fontFamily: "var(--nu)", fontWeight: 600, fontSize: 16,
              padding: "16px 40px", borderRadius: 50,
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(8px)", display: "inline-block",
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
              e.currentTarget.style.background  = "rgba(255,255,255,0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              e.currentTarget.style.background  = "transparent";
            }}
          >
            Work With Us
          </a>
        </div>

        {/* Social proof */}
        <div
          style={{
            fontFamily: "var(--nu)", fontSize: 13, fontWeight: 400,
            color: "var(--muted)", letterSpacing: "0.02em",
            opacity: 0, transform: "translateY(14px)",
            animation: "fadeUp 0.8s 1.0s forwards",
          }}
        >
          4 products shipped
          <span style={{ margin: "0 8px", opacity: 0.4 }}>·</span>
          10K+ API calls
          <span style={{ margin: "0 8px", opacity: 0.4 }}>·</span>
          99% accuracy
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute", bottom: 40, left: "50%",
          transform: "translateX(-50%)",
          display: "flex", flexDirection: "column",
          alignItems: "center", gap: 10, zIndex: 20,
          opacity: 0, animation: "fadeUp 0.8s 1.3s forwards",
        }}
      >
        <span style={{
          fontFamily: "var(--nu)", fontSize: 11, fontWeight: 700,
          letterSpacing: "0.3em", textTransform: "uppercase",
          color: "var(--muted)",
        }}>
          Scroll
        </span>
        <div style={{
          width: 1, height: 40,
          background: "rgba(255,255,255,0.1)",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: -10, left: -1,
            width: 3, height: 10,
            background: "var(--orange)", borderRadius: 2,
            boxShadow: "0 0 8px var(--orange)",
            animation: "travelDown 2s ease-in-out infinite",
          }} />
        </div>
      </div>
    </section>
  );
}
