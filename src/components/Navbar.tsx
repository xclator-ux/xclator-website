"use client";
import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/lib/constants";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [glass, setGlass] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sc = document.getElementById("scroll-container");
    if (!sc) return;
    const onScroll = () => setGlass(sc.scrollTop > 40);
    sc.addEventListener("scroll", onScroll, { passive: true });
    return () => sc.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      id="nav"
      style={{
        position: "fixed", top: 0, left: 0, right: 0,
        height: 64, zIndex: 1000,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 56px",
        transition: "background 0.4s, border-color 0.4s",
        background: glass ? "rgba(0,0,0,0.75)" : "transparent",
        backdropFilter: glass ? "blur(20px)" : "none",
        WebkitBackdropFilter: glass ? "blur(20px)" : "none",
        borderBottom: glass ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      {/* Logo */}
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); scrollToSection("s-hero"); }}
        style={{
          fontFamily: "var(--fj)", fontWeight: 800, fontSize: 20,
          color: "var(--white)", textDecoration: "none", letterSpacing: "-0.02em",
        }}
      >
        Xcl<em style={{ color: "var(--orange)", fontStyle: "normal" }}>a</em>tor
      </a>

      {/* Desktop Links */}
      <ul className="nav-desktop" style={{ display: "flex", gap: 36, listStyle: "none" }}>
        {NAV_ITEMS.map((item) => (
          <li key={item.sectionId}>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); scrollToSection(item.sectionId); }}
              style={{
                fontFamily: "var(--nu)", fontSize: 14, fontWeight: 600,
                color: "rgba(255,255,255,0.55)", textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop CTA Button */}
      <a
        href="https://wa.me/923019172774"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-desktop"
        style={{
          background: "var(--orange)", color: "var(--white)",
          fontFamily: "var(--nu)", fontSize: 13, fontWeight: 700,
          padding: "9px 22px", borderRadius: 50,
          textDecoration: "none",
          boxShadow: "0 0 30px rgba(255,107,53,0.3)",
          transition: "box-shadow 0.3s, transform 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 0 50px rgba(255,107,53,0.5)";
          e.currentTarget.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 0 30px rgba(255,107,53,0.3)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        Start a Project
      </a>

      {/* Mobile Hamburger */}
      <button
        className="nav-mobile"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: "none", border: "none", cursor: "pointer",
          flexDirection: "column", gap: 5, padding: 4,
        }}
        aria-label="Menu"
      >
        {[0, 1, 2].map((i) => (
          <span key={i} style={{ width: 22, height: 2, background: "var(--white)", display: "block", borderRadius: 2 }} />
        ))}
      </button>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          style={{
            position: "fixed", top: 0, right: 0, bottom: 0, width: 260,
            background: "rgba(0,0,0,0.95)", backdropFilter: "blur(20px)",
            zIndex: 2000, padding: "80px 32px 40px",
            display: "flex", flexDirection: "column", gap: 28,
            borderLeft: "1px solid var(--border)",
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: "absolute", top: 20, right: 20,
              background: "none", border: "none", color: "var(--white)",
              fontSize: 24, cursor: "pointer",
            }}
          >
            ×
          </button>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.sectionId}
              href="#"
              onClick={(e) => { e.preventDefault(); scrollToSection(item.sectionId); setMenuOpen(false); }}
              style={{
                fontFamily: "var(--nu)", fontSize: 18, fontWeight: 700,
                color: "rgba(255,255,255,0.8)", textDecoration: "none",
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/923019172774"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "var(--orange)", color: "var(--white)",
              fontFamily: "var(--nu)", fontSize: 14, fontWeight: 700,
              padding: "12px 24px", borderRadius: 50,
              textDecoration: "none", textAlign: "center",
              marginTop: 8,
            }}
          >
            Start a Project
          </a>
        </div>
      )}
    </nav>
  );
}
