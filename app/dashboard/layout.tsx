"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { createClient } from "@/lib/supabase/client";

const NAV = [
  { href: "/dashboard", label: "Overview", icon: "📊" },
  { href: "/dashboard/properties", label: "Properties", icon: "🏠" },
  { href: "/dashboard/tenants", label: "Tenants", icon: "👥" },
  { href: "/dashboard/invoices", label: "Invoices", icon: "📄" },
  { href: "/setting", label: "Settings", icon: "⚙️" },
] as const;

function navActive(href: string, pathname: string) {
  if (href === "/dashboard") return pathname === "/dashboard";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const supabase = useMemo(() => createClient(), []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  async function signOut() {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  const NavItems = ({ onNavigate }: { onNavigate?: () => void }) => (
    <nav className="flex flex-col gap-1.5 p-2 sm:gap-2 sm:p-3" aria-label="Dashboard">
      {NAV.map((item) => {
        const active = navActive(item.href, pathname);
        return (
          <Link
            key={item.href}
            href={item.href}
            data-active={active}
            className="sidebar-link-3d"
            onClick={onNavigate}
          >
            <span className="text-lg" aria-hidden>
              {item.icon}
            </span>
            {item.label}
          </Link>
        );
      })}
      <button
        type="button"
        onClick={() => {
          void signOut();
          onNavigate?.();
        }}
        className="btn-nav-3d mt-3 w-full justify-start pl-4 sm:mt-4"
      >
        Sign out
      </button>
    </nav>
  );

  const currentLabel =
    NAV.find((n) => navActive(n.href, pathname))?.label ?? "Dashboard";

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-transparent lg:min-h-screen lg:flex-row">
      {/* Mobile drawer backdrop */}
      {drawerOpen ? (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-[140] bg-slate-900/40 backdrop-blur-sm lg:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      ) : null}

      {/* Sidebar — drawer on small screens, column on lg+ */}
      <aside
        id="dashboard-sidebar"
        className={`fixed inset-y-0 left-0 z-[150] flex w-[min(88vw,280px)] flex-col border-r border-white/50 bg-white/75 shadow-xl backdrop-blur-xl transition-transform duration-200 ease-out lg:static lg:z-auto lg:w-56 lg:min-w-56 lg:translate-x-0 lg:bg-white/55 lg:shadow-none ${
          drawerOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between gap-2 border-b border-white/45 px-3 py-3 sm:px-4">
          <Link
            href="/dashboard"
            className="flex min-w-0 items-center gap-2.5 text-slate-950"
            onClick={() => setDrawerOpen(false)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- favicon */}
            <img
              src="/icon.ico"
              alt="Bedflow"
              width={36}
              height={36}
              className="shrink-0 rounded-lg object-contain"
            />
            <span className="truncate text-lg font-bold tracking-tight">
              Bedflow
            </span>
          </Link>
          <button
            type="button"
            className="btn-nav-3d px-2 py-1.5 text-sm lg:hidden"
            aria-label="Close sidebar"
            onClick={() => setDrawerOpen(false)}
          >
            ✕
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          <NavItems onNavigate={() => setDrawerOpen(false)} />
        </div>
      </aside>

      {/* Main column */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Mobile top bar */}
        <header className="sticky top-0 z-[120] flex items-center gap-2 border-b border-white/45 bg-white/80 px-3 py-2.5 backdrop-blur-md lg:hidden">
          <button
            type="button"
            className="btn-nav-3d px-3 py-2 text-sm font-bold"
            aria-expanded={drawerOpen}
            aria-controls="dashboard-sidebar"
            onClick={() => setDrawerOpen(true)}
          >
            Menu
          </button>
          <p className="min-w-0 flex-1 truncate text-center text-sm font-bold text-slate-900">
            {currentLabel}
          </p>
          <span className="w-14 shrink-0" aria-hidden />
        </header>

        <main className="flex-1 overflow-x-hidden">{children}</main>
      </div>
    </div>
  );
}
