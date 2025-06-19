"use client";

import dynamic from "next/dynamic";
import Sender from "@/components/Sender";

const Receiver = dynamic(() => import("@/components/Receiver"), {
  ssr: false,
});

export default function Home() {
  return (
    <main style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <h1>Real-Time Location Sharing</h1>
      <Sender />
      <Receiver />
    </main>
  );
}

