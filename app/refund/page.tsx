export default function RefundPolicy() {
    return (
      <main className="min-h-screen flex flex-col items-center p-8 bg-slate-50 text-slate-900">
        <div className="max-w-3xl mt-12 w-full bg-white p-8 rounded-xl shadow-sm border border-slate-200">
          <h1 className="text-3xl font-bold mb-6 border-b pb-4">Refund &amp; Cancellation Policy</h1>
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p><strong>Last updated: May 2026</strong></p>
            
            <p>At Bedflow, we strive to ensure our software perfectly meets your PG management needs. We believe in transparent billing and a fair cancellation process.</p>
  
            <h2 className="text-xl font-semibold text-slate-800 mt-4">1. Subscription Cancellations</h2>
            <p>You may cancel your Bedflow subscription at any time. If you choose to cancel, your account will remain active until the end of your current paid billing cycle. We do not require any long-term contracts, and there are no cancellation fees.</p>
  
            <h2 className="text-xl font-semibold text-slate-800 mt-4">2. Refund Eligibility</h2>
            <p>Because Bedflow is a digital Software as a Service (SaaS) product, we generally do not offer refunds for partially used billing periods or for months where the software was unused but the account remained active.</p>
  
            <h2 className="text-xl font-semibold text-slate-800 mt-4">3. Exceptional Circumstances</h2>
            <p>Exceptions to our no-refund policy may be made on a case-by-case basis at our sole discretion. This typically includes accidental duplicate billing or technical failures on our end that entirely prevented you from accessing the platform. Any approved refunds will be credited back to your original payment method within 5-7 business days.</p>
  
            <h2 className="text-xl font-semibold text-slate-800 mt-4">4. How to Request Help</h2>
            <p>If you believe you have been billed in error or wish to discuss your account status, please contact our billing team immediately at <strong>bedflow.admin@gmail.com</strong>. Please include your account details and the transaction reference number in your email.</p>
          </div>
        </div>
      </main>
    );
  }