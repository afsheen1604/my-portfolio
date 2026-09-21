import type { ReactNode } from "react";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      <main className="pt-16">{children}</main>
    </div>
  );
}
