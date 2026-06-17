import { LegalPage, H2, P, UL, LI } from "@/components/LegalPage";
import { COMPANY } from "@/lib/company";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Refund Policy",
  description:
    "Xclator AI LLC's 7-day conditional refund policy for lifetime-access digital software products.",
  path: "/legal/refund",
});

export default function RefundPage() {
  return (
    <LegalPage
      title="Refund Policy"
      intro={
        <>
          {COMPANY.legalName} sells digital software products as lifetime-access licenses that are
          delivered immediately upon purchase. Because these are digital goods made available to you
          instantly, refunds are offered only under the specific, conditional terms set out below. This
          policy is designed to be fair to genuine customers while protecting against abuse.
        </>
      }
    >
      <H2>1. 7-Day Conditional Refund Window</H2>
      <P>
        You may request a refund within <strong>7 calendar days</strong> of your purchase, and only if
        <strong> all</strong> of the following conditions are met:
      </P>
      <UL>
        <LI>The product is <strong>non-functional</strong> or <strong>materially not as described</strong> on our website at the time of purchase; and</LI>
        <LI>You have <strong>first contacted our support team</strong> at {COMPANY.email} and given us a reasonable opportunity to resolve the issue; and</LI>
        <LI>The issue is not caused by factors outside the product (for example, your own network, hardware, third-party services, or misuse).</LI>
      </UL>
      <P>
        If we are unable to resolve a qualifying issue within a reasonable time, you will be eligible
        for a refund.
      </P>

      <H2>2. What Is Not Eligible for a Refund</H2>
      <UL>
        <LI><strong>Change of mind</strong> after the product has been accessed or used. Because these are lifetime-access digital licenses delivered immediately, buyer&apos;s remorse is not a valid basis for a refund.</LI>
        <LI>Requests made <strong>after the 7-day window</strong> has passed.</LI>
        <LI>Situations where the product functions substantially as described but does not match an expectation that was never represented by us.</LI>
        <LI><strong>Abuse</strong> — including downloading, exporting, or otherwise extracting value from the product and then requesting a refund. Such requests will be denied.</LI>
      </UL>

      <H2>3. How to Request a Refund</H2>
      <P>
        Email {COMPANY.email} with your <strong>order details</strong> (purchase email, product name,
        date of purchase, and transaction/receipt ID) and a clear description of the problem. We may
        ask for additional information to verify the issue and your eligibility.
      </P>

      <H2>4. Processing Time</H2>
      <P>
        Approved refunds are issued to the original payment method via our payment processor, Stripe.
        Once approved, refunds are typically processed within <strong>5–10 business days</strong>,
        though the exact timing depends on Stripe and your bank or card issuer.
      </P>

      <H2>5. Chargebacks</H2>
      <P>
        If you believe you are entitled to a refund, please contact us first so we can resolve it
        directly. Initiating a chargeback or payment dispute without first attempting resolution — or in
        bad faith after using the product — is considered a breach of our Terms &amp; Conditions and may
        result in immediate termination of your license and loss of access, in addition to any remedies
        available to us.
      </P>

      <H2>6. Changes to This Policy</H2>
      <P>
        We may update this Refund Policy from time to time. The version in effect at the time of your
        purchase governs that purchase. Material changes are reflected by updating the &quot;Last
        updated&quot; date above.
      </P>

      <H2>7. Governing Law &amp; Contact</H2>
      <P>
        This policy is governed by the laws of the State of {COMPANY.jurisdiction}. For any
        refund-related questions, contact {COMPANY.legalName} at {COMPANY.email}.
      </P>
    </LegalPage>
  );
}
