import type { Metadata } from "next";
import Link from "next/link";
import SubPageShell from "@/components/SubPageShell";
import PageHeader from "@/components/PageHeader";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products — Xclator AI LLC | LeadHawk, ScribeFlow, MapMotion, Mobile ERP",
  description:
    "Explore Xclator's AI-powered software products — LeadHawk, ScribeFlow, MapMotion, and Mobile ERP. Lifetime access, built and shipped by Xclator AI LLC.",
};

export default function ProductsPage() {
  return (
    <SubPageShell>
      <PageHeader
        eyebrow="Products"
        title={<>Software We&apos;ve Built<br />— Yours for Life.</>}
        subtitle="Production-grade AI tools, shipped and live. Each one is a one-time purchase with lifetime access — no subscriptions, no surprises."
      />

      <section style={{ padding: "8px 24px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="products-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {PRODUCTS.map((p, i) => (
              <ProductCard key={p.slug} product={p} delay={i < 2 ? "scene-enter-d1" : "scene-enter-d2"} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom systems band */}
      <section
        style={{
          position: "relative", overflow: "hidden",
          background: "linear-gradient(180deg, #000 0%, #050A18 60%, #000 100%)",
          borderTop: "1px solid var(--border)",
          padding: "88px 24px",
          textAlign: "center",
        }}
      >
        <div style={{
          position: "absolute", width: 600, height: 600, borderRadius: "50%",
          filter: "blur(120px)", background: "radial-gradient(circle, rgba(255,107,53,0.08), transparent 70%)",
          top: "50%", left: "50%", transform: "translate(-50%, -50%)", pointerEvents: "none",
        }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 760, margin: "0 auto" }}>
          <h2 className="scene-enter" style={{
            fontFamily: "var(--fj)", fontSize: "clamp(30px, 4vw, 52px)",
            fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 18,
          }}>
            Need something built just for you?
          </h2>
          <p className="scene-enter scene-enter-d1" style={{
            color: "var(--muted)", fontSize: 17, fontWeight: 500, lineHeight: 1.7, marginBottom: 36,
          }}>
            We design and ship custom AI systems, internal tools, and bespoke software for businesses
            that have outgrown off-the-shelf. Tell us what you need — we&apos;ll build it.
          </p>
          <Link
            href="/contact"
            className="scene-enter scene-enter-d2"
            style={{
              background: "var(--orange)", color: "var(--white)",
              fontFamily: "var(--nu)", fontWeight: 700, fontSize: 16,
              padding: "16px 40px", borderRadius: 50,
              textDecoration: "none", display: "inline-block",
              animation: "glowPulse 3s ease-in-out infinite",
            }}
          >
            Contact Us
          </Link>
        </div>
      </section>
    </SubPageShell>
  );
}
