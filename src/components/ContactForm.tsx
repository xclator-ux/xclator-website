"use client";
import { useState } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  const submit = async () => {
    setFeedback("");
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setStatus("error");
      setFeedback("Please fill in all fields.");
      return;
    }
    if (!EMAIL_RE.test(email.trim())) {
      setStatus("error");
      setFeedback("Please enter a valid email address.");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message, company }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFeedback(data.message || "Thanks — we'll be in touch shortly.");
        setName(""); setEmail(""); setSubject(""); setMessage("");
      } else {
        setStatus("error");
        setFeedback(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setFeedback("Network error. Please try again or email us directly.");
    }
  };

  return (
    <div
      className="scene-enter scene-enter-d1"
      style={{
        background: "var(--glass)", border: "1px solid var(--border)",
        borderRadius: 20, padding: 32,
      }}
    >
      <Field label="Name">
        <input
          type="text" value={name} onChange={(e) => setName(e.target.value)}
          placeholder="Your name" style={inputStyle} autoComplete="name"
        />
      </Field>
      <Field label="Email">
        <input
          type="email" value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com" style={inputStyle} autoComplete="email"
        />
      </Field>
      <Field label="Subject">
        <input
          type="text" value={subject} onChange={(e) => setSubject(e.target.value)}
          placeholder="What's this about?" style={inputStyle}
        />
      </Field>
      <Field label="Message">
        <textarea
          value={message} onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what you need…" rows={5}
          style={{ ...inputStyle, resize: "vertical", minHeight: 120, fontFamily: "var(--nu)" }}
        />
      </Field>

      {/* Honeypot — hidden from humans */}
      <input
        type="text" value={company} onChange={(e) => setCompany(e.target.value)}
        name="company" tabIndex={-1} autoComplete="off" aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />

      <button
        onClick={submit}
        disabled={status === "sending"}
        style={{
          width: "100%", marginTop: 8,
          background: "var(--orange)", color: "var(--white)",
          fontFamily: "var(--nu)", fontWeight: 700, fontSize: 16,
          padding: "15px 32px", borderRadius: 50, border: "none",
          cursor: status === "sending" ? "wait" : "pointer",
          opacity: status === "sending" ? 0.7 : 1,
          boxShadow: "0 0 30px rgba(255,107,53,0.3)",
          transition: "opacity 0.2s, box-shadow 0.2s",
        }}
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>

      {feedback && (
        <p
          role="status"
          style={{
            marginTop: 18, fontFamily: "var(--nu)", fontSize: 14, fontWeight: 600,
            lineHeight: 1.5,
            color: status === "success" ? "#22C55E" : "#E85D3A",
          }}
        >
          {feedback}
        </p>
      )}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.03)",
  border: "1px solid var(--border)",
  borderRadius: 12,
  padding: "13px 16px",
  color: "var(--white)",
  fontFamily: "var(--nu)",
  fontSize: 15,
  fontWeight: 500,
  outline: "none",
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <label style={{
        display: "block",
        fontFamily: "var(--nu)", fontSize: 12, fontWeight: 700,
        letterSpacing: "0.08em", textTransform: "uppercase",
        color: "var(--muted)", marginBottom: 8,
      }}>
        {label}
      </label>
      {children}
    </div>
  );
}
