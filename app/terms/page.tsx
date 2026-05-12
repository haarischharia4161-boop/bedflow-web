import Link from "next/link";

export default function TermsAndConditions() {
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
            Terms &amp; Conditions
          </h1>
          <div className="space-y-6 leading-relaxed text-slate-900">
            <p>
              <strong>Last updated: May 2026</strong>
            </p>

            <p>
              Please read these Terms &amp; Conditions carefully before using the bedflow.in website
              and the Bedflow platform. By accessing or using our service, you agree to be bound by these
              terms.
            </p>

            <h2 className="mt-4 text-xl font-semibold text-slate-950">1. Provision of Service</h2>
            <p>
              Bedflow provides a cloud-based Software as a Service (SaaS) platform for Paying Guest (PG)
              and hostel management. We reserve the right to modify, suspend, or discontinue any part of the
              service at any time with or without notice.
            </p>

            <h2 className="mt-4 text-xl font-semibold text-slate-950">2. User Accounts &amp; Security</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials. You agree
              to accept responsibility for all activities that occur under your account. You must notify us
              immediately of any unauthorized use of your account.
            </p>

            <h2 className="mt-4 text-xl font-semibold text-slate-950">3. Acceptable Use</h2>
            <p>
              You agree not to use the platform for any unlawful purpose or in any way that could damage,
              disable, or impair our servers or networks. You must not attempt to gain unauthorized access
              to any user data or internal systems.
            </p>

            <h2 className="mt-4 text-xl font-semibold text-slate-950">4. Limitation of Liability</h2>
            <p>
              In no event shall Bedflow, its directors, employees, or partners be liable for any indirect,
              incidental, special, consequential or punitive damages, including without limitation, loss of
              profits, data, or goodwill, arising from your use of the service.
            </p>

            <h2 className="mt-4 text-xl font-semibold text-slate-950">5. Governing Law &amp; Jurisdiction</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of India. Any legal
              disputes arising out of or related to these terms shall be subject to the exclusive
              jurisdiction of the courts located in Haryana, India.
            </p>

            <h2 className="mt-4 text-xl font-semibold text-slate-950">6. Contact Information</h2>
            <p>
              For any queries regarding these Terms, please reach out to us at{" "}
              <strong>bedflow.admin@gmail.com</strong>.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
