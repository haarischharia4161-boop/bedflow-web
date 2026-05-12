// app/dashboard/page.tsx  —  Bedflow Dashboard  —  Light Mode Apple Liquid Glass

"use client";

import { BedflowLogo } from "@/components/BedflowLogo";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

// ─── Reusable glass tokens ──────────────────────────────────────────────────
const glass = {
  card: {
    background: "rgba(255,255,255,0.42)",
    backdropFilter: "blur(40px) saturate(180%)",
    WebkitBackdropFilter: "blur(40px) saturate(180%)",
    border: "1px solid rgba(255,255,255,0.68)",
    borderTop: "1px solid rgba(255,255,255,0.92)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)",
    borderRadius: "24px",
  },
  pill: {
    background: "rgba(255,255,255,0.50)",
    backdropFilter: "blur(30px) saturate(180%)",
    WebkitBackdropFilter: "blur(30px) saturate(180%)",
    border: "1px solid rgba(255,255,255,0.72)",
    boxShadow: "0 4px 16px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.9)",
    borderRadius: "9999px",
  },
  innerCard: {
    background: "rgba(255,255,255,0.38)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.60)",
    boxShadow: "0 2px 8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.85)",
    borderRadius: "16px",
  },
  button: {
    background: "rgba(255,255,255,0.62)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.85)",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.95)",
    borderRadius: "12px",
  },
};

const MONTHS = ["March", "April", "May", "June"] as const;

