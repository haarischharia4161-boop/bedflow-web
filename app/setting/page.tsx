// app/settings/page.tsx  —  Bedflow Settings  —  Light Mode Apple Liquid Glass

"use client";
import { BedflowLogo } from "@/components/BedflowLogo";
import Link from "next/link";
import { useState } from "react";

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
};

function Toggle({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button onClick={onChange} type="button"
      className="relative flex h-[28px] w-[50px] flex-shrink-0 cursor-pointer items-center rounded-full transition-all"
      style={{
        background: checked
          ? "linear-gradient(145deg, #6366f1, #8b5cf6)"
          : "rgba(0,0,0,0.10)",
        boxShadow: checked
          ? "0 2px 8px rgba(99,102,241,0.35), inset 0 1px 0 rgba(255,255,255,0.20)"
          : "inset 0 1px 3px rgba(0,0,0,0.10)",
        border: checked ? "1px solid rgba(99,102,241,0.40)" : "1px solid rgba(0,0,0,0.06)",
      }}>
      <div className="absolute transition-all duration-200 h-5 w-5 rounded-full bg-white"
        style={{
          left: checked ? "calc(100% - 22px)" : "2px",
          boxShadow: "0 1px 4px rgba(0,0,0,0.20)",
        }} />
    </button>
  );
}

