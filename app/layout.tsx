import type { Metadata } from "next";
import { AppToaster } from "@/components/AppToaster";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bedflow",
  description: "Enterprise Rental Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased text-slate-950" style={{ fontFamily: "-apple-system, 'SF Pro Display', 'SF Pro Text', BlinkMacSystemFont, system-ui, sans-serif" }}>

        {/* Dynamic solid background */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#dce9ff]">
          <div
            className="dynamic-orb -right-[8%] -top-[14%] h-[78vh] w-[62vw]"
            style={{
              background:
                "radial-gradient(circle at 30% 40%, #3b82f6 0%, #2563eb 58%, transparent 72%)",
            }}
          />
          <div
            className="dynamic-orb wave left-[-16%] top-[10%] h-[70vh] w-[62vw]"
            style={{
              background:
                "radial-gradient(circle at 56% 48%, #8b5cf6 0%, #7c3aed 52%, transparent 72%)",
            }}
          />
          <div
            className="dynamic-orb left-[12%] bottom-[-22%] h-[68vh] w-[56vw]"
            style={{
              background:
                "radial-gradient(circle at 45% 52%, #06b6d4 0%, #0891b2 56%, transparent 72%)",
              animationDuration: "18s",
            }}
          />
          <div
            className="dynamic-orb wave right-[-14%] bottom-[-25%] h-[64vh] w-[58vw]"
            style={{
              background:
                "radial-gradient(circle at 40% 40%, #f97316 0%, #ea580c 54%, transparent 72%)",
              animationDuration: "22s",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.36)_0%,rgba(255,255,255,0)_62%)]" />
        </div>

        {/* ── APP CONTENT ─────────────────────────── */}
        <div className="relative z-10 flex min-h-screen flex-col">
          <SiteHeader />
          <AppToaster />
          <div className="flex flex-1 flex-col">{children}</div>
        </div>
        
      </body>
    </html>
  );
}