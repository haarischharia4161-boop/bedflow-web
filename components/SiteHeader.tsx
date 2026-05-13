"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { BedflowLogo } from "@/components/BedflowLogo";
import { createClient } from "@/lib/supabase/client";

const MARKETING = [
  ["Features", "#features"],
  ["How it works", "#how-it-works"],
  ["Pricing", "#pricing"],
  ["Testimonials", "#testimonials"],
] as const;

const navBtn =
  "btn-nav-3d px-3 py-2 text-sm sm:px-4 sm:py-2.5 sm:text-base";

const navBtnPrimary =
  "btn-nav-3d btn-nav-3d-primary px-3 py-2 text-sm sm:px-4 sm:py-2.5 sm:text-base";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const onHome = pathname === "/";

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getSession().then(({ data: { session: s } }) => setSession(s));
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, s) => setSession(s));
    return () => subscription.unsubscribe();
  }, []);

  return (
    <header className="sticky top-0 z-[100] border-b border-white/40 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex min-h-[56px] max-w-[1480px] flex-wrap items-center justify-between gap-2 px-3 py-2 sm:min-h-[60px] sm:gap-3 sm:px-6 sm:py-3">
        <BedflowLogo size={44} />

        <nav className="order-3 hidden w-full flex-wrap justify-center gap-1.5 lg:order-none lg:flex lg:w-auto lg:flex-1">
          {onHome ? (
            <>
              {MARKETING.map(([label, hash]) => (
                <a key={hash} href={hash} className={navBtn}>
                  {label}
                </a>
              ))}
              {session ? (
                <Link href="/dashboard" className={navBtn}>
                  Dashboard
                </Link>
              ) : null}
            </>
          ) : (
            <>
              <Link href="/" className={navBtn}>
                Home
              </Link>
              {session ? (
                <>
                  <Link href="/dashboard" className={navBtn}>
                    Dashboard
                  </Link>
                  <Link href="/setting" className={navBtn}>
                    Settings
                  </Link>
                </>
              ) : null}
            </>
          )}
        </nav>

        <div className="flex items-center gap-2">
          {!onHome && !session ? (
            <Link href="/login" className={`${navBtn} hidden sm:inline-flex`}>
              Sign in
            </Link>
          ) : null}
          <Link href="/signup" className={navBtnPrimary}>
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
          <div className="order-last flex w-full flex-col gap-2 border-t border-white/35 py-3 sm:py-4 lg:hidden">
            {onHome ? (
              <>
                {MARKETING.map(([label, hash]) => (
                  <a
                    key={hash}
                    href={hash}
                    className={navBtn}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </a>
                ))}
                {session ? (
                  <Link
                    href="/dashboard"
                    className={navBtn}
                    onClick={() => setMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                ) : null}
              </>
            ) : (
              <>
                <Link
                  href="/"
                  className={navBtn}
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
                {session ? (
                  <>
                    <Link
                      href="/dashboard"
                      className={navBtn}
                      onClick={() => setMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/setting"
                      className={navBtn}
                      onClick={() => setMenuOpen(false)}
                    >
                      Settings
                    </Link>
                  </>
                ) : null}
                {!session ? (
                  <Link
                    href="/login"
                    className={navBtn}
                    onClick={() => setMenuOpen(false)}
                  >
                    Sign in
                  </Link>
                ) : null}
              </>
            )}
          </div>
        ) : null}
      </div>
    </header>
  );
}
