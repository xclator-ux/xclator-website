"use client";
import { SOCIAL_LINKS, PRODUCTS } from "@/lib/constants";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth" });
}

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
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 56, alignItems: "flex-start", flexWrap: "wrap", gap: 32 }}>
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
        <div style={{ display: "flex", gap: 64, flexWrap: "wrap" }}>
          <FooterCol title="Products">
            {PRODUCTS.map((p) => (
              <li key={p.id}>
                <a
                  href={p.href}
                  target={p.href === "#" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                >
                  {p.name}
                </a>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Company">
            {[
              { label: "About",    id: "s-about" },
              { label: "Services", id: "s-services" },
              { label: "Contact",  id: "s-cta" },
            ].map((item) => (
              <li key={item.id}>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                  style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Connect">
            <li>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}>
                LinkedIn
              </a>
            </li>
            <li>
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}>
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${SOCIAL_LINKS.email}`} style={linkStyle}
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
          © 2026 Xclator. Built in Pakistan.
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
