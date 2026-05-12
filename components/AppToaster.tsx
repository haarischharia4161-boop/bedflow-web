"use client";

import { Toaster } from "react-hot-toast";

export function AppToaster() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        className: "text-slate-950 font-semibold",
        duration: 3200,
      }}
    />
  );
}
