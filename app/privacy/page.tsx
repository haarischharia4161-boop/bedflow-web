import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen px-4 pb-20 pt-10 text-slate-950 sm:px-8">
      <div className="mx-auto max-w-3xl space-y-6">
        <nav>
          <Link href="/" className="text-sm font-semibold text-indigo-700 hover:underline">
            ← Back to home
          </Link>
        </nav>
        <article className="glass-panel rounded-3xl p-8 sm:p-10">
          <h1 className="mb-6 border-b border-white/40 pb-4 text-3xl font-bold text-slate-950">
            Privacy Policy
          </h1>
          <div className="space-y-6 leading-relaxed text-slate-900">
            <p>
              <strong>Last updated: May 2026</strong>
            </p>

            <p>
              At Bedflow (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), we are committed to protecting your
              personal data and respecting your privacy. This Privacy Policy explains how we collect,
              use, and safeguard your information when you use our website (bedflow.in) and our PG
              management software services.
            </p>

            <h2 className="mt-4 text-xl font-semibold text-slate-950">1. Information We Collect</h2>
            <p>
              We may collect personal identification information including, but not limited to: your
              name, email address, phone number, business details, and property management data.
              We also collect technical data such as IP addresses and browser types to improve our
              platform&apos;s performance.
            </p>

            <h2 className="mt-4 text-xl font-semibold text-slate-950">2. How We Use Your Information</h2>
            <p>
              The data we collect is strictly used to: provide and maintain our services, notify you
              about changes to our platform, provide customer support, and process billing and payments
              securely.
            </p>

            <h2 className="mt-4 text-xl font-semibold text-slate-950">3. Payment Processing</h2>
            <p>
              We do not store your credit/debit card information on our servers. All transactions
              are securely processed through our authorized payment gateway partner (Razorpay), which
              adheres to strict industry security standards (PCI-DSS).
            </p>

            <h2 className="mt-4 text-xl font-semibold text-slate-950">4. Data Sharing and Security</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We implement
              industry-standard security measures to protect your data from unauthorized access,
              alteration, or disclosure.
            </p>

            <h2 className="mt-4 text-xl font-semibold text-slate-950">5. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy or your data,
              please contact us at <strong>bedflow.admin@gmail.com</strong>.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
