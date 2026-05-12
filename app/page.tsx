// app/page.tsx  —  Bedflow Marketing Home Page  —  Ultra-Wide Desktop Scale
"use client";
import { BedflowLogo } from "@/components/BedflowLogo";
import Link from "next/link";

// ─── Design tokens ────────────────────────────────────────────────────────────
const G = {
  card: {
    background: "rgba(255,255,255,0.42)",
    backdropFilter: "blur(40px) saturate(180%)",
    WebkitBackdropFilter: "blur(40px) saturate(180%)",
    border: "1px solid rgba(255,255,255,0.68)",
    borderTop: "1px solid rgba(255,255,255,0.92)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.90)",
    borderRadius: "24px",
  },
  pill: {
    background: "rgba(255,255,255,0.52)",
    backdropFilter: "blur(30px) saturate(180%)",
    WebkitBackdropFilter: "blur(30px) saturate(180%)",
    border: "1px solid rgba(255,255,255,0.72)",
    boxShadow: "0 4px 16px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.90)",
    borderRadius: "9999px",
  },
  btn: {
    background: "rgba(255,255,255,0.62)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.85)",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.95)",
    borderRadius: "14px",
  },
  primary: {
    background: "linear-gradient(145deg, #6366f1 0%, #7c3aed 100%)",
    boxShadow: "0 4px 20px rgba(99,102,241,0.38), inset 0 1px 0 rgba(255,255,255,0.22)",
    borderRadius: "14px",
    border: "1px solid rgba(99,102,241,0.50)",
  },
};

// ─── Inline keyframe injection ────────────────────────────────────────────────
const CSS = `
  @keyframes floatA { 0%,100%{transform:translateY(0px) rotate(0deg)} 50%{transform:translateY(-18px) rotate(1deg)} }
  @keyframes floatB { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-12px)} }
  @keyframes floatC { 0%,100%{transform:translateY(0px) rotate(-1deg)} 50%{transform:translateY(-22px) rotate(0.5deg)} }
  @keyframes pulse  { 0%,100%{opacity:1} 50%{opacity:0.55} }
  @keyframes slideUp{ from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
  @keyframes fadeIn { from{opacity:0} to{opacity:1} }
  @keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
  @keyframes shimmer{ 0%{background-position:-400px 0} 100%{background-position:400px 0} }
  .anim-float-a { animation: floatA 6s ease-in-out infinite; }
  .anim-float-b { animation: floatB 8s ease-in-out infinite; }
  .anim-float-c { animation: floatC 7s ease-in-out infinite 1s; }
  .anim-pulse    { animation: pulse 2.5s ease-in-out infinite; }
  .anim-slide-up { animation: slideUp 0.7s cubic-bezier(0.22,1,0.36,1) both; }
  .anim-fade-in  { animation: fadeIn 0.8s ease both; }
  .anim-ticker   { animation: ticker 28s linear infinite; }
  .delay-1 { animation-delay: 0.1s; }
  .delay-2 { animation-delay: 0.2s; }
  .delay-3 { animation-delay: 0.35s; }
  .delay-4 { animation-delay: 0.5s; }
  .delay-5 { animation-delay: 0.65s; }
  .hover-lift { transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease; }
  .hover-lift:hover { transform: translateY(-4px) scale(1.01); }
  .nav-link { transition: color 0.18s; color: #64748b; font-size:18px; font-weight:500; }
  .nav-link:hover { color: #1e293b; }
`;

// ─── Sub-components ───────────────────────────────────────────────────────────
function Badge({ children, color = "#6366f1" }: { children: React.ReactNode; color?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-base font-semibold shadow-sm"
      style={{ background: `${color}14`, border: `1px solid ${color}28`, color }}>
      {children}
    </span>
  );
}

function GlossHighlight({ position = "tl" }: { position?: "tl"|"tr"|"bl"|"br" }) {
  const map = { tl:"20% 0%", tr:"80% 0%", bl:"20% 100%", br:"80% 100%" };
  return (
    <div className="pointer-events-none absolute inset-0" style={{
      borderRadius: "inherit",
      background: `radial-gradient(ellipse at ${map[position]}, rgba(255,255,255,0.55) 0%, transparent 60%)`,
    }} />
  );
}

