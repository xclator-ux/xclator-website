import SubPageShell from "@/components/SubPageShell";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { COMPANY } from "@/lib/company";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact",
  description:
    "Get in touch with Xclator AI LLC — for product questions, custom AI builds, or partnerships. Email contact@xclator.com or send us a message.",
  path: "/contact",
  fullTitle: "Contact Xclator AI LLC",
});

export default function ContactPage() {
  return (
    <SubPageShell>
      <PageHeader
        eyebrow="Contact"
        title={<>Let&apos;s talk.</>}
        subtitle="Questions about a product, a custom build, or a partnership? Send us a message — we read every one."
      />

      <section style={{ padding: "8px 24px 88px" }}>
        <div
          className="about-grid"
          style={{
            maxWidth: 1080, margin: "0 auto",
            display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 48,
            alignItems: "start",
          }}
        >
          {/* Left — company details */}
          <div className="scene-enter">
            <h2 style={{
              fontFamily: "var(--fj)", fontSize: 26, fontWeight: 800,
              letterSpacing: "-0.02em", marginBottom: 6,
            }}>
              {COMPANY.legalName}
            </h2>
            <p style={{ color: "var(--muted)", fontSize: 15, fontWeight: 500, marginBottom: 32 }}>
              US-registered AI product studio.
            </p>

            <DetailRow label="Email">
              <a href={`mailto:${COMPANY.email}`} style={valueLink}>{COMPANY.email}</a>
            </DetailRow>
            <DetailRow label="Phone">
              <a href={COMPANY.phoneHref} style={valueLink}>{COMPANY.phone}</a>
            </DetailRow>
            <DetailRow label="Address">
              <span style={{ color: "rgba(255,255,255,0.82)", fontSize: 15, fontWeight: 500, lineHeight: 1.6 }}>
                {COMPANY.address.line1}<br />
                {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.zip}<br />
                {COMPANY.address.country}
              </span>
            </DetailRow>

            <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
              <a href={COMPANY.socials.linkedin} target="_blank" rel="noopener noreferrer" style={socialBtn}>
                LinkedIn
              </a>
              <a href={COMPANY.socials.whatsapp} target="_blank" rel="noopener noreferrer" style={socialBtn}>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right — form */}
          <ContactForm />
        </div>
      </section>
    </SubPageShell>
  );
}

const valueLink: React.CSSProperties = {
  color: "var(--white)", fontSize: 16, fontWeight: 600,
  textDecoration: "none",
};

const socialBtn: React.CSSProperties = {
  display: "inline-flex", alignItems: "center",
  fontFamily: "var(--nu)", fontSize: 13, fontWeight: 700,
  color: "rgba(255,255,255,0.65)", textDecoration: "none",
  padding: "10px 20px", borderRadius: 50,
  border: "1px solid var(--border)",
  background: "var(--glass)",
};

function DetailRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 22 }}>
      <div style={{
        fontFamily: "var(--nu)", fontSize: 11, fontWeight: 700,
        letterSpacing: "0.15em", textTransform: "uppercase",
        color: "var(--muted)", marginBottom: 6,
      }}>
        {label}
      </div>
      {children}
    </div>
  );
}
