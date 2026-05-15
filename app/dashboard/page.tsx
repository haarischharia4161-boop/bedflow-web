"use client";

import { useEffect, useMemo, useState } from "react";
import { createClient } from "@/lib/supabase/client";

interface Stats {
  expected: number;
  collected: number;
  pending: number;
  action_needed: number;
}

type InvoiceRow = {
  total: number | string | null;
  paid_amount: number | string | null;
  balance: number | string | null;
  status: string | null;
  due_date: string | null;
};

function num(v: number | string | null | undefined): number {
  if (v == null || v === "") return 0;
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

export default function DashboardOverviewPage() {
  const [stats, setStats] = useState<Stats>({
    expected: 0,
    collected: 0,
    pending: 0,
    action_needed: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const supabase = useMemo(() => createClient(), []);

  useEffect(() => {
    async function loadInvoiceStats() {
      setLoading(true);
      setError(null);
      const now = new Date();
      const { data, error: queryError } = await supabase
        .from("invoices")
        .select("total,paid_amount,balance,status,due_date")
        .eq("year", now.getFullYear());

      if (queryError) {
        setError(queryError.message);
        setLoading(false);
        return;
      }

      const rows = (data ?? []) as InvoiceRow[];
      setStats({
        expected: rows.reduce((s, r) => s + num(r.total), 0),
        collected: rows.reduce((s, r) => s + num(r.paid_amount), 0),
        pending: rows
          .filter((r) => r.status === "pending")
          .reduce((s, r) => s + num(r.balance), 0),
        action_needed: rows.filter(
          (r) =>
            r.status === "pending" &&
            r.due_date != null &&
            new Date(r.due_date) < now
        ).length,
      });
      setLoading(false);
    }

    void loadInvoiceStats();
  }, [supabase]);

  const cards = [
    {
      label: "Expected This Month",
      value: `₹${stats.expected.toLocaleString("en-IN")}`,
      tone: "border-blue-300/80 ring-blue-200/60 text-blue-950",
    },
    {
      label: "Collected",
      value: `₹${stats.collected.toLocaleString("en-IN")}`,
      tone: "border-emerald-300/80 ring-emerald-200/60 text-emerald-950",
    },
    {
      label: "Pending",
      value: `₹${stats.pending.toLocaleString("en-IN")}`,
      tone: "border-amber-300/80 ring-amber-200/60 text-amber-950",
    },
    {
      label: "Action Required",
      value: `${stats.action_needed} tenants`,
      tone: "border-rose-300/80 ring-rose-200/60 text-rose-950",
    },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Overview
        </h1>
        <p className="mt-1 text-sm text-slate-700 sm:text-base">
          Here is what is happening with your properties today.
        </p>
      </div>

      {error ? (
        <div
          role="alert"
          className="card-3d-clear mb-6 border border-red-200/90 p-4 text-sm font-medium text-red-900 ring-1 ring-red-200/70"
        >
          Could not load invoices: {error}
        </div>
      ) : null}

      {loading ? (
        <p className="text-sm font-semibold text-slate-800">Loading stats…</p>
      ) : null}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
        {cards.map((c) => (
          <div
            key={c.label}
            className={`card-3d-clear border p-5 sm:p-6 ${c.tone} ring-1`}
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider opacity-90 sm:mb-3 sm:text-sm">
              {c.label}
            </p>
            <p className="text-2xl font-bold tracking-tight sm:text-3xl">
              {c.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
