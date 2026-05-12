"use client";

import { useState } from "react";

const webStats = [
  { label: "Active tenants", value: "342", delta: "+18 this month" },
  { label: "Rent collected", value: "98.4%", delta: "on schedule" },
  { label: "Open tickets", value: "12", delta: "4 urgent" },
];

const mobileActions = [
  { title: "Pay rent", detail: "UPI • card • autopay", hint: "1 tap" },
  { title: "Maintenance", detail: "Photo + priority", hint: "New" },
  { title: "Invoices", detail: "PDF & mail", hint: "View" },
];

type TabKey = "web" | "app" | "tokens";

export default function LiquidGlassShowcasePage() {
  const [tab, setTab] = useState<TabKey>("web");

  return (
    <main className="min-h-screen w-full overflow-x-hidden pb-10 text-slate-950 lg:pb-14">
      <div className="border-b border-white/30 bg-white/30 px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-900 sm:text-base">
          Bedflow · Glass surface lab
        </p>
        <p className="mt-3 max-w-2xl text-lg font-semibold text-slate-950 sm:text-xl">
          UI reference for dashboards and handheld surfaces — same chrome as the rest of the app.
        </p>
      </div>

      <div className="px-4 pt-8 sm:px-5 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.02fr)] lg:gap-x-5 lg:px-6 lg:pt-10 xl:px-8 xl:gap-x-8">
        {/* Hero column — asymmetric, intentional rhythm */}
        <section className="relative lg:pr-2">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-1 top-0 hidden h-[min(520px,70vh)] w-px bg-gradient-to-b from-sky-500/80 via-white/70 to-transparent lg:block"
          />
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-900 sm:text-base lg:text-lg">
            Interface · 2026
          </p>
          <h1 className="mt-4 max-w-[18ch] text-[2.75rem] font-semibold leading-[1.03] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl xl:text-[4.5rem]">
            One liquid skin for web and handheld.
          </h1>
          <p className="mt-6 max-w-[40ch] text-xl leading-relaxed text-slate-950 sm:text-2xl lg:text-3xl lg:leading-snug">
            Built around Bedflow’s ops layer: dense when you need metrics, airy
            when tenants pay or file tickets. Nothing extra—only what ships.
          </p>

          {/* Segmented control — not generic pills */}
          <div className="glass-bubble-track mt-10 inline-flex w-full flex-wrap justify-start sm:w-auto">
            {(
              [
                ["web", "Website"],
                ["app", "Handheld"],
                ["tokens", "Tokens"],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setTab(key)}
                className={
                  tab === key
                    ? "glass-bubble glass-bubble--active min-w-[7.5rem] rounded-2xl px-6 py-3.5 text-2xl font-black tracking-tight text-black sm:min-w-0 sm:px-8 sm:py-4 sm:text-3xl lg:text-4xl"
                    : "glass-bubble glass-bubble--idle min-w-[7.5rem] rounded-2xl px-6 py-3.5 text-2xl font-black tracking-tight text-slate-900 transition-colors hover:text-black sm:min-w-0 sm:px-8 sm:py-4 sm:text-3xl lg:text-4xl"
                }
              >
                {label}
              </button>
            ))}
          </div>

          <dl className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div className="glass-panel rounded-2xl p-6 sm:p-7">
              <dt className="text-base font-semibold uppercase tracking-[0.1em] text-slate-900 sm:text-lg">
                Density mode
              </dt>
              <dd className="mt-4 text-2xl font-semibold text-slate-950 sm:text-3xl lg:text-4xl">
                Operations-first grid
              </dd>
              <dd className="mt-3 text-lg leading-relaxed text-slate-950 sm:text-xl">
                KPIs breathe; nothing crowds the glass edge.
              </dd>
            </div>
            <div className="glass-panel rounded-2xl p-6 sm:p-7">
              <dt className="text-base font-semibold uppercase tracking-[0.1em] text-slate-900 sm:text-lg">
                Tenant mode
              </dt>
              <dd className="mt-4 text-2xl font-semibold text-slate-950 sm:text-3xl lg:text-4xl">
                Thumb-height rows
              </dd>
              <dd className="mt-3 text-lg leading-relaxed text-slate-950 sm:text-xl">
                Stack reads top-to-bottom like a native sheet.
              </dd>
            </div>
          </dl>
        </section>

        {/* Canvas column — fills width, phone doesn’t float in blank margin */}
        <section className="mt-12 flex flex-col gap-6 lg:mt-0 lg:min-h-[min(100vh-7rem,900px)]">
          {tab === "tokens" && (
            <div className="glass-panel flex flex-1 flex-col justify-center rounded-[1.75rem] p-7 sm:p-9">
              <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl lg:text-5xl">
                Tokens you’re looking at
              </h2>
              <ul className="mt-10 space-y-5 font-mono text-lg leading-relaxed text-neutral-950 sm:text-xl lg:text-2xl">
                <li>.glass-panel — shells, dashboards</li>
                <li>.glass-chip — stat tiles, dense rows</li>
                <li>.glass-bubble — tabs & actions (neutral fill, no filter on type)</li>
                <li>Dynamic orbs — global layout backdrop</li>
              </ul>
            </div>
          )}

          {tab === "web" && (
            <article className="glass-panel flex flex-1 flex-col rounded-[1.75rem] p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/25 pb-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900 sm:text-base lg:text-lg">
                    Dashboard · Bangalore cluster
                  </p>
                  <h2 className="mt-3 text-4xl font-semibold text-slate-950 sm:text-5xl lg:text-6xl">
                    Today&apos;s collection pulse
                  </h2>
                </div>
                <span className="glass-bubble glass-bubble--active shrink-0 rounded-full px-6 py-3 text-2xl font-black tracking-tight text-neutral-950 sm:text-3xl">
                  Live
                </span>
              </div>

              <div className="mt-7 grid flex-1 gap-4 sm:grid-cols-3">
                {webStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="glass-chip flex flex-col rounded-2xl p-5 sm:p-6"
                  >
                    <p className="text-lg font-semibold text-slate-950 sm:text-xl lg:text-2xl">
                      {stat.label}
                    </p>
                    <p className="mt-3 text-5xl font-semibold tabular-nums tracking-tight text-slate-950 sm:text-[3.25rem] lg:text-[3.5rem]">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-lg text-slate-950 sm:text-xl">{stat.delta}</p>
                  </div>
                ))}
              </div>

              <div className="glass-chip mt-6 rounded-2xl p-6 sm:mt-7">
                <div className="flex flex-wrap items-end justify-between gap-2">
                  <p className="text-xl font-semibold text-slate-950 sm:text-2xl lg:text-3xl">
                    Rent cycle — February
                  </p>
                  <p className="text-xl tabular-nums font-bold text-neutral-950 sm:text-2xl lg:text-3xl">
                    84%
                  </p>
                </div>
                <div className="mt-4 h-5 rounded-full bg-slate-900/10 ring-1 ring-slate-900/15 sm:h-6">
                  <div className="h-full w-[84%] rounded-full bg-gradient-to-r from-sky-500 to-violet-600 shadow-inner" />
                </div>
                <p className="mt-4 text-lg leading-relaxed text-slate-950 sm:text-xl lg:text-2xl">
                  Twelve units cleared; reminders queued for remaining three.
                </p>
              </div>
            </article>
          )}

          {tab === "app" && (
            <div className="flex flex-1 flex-col items-stretch lg:flex-row lg:items-stretch lg:gap-5">
              <article className="glass-panel flex min-h-[420px] flex-1 flex-col rounded-[1.75rem] p-6 sm:p-8 lg:min-h-0">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900 sm:text-base lg:text-lg">
                  Tenant hub
                </p>
                <h2 className="mt-3 text-4xl font-semibold text-slate-950 sm:text-5xl lg:text-6xl">
                  Actions sized for one hand
                </h2>
                <p className="mt-5 max-w-prose text-xl leading-relaxed text-slate-950 sm:text-2xl lg:text-3xl">
                  Each row is a glass capsule: label, subline, and a tight
                  affordance on the right—same material as your web chips.
                </p>
                <ul className="mt-8 space-y-4">
                  {mobileActions.map((row) => (
                    <li
                      key={row.title}
                      className="glass-bubble glass-bubble--idle flex items-center justify-between gap-3 rounded-2xl px-6 py-5 sm:py-6"
                    >
                      <div className="min-w-0">
                        <p className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
                          {row.title}
                        </p>
                        <p className="mt-1 text-lg font-semibold text-slate-950 sm:text-xl lg:text-2xl">
                          {row.detail}
                        </p>
                      </div>
                      <span className="shrink-0 text-xl font-black tabular-nums tracking-tight text-neutral-950 sm:text-2xl">
                        {row.hint}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>

              {/* Device bezel — hugs the canvas, not centered in whale space */}
              <div className="relative mt-6 flex justify-center lg:mt-0 lg:w-[min(42%,320px)] lg:shrink-0 lg:justify-end">
                <div className="glass-panel relative w-full max-w-[290px] rounded-[2.35rem] p-2 lg:sticky lg:top-24 lg:max-w-none lg:origin-top lg:-rotate-2">
                  <div className="overflow-hidden rounded-[2rem] border border-black/35 bg-[#0c1222] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                    <div className="flex justify-center pb-2 pt-3">
                      <span className="h-1.5 w-16 rounded-full bg-white/25" />
                    </div>
                    <div className="space-y-3 px-3 pb-5 pt-2">
                      <div className="glass-bubble glass-bubble--active rounded-2xl p-5">
                        <p className="text-lg font-black uppercase tracking-wide text-neutral-950">
                          Good evening
                        </p>
                        <p className="mt-2 text-4xl font-black tracking-tight text-slate-950">
                          Arjun
                        </p>
                      </div>
                      {mobileActions.slice(0, 2).map((row) => (
                        <div
                          key={row.title}
                          className="glass-bubble glass-bubble--idle flex justify-between rounded-xl px-4 py-3"
                        >
                          <span className="text-xl font-black tracking-tight text-slate-950">
                            {row.title}
                          </span>
                          <span className="text-lg font-black text-neutral-950">
                            {row.hint}
                          </span>
                        </div>
                      ))}
                      <div className="rounded-xl border border-white/25 bg-white/10 px-3 py-3 text-center text-base font-semibold text-white sm:text-lg">
                        Pay ₹12,400 by 12 Feb
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