function SettingsRow({ icon, title, desc, children }: { icon: React.ReactNode; title: string; desc?: string; children?: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 py-4 px-5 border-b border-black/[0.04] last:border-0">
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl"
        style={{ background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.15)" }}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-slate-800">{title}</p>
        {desc && <p className="text-xs text-slate-400 mt-0.5">{desc}</p>}
      </div>
      {children}
    </div>
  );
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [notifs, setNotifs] = useState({ email: true, sms: false, push: true, weekly: true, overdue: true, newTenant: false });
  const [profile, setProfile] = useState({ name: "Haarish Chharia", email: "haarish@bedflow.in", phone: "+91 98765 43210", city: "Mumbai" });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const tabs = [
    { id: "profile",       label: "Profile",       icon: "👤" },
    { id: "notifications", label: "Notifications", icon: "🔔" },
    { id: "security",      label: "Security",      icon: "🔒" },
    { id: "billing",       label: "Billing",       icon: "💳" },
    { id: "appearance",    label: "Appearance",    icon: "🎨" },
  ];

  return (
    <div className="min-h-screen px-5 py-8 sm:px-8 lg:px-14"
      style={{ fontFamily: "-apple-system,'SF Pro Display','SF Pro Text',BlinkMacSystemFont,system-ui,sans-serif" }}>

      {/* Header */}
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <BedflowLogo size={44} />
          <div className="hidden h-10 w-px bg-slate-200 sm:block" aria-hidden />
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-900">
              Account
            </p>
            <h1 className="mt-0.5 text-2xl font-bold tracking-tight text-slate-950">Settings</h1>
          </div>
          <Link
            href="/dashboard"
            className="glass-bubble glass-bubble--idle rounded-xl px-4 py-2 text-sm font-black text-slate-950 sm:inline-flex"
          >
            ← Dashboard
          </Link>
        </div>
        <button onClick={handleSave}
          className="flex items-center gap-2 px-4 py-2 text-sm font-semibold transition-all hover:scale-105 active:scale-95"
          style={{
            background: saved
              ? "linear-gradient(145deg, #10b981, #059669)"
              : "rgba(255,255,255,0.62)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: saved ? "1px solid rgba(16,185,129,0.40)" : "1px solid rgba(255,255,255,0.85)",
            boxShadow: saved
              ? "0 2px 8px rgba(16,185,129,0.25)"
              : "0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.95)",
            borderRadius: "12px",
            color: saved ? "white" : "#374151",
          }}>
          {saved ? "✓ Saved!" : "Save changes"}
        </button>
      </header>

      <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">

        {/* Sidebar tabs */}
        <aside className="lg:w-56 flex-shrink-0">
          <nav className="flex flex-col gap-1 p-2" style={{...glass.card, padding: "8px"}}>
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-3 rounded-[14px] px-3 py-2.5 text-left transition-all"
                style={activeTab === tab.id ? {
                  background: "rgba(99,102,241,0.10)",
                  border: "1px solid rgba(99,102,241,0.22)",
                  boxShadow: "0 1px 4px rgba(99,102,241,0.10)",
                } : {
                  border: "1px solid transparent",
                }}>
                <span className="text-base">{tab.icon}</span>
                <span className="text-sm font-medium" style={{ color: activeTab === tab.id ? "#4f46e5" : "#475569" }}>
                  {tab.label}
                </span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 flex flex-col gap-5">

          {/* ── PROFILE TAB ── */}
          {activeTab === "profile" && (
            <>
              {/* Avatar section */}
              <div className="relative overflow-hidden p-6" style={glass.card}>
                <div className="pointer-events-none absolute left-0 top-0 h-[45%] w-[60%] rounded-tl-[24px]"
                  style={{ background: "radial-gradient(ellipse at 20% 0%, rgba(255,255,255,0.55) 0%, transparent 65%)" }} />
                <div className="relative flex items-center gap-5">
                  <div className="relative">
                    <div className="flex h-20 w-20 items-center justify-center rounded-[22px] text-3xl font-bold text-white"
                      style={{
                        background: "linear-gradient(145deg, #6366f1, #a78bfa)",
                        boxShadow: "0 6px 20px rgba(99,102,241,0.35)",
                      }}>
                      H
                    </div>
                    <button className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full text-white text-xs"
                      style={{ background: "linear-gradient(145deg, #6366f1, #8b5cf6)", boxShadow: "0 2px 8px rgba(99,102,241,0.35)" }}>
                      ✏
                    </button>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">{profile.name}</h2>
                    <p className="text-sm text-slate-500">{profile.email}</p>
                    <span className="mt-1.5 inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
                      style={{ background: "rgba(99,102,241,0.10)", border: "1px solid rgba(99,102,241,0.22)", color: "#4f46e5" }}>
                      🏠 Landlord · Pro Plan
                    </span>
                  </div>
                </div>
              </div>

              {/* Form fields */}
              <div className="relative overflow-hidden p-6" style={glass.card}>
                <div className="pointer-events-none absolute right-0 top-0 h-[40%] w-[55%] rounded-tr-[24px]"
                  style={{ background: "radial-gradient(ellipse at 80% 0%, rgba(255,255,255,0.50) 0%, transparent 65%)" }} />
                <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {[
                    { label: "Full Name",     key: "name",  type: "text",  icon: "👤", placeholder: "Your full name" },
                    { label: "Email Address", key: "email", type: "email", icon: "✉️", placeholder: "your@email.com" },
                    { label: "Phone Number",  key: "phone", type: "tel",   icon: "📱", placeholder: "+91 00000 00000" },
                    { label: "City",          key: "city",  type: "text",  icon: "📍", placeholder: "Your city" },
                  ].map(({ label, key, type, placeholder }) => (
                    <div key={key} className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold tracking-[0.04em] text-slate-600">{label}</label>
                      <input type={type}
                        value={profile[key as keyof typeof profile]}
                        onChange={(e) => setProfile({ ...profile, [key]: e.target.value })}
                        placeholder={placeholder}
                        className="w-full py-3 px-4 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all"
                        style={{ background: "rgba(255,255,255,0.22)", border: "1px solid rgba(0,0,0,0.09)", borderRadius: "12px" }}
                        onFocus={(e) => {
                          e.currentTarget.style.background = "rgba(255,255,255,0.55)";
                          e.currentTarget.style.border = "1px solid rgba(99,102,241,0.40)";
                          e.currentTarget.style.boxShadow = "0 0 0 3px rgba(99,102,241,0.10)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.background = "rgba(255,255,255,0.22)";
                          e.currentTarget.style.border = "1px solid rgba(0,0,0,0.09)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* ── NOTIFICATIONS TAB ── */}
          {activeTab === "notifications" && (
            <div className="relative overflow-hidden" style={glass.card}>
              <div className="pointer-events-none absolute left-0 top-0 h-[35%] w-[55%] rounded-tl-[24px]"
                style={{ background: "radial-gradient(ellipse at 20% 0%, rgba(255,255,255,0.55) 0%, transparent 65%)" }} />
              <div className="relative">
                <div className="px-5 py-4 border-b border-black/[0.04]">
                  <h2 className="text-base font-semibold text-slate-900">Notification Preferences</h2>
                  <p className="text-xs text-slate-400 mt-0.5">Choose how and when Bedflow contacts you</p>
                </div>

                <div className="px-1">
                  <p className="px-4 py-3 text-[11px] font-semibold tracking-[0.12em] text-slate-400 uppercase">Channels</p>
                  <SettingsRow icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>} title="Email notifications" desc="Receive updates in your inbox">
                    <Toggle checked={notifs.email} onChange={() => setNotifs({...notifs, email: !notifs.email})} />
                  </SettingsRow>
                  <SettingsRow icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>} title="SMS alerts" desc="Get texts for urgent actions">
                    <Toggle checked={notifs.sms} onChange={() => setNotifs({...notifs, sms: !notifs.sms})} />
                  </SettingsRow>
                  <SettingsRow icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>} title="Push notifications" desc="Browser & app notifications">
                    <Toggle checked={notifs.push} onChange={() => setNotifs({...notifs, push: !notifs.push})} />
                  </SettingsRow>

                  <p className="px-4 py-3 text-[11px] font-semibold tracking-[0.12em] text-slate-400 uppercase">Events</p>
                  <SettingsRow icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>} title="Weekly summary" desc="Digest of your property activity">
                    <Toggle checked={notifs.weekly} onChange={() => setNotifs({...notifs, weekly: !notifs.weekly})} />
                  </SettingsRow>
                  <SettingsRow icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>} title="Overdue rent alerts" desc="Immediate notice when rent is late">
                    <Toggle checked={notifs.overdue} onChange={() => setNotifs({...notifs, overdue: !notifs.overdue})} />
                  </SettingsRow>
                  <SettingsRow icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>} title="New tenant added" desc="Notify when a new tenant joins">
                    <Toggle checked={notifs.newTenant} onChange={() => setNotifs({...notifs, newTenant: !notifs.newTenant})} />
                  </SettingsRow>
                </div>
              </div>
            </div>
          )}

          {/* ── SECURITY TAB ── */}
          {activeTab === "security" && (
            <div className="flex flex-col gap-5">
              <div className="relative overflow-hidden" style={glass.card}>
                <div className="pointer-events-none absolute right-0 top-0 h-[40%] w-[55%] rounded-tr-[24px]"
                  style={{ background: "radial-gradient(ellipse at 80% 0%, rgba(255,255,255,0.50) 0%, transparent 65%)" }} />
                <div className="relative">
                  <div className="px-5 py-4 border-b border-black/[0.04]">
                    <h2 className="text-base font-semibold text-slate-900">Security</h2>
                  </div>
                  <SettingsRow icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>} title="Change Password" desc="Last changed 3 months ago">
                    <button className="text-xs font-semibold text-indigo-500 hover:opacity-70 transition-opacity">Update →</button>
                  </SettingsRow>
                  <SettingsRow icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>} title="Two-Factor Authentication" desc="Add extra layer of security">
                    <span className="rounded-full px-2 py-0.5 text-[10px] font-bold"
                      style={{ background: "rgba(239,68,68,0.10)", color: "#dc2626", border: "1px solid rgba(239,68,68,0.20)" }}>
                      OFF
                    </span>
                  </SettingsRow>
                  <SettingsRow icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>} title="Active Sessions" desc="2 devices currently logged in">
                    <button className="text-xs font-semibold text-red-400 hover:opacity-70 transition-opacity">Revoke all</button>
                  </SettingsRow>
                </div>
              </div>

              {/* Danger zone */}
              <div className="relative overflow-hidden p-5"
                style={{
                  background: "rgba(254,242,242,0.55)",
                  backdropFilter: "blur(30px) saturate(180%)",
                  WebkitBackdropFilter: "blur(30px) saturate(180%)",
                  border: "1px solid rgba(252,165,165,0.40)",
                  borderTop: "1px solid rgba(252,165,165,0.65)",
                  boxShadow: "0 4px 16px rgba(239,68,68,0.06)",
                  borderRadius: "24px",
                }}>
                <h3 className="text-sm font-semibold text-red-600 mb-1">Danger Zone</h3>
                <p className="text-xs text-red-400 mb-4">These actions are permanent and cannot be undone.</p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <button className="flex-1 rounded-[12px] py-2.5 text-sm font-semibold text-red-500 transition-all hover:scale-[1.01] active:scale-[0.99]"
                    style={{ background: "rgba(255,255,255,0.65)", border: "1.5px solid rgba(239,68,68,0.30)", boxShadow: "0 2px 8px rgba(239,68,68,0.08)" }}>
                    Export my data
                  </button>
                  <button className="flex-1 rounded-[12px] py-2.5 text-sm font-semibold text-white transition-all hover:scale-[1.01] active:scale-[0.99]"
                    style={{ background: "linear-gradient(145deg, #ef4444, #dc2626)", boxShadow: "0 3px 10px rgba(239,68,68,0.30)" }}>
                    Delete account
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ── BILLING TAB ── */}
          {activeTab === "billing" && (
            <div className="flex flex-col gap-5">
              {/* Current plan */}
              <div className="relative overflow-hidden p-6"
                style={{
                  ...glass.card,
                  background: "rgba(238,242,255,0.55)",
                  border: "1px solid rgba(99,102,241,0.30)",
                  borderTop: "1px solid rgba(99,102,241,0.50)",
                }}>
                <div className="pointer-events-none absolute right-0 top-0 h-[50%] w-[50%] rounded-tr-[24px]"
                  style={{ background: "radial-gradient(ellipse at 80% 0%, rgba(167,139,250,0.20) 0%, transparent 65%)" }} />
                <div className="relative flex items-center justify-between">
                  <div>
                    <span className="rounded-full px-2.5 py-0.5 text-[11px] font-bold"
                      style={{ background: "rgba(99,102,241,0.14)", color: "#4f46e5", border: "1px solid rgba(99,102,241,0.25)" }}>
                      ✦ PRO PLAN
                    </span>
                    <p className="mt-3 text-3xl font-bold text-slate-900">₹999<span className="text-base font-normal text-slate-500">/mo</span></p>
                    <p className="mt-1 text-sm text-slate-500">Renews on June 12, 2025 · Auto-renew on</p>
                  </div>
                  <div className="text-right flex flex-col gap-2">
                    <button className="rounded-[12px] px-4 py-2 text-sm font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
                      style={{ background: "linear-gradient(145deg, #6366f1, #7c3aed)", boxShadow: "0 3px 10px rgba(99,102,241,0.30)" }}>
                      Upgrade ↗
                    </button>
                    <button className="text-xs text-slate-400 hover:text-slate-600 transition-colors">Cancel plan</button>
                  </div>
                </div>
                {/* Usage bar */}
                <div className="mt-5 flex flex-col gap-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500">Properties used</span>
                    <span className="font-semibold text-slate-700">14 / 25</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(0,0,0,0.08)" }}>
                    <div className="h-full rounded-full" style={{ width: "56%", background: "linear-gradient(90deg, #6366f1, #a78bfa)" }} />
                  </div>
                </div>
              </div>

              {/* Payment method */}
              <div className="relative overflow-hidden" style={glass.card}>
                <div className="px-5 py-4 border-b border-black/[0.04]">
                  <h2 className="text-base font-semibold text-slate-900">Payment Method</h2>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-4 rounded-[16px] px-4 py-3.5 transition-all"
                    style={{ background: "rgba(255,255,255,0.45)", border: "1.5px solid rgba(99,102,241,0.25)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                    <div className="flex h-9 w-14 items-center justify-center rounded-[8px] text-xs font-black"
                      style={{ background: "linear-gradient(135deg, #1a1a2e, #16213e)", color: "#f59e0b" }}>
                      VISA
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-800">•••• •••• •••• 4242</p>
                      <p className="text-xs text-slate-400">Expires 08/27</p>
                    </div>
                    <span className="rounded-full px-2 py-0.5 text-[10px] font-bold"
                      style={{ background: "rgba(16,185,129,0.10)", color: "#059669", border: "1px solid rgba(16,185,129,0.25)" }}>
                      Default
                    </span>
                  </div>
                  <button className="mt-3 w-full rounded-[14px] py-2.5 text-sm font-medium text-indigo-500 transition-all hover:bg-indigo-50/50"
                    style={{ border: "1.5px dashed rgba(99,102,241,0.30)", background: "rgba(238,242,255,0.30)" }}>
                    + Add payment method
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ── APPEARANCE TAB ── */}
          {activeTab === "appearance" && (
            <div className="relative overflow-hidden p-6" style={glass.card}>
              <div className="pointer-events-none absolute left-0 top-0 h-[40%] w-[60%] rounded-tl-[24px]"
                style={{ background: "radial-gradient(ellipse at 20% 0%, rgba(255,255,255,0.55) 0%, transparent 65%)" }} />
              <div className="relative flex flex-col gap-6">
                <div>
                  <h2 className="text-base font-semibold text-slate-900">Appearance</h2>
                  <p className="text-xs text-slate-400 mt-0.5">Customize how Bedflow looks</p>
                </div>

                {/* Theme picker */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold tracking-[0.04em] text-slate-600">Theme</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: "light", label: "Light Glass", preview: "☀️" },
                      { id: "dark",  label: "Dark Glass",  preview: "🌙" },
                      { id: "auto",  label: "Auto",        preview: "🔄" },
                    ].map((t) => (
                      <button key={t.id}
                        className="flex flex-col items-center gap-2 rounded-[16px] py-4 transition-all hover:scale-[1.02]"
                        style={t.id === "light" ? {
                          background: "rgba(99,102,241,0.10)",
                          border: "1.5px solid rgba(99,102,241,0.35)",
                          boxShadow: "0 2px 10px rgba(99,102,241,0.12)",
                        } : {
                          background: "rgba(255,255,255,0.40)",
                          border: "1px solid rgba(255,255,255,0.65)",
                        }}>
                        <span className="text-2xl">{t.preview}</span>
                        <span className="text-xs font-medium" style={{ color: t.id === "light" ? "#4f46e5" : "#64748b" }}>{t.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Accent colour */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold tracking-[0.04em] text-slate-600">Accent Colour</label>
                  <div className="flex items-center gap-3">
                    {[
                      { color: "#6366f1", label: "Indigo"  },
                      { color: "#8b5cf6", label: "Violet"  },
                      { color: "#ec4899", label: "Pink"    },
                      { color: "#0ea5e9", label: "Sky"     },
                      { color: "#10b981", label: "Emerald" },
                      { color: "#f59e0b", label: "Amber"   },
                    ].map((c) => (
                      <button key={c.color}
                        className="h-7 w-7 rounded-full transition-all hover:scale-110"
                        style={{
                          background: c.color,
                          boxShadow: c.color === "#6366f1"
                            ? `0 0 0 2px white, 0 0 0 4px ${c.color}`
                            : `0 2px 6px ${c.color}50`,
                        }}
                        title={c.label}
                      />
                    ))}
                  </div>
                </div>

                {/* Font size */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold tracking-[0.04em] text-slate-600">Text Size</label>
                  <div className="flex items-center gap-3">
                    {["Small", "Default", "Large"].map((size, i) => (
                      <button key={size}
                        className="rounded-[10px] px-4 py-2 text-sm font-medium transition-all"
                        style={i === 1 ? {
                          background: "rgba(99,102,241,0.10)",
                          border: "1px solid rgba(99,102,241,0.30)",
                          color: "#4f46e5",
                        } : {
                          background: "rgba(255,255,255,0.40)",
                          border: "1px solid rgba(255,255,255,0.65)",
                          color: "#64748b",
                        }}>
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
