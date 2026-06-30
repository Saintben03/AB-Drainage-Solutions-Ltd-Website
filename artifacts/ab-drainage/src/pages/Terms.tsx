import { SEO } from "@/components/SEO";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <h2 className="text-xl font-display font-bold text-white mb-4 pb-3 border-b border-white/10">{title}</h2>
    <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">{children}</div>
  </section>
);

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms & Conditions | A&B Drainage Solutions Ltd"
        description="Terms and conditions governing the supply of drainage and related services by A&B Drainage Solutions Ltd."
        canonicalUrl="https://www.abdrainage.co.uk/terms"
      />

      <div className="bg-background min-h-screen pt-32 pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">

          <div className="mb-12">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-3">Legal</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white uppercase mb-4">Terms &amp; Conditions</h1>
            <p className="text-muted-foreground text-sm">Last updated: June 2025</p>
          </div>

          <Section title="1. About Us">
            <p>
              These Terms and Conditions ("Terms") govern the supply of drainage, CCTV survey, civil engineering,
              and related services ("Services") by A&B Drainage Solutions Ltd ("we", "us", "our"),
              a company registered in England and Wales, to you, the customer ("you", "your").
            </p>
            <p>
              By requesting or accepting our Services, you confirm that you have read, understood, and agree to
              these Terms. If you do not agree, please do not proceed with booking.
            </p>
            <p>
              <strong className="text-white">Contact:</strong>{" "}
              <a href="tel:01256688650" className="text-primary hover:underline">01256 688 650</a>{" "}
              /{" "}
              <a href="mailto:info@abdrainage.co.uk" className="text-primary hover:underline">info@abdrainage.co.uk</a>
            </p>
          </Section>

          <Section title="2. Quotations and Bookings">
            <p>
              All quotations provided (by telephone, email, or in person) are valid for 30 days from the date of
              issue unless otherwise stated, and are subject to a site survey where necessary.
            </p>
            <p>
              A booking is confirmed when we have acknowledged your request verbally or in writing. We reserve the
              right to decline any booking at our discretion.
            </p>
            <p>
              Quotations are based on information provided at the time. Where unforeseen conditions are discovered
              on site (such as root intrusion, collapsed pipework, or access difficulties), revised pricing will be
              agreed with you before additional work proceeds.
            </p>
          </Section>

          <Section title="3. Prices and Payment">
            <p>
              All prices are quoted inclusive of VAT unless otherwise stated. Prices are subject to change, and the
              price agreed at the time of booking will apply to that job.
            </p>
            <p>
              Payment is due upon completion of the work unless a credit account or alternative arrangement has
              been agreed in writing in advance. We accept cash, bank transfer, and card payment.
            </p>
            <p>
              For larger contracts, we reserve the right to request a deposit before work commences. Deposit terms
              will be confirmed in writing.
            </p>
            <p>
              Invoices not paid within 30 days of the due date may be subject to a late payment charge of 8% above
              the Bank of England base rate, in accordance with the Late Payment of Commercial Debts (Interest) Act 1998,
              where applicable.
            </p>
          </Section>

          <Section title="4. FlexiPay">
            <p>
              We offer a FlexiPay instalment option on qualifying jobs. FlexiPay is offered at our discretion and
              subject to agreement of terms before work commences. FlexiPay is not a regulated credit product;
              it is a voluntary payment plan offered directly by A&B Drainage Solutions Ltd.
            </p>
            <p>
              Failure to maintain agreed FlexiPay instalments may result in the outstanding balance becoming immediately
              due in full. We reserve the right to pursue recovery through appropriate legal channels.
            </p>
          </Section>

          <Section title="5. Our Services">
            <p>
              We will use reasonable skill and care in providing all Services. Our core services include, but are not
              limited to:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Drain unblocking and jetting</li>
              <li>CCTV drain surveys</li>
              <li>Drain repairs, relining, and patching</li>
              <li>Excavation and drain replacement</li>
              <li>Septic tank emptying and servicing</li>
              <li>Soakaway installation and renewal</li>
              <li>Commercial and industrial drainage maintenance</li>
              <li>24/7 emergency callout</li>
            </ul>
            <p>
              Where a CCTV survey report is provided, it reflects the condition of the drain at the time of inspection.
              We are not responsible for deterioration occurring after the survey date.
            </p>
          </Section>

          <Section title="6. Access and Site Conditions">
            <p>
              You are responsible for ensuring safe and adequate access to the relevant drains, manholes, or
              work areas prior to our visit. Any delays caused by inadequate access may result in a wasted journey
              charge at our standard call-out rate.
            </p>
            <p>
              You must advise us of any known hazards on site (e.g. asbestos, contaminated land, structural risks)
              before work begins. We reserve the right to withdraw from site if conditions pose an unacceptable risk
              to our operatives.
            </p>
          </Section>

          <Section title="7. Guarantee and Workmanship">
            <p>
              Our workmanship is guaranteed for 12 months from the date of completion ("Guarantee Period"), subject
              to the following conditions:
            </p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li>The defect is not caused by misuse, accidental damage, or third-party interference after our work.</li>
              <li>The drain system has been used in accordance with reasonable domestic or commercial practice.</li>
              <li>Full payment has been received for the original work.</li>
            </ul>
            <p>
              This guarantee applies to new installations and repairs carried out by us. It does not cover areas
              of an existing system not included in the original scope of work, nor does it cover blockages caused
              by ongoing misuse (e.g. disposal of fats, wipes, or unsuitable materials).
            </p>
            <p>
              This guarantee does not affect your statutory rights as a consumer.
            </p>
          </Section>

          <Section title="8. Limitation of Liability">
            <p>
              We shall not be liable for:
            </p>
            <ul className="list-disc list-inside space-y-1.5 ml-2">
              <li>Loss of income, profit, or business resulting from any defect or delay in our Services.</li>
              <li>Damage to property that was not in a sound structural condition at the time of our work.</li>
              <li>Damage caused by ground movement, subsidence, or factors outside our control.</li>
              <li>Any consequential, indirect, or special losses.</li>
            </ul>
            <p>
              Our total liability to you in connection with any contract for Services shall not exceed the total
              price paid by you for that contract.
            </p>
            <p>
              Nothing in these Terms limits or excludes our liability for death or personal injury caused by our
              negligence, fraud, or any other liability that cannot be limited by law.
            </p>
          </Section>

          <Section title="9. Cancellation and Rescheduling">
            <p>
              You may cancel or reschedule a booking by giving us reasonable notice. Where less than 24 hours' notice
              is given (or where our operatives arrive and cannot gain access), we reserve the right to charge a
              call-out or wasted journey fee.
            </p>
            <p>
              For planned works where materials have been ordered specifically for your job, you may be liable for
              those material costs if you cancel after we have committed to purchase.
            </p>
            <p>
              We will always endeavour to accommodate rescheduling requests and will inform you as early as possible
              if we need to reschedule on our side.
            </p>
          </Section>

          <Section title="10. Emergency Callout">
            <p>
              We operate a 24/7 emergency callout service. Emergency work carried out outside of standard working
              hours (Monday–Friday 08:00–17:00) may be subject to enhanced rates, which will be communicated to you
              before work commences where possible.
            </p>
            <p>
              In situations where immediate action is required to prevent damage or serious risk, we may proceed with
              emergency work and confirm costs afterwards. We will always act in your best interests.
            </p>
          </Section>

          <Section title="11. Complaints">
            <p>
              If you are unhappy with any aspect of our service, please contact us as soon as possible:
            </p>
            <p>
              <strong className="text-white">Phone:</strong>{" "}
              <a href="tel:01256688650" className="text-primary hover:underline">01256 688 650</a><br />
              <strong className="text-white">Email:</strong>{" "}
              <a href="mailto:info@abdrainage.co.uk" className="text-primary hover:underline">info@abdrainage.co.uk</a>
            </p>
            <p>
              We aim to acknowledge all complaints within 2 business days and to resolve them fairly within 14 days.
              We take all feedback seriously and use it to improve our services.
            </p>
          </Section>

          <Section title="12. Intellectual Property">
            <p>
              All content on this website — including text, images, logos, and design — is the property of
              A&B Drainage Solutions Ltd or licensed to us. You may not reproduce, distribute, or use our content
              without prior written permission.
            </p>
            <p>
              CCTV survey footage and reports produced during a job are provided to you for your own use but remain
              the intellectual property of A&B Drainage Solutions Ltd unless otherwise agreed in writing.
            </p>
          </Section>

          <Section title="13. Data Protection">
            <p>
              We process your personal data in accordance with our{" "}
              <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>,
              which forms part of these Terms. By using our Services, you acknowledge that we will process your
              data as described therein.
            </p>
          </Section>

          <Section title="14. Governing Law">
            <p>
              These Terms are governed by and construed in accordance with the laws of England and Wales.
              Any disputes arising under or in connection with these Terms shall be subject to the exclusive
              jurisdiction of the courts of England and Wales.
            </p>
            <p>
              If any provision of these Terms is found to be unenforceable, the remaining provisions will continue
              in full force and effect.
            </p>
          </Section>

          <Section title="15. Changes to These Terms">
            <p>
              We may update these Terms from time to time. The current version will always be available on this page.
              Continued use of our Services after any changes constitutes your acceptance of the updated Terms.
            </p>
          </Section>

        </div>
      </div>
    </>
  );
}
