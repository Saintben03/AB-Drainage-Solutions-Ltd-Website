import { SEO } from "@/components/SEO";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="text-xl font-display font-bold text-white mb-4 pb-3 border-b border-white/10">{title}</h2>
    <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">{children}</div>
  </section>
);

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | A&B Drainage Solutions Ltd"
        description="How A&B Drainage Solutions Ltd collects, uses, and protects your personal data. GDPR compliant."
        canonicalUrl="https://www.abdrainage.co.uk/privacy-policy"
      />

      <div className="bg-background min-h-screen pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">

          <div className="mb-12">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-3">Legal</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white uppercase mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground text-sm">Last updated: June 2025</p>
          </div>

          <Section title="1. Who We Are">
            <p>
              A&B Drainage Solutions Ltd ("we", "us", "our") is a company registered in England and Wales,
              providing drainage, CCTV survey, and related civil engineering services across Hampshire and surrounding counties.
            </p>
            <p>
              <strong className="text-white">Registered address:</strong> Hampshire, United Kingdom<br />
              <strong className="text-white">Email:</strong>{" "}
              <a href="mailto:info@abdrainage.co.uk" className="text-primary hover:underline">info@abdrainage.co.uk</a><br />
              <strong className="text-white">Telephone:</strong>{" "}
              <a href="tel:01256688650" className="text-primary hover:underline">01256 688 650</a>
            </p>
            <p>
              We are the data controller for the personal information we collect through this website and our business operations.
              We take our obligations under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018 seriously.
            </p>
          </Section>

          <Section title="2. What Personal Data We Collect">
            <p>We may collect the following categories of personal data:</p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li><strong className="text-white">Contact information</strong> — name, telephone number, email address, property address provided when you submit an enquiry or book a service.</li>
              <li><strong className="text-white">Service information</strong> — details of your drainage issue, property type, and any access requirements you share with us.</li>
              <li><strong className="text-white">Payment information</strong> — where applicable; we do not store full card details. Payments are processed by third-party providers.</li>
              <li><strong className="text-white">Website usage data</strong> — IP address, browser type, pages visited, time spent on site, referral source (via cookies and analytics tools — see Section 7).</li>
              <li><strong className="text-white">Communications</strong> — records of emails, phone call notes, or any written correspondence between you and us.</li>
            </ul>
            <p>We do not knowingly collect data from children under 16 years of age.</p>
          </Section>

          <Section title="3. How We Use Your Personal Data">
            <p>We use your personal data for the following purposes and on the following legal bases:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border border-white/10 rounded">
                <thead>
                  <tr className="bg-white/5">
                    <th className="text-left text-white font-semibold p-3 border-b border-white/10">Purpose</th>
                    <th className="text-left text-white font-semibold p-3 border-b border-white/10">Legal Basis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ["Responding to enquiries and booking jobs", "Legitimate interest / Contractual necessity"],
                    ["Providing our drainage and related services", "Performance of a contract"],
                    ["Sending invoices and processing payments", "Performance of a contract"],
                    ["Improving our website and services", "Legitimate interest"],
                    ["Sending service updates or follow-ups", "Legitimate interest"],
                    ["Compliance with legal obligations (e.g. tax)", "Legal obligation"],
                    ["Marketing communications (where consented)", "Consent"],
                  ].map(([purpose, basis], i) => (
                    <tr key={i} className="hover:bg-white/3">
                      <td className="p-3">{purpose}</td>
                      <td className="p-3 text-white/70">{basis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              Where we rely on legitimate interest, we have balanced our interests against yours and are satisfied that our processing does not unduly override your rights.
            </p>
          </Section>

          <Section title="4. Who We Share Your Data With">
            <p>We do not sell your personal data. We may share it with trusted third parties only where necessary:</p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li><strong className="text-white">Google Analytics</strong> — anonymised website usage statistics (see Section 7).</li>
              <li><strong className="text-white">Email / cloud services</strong> — providers hosting our email and business systems (subject to data processing agreements).</li>
              <li><strong className="text-white">Accountants and professional advisers</strong> — where required for invoicing, tax, or legal purposes.</li>
              <li><strong className="text-white">Regulatory bodies</strong> — if required by law, court order, or to protect the rights of others.</li>
            </ul>
            <p>
              All third parties we use are required to handle your data securely and in accordance with UK GDPR.
              We do not transfer your data outside the UK or EEA without appropriate safeguards in place.
            </p>
          </Section>

          <Section title="5. How Long We Keep Your Data">
            <p>We retain personal data only for as long as necessary:</p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li><strong className="text-white">Enquiry records</strong> — 2 years from last contact, unless a service was carried out.</li>
              <li><strong className="text-white">Customer / job records</strong> — 6 years (to comply with HMRC requirements and to handle any warranty or dispute matters).</li>
              <li><strong className="text-white">Marketing preferences</strong> — until you withdraw consent or 3 years of inactivity, whichever is sooner.</li>
              <li><strong className="text-white">Website analytics</strong> — aggregated/anonymised; not retained as personal data.</li>
            </ul>
          </Section>

          <Section title="6. Your Rights Under UK GDPR">
            <p>You have the following rights regarding your personal data:</p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li><strong className="text-white">Right of access</strong> — request a copy of the data we hold about you.</li>
              <li><strong className="text-white">Right to rectification</strong> — ask us to correct inaccurate or incomplete data.</li>
              <li><strong className="text-white">Right to erasure</strong> — request deletion of your data (subject to legal retention requirements).</li>
              <li><strong className="text-white">Right to restrict processing</strong> — ask us to limit how we use your data.</li>
              <li><strong className="text-white">Right to data portability</strong> — receive your data in a structured, machine-readable format.</li>
              <li><strong className="text-white">Right to object</strong> — object to processing based on legitimate interest or for direct marketing.</li>
              <li><strong className="text-white">Right to withdraw consent</strong> — at any time where processing is based on your consent.</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:info@abdrainage.co.uk" className="text-primary hover:underline">info@abdrainage.co.uk</a>.
              We will respond within one calendar month. If you are not satisfied with our response, you have the right to lodge a complaint with the{" "}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Information Commissioner's Office (ICO)</a>.
            </p>
          </Section>

          <Section title="7. Cookies">
            <p>
              Our website uses cookies — small text files stored in your browser. We use the following types:
            </p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li>
                <strong className="text-white">Strictly necessary cookies</strong> — essential for the website to function (e.g. remembering your cookie preference).
                These cannot be disabled.
              </li>
              <li>
                <strong className="text-white">Analytics cookies</strong> — we use Google Analytics to understand how visitors navigate our site.
                Data is anonymised. These are only set with your consent.
              </li>
              <li>
                <strong className="text-white">Marketing cookies</strong> — used for personalised advertising where you have given consent.
                We currently make limited use of these.
              </li>
            </ul>
            <p>
              You can manage or withdraw your cookie consent at any time by clearing your browser cookies and revisiting our site,
              or using your browser's built-in cookie controls.
            </p>
          </Section>

          <Section title="8. Security">
            <p>
              We take reasonable technical and organisational measures to protect your personal data against
              unauthorised access, loss, or misuse. Our website is served over HTTPS. However, no method of
              transmission over the internet is completely secure, and we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="9. Third-Party Links">
            <p>
              Our website may contain links to third-party websites (such as social media platforms). We are not
              responsible for the privacy practices of those sites and encourage you to read their policies independently.
            </p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. The current version will always be available on
              this page with the "last updated" date at the top. Where changes are significant, we will take reasonable
              steps to notify you.
            </p>
          </Section>

          <Section title="11. Contact Us">
            <p>
              If you have any questions about this Privacy Policy or how we handle your data, please contact us:
            </p>
            <p>
              <strong className="text-white">A&B Drainage Solutions Ltd</strong><br />
              Email:{" "}
              <a href="mailto:info@abdrainage.co.uk" className="text-primary hover:underline">info@abdrainage.co.uk</a><br />
              Phone:{" "}
              <a href="tel:01256688650" className="text-primary hover:underline">01256 688 650</a>
            </p>
          </Section>

        </div>
      </div>
    </>
  );
}
