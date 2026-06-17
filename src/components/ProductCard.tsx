"use client";
import { useRouter } from "next/navigation";
import type { Product } from "@/lib/products";

export default function ProductCard({ product, delay }: { product: Product; delay: string }) {
  const router = useRouter();
  const detailHref = `/products/${product.slug}`;

  return (
    <div
      className={`pcard scene-enter ${delay}`}
      role="link"
      tabIndex={0}
      onClick={() => router.push(detailHref)}
      onKeyDown={(e) => { if (e.key === "Enter") router.push(detailHref); }}
      style={{
        background: "var(--glass)",
        border: "1px solid var(--border)",
        borderRadius: 20, padding: 32,
        position: "relative", overflow: "hidden",
        cursor: "pointer",
        display: "flex", flexDirection: "column",
        transition: "transform 0.4s cubic-bezier(0.23,1,0.32,1), border-color 0.3s, box-shadow 0.4s",
        ["--c" as string]: product.accent,
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
        background: `linear-gradient(90deg, transparent, ${product.accent}, transparent)`,
        opacity: 0.6,
      }} />

      {/* Blob */}
      <div
        className="pcard-blob"
        style={{
          position: "absolute", top: -40, right: -40,
          width: 180, height: 180, borderRadius: "50%",
          background: `radial-gradient(circle, ${product.accent}, transparent 70%)`,
          opacity: 0.07, pointerEvents: "none",
          transition: "opacity 0.3s",
        }}
      />

      {/* Tag */}
      <div style={{
        fontFamily: "var(--nu)", fontSize: 10, fontWeight: 700,
        letterSpacing: "0.1em", color: product.accent,
        textTransform: "uppercase", marginBottom: 12,
        display: "flex", alignItems: "center",
      }}>
        <span style={{
          width: 7, height: 7, borderRadius: "50%",
          background: product.accent,
          boxShadow: `0 0 10px ${product.accent}`,
          display: "inline-block", marginRight: 8,
          animation: "dotPulse 2.5s ease-in-out infinite",
        }} />
        {product.name}
      </div>

      <div style={{
        fontFamily: "var(--fj)", fontSize: 26, fontWeight: 800,
        letterSpacing: "-0.02em", color: "var(--white)", marginBottom: 10,
      }}>
        {product.name}
      </div>

      <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.65, marginBottom: 20, fontWeight: 500, flex: 1 }}>
        {product.shortDesc}
      </p>

      {/* Price */}
      <div style={{ marginBottom: 20 }}>
        <span style={{ fontFamily: "var(--fj)", fontSize: 26, fontWeight: 800, color: "var(--white)" }}>
          {product.price}
        </span>
        <span style={{ fontFamily: "var(--nu)", fontSize: 13, fontWeight: 600, color: "var(--muted)", marginLeft: 8 }}>
          · {product.priceNote}
        </span>
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
        <a
          href={product.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          style={{
            background: product.accent, color: "#000",
            fontFamily: "var(--nu)", fontWeight: 700, fontSize: 14,
            padding: "11px 26px", borderRadius: 50,
            textDecoration: "none", display: "inline-block",
            transition: "transform 0.2s, box-shadow 0.2s",
            boxShadow: `0 0 24px ${product.accent}40`,
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = `0 0 36px ${product.accent}66`; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = `0 0 24px ${product.accent}40`; }}
        >
          Demo
        </a>

        <div onClick={(e) => e.stopPropagation()} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <button
            disabled
            title="Payments launching soon"
            style={{
              background: "transparent", color: "rgba(255,255,255,0.45)",
              fontFamily: "var(--nu)", fontWeight: 700, fontSize: 14,
              padding: "11px 24px", borderRadius: 50,
              border: "1px solid var(--border)",
              cursor: "not-allowed", opacity: 0.6,
            }}
          >
            Buy Now — Coming Soon
          </button>
        </div>
      </div>
      <div style={{ fontFamily: "var(--nu)", fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,0.3)", marginTop: 8 }}>
        Payments launching soon.
      </div>
    </div>
  );
}
