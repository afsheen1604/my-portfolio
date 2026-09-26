import type { ReactNode } from "react";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-bg min-h-screen">
      <Navbar />
      <main className="pt-16">{children}</main>
    </div>
  );
}
