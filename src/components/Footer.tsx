"use client";
import Link from "next/link";
import { PRODUCTS } from "@/lib/products";
import { COMPANY } from "@/lib/company";

export default function Footer() {
  return (
    <footer
      id="s-footer"
      style={{
        height: "auto", scrollSnapAlign: "start",
        background: "#000",
        borderTop: "1px solid var(--border)",
        padding: "64px 56px 40px",
        display: "block",
      }}
    >
      <div className="footer-top" style={{ display: "flex", justifyContent: "space-between", marginBottom: 56, alignItems: "flex-start", flexWrap: "wrap", gap: 32 }}>
        {/* Brand */}
        <div>
          <div style={{
            fontFamily: "var(--fj)", fontWeight: 800, fontSize: 22,
            color: "var(--white)", marginBottom: 6, letterSpacing: "-0.02em",
          }}>
            Xcl<em style={{ color: "var(--orange)", fontStyle: "normal" }}>a</em>tor
          </div>
          <div style={{ color: "var(--muted)", fontSize: 13, fontWeight: 600 }}>
            Ship AI Products.
          </div>
        </div>

        {/* Columns */}
        <div className="footer-cols" style={{ display: "flex", gap: 64, flexWrap: "wrap" }}>
          <FooterCol title="Products">
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                <Link href={`/products/${p.slug}`} style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}>
                  {p.name}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Company">
            {[
              { label: "About", href: "/about" },
              { label: "Services", href: "/#services" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <li key={item.label}>
                <Link href={item.href} style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}>
                  {item.label}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Legal">
            {[
              { label: "Privacy Policy", href: "/legal/privacy" },
              { label: "Refund Policy", href: "/legal/refund" },
              { label: "Terms & Conditions", href: "/legal/terms" },
            ].map((item) => (
              <li key={item.label}>
                <Link href={item.href} style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}>
                  {item.label}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Connect">
            <li>
              <a href={COMPANY.socials.linkedin} target="_blank" rel="noopener noreferrer" style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}>
                LinkedIn
              </a>
            </li>
            <li>
              <a href={COMPANY.socials.whatsapp} target="_blank" rel="noopener noreferrer" style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}>
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${COMPANY.email}`} style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}>
                Email
              </a>
            </li>
          </FooterCol>
        </div>
      </div>

      <div style={{ borderTop: "1px solid var(--border)", paddingTop: 28, textAlign: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 13, fontWeight: 500 }}>
          © 2026 Xclator AI LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const linkStyle: React.CSSProperties = {
  color: "rgba(255,255,255,0.45)",
  fontSize: 14, fontWeight: 500,
  textDecoration: "none", transition: "color 0.2s",
};

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 style={{
        fontFamily: "var(--nu)", fontSize: 11, fontWeight: 700,
        letterSpacing: "0.15em", textTransform: "uppercase",
        color: "var(--muted)", marginBottom: 20,
      }}>
        {title}
      </h4>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
        {children}
      </ul>
    </div>
  );
}
