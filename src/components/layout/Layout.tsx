import type { ReactNode } from "react";
import Navbar from "./Navbar";
import PolygonBackground from "../ui/PolygonBackground";
import NeuralBackground from "../ui/NeuralBackground";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-bg min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 background-grid">
        <PolygonBackground />
        <NeuralBackground />
      </div>
      <Navbar />
      <main className="relative pt-16">{children}</main>
    </div>
  );
}
