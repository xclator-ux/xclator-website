import { LegalPage, H2, P, UL, LI } from "@/components/LegalPage";
import { COMPANY } from "@/lib/company";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "How Xclator AI LLC collects, uses, and protects your data across its websites and software products.",
  path: "/legal/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={
        <>
          This Privacy Policy explains how {COMPANY.legalName} (&quot;Xclator,&quot; &quot;we,&quot;
          &quot;us,&quot; or &quot;our&quot;) collects, uses, shares, and protects information when you
          visit our website, purchase a license, or use our software products — including LeadHawk,
          ScribeFlow, MapMotion, Mobile ERP, and ClipMagnet (the &quot;Services&quot;). By using the
          Services, you agree to the practices described here.
        </>
      }
    >
      <H2>1. Information We Collect</H2>
      <P>We collect the following categories of information:</P>
      <UL>
        <LI><strong>Account &amp; contact data:</strong> your name, email address, and any details you provide through our contact form or during sign-up.</LI>
        <LI><strong>Payment information:</strong> when payments are enabled, transactions are processed by Stripe. We do not store full card numbers on our servers; we receive limited details such as transaction status and the last four digits of your card from Stripe.</LI>
        <LI><strong>Content you submit for processing:</strong> for example, video and audio links or uploads you provide to ScribeFlow for transcription, and business/website data analyzed by LeadHawk during prospecting and audits.</LI>
        <LI><strong>Usage data:</strong> log data, device and browser information, IP address, pages viewed, and feature interactions, collected to operate and improve the Services.</LI>
      </UL>

      <H2>2. How We Use Your Information</H2>
      <UL>
        <LI>To provide, operate, maintain, and improve the Services.</LI>
        <LI>To process purchases, deliver license access, and provide customer support.</LI>
        <LI>To process the content you submit (e.g., transcribing media, generating audits and pitches).</LI>
        <LI>To communicate with you about updates, security notices, and responses to your inquiries.</LI>
        <LI>To detect, prevent, and address fraud, abuse, and security issues.</LI>
        <LI>To comply with legal obligations.</LI>
      </UL>

      <H2>3. Third-Party Service Providers</H2>
      <P>
        We rely on trusted third parties to operate the Services. These providers process data only as
        needed to perform their functions:
      </P>
      <UL>
        <LI><strong>Stripe</strong> — payment processing.</LI>
        <LI><strong>Resend</strong> — transactional and contact-form email delivery.</LI>
        <LI><strong>Vercel</strong> — website and application hosting.</LI>
        <LI><strong>AI / LLM providers</strong> (such as Anthropic and OpenAI) — to process content for transcription, generation, and analysis features.</LI>
      </UL>
      <P>
        Content submitted to AI providers is sent only to deliver the requested feature. We do not sell
        your personal information.
      </P>

      <H2>4. Cookies &amp; Similar Technologies</H2>
      <P>
        We use cookies and similar technologies for essential functionality, to remember preferences,
        and to understand how the Services are used. You can control cookies through your browser
        settings; disabling some cookies may affect functionality.
      </P>

      <H2>5. Data Retention</H2>
      <P>
        We retain personal information for as long as your account or license is active and as needed
        to provide the Services, comply with legal obligations, resolve disputes, and enforce our
        agreements. Content submitted for processing is retained only as long as necessary to deliver
        the relevant feature, after which it is deleted or anonymized in line with provider practices.
      </P>

      <H2>6. Your Rights</H2>
      <P>
        Subject to applicable law, you may request access to, correction of, or deletion of your
        personal information, and you may object to or restrict certain processing. To exercise these
        rights, email us at {COMPANY.email}. We will respond within a reasonable timeframe.
      </P>

      <H2>7. International Data Transfers</H2>
      <P>
        We are based in the United States, and our providers may process data in the United States and
        other countries. Where required, we rely on appropriate safeguards for international transfers.
        By using the Services, you understand that your information may be processed outside your
        country of residence.
      </P>

      <H2>8. Children&apos;s Privacy</H2>
      <P>
        The Services are not directed to children under 13 (or the minimum age required in your
        jurisdiction), and we do not knowingly collect personal information from them. If you believe a
        child has provided us information, contact us and we will delete it.
      </P>

      <H2>9. Security</H2>
      <P>
        We use reasonable technical and organizational measures to protect your information. No method
        of transmission or storage is completely secure, and we cannot guarantee absolute security.
      </P>

      <H2>10. Changes to This Policy</H2>
      <P>
        We may update this Privacy Policy from time to time. Material changes will be reflected by
        updating the &quot;Last updated&quot; date above. Continued use of the Services after changes
        take effect constitutes acceptance.
      </P>

      <H2>11. Governing Law</H2>
      <P>
        This Privacy Policy is governed by the laws of the State of {COMPANY.jurisdiction}, without
        regard to conflict-of-law principles.
      </P>

      <H2>12. Contact Us</H2>
      <P>
        {COMPANY.legalName}, {COMPANY.address.full}. For privacy questions, email {COMPANY.email}.
      </P>
    </LegalPage>
  );
}
