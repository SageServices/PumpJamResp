import type { MetaFunction } from "@remix-run/node";
import {
  Navigation,
  Hero,
  TokenInfo,
  ClientOnly,
  MatrixRain
} from "~/components";

export const meta: MetaFunction = () => {
  return [
    { title: "Pump Up The Jam 🚀" },
    { name: "description", content: "The most energetic meme coin in crypto!" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-orange-400">
      <ClientOnly>
        <MatrixRain />
      </ClientOnly>
      <Navigation />
      <main className="container mx-auto px-4 relative" style={{ zIndex: 2 }}>
        <Hero />
        <TokenInfo />
      </main>
    </div>
  );
}