import type { Metadata } from "next";
import Link from "next/link";
import SubPageShell from "@/components/SubPageShell";
import PageHeader from "@/components/PageHeader";
import { STATS } from "@/lib/constants";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "About Xclator AI LLC — AI Product Studio",
  description:
    "Xclator AI LLC is a US-registered AI product studio. A lean, senior 6-person team building and shipping AI-powered SaaS and custom software — fast.",
};

const STORY = [
  {
    label: "Who we are",
    body: "Xclator AI LLC is a US-registered AI product studio building and shipping AI-powered SaaS. We turn ideas into live products — fast.",
  },
  {
    label: "The story",
    body: "What began as an agency over two years ago has grown into a product company. The team has been building software for years, and in 2026 the work was formalized as Xclator AI LLC, registered in the United States.",
  },
  {
    label: "The team",
    body: "A lean, senior 6-person team that ships faster than groups many times its size. Small team, big output — that's the edge.",
  },
  {
    label: "What we do",
    body: "We build our own SaaS products — LeadHawk, ScribeFlow, MapMotion, Mobile ERP, and ClipMagnet — and we build custom AI systems and software for clients.",
  },
];

export default function AboutPage() {
  return (
    <SubPageShell>
      <PageHeader
        eyebrow="About"
        title={<>An AI product studio,<br />built to ship.</>}
        subtitle="Xclator AI LLC turns ideas into live, production-grade AI software — shipping fast, charging fair, and building tools people actually use."
      />

      {/* Mission band */}
      <section style={{ padding: "8px 24px 24px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <blockquote className="scene-enter" style={{
            fontFamily: "var(--fj)", fontSize: "clamp(22px, 3vw, 34px)",
            fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.3,
            textAlign: "center", color: "var(--white)",
            borderLeft: "none", margin: 0, padding: "24px 0",
          }}>
            “To put production-grade AI software in the hands of businesses everywhere —{" "}
            <span style={{ color: "var(--orange)" }}>shipping fast, charging fair</span>, and building tools people actually use.”
          </blockquote>
        </div>
      </section>

      {/* Story grid */}
      <section style={{ padding: "40px 24px" }}>
        <div style={{
          maxWidth: 1080, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20,
        }} className="about-grid">
          {STORY.map((item, i) => (
            <div key={item.label} className={`scene-enter ${i % 2 ? "scene-enter-d1" : ""}`} style={{
              background: "var(--glass)", border: "1px solid var(--border)",
              borderRadius: 20, padding: 32,
            }}>
              <div style={{
                fontFamily: "var(--nu)", fontSize: 10, fontWeight: 700,
                letterSpacing: "0.22em", textTransform: "uppercase",
                color: "var(--muted)", marginBottom: 14,
                display: "flex", alignItems: "center", gap: 10,
              }}>
                <span style={{ display: "block", width: 20, height: 1, background: "var(--orange)" }} />
                {item.label}
              </div>
              <p style={{ color: "rgba(255,255,255,0.82)", fontSize: 16, fontWeight: 500, lineHeight: 1.75 }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Edge */}
      <section style={{ padding: "24px 24px 48px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <h2 className="scene-enter" style={{
            fontFamily: "var(--fj)", fontSize: "clamp(24px, 3vw, 38px)",
            fontWeight: 800, letterSpacing: "-0.025em", marginBottom: 16,
          }}>
            Why it matters
          </h2>
          <p className="scene-enter scene-enter-d1" style={{
            color: "var(--muted)", fontSize: 17, fontWeight: 500, lineHeight: 1.75,
          }}>
            Lean team, AI-first workflow, and real shipped products as proof — backed by a
            US-registered company you can trust. We move at the speed of a startup with the
            accountability of an established business.
          </p>
        </div>
      </section>

      {/* Stats grid (reused from home) */}
      <section style={{ padding: "8px 24px 56px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
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
              <div key={stat.label} style={{ background: "#000", padding: "44px 36px", textAlign: "center" }}>
                <div style={{
                  fontFamily: "var(--fj)", fontSize: "clamp(40px, 5vw, 64px)",
                  fontWeight: 800, letterSpacing: "-0.04em",
                  lineHeight: 1, color: "var(--white)", marginBottom: 10,
                }}>
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

      {/* Founder */}
      <section style={{ padding: "8px 24px 64px" }}>
        <div className="scene-enter" style={{
          maxWidth: 820, margin: "0 auto",
          background: "var(--glass)", border: "1px solid var(--border)",
          borderRadius: 20, padding: "32px 36px", textAlign: "center",
        }}>
          <div style={{ fontFamily: "var(--fj)", fontSize: 22, fontWeight: 800, color: "var(--white)", marginBottom: 6 }}>
            {COMPANY.founder}
          </div>
          <div style={{ fontFamily: "var(--nu)", fontSize: 14, fontWeight: 600, color: "var(--orange)", letterSpacing: "0.04em" }}>
            Founder — leading a 6-person team
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        position: "relative", overflow: "hidden",
        background: "linear-gradient(180deg, #000 0%, #050A18 60%, #000 100%)",
        borderTop: "1px solid var(--border)",
        padding: "84px 24px", textAlign: "center",
      }}>
        <div style={{ position: "relative", zIndex: 2, maxWidth: 640, margin: "0 auto" }}>
          <h2 className="scene-enter" style={{
            fontFamily: "var(--fj)", fontSize: "clamp(28px, 3.6vw, 46px)",
            fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 18,
          }}>
            Let&apos;s build something.
          </h2>
          <Link href="/contact" className="scene-enter scene-enter-d1" style={{
            background: "var(--orange)", color: "var(--white)",
            fontFamily: "var(--nu)", fontWeight: 700, fontSize: 16,
            padding: "16px 40px", borderRadius: 50,
            textDecoration: "none", display: "inline-block",
            animation: "glowPulse 3s ease-in-out infinite",
          }}>
            Start a Project
          </Link>
        </div>
      </section>
    </SubPageShell>
  );
}
