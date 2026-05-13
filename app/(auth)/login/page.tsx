// app/(auth)/login/page.tsx
"use client";
import { BedflowLogo } from "@/components/BedflowLogo";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'error' | 'success', text: string } | null>(null);
  
  const supabase = createClient();

  // ─── Google OAuth Login ───────────────────────────────────────────────
  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setMessage(null);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/auth/callback`
      }
    });
    if (error) {
      setMessage({ type: 'error', text: error.message });
      setIsLoading(false);
    }
  };

  // ─── Email Magic Link Login ─────────────────────────────────────────
  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    setMessage(null);
    
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${location.origin}/dashboard` }
    });
    
    if (error) { 
      setMessage({ type: 'error', text: error.message }); 
    } else {
      setMessage({ type: 'success', text: "Secure link sent! Check your inbox." });
    }
    setIsLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10 sm:px-6 sm:py-12">

      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-10 flex flex-col items-center gap-5">
          <BedflowLogo size={64} />
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-slate-950">Welcome to Bedflow</h1>
            <p className="mt-2 text-base text-slate-800">
              Sign in or{" "}
              <Link href="/signup" className="font-semibold text-indigo-600 underline-offset-4 hover:underline">
                create an account
              </Link>
            </p>
          </div>
        </div>

        <div className="rounded-[32px] p-8 sm:p-10"
          style={{
            background: "rgba(255,255,255,0.60)",
            backdropFilter: "blur(40px) saturate(200%)",
            WebkitBackdropFilter: "blur(40px) saturate(200%)",
            border: "1px solid rgba(255,255,255,0.8)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.9)",
          }}>
          
          {message && (
            <div className={`mb-6 rounded-xl p-4 text-sm font-medium ${message.type === 'error' ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-emerald-50 text-emerald-700 border border-emerald-100'}`}>
              {message.text}
            </div>
          )}

          {/* Google Auth */}
          <button 
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="flex w-full items-center justify-center gap-3 rounded-[16px] border border-slate-200/80 bg-white px-4 py-4 text-base font-semibold text-slate-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_2px_0_rgba(15,23,42,0.06),0_4px_12px_rgba(15,23,42,0.08)] transition-all active:translate-y-0.5 disabled:opacity-70">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">or</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* Magic Link Form */}
          <form onSubmit={handleEmailLogin} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">Email address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com" 
                required
                className="w-full px-5 py-4 text-base font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:bg-white/80"
                style={{
                  background: "rgba(255,255,255,0.3)",
                  border: "1px solid rgba(0,0,0,0.1)",
                  borderRadius: "16px",
                  boxShadow: "inset 0 2px 4px rgba(0,0,0,0.02)"
                }}
              />
            </div>

            <button 
              type="submit" 
              disabled={isLoading || !email}
              className="btn-nav-3d btn-nav-3d-primary mt-2 flex w-full items-center justify-center rounded-2xl py-4 text-base font-semibold disabled:opacity-70">
              {isLoading ? "Sending secure link..." : "Continue with Email →"}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-800">
            New here?{" "}
            <Link href="/signup" className="font-semibold text-indigo-600 hover:underline">
              Sign up — it&apos;s free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}