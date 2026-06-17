import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SubPageShell from "@/components/SubPageShell";
import JsonLd from "@/components/JsonLd";
import { PRODUCTS, getProduct } from "@/lib/products";
import { SITE_URL, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProduct(params.slug);
  if (!product) return { title: "Product" };
  return pageMeta({
    title: `${product.name} — ${product.oneLiner}`,
    description: product.shortDesc,
    path: `/products/${product.slug}`,
  });
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const accent = product.accent;
  const url = `${SITE_URL}/products/${product.slug}`;
  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDesc,
    brand: { "@type": "Brand", name: "Xclator AI LLC" },
    url,
    offers: {
      "@type": "Offer",
      price: product.price.replace(/[^0-9.]/g, ""),
      priceCurrency: "USD",
      availability: "https://schema.org/PreOrder",
      url,
    },
  };

  return (
    <SubPageShell>
      <JsonLd data={productLd} />
      {/* Hero */}
      <header
        style={{
          position: "relative", overflow: "hidden",
          background: "linear-gradient(160deg, #020510 0%, #000 100%)",
          padding: "130px 24px 56px",
        }}
      >
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
          <div
            style={{
              position: "absolute", top: "-20%", right: "-10%",
              width: "55vw", height: "55vw", borderRadius: "50%",
              filter: "blur(110px)",
              background: `radial-gradient(circle, ${accent}22, transparent 65%)`,
            }}
          />
        </div>
        <div className="grain-layer" />

        <div style={{ position: "relative", zIndex: 5, maxWidth: 880, margin: "0 auto" }}>
          <Link
            href="/products"
            style={{
              fontFamily: "var(--nu)", fontSize: 13, fontWeight: 600,
              color: "var(--muted)", textDecoration: "none",
              display: "inline-block", marginBottom: 28,
            }}
          >
            ← Back to Products
          </Link>

          <div className="scene-enter" style={{
            fontFamily: "var(--nu)", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.1em", color: accent, textTransform: "uppercase",
            marginBottom: 14, display: "flex", alignItems: "center",
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: "50%", background: accent,
              boxShadow: `0 0 10px ${accent}`, display: "inline-block", marginRight: 10,
              animation: "dotPulse 2.5s ease-in-out infinite",
            }} />
            {product.priceNote}
          </div>

          <h1 className="scene-enter scene-enter-d1" style={{
            fontFamily: "var(--fj)", fontSize: "clamp(44px, 6vw, 80px)",
            fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1,
            marginBottom: 18, color: "var(--white)",
            textShadow: `0 0 80px ${accent}33`,
          }}>
            <span style={{ color: accent }}>{product.name}</span>
          </h1>

          <p className="scene-enter scene-enter-d2" style={{
            fontFamily: "var(--fj)", fontSize: "clamp(20px, 2.6vw, 30px)",
            fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.25,
            color: "var(--white)", maxWidth: 620, marginBottom: 14,
          }}>
            {product.detailTagline}
          </p>

          <p className="scene-enter scene-enter-d2" style={{
            color: "var(--muted)", fontSize: 17, fontWeight: 500, lineHeight: 1.6,
            maxWidth: 620, marginBottom: 36,
          }}>
            {product.oneLiner}
          </p>

          {/* Price + buttons */}
          <div className="scene-enter scene-enter-d3" style={{
            display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap",
          }}>
            <div>
              <span style={{ fontFamily: "var(--fj)", fontSize: 36, fontWeight: 800, color: "var(--white)" }}>
                {product.price}
              </span>
              <span style={{ fontFamily: "var(--nu)", fontSize: 14, fontWeight: 600, color: "var(--muted)", marginLeft: 10 }}>
                · {product.priceNote}
              </span>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
              <a
                href={product.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: accent, color: "#000",
                  fontFamily: "var(--nu)", fontWeight: 700, fontSize: 15,
                  padding: "14px 34px", borderRadius: 50,
                  textDecoration: "none", display: "inline-block",
                  boxShadow: `0 0 30px ${accent}40`,
                }}
              >
                Demo
              </a>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <button
                  disabled
                  title="Payments launching soon"
                  style={{
                    background: "transparent", color: "rgba(255,255,255,0.45)",
                    fontFamily: "var(--nu)", fontWeight: 700, fontSize: 15,
                    padding: "14px 30px", borderRadius: 50,
                    border: "1px solid var(--border)",
                    cursor: "not-allowed", opacity: 0.6,
                  }}
                >
                  Buy Now — Coming Soon
                </button>
              </div>
            </div>
          </div>
          <p className="scene-enter scene-enter-d3" style={{
            fontFamily: "var(--nu)", fontSize: 12, fontWeight: 500,
            color: "rgba(255,255,255,0.3)", marginTop: 10,
          }}>
            Payments launching soon.
          </p>
        </div>
      </header>

      {/* What it does + features */}
      <section style={{ padding: "64px 24px 24px" }}>
        <div style={{
          maxWidth: 880, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr", gap: 56,
        }}>
          {/* What it does */}
          <div>
            <h2 className="scene-enter" style={{
              fontFamily: "var(--fj)", fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 22,
            }}>
              What it does
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {product.whatItDoes.map((line, i) => (
                <p key={i} className="scene-enter scene-enter-d1" style={{
                  color: "var(--muted)", fontSize: 16, fontWeight: 500, lineHeight: 1.7,
                }}>
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Key features */}
          <div className="scene-enter" style={{
            background: "var(--glass)", border: "1px solid var(--border)",
            borderRadius: 20, padding: "36px 36px",
          }}>
            <h2 style={{
              fontFamily: "var(--fj)", fontSize: "clamp(22px, 2.6vw, 30px)",
              fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 22,
            }}>
              Key features
            </h2>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16 }}>
              {product.features.map((f, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <span style={{
                    flexShrink: 0, marginTop: 4,
                    width: 18, height: 18, borderRadius: "50%",
                    background: `${accent}22`, border: `1px solid ${accent}`,
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    color: accent, fontSize: 11, fontWeight: 800,
                  }}>
                    ✓
                  </span>
                  <span style={{ color: "var(--white)", fontSize: 15, fontWeight: 600, lineHeight: 1.5, opacity: 0.9 }}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section style={{
        position: "relative", overflow: "hidden",
        padding: "72px 24px 96px", textAlign: "center",
      }}>
        <div style={{
          position: "absolute", width: 500, height: 500, borderRadius: "50%",
          filter: "blur(120px)", background: `radial-gradient(circle, ${accent}14, transparent 70%)`,
          top: "50%", left: "50%", transform: "translate(-50%, -50%)", pointerEvents: "none",
        }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 640, margin: "0 auto" }}>
          <h2 className="scene-enter" style={{
            fontFamily: "var(--fj)", fontSize: "clamp(26px, 3.4vw, 42px)",
            fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: 16,
          }}>
            Want this customized for your business?
          </h2>
          <p className="scene-enter scene-enter-d1" style={{
            color: "var(--muted)", fontSize: 16, fontWeight: 500, marginBottom: 32,
          }}>
            We tailor and extend our products for specific workflows. Let&apos;s talk.
          </p>
          <Link href="/contact" className="scene-enter scene-enter-d2" style={{
            background: "var(--orange)", color: "var(--white)",
            fontFamily: "var(--nu)", fontWeight: 700, fontSize: 16,
            padding: "16px 40px", borderRadius: 50,
            textDecoration: "none", display: "inline-block",
          }}>
            Contact Us
          </Link>
        </div>
      </section>
    </SubPageShell>
  );
}
