export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#07111F] px-6 py-24 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
          Legal
        </p>

        <h1 className="text-4xl font-bold md:text-5xl">
          Terms & Conditions
        </h1>

        <p className="mt-4 text-sm text-slate-400">
          Last updated: June 2026
        </p>

        <div className="mt-10 space-y-8 text-slate-300">
          <section>
            <h2 className="text-2xl font-semibold text-white">
              1. Introduction
            </h2>
            <p className="mt-3 leading-7">
              These Terms & Conditions govern the purchase and use of digital
              products provided by Arcvale Consulting (&quot;we&quot;,
              &quot;our&quot;, &quot;us&quot;). By purchasing or downloading any
              digital product from our website, you agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              2. Digital Products
            </h2>
            <p className="mt-3 leading-7">
              All products sold through this website are digital downloads
              delivered electronically. No physical products are shipped.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              3. Licence
            </h2>
            <p className="mt-3 leading-7">
              Upon purchase, you are granted a non-exclusive, non-transferable
              licence to use the purchased product for your personal or internal
              business purposes.
            </p>

            <p className="mt-4 leading-7">You may not:</p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Resell, redistribute, or share purchased products.</li>
              <li>Publish products on public websites or repositories.</li>
              <li>
                Claim ownership of Arcvale Consulting intellectual property.
              </li>
              <li>Modify and distribute products as your own work.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              4. Intellectual Property
            </h2>
            <p className="mt-3 leading-7">
              All digital products, templates, frameworks, documentation, and
              associated materials remain the intellectual property of Arcvale
              Consulting unless otherwise stated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">5. Payments</h2>
            <p className="mt-3 leading-7">
              Payments are securely processed through Stripe. Arcvale Consulting
              does not store payment card details.
            </p>
            <p className="mt-3 leading-7">
              All prices are displayed in GBP (£) unless otherwise stated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">6. Refunds</h2>
            <p className="mt-3 leading-7">
              Due to the nature of digital products, all sales are final.
            </p>

            <p className="mt-4 leading-7">
              Refunds will only be considered where:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>The product cannot be downloaded.</li>
              <li>The file is materially defective.</li>
              <li>A duplicate payment has been made.</li>
            </ul>

            <p className="mt-3 leading-7">
              Any refund requests must be submitted within 14 days of purchase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              7. Product Disclaimer
            </h2>
            <p className="mt-3 leading-7">
              Our templates, frameworks, assessments, and guidance materials are
              provided for informational and operational support purposes only.
            </p>
            <p className="mt-3 leading-7">
              They do not constitute legal, financial, regulatory, compliance,
              or professional advice.
            </p>
            <p className="mt-3 leading-7">
              Customers remain responsible for their own business decisions and
              implementation activities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              8. Limitation of Liability
            </h2>
            <p className="mt-3 leading-7">
              To the fullest extent permitted by law, Arcvale Consulting shall
              not be liable for any indirect, incidental, consequential, or
              special damages arising from the use of any product purchased
              through this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              9. Changes to These Terms
            </h2>
            <p className="mt-3 leading-7">
              We reserve the right to update these Terms & Conditions at any
              time. The latest version will always be available on this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">10. Contact</h2>
            <p className="mt-3 leading-7">
              For questions relating to these Terms & Conditions, please contact:
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