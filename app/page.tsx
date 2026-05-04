import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-slate-50 text-slate-900">
      <div className="text-center max-w-2xl mt-12">
        <h1 className="text-5xl font-bold mb-4">Bedflow</h1>
        <p className="text-xl text-slate-600 mb-16"><strong>Set . Forget . Collect</strong></p>
        
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 mb-16 text-left">
          <h2 className="font-semibold mb-4 text-lg border-b pb-2">Contact Support</h2>
          <p className="mb-2"><strong>Email:</strong> bedflow.admin@gmail.com</p>
          <p><strong>Contact:</strong> +91 84481 14161</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 border-t pt-8">
          <Link href="/privacy" className="hover:text-emerald-600 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-emerald-600 transition-colors">Terms &amp; Conditions</Link>
          <Link href="/refund" className="hover:text-emerald-600 transition-colors">Refund Policy</Link>
        </div>
      </div>
    </main>
  );
}