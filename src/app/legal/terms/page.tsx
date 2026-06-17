import type { Metadata } from "next";
import { LegalPage, H2, P, UL, LI } from "@/components/LegalPage";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Terms & Conditions — Xclator AI LLC",
  description:
    "The terms governing your purchase and use of Xclator AI LLC's lifetime-access digital software products.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro={
        <>
          These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to and use of the websites,
          software products, and services provided by {COMPANY.legalName} (&quot;Xclator,&quot;
          &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By purchasing, accessing, or using any of
          our products, you agree to these Terms. If you do not agree, do not use the Services.
        </>
      }
    >
      <H2>1. The Company</H2>
      <P>
        {COMPANY.legalName} is a limited liability company registered in the State of
        {" "}{COMPANY.jurisdiction}, with its registered address at {COMPANY.address.full}.
      </P>

      <H2>2. What You Are Buying</H2>
      <P>
        Our products are sold as a <strong>lifetime license</strong> to use the software, not a sale of
        the software itself or any ownership of its intellectual property. Subject to these Terms and
        your continued compliance, the license grants you ongoing access to the purchased product for as
        long as we operate it. A &quot;lifetime&quot; license refers to the lifetime of the product and
        does not guarantee perpetual availability of any specific feature, integration, or third-party
        dependency.
      </P>

      <H2>3. License Scope</H2>
      <UL>
        <LI>The license is granted to a single business or user, as applicable to the product purchased.</LI>
        <LI>It is non-exclusive, non-transferable, and limited to your own internal and business use.</LI>
        <LI>You may not share, sublicense, rent, lease, or resell the product or your access credentials.</LI>
      </UL>

      <H2>4. Acceptable Use</H2>
      <P>You agree to use the Services lawfully and only for their intended purpose.</P>

      <H2>5. Prohibited Use</H2>
      <P>You may not, and may not permit others to:</P>
      <UL>
        <LI>Copy, modify, reverse engineer, decompile, or attempt to extract the source code of the products, except as permitted by law.</LI>
        <LI>Resell, redistribute, or commercially exploit the products or access to them.</LI>
        <LI>Use the Services to infringe intellectual property, violate privacy, or process content you do not have the right to process.</LI>
        <LI>Use the Services for unlawful, fraudulent, harmful, or abusive activity, or to circumvent usage limits or security measures.</LI>
        <LI>Interfere with or disrupt the integrity or performance of the Services.</LI>
      </UL>

      <H2>6. Payment Terms</H2>
      <P>
        Payments are processed by Stripe. Prices are listed in US dollars unless stated otherwise and
        are due in full at the time of purchase. By purchasing, you authorize the applicable charge and
        represent that you are permitted to use the payment method. Refunds are governed by our Refund
        Policy.
      </P>

      <H2>7. No Resale</H2>
      <P>
        Licenses are for your own use only. Reselling, redistributing, or otherwise transferring a
        license or access credentials to any third party is strictly prohibited and will result in
        termination without refund.
      </P>

      <H2>8. Intellectual Property</H2>
      <P>
        All software, designs, trademarks, text, and other materials that make up the Services are and
        remain the exclusive property of {COMPANY.legalName} and its licensors. No intellectual property
        rights are transferred to you. You retain ownership of the content you submit for processing,
        and you grant us a limited license to process that content solely to provide the Services.
      </P>

      <H2>9. Disclaimer of Warranties</H2>
      <P>
        The Services are provided &quot;as is&quot; and &quot;as available,&quot; without warranties of
        any kind, whether express or implied, including implied warranties of merchantability, fitness
        for a particular purpose, and non-infringement. We do not warrant that the Services will be
        uninterrupted, error-free, or that results (including AI-generated outputs) will be accurate or
        meet your requirements.
      </P>

      <H2>10. Limitation of Liability</H2>
      <P>
        To the maximum extent permitted by law, {COMPANY.legalName} and its team will not be liable for
        any indirect, incidental, special, consequential, or punitive damages, or for any loss of
        profits, data, or goodwill. Our total aggregate liability arising out of or relating to the
        Services will not exceed the amount you paid us for the product giving rise to the claim.
      </P>

      <H2>11. Termination</H2>
      <P>
        We may suspend or terminate your license immediately, without refund, if you breach these Terms,
        misuse the Services, or engage in abusive or fraudulent activity (including chargeback abuse).
        Upon termination, your right to access the relevant product ends.
      </P>

      <H2>12. Governing Law</H2>
      <P>
        These Terms are governed by the laws of the State of {COMPANY.jurisdiction}, without regard to
        conflict-of-law principles. You agree to the exclusive jurisdiction of the courts located in
        Wyoming for any dispute arising out of these Terms.
      </P>

      <H2>13. Changes to These Terms</H2>
      <P>
        We may update these Terms from time to time. Material changes are reflected by updating the
        &quot;Last updated&quot; date above. Continued use of the Services after changes take effect
        constitutes acceptance of the revised Terms.
      </P>

      <H2>14. Contact</H2>
      <P>
        Questions about these Terms can be sent to {COMPANY.legalName} at {COMPANY.email}, or by mail to
        {" "}{COMPANY.address.full}.
      </P>
    </LegalPage>
  );
}