function StatBadge({ label, value, sub, delay = "" }: { label:string; value:string; sub:string; delay?:string }) {
  return (
    <div className={`anim-slide-up ${delay} hover-lift flex flex-col gap-1.5 rounded-[28px] px-8 py-6`}
      style={G.card}>
      <p className="text-base font-semibold tracking-[0.14em] text-slate-400 uppercase">{label}</p>
      <p className="text-5xl font-bold tracking-tight text-slate-900">{value}</p>
      <p className="text-base text-slate-500">{sub}</p>
    </div>
  );
}

// ─── Hero floating dashboard preview ─────────────────────────────────────────
function DashboardPreview() {
  return (
    <div className="relative w-full max-w-[640px] mx-auto select-none">
      {/* Main card */}
      <div className="anim-float-a relative rounded-[40px] p-8 overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.48)",
          backdropFilter: "blur(48px) saturate(200%)",
          WebkitBackdropFilter: "blur(48px) saturate(200%)",
          border: "1px solid rgba(255,255,255,0.72)",
          borderTop: "1px solid rgba(255,255,255,0.95)",
          boxShadow: "0 24px 64px rgba(0,0,0,0.10), 0 8px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.95)",
        }}>
        <GlossHighlight position="tl" />

        {/* Header row */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-slate-400 uppercase mb-2">Total Revenue</p>
            <p className="text-5xl font-bold text-slate-900 tracking-tight">₹1,42,340</p>
          </div>
          <div className="flex items-center gap-2 rounded-full px-4 py-2"
            style={{ background:"rgba(16,185,129,0.10)", border:"1px solid rgba(16,185,129,0.22)" }}>
            <span className="h-2.5 w-2.5 rounded-full anim-pulse" style={{background:"#10b981"}} />
            <span className="text-base font-semibold text-emerald-700">+8.4%</span>
          </div>
        </div>

        {/* Mini sparkline */}
        <svg viewBox="0 0 300 60" className="w-full mb-8" style={{height:70}}>
          <defs>
            <linearGradient id="hg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 46 C30 36 55 52 80 34 S130 14 160 26 S210 42 240 22 S280 8 300 16"
            fill="none" stroke="#6366f1" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M0 46 C30 36 55 52 80 34 S130 14 160 26 S210 42 240 22 S280 8 300 16 L300 60 L0 60Z"
            fill="url(#hg)" />
        </svg>

        {/* Tenant rows */}
        {[
          { name:"Rahul Sharma", room:"4B", amt:"₹12,000", status:"paid" },
          { name:"Priya Mehta",  room:"2A", amt:"₹9,500",  status:"paid" },
          { name:"Arjun Singh",  room:"6C", amt:"₹11,000", status:"overdue" },
        ].map((t, i) => (
          <div key={i} className="flex items-center gap-5 rounded-[20px] px-5 py-4 mb-3"
            style={{ background:"rgba(255,255,255,0.45)", border:"1px solid rgba(255,255,255,0.65)" }}>
            <div className="h-12 w-12 rounded-full flex items-center justify-center text-lg font-bold text-white flex-shrink-0"
              style={{background:"linear-gradient(145deg,#6366f1,#a78bfa)"}}>
              {t.name[0]}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-lg font-semibold text-slate-800 truncate">{t.name}</p>
              <p className="text-sm text-slate-500 mt-1">Room {t.room}</p>
            </div>
            <span className="text-lg font-bold" style={{color: t.status==="paid"?"#059669":"#d97706"}}>{t.amt}</span>
          </div>
        ))}
      </div>

      {/* Floating badge — top right */}
      <div className="anim-float-b absolute -right-12 -top-8 rounded-[24px] px-6 py-5 shadow-2xl"
        style={{...G.card, minWidth:180}}>
        <GlossHighlight position="tl" />
        <p className="text-sm text-slate-500 font-medium mb-1">Occupancy</p>
        <p className="text-3xl font-bold text-slate-900">92%</p>
        <div className="mt-3 h-2.5 rounded-full overflow-hidden" style={{background:"rgba(0,0,0,0.07)"}}>
          <div className="h-full rounded-full" style={{width:"92%",background:"linear-gradient(90deg,#6366f1,#a78bfa)"}} />
        </div>
      </div>

      {/* Floating badge — bottom left */}
      <div className="anim-float-c absolute -left-16 bottom-20 rounded-[24px] px-6 py-5 shadow-2xl"
        style={{...G.card, minWidth:190}}>
        <GlossHighlight position="tr" />
        <div className="flex items-center gap-2 mb-2">
          <span className="h-2.5 w-2.5 rounded-full anim-pulse" style={{background:"#10b981"}} />
          <p className="text-sm font-semibold text-emerald-700">LIVE AUTO-PAY</p>
        </div>
        <p className="text-sm text-slate-500 mb-0.5">Rent collected</p>
        <p className="text-2xl font-bold text-slate-900">₹9,210 ✓</p>
      </div>

      {/* Floating badge — bottom right */}
      <div className="anim-float-b absolute -right-10 bottom-8 rounded-2xl px-5 py-4 shadow-xl"
        style={{...G.card, animationDelay:"2s"}}>
        <p className="text-sm text-slate-500 mb-1">Pending Dues</p>
        <p className="text-xl font-bold text-amber-600">₹3,132</p>
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function HomePage() {
  const features = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
        </svg>
      ),
      title: "Unified Dashboard",
      desc: "All your properties, tenants, and payments in one beautiful glass dashboard. No more spreadsheets.",
      color: "#6366f1",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      title: "Automated Rent Collection",
      desc: "Send reminders, track due dates, and reconcile payments automatically — zero manual work.",
      color: "#0ea5e9",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: "Tenant Management",
      desc: "Onboard, track, and communicate with tenants. Digital lease agreements, all in one place.",
      color: "#8b5cf6",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      ),
      title: "Real-time Analytics",
      desc: "Know exactly how your properties are performing. Revenue trends, occupancy rates, and ROI breakdowns.",
      color: "#10b981",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
      ),
      title: "Smart Alerts",
      desc: "Get notified the moment rent is overdue, a lease expires, or a maintenance request is submitted.",
      color: "#f59e0b",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: "Bank-grade Security",
      desc: "256-bit encryption, 2FA, and SOC-2 compliant infrastructure. Your data is fortress-level safe.",
      color: "#ec4899",
    },
  ];

  const steps = [
    { n:"01", title:"Add your properties", desc:"Add your PG, apartment, or hostel in under 2 minutes. No technical setup required.", icon:"🏠" },
    { n:"02", title:"Onboard your tenants", desc:"Send a link, they fill in their details. Lease agreements are signed digitally.", icon:"🧑‍🤝‍🧑" },
    { n:"03", title:"Sit back & get paid", desc:"Bedflow handles rent reminders, tracking, and reconciliation. You just collect.", icon:"💰" },
  ];

  const testimonials = [
    {
      name: "Vikram Nair",
      role: "PG Owner, Pune",
      avatar: "V",
      grad: "linear-gradient(145deg,#6366f1,#a78bfa)",
      text: "I used to spend my entire Sunday on rent follow-ups. With Bedflow, it's completely automated. I got my Sundays back.",
      stars: 5,
    },
    {
      name: "Sanya Joshi",
      role: "Property Manager, Bengaluru",
      avatar: "S",
      grad: "linear-gradient(145deg,#ec4899,#f472b6)",
      text: "Managing 6 properties across 3 locations used to be chaos. Now I do everything from one screen in 10 minutes a day.",
      stars: 5,
    },
    {
      name: "Deepak Rao",
      role: "Landlord, Hyderabad",
      avatar: "D",
      grad: "linear-gradient(145deg,#0ea5e9,#38bdf8)",
      text: "The analytics alone are worth it. I finally know my actual ROI per property. Switched from a spreadsheet and never looked back.",
      stars: 5,
    },
  ];

  const plans = [
    {
      name: "Starter",
      price: "₹0",
      period: "forever free",
      desc: "Perfect for first-time landlords with a single property.",
      features: ["Up to 5 tenants", "Basic rent tracking", "Email reminders", "Mobile app access"],
      cta: "Get started free",
      highlight: false,
    },
    {
      name: "Pro",
      price: "₹999",
      period: "per month",
      desc: "For serious landlords managing multiple properties.",
      features: ["Up to 25 tenants", "Advanced analytics", "SMS + WhatsApp alerts", "Digital lease signing", "Priority support", "Export reports"],
      cta: "Start Pro trial →",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "volume pricing",
      desc: "For large PG chains, real-estate firms & agencies.",
      features: ["Unlimited tenants", "Multi-user access", "API integration", "Custom branding", "Dedicated account manager", "SLA uptime guarantee"],
      cta: "Talk to sales",
      highlight: false,
    },
  ];

  const tickerItems = [
    "🏠 14 properties managed",
    "💰 ₹48 Cr collected",
    "🧑‍🤝‍🧑 1,200+ landlords",
    "⚡ 99.9% uptime",
    "📱 iOS & Android",
    "🔒 SOC-2 certified",
    "📊 Real-time analytics",
    "✨ Zero spreadsheets",
  ];

  return (
    <div style={{ fontFamily: "-apple-system,'SF Pro Display','SF Pro Text',BlinkMacSystemFont,system-ui,sans-serif" }}>
      <style>{CSS}</style>

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen items-center px-6 pb-24 pt-16 sm:px-10 sm:pt-20 lg:px-12 lg:pt-24">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left copy */}
          <div className="flex flex-col gap-8">
            <div className="anim-slide-up">
              <Badge color="#6366f1">✦ Now with AI-powered rent insights</Badge>
            </div>
            <h1 className="anim-slide-up delay-1 text-6xl font-bold tracking-[-0.03em] text-slate-900 leading-[1.05] sm:text-7xl lg:text-[88px]">
              Property management,{" "}
              <span className="relative inline-block mt-3">
                <span style={{
                  background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  finally simple.
                </span>
              </span>
            </h1>
            <p className="anim-slide-up delay-2 text-xl lg:text-2xl text-slate-500 leading-relaxed max-w-[600px]">
              Bedflow is the all-in-one platform that helps landlords and PG owners collect rent, manage tenants, and grow their portfolio — without the chaos.
            </p>

            {/* CTAs */}
            <div className="anim-slide-up delay-3 flex flex-wrap items-center gap-5 mt-2">
              <Link href="/signup"
                className="flex items-center gap-3 px-9 py-4.5 text-lg font-semibold text-white transition-all hover:scale-105 active:scale-[0.97]"
                style={G.primary}>
                Start for free — no card needed
              </Link>
              <a href="#how-it-works"
                className="flex items-center gap-2 px-8 py-4.5 text-lg font-semibold text-slate-700 transition-all hover:scale-105 active:scale-[0.97]"
                style={G.btn}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10"/><polygon points="10,8 16,12 10,16"/>
                </svg>
                See how it works
              </a>
            </div>

            {/* Social proof avatars */}
            <div className="anim-slide-up delay-4 flex items-center gap-4 mt-4">
              <div className="flex -space-x-3">
                {["linear-gradient(135deg,#6366f1,#a78bfa)","linear-gradient(135deg,#ec4899,#f9a8d4)","linear-gradient(135deg,#10b981,#6ee7b7)","linear-gradient(135deg,#f59e0b,#fcd34d)"].map((g,i) => (
                  <div key={i} className="h-12 w-12 rounded-full border-[3px] border-white flex items-center justify-center text-sm font-bold text-white shadow-sm"
                    style={{background:g, zIndex: 4-i}}>
                    {["V","S","D","R"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(s => <span key={s} className="text-amber-400 text-lg">★</span>)}
                </div>
                <p className="text-base text-slate-500 mt-1">Loved by <strong className="text-slate-700">1,200+ landlords</strong> across India</p>
              </div>
            </div>
          </div>

          {/* Right — floating dashboard */}
          <div className="anim-fade-in delay-5 flex justify-center lg:justify-end">
            <DashboardPreview />
          </div>

        </div>
      </section>

      {/* ── TICKER BAR ──────────────────────────────────────────────────────── */}
      <div className="overflow-hidden py-8 border-y border-black/[0.05]"
        style={{ background:"rgba(255,255,255,0.30)", backdropFilter:"blur(20px)", WebkitBackdropFilter:"blur(20px)" }}>
        <div className="flex anim-ticker whitespace-nowrap gap-0">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2 px-12 text-xl font-medium text-slate-500">
              {item}
              <span className="text-slate-300 mx-4">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── STATS ROW ───────────────────────────────────────────────────────── */}
      <section className="px-6 py-24 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-[1440px] grid grid-cols-2 gap-8 sm:grid-cols-4">
          <StatBadge label="Collected" value="₹48 Cr" sub="across all landlords" delay="delay-1" />
          <StatBadge label="Landlords" value="1,200+" sub="active this month"    delay="delay-2" />
          <StatBadge label="Uptime"    value="99.9%"  sub="guaranteed SLA"       delay="delay-3" />
          <StatBadge label="Time saved" value="6 hrs" sub="per landlord/week"    delay="delay-4" />
        </div>
      </section>

      {/* ── FEATURES ────────────────────────────────────────────────────────── */}
      <section id="features" className="px-6 py-24 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          {/* Section header */}
          <div className="mb-20 text-center flex flex-col items-center gap-5">
            <Badge color="#6366f1">Everything you need</Badge>
            <h2 className="text-6xl font-bold tracking-[-0.025em] text-slate-900">Built for serious landlords</h2>
            <p className="text-2xl text-slate-500 max-w-3xl mt-2">Every feature is designed to eliminate the manual, tedious work of property management.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <div key={i} className="hover-lift relative overflow-hidden p-10" style={G.card}>
                <GlossHighlight position={i % 2 === 0 ? "tl" : "tr"} />
                <div className="relative flex flex-col gap-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[20px]"
                    style={{ background:`${f.color}12`, border:`1px solid ${f.color}22` }}>
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{f.title}</h3>
                    <p className="mt-3 text-lg text-slate-500 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────────────────── */}
      <section id="how-it-works" className="px-6 py-24 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-20 text-center flex flex-col items-center gap-5">
            <Badge color="#10b981">Simple as 1-2-3</Badge>
            <h2 className="text-6xl font-bold tracking-[-0.025em] text-slate-900">Up and running in minutes</h2>
          </div>

          <div className="relative flex flex-col gap-8 lg:flex-row lg:gap-10">
            {/* Connecting line on desktop */}
            <div className="hidden lg:block absolute top-[72px] left-[calc(16.66%+12px)] right-[calc(16.66%+12px)] h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.25), rgba(99,102,241,0.25), transparent)" }} />

            {steps.map((s, i) => (
              <div key={i} className="hover-lift relative flex-1 overflow-hidden p-10 text-center" style={G.card}>
                <GlossHighlight position="tl" />
                <div className="relative flex flex-col items-center gap-6">
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-[24px] text-4xl"
                    style={{ background:"rgba(255,255,255,0.65)", border:"1px solid rgba(255,255,255,0.85)", boxShadow:"0 4px 12px rgba(0,0,0,0.06)" }}>
                    {s.icon}
                    {/* Step number badge */}
                    <span className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white shadow-md"
                      style={{ background:"linear-gradient(145deg,#6366f1,#8b5cf6)" }}>
                      {i+1}
                    </span>
                  </div>
                  <div>
                    <p className="text-base font-bold tracking-[0.18em] text-indigo-400 uppercase mb-3">{s.n}</p>
                    <h3 className="text-2xl font-bold text-slate-900">{s.title}</h3>
                    <p className="mt-3 text-lg text-slate-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────────────────── */}
      <section id="testimonials" className="px-6 py-24 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-20 text-center flex flex-col items-center gap-5">
            <Badge color="#ec4899">Real stories</Badge>
            <h2 className="text-6xl font-bold tracking-[-0.025em] text-slate-900">Landlords love Bedflow</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="hover-lift relative overflow-hidden p-10 flex flex-col gap-6" style={G.card}>
                <GlossHighlight position={i % 2 === 0 ? "tl" : "tr"} />
                <div className="relative">
                  {/* Stars */}
                  <div className="flex gap-1.5 mb-5">
                    {Array.from({length:t.stars}).map((_,s) => (
                      <span key={s} className="text-amber-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-xl text-slate-600 leading-relaxed italic">"{t.text}"</p>
                  {/* Author */}
                  <div className="mt-8 flex items-center gap-5">
                    <div className="h-14 w-14 rounded-full flex items-center justify-center text-xl font-bold text-white flex-shrink-0 shadow-sm"
                      style={{background: t.grad}}>
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-lg font-bold text-slate-800">{t.name}</p>
                      <p className="text-base text-slate-500 mt-1">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────────────────────────────── */}
      <section id="pricing" className="px-6 py-24 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-20 text-center flex flex-col items-center gap-5">
            <Badge color="#8b5cf6">Transparent pricing</Badge>
            <h2 className="text-6xl font-bold tracking-[-0.025em] text-slate-900">Start free, scale when ready</h2>
            <p className="text-2xl text-slate-500 mt-2">No hidden fees. Cancel anytime.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {plans.map((p, i) => (
              <div key={i} className="hover-lift relative overflow-hidden flex flex-col"
                style={p.highlight ? {
                  ...G.card,
                  background: "rgba(238,242,255,0.58)",
                  border: "1.5px solid rgba(99,102,241,0.35)",
                  borderTop: "1.5px solid rgba(99,102,241,0.55)",
                  boxShadow: "0 12px 40px rgba(99,102,241,0.14), 0 4px 12px rgba(99,102,241,0.08), inset 0 1px 0 rgba(255,255,255,0.90)",
                } : G.card}>

                {p.highlight && (
                  <div className="absolute top-6 right-6">
                    <span className="rounded-full px-4 py-1.5 text-sm font-bold"
                      style={{ background:"linear-gradient(145deg,#6366f1,#8b5cf6)", color:"white", boxShadow:"0 2px 8px rgba(99,102,241,0.35)" }}>
                      ✦ POPULAR
                    </span>
                  </div>
                )}

                <GlossHighlight position="tl" />

                <div className="relative flex flex-col flex-1 gap-8 p-10">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{p.name}</h3>
                    <div className="mt-4 flex items-end gap-2">
                      <span className="text-6xl font-bold tracking-tight text-slate-900">{p.price}</span>
                      <span className="text-lg text-slate-500 mb-1.5">/{p.period}</span>
                    </div>
                    <p className="mt-4 text-base text-slate-500 leading-relaxed">{p.desc}</p>
                  </div>

                  <div className="flex-1 flex flex-col gap-4">
                    {p.features.map((feat, fi) => (
                      <div key={fi} className="flex items-center gap-4">
                        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full"
                          style={{ background: p.highlight ? "rgba(99,102,241,0.12)" : "rgba(16,185,129,0.12)" }}>
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6l3 3 5-5" stroke={p.highlight ? "#6366f1" : "#10b981"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="text-lg text-slate-600">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {p.name === "Enterprise" ? (
                    <a
                      href="mailto:bedflow.admin@gmail.com?subject=Bedflow%20Enterprise%20inquiry"
                      className="mt-6 flex items-center justify-center py-4.5 text-lg font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
                      style={{
                        ...G.btn,
                        color: "#111827",
                        borderRadius: "16px",
                      }}
                    >
                      {p.cta}
                    </a>
                  ) : (
                    <Link
                      href="/signup"
                      className="mt-6 flex items-center justify-center py-4.5 text-lg font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
                      style={
                        p.highlight
                          ? {
                              ...G.primary,
                              color: "white",
                              borderRadius: "16px",
                            }
                          : {
                              ...G.btn,
                              color: "#374151",
                            }
                      }
                    >
                      {p.cta}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA BANNER ────────────────────────────────────────────────── */}
      <section className="px-6 py-24 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="relative overflow-hidden rounded-[40px] p-20 text-center"
            style={{
              background: "rgba(238,242,255,0.60)",
              backdropFilter: "blur(48px) saturate(200%)",
              WebkitBackdropFilter: "blur(48px) saturate(200%)",
              border: "1px solid rgba(99,102,241,0.28)",
              borderTop: "1px solid rgba(99,102,241,0.48)",
              boxShadow: "0 20px 60px rgba(99,102,241,0.12), inset 0 1px 0 rgba(255,255,255,0.90)",
            }}>
            {/* Inner glow orbs */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full"
              style={{ background:"radial-gradient(ellipse, rgba(99,102,241,0.18) 0%, transparent 70%)", filter:"blur(50px)" }} />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full"
              style={{ background:"radial-gradient(ellipse, rgba(139,92,246,0.18) 0%, transparent 70%)", filter:"blur(50px)" }} />

            <div className="relative flex flex-col items-center gap-10">
              <div className="flex justify-center">
                <BedflowLogo showWordmark={false} size={88} />
              </div>
              <div>
                <h2 className="text-6xl font-bold tracking-[-0.025em] text-slate-900 leading-tight">Ready to run your properties smarter?</h2>
                <p className="mt-6 text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  Join 1,200+ landlords already using Bedflow. Setup takes less than 2 minutes — and it's free forever to start.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-5 mt-4">
                <Link href="/signup"
                  className="px-10 py-5 text-xl font-semibold text-white transition-all hover:scale-105 active:scale-[0.97]"
                  style={{ ...G.primary, borderRadius: "18px" }}>
                  Create your free account →
                </Link>
                <Link href="/login"
                  className="px-9 py-5 text-xl font-semibold text-slate-700 transition-all hover:scale-105"
                  style={{ ...G.btn, borderRadius: "18px" }}>
                  Sign in
                </Link>
              </div>
              <p className="text-base text-slate-500 mt-2">No credit card required · Cancel anytime · 14-day Pro trial included</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer className="px-6 py-20 sm:px-10 lg:px-12 border-t border-black/[0.05]"
        style={{ background:"rgba(255,255,255,0.28)", backdropFilter:"blur(20px)", WebkitBackdropFilter:"blur(20px)" }}>
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col gap-12">
              <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
              
              {/* Logo & Contact Info */}
              <div className="flex flex-col gap-6 items-center md:items-start">
                <BedflowLogo size={48} className="scale-110 md:scale-100" />
                <div className="space-y-2 text-center text-lg text-slate-900 md:text-left">
                  <p><strong className="text-slate-800">Email:</strong> bedflow.admin@gmail.com</p>
                  <p><strong className="text-slate-800">Contact:</strong> +91 84481 14161</p>
                </div>
              </div>

              {/* Your Policy Links */}
              <div className="flex flex-wrap items-center justify-center gap-10">
                <Link href="/privacy" className="text-lg font-semibold text-slate-950 transition-colors hover:text-indigo-600">Privacy Policy</Link>
                <Link href="/terms" className="text-lg font-semibold text-slate-950 transition-colors hover:text-indigo-600">Terms & Conditions</Link>
                <Link href="/refund" className="text-lg font-semibold text-slate-950 transition-colors hover:text-indigo-600">Refund Policy</Link>
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-black/[0.05] pt-10 flex flex-col md:flex-row items-center justify-between gap-8 text-base text-slate-500">
            <p>© {new Date().getFullYear()} Bedflow Technologies Pvt. Ltd. · Made with ♥ in India</p>
            {/* Social Icons */}
            <div className="flex items-center gap-5">
              {[
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg> },
                { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
              ].map((s, i) => (
                <a
                  key={i}
                  href={i === 0 ? "https://twitter.com" : "https://www.linkedin.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-slate-700 transition-all hover:scale-110 hover:text-slate-950"
                  style={G.btn}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}