export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#07111F] px-6 py-24 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
          Legal
        </p>

        <h1 className="text-4xl font-bold md:text-5xl">Privacy Policy</h1>

        <p className="mt-4 text-sm text-slate-400">
          Last updated: June 2026
        </p>

        <div className="mt-10 space-y-8 text-slate-300">
          <section>
            <h2 className="text-2xl font-semibold text-white">
              1. Introduction
            </h2>
            <p className="mt-3 leading-7">
              This Privacy Policy explains how Arcvale Consulting collects,
              uses, and protects personal information when you use our website,
              contact us, or purchase digital products.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              2. Information We Collect
            </h2>
            <p className="mt-3 leading-7">
              We may collect your name, email address, payment-related
              information, enquiry details, and any information you choose to
              provide through website forms or email communication.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              3. How We Use Your Information
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>To respond to enquiries.</li>
              <li>To process digital product purchases.</li>
              <li>To provide access to purchased downloads.</li>
              <li>To improve website content, services, and user experience.</li>
              <li>To comply with legal, tax, and regulatory obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              4. Payments
            </h2>
            <p className="mt-3 leading-7">
              Payments are processed securely by Stripe. Arcvale Consulting does
              not store full payment card details on this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              5. Cookies and Analytics
            </h2>
            <p className="mt-3 leading-7">
              Our website may use cookies or analytics tools to understand
              website usage and improve performance. You can control cookies
              through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              6. Data Sharing
            </h2>
            <p className="mt-3 leading-7">
              We do not sell personal data. We may share limited information
              with trusted service providers such as payment processors, hosting
              providers, and email service providers where necessary to operate
              the website and deliver services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              7. Data Retention
            </h2>
            <p className="mt-3 leading-7">
              We retain personal information only for as long as necessary to
              fulfil the purposes described in this policy, including legal,
              accounting, and reporting requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              8. Your Rights
            </h2>
            <p className="mt-3 leading-7">
              Depending on your location, you may have rights to access,
              correct, delete, restrict, or object to the use of your personal
              data. You may also request a copy of the information we hold about
              you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              9. Security
            </h2>
            <p className="mt-3 leading-7">
              We take reasonable steps to protect personal information, but no
              method of transmission or storage is completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              10. Contact
            </h2>
            <p className="mt-3 leading-7">
              For privacy-related questions, please contact:
            </p>

            <a
              href="mailto:info@arcvaleconsulting.com"
              className="mt-3 inline-block text-cyan-300 hover:text-cyan-200"
            >
              info@arcvaleconsulting.com
            </a>

            <p className="mt-4 leading-7">
              Arcvale Consulting
              <br />
              United Kingdom
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}