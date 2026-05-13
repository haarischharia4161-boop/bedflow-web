// app/(auth)/signup/page.tsx  —  Bedflow Sign Up  —  Light Mode Apple Liquid Glass

"use client";
import { BedflowLogo } from "@/components/BedflowLogo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

const inputStyle = {
  background: "rgba(255,255,255,0.22)",
  border: "1px solid rgba(0,0,0,0.09)",
  borderRadius: "12px",
};
const inputFocusStyle = {
  background: "rgba(255,255,255,0.55)",
  border: "1px solid rgba(99,102,241,0.40)",
  boxShadow: "0 0 0 3px rgba(99,102,241,0.10)",
};

export default function SignUpPage() {
  const router = useRouter();
  const supabase = createClient();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "", role: "landlord" });
  const [showPass, setShowPass] = useState(false);
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "error" | "success"; text: string } | null>(null);

  const handleGoogleSignUp = async () => {
    setGoogleLoading(true);
    setMessage(null);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
    if (error) {
      setMessage({ type: "error", text: error.message });
      setGoogleLoading(false);
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    Object.assign(e.currentTarget.style, inputFocusStyle);
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    Object.assign(e.currentTarget.style, { background: inputStyle.background, border: inputStyle.border, boxShadow: "none" });
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 800);
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10 sm:px-5 sm:py-12">

      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="mb-10 flex flex-col items-center gap-4">
          <BedflowLogo size={64} />
          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-tight text-slate-950">Create your account</h1>
            <p className="mt-1 text-sm text-slate-800">
              Start managing properties for free ·{" "}
              <Link href="/login" className="font-semibold text-indigo-600 underline-offset-4 hover:underline">
                Already have an account?
              </Link>
            </p>
          </div>
        </div>

        {/* Step indicator */}
        <div className="mb-6 flex items-center justify-center gap-2">
          {[1, 2].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold transition-all"
                style={s <= step ? {
                  background: "linear-gradient(145deg, #6366f1, #8b5cf6)",
                  color: "white",
                  boxShadow: "0 2px 8px rgba(99,102,241,0.35)",
                } : {
                  background: "rgba(255,255,255,0.45)",
                  border: "1px solid rgba(0,0,0,0.10)",
                  color: "#94a3b8",
                }}>
                {s < step ? "✓" : s}
              </div>
              <span className="text-xs font-medium" style={{ color: s <= step ? "#4f46e5" : "#94a3b8" }}>
                {s === 1 ? "Your info" : "Your role"}
              </span>
              {s < 2 && <div className="w-8 h-px" style={{ background: step > s ? "#6366f1" : "rgba(0,0,0,0.10)" }} />}
            </div>
          ))}
        </div>

        {/* Glass card */}
        <div className="relative overflow-hidden p-8"
          style={{
            background: "rgba(255,255,255,0.45)",
            backdropFilter: "blur(40px) saturate(180%)",
            WebkitBackdropFilter: "blur(40px) saturate(180%)",
            border: "1px solid rgba(255,255,255,0.68)",
            borderTop: "1px solid rgba(255,255,255,0.92)",
            boxShadow: "0 16px 48px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)",
            borderRadius: "28px",
          }}>

          <div className="pointer-events-none absolute left-0 top-0 h-[45%] w-[65%] rounded-tl-[28px]"
            style={{ background: "radial-gradient(ellipse at 20% 0%, rgba(255,255,255,0.55) 0%, transparent 65%)" }} />

          <form onSubmit={handleNext} className="relative flex flex-col gap-5">

            {message && (
              <div
                className={`rounded-xl p-3 text-sm font-medium ${
                  message.type === "error"
                    ? "border border-red-100 bg-red-50 text-red-600"
                    : "border border-emerald-100 bg-emerald-50 text-emerald-700"
                }`}
              >
                {message.text}
              </div>
            )}

            {step === 1 ? (
              <>
            <button
              type="button"
              onClick={handleGoogleSignUp}
              disabled={googleLoading || isLoading}
              className="flex w-full items-center justify-center gap-3 rounded-[14px] border border-slate-200/80 bg-white px-4 py-3.5 text-sm font-semibold text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_2px_0_rgba(15,23,42,0.06),0_4px_10px_rgba(15,23,42,0.08)] transition-all active:translate-y-0.5 disabled:opacity-70"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              {googleLoading ? "Redirecting…" : "Continue with Google"}
            </button>

            <div className="my-1 flex items-center gap-3">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                or sign up with email
              </span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>
              </>
            ) : null}

            {step === 1 && (
              <>
                {/* Full name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold tracking-[0.04em] text-slate-600">Full Name</label>
                  <div className="relative">
                    <div className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                      </svg>
                    </div>
                    <input type="text" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}
                      placeholder="Haarish Chharia"
                      className="w-full py-3 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all"
                      style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold tracking-[0.04em] text-slate-600">Email Address</label>
                  <div className="relative">
                    <div className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}
                      placeholder="you@example.com"
                      className="w-full py-3 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all"
                      style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                  </div>
                </div>

                {/* Password */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold tracking-[0.04em] text-slate-600">Password</label>
                  <div className="relative">
                    <div className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                    </div>
                    <input type={showPass ? "text" : "password"} value={form.password}
                      onChange={(e) => setForm({...form, password: e.target.value})}
                      placeholder="Min. 8 characters"
                      className="w-full py-3 pl-10 pr-11 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all"
                      style={inputStyle} onFocus={handleFocus} onBlur={handleBlur} />
                    <button type="button" onClick={() => setShowPass(!showPass)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {showPass
                          ? <><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></>
                          : <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>
                        }
                      </svg>
                    </button>
                  </div>
                  {/* Strength bar */}
                  {form.password && (
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex flex-1 gap-1">
                        {[1,2,3,4].map((i) => (
                          <div key={i} className="h-1 flex-1 rounded-full transition-all"
                            style={{
                              background: form.password.length >= i * 2
                                ? i <= 1 ? "#ef4444" : i <= 2 ? "#f59e0b" : i <= 3 ? "#3b82f6" : "#10b981"
                                : "rgba(0,0,0,0.08)"
                            }} />
                        ))}
                      </div>
                      <span className="text-[10px] text-slate-400">
                        {form.password.length < 4 ? "Weak" : form.password.length < 7 ? "Fair" : form.password.length < 10 ? "Good" : "Strong"}
                      </span>
                    </div>
                  )}
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <p className="text-sm font-medium text-slate-700">What best describes you?</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: "landlord", icon: "🏠", title: "Landlord",    desc: "I own and manage properties" },
                    { id: "manager", icon: "📋", title: "PG Manager",   desc: "I manage on behalf of owners" },
                    { id: "agent",   icon: "🤝", title: "Agent",        desc: "I help match tenants & owners" },
                    { id: "tenant",  icon: "🧑", title: "Tenant",       desc: "I am looking for a place" },
                  ].map((r) => (
                    <button key={r.id} type="button" onClick={() => setForm({...form, role: r.id})}
                      className="flex flex-col gap-2 rounded-[18px] p-4 text-left transition-all hover:scale-[1.02] active:scale-[0.98]"
                      style={{
                        background: form.role === r.id ? "rgba(99,102,241,0.10)" : "rgba(255,255,255,0.40)",
                        border: form.role === r.id ? "1.5px solid rgba(99,102,241,0.40)" : "1px solid rgba(255,255,255,0.65)",
                        boxShadow: form.role === r.id ? "0 2px 12px rgba(99,102,241,0.14), inset 0 1px 0 rgba(255,255,255,0.8)" : "0 2px 8px rgba(0,0,0,0.04)",
                      }}>
                      <span className="text-2xl">{r.icon}</span>
                      <div>
                        <p className="text-sm font-semibold" style={{ color: form.role === r.id ? "#4f46e5" : "#1e293b" }}>{r.title}</p>
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">{r.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Terms */}
                <div className="flex items-start gap-3 rounded-[14px] px-4 py-3"
                  style={{ background: "rgba(255,255,255,0.35)", border: "1px solid rgba(255,255,255,0.60)" }}>
                  <input type="checkbox" id="terms" className="mt-0.5 h-4 w-4 cursor-pointer accent-indigo-500" />
                  <label htmlFor="terms" className="text-xs text-slate-500 leading-relaxed cursor-pointer">
                    I agree to Bedflow's{" "}
                    <a href="#" className="font-semibold text-indigo-500">Terms of Service</a>{" "}
                    and{" "}
                    <a href="#" className="font-semibold text-indigo-500">Privacy Policy</a>
                  </label>
                </div>
              </>
            )}

            {/* CTA button */}
            <button type="submit" disabled={isLoading || googleLoading}
              className="btn-nav-3d btn-nav-3d-primary mt-1 flex w-full items-center justify-center gap-2 py-3.5 text-sm font-semibold disabled:opacity-70">
              {isLoading ? (
                <>
                  <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                  </svg>
                  Creating account…
                </>
              ) : step === 1 ? "Continue →" : "Create Account →"}
            </button>

            {step === 1 && (
              <p className="text-center text-xs text-slate-500">
                Already have an account?{" "}
                <Link href="/login" className="font-semibold text-indigo-600 transition-opacity hover:underline">
                  Sign in
                </Link>
              </p>
            )}
            {step === 2 && (
              <button type="button" onClick={() => setStep(1)}
                className="text-center text-xs font-medium text-slate-400 hover:text-slate-600 transition-colors">
                ← Back
              </button>
            )}

          </form>
        </div>

      </div>
    </div>
  );
}