export default function Dashboard() {
  const [monthIdx, setMonthIdx] = useState(2);

  return (
    <div className="min-h-screen px-5 py-8 sm:px-8 lg:px-14"
      style={{ fontFamily: "-apple-system,'SF Pro Display','SF Pro Text',BlinkMacSystemFont,system-ui,sans-serif" }}>

      {/* ── TOP NAV ──────────────────────────────────────────────────────── */}
      <header className="mb-10 flex flex-wrap items-center justify-between gap-4">
        {/* Logo + greeting */}
        <div className="flex min-w-0 items-center gap-4">
          <BedflowLogo size={44} />
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-900">
              Bedflow
            </p>
            <h1 className="text-xl font-semibold tracking-tight text-slate-950">
              Good morning, Haarish 👋
            </h1>
          </div>
        </div>

        {/* Right nav pills */}
        <div className="flex items-center gap-3">
          {/* Notification bell */}
          <button
            type="button"
            aria-label="Notifications"
            onClick={() => toast("You're all caught up — no new notifications.")}
            className="relative flex h-9 w-9 items-center justify-center transition-all hover:scale-105 active:scale-95"
            style={glass.button}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-400" />
          </button>

          {/* Avatar pill */}
          <Link href="/setting" className="flex items-center gap-2.5 px-3 py-1.5 transition-opacity hover:opacity-95" style={glass.pill}>
            <div className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
              style={{ background: "linear-gradient(145deg, #6366f1, #a78bfa)" }}>
              H
            </div>
            <span className="text-sm font-medium text-slate-950">H. Chharia</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </Link>
        </div>
      </header>

      {/* ── MONTH TABS ───────────────────────────────────────────────────── */}
      <div className="mb-8 flex items-center gap-2">
        <span className="mr-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate-900">Period</span>
        {MONTHS.map((m, i) => (
          <button key={m}
            type="button"
            onClick={() => setMonthIdx(i)}
            className="px-4 py-1.5 text-xs font-medium tracking-wide transition-all hover:scale-105 active:scale-95"
            style={i === monthIdx ? {
              background: "linear-gradient(145deg, rgba(99,102,241,0.15), rgba(139,92,246,0.12))",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(99,102,241,0.30)",
              boxShadow: "0 2px 8px rgba(99,102,241,0.12), inset 0 1px 0 rgba(255,255,255,0.8)",
              borderRadius: "9999px",
              color: "#4f46e5",
              fontWeight: "600",
            } : {
              background: "rgba(255,255,255,0.35)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.55)",
              borderRadius: "9999px",
              color: "#94a3b8",
            }}>
            {m}
          </button>
        ))}
      </div>

      {/* ── CARD GRID ────────────────────────────────────────────────────── */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

        {/* CARD 1 — Total Revenue (wide) */}
        <div className="relative col-span-1 overflow-hidden p-6 sm:col-span-2 lg:col-span-2"
          style={glass.card}>

          {/* Specular top-left gloss */}
          <div className="pointer-events-none absolute left-0 top-0 h-[50%] w-[60%] rounded-tl-[24px]"
            style={{ background: "radial-gradient(ellipse at 20% 0%, rgba(255,255,255,0.5) 0%, transparent 65%)" }} />

          <div className="relative">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-400 uppercase">Total Revenue</p>
                <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900">₹12,342</p>
                <div className="mt-2 flex items-center gap-1.5">
                  <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold"
                    style={{
                      background: "rgba(16,185,129,0.12)",
                      border: "1px solid rgba(16,185,129,0.25)",
                      color: "#059669",
                    }}>
                    <span>↑</span> 5.2%
                  </span>
                  <span className="text-xs text-slate-400">vs last month</span>
                </div>
              </div>

              {/* Icon badge */}
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl text-white"
                style={{
                  background: "linear-gradient(145deg, #6366f1, #8b5cf6)",
                  boxShadow: "0 4px 14px rgba(99,102,241,0.30)",
                }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
            </div>

            {/* Sub-stats */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                { label: "Collected", value: "₹9,210", accent: "#059669", bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.18)" },
                { label: "Pending",   value: "₹3,132", accent: "#d97706", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.20)" },
              ].map((s) => (
                <div key={s.label} className="rounded-[16px] px-4 py-3"
                  style={{ background: s.bg, border: `1px solid ${s.border}` }}>
                  <p className="text-[11px] font-medium text-slate-500">{s.label}</p>
                  <p className="mt-1 text-xl font-bold" style={{ color: s.accent }}>{s.value}</p>
                </div>
              ))}
            </div>

            {/* Sparkline */}
            <div className="mt-5">
              <svg viewBox="0 0 280 52" className="w-full" preserveAspectRatio="none" style={{ height: 48 }}>
                <defs>
                  <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0 42 C20 34 40 44 60 30 S105 12 125 22 S165 38 190 20 S235 7 280 14"
                  fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
                <path d="M0 42 C20 34 40 44 60 30 S105 12 125 22 S165 38 190 20 S235 7 280 14 L280 52 L0 52Z"
                  fill="url(#sparkFill)" />
                {/* Data points */}
                {[[60,30],[125,22],[190,20],[280,14]].map(([cx,cy], i) => (
                  <circle key={i} cx={cx} cy={cy} r="3" fill="#6366f1" />
                ))}
              </svg>
              <div className="mt-1.5 flex justify-between text-[10px] text-slate-400">
                {["Jan","Feb","Mar","Apr","May","Jun","Jul"].map(m => <span key={m}>{m}</span>)}
              </div>
            </div>
          </div>
        </div>

        {/* CARD 2 — Occupancy */}
        <div className="relative overflow-hidden p-6" style={glass.card}>
          <div className="pointer-events-none absolute right-0 top-0 h-[45%] w-[60%] rounded-tr-[24px]"
            style={{ background: "radial-gradient(ellipse at 80% 0%, rgba(255,255,255,0.55) 0%, transparent 65%)" }} />

          <div className="relative flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-400 uppercase">Occupancy</p>
              <span className="text-xs font-semibold text-indigo-500">Live</span>
            </div>

            {/* Donut */}
            <div className="flex flex-col items-center">
              <div className="relative flex h-32 w-32 items-center justify-center">
                <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full -rotate-90">
                  <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="10" />
                  <circle cx="50" cy="50" r="38" fill="none" stroke="url(#donut-grad)" strokeWidth="10"
                    strokeDasharray={`${0.78 * 2 * Math.PI * 38} ${2 * Math.PI * 38}`}
                    strokeLinecap="round" />
                  <defs>
                    <linearGradient id="donut-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#a78bfa" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="text-center">
                  <p className="text-2xl font-bold text-slate-900">78%</p>
                  <p className="text-[10px] text-slate-400">occupied</p>
                </div>
              </div>
            </div>

            {/* Breakdown */}
            <div className="flex flex-col gap-2">
              {[
                { label: "Occupied", count: "14 rooms", pct: 78, color: "#6366f1" },
                { label: "Vacant",   count: "4 rooms",  pct: 22, color: "#e2e8f0" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-3">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full rounded-full transition-all" style={{ width: `${b.pct}%`, background: b.color }} />
                  </div>
                  <div className="flex w-[90px] items-center justify-between">
                    <span className="text-xs text-slate-500">{b.label}</span>
                    <span className="text-xs font-semibold text-slate-700">{b.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CARD 3 — Recent Tenants */}
        <div id="recent-tenants" className="relative scroll-mt-24 overflow-hidden p-6" style={glass.card}>
          <div className="pointer-events-none absolute left-0 bottom-0 h-[40%] w-[60%] rounded-bl-[24px]"
            style={{ background: "radial-gradient(ellipse at 20% 100%, rgba(196,181,253,0.18) 0%, transparent 65%)" }} />

          <div className="relative flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-400 uppercase">Recent Tenants</p>
              <Link href="/setting" className="text-xs font-semibold text-indigo-600 transition-opacity hover:opacity-80">
                See all →
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              {[
                { name: "Rahul Sharma", room: "Room 4B", amount: "₹12,000", status: "paid",    date: "09 Dec" },
                { name: "Priya Mehta",  room: "Room 2A", amount: "₹9,500",  status: "paid",    date: "08 Dec" },
                { name: "Arjun Singh",  room: "Room 6C", amount: "₹11,000", status: "overdue", date: "07 Dec" },
                { name: "Meena Rao",    room: "Room 1B", amount: "₹8,750",  status: "pending", date: "06 Dec" },
              ].map((t) => (
                <div key={t.name} className="flex items-center gap-3 rounded-[14px] px-3 py-2.5 transition-all hover:bg-white/40"
                  style={{ border: "1px solid rgba(255,255,255,0.50)" }}>
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ background: "linear-gradient(145deg, #6366f1, #a78bfa)" }}>
                    {t.name[0]}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-slate-800">{t.name}</p>
                    <p className="text-[11px] text-slate-400">{t.room}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-slate-800">{t.amount}</p>
                    <span className="inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold mt-0.5"
                      style={t.status === "paid"
                        ? { background: "rgba(16,185,129,0.10)", color: "#059669", border: "1px solid rgba(16,185,129,0.20)" }
                        : t.status === "overdue"
                        ? { background: "rgba(239,68,68,0.10)",  color: "#dc2626", border: "1px solid rgba(239,68,68,0.20)" }
                        : { background: "rgba(245,158,11,0.10)", color: "#d97706", border: "1px solid rgba(245,158,11,0.20)" }
                      }>
                      {t.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CARD 4 — Quick Actions */}
        <div className="relative overflow-hidden p-6 sm:col-span-2" style={glass.card}>
          <div className="pointer-events-none absolute right-0 bottom-0 h-[50%] w-[50%] rounded-br-[24px]"
            style={{ background: "radial-gradient(ellipse at 80% 100%, rgba(167,139,250,0.14) 0%, transparent 65%)" }} />

          <div className="relative">
            <p className="mb-5 text-[11px] font-semibold tracking-[0.18em] text-slate-400 uppercase">Quick Actions</p>
            <div className="grid grid-cols-4 gap-3">
              {(
                [
                  { icon: "↗", label: "Transfer", bg: "rgba(99,102,241,0.12)", border: "rgba(99,102,241,0.25)", color: "#4f46e5" },
                  { icon: "＋", label: "Add Tenant", bg: "rgba(139,92,246,0.12)", border: "rgba(139,92,246,0.25)", color: "#7c3aed" },
                  { icon: "📋", label: "Reports", bg: "rgba(6,182,212,0.10)", border: "rgba(6,182,212,0.22)", color: "#0891b2" },
                  { icon: "⚙", label: "Settings", bg: "rgba(156,163,175,0.14)", border: "rgba(156,163,175,0.30)", color: "#6b7280", href: "/setting" },
                ] as const
              ).map((a) =>
                "href" in a ? (
                  <Link
                    key={a.label}
                    href={a.href}
                    className="group flex flex-col items-center gap-2.5 rounded-[20px] px-2 py-4 transition-all hover:scale-[1.04] active:scale-[0.97]"
                    style={{
                      background: "rgba(255,255,255,0.45)",
                      border: "1px solid rgba(255,255,255,0.70)",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.9)",
                    }}
                  >
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl text-xl transition-transform group-hover:scale-105"
                      style={{ background: a.bg, border: `1px solid ${a.border}`, color: a.color }}
                    >
                      {a.icon}
                    </div>
                    <span className="text-[11px] font-medium text-slate-700 transition-colors group-hover:text-slate-950">{a.label}</span>
                  </Link>
                ) : (
                  <button
                    key={a.label}
                    type="button"
                    onClick={() =>
                      toast(`${a.label} is coming soon — you’ll get Early Access first.`)
                    }
                    className="group flex flex-col items-center gap-2.5 rounded-[20px] px-2 py-4 transition-all hover:scale-[1.04] active:scale-[0.97]"
                    style={{
                      background: "rgba(255,255,255,0.45)",
                      border: "1px solid rgba(255,255,255,0.70)",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.9)",
                    }}
                  >
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl text-xl transition-transform group-hover:scale-105"
                      style={{ background: a.bg, border: `1px solid ${a.border}`, color: a.color }}
                    >
                      {a.icon}
                    </div>
                    <span className="text-[11px] font-medium text-slate-700 transition-colors group-hover:text-slate-950">{a.label}</span>
                  </button>
                ),
              )}
            </div>
          </div>
        </div>

        {/* CARD 5 — Recent Activity */}
        <div className="relative overflow-hidden p-6" style={glass.card}>
          <div className="pointer-events-none absolute right-0 top-0 h-[40%] w-[55%] rounded-tr-[24px]"
            style={{ background: "radial-gradient(ellipse at 80% 0%, rgba(251,207,232,0.25) 0%, transparent 65%)" }} />

          <div className="relative flex flex-col gap-4">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-400 uppercase">Activity</p>
            <div className="flex flex-col gap-0">
              {[
                { icon: "💰", text: "Rent collected from Rahul",  time: "2h ago",  color: "#059669" },
                { icon: "🏠", text: "Room 3D marked available",   time: "5h ago",  color: "#6366f1" },
                { icon: "⚠️", text: "Arjun Singh overdue notice", time: "1d ago",  color: "#d97706" },
                { icon: "📨", text: "Lease renewal sent to Priya", time: "2d ago", color: "#0891b2" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 py-3 border-b border-black/[0.04] last:border-0">
                  <span className="mt-0.5 text-base leading-none">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-slate-700 leading-snug">{item.text}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ── BOTTOM NAV ───────────────────────────────────────────────────── */}
      <nav className="mx-auto mt-10 flex w-fit flex-wrap items-center justify-center gap-1 px-3 py-2" style={glass.pill}>
        {(
          [
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              ),
              label: "Home",
              href: "/dashboard",
              active: true,
            },
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              ),
              label: "Tenants",
              href: "/dashboard#recent-tenants",
              active: false,
            },
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              ),
              label: "Payments",
              href: "/",
              active: false,
            },
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.07 4.93l-1.41 1.41M5.34 18.66l-1.41 1.41M20 12h2M2 12h2M19.07 19.07l-1.41-1.41M5.34 5.34l-1.41-1.41M12 20v2M12 2v2" />
                </svg>
              ),
              label: "Settings",
              href: "/setting",
              active: false,
            },
          ] as const
        ).map((n) => (
          <Link
            key={n.label}
            href={n.href}
            scroll={n.href.includes("#")}
            className="flex flex-col items-center gap-1 rounded-[20px] px-4 py-2 transition-all hover:bg-white/50"
            style={
              n.active
                ? {
                    background: "rgba(255,255,255,0.65)",
                    border: "1px solid rgba(255,255,255,0.85)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  }
                : {}
            }
          >
            <span style={{ color: n.active ? "#4f46e5" : "#64748b" }}>{n.icon}</span>
            <span className="text-[10px] font-semibold" style={{ color: n.active ? "#4f46e5" : "#64748b" }}>
              {n.label}
            </span>
          </Link>
        ))}
      </nav>

    </div>
  );
}
