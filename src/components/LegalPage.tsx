import Link from "next/link";
import SubPageShell from "@/components/SubPageShell";
import { COMPANY } from "@/lib/company";

export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <SubPageShell>
      <article style={{ maxWidth: 720, margin: "0 auto", padding: "130px 24px 80px" }}>
        <Link
          href="/"
          style={{
            fontFamily: "var(--nu)", fontSize: 13, fontWeight: 600,
            color: "var(--muted)", textDecoration: "none",
            display: "inline-block", marginBottom: 28,
          }}
        >
          ← Back to home
        </Link>

        <h1 style={{
          fontFamily: "var(--fj)", fontSize: "clamp(32px, 5vw, 52px)",
          fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05,
          marginBottom: 12,
        }}>
          {title}
        </h1>
        <p style={{
          fontFamily: "var(--nu)", fontSize: 13, fontWeight: 600,
          color: "var(--muted)", marginBottom: intro ? 24 : 40,
        }}>
          Last updated: {COMPANY.legalLastUpdated}
        </p>

        {intro && (
          <p style={{ ...paraStyle, marginBottom: 40 }}>{intro}</p>
        )}

        {children}
      </article>
    </SubPageShell>
  );
}

const paraStyle: React.CSSProperties = {
  fontFamily: "var(--nu)", fontSize: 16, fontWeight: 500,
  color: "rgba(255,255,255,0.78)", lineHeight: 1.8,
  marginBottom: 16,
};

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontFamily: "var(--fj)", fontSize: "clamp(20px, 2.6vw, 26px)",
      fontWeight: 800, letterSpacing: "-0.02em", color: "var(--white)",
      marginTop: 40, marginBottom: 14,
    }}>
      {children}
    </h2>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return <p style={paraStyle}>{children}</p>;
}

export function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul style={{
      listStyle: "none", display: "flex", flexDirection: "column", gap: 12,
      margin: "8px 0 20px",
    }}>
      {children}
    </ul>
  );
}

export function LI({ children }: { children: React.ReactNode }) {
  return (
    <li style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
      <span style={{
        flexShrink: 0, marginTop: 9, width: 6, height: 6, borderRadius: "50%",
        background: "var(--orange)", display: "inline-block",
      }} />
      <span style={{
        fontFamily: "var(--nu)", fontSize: 16, fontWeight: 500,
        color: "rgba(255,255,255,0.78)", lineHeight: 1.7,
      }}>
        {children}
      </span>
    </li>
  );
}
