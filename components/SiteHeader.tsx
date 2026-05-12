"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BedflowLogo } from "@/components/BedflowLogo";

const MARKETING = [
  ["Features", "#features"],
  ["How it works", "#how-it-works"],
  ["Pricing", "#pricing"],
  ["Testimonials", "#testimonials"],
] as const;

const bubbleIdle =
  "glass-bubble glass-bubble--idle rounded-xl px-3 py-2 text-sm font-black tracking-tight text-slate-950 sm:px-4 sm:py-2.5 sm:text-base";

const bubbleActive =
  "glass-bubble glass-bubble--active rounded-xl px-3 py-2 text-sm font-black tracking-tight text-slate-950 sm:px-4 sm:py-2.5 sm:text-base";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const onHome = pathname === "/";

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-[100] border-b border-white/40 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex min-h-[60px] max-w-[1480px] flex-wrap items-center justify-between gap-3 px-4 py-2.5 sm:px-6 sm:py-3">
        <BedflowLogo size={44} />

        <nav className="order-3 hidden w-full flex-wrap justify-center gap-1 lg:order-none lg:flex lg:w-auto lg:flex-1">
          {onHome ? (
            <>
              {MARKETING.map(([label, hash]) => (
                <a key={hash} href={hash} className={bubbleIdle}>
                  {label}
                </a>
              ))}
              <Link href="/dashboard" className={bubbleIdle}>
                Dashboard
              </Link>
            </>
          ) : (
            <>
              <Link href="/" className={bubbleIdle}>
                Home
              </Link>
              <Link href="/dashboard" className={bubbleIdle}>
                Dashboard
              </Link>
              <Link href="/setting" className={bubbleIdle}>
                Settings
              </Link>
              <Link href="/liquid-glass" className={bubbleIdle}>
                Design lab
              </Link>
            </>
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/login" className={`${bubbleIdle} hidden sm:inline-flex`}>
            Sign in
          </Link>
          <Link href="/signup" className={bubbleActive}>
            Get started
          </Link>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex flex-col justify-center gap-1.5 p-2 lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span
              className="block h-0.5 w-6 rounded-full bg-slate-900 transition-transform"
              style={
                menuOpen
                  ? { transform: "rotate(45deg) translate(5px, 6px)" }
                  : {}
              }
            />
            <span
              className="block h-0.5 w-6 rounded-full bg-slate-900 transition-opacity"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block h-0.5 w-6 rounded-full bg-slate-900 transition-transform"
              style={
                menuOpen
                  ? { transform: "rotate(-45deg) translate(5px, -6px)" }
                  : {}
              }
            />
          </button>
        </div>

        {menuOpen ? (
          <div className="order-last flex w-full flex-col gap-2 border-t border-white/35 py-4 lg:hidden">
            {onHome ? (
              <>
                {MARKETING.map(([label, hash]) => (
                  <a
                    key={hash}
                    href={hash}
                    className={bubbleIdle}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </a>
                ))}
                <Link
                  href="/dashboard"
                  className={bubbleIdle}
                  onClick={() => setMenuOpen(false)}
                >
                  Dashboard
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/"
                  className={bubbleIdle}
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/dashboard"
                  className={bubbleIdle}
                  onClick={() => setMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  href="/setting"
                  className={bubbleIdle}
                  onClick={() => setMenuOpen(false)}
                >
                  Settings
                </Link>
                <Link
                  href="/liquid-glass"
                  className={bubbleIdle}
                  onClick={() => setMenuOpen(false)}
                >
                  Design lab
                </Link>
              </>
            )}
            <Link
              href="/login"
              className={bubbleIdle}
              onClick={() => setMenuOpen(false)}
            >
              Sign in
            </Link>
          </div>
        ) : null}
      </div>
    </header>
  );
}
