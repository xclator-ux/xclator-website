// Reusable hero strip for subpages — reuses the existing aurora + grain look,
// scaled down (no forced 100vh, no scroll-snap). Server component; the
// `.scene-enter` children are revealed by SubPageShell's observer.

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  maxWidth = 760,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  maxWidth?: number;
}) {
  return (
    <header
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(160deg, #020510 0%, #000 100%)",
        padding: "150px 24px 64px",
        textAlign: "center",
      }}
    >
      {/* Aurora */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-4" />
      </div>
      <div className="grain-layer" />

      <div style={{ position: "relative", zIndex: 5, maxWidth, margin: "0 auto" }}>
        <div
          className="scene-enter"
          style={{
            fontFamily: "var(--nu)",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--orange)",
            marginBottom: 16,
            display: "flex",
            alignItems: "center",
            gap: 10,
            justifyContent: "center",
          }}
        >
          <span style={{ display: "block", width: 20, height: 1, background: "var(--orange)" }} />
          {eyebrow}
          <span style={{ display: "block", width: 20, height: 1, background: "var(--orange)" }} />
        </div>

        <h1
          className="scene-enter scene-enter-d1"
          style={{
            fontFamily: "var(--fj)",
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            marginBottom: subtitle ? 20 : 0,
            textShadow: "0 0 60px rgba(255,255,255,0.08)",
          }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="scene-enter scene-enter-d2"
            style={{
              fontFamily: "var(--nu)",
              fontSize: 18,
              fontWeight: 500,
              color: "var(--muted)",
              lineHeight: 1.6,
              maxWidth: 620,
              margin: "0 auto",
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
