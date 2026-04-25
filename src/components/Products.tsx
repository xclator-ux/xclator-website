"use client";
import { useEffect, useRef } from "react";
import { PRODUCTS } from "@/lib/constants";

export default function Products() {
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
      id="s-products"
      style={{
        background: "linear-gradient(160deg, #020510 0%, #000 100%)",
        padding: "0 56px",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto", padding: "80px 0 40px" }}>
        <div className="scene-enter">
          <div style={{
            fontFamily: "var(--nu)", fontSize: 10, fontWeight: 700,
            letterSpacing: "0.22em", textTransform: "uppercase",
            color: "var(--muted)", marginBottom: 12,
            display: "flex", alignItems: "center", gap: 10,
          }}>
            <span style={{ display: "block", width: 20, height: 1, background: "var(--muted)" }} />
            Portfolio
          </div>
        </div>

        <div className="scene-enter scene-enter-d1">
          <h2 style={{
            fontFamily: "var(--fj)",
            fontSize: "clamp(32px, 3.5vw, 52px)",
            fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 8,
          }}>
            What We&apos;ve Shipped
          </h2>
        </div>

        <div className="scene-enter scene-enter-d1">
          <p style={{ color: "var(--muted)", fontSize: 15, marginBottom: 40, fontWeight: 500 }}>
            Live products generating real value.
          </p>
        </div>

        {/* Grid */}
        <div className="products-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.id} product={p} delay={i < 2 ? "scene-enter-d2" : "scene-enter-d3"} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, delay }: { product: typeof PRODUCTS[number]; delay: string }) {
  const card = (
    <div
      className={`pcard scene-enter ${delay}`}
      style={{
        background: "var(--glass)",
        border: "1px solid var(--border)",
        borderRadius: 20, padding: 32,
        position: "relative", overflow: "hidden",
        cursor: "none",
        transition: "transform 0.4s cubic-bezier(0.23,1,0.32,1), border-color 0.3s, box-shadow 0.4s",
        opacity: product.comingSoon ? 0.75 : undefined,
        // CSS custom property via inline style
        ["--c" as string]: product.color,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
        const blob = e.currentTarget.querySelector<HTMLElement>(".pcard-blob");
        if (blob) blob.style.opacity = "0.14";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.borderColor = "var(--border)";
        const blob = e.currentTarget.querySelector<HTMLElement>(".pcard-blob");
        if (blob) blob.style.opacity = "0.07";
      }}
    >
      {/* Top border gradient */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 1,
        background: `linear-gradient(90deg, transparent, ${product.color}, transparent)`,
        opacity: 0.6,
      }} />

      {/* Blob */}
      <div
        className="pcard-blob"
        style={{
          position: "absolute", top: -40, right: -40,
          width: 180, height: 180, borderRadius: "50%",
          background: `radial-gradient(circle, ${product.color}, transparent 70%)`,
          opacity: 0.07, pointerEvents: "none",
          transition: "opacity 0.3s",
        }}
      />

      {/* Tag */}
      <div style={{
        fontFamily: "var(--nu)", fontSize: 10, fontWeight: 700,
        letterSpacing: "0.1em", color: product.color,
        textTransform: "uppercase", marginBottom: 10,
        display: "flex", alignItems: "center",
      }}>
        <span style={{
          width: 7, height: 7, borderRadius: "50%",
          background: product.color,
          boxShadow: `0 0 10px ${product.color}`,
          display: "inline-block", marginRight: 8,
          animation: "dotPulse 2.5s ease-in-out infinite",
        }} />
        {product.name}
        {product.comingSoon && (
          <span style={{
            fontFamily: "var(--nu)", fontSize: 9, fontWeight: 700,
            padding: "3px 10px", borderRadius: 50,
            background: "rgba(168,85,247,0.12)",
            border: "1px solid rgba(168,85,247,0.3)",
            color: "#A855F7", letterSpacing: "0.08em", marginLeft: 10,
          }}>
            Coming Soon
          </span>
        )}
      </div>

      <div style={{
        fontFamily: "var(--fj)", fontSize: 24, fontWeight: 800,
        letterSpacing: "-0.02em", color: "var(--white)", marginBottom: 8,
      }}>
        {product.name}
      </div>

      <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.65, marginBottom: 20, fontWeight: 500 }}>
        {product.description}
      </p>

      <div style={{ fontFamily: "Courier New, monospace", fontSize: 11, color: "rgba(255,255,255,0.2)", letterSpacing: "0.03em" }}>
        {product.url}
      </div>
    </div>
  );

  if (product.comingSoon) return card;

  return (
    <a href={product.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
      {card}
    </a>
  );
}
